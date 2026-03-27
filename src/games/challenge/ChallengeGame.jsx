import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { weekIndex, todayStr } from '../../utils/dateUtils'
import { getWeeklyMissions, CATEGORY_META, XP_VALUES } from './data/missions'
import { trackGameEvent } from '../../utils/analytics'

// ─── Main Component ──────────────────────────────────────────────────────────

export default function ChallengeGame() {
  const { t } = useTranslation()
  const currentWeek = weekIndex()

  // Per-week state: which missions are ticked off this week
  const [weekState, setWeekState] = useLocalStorage('letz-challenge-week', {
    weekIdx: currentWeek,
    completed: [],
    startedDate: todayStr(),
  })

  // Lifetime progress
  const [progress, setProgress] = useLocalStorage('letz-challenge-progress', {
    totalXp: 0,
    completedWeeks: [],
    badges: [],
  })

  const [step, setStep] = useState('intro') // intro | game | done
  const [expandedId, setExpandedId] = useState(null)

  const weekData = useMemo(() => getWeeklyMissions(currentWeek), [currentWeek])

  // Reset per-week state when a new week starts
  const effectiveWeekState = weekState.weekIdx === currentWeek
    ? weekState
    : { weekIdx: currentWeek, completed: [], startedDate: todayStr() }

  const completedIds = effectiveWeekState.completed

  const allDone = completedIds.length >= weekData.missions.length

  const weekXp = weekData.missions
    .filter(m => completedIds.includes(m.id))
    .reduce((sum, m) => sum + XP_VALUES[m.difficulty], 0)

  const totalPossibleXp = weekData.missions.reduce((sum, m) => sum + XP_VALUES[m.difficulty], 0)

  const toggleMission = (mission) => {
    if (completedIds.includes(mission.id)) return // can't un-complete

    const newCompleted = [...completedIds, mission.id]
    const newXp = weekData.missions
      .filter(m => newCompleted.includes(m.id))
      .reduce((sum, m) => sum + XP_VALUES[m.difficulty], 0)

    const newWeekState = { ...effectiveWeekState, completed: newCompleted }
    setWeekState(newWeekState)
    trackGameEvent('challenge', 'mission_complete', { missionId: mission.id })

    // Check week completion
    if (newCompleted.length >= weekData.missions.length) {
      const newBadge = `week-${currentWeek}`
      const alreadyHasBadge = progress.completedWeeks.includes(currentWeek)
      setProgress(prev => ({
        totalXp: (prev.totalXp || 0) + XP_VALUES[mission.difficulty],
        completedWeeks: alreadyHasBadge ? prev.completedWeeks : [...(prev.completedWeeks || []), currentWeek],
        badges: alreadyHasBadge ? prev.badges : [...(prev.badges || []), newBadge],
      }))
      trackGameEvent('challenge', 'week_complete', { weekIdx: currentWeek })
      setTimeout(() => setStep('done'), 400)
    } else {
      setProgress(prev => ({
        ...prev,
        totalXp: (prev.totalXp || 0) + XP_VALUES[mission.difficulty],
      }))
    }

    setExpandedId(null)
  }

  if (step === 'intro') {
    return (
      <Intro
        weekData={weekData}
        completedIds={completedIds}
        totalXp={progress.totalXp || 0}
        completedWeeks={(progress.completedWeeks || []).length}
        t={t}
        onStart={() => { trackGameEvent('challenge', 'start'); setStep('game') }}
      />
    )
  }

  if (step === 'done' || allDone) {
    return (
      <Done
        weekData={weekData}
        weekXp={weekXp}
        totalXp={progress.totalXp || 0}
        completedWeeks={(progress.completedWeeks || []).length}
        t={t}
        onBack={() => setStep('game')}
      />
    )
  }

  return (
    <Game
      weekData={weekData}
      completedIds={completedIds}
      weekXp={weekXp}
      totalPossibleXp={totalPossibleXp}
      expandedId={expandedId}
      setExpandedId={setExpandedId}
      onComplete={toggleMission}
      t={t}
    />
  )
}

// ─── Intro Screen ─────────────────────────────────────────────────────────────

function Intro({ weekData, completedIds, totalXp, completedWeeks, t, onStart }) {
  const hasStarted = completedIds.length > 0

  return (
    <div className="container" style={{ paddingTop: 24 }}>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #059669 0%, #065F46 100%)',
        borderRadius: 'var(--radius-xl)', padding: '28px 24px', marginBottom: 24,
        color: 'white', textAlign: 'center'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>🌍</div>
        <h1 style={{ color: 'white', marginBottom: 8 }}>{t('challenge.title')}</h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>{t('challenge.subtitle')}</p>
      </div>

      {/* This week's theme */}
      <div className="card" style={{ marginBottom: 16, padding: '20px 20px 16px' }}>
        <div style={{
          fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)',
          textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8
        }}>
          {t('challenge.thisWeek')}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <span style={{ fontSize: '2rem' }}>{weekData.themeIcon}</span>
          <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--gray-800)' }}>
            {weekData.theme}
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {weekData.missions.map(m => {
            const meta = CATEGORY_META[m.category]
            return (
              <span key={m.id} style={{
                background: meta.bg, color: meta.text, borderRadius: 999,
                padding: '3px 10px', fontSize: '0.75rem', fontWeight: 600,
                display: 'inline-flex', alignItems: 'center', gap: 4
              }}>
                {meta.icon} {m.emoji}
              </span>
            )
          })}
        </div>
      </div>

      {/* Progress stats */}
      {(totalXp > 0 || completedWeeks > 0) && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
          <div className="card" style={{ textAlign: 'center', padding: 16 }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#059669' }}>{totalXp}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 2 }}>
              {t('challenge.totalXp')}
            </div>
          </div>
          <div className="card" style={{ textAlign: 'center', padding: 16 }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#7C3AED' }}>{completedWeeks}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 2 }}>
              {t('challenge.weeksCompleted')}
            </div>
          </div>
        </div>
      )}

      {/* Biergerpakt link */}
      <div style={{
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2563EB 100%)',
        borderRadius: 'var(--radius-lg)', padding: '16px', marginBottom: 20,
        color: 'white', display: 'flex', gap: 12, alignItems: 'center'
      }}>
        <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>🤝</span>
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: 3 }}>Biergerpakt</div>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', margin: 0 }}>
            {t('challenge.biergerpaktNote')}
          </p>
        </div>
      </div>

      <button
        onClick={onStart}
        className="btn btn-full btn-lg"
        style={{ background: '#059669', color: 'white' }}
      >
        {hasStarted ? t('challenge.continueMissions') : t('challenge.startMissions')} →
      </button>
    </div>
  )
}

// ─── Game Screen ──────────────────────────────────────────────────────────────

function Game({ weekData, completedIds, weekXp, totalPossibleXp, expandedId, setExpandedId, onComplete, t }) {
  const progress = completedIds.length / weekData.missions.length
  const xpProgress = weekXp / totalPossibleXp

  return (
    <div className="container" style={{ paddingTop: 20 }}>
      {/* Header */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
          <h2 style={{ fontSize: '1rem', margin: 0 }}>{weekData.themeIcon} {weekData.theme}</h2>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            {completedIds.length}/{weekData.missions.length} {t('challenge.done')}
          </span>
        </div>

        {/* Progress bar */}
        <div className="progress-bar" style={{ marginBottom: 8 }}>
          <div className="progress-fill" style={{ width: `${progress * 100}%`, background: '#059669', transition: 'width 0.4s ease' }} />
        </div>

        {/* XP bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 700 }}>⚡ {weekXp} XP</span>
          <div style={{ flex: 1, height: 4, background: 'var(--gray-100)', borderRadius: 99, overflow: 'hidden' }}>
            <div style={{
              height: '100%', background: 'linear-gradient(90deg, #10B981, #059669)',
              width: `${xpProgress * 100}%`, borderRadius: 99, transition: 'width 0.4s ease'
            }} />
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>{totalPossibleXp} XP</span>
        </div>
      </div>

      {/* Mission list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {weekData.missions.map(mission => {
          const meta = CATEGORY_META[mission.category]
          const isDone = completedIds.includes(mission.id)
          const isExpanded = expandedId === mission.id
          const xp = XP_VALUES[mission.difficulty]

          return (
            <div
              key={mission.id}
              className={isDone ? '' : 'animate-slide-up'}
              style={{
                background: isDone ? '#F0FDF4' : 'white',
                border: `2px solid ${isDone ? '#86EFAC' : isExpanded ? meta.border : 'var(--border)'}`,
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                transition: 'border-color 0.15s, background 0.15s',
                opacity: isDone ? 0.85 : 1,
              }}
            >
              {/* Mission header (always visible) */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : mission.id)}
                style={{
                  width: '100%', textAlign: 'left', padding: '14px 16px',
                  background: 'transparent', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 12,
                  fontFamily: 'var(--font)',
                }}
              >
                {/* Completion circle */}
                <div style={{
                  width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                  background: isDone ? '#22C55E' : meta.bg,
                  border: `2px solid ${isDone ? '#16A34A' : meta.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.9rem',
                }}>
                  {isDone ? '✓' : mission.emoji}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontWeight: 700, fontSize: '0.9rem',
                    color: isDone ? '#15803D' : 'var(--gray-800)',
                    lineHeight: 1.3,
                    textDecoration: isDone ? 'line-through' : 'none',
                    opacity: isDone ? 0.7 : 1,
                  }}>
                    {mission.title}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 3 }}>
                    <span style={{
                      background: meta.bg, color: meta.text, borderRadius: 999,
                      padding: '1px 8px', fontSize: '0.7rem', fontWeight: 600
                    }}>
                      {meta.icon} {t(`challenge.categories.${mission.category}`)}
                    </span>
                    <span style={{ fontSize: '0.7rem', color: '#059669', fontWeight: 700 }}>+{xp} XP</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      {t(`challenge.difficulty.${mission.difficulty}`)}
                    </span>
                  </div>
                </div>

                <span style={{
                  fontSize: '0.8rem', color: 'var(--gray-400)',
                  transform: isExpanded ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s',
                  flexShrink: 0,
                }}>▾</span>
              </button>

              {/* Expanded content */}
              {isExpanded && !isDone && (
                <div className="animate-slide-up" style={{ padding: '0 16px 16px', borderTop: '1px solid var(--border)' }}>
                  <p style={{ fontSize: '0.88rem', color: 'var(--gray-700)', lineHeight: 1.55, marginTop: 12, marginBottom: 10 }}>
                    {mission.description}
                  </p>

                  {mission.tip && (
                    <div style={{
                      background: '#FEF9C3', border: '1px solid #FDE047',
                      borderRadius: 8, padding: '10px 12px', marginBottom: 12,
                      fontSize: '0.8rem', color: '#713F12', lineHeight: 1.4,
                    }}>
                      💡 {mission.tip}
                    </div>
                  )}

                  {mission.biergerpaktLink && (
                    <a
                      href={mission.biergerpaktLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', gap: 8,
                        background: '#E0F2FE', border: '1px solid #7DD3FC',
                        borderRadius: 8, padding: '10px 12px', marginBottom: 12,
                        textDecoration: 'none', color: '#0369A1', fontSize: '0.82rem', fontWeight: 600,
                      }}
                    >
                      🤝 {t('challenge.openBiergerpakt')} →
                    </a>
                  )}

                  <button
                    onClick={() => onComplete(mission)}
                    className="btn btn-full"
                    style={{ background: '#059669', color: 'white', marginTop: 4 }}
                  >
                    ✓ {t('challenge.markDone')} (+{xp} XP)
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Footer note */}
      <div style={{
        textAlign: 'center', marginTop: 20, marginBottom: 8,
        fontSize: '0.8rem', color: 'var(--text-muted)'
      }}>
        🔄 {t('challenge.newMissionsNote')}
      </div>
    </div>
  )
}

// ─── Done Screen ──────────────────────────────────────────────────────────────

function Done({ weekData, weekXp, totalXp, completedWeeks, t, onBack }) {
  return (
    <div className="container" style={{ paddingTop: 24 }}>
      <div style={{
        background: 'linear-gradient(135deg, #059669 0%, #065F46 100%)',
        borderRadius: 'var(--radius-xl)', padding: '28px 24px', marginBottom: 24,
        color: 'white', textAlign: 'center'
      }}>
        <div style={{ fontSize: '3.5rem', marginBottom: 8 }}>🏅</div>
        <h2 style={{ color: 'white', marginBottom: 6 }}>{t('challenge.weekComplete')}</h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>{weekData.theme}</p>
        <div style={{
          marginTop: 16, background: 'rgba(255,255,255,0.2)',
          borderRadius: 999, padding: '8px 20px',
          display: 'inline-block', fontWeight: 800, fontSize: '1.2rem'
        }}>
          +{weekXp} XP ⚡
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
        <div className="card" style={{ textAlign: 'center', padding: 18 }}>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#059669' }}>{totalXp}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 2 }}>
            {t('challenge.totalXp')}
          </div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: 18 }}>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#7C3AED' }}>{completedWeeks}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 2 }}>
            {t('challenge.weeksCompleted')}
          </div>
        </div>
      </div>

      {/* Missions completed summary */}
      <div className="card" style={{ marginBottom: 20 }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
          {t('challenge.missionsCompleted')}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {weekData.missions.map(m => {
            const meta = CATEGORY_META[m.category]
            return (
              <div key={m.id} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '8px 10px', background: '#F0FDF4', borderRadius: 8,
                border: '1px solid #BBF7D0'
              }}>
                <span style={{
                  width: 26, height: 26, borderRadius: '50%',
                  background: '#22C55E', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.75rem', fontWeight: 700, flexShrink: 0
                }}>✓</span>
                <span style={{ flex: 1, fontSize: '0.85rem', color: '#15803D', fontWeight: 500 }}>
                  {m.title}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 700 }}>
                  +{XP_VALUES[m.difficulty]}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Biergerpakt CTA */}
      <a
        href="https://biergerpakt.zesummeliewen.lu/en/"
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'block',
          background: 'linear-gradient(135deg, #1E3A5F 0%, #2563EB 100%)',
          color: 'white', borderRadius: 'var(--radius-lg)', padding: '16px 20px',
          textDecoration: 'none', textAlign: 'center', fontWeight: 700,
          fontSize: '0.95rem', marginBottom: 12,
        }}
      >
        🤝 {t('challenge.discoverBiergerpakt')} →
      </a>

      <button onClick={onBack} className="btn btn-secondary btn-full">
        {t('challenge.reviewMissions')}
      </button>

      <div style={{ textAlign: 'center', marginTop: 16, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
        🔄 {t('challenge.newMissionsNote')}
      </div>
    </div>
  )
}
