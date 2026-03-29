import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { QUESTIONS, getSubLevelQuestions } from './data/questions'
import { useGameContent } from '../../hooks/useGameContent'
import { trackGameEvent } from '../../utils/analytics'
import { getField, getArrayField } from '../../utils/contentLang'

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

// ─── Main component ───────────────────────────────────────────────────────────
export default function QuizGame() {
  const { t, i18n } = useTranslation()
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
    const q = questions[currentIdx]
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
    setStep('intro')
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
      />
    )
  }

  const q = questions[currentIdx]
  if (!q) {
    // Questions failed to load — go back to intro so the user isn't stuck on a blank screen
    return (
      <div className="container" style={{ paddingTop: 40, textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)', marginBottom: 16 }}>
          {t('quiz.couldNotLoad')}
        </p>
        <button className="btn btn-primary" onClick={handleReplay}>
          ← {t('common.back')}
        </button>
      </div>
    )
  }
  const cat = CAT_COLORS[q.category] || CAT_COLORS.culture

  return (
    <div className="container" style={{ paddingTop: 24 }}>
      {/* Level + sub-level badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
        <span style={{
          background: curLevel.bg, color: curLevel.color,
          borderRadius: 999, padding: '4px 12px',
          fontSize: '0.75rem', fontWeight: 700,
          display: 'inline-flex', alignItems: 'center', gap: 5
        }}>
          {curLevel.icon} {t(`quiz.levelNames.${curLevel.id}`)} {curSubLevel}/5
        </span>
        <span style={{
          background: cat.bg, color: cat.text,
          borderRadius: 999, padding: '4px 12px',
          fontSize: '0.75rem', fontWeight: 700,
          display: 'inline-flex', alignItems: 'center', gap: 5
        }}>
          {cat.icon} {t(`quiz.categories.${q.category}`)}
        </span>
      </div>

      {/* Progress bar */}
      <div style={{ marginBottom: 16 }}>
        <div className="game-progress-row">
          <span className="game-progress-label">
            {t('quiz.question')} {currentIdx + 1} {t('quiz.of')} {questions.length}
          </span>
          <span className="game-progress-pct">
            {Math.round((currentIdx / questions.length) * 100)}%
          </span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(currentIdx / questions.length) * 100}%` }} />
        </div>
      </div>

      {/* Question */}
      <div className="card" style={{ marginBottom: 20, padding: 24 }}>
        <h2 style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', lineHeight: 1.4, fontWeight: 700, margin: 0 }}>
          {qText(q)}
        </h2>
      </div>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            className="quiz-option"
          >
            <span className="quiz-option-letter">
              {String.fromCharCode(65 + idx)}
            </span>
            {qOption(q, idx)}
          </button>
        ))}
      </div>

      {/* Answer Pop-up Modal */}
      {revealed && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '20px',
          animation: 'fadeIn 0.2s ease'
        }}>
          <div style={{
            background: 'white', borderRadius: 'var(--radius-xl)',
            padding: '28px 24px', maxWidth: 460, width: '100%',
            boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
            animation: 'popIn 0.25s ease'
          }}>
            {/* Points earned */}
            <div style={{
              textAlign: 'center', marginBottom: 16,
              background: selected === q.answer ? '#D1FAE5' : '#FEE2E2',
              borderRadius: 'var(--radius)', padding: '10px'
            }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: selected === q.answer ? '#059669' : '#DC2626' }}>
                {selected === q.answer ? `+${POINTS_PER_CORRECT} pts` : '+0 pts'}
              </div>
            </div>

            {/* Your answer */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
                {t('quiz.yourAnswer')}
              </div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 14px',
                background: selected === q.answer ? '#D1FAE5' : '#FEE2E2',
                borderRadius: 'var(--radius)',
                border: `1.5px solid ${selected === q.answer ? '#059669' : '#DC2626'}`
              }}>
                <span style={{
                  width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
                  background: selected === q.answer ? '#059669' : '#DC2626',
                  color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.8rem', fontWeight: 700
                }}>
                  {selected === q.answer ? '✓' : '✗'}
                </span>
                <span style={{ fontWeight: 600, color: selected === q.answer ? '#065F46' : '#991B1B', fontSize: '0.95rem' }}>
                  {qOption(q, selected)}
                </span>
              </div>
            </div>

            {/* Correct answer (only if wrong) */}
            {selected !== q.answer && (
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
                  {t('quiz.correctAnswer')}
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '10px 14px', background: '#D1FAE5',
                  borderRadius: 'var(--radius)', border: '1.5px solid #059669'
                }}>
                  <span style={{
                    width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
                    background: '#059669', color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.8rem', fontWeight: 700
                  }}>✓</span>
                  <span style={{ fontWeight: 600, color: '#065F46', fontSize: '0.95rem' }}>
                    {qOption(q, q.answer)}
                  </span>
                </div>
              </div>
            )}

            {/* Explanation */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
                {t('quiz.explanation')}
              </div>
              <p style={{ fontSize: '0.9rem', margin: 0, lineHeight: 1.6, color: 'var(--gray-700)' }}>
                {qExplain(q)}
              </p>
            </div>

            <button onClick={handleNext} className="btn btn-primary btn-full">
              {currentIdx + 1 >= questions.length ? t('quiz.finish') : t('quiz.next')} →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Intro Screen ──────────────────────────────────────────────────────────────
function Intro({ t, quizProgress, curLevel, curSubLevel, onStart }) {
  const isFinished = (quizProgress.completedSubLevels['ambassador'] || 0) >= 5

  return (
    <div>
      {/* Level header */}
      <div style={{
        color: 'white', textAlign: 'center',
        padding: '18px 20px 8px',
      }}>
        <span style={{ fontSize: '2rem', display: 'block', marginBottom: 4 }}>❓</span>
        <h2 style={{ margin: '0 0 4px', fontSize: '1.4rem', fontWeight: 800 }}>{t('quiz.title')}</h2>
        <p style={{ margin: 0, opacity: 0.75, fontSize: '0.88rem' }}>
          {isFinished
            ? `🏆 ${t('quiz.allLevelsComplete')}`
            : `${t(`quiz.levelNames.${curLevel.id}`)} · ${t('quiz.subLevelOf', { num: curSubLevel })}`}
        </p>
      </div>

      {/* Content */}
      <div className="container" style={{ paddingTop: 28 }}>
        <button
          onClick={onStart}
          className="btn btn-full btn-lg"
          style={{ background: curLevel.color, color: 'white', marginBottom: 16, borderRadius: 'var(--radius-lg)' }}
        >
          {isFinished
            ? `🔄 ${t('quiz.allDone')}`
            : `${curLevel.icon} ${t('quiz.startSubLevel', { name: t(`quiz.levelNames.${curLevel.id}`), num: curSubLevel })} →`}
        </button>

        {/* Progress card */}
        <div className="card" style={{ marginBottom: 16, padding: '18px 20px' }}>
          <div className="section-title" style={{ marginBottom: 12 }}>{t('quiz.yourProgress')}</div>
          <LevelMapBadges progress={quizProgress} />
          <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {t('quiz.subLevelsDone', { done: totalSubLevelsDone(quizProgress) })}
            </span>
            <span style={{ fontWeight: 800, color: 'var(--red)', fontSize: '1rem' }}>
              {(quizProgress.totalPoints || 0).toLocaleString()} pts
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Done Screen ───────────────────────────────────────────────────────────────
function Done({ scores, questions, t, quizProgress, curLevel, curSubLevel, levelUpInfo, onReplay }) {
  const sessionTotal = scores.reduce((s, r) => s + r.pts, 0)
  const maxTotal = scores.length * POINTS_PER_CORRECT
  const { levelIdx: nextLevelIdx, subLevel: nextSub } = parseProgress(quizProgress)
  const nextLevel = QUIZ_LEVELS[nextLevelIdx]
  const isFinished = (quizProgress.completedSubLevels['ambassador'] || 0) >= 5

  return (
    <div>
      {/* Full-width result hero */}
      <div style={{
        background: 'linear-gradient(135deg, #065F46 0%, #059669 100%)',
        color: 'white', textAlign: 'center',
        padding: '48px 20px 40px',
      }}>
        {/* Level up celebration */}
        {levelUpInfo && (
          <div className="animate-slide-up" style={{
            background: `linear-gradient(135deg, ${levelUpInfo.color}CC 0%, ${levelUpInfo.color} 100%)`,
            borderRadius: 'var(--radius-xl)', padding: '16px 24px', marginBottom: 20,
            display: 'inline-block'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: 4 }}>{levelUpInfo.icon}</div>
            <div style={{ fontWeight: 800, fontSize: '1rem' }}>{t('quiz.newLevelUnlocked')}</div>
            <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>{t(`quiz.levelNames.${levelUpInfo.id}`)}</div>
          </div>
        )}

        <span style={{ fontSize: '3rem', display: 'block', marginBottom: 12 }}>{curLevel.icon}</span>
        <h2 style={{ margin: '0 0 20px', fontSize: '1.6rem', fontWeight: 800 }}>
          {t(`quiz.levelNames.${curLevel.id}`)} — {t('quiz.subLevelComplete', { num: curSubLevel })}
        </h2>
        <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 'var(--radius)', padding: '14px 20px', display: 'inline-block', minWidth: 200 }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.8, marginBottom: 6 }}>
            {t('quiz.roundResult')}
          </div>
          <div style={{ fontSize: '1.6rem', fontWeight: 800, lineHeight: 1 }}>
            {sessionTotal.toLocaleString()} / {maxTotal.toLocaleString()}
          </div>
          <div style={{ fontSize: '0.8rem', opacity: 0.85, marginTop: 4 }}>{t('quiz.pointsEarned')}</div>
        </div>
      </div>

      {/* Content */}
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
          <button onClick={onReplay} className="btn btn-full btn-lg" style={{ background: '#D97706', color: 'white' }}>
            🏆 {t('quiz.allDone')} →
          </button>
        ) : (
          <button onClick={onReplay} className="btn btn-full btn-lg" style={{ background: curLevel.color, color: 'white', whiteSpace: 'normal', lineHeight: 1.3 }}>
            {t('quiz.continueNextSubLevel')} →
          </button>
        )}
      </div>
    </div>
  )
}
