import { useState, useMemo, useEffect } from 'react'
import { TrendingUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { SCENARIOS as STATIC_SCENARIOS, getSubLevelScenarios } from './data/scenarios'
import { trackGameEvent } from '../../utils/analytics'

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

export const ECONOMY_LEVELS = [
  { id: 'starter',    name: 'Starter',    icon: '📗', color: '#6B7280', bg: '#F3F4F6', subLevels: 5 },
  { id: 'analyst',    name: 'Analyst',    icon: '📊', color: '#059669', bg: '#D1FAE5', subLevels: 5 },
  { id: 'strategist', name: 'Strategist', icon: '🎯', color: '#2563EB', bg: '#DBEAFE', subLevels: 5 },
  { id: 'expert',     name: 'Expert',     icon: '💎', color: '#7C3AED', bg: '#F3E8FF', subLevels: 5 },
  { id: 'economist',  name: 'Economist',  icon: '🏆', color: '#D97706', bg: '#FEF3C7', subLevels: 5 },
]

const POINTS_PER_CORRECT = 200

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

function Intro({ onStart }) {
  const { t } = useTranslation()
  return (
    <div style={S.page}>
      <div style={S.container}>
        <div style={{ height: 24 }} />
        <div style={S.card}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
            <div style={{ fontSize: 48 }}>
              <TrendingUp size={40} strokeWidth={1.5} />
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700, lineHeight: 1.2 }}>
                {t('economy.title', 'Luxembourg Economy')}
              </h1>
            </div>
          </div>
          <p style={{ margin: '0 0 24px 0', fontSize: 15, color: '#475569', lineHeight: 1.6 }}>
            {t('economy.intro', 'Test your knowledge of Luxembourg\'s economy, financial markets, and business sectors.')}
          </p>
          <button
            style={{ ...S.btn, ...S.btnPrimary }}
            onClick={onStart}
          >
            {t('common.start', 'Start')}
          </button>
        </div>
      </div>
    </div>
  )
}

function Done({ progress, onRestart }) {
  const { t } = useTranslation()
  const { finished } = parseProgress(progress)
  const totalDone = totalSubLevelsDone(progress)
  const totalSubs = ECONOMY_LEVELS.reduce((acc, lvl) => acc + lvl.subLevels, 0)

  return (
    <div style={S.page}>
      <div style={S.container}>
        <div style={{ height: 24 }} />
        <div style={S.card}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
            <h2 style={{ margin: '0 0 12px 0', fontSize: 24, fontWeight: 700 }}>
              {finished
                ? t('common.levelComplete', 'All levels complete!')
                : t('common.levelComplete', 'Level complete!')}
            </h2>
            <p style={{ margin: '0 0 24px 0', fontSize: 15, color: '#475569' }}>
              {t('common.progress', 'Progress')}: {totalDone} / {totalSubs}
            </p>
            <button
              style={{ ...S.btn, ...S.btnPrimary }}
              onClick={onRestart}
            >
              {t('common.continue', 'Continue')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Quiz({ scenario, onAnswer, levelName, subLevel }) {
  const { t } = useTranslation()
  const [selected, setSelected] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleAnswer = () => {
    if (selected === null) return
    const correct = selected === scenario.answer
    setIsCorrect(correct)
    setSubmitted(true)
    if (correct) {
      setTimeout(() => onAnswer(true), 1200)
    }
  }

  const handleSkip = () => {
    setSubmitted(true)
    setIsCorrect(false)
    setTimeout(() => onAnswer(false), 1200)
  }

  const catColor = CAT_COLORS[scenario.category] || { bg: '#F3F4F6', text: '#475569', icon: '❓' }

  return (
    <div style={S.page}>
      <div style={S.container}>
        <div style={{ height: 24 }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#475569' }}>
            {levelName} • {t('common.question', 'Question')} {subLevel}
          </div>
          <div style={{
            padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600,
            background: catColor.bg, color: catColor.text,
          }}>
            {catColor.icon} {scenario.category}
          </div>
        </div>

        <ProgressBar current={subLevel} total={5} color="#2563EB" />

        <div style={S.card}>
          <h2 style={{ margin: '0 0 24px 0', fontSize: 18, fontWeight: 700, lineHeight: 1.4 }}>
            {scenario.question}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
            {scenario.options.map((option, i) => {
              const isSelected = selected === i
              const isAnswered = submitted && i === scenario.answer
              const isWrong = submitted && isSelected && !isCorrect
              return (
                <button
                  key={i}
                  onClick={() => !submitted && setSelected(i)}
                  disabled={submitted}
                  style={{
                    padding: '16px', borderRadius: 12,
                    background: isAnswered ? '#D1FAE5' : isWrong ? '#FEE2E2' : isSelected ? '#DBEAFE' : '#F3F4F6',
                    color: isAnswered ? '#065F46' : isWrong ? '#DC2626' : isSelected ? '#1D4ED8' : '#475569',
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: 15,
                    fontWeight: isSelected ? 600 : 500,
                    cursor: submitted ? 'default' : 'pointer',
                    border: isSelected ? '2px solid currentColor' : '1px solid #E5E4DF',
                    transition: 'all 0.2s',
                    textAlign: 'left',
                  }}
                >
                  {option}
                </button>
              )
            })}
          </div>

          {submitted && (
            <div style={{
              padding: 12, borderRadius: 10, marginBottom: 20,
              background: isCorrect ? '#D1FAE5' : '#FEE2E2',
              color: isCorrect ? '#065F46' : '#DC2626',
              fontSize: 14, fontWeight: 500,
            }}>
              {isCorrect ? '✓ Correct!' : '✗ Incorrect. ' + scenario.explanation}
            </div>
          )}

          <div style={{ display: 'flex', gap: 12 }}>
            <button
              style={{
                ...S.btn,
                ...(submitted ? S.btnSecondary : { ...S.btnPrimary, flex: 1 }),
                ...(selected === null && !submitted ? { opacity: 0.5, cursor: 'not-allowed' } : { flex: 1 }),
              }}
              onClick={handleAnswer}
              disabled={selected === null || submitted}
            >
              {submitted
                ? (isCorrect ? t('common.next', 'Next') : t('common.tryAgain', 'Try Again'))
                : t('common.submit', 'Submit')}
            </button>
            {!submitted && (
              <button
                style={{ ...S.btn, ...S.btnSecondary }}
                onClick={handleSkip}
              >
                {t('common.skip', 'Skip')}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EconomyGame() {
  const { t } = useTranslation()
  const [progress, setProgress] = useLocalStorage('letz-economy-progress-v1', {
    completedSubLevels: { starter: 0, analyst: 0, strategist: 0, expert: 0, economist: 0 },
  })

  const [gameState, setGameState] = useState('intro')
  const [allScenarios, setAllScenarios] = useState([])
  const [currentScenarioIdx, setCurrentScenarioIdx] = useState(0)

  const { levelIdx, subLevel, finished } = parseProgress(progress)
  const currentLevel = ECONOMY_LEVELS[levelIdx]
  const currentScenario = allScenarios[currentScenarioIdx]

  useEffect(() => {
    if (gameState === 'quiz' && allScenarios.length === 0) {
      const scenarios = getSubLevelScenarios(currentLevel.id, subLevel)
      setAllScenarios(scenarios.map(shuffleScenarioOptions))
      setCurrentScenarioIdx(0)
    }
  }, [gameState, currentLevel.id, subLevel, allScenarios.length])

  const handleStart = () => {
    trackGameEvent('economy', 'game_started', { level: currentLevel.id })
    setGameState('quiz')
  }

  const handleAnswer = (correct) => {
    if (correct) {
      trackGameEvent('economy', 'correct_answer', { level: currentLevel.id, subLevel })
      const newProgress = { ...progress }
      if (!newProgress.completedSubLevels) newProgress.completedSubLevels = {}
      newProgress.completedSubLevels[currentLevel.id] = subLevel
      setProgress(newProgress)
      setGameState('done')
    } else {
      if (currentScenarioIdx < allScenarios.length - 1) {
        setCurrentScenarioIdx(currentScenarioIdx + 1)
      } else {
        setGameState('done')
      }
    }
  }

  const handleRestart = () => {
    trackGameEvent('economy', 'level_continued', { level: currentLevel.id })
    setAllScenarios([])
    setCurrentScenarioIdx(0)
    setGameState(finished ? 'intro' : 'quiz')
  }

  if (gameState === 'intro') {
    return <Intro onStart={handleStart} />
  }

  if (gameState === 'done') {
    return <Done progress={progress} onRestart={handleRestart} />
  }

  if (!currentScenario) {
    return <div style={S.page}><div style={S.container}><div style={S.card}>{t('common.loading', 'Loading...')}</div></div></div>
  }

  return (
    <Quiz
      scenario={currentScenario}
      onAnswer={handleAnswer}
      levelName={currentLevel.name}
      subLevel={subLevel}
    />
  )
}
