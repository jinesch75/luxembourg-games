import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocalStorage } from '../../hooks/useLocalStorage'

// ─── Activity data ─────────────────────────────────────────────────────────────

const BIERGERPAKT_URL = 'https://biergerpakt.zesummeliewen.lu/en/'

const ALL_ACTIVITIES = [
  // ── EASY ───────────────────────────────────────────────────────────────────
  {
    id: 'lang-moien',
    title: 'Say "Moien" to three people',
    tip: '"Moien" (MOY-en) is the most common Luxembourgish greeting, used any time of day. Try it with a shopkeeper, neighbour, or colleague. A smile goes a long way!',
    category: 'Language 🗣️',
    difficulty: 'easy',
  },
  {
    id: 'lang-5phrases',
    title: 'Learn 5 everyday Luxembourgish phrases',
    tip: 'Master these: "Moien" (hello), "Äddi" (goodbye), "Merci" (thank you), "Wéi geet et?" (how are you?), "Ech verstinn net" (I don\'t understand). Write them on a sticky note!',
    category: 'Language 🗣️',
    difficulty: 'easy',
  },
  {
    id: 'lang-french-cafe',
    title: 'Order something in French at a café',
    tip: '"Un café, s\'il vous plaît" (a coffee, please). "L\'addition, s\'il vous plaît" means "the bill, please". French is one of Luxembourg\'s three official languages!',
    category: 'Language 🗣️',
    difficulty: 'easy',
  },
  {
    id: 'lang-nature',
    title: 'Learn 5 nature words in Luxembourgish',
    tip: 'Learn: Bësch (forest), Floss (river), Bierg (mountain/hill), Blumm (flower), Vull (bird). Try naming what you see on a walk — it makes vocabulary stick!',
    category: 'Language 🗣️',
    difficulty: 'easy',
  },
  {
    id: 'lang-hello-neighbor',
    title: 'Learn to say "hello" in a neighbour\'s language',
    tip: 'Find out what language your neighbour, colleague, or friend speaks at home, then learn their greeting. Luxembourg has residents from over 170 nationalities!',
    category: 'Language 🗣️',
    difficulty: 'easy',
  },
  {
    id: 'explore-walk',
    title: 'Take a walk in a new neighbourhood',
    tip: 'Explore a part of Luxembourg you\'ve never visited — a different commune, a new street, or a park. Try Bonnevoie, Hollerich, Esch-sur-Alzette, or Differdange.',
    category: 'Explore 📍',
    difficulty: 'easy',
  },
  {
    id: 'explore-park',
    title: 'Spend an hour in a Luxembourg park',
    tip: 'Try Parc de Merl, Parc Schlassbësch, or the gardens of the Abbaye de Neumünster in the Grund. Observe the people around you — Luxembourg\'s parks reflect the country\'s remarkable diversity.',
    category: 'Explore 📍',
    difficulty: 'easy',
  },
  {
    id: 'explore-train',
    title: 'Take a train to a town you\'ve never visited',
    tip: 'Luxembourg\'s public transport (trains, buses, trams) is completely free! Use it to visit a town or village you\'ve never been to. Luxembourg was the first country in the world to make all public transport free (2020).',
    category: 'Explore 📍',
    difficulty: 'easy',
  },
  {
    id: 'culture-song',
    title: 'Listen to a Luxembourgish song',
    tip: 'Find and listen to a song in Lëtzebuergesch. Try artists like Serge Tonnar, Def Dogg, or look up "Ons Heemecht" — the national anthem. Search "musique lëtzebuergesch" or browse the RTL Lëtzebuerg music playlist.',
    category: 'Culture 🎭',
    difficulty: 'easy',
  },
  {
    id: 'culture-dish',
    title: 'Try a traditional Luxembourgish dish',
    tip: 'Try Judd mat Gaardebounen (smoked pork with broad beans), Bouneschlupp (green bean soup), or Gromperekichelcher (potato fritters) at a local restaurant.',
    category: 'Culture 🎭',
    difficulty: 'easy',
  },
  {
    id: 'culture-tradition',
    title: 'Read about a Luxembourg tradition',
    tip: 'Look up one Luxembourg cultural tradition: the Schueberfouer fair, Émaischen (pottery fair), the Octave pilgrimage, Bretzelsonndeg (Pretzel Sunday), or the Dancing Procession of Echternach.',
    category: 'Culture 🎭',
    difficulty: 'easy',
  },
  {
    id: 'culture-event',
    title: 'Attend a free cultural event',
    tip: 'Attend an outdoor concert, art exhibition opening, street performance, or public lecture. Check the Agenda Culturel (agenda.lu) for free events near you.',
    category: 'Culture 🎭',
    difficulty: 'easy',
  },

  // ── MEDIUM ─────────────────────────────────────────────────────────────────
  {
    id: 'lang-directions',
    title: 'Use Luxembourgish to ask for directions',
    tip: '"Wou ass...?" means "Where is...?". "Kënnt Dir mir soen, wou... ass?" = "Could you tell me where... is?" is even more polite.',
    category: 'Language 🗣️',
    difficulty: 'medium',
  },
  {
    id: 'lang-news',
    title: 'Read a news article in a language you\'re learning',
    tip: 'Try RTL.lu for Luxembourgish, Tageblatt.lu for French, or Wort.lu for German. Even reading headlines and captions counts — the habit is what matters!',
    category: 'Language 🗣️',
    difficulty: 'medium',
  },
  {
    id: 'explore-market',
    title: 'Visit a local weekly market',
    tip: 'Head to one of Luxembourg\'s weekly markets — such as the Marché de la Ville in Luxembourg City. Buy at least one item and chat briefly with a vendor.',
    category: 'Explore 📍',
    difficulty: 'medium',
  },
  {
    id: 'explore-nature',
    title: 'Explore a natural site in Luxembourg',
    tip: 'Visit the Müllerthal (Little Switzerland), the Moselle Valley, the Ardennes, or the Minett Biosphere Reserve. Visit Luxembourg (visitluxembourg.com) has excellent trail maps.',
    category: 'Explore 📍',
    difficulty: 'medium',
  },
  {
    id: 'explore-institution',
    title: 'Visit a public institution',
    tip: 'Visit the Chamber of Deputies (guided tours available at chd.lu), the European Court of Justice, or a local town hall (mairie). The Luxembourg Parliament offers free guided tours.',
    category: 'Explore 📍',
    difficulty: 'medium',
  },
  {
    id: 'explore-museum',
    title: 'Visit a local museum or cultural site',
    tip: 'Spend at least 30 minutes at a museum, castle, or cultural heritage site. Options include MUDAM, Musée National, Casino Luxembourg, Vianden Castle, or any of the many maisons de la culture.',
    category: 'Explore 📍',
    difficulty: 'medium',
  },
  {
    id: 'connect-neighbour',
    title: 'Ask a neighbour where they\'re from',
    tip: 'Strike up a conversation with a neighbour you don\'t know well. Ask where they\'re originally from and share where you\'re from too. A simple "Hi, I don\'t think we\'ve properly met yet" works perfectly.',
    category: 'Connect 🤝',
    difficulty: 'medium',
  },
  {
    id: 'connect-coffee',
    title: 'Have coffee with someone from a different culture',
    tip: 'Invite a colleague, classmate, or acquaintance from a different cultural background for a coffee or tea. Ask them one thing they love about their home country. Be curious — everyone has a fascinating story.',
    category: 'Connect 🤝',
    difficulty: 'medium',
  },
  {
    id: 'connect-meal',
    title: 'Share a meal from your own culture',
    tip: 'Cook or share a dish from your own cultural background with a colleague, friend, or neighbour. Use food as a bridge to tell them something about where you\'re from.',
    category: 'Connect 🤝',
    difficulty: 'medium',
  },
  {
    id: 'connect-sport',
    title: 'Join a group sport or fitness activity',
    tip: 'Participate in a group sport or fitness session — a running club, yoga class, football match, or group hike. Sport is a universal language that breaks barriers.',
    category: 'Connect 🤝',
    difficulty: 'medium',
  },
  {
    id: 'connect-language-exchange',
    title: 'Join a language exchange',
    tip: 'Find a partner who wants to learn your language while you learn theirs. Meet for 30 minutes, switching halfway. Language exchanges can be found through Biergerpakt, Meetup.com, or local Facebook groups.',
    category: 'Connect 🤝',
    difficulty: 'medium',
  },
  {
    id: 'culture-film',
    title: 'Watch a film from a different culture',
    tip: 'Watch a film or documentary from a culture different from your own — bonus if it\'s from one of Luxembourg\'s many represented nationalities. Cinémathèque de la Ville de Luxembourg shows international films regularly.',
    category: 'Culture 🎭',
    difficulty: 'medium',
  },
  {
    id: 'culture-industrial',
    title: 'Explore Luxembourg\'s industrial heritage',
    tip: 'Visit the former blast furnaces at Belval (Esch-sur-Alzette), the National Mining Museum in Rumelange, or the Fond-de-Gras heritage railway site.',
    category: 'Culture 🎭',
    difficulty: 'medium',
  },
  {
    id: 'biergerpakt-register',
    title: 'Register on the Biergerpakt platform',
    tip: 'Create your account on biergerpakt.zesummeliewen.lu. Explore the activities and events available in your area. Registration is free and available in multiple languages.',
    category: 'Biergerpakt 🤝',
    difficulty: 'medium',
    link: BIERGERPAKT_URL,
    linkLabel: 'Register on Biergerpakt',
  },
  {
    id: 'biergerpakt-module',
    title: 'Complete a Biergerpakt online module',
    tip: 'Complete at least one short online course or module available through the Biergerpakt platform about Luxembourg\'s culture, institutions, or intercultural living.',
    category: 'Biergerpakt 🤝',
    difficulty: 'medium',
    link: BIERGERPAKT_URL,
    linkLabel: 'Explore online resources',
  },

  // ── HARD ───────────────────────────────────────────────────────────────────
  {
    id: 'connect-volunteer',
    title: 'Volunteer for a local community activity',
    tip: 'Sign up for a one-time volunteering activity — a clean-up day, a food bank, a community garden, or helping a local association. Search for opportunities on luxassoc.lu or your commune\'s website.',
    category: 'Connect 🤝',
    difficulty: 'hard',
  },
  {
    id: 'connect-gathering',
    title: 'Organise a neighbourhood gathering',
    tip: 'Take the initiative: organise a small gathering — a picnic, board game night, or barbecue — and invite people from at least two different cultural backgrounds. You can get inspiration and support through the Biergerpakt platform.',
    category: 'Connect 🤝',
    difficulty: 'hard',
    link: BIERGERPAKT_URL,
    linkLabel: 'Get ideas on Biergerpakt',
  },
  {
    id: 'biergerpakt-attend',
    title: 'Attend a Biergerpakt event',
    tip: 'Sign up for and attend a Biergerpakt event or activity in your area — a guided walk, cooking class, language exchange, or community gathering. Browse activities sorted by your commune.',
    category: 'Biergerpakt 🤝',
    difficulty: 'hard',
    link: 'https://biergerpakt.zesummeliewen.lu/en/activities/',
    linkLabel: 'Browse Biergerpakt events',
  },
  {
    id: 'biergerpakt-invite',
    title: 'Invite someone to a Biergerpakt event',
    tip: 'Find a Biergerpakt event you find interesting, then invite a friend, neighbour, or colleague to join you. Sharing the experience makes it even richer.',
    category: 'Biergerpakt 🤝',
    difficulty: 'hard',
    link: 'https://biergerpakt.zesummeliewen.lu/en/activities/',
    linkLabel: 'Find an event to share',
  },
  {
    id: 'biergerpakt-organise',
    title: 'Organise a Biergerpakt-inspired gathering',
    tip: 'Take the initiative: organise a small gathering and invite people from at least two different cultural backgrounds. You can get inspiration and even support for your event through the Biergerpakt platform.',
    category: 'Biergerpakt 🤝',
    difficulty: 'hard',
    link: BIERGERPAKT_URL,
    linkLabel: 'Get support on Biergerpakt',
  },
]

// ─── Level config ──────────────────────────────────────────────────────────────

const LEVELS = [
  {
    id: 1,
    name: 'Starter',
    icon: '🌱',
    difficulty: 'easy',
    difficultyLabel: 'Easy',
    color: '#059669',
    bg: '#D1FAE5',
    border: '#6EE7B7',
    unlockAt: 0,         // always unlocked
    unlockNext: 4,       // complete 4 easy activities to unlock Level 2
    description: 'Begin your intercultural journey with simple, everyday actions.',
  },
  {
    id: 2,
    name: 'Explorer',
    icon: '🌍',
    difficulty: 'medium',
    difficultyLabel: 'Medium',
    color: '#2563EB',
    bg: '#DBEAFE',
    border: '#BFDBFE',
    unlockAt: 4,         // need 4 easy activities done
    unlockNext: 5,       // complete 5 medium activities to unlock Level 3
    description: 'Go a step further — connect, explore, and discover.',
  },
  {
    id: 3,
    name: 'Champion',
    icon: '🏆',
    difficulty: 'hard',
    difficultyLabel: 'Challenge',
    color: '#D97706',
    bg: '#FEF3C7',
    border: '#FDE68A',
    unlockAt: 5,         // need 5 medium activities done
    unlockNext: null,
    description: 'Take real initiative and make a lasting impact in your community.',
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

  const easyDone   = ALL_ACTIVITIES.filter(a => a.difficulty === 'easy'   && completedSet.has(a.id)).length
  const mediumDone = ALL_ACTIVITIES.filter(a => a.difficulty === 'medium' && completedSet.has(a.id)).length

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

      // Check for newly unlocked levels
      const newSet = new Set(newIds)
      const newEasyDone   = ALL_ACTIVITIES.filter(a => a.difficulty === 'easy'   && newSet.has(a.id)).length
      const newMediumDone = ALL_ACTIVITIES.filter(a => a.difficulty === 'medium' && newSet.has(a.id)).length

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
  const levelActivities = ALL_ACTIVITIES.filter(a => a.difficulty === currentActiveLevelConfig.difficulty)
  const levelDone = levelActivities.filter(a => completedSet.has(a.id)).length
  const levelUnlocked = isLevelUnlocked(currentActiveLevelConfig)

  // Auto-jump to highest unlocked level when component first mounts
  const highestUnlocked = LEVELS.filter(l => isLevelUnlocked(l)).slice(-1)[0]

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
            Level {celebrateUnlock.id} unlocked — {celebrateUnlock.name}!
          </div>
          <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>
            {celebrateUnlock.description}
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
          Intercultural Activities
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0, fontSize: '0.9rem', lineHeight: 1.5 }}>
          Complete activities to unlock higher levels and deepen your connections in Luxembourg.
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
                Level {level.id}
              </div>
              <div style={{ fontSize: '0.65rem', color: isActive ? level.color : 'var(--text-muted)', fontWeight: 600 }}>
                {level.name}
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
                        Level {currentActiveLevelConfig.id}: {currentActiveLevelConfig.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                        {currentActiveLevelConfig.difficultyLabel} activities
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
                  {currentActiveLevelConfig.description}
                </p>

                {/* Progress to next level */}
                {currentActiveLevelConfig.unlockNext && (
                  <div style={{ marginTop: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 4 }}>
                      <span>Progress to Level {currentActiveLevelConfig.id + 1}</span>
                      <span>{Math.min(levelDone, currentActiveLevelConfig.unlockNext)}/{currentActiveLevelConfig.unlockNext} done</span>
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
                        ✓ Level {currentActiveLevelConfig.id + 1} unlocked! Tap it above to see activities.
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
                        {/* Checkmark or number */}
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
                            {activity.title}
                          </div>
                          <div style={{ marginTop: 3, fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                            {activity.category}
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
                          <div style={{
                            background: '#FEFCE8', border: '1px solid #FDE68A',
                            borderRadius: 8, padding: '12px 14px', marginTop: 12,
                            fontSize: '0.85rem', color: '#713F12', lineHeight: 1.55
                          }}>
                            💡 {activity.tip}
                          </div>
                          {activity.link && (
                            <a
                              href={activity.link}
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
                              🤝 {activity.linkLabel} →
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
                            {isDone ? '↩ Mark as not done' : '✓ Mark as done!'}
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
                Level {currentActiveLevelConfig.id}: {currentActiveLevelConfig.name} is locked
              </div>
              {currentActiveLevelConfig.id === 2 && (
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                  Complete {LEVELS[0].unlockNext - easyDone} more easy activities to unlock this level.
                </p>
              )}
              {currentActiveLevelConfig.id === 3 && (
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                  Complete {LEVELS[1].unlockNext - mediumDone} more medium activities to unlock this level.
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
            <div style={{ fontWeight: 700, marginBottom: 6, fontSize: '1rem' }}>The Biergerpakt Programme</div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.5 }}>
              The Biergerpakt (Citizens' Pact) is Luxembourg's government initiative that connects newcomers and long-term residents through shared activities, events, and experiences. Registration is free and activities are open to everyone.
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
          Discover the Biergerpakt →
        </a>
      </div>

      {/* Key facts */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
          Why intercultural connection matters in Luxembourg
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { icon: '🌍', title: '170+ nationalities', text: 'Luxembourg is home to people from over 170 countries. Nearly 47% of residents are foreign nationals — one of the highest proportions in the world.' },
            { icon: '🗣️', title: 'Three official languages', text: 'Luxembourgish, French, and German are all official languages. Portuguese is widely spoken and English is common in business and daily life.' },
            { icon: '🚗', title: '220,000 cross-border workers', text: 'About 45% of the workforce commutes daily from France, Belgium, and Germany — making Luxembourg uniquely international every single workday.' },
            { icon: '🏘️', title: 'Living together well', text: 'Luxembourg\'s government actively promotes intercultural dialogue and social cohesion through programmes like the Biergerpakt, recognising that shared experiences build a stronger community.' },
          ].map(item => (
            <div key={item.title} className="card" style={{ display: 'flex', gap: 14 }}>
              <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{item.title}</div>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--gray-700)', lineHeight: 1.5 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
