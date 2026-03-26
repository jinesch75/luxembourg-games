import { useState, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { getCurrentPuzzle, COLOR_META, PUZZLES } from './data/puzzles'
import { weekIndex } from '../../utils/dateUtils'
import { useGameContent } from '../../hooks/useGameContent'
import { trackGameEvent } from '../../utils/analytics'

const MAX_ATTEMPTS = 4

function shuffle(arr, seed) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.abs((seed * 9301 + 49297) % 233280) % (i + 1)
    seed = j
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function ConnectGame() {
  const { t } = useTranslation()

  // Use server-side content override if available
  const allPuzzles = useGameContent('puzzles', PUZZLES)
  const puzzle     = useMemo(() => getCurrentPuzzle(weekIndex(), allPuzzles), [allPuzzles])

  // Build flat list of all items with their group info
  const allItems = puzzle.groups.flatMap(g =>
    g.items.map(item => ({ item, color: g.color, title: g.title }))
  )

  const [tiles, setTiles]           = useState(() => shuffle(allItems.map(i => i.item), weekIndex() * 17))
  const [selected, setSelected]     = useState([])
  const [solved, setSolved]         = useState([]) // array of colors solved

  // If the puzzle changes due to a server-side override, re-initialise tiles
  useEffect(() => {
    const freshItems = puzzle.groups.flatMap(g => g.items.map(item => item))
    setTiles(shuffle(freshItems, weekIndex() * 17))
    setSolved([])
    setSelected([])
  }, [puzzle.id])
  const [attempts, setAttempts]     = useState(0)
  const [message, setMessage]       = useState(null)
  const [shakeItems, setShakeItems] = useState([])
  const [step, setStep]             = useState('intro')
  const [mistakes, setMistakes]     = useState(0)

  const remaining = tiles.filter(tile =>
    !solved.includes(allItems.find(i => i.item === tile)?.color)
  )

  const groupOf = (item) => allItems.find(i => i.item === item)

  const toggleSelect = (item) => {
    if (solved.includes(groupOf(item)?.color)) return
    if (message) setMessage(null)
    setSelected(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : prev.length < 4 ? [...prev, item] : prev
    )
  }

  const handleSubmit = () => {
    if (selected.length !== 4) return

    const colors = selected.map(item => groupOf(item)?.color)
    const isUnique = new Set(colors).size === 1

    if (isUnique) {
      const color = colors[0]
      setSolved(prev => [...prev, color])
      setSelected([])
      setMessage({ type: 'correct', text: t('connect.correct') })
      setTimeout(() => setMessage(null), 1800)

      // Check if all solved
      if (solved.length + 1 >= puzzle.groups.length) {
        trackGameEvent('connect', 'complete', { solved: solved.length + 1, mistakes })
        setTimeout(() => setStep('done'), 800)
      }
    } else {
      // Check if one away
      const colorCounts = {}
      colors.forEach(c => { colorCounts[c] = (colorCounts[c] || 0) + 1 })
      const maxCount = Math.max(...Object.values(colorCounts))

      setAttempts(a => a + 1)
      setMistakes(m => m + 1)
      setShakeItems([...selected])
      setTimeout(() => setShakeItems([]), 500)

      if (maxCount === 3) {
        setMessage({ type: 'warning', text: t('connect.oneAway') })
      } else {
        setMessage({ type: 'error', text: t('connect.wrong') })
      }

      if (attempts + 1 >= MAX_ATTEMPTS) {
        setTimeout(() => setStep('done'), 600)
      }
    }
  }

  if (step === 'intro') return <Intro puzzle={puzzle} t={t} onStart={() => { trackGameEvent('connect', 'start'); setStep('game') }} />
  if (step === 'done')  return <Done  puzzle={puzzle} solved={solved} mistakes={mistakes} t={t} allItems={allItems} onReplay={() => {
    setSolved([]); setSelected([]); setAttempts(0); setMistakes(0); setMessage(null); setStep('game')
  }} />

  const remainingAttempts = MAX_ATTEMPTS - attempts

  return (
    <div className="container" style={{ paddingTop: 20 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <div>
          <h2 style={{ fontSize: '1.1rem', margin: 0 }}>{t('connect.title')}</h2>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            {t('connect.weeklyPuzzle')} — {puzzle.title}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {Array.from({ length: MAX_ATTEMPTS }).map((_, i) => (
            <div key={i} style={{
              width: 10, height: 10, borderRadius: '50%',
              background: i >= remainingAttempts ? 'var(--red)' : 'var(--gray-300)'
            }} />
          ))}
        </div>
      </div>

      {/* Message */}
      {message && (
        <div className="animate-fade-in" style={{
          textAlign: 'center', padding: '10px 16px', borderRadius: 'var(--radius)',
          marginBottom: 12, fontWeight: 700, fontSize: '0.9rem',
          background: message.type === 'correct' ? '#D1FAE5' : message.type === 'warning' ? '#FEF3C7' : '#FEE2E2',
          color: message.type === 'correct' ? '#065F46' : message.type === 'warning' ? '#92400E' : '#991B1B'
        }}>
          {message.text}
        </div>
      )}

      {/* Solved groups */}
      {solved.map(color => {
        const group = puzzle.groups.find(g => g.color === color)
        const meta  = COLOR_META[color]
        return (
          <div key={color} className="animate-pop-in" style={{
            background: meta.bg, border: `2px solid ${meta.border}`,
            borderRadius: 'var(--radius)', padding: '12px 16px', marginBottom: 8, textAlign: 'center'
          }}>
            <div style={{ fontWeight: 800, fontSize: '0.9rem', color: meta.text, marginBottom: 4 }}>
              {group.title.toUpperCase()}
            </div>
            <div style={{ fontSize: '0.85rem', color: meta.text, opacity: 0.8 }}>
              {group.items.join(' · ')}
            </div>
          </div>
        )
      })}

      {/* Game grid */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 8, marginBottom: 16
      }}>
        {tiles
          .filter(tile => !solved.includes(groupOf(tile)?.color))
          .map(tile => {
            const isSelected = selected.includes(tile)
            const isShaking  = shakeItems.includes(tile)
            return (
              <button
                key={tile}
                onClick={() => toggleSelect(tile)}
                className={isShaking ? 'animate-shake' : ''}
                style={{
                  padding: '14px 8px',
                  borderRadius: 'var(--radius)',
                  border: `2px solid ${isSelected ? '#1D4ED8' : 'var(--border)'}`,
                  background: isSelected ? '#EFF6FF' : 'white',
                  color: isSelected ? '#1D4ED8' : 'var(--gray-700)',
                  fontFamily: 'var(--font)',
                  fontWeight: isSelected ? 700 : 500,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  textAlign: 'center',
                  lineHeight: 1.3,
                  minHeight: 56,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.12s',
                  transform: isSelected ? 'scale(1.02)' : 'scale(1)'
                }}
              >
                {tile}
              </button>
            )
          })}
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={() => setSelected([])}
          disabled={selected.length === 0}
          className="btn btn-secondary"
          style={{ flex: 1 }}
        >
          {t('connect.deselect')}
        </button>
        <button
          onClick={handleSubmit}
          disabled={selected.length !== 4}
          className="btn btn-primary"
          style={{ flex: 2 }}
        >
          {t('connect.submit')} ({selected.length}/4)
        </button>
      </div>

      <div style={{ textAlign: 'center', marginTop: 12, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
        {remainingAttempts > 0
          ? `${remainingAttempts} ${t('connect.attemptsLeft')}`
          : t('connect.noAttempts')}
      </div>
    </div>
  )
}

function Intro({ puzzle, t, onStart }) {
  return (
    <div className="container" style={{ paddingTop: 24 }}>
      <div style={{
        background: 'linear-gradient(135deg, #5B21B6 0%, #8B5CF6 100%)',
        borderRadius: 'var(--radius-xl)', padding: '28px 24px', marginBottom: 24,
        color: 'white', textAlign: 'center'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>🔗</div>
        <h1 style={{ color: 'white', marginBottom: 8 }}>{t('connect.title')}</h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>{t('connect.subtitle')}</p>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ fontWeight: 700, marginBottom: 12 }}>{t('connect.weeklyPuzzle')}: "{puzzle.title}"</div>
        <p style={{ fontSize: '0.9rem', color: 'var(--gray-700)', margin: 0 }}>{t('connect.instructions')}</p>
        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {Object.entries(COLOR_META).map(([color, meta]) => (
            <div key={color} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              background: meta.bg, borderRadius: 8, padding: '8px 12px'
            }}>
              <div style={{ width: 14, height: 14, borderRadius: '50%', background: meta.border, flexShrink: 0 }} />
              <span style={{ fontSize: '0.85rem', color: meta.text, fontWeight: 600 }}>{meta.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: '#F0F9FF', border: '1px solid #BAE6FD', borderRadius: 'var(--radius)', padding: 12, marginBottom: 20 }}>
        <div style={{ fontSize: '0.8rem', color: '#0369A1' }}>
          🔁 {t('connect.newPuzzle')}
        </div>
      </div>

      <button onClick={onStart} className="btn btn-full btn-lg" style={{ background: '#7C3AED', color: 'white' }}>
        {t('quiz.startBtn')} →
      </button>
    </div>
  )
}

function Done({ puzzle, solved, mistakes, t, allItems, onReplay }) {
  const allSolved = solved.length === puzzle.groups.length
  return (
    <div className="container" style={{ paddingTop: 24 }}>
      <div style={{
        background: allSolved
          ? 'linear-gradient(135deg, #5B21B6 0%, #8B5CF6 100%)'
          : 'linear-gradient(135deg, var(--gray-600) 0%, var(--gray-700) 100%)',
        borderRadius: 'var(--radius-xl)', padding: '28px 24px', marginBottom: 24,
        color: 'white', textAlign: 'center'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: 8 }}>{allSolved ? '🎉' : '💪'}</div>
        <h2 style={{ color: 'white', marginBottom: 4 }}>
          {allSolved ? t('connect.solved') : t('connect.results')}
        </h2>
        {allSolved && (
          <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
            {t('connect.solvedWith')} {mistakes} {t('connect.mistakes')}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
        {puzzle.groups.map(group => {
          const meta = COLOR_META[group.color]
          const wasSolved = solved.includes(group.color)
          return (
            <div key={group.color} style={{
              background: wasSolved ? meta.bg : 'var(--gray-100)',
              border: `2px solid ${wasSolved ? meta.border : 'var(--border)'}`,
              borderRadius: 'var(--radius)', padding: '14px 16px',
              opacity: wasSolved ? 1 : 0.6
            }}>
              <div style={{ fontWeight: 800, fontSize: '0.85rem', color: wasSolved ? meta.text : 'var(--gray-500)', marginBottom: 6 }}>
                {group.title.toUpperCase()}
                {!wasSolved && ' ✗'}
              </div>
              <div style={{ fontSize: '0.85rem', color: wasSolved ? meta.text : 'var(--gray-500)', opacity: 0.85 }}>
                {group.items.join(' · ')}
              </div>
            </div>
          )
        })}
      </div>

      <button onClick={onReplay} className="btn btn-full" style={{ background: '#7C3AED', color: 'white' }}>
        {t('connect.playAgain')}
      </button>
    </div>
  )
}
