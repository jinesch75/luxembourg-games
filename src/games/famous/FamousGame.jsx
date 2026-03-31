import { useState, useMemo, useEffect, useRef } from 'react'
import { Camera } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { PEOPLE as STATIC_PEOPLE, getSubLevelPeople } from './data/people'
import { trackGameEvent } from '../../utils/analytics'

// ─── Category colours (visual only — not used for progression) ───────────────
const CAT_COLORS = {
  royalty:    { bg: '#FEF3C7', text: '#D97706', icon: '👑' },
  politics:   { bg: '#DBEAFE', text: '#1D4ED8', icon: '🏛️' },
  history:    { bg: '#FEF3C7', text: '#B45309', icon: '📜' },
  sport:      { bg: '#D1FAE5', text: '#065F46', icon: '⚽' },
  culture:    { bg: '#FCE7F3', text: '#BE185D', icon: '🎭' },
  music:      { bg: '#F3E8FF', text: '#7C3AED', icon: '🎵' },
  science:    { bg: '#CFFAFE', text: '#0E7490', icon: '🔬' },
  media:      { bg: '#FEE2E2', text: '#DC2626', icon: '📺' },
}

// ─── Level system (mirrors quiz game: 5 levels × 5 sub-levels = 125 people) ──
export const FAMOUS_LEVELS = [
  { id: 'newcomer',   name: 'Newcomer',   icon: '🌱', color: '#6B7280', bg: '#F3F4F6', subLevels: 5 },
  { id: 'explorer',   name: 'Explorer',   icon: '🏘️', color: '#059669', bg: '#D1FAE5', subLevels: 5 },
  { id: 'resident',   name: 'Resident',   icon: '🌆', color: '#2563EB', bg: '#DBEAFE', subLevels: 5 },
  { id: 'citizen',    name: 'Citizen',    icon: '🏛️', color: '#7C3AED', bg: '#F3E8FF', subLevels: 5 },
  { id: 'ambassador', name: 'Ambassador', icon: '⭐', color: '#D97706', bg: '#FEF3C7', subLevels: 5 },
]

const POINTS_PER_CORRECT = 200

// ─── Spelling-game-style inline styles ───────────────────────────────────────
const S = {
  page: {
    minHeight: '100vh',
    background: '#F6F5F1',
    fontFamily: "'Inter', system-ui, sans-serif",
    color: '#1E293B',
    paddingBottom: 60,
  },
  container: {
    maxWidth: 720,
    margin: '0 auto',
    padding: '0 16px',
  },
  card: {
    background: '#FFFFFF',
    border: '1px solid #E5E4DF',
    borderRadius: 16,
    padding: '24px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
  },
  btn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '12px 24px',
    borderRadius: 10,
    border: 'none',
    cursor: 'pointer',
    fontFamily: "'Inter', system-ui, sans-serif",
    fontWeight: 600,
    fontSize: 15,
    transition: 'all 0.15s ease',
    textDecoration: 'none',
  },
  btnPrimary: {
    background: '#C4222E',
    color: '#fff',
  },
  btnSecondary: {
    background: '#FFFFFF',
    color: '#1E293B',
    border: '1px solid #D4D3CE',
  },
}

// ─── Progress helpers (same logic as quiz game) ──────────────────────────────
function parseProgress(progress) {
  const completed = progress?.completedSubLevels || {}
  for (let li = 0; li < FAMOUS_LEVELS.length; li++) {
    const lvl = FAMOUS_LEVELS[li]
    const done = completed[lvl.id] || 0
    if (done < lvl.subLevels) return { levelIdx: li, subLevel: done + 1 }
  }
  return { levelIdx: FAMOUS_LEVELS.length - 1, subLevel: FAMOUS_LEVELS.at(-1).subLevels, finished: true }
}

function totalSubLevelsDone(progress) {
  const completed = progress?.completedSubLevels || {}
  return FAMOUS_LEVELS.reduce((acc, lvl) => acc + (completed[lvl.id] || 0), 0)
}

// ─── Shuffle options (Fisher-Yates, same as quiz game) ───────────────────────
function shufflePersonOptions(p) {
  const n = p.options.length
  const indices = Array.from({ length: n }, (_, i) => i)
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[indices[i], indices[j]] = [indices[j], indices[i]]
  }
  return {
    ...p,
    options: indices.map(i => p.options[i]),
    answer: indices.indexOf(p.answer),
  }
}

// ─── Photo mapping cache (fetched once from /api/photos) ───────────────────
let _photoMapPromise = null
let _photoMap = null

function getPhotoMap() {
  if (_photoMap) return Promise.resolve(_photoMap)
  if (!_photoMapPromise) {
    _photoMapPromise = fetch('/api/photos')
      .then(r => r.ok ? r.json() : {})
      .then(map => { _photoMap = map; return map })
      .catch(() => { _photoMap = {}; return {} })
  }
  return _photoMapPromise
}

// ─── Photo image component (uses Railway-hosted photos, falls back to Wikipedia) ─
function WikiImage({ personId, wikiTitle, size = 220, noPhoto = false, photoPos = null, imageUrl = null }) {
  const [src, setSrc] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (noPhoto) { setError(true); return }
    let cancelled = false

    // 1. Try local photo from Railway server first
    getPhotoMap().then(map => {
      if (cancelled) return
      const entry = map[personId]
      if (entry?.file) {
        setSrc(`/photos/${entry.file}`)
        return
      }
      // 2. Fall back to direct imageUrl if provided
      if (imageUrl) { setSrc(imageUrl); return }
      // 3. Fall back to Wikipedia API
      if (!wikiTitle) { setError(true); return }
      fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wikiTitle)}`)
        .then(r => { if (!r.ok) throw new Error(); return r.json() })
        .then(data => {
          if (cancelled) return
          const url = data.originalimage?.source || data.thumbnail?.source
          if (url) setSrc(url)
          else setError(true)
        })
        .catch(() => { if (!cancelled) setError(true) })
    })

    return () => { cancelled = true }
  }, [personId, wikiTitle, noPhoto, imageUrl])

  // Default object-position: show from top so faces are clearly visible
  // Custom photoPos can override for specific photos
  const objPosition = photoPos || 'center top'

  return (
    <div style={{
      width: size, height: size, borderRadius: 16, overflow: 'hidden',
      background: '#E5E4DF', margin: '0 auto',
      boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
      border: '3px solid #fff',
    }}>
      {error || !src ? (
        <div style={{
          width: '100%', height: '100%',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: 8, background: '#F1F0EC',
        }}>
          <span style={{ fontSize: 48 }}>👤</span>
          {noPhoto
            ? <span style={{ fontSize: 11, color: '#94A3B8' }}>No photo available</span>
            : !error && <span style={{ fontSize: 11, color: '#94A3B8' }}>Loading…</span>
          }
        </div>
      ) : (
        <img
          src={src}
          alt="Who is this person?"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: objPosition, display: 'block' }}
          onError={() => setError(true)}
        />
      )}
    </div>
  )
}

// ─── Progress bar (spelling-game style) ──────────────────────────────────────
function ProgressBar({ current, total, color }) {
  const pct = total > 0 ? ((current / total) * 100) : 0
  return (
    <div style={{ background: '#E5E4DF', borderRadius: 99, height: 6, overflow: 'hidden', marginBottom: 4 }}>
      <div style={{
        height: '100%', width: `${pct}%`,
        background: color || '#C4222E',
        borderRadius: 99, transition: 'width 0.4s ease',
      }} />
    </div>
  )
}

function Stars({ score, total }) {
  const pct = total > 0 ? score / total : 0
  const stars = pct >= 0.95 ? 3 : pct >= 0.75 ? 2 : pct >= 0.5 ? 1 : 0
  return (
    <div style={{ display: 'flex', gap: 6, justifyContent: 'center', fontSize: 32, letterSpacing: 4 }}>
      {[0, 1, 2].map(i => (
        <span key={i} style={{ opacity: i < stars ? 1 : 0.2, filter: i < stars ? 'none' : 'grayscale(1)' }}>⭐</span>
      ))}
    </div>
  )
}

// ─── Level Badge Display (same as quiz game) ─────────────────────────────────
function LevelMapBadges({ progress }) {
  const { levelIdx: curLvlIdx } = parseProgress(progress)
  return (
    <div style={{ display: 'flex', gap: 6, justifyContent: 'space-between' }}>
      {FAMOUS_LEVELS.map((level, li) => {
        const done = (progress?.completedSubLevels || {})[level.id] || 0
        const isCurrentLevel = li === curLvlIdx
        const isFullyDone = done >= level.subLevels
        const isLocked = li > curLvlIdx
        return (
          <div key={level.id} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            opacity: isLocked ? 0.3 : 1,
            transform: isCurrentLevel ? 'scale(1.12)' : 'scale(1)',
            transition: 'transform 0.2s',
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: isFullyDone ? level.color : isCurrentLevel ? level.bg : '#F3F4F6',
              border: isCurrentLevel ? `2px solid ${level.color}` : '2px solid transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
              boxShadow: isCurrentLevel ? `0 0 8px ${level.color}40` : 'none',
            }}>
              {isLocked ? '🔒' : level.icon}
            </div>
            <div style={{ display: 'flex', gap: 2 }}>
              {Array.from({ length: level.subLevels }).map((_, si) => (
                <div key={si} style={{
                  width: 5, height: 5, borderRadius: '50%',
                  background: si < done ? level.color : (isCurrentLevel && si === done ? level.color + '80' : '#D4D3CE'),
                }} />
              ))}
            </div>
            <div style={{
              fontSize: '0.5rem', fontWeight: isCurrentLevel ? 800 : 500,
              color: isCurrentLevel ? level.color : '#94A3B8',
              textAlign: 'center', lineHeight: 1.2,
            }}>
              {level.name}
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ─── Intro Screen (matches Quiz game layout) ────────────────────────────────
function Intro({ t, progress, curLevel, curSubLevel, onStart }) {
  const isFinished = parseProgress(progress).finished
  const doneSubs = totalSubLevelsDone(progress)
  const totalSubs = FAMOUS_LEVELS.reduce((acc, l) => acc + l.subLevels, 0)

  return (
    <div>
      {/* Title header */}
      <div style={{
        color: 'white', textAlign: 'center',
        padding: '18px 20px 8px',
      }}>
        <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800 }}>{t('famous.title', { defaultValue: 'Famous Luxembourgers' })}</h2>
      </div>

      {/* Content */}
      <div className="container" style={{ paddingTop: 28 }}>

        {/* Progress card — on top */}
        <div className="card" style={{ marginBottom: 16, padding: '18px 20px' }}>
          <div className="section-title" style={{ marginBottom: 12 }}>{t('quiz.yourProgress')}</div>
          <div className="game-progress-row">
            <span className="game-progress-label">{doneSubs} / {totalSubs}</span>
            <span className="game-progress-pct">{Math.round((doneSubs / totalSubs) * 100)}%</span>
          </div>
          <div className="progress-bar" style={{ marginBottom: 14 }}>
            <div className="progress-fill" style={{ width: `${(doneSubs / totalSubs) * 100}%` }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <span style={{ fontWeight: 800, color: 'var(--red)', fontSize: '1rem' }}>
              {(progress.totalPoints || 0).toLocaleString()} pts
            </span>
          </div>
        </div>

        {/* Start button — below */}
        <button
          onClick={onStart}
          style={{
            width: '100%',
            display: 'flex', alignItems: 'center', gap: 16,
            padding: '20px 24px',
            borderRadius: 16,
            background: '#111827',
            color: '#FFFFFF',
            border: '1px solid rgba(255,255,255,0.25)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
            cursor: 'pointer',
            fontFamily: 'var(--font)',
            transition: 'transform 0.15s ease, box-shadow 0.15s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.28)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.18)'
          }}
        >
          <span style={{
            width: 48, height: 48, borderRadius: 12, flexShrink: 0,
            background: 'rgba(255,255,255,0.10)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'rgba(255,255,255,0.9)',
          }}><Camera size={26} strokeWidth={1.75} /></span>
          <span style={{ flex: 1, textAlign: 'left' }}>
            <strong style={{ display: 'block', fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
              {isFinished ? t('quiz.allDone') : t('quiz.startGame', { defaultValue: 'Start the game' })}
            </strong>
            {!isFinished && (
              <small style={{ display: 'block', fontSize: '0.72rem', opacity: 0.75, marginTop: 3, fontWeight: 400 }}>
                {t(`quiz.levelNames.${curLevel.id}`, { defaultValue: curLevel.name })} · {t('quiz.subLevel', { defaultValue: 'Sub-level' })} {curSubLevel}/5
              </small>
            )}
          </span>
          <span style={{ opacity: 0.45, fontSize: '1.1rem' }}>→</span>
        </button>

      </div>
    </div>
  )
}

// ─── Done Screen (matches Quiz game layout) ─────────────────────────────────
function Done({ scores, people, t, progress, curLevel, curSubLevel, levelUpInfo, onReplay }) {
  const sessionTotal = scores.reduce((s, r) => s + r.pts, 0)
  const { levelIdx: nextLevelIdx, subLevel: nextSub, finished } = parseProgress(progress)
  const nextLevel = FAMOUS_LEVELS[nextLevelIdx]

  return (
    <div className="container" style={{ paddingTop: 28 }}>
      {/* Progress */}
      <div className="card" style={{ marginBottom: 16, padding: '18px 20px' }}>
        <div className="section-title" style={{ marginBottom: 12 }}>{t('quiz.yourProgress')}</div>
        <LevelMapBadges progress={progress} />
        <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t('quiz.ptsThisRound', { pts: sessionTotal.toLocaleString() })}</span>
          <span style={{ fontWeight: 800, color: 'var(--red)', fontSize: '1rem' }}>{t('quiz.totalPts', { pts: (progress.totalPoints || 0).toLocaleString() })}</span>
        </div>
      </div>

      {finished ? (
        <button
          onClick={onReplay}
          style={{
            width: '100%',
            display: 'flex', alignItems: 'center', gap: 16,
            padding: '20px 24px',
            borderRadius: 16,
            background: '#111827',
            color: '#FFFFFF',
            border: '1px solid rgba(255,255,255,0.25)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
            cursor: 'pointer',
            fontFamily: 'var(--font)',
            transition: 'transform 0.15s ease, box-shadow 0.15s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.28)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.18)'
          }}
        >
          <span style={{
            width: 48, height: 48, borderRadius: 12, flexShrink: 0,
            background: 'rgba(255,255,255,0.10)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.6rem',
          }}>🏆</span>
          <span style={{ flex: 1, textAlign: 'left' }}>
            <strong style={{ display: 'block', fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
              {t('quiz.allDone')}
            </strong>
            <small style={{ display: 'block', fontSize: '0.72rem', opacity: 0.75, marginTop: 3, fontWeight: 400 }}>
              {t('quiz.allLevelsCompleted', { defaultValue: 'All levels completed!' })}
            </small>
          </span>
          <span style={{ opacity: 0.55, fontSize: '1.1rem' }}>→</span>
        </button>
      ) : (
        <button
          onClick={onReplay}
          style={{
            width: '100%',
            display: 'flex', alignItems: 'center', gap: 16,
            padding: '20px 24px',
            borderRadius: 16,
            background: '#111827',
            color: '#FFFFFF',
            border: '1px solid rgba(255,255,255,0.25)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
            cursor: 'pointer',
            fontFamily: 'var(--font)',
            transition: 'transform 0.15s ease, box-shadow 0.15s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.28)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.18)'
          }}
        >
          <span style={{
            width: 48, height: 48, borderRadius: 12, flexShrink: 0,
            background: 'rgba(255,255,255,0.10)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.6rem',
          }}>▶</span>
          <span style={{ flex: 1, textAlign: 'left' }}>
            <strong style={{ display: 'block', fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
              {t('quiz.continueNextSubLevel')}
            </strong>
            <small style={{ display: 'block', fontSize: '0.72rem', opacity: 0.75, marginTop: 3, fontWeight: 400 }}>
              {t(`quiz.levelNames.${nextLevel.id}`, { defaultValue: nextLevel.name })} · {t('quiz.subLevel', { defaultValue: 'Sub-level' })} {nextSub}/5
            </small>
          </span>
          <span style={{ opacity: 0.55, fontSize: '1.1rem' }}>→</span>
        </button>
      )}
    </div>
  )
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function FamousGame() {
  const { t } = useTranslation()

  // Load server-side content overrides (admin edits), fall back to bundled data
  const [PEOPLE, setPEOPLE] = useState(STATIC_PEOPLE)
  useEffect(() => {
    let cancelled = false
    fetch('/api/content')
      .then(r => r.ok ? r.json() : {})
      .then(data => {
        if (!cancelled && data.people?.length > 0) setPEOPLE(data.people)
      })
      .catch(() => {})
    return () => { cancelled = true }
  }, [])

  const [progress, setProgress] = useLocalStorage('letz-famous-progress-v2', {
    completedSubLevels: { newcomer: 0, explorer: 0, resident: 0, citizen: 0, ambassador: 0 },
    totalPoints: 0,
  })

  // Derive current position
  const { levelIdx: curLevelIdx, subLevel: curSubLevel, finished: allFinished } = parseProgress(progress)
  const curLevel = FAMOUS_LEVELS[curLevelIdx]

  // Get 5 people for this sub-level
  const people = useMemo(
    () => getSubLevelPeople(curLevel.id, curSubLevel, PEOPLE),
    [curLevel.id, curSubLevel, PEOPLE],
  )

  // Shuffle options so correct answer isn't always A
  const shuffledPeople = useMemo(
    () => people.map(shufflePersonOptions),
    [people],
  )

  // Screen state
  const [step, setStep] = useState('intro') // intro | question | done
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [roundScores, setRoundScores] = useState([])
  const [levelUpInfo, setLevelUpInfo] = useState(null)
  const [doneInfo, setDoneInfo] = useState(null)

  // Scroll to top whenever a new question loads or the screen changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [step, currentIdx])

  const handleSelect = (idx) => {
    if (revealed) return
    setSelected(idx)
    setRevealed(true)
  }

  const handleNext = () => {
    if (selected === null) return
    const p = shuffledPeople[currentIdx]
    const isCorrect = selected === p.answer
    const pts = isCorrect ? POINTS_PER_CORRECT : 0
    const newScores = [...roundScores, { correct: isCorrect, pts }]

    if (currentIdx + 1 >= people.length) {
      // Sub-level complete
      const sessionTotal = newScores.reduce((s, r) => s + r.pts, 0)
      const prevLevelIdx = curLevelIdx
      const newCompleted = {
        ...progress.completedSubLevels,
        [curLevel.id]: (progress.completedSubLevels[curLevel.id] || 0) + 1,
      }
      const newTotal = (progress.totalPoints || 0) + sessionTotal
      const newProgressObj = { completedSubLevels: newCompleted, totalPoints: newTotal }
      const { levelIdx: newLevelIdx } = parseProgress(newProgressObj)
      if (newLevelIdx > prevLevelIdx) setLevelUpInfo(FAMOUS_LEVELS[newLevelIdx])

      setProgress(newProgressObj)
      setRoundScores(newScores)
      setDoneInfo({ level: curLevel, subLevel: curSubLevel })
      trackGameEvent('famous', 'complete', { score: sessionTotal, level: curLevel.id, subLevel: curSubLevel })
      setStep('done')
    } else {
      setRoundScores(newScores)
      setCurrentIdx(i => i + 1)
      setSelected(null)
      setRevealed(false)
    }
  }

  const handleReplay = () => {
    const isFinished = allFinished || parseProgress(progress).finished
    if (isFinished) {
      setProgress({
        completedSubLevels: { newcomer: 0, explorer: 0, resident: 0, citizen: 0, ambassador: 0 },
        totalPoints: 0,
      })
      setStep('intro')
    } else {
      setStep('question')
    }
    setCurrentIdx(0)
    setSelected(null)
    setRevealed(false)
    setRoundScores([])
    setLevelUpInfo(null)
    setDoneInfo(null)
  }

  // ── Intro ──
  if (step === 'intro') {
    return (
      <Intro
        t={t}
        progress={progress}
        curLevel={curLevel}
        curSubLevel={curSubLevel}
        onStart={() => { trackGameEvent('famous', 'start'); setStep('question') }}
      />
    )
  }

  // ── Done ──
  if (step === 'done') {
    return (
      <Done
        scores={roundScores}
        people={people}
        t={t}
        progress={progress}
        curLevel={doneInfo?.level ?? curLevel}
        curSubLevel={doneInfo?.subLevel ?? curSubLevel}
        levelUpInfo={levelUpInfo}
        onReplay={handleReplay}
      />
    )
  }

  // ── Question screen ──
  const p = shuffledPeople[currentIdx]
  if (!p) {
    return (
      <div style={S.page}>
        <div style={S.container}>
          <div style={{ paddingTop: 40, textAlign: 'center' }}>
            <p style={{ color: '#94A3B8', marginBottom: 16 }}>Could not load people for this level.</p>
            <button style={{ ...S.btn, ...S.btnPrimary }} onClick={handleReplay}>← Back</button>
          </div>
        </div>
      </div>
    )
  }

  const cat = CAT_COLORS[p.category] || CAT_COLORS.culture

  return (
    <div style={S.page}>
      <div style={S.container}>
        <div style={{ paddingTop: 16 }}>
          {/* Progress header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: curLevel.color, letterSpacing: 0.5 }}>
              {curLevel.icon} {curLevel.name.toUpperCase()} · {curSubLevel}/{curLevel.subLevels}
            </span>
            <span style={{ fontSize: 13, color: '#64748B', fontWeight: 600 }}>
              {currentIdx + 1} / {people.length}
            </span>
          </div>
          <ProgressBar current={currentIdx + 1} total={people.length} color={curLevel.color} />

          {/* Photo card — compact for mobile */}
          <div style={{ ...S.card, marginTop: 12, marginBottom: 10, textAlign: 'center', padding: '16px 20px' }}>
            <WikiImage key={p.id || currentIdx} personId={p.id} wikiTitle={p.wikiTitle} size={140} noPhoto={p.noPhoto} photoPos={p.photoPos} imageUrl={p.imageUrl} />
            <h2 style={{ fontSize: 18, fontWeight: 800, color: '#1E293B', margin: '10px 0 2px' }}>
              Who is this person?
            </h2>
            <div style={{ fontSize: 12, color: '#64748B' }}>{cat.icon} {p.category.charAt(0).toUpperCase() + p.category.slice(1)}</div>
          </div>

          {/* Options — click to select AND reveal immediately */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
            {p.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                style={{
                  ...S.card, padding: '11px 14px',
                  cursor: revealed ? 'default' : 'pointer',
                  background: '#FFFFFF',
                  border: '1px solid #E5E4DF',
                  display: 'flex', alignItems: 'center', gap: 12,
                  textAlign: 'left', transition: 'all 0.15s ease', width: '100%',
                }}
              >
                <div style={{
                  width: 28, height: 28, borderRadius: 7,
                  background: '#F1F0EC',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700,
                  color: '#94A3B8',
                  flexShrink: 0,
                }}>
                  {String.fromCharCode(65 + i)}
                </div>
                <span style={{ fontSize: 14.5, color: '#334155', lineHeight: 1.5, fontWeight: 400 }}>
                  {opt}
                </span>
              </button>
            ))}
          </div>

          {/* Answer Reveal — bottom-sheet panel (same style as quiz game) */}
          {revealed && (
            <div style={{
              position: 'fixed', inset: 0, zIndex: 1000,
              background: 'rgba(0,0,0,0.65)',
              display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
              animation: 'fadeIn 0.2s ease',
            }}>
              <div style={{
                background: '#FFFFFF',
                borderRadius: '24px 24px 0 0',
                padding: '28px 20px calc(36px + env(safe-area-inset-bottom, 0px))',
                maxWidth: 520, width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                boxShadow: '0 -4px 32px rgba(0,0,0,0.14)',
                animation: 'slideUp 0.28s ease',
                border: '1px solid #E5E7EB',
                borderBottom: 'none',
              }}>
                {/* Drag handle */}
                <div style={{
                  width: 36, height: 4, borderRadius: 999,
                  background: '#D1D5DB',
                  margin: '-8px auto 20px',
                }} />

                {/* Points earned — large hero number */}
                <div style={{ textAlign: 'center', marginBottom: 22 }}>
                  <div style={{
                    fontSize: '3.2rem', fontWeight: 800,
                    letterSpacing: '-0.03em', lineHeight: 1,
                    color: selected === p.answer ? '#059669' : '#DC2626',
                    animation: 'popIn 0.32s ease',
                  }}>
                    {selected === p.answer ? `+${POINTS_PER_CORRECT}` : '+0'}
                  </div>
                  <div style={{
                    fontSize: '0.68rem', fontWeight: 600,
                    color: '#9CA3AF',
                    textTransform: 'uppercase', letterSpacing: '0.14em',
                    marginTop: 5,
                  }}>
                    points
                  </div>

                  {/* Correct / Wrong pill badge */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    marginTop: 14,
                    background: selected === p.answer ? '#ECFDF5' : '#FEF2F2',
                    border: `1px solid ${selected === p.answer ? '#6EE7B7' : '#FCA5A5'}`,
                    borderRadius: 999,
                    padding: '5px 16px',
                    color: selected === p.answer ? '#065F46' : '#991B1B',
                    fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em',
                  }}>
                    <span>{selected === p.answer ? '✓' : '✗'}</span>
                    <span>{selected === p.answer ? 'Correct!' : 'Incorrect'}</span>
                  </div>
                </div>

                {/* Thin divider */}
                <div style={{ height: 1, background: '#E5E7EB', marginBottom: 18 }} />

                {/* Your answer */}
                <div style={{ marginBottom: 10 }}>
                  <div style={{
                    fontSize: '0.63rem', fontWeight: 700,
                    color: '#9CA3AF',
                    textTransform: 'uppercase', letterSpacing: '0.13em',
                    marginBottom: 7,
                  }}>
                    Your answer
                  </div>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '13px 16px',
                    background: selected === p.answer ? '#F0FDF4' : '#FFF1F2',
                    borderRadius: 12,
                    border: `1px solid ${selected === p.answer ? '#BBF7D0' : '#FECDD3'}`,
                  }}>
                    <span style={{
                      width: 30, height: 30, borderRadius: 9, flexShrink: 0,
                      background: selected === p.answer ? '#DCFCE7' : '#FFE4E6',
                      color: selected === p.answer ? '#15803D' : '#BE123C',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.9rem', fontWeight: 800,
                    }}>
                      {selected === p.answer ? '✓' : '✗'}
                    </span>
                    <span style={{ fontWeight: 600, color: '#111827', fontSize: '0.9rem', lineHeight: 1.45 }}>
                      {p.options[selected]}
                    </span>
                  </div>
                </div>

                {/* Correct answer — only shown when wrong */}
                {selected !== p.answer && (
                  <div style={{ marginBottom: 10 }}>
                    <div style={{
                      fontSize: '0.63rem', fontWeight: 700,
                      color: '#9CA3AF',
                      textTransform: 'uppercase', letterSpacing: '0.11em',
                      marginBottom: 7,
                    }}>
                      Correct answer
                    </div>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '13px 16px',
                      background: '#F0FDF4',
                      borderRadius: 12,
                      border: '1px solid #BBF7D0',
                    }}>
                      <span style={{
                        width: 30, height: 30, borderRadius: 9, flexShrink: 0,
                        background: '#DCFCE7',
                        color: '#15803D',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.9rem', fontWeight: 800,
                      }}>✓</span>
                      <span style={{ fontWeight: 600, color: '#111827', fontSize: '0.9rem', lineHeight: 1.45 }}>
                        {p.options[p.answer]}
                      </span>
                    </div>
                  </div>
                )}

                {/* Explanation */}
                <div style={{ marginBottom: 22 }}>
                  <div style={{
                    fontSize: '0.63rem', fontWeight: 700,
                    color: '#9CA3AF',
                    textTransform: 'uppercase', letterSpacing: '0.11em',
                    marginBottom: 7,
                  }}>
                    Explanation
                  </div>
                  <p style={{
                    fontSize: '0.875rem', margin: 0, lineHeight: 1.65,
                    color: '#374151',
                    background: '#F9FAFB',
                    borderRadius: 12,
                    padding: '12px 15px',
                    border: '1px solid #E5E7EB',
                  }}>
                    {p.explanation}
                  </p>
                </div>

                {/* Next / Finish button */}
                <button
                  onClick={handleNext}
                  style={{
                    width: '100%',
                    display: 'flex', alignItems: 'center', gap: 16,
                    padding: '18px 22px',
                    borderRadius: 16,
                    background: '#111827',
                    color: '#FFFFFF',
                    border: '1px solid #1F2937',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                    cursor: 'pointer',
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: '0.95rem', fontWeight: 700,
                    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                    position: 'relative', overflow: 'hidden',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-1px)'
                    e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.28)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.18)'
                  }}
                >
                  <span style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: 'rgba(255,255,255,0.10)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.3rem',
                  }}>
                    {currentIdx + 1 >= people.length ? '🏁' : '▶'}
                  </span>
                  <span style={{ flex: 1, textAlign: 'left', lineHeight: 1.3 }}>
                    <span style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700 }}>
                      {currentIdx + 1 >= people.length ? 'See Results' : 'Next Person'}
                    </span>
                    <span style={{ display: 'block', fontSize: '0.7rem', opacity: 0.65, fontWeight: 400, marginTop: 1 }}>
                      {currentIdx + 1 >= people.length
                        ? 'See your results'
                        : `Person ${currentIdx + 2} of ${people.length}`}
                    </span>
                  </span>
                  <span style={{ opacity: 0.55, fontSize: '1.1rem' }}>→</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
