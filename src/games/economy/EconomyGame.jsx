import { useState, useMemo, useEffect } from 'react'
import { TrendingUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { SCENARIOS as STATIC_SCENARIOS, getSubLevelScenarios } from './data/scenarios'
import { trackGameEvent } from '../../utils/analytics'
import ReportErrorLink from '../../components/ReportErrorLink'

// ─── Category colours (visual only — not used for progression) ───────────────
const CAT_COLORS = {
  finance:         { bg: '#DBEAFE', text: '#1D4ED8', icon: '💶' },
  funds:           { bg: '#D1FAE5', text: '#065F46', icon: '📊' },
  steel:           { bg: '#F3F4F6', text: '#374151', icon: '🏭' },
  trade:           { bg: '#FEF3C7', text: '#D97706', icon: '🚢' },
  startups:        { bg: '#FCE7F3', text: '#BE185D', icon: '🚀' },
  eu_institutions: { bg: '#E0E7FF', text: '#4338CA', icon: '🇪🇺' },
  indicators:      { bg: '#FEE2E2', text: '#DC2626', icon: '📈' },
  banking:         { bg: '#CFFAFE', text: '#0E7490', icon: '🏦' },
}

// ─── Level system (5 levels × 5 sub-levels = 125 scenarios) ──
export const ECONOMY_LEVELS = [
  { id: 'starter',    name: 'Starter',    icon: '📗', color: '#6B7280', bg: '#F3F4F6', subLevels: 5 },
  { id: 'analyst',    name: 'Analyst',    icon: '📊', color: '#059669', bg: '#D1FAE5', subLevels: 5 },
  { id: 'strategist', name: 'Strategist', icon: '🎯', color: '#2563EB', bg: '#DBEAFE', subLevels: 5 },
  { id: 'expert',     name: 'Expert',     icon: '💎', color: '#7C3AED', bg: '#F3E8FF', subLevels: 5 },
  { id: 'economist',  name: 'Economist',  icon: '🏆', color: '#D97706', bg: '#FEF3C7', subLevels: 5 },
]

const POINTS_PER_CORRECT = 200

// ─── Inline styles ───────────────────────────────────────────────────────────
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

// ─── Progress helpers ────────────────────────────────────────────────────────
function parseProgress(progress) {
  const completed = progress?.completedSubLevels || {}
  for (let li = 0; li < ECONOMY_LEVELS.length; li++) {
    const lvl = ECONOMY_LEVELS[li]
    const done = completed[lvl.id] || 0
    if (done < lvl.subLevels) return { levelIdx: li, subLevel: done + 1 }
  }
  return { levelIdx: ECONOMY_LEVELS.length - 1, subLevel: ECONOMY_LEVELS.at(-1).subLevels, finished: true }
}

function totalSubLevelsDone(progress) {
  const completed = progress?.completedSubLevels || {}
  return ECONOMY_LEVELS.reduce((acc, lvl) => acc + (completed[lvl.id] || 0), 0)
}

// ─── Shuffle options (Fisher-Yates) ─────────────────────────────────────────
function shuffleScenarioOptions(s) {
  const n = s.options.length
  const indices = Array.from({ length: n }, (_, i) => i)
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[indices[i], indices[j]] = [indices[j], indices[i]]
  }
  return {
    ...s,
    options: indices.map(i => s.options[i]),
    answer: indices.indexOf(s.answer),
  }
}

// ─── Progress bar ────────────────────────────────────────────────────────────
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

// ─── Level Badge Display ─────────────────────────────────────────────────────
function LevelMapBadges({ progress }) {
  const { levelIdx: curLvlIdx } = parseProgress(progress)
  return (
    <div style={{ display: 'flex', gap: 6, justifyContent: 'space-between' }}>
      {ECONOMY_LEVELS.map((level, li) => {
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

// ─── Intro Screen ────────────────────────────────────────────────────────────
function Intro({ t, progress, curLevel, curSubLevel, onStart }) {
  const isFinished = parseProgress(progress).finished
  const doneSubs = totalSubLevelsDone(progress)
  const totalSubs = ECONOMY_LEVELS.reduce((acc, l) => acc + l.subLevels, 0)

  return (
    <div>
      {/* Title header */}
      <div style={{
        color: 'white', textAlign: 'center',
        padding: '18px 20px 8px',
      }}>
        <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800 }}>{t('economy.title')}</h2>
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
          }}><TrendingUp size={26} strokeWidth={1.75} /></span>
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

// ─── Done Screen ─────────────────────────────────────────────────────────────
function Done({ scores, t, progress, curLevel, curSubLevel, levelUpInfo, onReplay, onReset }) {
  const [confirmReset, setConfirmReset] = useState(false)
  const sessionTotal = scores.reduce((s, r) => s + r.pts, 0)
  const { levelIdx: nextLevelIdx, subLevel: nextSub, finished } = parseProgress(progress)
  const nextLevel = ECONOMY_LEVELS[nextLevelIdx]

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

      {/* Reset progress */}
      <div style={{ textAlign: 'center', marginTop: 18 }}>
        {confirmReset ? (
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            {t('common.resetConfirm')}{' '}
            <button onClick={onReset} style={{ background: 'none', border: 'none', color: 'var(--red)', cursor: 'pointer', fontFamily: 'var(--font)', fontSize: '0.72rem', fontWeight: 600, padding: 0, textDecoration: 'underline' }}>
              {t('common.resetProgress')}
            </button>
            {' / '}
            <button onClick={() => setConfirmReset(false)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontFamily: 'var(--font)', fontSize: '0.72rem', padding: 0, textDecoration: 'underline' }}>
              {t('common.back')}
            </button>
          </span>
        ) : (
          <button onClick={() => setConfirmReset(true)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontFamily: 'var(--font)', fontSize: '0.72rem', padding: 0, opacity: 0.6 }}>
            {t('common.resetProgress')}
          </button>
        )}
      </div>
    </div>
  )
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function EconomyGame() {
  const { t } = useTranslation()

  // Load server-side content overrides (admin edits), fall back to bundled data
  const [SCENARIOS, setSCENARIOS] = useState(STATIC_SCENARIOS)
  useEffect(() => {
    let cancelled = false
    fetch('/api/content')
      .then(r => r.ok ? r.json() : {})
      .then(data => {
        if (!cancelled && data.economy?.length > 0) setSCENARIOS(data.economy)
      })
      .catch(() => {})
    return () => { cancelled = true }
  }, [])

  const [progress, setProgress] = useLocalStorage('letz-economy-progress-v1', {
    completedSubLevels: { starter: 0, analyst: 0, strategist: 0, expert: 0, economist: 0 },
    totalPoints: 0,
  })

  // Derive current position
  const { levelIdx: curLevelIdx, subLevel: curSubLevel, finished: allFinished } = parseProgress(progress)
  const curLevel = ECONOMY_LEVELS[curLevelIdx]

  // Get 5 scenarios for this sub-level
  const scenarios = useMemo(
    () => getSubLevelScenarios(curLevel.id, curSubLevel, SCENARIOS),
    [curLevel.id, curSubLevel, SCENARIOS],
  )

  // Shuffle options so correct answer isn't always A
  const shuffledScenarios = useMemo(
    () => scenarios.map(shuffleScenarioOptions),
    [scenarios],
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
    const s = shuffledScenarios[currentIdx]
    const isCorrect = selected === s.answer
    const pts = isCorrect ? POINTS_PER_CORRECT : 0
    const newScores = [...roundScores, { correct: isCorrect, pts }]

    if (currentIdx + 1 >= scenarios.length) {
      // Sub-level complete
      const sessionTotal = newScores.reduce((sum, r) => sum + r.pts, 0)
      const prevLevelIdx = curLevelIdx
      const newCompleted = {
        ...progress.completedSubLevels,
        [curLevel.id]: (progress.completedSubLevels[curLevel.id] || 0) + 1,
      }
      const newTotal = (progress.totalPoints || 0) + sessionTotal
      const newProgressObj = { completedSubLevels: newCompleted, totalPoints: newTotal }
      const { levelIdx: newLevelIdx } = parseProgress(newProgressObj)
      if (newLevelIdx > prevLevelIdx) setLevelUpInfo(ECONOMY_LEVELS[newLevelIdx])

      setProgress(newProgressObj)
      setRoundScores(newScores)
      setDoneInfo({ level: curLevel, subLevel: curSubLevel })
      trackGameEvent('economy', 'complete', { score: sessionTotal, level: curLevel.id, subLevel: curSubLevel })
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
        completedSubLevels: { starter: 0, analyst: 0, strategist: 0, expert: 0, economist: 0 },
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
        onStart={() => { trackGameEvent('economy', 'start'); setStep('question') }}
      />
    )
  }

  // ── Done ──
  if (step === 'done') {
    return (
      <Done
        scores={roundScores}
        t={t}
        progress={progress}
        curLevel={doneInfo?.level ?? curLevel}
        curSubLevel={doneInfo?.subLevel ?? curSubLevel}
        levelUpInfo={levelUpInfo}
        onReplay={handleReplay}
        onReset={() => {
          setProgress({
            completedSubLevels: { starter: 0, analyst: 0, strategist: 0, expert: 0, economist: 0 },
            totalPoints: 0,
          })
          setStep('intro')
          setCurrentIdx(0)
          setSelected(null)
          setRevealed(false)
          setRoundScores([])
          setLevelUpInfo(null)
          setDoneInfo(null)
        }}
      />
    )
  }

  // ── Question screen ──
  const s = shuffledScenarios[currentIdx]

  if (!s) {
    return (
      <div style={S.page}>
        <div style={S.container}>
          <div style={{ paddingTop: 40, textAlign: 'center' }}>
            <p style={{ color: '#94A3B8', marginBottom: 16 }}>Could not load scenarios for this level.</p>
            <button style={{ ...S.btn, ...S.btnPrimary }} onClick={handleReplay}>← Back</button>
          </div>
        </div>
      </div>
    )
  }

  const cat = CAT_COLORS[s.category] || { bg: '#F3F4F6', text: '#475569', icon: '❓' }

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
              {currentIdx + 1} / {scenarios.length}
            </span>
          </div>
          <ProgressBar current={currentIdx + 1} total={scenarios.length} color={curLevel.color} />

          {/* Scenario card */}
          <div style={{ ...S.card, marginTop: 12, marginBottom: 10, padding: '20px 20px' }}>
            {/* Category badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: cat.bg, color: cat.text,
              borderRadius: 999, padding: '4px 12px',
              fontSize: '0.72rem', fontWeight: 700,
              marginBottom: 14,
            }}>
              <span>{cat.icon}</span>
              <span>{s.category.charAt(0).toUpperCase() + s.category.slice(1).replace('_', ' ')}</span>
            </div>

            {/* Scenario description */}
            <p style={{
              fontSize: '1.05rem', fontWeight: 600, color: '#1E293B',
              lineHeight: 1.55, margin: 0,
            }}>
              {s.situation}
            </p>
          </div>

          {/* Options — click to select AND reveal immediately */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
            {s.options.map((opt, i) => (
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

          {/* Answer Reveal — bottom-sheet panel */}
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
                    color: selected === s.answer ? '#059669' : '#DC2626',
                    animation: 'popIn 0.32s ease',
                  }}>
                    {selected === s.answer ? `+${POINTS_PER_CORRECT}` : '+0'}
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
                    background: selected === s.answer ? '#ECFDF5' : '#FEF2F2',
                    border: `1px solid ${selected === s.answer ? '#6EE7B7' : '#FCA5A5'}`,
                    borderRadius: 999,
                    padding: '5px 16px',
                    color: selected === s.answer ? '#065F46' : '#991B1B',
                    fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em',
                  }}>
                    <span>{selected === s.answer ? '✓' : '✗'}</span>
                    <span>{selected === s.answer ? 'Correct!' : 'Incorrect'}</span>
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
                    background: selected === s.answer ? '#F0FDF4' : '#FFF1F2',
                    borderRadius: 12,
                    border: `1px solid ${selected === s.answer ? '#BBF7D0' : '#FECDD3'}`,
                  }}>
                    <span style={{
                      width: 30, height: 30, borderRadius: 9, flexShrink: 0,
                      background: selected === s.answer ? '#DCFCE7' : '#FFE4E6',
                      color: selected === s.answer ? '#15803D' : '#BE123C',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.9rem', fontWeight: 800,
                    }}>
                      {selected === s.answer ? '✓' : '✗'}
                    </span>
                    <span style={{ fontWeight: 600, color: '#111827', fontSize: '0.9rem', lineHeight: 1.45 }}>
                      {s.options[selected]}
                    </span>
                  </div>
                </div>

                {/* Correct answer — only shown when wrong */}
                {selected !== s.answer && (
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
                        {s.options[s.answer]}
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
                    {s.explanation}
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
                    {currentIdx + 1 >= scenarios.length ? '🏁' : '▶'}
                  </span>
                  <span style={{ flex: 1, textAlign: 'left', lineHeight: 1.3 }}>
                    <span style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700 }}>
                      {currentIdx + 1 >= scenarios.length ? 'See Results' : 'Next Scenario'}
                    </span>
                    <span style={{ display: 'block', fontSize: '0.7rem', opacity: 0.65, fontWeight: 400, marginTop: 1 }}>
                      {currentIdx + 1 >= scenarios.length
                        ? 'See your results'
                        : `Scenario ${currentIdx + 2} of ${scenarios.length}`}
                    </span>
                  </span>
                  <span style={{ opacity: 0.55, fontSize: '1.1rem' }}>→</span>
                </button>

                <ReportErrorLink
                  gameType="economy"
                  questionId={s.id}
                  questionText={s.question}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
