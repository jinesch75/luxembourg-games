import { useState, useMemo } from 'react'
import { HelpCircle, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { QUESTIONS, getSubLevelQuestions } from './data/questions'
import { useGameContent } from '../../hooks/useGameContent'
import { trackGameEvent } from '../../utils/analytics'
import { getField, getArrayField } from '../../utils/contentLang'
import ReportErrorLink from '../../components/ReportErrorLink'

const CAT_COLORS = {
  language:     { bg: '#F3E8FF', text: '#7C3AED', icon: '🗣️' },
  history:      { bg: '#FEF3C7', text: '#B45309', icon: '📚' },
  culture:      { bg: '#FCE7F3', text: '#BE185D', icon: '🎭' },
  people:       { bg: '#D1FAE5', text: '#065F46', icon: '👤' },
  institutions: { bg: '#DBEAFE', text: '#1D4ED8', icon: '🏛️' },
  economy:      { bg: '#CFFAFE', text: '#0E7490', icon: '📊' }
}

// ─── Level system (5 top levels × 5 sub-levels) ───────────────────────────────
export const QUIZ_LEVELS = [
  { id: 'newcomer',   name: 'Newcomer',   icon: '🌱', color: '#6B7280', bg: '#F3F4F6', subLevels: 5 },
  { id: 'explorer',   name: 'Explorer',   icon: '🏘️', color: '#059669', bg: '#D1FAE5', subLevels: 5 },
  { id: 'resident',   name: 'Resident',   icon: '🌆', color: '#2563EB', bg: '#DBEAFE', subLevels: 5 },
  { id: 'citizen',    name: 'Citizen',    icon: '🏛️', color: '#7C3AED', bg: '#F3E8FF', subLevels: 5 },
  { id: 'ambassador', name: 'Ambassador', icon: '⭐', color: '#D97706', bg: '#FEF3C7', subLevels: 5 },
]

const POINTS_PER_CORRECT = 200 // max 1000 per sub-level

function parseProgress(progress) {
  const completed = progress?.completedSubLevels || {}
  for (let li = 0; li < QUIZ_LEVELS.length; li++) {
    const lvl = QUIZ_LEVELS[li]
    const done = completed[lvl.id] || 0
    if (done < lvl.subLevels) return { levelIdx: li, subLevel: done + 1 }
  }
  return { levelIdx: QUIZ_LEVELS.length - 1, subLevel: 5, finished: true }
}

function totalSubLevelsDone(progress) {
  const completed = progress?.completedSubLevels || {}
  return QUIZ_LEVELS.reduce((acc, lvl) => acc + (completed[lvl.id] || 0), 0)
}

// ─── Level Badge Display ───────────────────────────────────────────────────────
function LevelMapBadges({ progress }) {
  const { t } = useTranslation()
  const { levelIdx: curLvlIdx } = parseProgress(progress)
  return (
    <div style={{ display: 'flex', gap: 6, justifyContent: 'space-between' }}>
      {QUIZ_LEVELS.map((level, li) => {
        const done = (progress?.completedSubLevels || {})[level.id] || 0
        const isCurrentLevel = li === curLvlIdx
        const isFullyDone = done >= level.subLevels
        const isLocked = li > curLvlIdx
        return (
          <div key={level.id} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            opacity: isLocked ? 0.3 : 1,
            transform: isCurrentLevel ? 'scale(1.12)' : 'scale(1)',
            transition: 'transform 0.2s'
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: isFullyDone ? level.color : isCurrentLevel ? level.bg : 'var(--gray-100)',
              border: isCurrentLevel ? `2px solid ${level.color}` : '2px solid transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
              boxShadow: isCurrentLevel ? `0 0 8px ${level.color}40` : 'none'
            }}>
              {isLocked ? '🔒' : level.icon}
            </div>
            {/* Sub-level pip dots */}
            <div style={{ display: 'flex', gap: 2 }}>
              {Array.from({ length: level.subLevels }).map((_, si) => (
                <div key={si} style={{
                  width: 5, height: 5, borderRadius: '50%',
                  background: si < done ? level.color : (isCurrentLevel && si === done ? level.color + '80' : 'var(--gray-200)')
                }} />
              ))}
            </div>
            <div style={{
              fontSize: '0.5rem', fontWeight: isCurrentLevel ? 800 : 500,
              color: isCurrentLevel ? level.color : 'var(--text-muted)',
              textAlign: 'center', lineHeight: 1.2
            }}>
              {t(`quiz.levelNames.${level.id}`)}
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ─── Shuffle options for a question so the correct answer lands at a random position ──
function shuffleQuestionOptions(q) {
  const n = q.options.length
  // Build a shuffled index array using Fisher-Yates
  const indices = Array.from({ length: n }, (_, i) => i)
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[indices[i], indices[j]] = [indices[j], indices[i]]
  }
  const shuffledOptions = indices.map(i => q.options[i])
  const newAnswer = indices.indexOf(q.answer)

  // Shuffle translated options arrays too (if present)
  let shuffledTranslations = q.translations
  if (q.translations) {
    shuffledTranslations = {}
    for (const [lang, tData] of Object.entries(q.translations)) {
      shuffledTranslations[lang] = {
        ...tData,
        options: tData.options ? indices.map(i => tData.options[i]) : tData.options,
      }
    }
  }

  return { ...q, options: shuffledOptions, answer: newAnswer, translations: shuffledTranslations }
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function QuizGame() {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const lang = (i18n.language || 'en').split('-')[0]

  const [quizProgress, setQuizProgress] = useLocalStorage('letz-quiz-progress-v2', {
    completedSubLevels: { newcomer: 0, explorer: 0, resident: 0, citizen: 0, ambassador: 0 },
    totalPoints: 0,
  })

  const allQuestions = useGameContent('questions', QUESTIONS)

  // Derive current level/subLevel
  const { levelIdx: curLevelIdx, subLevel: curSubLevel } = parseProgress(quizProgress)
  const curLevel = QUIZ_LEVELS[curLevelIdx]

  // Get the 5 questions for this sub-level
  const questions = useMemo(
    () => getSubLevelQuestions(curLevel.id, curSubLevel, allQuestions),
    [curLevel.id, curSubLevel, allQuestions]
  )

  // Shuffle each question's options so the correct answer isn't always option B
  const shuffledQuestions = useMemo(
    () => questions.map(shuffleQuestionOptions),
    [questions]
  )

  const [step, setStep] = useState('intro') // intro | question | done
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [roundScores, setRoundScores] = useState([])
  const [levelUpInfo, setLevelUpInfo] = useState(null)
  // Stored as a single object { level, subLevel } so both are always updated atomically
  const [doneInfo, setDoneInfo] = useState(null)

  // Helper: get translated question field.
  // Priority: 1) translations object (admin-edited), 2) i18next key (static JSON), 3) English fallback
  const qText    = (q) => getField(q, 'question', lang) || t(`questions.${q.id}.q`,   { defaultValue: q.question })
  const qOption  = (q, i) => getArrayField(q, 'options', lang)[i] || t(`questions.${q.id}.o${i}`, { defaultValue: q.options[i] })
  const qExplain = (q) => getField(q, 'explanation', lang) || t(`questions.${q.id}.e`, { defaultValue: q.explanation })

  const handleSelect = (idx) => {
    if (revealed) return
    setSelected(idx)
    setRevealed(true)
  }

  const handleNext = () => {
    if (selected === null) return
    const q = shuffledQuestions[currentIdx]
    const isCorrect = selected === q.answer
    const pts = isCorrect ? POINTS_PER_CORRECT : 0
    const newScores = [...roundScores, { correct: isCorrect, pts }]

    if (currentIdx + 1 >= questions.length) {
      // Sub-level complete
      const sessionTotal = newScores.reduce((s, r) => s + r.pts, 0)
      const prevLevelIdx = curLevelIdx
      const newCompleted = {
        ...quizProgress.completedSubLevels,
        [curLevel.id]: (quizProgress.completedSubLevels[curLevel.id] || 0) + 1
      }
      const newTotal = (quizProgress.totalPoints || 0) + sessionTotal
      const newProgressObj = { completedSubLevels: newCompleted, totalPoints: newTotal }
      const { levelIdx: newLevelIdx } = parseProgress(newProgressObj)
      if (newLevelIdx > prevLevelIdx) setLevelUpInfo(QUIZ_LEVELS[newLevelIdx])

      setQuizProgress(newProgressObj)
      setRoundScores(newScores)
      setDoneInfo({ level: curLevel, subLevel: curSubLevel })
      trackGameEvent('quiz', 'complete', { score: sessionTotal, level: curLevel.id, subLevel: curSubLevel })
      setStep('done')
    } else {
      setRoundScores(newScores)
      setCurrentIdx(i => i + 1)
      setSelected(null)
      setRevealed(false)
    }
  }

  const handleReplay = () => {
    const isFinished = (quizProgress.completedSubLevels['ambassador'] || 0) >= 5
    if (isFinished) {
      // Reset all progress back to zero
      setQuizProgress({
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

  if (step === 'intro') {
    return (
      <Intro
        t={t}
        quizProgress={quizProgress}
        curLevel={curLevel}
        curSubLevel={curSubLevel}
        onStart={() => { trackGameEvent('quiz', 'start'); setStep('question') }}
      />
    )
  }

  if (step === 'done') {
    return (
      <Done
        scores={roundScores}
        questions={questions}
        t={t}
        quizProgress={quizProgress}
        curLevel={doneInfo?.level ?? curLevel}
        curSubLevel={doneInfo?.subLevel ?? curSubLevel}
        levelUpInfo={levelUpInfo}
        onReplay={handleReplay}
        onReset={() => {
          setQuizProgress({
            completedSubLevels: { newcomer: 0, explorer: 0, resident: 0, citizen: 0, ambassador: 0 },
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

  const q = shuffledQuestions[currentIdx]
  if (!q) {
    // Questions failed to load — go back to intro so the user isn't stuck on a blank screen
    return (
      <div className="container" style={{ paddingTop: 40, textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)', marginBottom: 16 }}>
          {t('quiz.couldNotLoad')}
        </p>
        <button className="btn-hero-primary" onClick={handleReplay}>
          ← {t('common.back')}
        </button>
      </div>
    )
  }
  const cat = CAT_COLORS[q.category] || CAT_COLORS.culture

  return (
    <div className="container" style={{ paddingTop: 20 }}>
      {/* Exit button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
        <button
          onClick={() => navigate('/')}
          style={{
            display: 'flex', alignItems: 'center', gap: 5,
            background: 'none', border: '1px solid var(--border)',
            borderRadius: 8, padding: '5px 12px',
            cursor: 'pointer', fontFamily: 'var(--font)',
            fontSize: '0.75rem', fontWeight: 600,
            color: 'var(--text-muted)',
            transition: 'background 0.15s ease, color 0.15s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--gray-100)'; e.currentTarget.style.color = 'var(--text)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--text-muted)' }}
        >
          <X size={14} strokeWidth={2.5} />
          {t('nav.home')}
        </button>
      </div>

      {/* Progress bar */}
      <div style={{ marginBottom: 20 }}>
        <div className="game-progress-row">
          <span className="game-progress-label">
            {t('quiz.question')} {currentIdx + 1} {t('quiz.of')} {questions.length}
          </span>
          <span className="game-progress-pct">
            {Math.round(((currentIdx + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }} />
        </div>
      </div>

      {/* Question */}
      <div style={{
        marginBottom: 18,
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      }}>
        <div style={{
          height: 5,
          background: `linear-gradient(90deg, ${curLevel.color}, ${cat.text})`,
        }} />
        <div style={{
          padding: '22px 24px',
          background: 'linear-gradient(145deg, #BFDBFE 0%, #BAE6FD 60%, #93C5FD 100%)',
          border: '1.5px solid var(--border)',
          borderTop: 'none',
          borderBottomLeftRadius: 'var(--radius-xl)',
          borderBottomRightRadius: 'var(--radius-xl)',
        }}>
          <h2 style={{ fontSize: 'clamp(1.05rem, 4vw, 1.25rem)', lineHeight: 1.5, fontWeight: 700, margin: 0, color: 'var(--text)' }}>
            {qText(q)}
          </h2>
        </div>
      </div>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
        {q.options.map((opt, idx) => (
          <button
            key={`${q.id}-${idx}`}
            onClick={() => handleSelect(idx)}
            className="quiz-option"
          >
            <span className="quiz-option-letter" translate="no">
              {String.fromCharCode(65 + idx)}
            </span>
            {qOption(q, idx)}
          </button>
        ))}
      </div>

      {/* Answer Reveal — bottom-sheet panel, homepage dark aesthetic */}
      {revealed && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000,
          background: 'rgba(0,0,0,0.65)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '16px',
          boxSizing: 'border-box',
          animation: 'fadeIn 0.2s ease'
        }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '28px 20px 28px',
            maxWidth: 520, width: '100%',
            boxSizing: 'border-box',
            maxHeight: 'calc(100vh - 32px)',
            overflowY: 'auto',
            boxShadow: '0 8px 40px rgba(0,0,0,0.22)',
            animation: 'slideUp 0.28s ease',
            border: '1px solid #E5E7EB',
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
                color: selected === q.answer ? '#059669' : '#DC2626',
                animation: 'popIn 0.32s ease',
              }}>
                {selected === q.answer ? `+${POINTS_PER_CORRECT}` : '+0'}
              </div>
              <div style={{
                fontSize: '0.68rem', fontWeight: 600,
                color: '#9CA3AF',
                textTransform: 'uppercase', letterSpacing: '0.14em',
                marginTop: 5,
              }}>
                {t('quiz.points', { defaultValue: 'points' })}
              </div>

              {/* Correct / Wrong pill badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                marginTop: 14,
                background: selected === q.answer ? '#ECFDF5' : '#FEF2F2',
                border: `1px solid ${selected === q.answer ? '#6EE7B7' : '#FCA5A5'}`,
                borderRadius: 999,
                padding: '5px 16px',
                color: selected === q.answer ? '#065F46' : '#991B1B',
                fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em',
              }}>
                <span>{selected === q.answer ? '✓' : '✗'}</span>
                <span>{selected === q.answer
                  ? t('quiz.correct', { defaultValue: 'Correct!' })
                  : t('quiz.incorrect', { defaultValue: 'Incorrect' })}
                </span>
              </div>
            </div>

            {/* Thin divider */}
            <div style={{ height: 1, background: '#E5E7EB', marginBottom: 18 }} />

            {/* Your answer */}
            <div style={{ marginBottom: 10 }}>
              <div style={{
                fontSize: '0.63rem', fontWeight: 700,
                color: 'rgba(255,255,255,0.38)',
                textTransform: 'uppercase', letterSpacing: '0.13em',
                marginBottom: 7,
              }}>
                {t('quiz.yourAnswer')}
              </div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '13px 16px',
                background: selected === q.answer ? '#F0FDF4' : '#FFF1F2',
                borderRadius: 12,
                border: `1px solid ${selected === q.answer ? '#BBF7D0' : '#FECDD3'}`,
              }}>
                <span style={{
                  width: 30, height: 30, borderRadius: 9, flexShrink: 0,
                  background: selected === q.answer ? '#DCFCE7' : '#FFE4E6',
                  color: selected === q.answer ? '#15803D' : '#BE123C',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.9rem', fontWeight: 800,
                }}>
                  {selected === q.answer ? '✓' : '✗'}
                </span>
                <span style={{ fontWeight: 600, color: '#111827', fontSize: '0.9rem', lineHeight: 1.45 }}>
                  {qOption(q, selected)}
                </span>
              </div>
            </div>

            {/* Correct answer — only shown when wrong */}
            {selected !== q.answer && (
              <div style={{ marginBottom: 10 }}>
                <div style={{
                  fontSize: '0.63rem', fontWeight: 700,
                  color: '#9CA3AF',
                  textTransform: 'uppercase', letterSpacing: '0.11em',
                  marginBottom: 7,
                }}>
                  {t('quiz.correctAnswer')}
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
                    {qOption(q, q.answer)}
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
                {t('quiz.explanation')}
              </div>
              <p style={{
                fontSize: '0.875rem', margin: 0, lineHeight: 1.65,
                color: '#374151',
                background: '#F9FAFB',
                borderRadius: 12,
                padding: '12px 15px',
                border: '1px solid #E5E7EB',
              }}>
                {qExplain(q)}
              </p>
            </div>

            {/* Next / Finish button — styled like homepage quiz game button */}
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
                fontFamily: 'var(--font)',
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
                {currentIdx + 1 >= questions.length ? '🏁' : '▶'}
              </span>
              <span style={{ flex: 1, textAlign: 'left', lineHeight: 1.3 }}>
                <span style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700 }}>
                  {currentIdx + 1 >= questions.length ? t('quiz.finish') : t('quiz.next')}
                </span>
                <span style={{ display: 'block', fontSize: '0.7rem', opacity: 0.65, fontWeight: 400, marginTop: 1 }}>
                  {currentIdx + 1 >= questions.length
                    ? t('quiz.seeResults', { defaultValue: 'See your results' })
                    : `${t('quiz.question', { defaultValue: 'Question' })} ${currentIdx + 2} ${t('quiz.of', { defaultValue: 'of' })} ${questions.length}`}
                </span>
              </span>
              <span style={{ opacity: 0.55, fontSize: '1.1rem' }}>→</span>
            </button>

            <ReportErrorLink
              gameType="quiz"
              questionId={q.id}
              questionText={qText(q)}
            />

          </div>
        </div>
      )}
    </div>
  )
}

// ─── Intro Screen ──────────────────────────────────────────────────────────────
function Intro({ t, quizProgress, curLevel, curSubLevel, onStart }) {
  const isFinished = (quizProgress.completedSubLevels['ambassador'] || 0) >= 5
  const doneSubs = totalSubLevelsDone(quizProgress)
  const totalSubs = QUIZ_LEVELS.reduce((acc, l) => acc + l.subLevels, 0)

  return (
    <div>
      {/* Title header */}
      <div style={{
        color: 'white', textAlign: 'center',
        padding: '18px 20px 8px',
      }}>
        <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800 }}>{t('quiz.title')}</h2>
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
              {(quizProgress.totalPoints || 0).toLocaleString()} pts
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
          }}><HelpCircle size={26} strokeWidth={1.75} /></span>
          <span style={{ flex: 1, textAlign: 'left' }}>
            <strong style={{ display: 'block', fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
              {isFinished ? t('quiz.allDone') : t('quiz.startGame', { defaultValue: 'Start the game' })}
            </strong>
            {!isFinished && (
              <small style={{ display: 'block', fontSize: '0.72rem', opacity: 0.75, marginTop: 3, fontWeight: 400 }}>
                {t(`quiz.levelNames.${curLevel.id}`)} · {t('quiz.subLevel', { defaultValue: 'Sub-level' })} {curSubLevel}/5
              </small>
            )}
          </span>
          <span style={{ opacity: 0.45, fontSize: '1.1rem' }}>→</span>
        </button>

      </div>
    </div>
  )
}

// ─── Done Screen ───────────────────────────────────────────────────────────────
function Done({ scores, questions, t, quizProgress, curLevel, curSubLevel, levelUpInfo, onReplay, onReset }) {
  const [confirmReset, setConfirmReset] = useState(false)
  const sessionTotal = scores.reduce((s, r) => s + r.pts, 0)
  const maxTotal = scores.length * POINTS_PER_CORRECT
  const { levelIdx: nextLevelIdx, subLevel: nextSub } = parseProgress(quizProgress)
  const nextLevel = QUIZ_LEVELS[nextLevelIdx]
  const isFinished = (quizProgress.completedSubLevels['ambassador'] || 0) >= 5

  return (
    <div className="container" style={{ paddingTop: 28 }}>
      {/* Progress */}
      <div className="card" style={{ marginBottom: 16, padding: '18px 20px' }}>
        <div className="section-title" style={{ marginBottom: 12 }}>{t('quiz.yourProgress')}</div>
        <LevelMapBadges progress={quizProgress} />
        <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t('quiz.ptsThisRound', { pts: sessionTotal.toLocaleString() })}</span>
          <span style={{ fontWeight: 800, color: 'var(--red)', fontSize: '1rem' }}>{t('quiz.totalPts', { pts: (quizProgress.totalPoints || 0).toLocaleString() })}</span>
        </div>
      </div>

      {isFinished ? (
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
              {t(`quiz.levelNames.${nextLevel.id}`)} · {t('quiz.subLevel', { defaultValue: 'Sub-level' })} {nextSub}/5
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
