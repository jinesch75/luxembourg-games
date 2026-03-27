import { useState, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { QUESTIONS } from './data/questions'
import { useGameContent } from '../../hooks/useGameContent'
import { trackGameEvent } from '../../utils/analytics'

const CAT_COLORS = {
  language:     { bg: '#F3E8FF', text: '#7C3AED', icon: '🗣️' },
  history:      { bg: '#FEF3C7', text: '#B45309', icon: '📚' },
  culture:      { bg: '#FCE7F3', text: '#BE185D', icon: '🎭' },
  people:       { bg: '#D1FAE5', text: '#065F46', icon: '👤' },
  institutions: { bg: '#DBEAFE', text: '#1D4ED8', icon: '🏛️' },
  economy:      { bg: '#CFFAFE', text: '#0E7490', icon: '📊' }
}

// ─── Level system ─────────────────────────────────────────────────────────────
export const LEVELS = [
  { id: 1, name: 'Newcomer',   icon: '🌱', minCorrect: 0,  color: '#6B7280', bg: '#F3F4F6' },
  { id: 2, name: 'Explorer',   icon: '🏘️', minCorrect: 5,  color: '#059669', bg: '#D1FAE5' },
  { id: 3, name: 'Resident',   icon: '🌆', minCorrect: 15, color: '#2563EB', bg: '#DBEAFE' },
  { id: 4, name: 'Citizen',    icon: '🏛️', minCorrect: 30, color: '#7C3AED', bg: '#F3E8FF' },
  { id: 5, name: 'Ambassador', icon: '⭐', minCorrect: 50, color: '#D97706', bg: '#FEF3C7' },
  { id: 6, name: 'Legend',     icon: '🏆', minCorrect: 75, color: '#EF3340', bg: '#FEE2E2' },
]

export function getCurrentLevel(totalCorrect) {
  let level = LEVELS[0]
  for (const l of LEVELS) {
    if (totalCorrect >= l.minCorrect) level = l
  }
  return level
}

export function getNextLevel(totalCorrect) {
  const idx = LEVELS.findIndex(l => l.minCorrect > totalCorrect)
  return idx >= 0 ? LEVELS[idx] : null
}

// ─── Question selection (randomised per session) ───────────────────────────────
function getRandomisedQuestions(seed, questionsPool) {
  const pool = questionsPool || QUESTIONS
  const categories = ['language', 'history', 'culture', 'people', 'institutions', 'economy']
  const byCategory = {}
  categories.forEach(c => {
    byCategory[c] = pool.filter(q => q.category === c)
  })

  const catOrder = categories.slice(seed % 6).concat(categories.slice(0, seed % 6))
  const selected = []

  for (let i = 0; i < 5; i++) {
    const cat = catOrder[i % categories.length]
    const catPool = byCategory[cat]
    if (!catPool || catPool.length === 0) continue
    const q = catPool[(seed * (i + 3) * 13 + i * 7) % catPool.length]
    if (!selected.find(s => s.id === q.id)) {
      selected.push(q)
    } else {
      const alt = catPool[(seed * (i + 5) * 17) % catPool.length]
      if (!selected.find(s => s.id === alt.id)) selected.push(alt)
    }
  }

  return selected
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function QuizGame() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  // Level / progress tracking (persisted)
  const [quizProgress, setQuizProgress] = useLocalStorage('letz-quiz-progress', {
    totalCorrect: 0,
    totalPlayed: 0,
    badges: [],
  })

  // Random seed per session
  const [sessionSeed] = useState(() => Math.floor(Math.random() * 9999) + 1)

  const allQuestions = useGameContent('questions', QUESTIONS)
  const questions = useMemo(() => getRandomisedQuestions(sessionSeed, allQuestions), [sessionSeed, allQuestions])

  const [step, setStep] = useState('intro') // intro | question | done
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [answers, setAnswers] = useState([])
  const [copied, setCopied] = useState(false)
  const [newBadge, setNewBadge] = useState(null)
  const [retryList, setRetryList] = useState(null)
  const [wrongAnswers, setWrongAnswers] = useState([])

  const activeQuestions = retryList !== null ? retryList : questions

  useEffect(() => {
    if (step === 'question') trackGameEvent('quiz', 'start')
  }, [step === 'question'])

  // Helper: get translated question field with English fallback
  const qText    = (q) => t(`questions.${q.id}.q`,  { defaultValue: q.question })
  const qOption  = (q, i) => t(`questions.${q.id}.o${i}`, { defaultValue: q.options[i] })
  const qExplain = (q) => t(`questions.${q.id}.e`,  { defaultValue: q.explanation })

  // Update progress when session done.
  // BUG FIX: use functional form for totalCorrect so we always work from latest state,
  // preventing stale-closure issues especially in the retry session.
  const handleSessionComplete = (finalAnswers) => {
    const sessionCorrect = finalAnswers.filter(Boolean).length
    const wrongs = activeQuestions.filter((q, i) => !finalAnswers[i])
    setWrongAnswers(wrongs)

    // Compute level-up from current progress BEFORE updating
    const prevTotal = quizProgress.totalCorrect || 0
    const newTotal  = prevTotal + sessionCorrect
    const prevLevel = getCurrentLevel(prevTotal)
    const newLevel  = getCurrentLevel(newTotal)

    if (newLevel.id > prevLevel.id) {
      setNewBadge(newLevel)
    }

    // Use functional form so the setter always uses the latest persisted value
    setQuizProgress(prev => {
      const latestTotal = (prev.totalCorrect || 0) + sessionCorrect
      const latestPrev  = getCurrentLevel(prev.totalCorrect || 0)
      const latestNew   = getCurrentLevel(latestTotal)
      const earned = latestNew.id > latestPrev.id ? latestNew : null
      return {
        totalCorrect: latestTotal,
        totalPlayed: (prev.totalPlayed || 0) + activeQuestions.length,
        badges: earned && !(prev.badges || []).includes(earned.id)
          ? [...(prev.badges || []), earned.id]
          : (prev.badges || []),
      }
    })

    trackGameEvent('quiz', 'complete', { score: sessionCorrect, total: activeQuestions.length })
  }

  const handlePlayAgain = () => {
    setStep('intro')
    setCurrentIdx(0)
    setSelected(null)
    setRevealed(false)
    setAnswers([])
    setNewBadge(null)
    setRetryList(null)
    setWrongAnswers([])
  }

  const handleRetryWrong = () => {
    // Capture wrong answers before state resets
    const retryQuestions = [...wrongAnswers]
    setRetryList(retryQuestions)
    setCurrentIdx(0)
    setSelected(null)
    setRevealed(false)
    setAnswers([])
    setNewBadge(null)
    // Set step last so activeQuestions is already updated when question renders
    setStep('question')
  }

  if (step === 'intro') {
    return (
      <Intro
        questions={activeQuestions}
        t={t}
        totalCorrect={quizProgress.totalCorrect || 0}
        badges={quizProgress.badges || []}
        onStart={() => setStep('question')}
      />
    )
  }

  if (step === 'done') {
    const score = answers.filter(Boolean).length
    return (
      <Results
        score={score}
        total={activeQuestions.length}
        answers={answers}
        questions={activeQuestions}
        t={t}
        totalCorrect={quizProgress.totalCorrect || 0}
        newBadge={newBadge}
        copied={copied}
        wrongCount={wrongAnswers.length}
        onRetryWrong={wrongAnswers.length > 0 ? handleRetryWrong : null}
        onShare={() => {
          const emoji = answers.map(a => a ? '🟢' : '🔴').join('')
          const text = `Lëtz Quiz — ${score}/${activeQuestions.length}\n${emoji}\nPlay at letz.play`
          navigator.clipboard?.writeText(text).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
          })
        }}
        onPlayAgain={handlePlayAgain}
      />
    )
  }

  const q = activeQuestions[currentIdx]
  if (!q) return null
  const cat = CAT_COLORS[q.category] || CAT_COLORS.culture

  const handleSelect = (idx) => {
    if (revealed) return
    setSelected(idx)
    setRevealed(true)
  }

  const handleNext = () => {
    // Guard: require an answer before advancing
    if (selected === null) return

    const isCorrect = selected === q.answer
    const newAnswers = [...answers, isCorrect]
    setAnswers(newAnswers)

    if (currentIdx + 1 >= activeQuestions.length) {
      // Session complete — update progress then show results
      handleSessionComplete(newAnswers)
      setStep('done')
    } else {
      // Advance to next question
      setCurrentIdx(prev => prev + 1)
      setSelected(null)
      setRevealed(false)
    }
  }

  const progress = (currentIdx / activeQuestions.length) * 100

  return (
    <div className="container" style={{ paddingTop: 24 }}>
      {/* Progress */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <div className="progress-bar" style={{ flex: 1 }}>
          <div className="progress-fill" style={{ width: `${progress}%`, background: cat.text }} />
        </div>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, whiteSpace: 'nowrap' }}>
          {t('quiz.question')} {currentIdx + 1} {t('quiz.of')} {activeQuestions.length}
        </span>
      </div>

      {/* Category badge */}
      <div style={{ marginBottom: 16 }}>
        <span style={{
          background: cat.bg, color: cat.text,
          borderRadius: 999, padding: '4px 12px',
          fontSize: '0.75rem', fontWeight: 700,
          display: 'inline-flex', alignItems: 'center', gap: 5
        }}>
          {cat.icon} {t(`quiz.categories.${q.category}`)}
        </span>
      </div>

      {/* Question */}
      <div className="card" style={{ marginBottom: 20, padding: 24 }}>
        <h2 style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', lineHeight: 1.4, fontWeight: 700 }}>
          {qText(q)}
        </h2>
      </div>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
        {q.options.map((opt, idx) => {
          let bg = 'white', border = 'var(--border)', color = 'var(--text)', icon = null
          if (revealed) {
            if (idx === q.answer) {
              bg = '#D1FAE5'; border = '#059669'; color = '#065F46'; icon = '✓'
            } else if (idx === selected && idx !== q.answer) {
              bg = '#FEE2E2'; border = '#DC2626'; color = '#991B1B'; icon = '✗'
            }
          } else if (selected === idx) {
            bg = cat.bg; border = cat.text
          }
          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              style={{
                width: '100%', textAlign: 'left', padding: '14px 16px',
                background: bg, border: `2px solid ${border}`, color,
                borderRadius: 'var(--radius)', cursor: revealed ? 'default' : 'pointer',
                fontFamily: 'var(--font)', fontSize: '0.95rem', fontWeight: 500,
                display: 'flex', alignItems: 'center', gap: 10,
                transition: 'all 0.15s',
                animation: revealed && idx === q.answer ? 'popIn 0.3s ease' : 'none'
              }}
            >
              <span style={{
                width: 28, height: 28, borderRadius: '50%',
                background: icon ? (idx === q.answer ? '#059669' : '#DC2626') : 'var(--gray-100)',
                color: icon ? 'white' : 'var(--gray-500)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.8rem', fontWeight: 700, flexShrink: 0
              }}>
                {icon || String.fromCharCode(65 + idx)}
              </span>
              {qOption(q, idx)}
            </button>
          )
        })}
      </div>

      {/* Explanation */}
      {revealed && (
        <div className="animate-slide-up" style={{
          background: selected === q.answer ? '#F0FDF4' : '#FFF7ED',
          border: `1px solid ${selected === q.answer ? '#BBF7D0' : '#FDE68A'}`,
          borderRadius: 'var(--radius)', padding: 16, marginBottom: 20
        }}>
          <div style={{ fontWeight: 700, marginBottom: 6, fontSize: '0.85rem', color: 'var(--gray-600)' }}>
            {selected === q.answer ? `✓ ${t('quiz.correct')}` : `✗ ${t('quiz.incorrect')}`}
            {' '}{t('quiz.explanation')}
          </div>
          <p style={{ fontSize: '0.9rem', margin: 0, lineHeight: 1.5, color: 'var(--gray-700)' }}>
            {qExplain(q)}
          </p>
        </div>
      )}

      {revealed && (
        <button
          onClick={handleNext}
          className="btn btn-primary btn-full animate-slide-up"
          style={{ marginBottom: 8 }}
        >
          {currentIdx + 1 >= activeQuestions.length ? t('quiz.finish') : t('quiz.next')} →
        </button>
      )}
    </div>
  )
}

// ─── Level Badge Display ───────────────────────────────────────────────────────
function LevelBadges({ totalCorrect, compact = false }) {
  const { t } = useTranslation()
  const currentLevel = getCurrentLevel(totalCorrect)

  if (compact) {
    return (
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: currentLevel.bg, borderRadius: 999, padding: '5px 12px'
      }}>
        <span style={{ fontSize: '1rem' }}>{currentLevel.icon}</span>
        <span style={{ fontWeight: 700, fontSize: '0.8rem', color: currentLevel.color }}>
          {t('quiz.levelLabel', { id: currentLevel.id })} — {currentLevel.name}
        </span>
      </div>
    )
  }

  return (
    <div>
      <div style={{
        fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)',
        textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10
      }}>
        {t('quiz.yourLevel')}
      </div>
      <div style={{ display: 'flex', gap: 6, justifyContent: 'space-between' }}>
        {LEVELS.map(level => {
          const isUnlocked = totalCorrect >= level.minCorrect
          const isCurrent = level.id === currentLevel.id
          return (
            <div
              key={level.id}
              title={`${level.name} (${level.minCorrect}+ correct)`}
              style={{
                flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: 4, opacity: isUnlocked ? 1 : 0.3,
                transform: isCurrent ? 'scale(1.15)' : 'scale(1)',
                transition: 'transform 0.2s'
              }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: isUnlocked ? level.bg : 'var(--gray-100)',
                border: isCurrent ? `2px solid ${level.color}` : '2px solid transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem',
                boxShadow: isCurrent ? `0 0 8px ${level.color}40` : 'none'
              }}>
                {isUnlocked ? level.icon : '🔒'}
              </div>
              <div style={{
                fontSize: '0.55rem', fontWeight: isCurrent ? 800 : 500,
                color: isCurrent ? level.color : 'var(--text-muted)',
                textAlign: 'center', lineHeight: 1.2
              }}>
                {level.name}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Intro Screen ──────────────────────────────────────────────────────────────
function Intro({ questions, t, totalCorrect, onStart }) {
  const categories = [...new Set(questions.map(q => q.category))]
  const nextLevel = getNextLevel(totalCorrect)
  const remaining = nextLevel ? nextLevel.minCorrect - totalCorrect : 0

  return (
    <div className="container" style={{ paddingTop: 24 }}>
      <div style={{
        background: 'linear-gradient(135deg, var(--red) 0%, #C4222E 100%)',
        borderRadius: 'var(--radius-xl)', padding: '28px 24px', marginBottom: 24, color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>🎯</div>
        <h1 style={{ color: 'white', marginBottom: 8 }}>{t('quiz.title')}</h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>{t('quiz.subtitle')}</p>
      </div>

      {/* Level display */}
      <div className="card" style={{ marginBottom: 16, padding: '18px 20px' }}>
        <LevelBadges totalCorrect={totalCorrect} />
        <div style={{
          marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {t('quiz.totalCorrectLabel')}
          </div>
          <div style={{ fontWeight: 800, color: 'var(--red)', fontSize: '1.1rem' }}>
            {totalCorrect}
          </div>
        </div>
        {nextLevel && (
          <div style={{
            marginTop: 10, fontSize: '0.78rem', color: 'var(--text-muted)',
            textAlign: 'center'
          }}>
            {t('quiz.toNextLevelCount', {
              count: remaining,
              icon: nextLevel.icon,
              name: nextLevel.name
            })}
          </div>
        )}
      </div>

      {/* Session categories */}
      <div className="card" style={{ marginBottom: 20 }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
          {t('quiz.sessionCategories')}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {categories.map(cat => {
            const c = CAT_COLORS[cat]
            return (
              <span key={cat} style={{ background: c.bg, color: c.text, borderRadius: 999, padding: '5px 12px', fontSize: '0.8rem', fontWeight: 600 }}>
                {c.icon} {t(`quiz.categories.${cat}`)}
              </span>
            )
          })}
        </div>
      </div>

      <button onClick={onStart} className="btn btn-primary btn-full btn-lg">
        {t('quiz.startBtn')} →
      </button>
    </div>
  )
}

// ─── Results Screen ────────────────────────────────────────────────────────────
function Results({ score, total, answers, t, totalCorrect, newBadge, onShare, copied, onPlayAgain, wrongCount, onRetryWrong }) {
  const pct = (score / total) * 100
  const msg = pct === 100 ? t('quiz.perfect') : pct >= 80 ? t('quiz.great') : pct >= 60 ? t('quiz.good') : t('quiz.tryAgain')
  const currentLevel = getCurrentLevel(totalCorrect)
  const nextLevel = getNextLevel(totalCorrect)

  return (
    <div className="container" style={{ paddingTop: 24 }}>
      {/* New badge celebration */}
      {newBadge && (
        <div className="animate-slide-up" style={{
          background: `linear-gradient(135deg, ${newBadge.color}DD 0%, ${newBadge.color} 100%)`,
          borderRadius: 'var(--radius-xl)', padding: '20px 24px', marginBottom: 20,
          color: 'white', textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: 8 }}>{newBadge.icon}</div>
          <div style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: 4 }}>
            {t('quiz.levelUpTitle', { name: newBadge.name })}
          </div>
          <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>
            {t('quiz.reachedLevelText', { id: newBadge.id })}
          </div>
        </div>
      )}

      <div style={{
        background: 'linear-gradient(135deg, var(--red) 0%, #C4222E 100%)',
        borderRadius: 'var(--radius-xl)', padding: '28px 24px', marginBottom: 24,
        color: 'white', textAlign: 'center'
      }}>
        <div style={{ fontSize: '3.5rem', marginBottom: 8 }}>
          {pct === 100 ? '🏆' : pct >= 80 ? '⭐' : pct >= 60 ? '👍' : '💪'}
        </div>
        <div style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>{score}/{total}</div>
        <div style={{ color: 'rgba(255,255,255,0.85)', marginTop: 8 }}>{msg}</div>
        <div style={{
          marginTop: 16, background: 'rgba(255,255,255,0.2)',
          borderRadius: 999, padding: '6px 16px', display: 'inline-block', fontWeight: 700
        }}>
          {currentLevel.icon} {t('quiz.levelLabel', { id: currentLevel.id })}: {currentLevel.name}
        </div>
      </div>

      {/* Level progress */}
      <div className="card" style={{ marginBottom: 16 }}>
        <LevelBadges totalCorrect={totalCorrect} />
        <div style={{
          marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border)',
          display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: 'var(--text-muted)'
        }}>
          <span>{t('quiz.sessionScoreText', { score })}</span>
          <span><strong style={{ color: 'var(--red)' }}>{totalCorrect}</strong> {t('quiz.totalScoreText')}</span>
        </div>
        {nextLevel && (
          <div style={{ marginTop: 8, fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            {t('quiz.toNextLevelCount', {
              count: nextLevel.minCorrect - totalCorrect,
              icon: nextLevel.icon,
              name: nextLevel.name
            })}
          </div>
        )}
      </div>

      <button onClick={onShare} className="btn btn-secondary btn-full" style={{ marginBottom: 12 }}>
        {copied ? `✓ ${t('common.copied')}` : `📤 ${t('quiz.shareResult')}`}
      </button>

      {onRetryWrong && (
        <button onClick={onRetryWrong} className="btn btn-full animate-slide-up" style={{
          marginBottom: 12,
          background: '#FEF3C7', color: '#92400E',
          border: '1.5px solid #FDE68A'
        }}>
          {t('quiz.retryWrong', { count: wrongCount })}
        </button>
      )}

      {/* Question breakdown */}
      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 12 }}>
          {t('quiz.results')}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {Array.from({ length: total }).map((_, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '8px 0', borderBottom: i < total - 1 ? '1px solid var(--border)' : 'none'
            }}>
              <span style={{
                width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                background: answers && answers[i] ? '#D1FAE5' : '#FEE2E2',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem'
              }}>
                {answers && answers[i] ? '✓' : '✗'}
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>
                {t('quiz.question')} {i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button onClick={onPlayAgain} className="btn btn-primary btn-full">
        🔄 {t('quiz.playAgain')}
      </button>
    </div>
  )
}
