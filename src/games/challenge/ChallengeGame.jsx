import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocalStorage } from '../../hooks/useLocalStorage'

// ─── Activity data ─────────────────────────────────────────────────────────────

const BIERGERPAKT_URL = 'https://biergerpakt.zesummeliewen.lu/en/'

// Activities are ordered so the first 5 of each difficulty are diverse across categories.
// Only the first 5 per difficulty are shown; the rest are kept for future use.
const ALL_ACTIVITIES = [
  // ── EASY (first 5 shown: Language, Explore, Culture, Language, Culture) ────
  {
    id: 'lang-moien',
    category: 'Language 🗣️',
    difficulty: 'easy',
  },
  {
    id: 'explore-walk',
    category: 'Explore 📍',
    difficulty: 'easy',
  },
  {
    id: 'culture-song',
    category: 'Culture 🎭',
    difficulty: 'easy',
  },
  {
    id: 'lang-5phrases',
    category: 'Language 🗣️',
    difficulty: 'easy',
  },
  {
    id: 'culture-dish',
    category: 'Culture 🎭',
    difficulty: 'easy',
  },
  // — remaining easy (not shown) —
  {
    id: 'lang-french-cafe',
    category: 'Language 🗣️',
    difficulty: 'easy',
  },
  {
    id: 'lang-nature',
    category: 'Language 🗣️',
    difficulty: 'easy',
  },
  {
    id: 'lang-hello-neighbor',
    category: 'Language 🗣️',
    difficulty: 'easy',
  },
  {
    id: 'explore-park',
    category: 'Explore 📍',
    difficulty: 'easy',
  },
  {
    id: 'explore-train',
    category: 'Explore 📍',
    difficulty: 'easy',
  },
  {
    id: 'culture-tradition',
    category: 'Culture 🎭',
    difficulty: 'easy',
  },
  {
    id: 'culture-event',
    category: 'Culture 🎭',
    difficulty: 'easy',
  },

  // ── MEDIUM (first 5 shown: Connect, Explore, Culture, Biergerpakt, Connect) ─
  {
    id: 'connect-coffee',
    category: 'Connect 🤝',
    difficulty: 'medium',
  },
  {
    id: 'explore-museum',
    category: 'Explore 📍',
    difficulty: 'medium',
  },
  {
    id: 'culture-film',
    category: 'Culture 🎭',
    difficulty: 'medium',
  },
  {
    id: 'biergerpakt-register',
    category: 'Biergerpakt 🤝',
    difficulty: 'medium',
    link: BIERGERPAKT_URL,
    linkLabelKey: 'challenge.biergerpaktRegisterLink',
  },
  {
    id: 'connect-neighbour',
    category: 'Connect 🤝',
    difficulty: 'medium',
  },
  // — remaining medium (not shown) —
  {
    id: 'lang-directions',
    category: 'Language 🗣️',
    difficulty: 'medium',
  },
  {
    id: 'lang-news',
    category: 'Language 🗣️',
    difficulty: 'medium',
  },
  {
    id: 'explore-market',
    category: 'Explore 📍',
    difficulty: 'medium',
  },
  {
    id: 'explore-nature',
    category: 'Explore 📍',
    difficulty: 'medium',
  },
  {
    id: 'explore-institution',
    category: 'Explore 📍',
    difficulty: 'medium',
  },
  {
    id: 'connect-meal',
    category: 'Connect 🤝',
    difficulty: 'medium',
  },
  {
    id: 'connect-sport',
    category: 'Connect 🤝',
    difficulty: 'medium',
  },
  {
    id: 'connect-language-exchange',
    category: 'Connect 🤝',
    difficulty: 'medium',
  },
  {
    id: 'culture-industrial',
    category: 'Culture 🎭',
    difficulty: 'medium',
  },
  {
    id: 'biergerpakt-module',
    category: 'Biergerpakt 🤝',
    difficulty: 'medium',
    link: BIERGERPAKT_URL,
    linkLabelKey: 'challenge.biergerpaktModuleLink',
  },

  // ── HARD (all 5 shown) ────────────────────────────────────────────────────
  {
    id: 'connect-volunteer',
    category: 'Connect 🤝',
    difficulty: 'hard',
  },
  {
    id: 'connect-gathering',
    category: 'Connect 🤝',
    difficulty: 'hard',
    link: BIERGERPAKT_URL,
    linkLabelKey: 'challenge.biergerpaktIdeasLink',
  },
  {
    id: 'biergerpakt-attend',
    category: 'Biergerpakt 🤝',
    difficulty: 'hard',
    link: 'https://biergerpakt.zesummeliewen.lu/en/activities/',
    linkLabelKey: 'challenge.biergerpaktEventsLink',
  },
  {
    id: 'biergerpakt-invite',
    category: 'Biergerpakt 🤝',
    difficulty: 'hard',
    link: 'https://biergerpakt.zesummeliewen.lu/en/activities/',
    linkLabelKey: 'challenge.biergerpaktFindLink',
  },
  {
    id: 'biergerpakt-organise',
    category: 'Biergerpakt 🤝',
    difficulty: 'hard',
    link: BIERGERPAKT_URL,
    linkLabelKey: 'challenge.biergerpaktSupportLink',
  },
]

// ─── Level config ──────────────────────────────────────────────────────────────

const LEVELS = [
  {
    id: 1,
    nameKey: 'challenge.level1Name',
    icon: '🌱',
    difficulty: 'easy',
    difficultyKey: 'challenge.easyLabel',
    color: '#059669',
    bg: '#D1FAE5',
    border: '#6EE7B7',
    unlockAt: 0,
    unlockNext: 4,       // complete 4 of 5 easy activities to unlock Level 2
    descKey: 'challenge.level1Desc',
  },
  {
    id: 2,
    nameKey: 'challenge.level2Name',
    icon: '🌍',
    difficulty: 'medium',
    difficultyKey: 'challenge.mediumLabel',
    color: '#2563EB',
    bg: '#DBEAFE',
    border: '#BFDBFE',
    unlockAt: 4,
    unlockNext: 5,       // complete all 5 medium activities to unlock Level 3
    descKey: 'challenge.level2Desc',
  },
  {
    id: 3,
    nameKey: 'challenge.level3Name',
    icon: '🏆',
    difficulty: 'hard',
    difficultyKey: 'challenge.challengeLabel',
    color: '#D97706',
    bg: '#FEF3C7',
    border: '#FDE68A',
    unlockAt: 5,
    unlockNext: null,
    descKey: 'challenge.level3Desc',
  },
]

// ─── Main Component ────────────────────────────────────────────────────────────
export default function ChallengeGame() {
  const { t } = useTranslation()
  const [completedIds, setCompletedIds] = useLocalStorage('letz-challenge-completed', [])
  const [expandedId, setExpandedId] = useState(null)
  const [activeLevel, setActiveLevel] = useState(1)
  const [celebrateUnlock, setCelebrateUnlock] = useState(null)

  const completedSet = new Set(completedIds)

  // Only count the 5 shown activities per level for unlock logic
  const easyActivities   = ALL_ACTIVITIES.filter(a => a.difficulty === 'easy').slice(0, 5)
  const mediumActivities = ALL_ACTIVITIES.filter(a => a.difficulty === 'medium').slice(0, 5)

  const easyDone   = easyActivities.filter(a => completedSet.has(a.id)).length
  const mediumDone = mediumActivities.filter(a => completedSet.has(a.id)).length

  const isLevelUnlocked = (level) => {
    if (level.id === 1) return true
    if (level.id === 2) return easyDone >= LEVELS[0].unlockNext
    if (level.id === 3) return mediumDone >= LEVELS[1].unlockNext
    return false
  }

  const toggleDone = (activity) => {
    const wasUnlocked2 = isLevelUnlocked(LEVELS[1])
    const wasUnlocked3 = isLevelUnlocked(LEVELS[2])

    if (completedSet.has(activity.id)) {
      setCompletedIds(prev => prev.filter(id => id !== activity.id))
    } else {
      const newIds = [...completedIds, activity.id]
      setCompletedIds(newIds)

      const newSet = new Set(newIds)
      const newEasyDone   = easyActivities.filter(a => newSet.has(a.id)).length
      const newMediumDone = mediumActivities.filter(a => newSet.has(a.id)).length

      if (!wasUnlocked2 && newEasyDone >= LEVELS[0].unlockNext) {
        setCelebrateUnlock(LEVELS[1])
        setTimeout(() => setCelebrateUnlock(null), 4000)
      } else if (!wasUnlocked3 && newMediumDone >= LEVELS[1].unlockNext) {
        setCelebrateUnlock(LEVELS[2])
        setTimeout(() => setCelebrateUnlock(null), 4000)
      }
    }
  }

  const currentActiveLevelConfig = LEVELS.find(l => l.id === activeLevel)
  // Limit to 5 activities per level
  const levelActivities = ALL_ACTIVITIES.filter(
    a => a.difficulty === currentActiveLevelConfig.difficulty
  ).slice(0, 5)
  const levelDone = levelActivities.filter(a => completedSet.has(a.id)).length
  const levelUnlocked = isLevelUnlocked(currentActiveLevelConfig)

  return (
    <div className="container" style={{ paddingTop: 20 }}>

      {/* Unlock celebration banner */}
      {celebrateUnlock && (
        <div className="animate-slide-up" style={{
          background: `linear-gradient(135deg, ${celebrateUnlock.color}DD 0%, ${celebrateUnlock.color} 100%)`,
          borderRadius: 'var(--radius-xl)', padding: '18px 20px', marginBottom: 20,
          color: 'white', textAlign: 'center'
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 6 }}>{celebrateUnlock.icon}</div>
          <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: 4 }}>
            {t('challenge.levelUnlockedBanner', {
              id: celebrateUnlock.id,
              name: t(celebrateUnlock.nameKey)
            })}
          </div>
          <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>
            {t(celebrateUnlock.descKey)}
          </div>
        </div>
      )}

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #059669 0%, #065F46 100%)',
        borderRadius: 'var(--radius-xl)', padding: '24px',
        color: 'white', marginBottom: 20
      }}>
        <div style={{ fontSize: '2.5rem', marginBottom: 10 }}>🌍</div>
        <h1 style={{ color: 'white', marginBottom: 8, fontSize: 'clamp(1.2rem, 4vw, 1.5rem)' }}>
          {t('challenge.title')}
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0, fontSize: '0.9rem', lineHeight: 1.5 }}>
          {t('challenge.heroText')}
        </p>
      </div>

      {/* Level selector */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {LEVELS.map(level => {
          const unlocked = isLevelUnlocked(level)
          const isActive = activeLevel === level.id
          return (
            <button
              key={level.id}
              onClick={() => unlocked && setActiveLevel(level.id)}
              style={{
                flex: 1, padding: '12px 8px',
                borderRadius: 'var(--radius)',
                border: `2px solid ${isActive ? level.color : unlocked ? level.border : 'var(--border)'}`,
                background: isActive ? level.bg : unlocked ? 'white' : 'var(--gray-50)',
                cursor: unlocked ? 'pointer' : 'default',
                opacity: unlocked ? 1 : 0.5,
                fontFamily: 'var(--font)',
                transition: 'all 0.15s',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '1.4rem', marginBottom: 4 }}>
                {unlocked ? level.icon : '🔒'}
              </div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: isActive ? level.color : 'var(--text-muted)' }}>
                {t('challenge.levelLabel', { id: level.id })}
              </div>
              <div style={{ fontSize: '0.65rem', color: isActive ? level.color : 'var(--text-muted)', fontWeight: 600 }}>
                {t(level.nameKey)}
              </div>
            </button>
          )
        })}
      </div>

      {/* Current level info */}
      {currentActiveLevelConfig && (
        <div key={activeLevel} className="animate-fade-in">
          {levelUnlocked ? (
            <>
              {/* Level header */}
              <div style={{
                background: currentActiveLevelConfig.bg,
                border: `1px solid ${currentActiveLevelConfig.border}`,
                borderRadius: 'var(--radius-lg)', padding: '16px 18px', marginBottom: 16
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: '1.5rem' }}>{currentActiveLevelConfig.icon}</span>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '1rem', color: currentActiveLevelConfig.color }}>
                        {t('challenge.levelLabel', { id: currentActiveLevelConfig.id })}: {t(currentActiveLevelConfig.nameKey)}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                        {t(currentActiveLevelConfig.difficultyKey)} {t('challenge.activitiesLabel')}
                      </div>
                    </div>
                  </div>
                  <div style={{
                    background: currentActiveLevelConfig.color, color: 'white',
                    borderRadius: 999, padding: '4px 12px',
                    fontSize: '0.8rem', fontWeight: 700
                  }}>
                    {levelDone}/{levelActivities.length}
                  </div>
                </div>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--gray-700)', lineHeight: 1.55 }}>
                  {t(currentActiveLevelConfig.descKey)}
                </p>

                {/* Progress to next level */}
                {currentActiveLevelConfig.unlockNext && (
                  <div style={{ marginTop: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 4 }}>
                      <span>{t('challenge.levelProgress', { next: currentActiveLevelConfig.id + 1 })}</span>
                      <span>{Math.min(levelDone, currentActiveLevelConfig.unlockNext)}/{currentActiveLevelConfig.unlockNext} {t('challenge.doneLabel')}</span>
                    </div>
                    <div style={{ height: 6, background: 'rgba(0,0,0,0.1)', borderRadius: 999, overflow: 'hidden' }}>
                      <div style={{
                        height: '100%', borderRadius: 999,
                        background: currentActiveLevelConfig.color,
                        width: `${Math.min(100, (levelDone / currentActiveLevelConfig.unlockNext) * 100)}%`,
                        transition: 'width 0.4s ease'
                      }} />
                    </div>
                    {levelDone >= currentActiveLevelConfig.unlockNext && (
                      <div style={{ marginTop: 6, fontSize: '0.75rem', color: currentActiveLevelConfig.color, fontWeight: 700, textAlign: 'center' }}>
                        {t('challenge.levelUnlockedTip', { next: currentActiveLevelConfig.id + 1 })}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Activity list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                {levelActivities.map((activity) => {
                  const isDone = completedSet.has(activity.id)
                  const isExpanded = expandedId === activity.id
                  const actTitle = t(`activities.${activity.id}.title`, { defaultValue: activity.id })
                  const actTip   = t(`activities.${activity.id}.tip`,   { defaultValue: '' })
                  const actCat   = t(`activities.${activity.id}.category`, { defaultValue: activity.category })
                  const actLink  = activity.link
                  const actLinkLabel = activity.linkLabelKey ? t(activity.linkLabelKey) : ''
                  return (
                    <div
                      key={activity.id}
                      style={{
                        background: isDone ? currentActiveLevelConfig.bg : 'white',
                        border: `1.5px solid ${isDone ? currentActiveLevelConfig.color : isExpanded ? currentActiveLevelConfig.color : 'var(--border)'}`,
                        borderRadius: 'var(--radius)',
                        overflow: 'hidden',
                        transition: 'all 0.15s'
                      }}
                    >
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : activity.id)}
                        style={{
                          width: '100%', textAlign: 'left', padding: '14px 16px',
                          background: 'transparent', border: 'none', cursor: 'pointer',
                          display: 'flex', alignItems: 'center', gap: 12,
                          fontFamily: 'var(--font)',
                        }}
                      >
                        <div style={{
                          width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                          background: isDone ? currentActiveLevelConfig.color : currentActiveLevelConfig.bg,
                          border: `2px solid ${currentActiveLevelConfig.border}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: isDone ? '1rem' : '0.85rem', fontWeight: 700,
                          color: isDone ? 'white' : currentActiveLevelConfig.color,
                          transition: 'all 0.2s'
                        }}>
                          {isDone ? '✓' : ''}
                        </div>

                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{
                            fontWeight: 700, fontSize: '0.9rem',
                            color: isDone ? currentActiveLevelConfig.color : 'var(--gray-800)',
                            lineHeight: 1.3,
                            textDecoration: isDone ? 'line-through' : 'none',
                            opacity: isDone ? 0.75 : 1
                          }}>
                            {actTitle}
                          </div>
                          <div style={{ marginTop: 3, fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                            {actCat}
                          </div>
                        </div>
                        <span style={{
                          fontSize: '0.8rem', color: 'var(--gray-400)', flexShrink: 0,
                          transform: isExpanded ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.2s'
                        }}>▾</span>
                      </button>

                      {isExpanded && (
                        <div className="animate-slide-up" style={{
                          padding: '0 16px 16px', borderTop: '1px solid var(--border)'
                        }}>
                          {actTip && (
                            <div style={{
                              background: '#FEFCE8', border: '1px solid #FDE68A',
                              borderRadius: 8, padding: '12px 14px', marginTop: 12,
                              fontSize: '0.85rem', color: '#713F12', lineHeight: 1.55
                            }}>
                              💡 {actTip}
                            </div>
                          )}
                          {actLink && actLinkLabel && (
                            <a
                              href={actLink}
                              target="_blank"
                              rel="noreferrer"
                              style={{
                                display: 'flex', alignItems: 'center', gap: 8,
                                marginTop: 10,
                                background: '#E0F2FE', border: '1px solid #7DD3FC',
                                borderRadius: 8, padding: '10px 14px',
                                textDecoration: 'none', color: '#0369A1',
                                fontSize: '0.82rem', fontWeight: 600
                              }}
                            >
                              🤝 {actLinkLabel} →
                            </a>
                          )}
                          <button
                            onClick={() => toggleDone(activity)}
                            style={{
                              marginTop: 12, width: '100%',
                              padding: '11px 16px',
                              borderRadius: 'var(--radius)',
                              border: `2px solid ${isDone ? 'var(--border)' : currentActiveLevelConfig.color}`,
                              background: isDone ? 'var(--gray-100)' : currentActiveLevelConfig.color,
                              color: isDone ? 'var(--gray-600)' : 'white',
                              fontFamily: 'var(--font)', fontSize: '0.9rem', fontWeight: 700,
                              cursor: 'pointer', transition: 'all 0.15s'
                            }}
                          >
                            {isDone ? t('challenge.markUndone') : t('challenge.markDone')}
                          </button>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </>
          ) : (
            /* Locked level message */
            <div style={{
              background: 'var(--gray-50)', border: '2px dashed var(--border)',
              borderRadius: 'var(--radius-lg)', padding: '32px 24px',
              textAlign: 'center', marginBottom: 24
            }}>
              <div style={{ fontSize: '3rem', marginBottom: 12 }}>🔒</div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8, color: 'var(--gray-700)' }}>
                {t('challenge.levelLocked', {
                  id: currentActiveLevelConfig.id,
                  name: t(currentActiveLevelConfig.nameKey)
                })}
              </div>
              {currentActiveLevelConfig.id === 2 && (
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                  {t('challenge.unlockMore', {
                    count: LEVELS[0].unlockNext - easyDone,
                    difficulty: t('challenge.easyLabel').toLowerCase()
                  })}
                </p>
              )}
              {currentActiveLevelConfig.id === 3 && (
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                  {t('challenge.unlockMore', {
                    count: LEVELS[1].unlockNext - mediumDone,
                    difficulty: t('challenge.mediumLabel').toLowerCase()
                  })}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Biergerpakt CTA banner */}
      <div style={{
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2563EB 100%)',
        borderRadius: 'var(--radius-lg)', padding: '20px',
        color: 'white', marginBottom: 24
      }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 14 }}>
          <span style={{ fontSize: '2rem', flexShrink: 0 }}>🤝</span>
          <div>
            <div style={{ fontWeight: 700, marginBottom: 6, fontSize: '1rem' }}>
              {t('challenge.biergerpaktTitle')}
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.5 }}>
              {t('challenge.biergerpaktText')}
            </p>
          </div>
        </div>
        <a
          href={BIERGERPAKT_URL}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'block',
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            color: 'white', borderRadius: 8, padding: '12px 16px',
            textAlign: 'center', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none'
          }}
        >
          {t('challenge.biergerpaktCta')}
        </a>
      </div>

      {/* Key facts */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
          {t('challenge.whyTitle')}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { icon: '🌍', titleKey: 'challenge.fact1Title', textKey: 'challenge.fact1Text' },
            { icon: '🗣️', titleKey: 'challenge.fact2Title', textKey: 'challenge.fact2Text' },
            { icon: '🚗', titleKey: 'challenge.fact3Title', textKey: 'challenge.fact3Text' },
            { icon: '🏘️', titleKey: 'challenge.fact4Title', textKey: 'challenge.fact4Text' },
          ].map(item => (
            <div key={item.titleKey} className="card" style={{ display: 'flex', gap: 14 }}>
              <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{t(item.titleKey)}</div>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--gray-700)', lineHeight: 1.5 }}>{t(item.textKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
