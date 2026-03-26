import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { todayStr, dayIndex, isToday } from '../../utils/dateUtils'
import { getDailyQuestions } from './data/questions'

const CAT_COLORS = {
  language:     { bg: '#F3E8FF', text: '#7C3AED', icon: '🗣️' },
  history:      { bg: '#FEF3C7', text: '#B45309', icon: '📚' },
  culture:      { bg: '#FCE7F3', text: '#BE185D', icon: '🎭' },
  people:       { bg: '#D1FAE5', text: '#065F46', icon: '👤' },
  institutions: { bg: '#DBEAFE', text: '#1D4ED8', icon: '🏛️' },
  economy:      { bg: '#CFFAFE', text: '#0E7490', icon: '📊' }
}

export default function QuizGame() {
  const { t } = useTranslation()
  const [quizState, setQuizState] = useLocalStorage('letz-quiz-state', null)
  const [streak, setStreak]       = useLocalStorage('letz-streak', { count: 0, lastDate: null })

  const [questions]  = useState(() => getDailyQuestions(dayIndex()))
  const [step, setStep]           = useState('intro') // intro | question | result | done
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selected, setSelected]   = useState(null)
  const [revealed, setRevealed]   = useState(false)
  const [answers, setAnswers]     = useState([])
  const [copied, setCopied]       = useState(false)

  const alreadyPlayed = quizState && isToday(quizState.date)

  // Update streak when done
  useEffect(() => {
    if (step === 'done') {
      const today = todayStr()
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
      if (streak.lastDate === yesterday) {
        setStreak({ count: streak.count + 1, lastDate: today })
      } else if (streak.lastDate !== today) {
        setStreak({ count: 1, lastDate: today })
      }
    }
  }, [step])

  if (alreadyPlayed) {
    return <AlreadyPlayed state={quizState} t={t} />
  }

  if (step === 'intro') {
    return <Intro questions={questions} t={t} onStart={() => setStep('question')} />
  }

  if (step === 'done') {
    const score = answers.filter(Boolean).length
    return (
      <Results
        score={score}
        total={questions.length}
        answers={answers}
        questions={questions}
        t={t}
        streak={streak}
        copied={copied}
        onShare={() => {
          const emoji = answers.map(a => a ? '🟢' : '🔴').join('')
          const text = `Lëtz Quiz ${todayStr()} — ${score}/${questions.length}\n${emoji}\nPlay at letz.play`
          navigator.clipboard?.writeText(text).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
          })
        }}
      />
    )
  }

  const q = questions[currentIdx]
  const cat = CAT_COLORS[q.category] || CAT_COLORS.culture

  const handleSelect = (idx) => {
    if (revealed) return
    setSelected(idx)
    setRevealed(true)
  }

  const handleNext = () => {
    const newAnswers = [...answers, selected === q.answer]
    setAnswers(newAnswers)
    if (currentIdx + 1 >= questions.length) {
      const score = newAnswers.filter(Boolean).length
      setQuizState({ date: todayStr(), score, total: questions.length })
      setStep('done')
    } else {
      setCurrentIdx(i => i + 1)
      setSelected(null)
      setRevealed(false)
    }
  }

  const progress = ((currentIdx) / questions.length) * 100

  return (
    <div className="container" style={{ paddingTop: 24 }}>
      {/* Progress */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <div className="progress-bar" style={{ flex: 1 }}>
          <div className="progress-fill" style={{ width: `${progress}%`, background: cat.text }} />
        </div>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, whiteSpace: 'nowrap' }}>
          {t('quiz.question')} {currentIdx + 1} {t('quiz.of')} {questions.length}
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
          {q.question}
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
              {opt}
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
            {q.explanation}
          </p>
          {q.link && (
            <a href={q.link} target="_blank" rel="noreferrer"
              style={{ display: 'inline-block', marginTop: 8, fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>
              {t('quiz.learnMore')} →
            </a>
          )}
        </div>
      )}

      {revealed && (
        <button
          onClick={handleNext}
          className="btn btn-primary btn-full animate-slide-up"
          style={{ marginBottom: 8 }}
        >
          {currentIdx + 1 >= questions.length ? t('quiz.finish') : t('quiz.next')} →
        </button>
      )}
    </div>
  )
}

function Intro({ questions, t, onStart }) {
  const categories = [...new Set(questions.map(q => q.category))]
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

      <div className="card" style={{ marginBottom: 20 }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
          Today's categories
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

function Results({ score, total, t, streak, onShare, copied }) {
  const pct = (score / total) * 100
  const msg = pct === 100 ? t('quiz.perfect') : pct >= 80 ? t('quiz.great') : pct >= 60 ? t('quiz.good') : t('quiz.tryAgain')

  return (
    <div className="container" style={{ paddingTop: 24 }}>
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
        {streak.count >= 2 && (
          <div style={{
            marginTop: 16, background: 'rgba(255,255,255,0.2)', borderRadius: 999,
            padding: '6px 16px', display: 'inline-block', fontWeight: 700
          }}>
            🔥 {streak.count} {t('quiz.streak')}
          </div>
        )}
      </div>

      <button onClick={onShare} className="btn btn-secondary btn-full" style={{ marginBottom: 12 }}>
        {copied ? `✓ ${t('common.copied')}` : `📤 ${t('quiz.shareResult')}`}
      </button>

      <div className="card">
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
                background: i < total ? (score > 0 ? '#D1FAE5' : '#FEE2E2') : 'var(--gray-100)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem'
              }}>
                {i < total ? (i < score ? '✓' : '✗') : '–'}
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>
                {t('quiz.question')} {i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: 20, color: 'var(--text-muted)', fontSize: '0.85rem' }}>
        {t('quiz.playAgain')} — {t('home.dailyReminderText')}
      </div>
    </div>
  )
}

function AlreadyPlayed({ state, t }) {
  return (
    <div className="container" style={{ paddingTop: 24 }}>
      <div style={{
        background: 'linear-gradient(135deg, var(--red) 0%, #C4222E 100%)',
        borderRadius: 'var(--radius-xl)', padding: '28px 24px', textAlign: 'center',
        color: 'white', marginBottom: 20
      }}>
        <div style={{ fontSize: '3rem', marginBottom: 8 }}>✅</div>
        <h2 style={{ color: 'white' }}>{t('quiz.alreadyPlayed')}</h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', marginTop: 8 }}>{t('quiz.comeBackTomorrow')}</p>
      </div>
      <div className="card" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{state.score}/{state.total}</div>
        <div style={{ color: 'var(--text-muted)', marginTop: 4 }}>{t('quiz.results')}</div>
      </div>
    </div>
  )
}
