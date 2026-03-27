import { useState } from 'react'
import { useTranslation } from 'react-i18next'

// ─── Activity data — all content from the former weekly missions, regrouped ───

const BIERGERPAKT_URL = 'https://biergerpakt.zesummeliewen.lu/en/'

const ACTIVITY_CATEGORIES = [
  {
    id: 'language',
    icon: '🗣️',
    title: 'Language Activities',
    color: '#7C3AED',
    bg: '#F3E8FF',
    border: '#DDD6FE',
    description: 'Language is the fastest bridge between cultures. These activities help you practise and discover Luxembourg\'s multilingual reality.',
    activities: [
      {
        title: 'Say "Moien" to three people',
        tip: '"Moien" (MOY-en) is the most common Luxembourgish greeting, used any time of day. Try it with a shopkeeper, neighbour, or colleague. A smile goes a long way!',
        difficulty: 'easy',
      },
      {
        title: 'Learn 5 everyday Luxembourgish phrases',
        tip: 'Master these: "Moien" (hello), "Äddi" (goodbye), "Merci" (thank you), "Wéi geet et?" (how are you?), "Ech verstinn net" (I don\'t understand). Write them on a sticky note!',
        difficulty: 'easy',
      },
      {
        title: 'Order something in French at a café',
        tip: '"Un café, s\'il vous plaît" (a coffee, please). "L\'addition, s\'il vous plaît" means "the bill, please". French is one of Luxembourg\'s three official languages!',
        difficulty: 'easy',
      },
      {
        title: 'Use Luxembourgish to ask for directions',
        tip: '"Wou ass...?" means "Where is...?". "Kënnt Dir mir soen, wou... ass?" = "Could you tell me where... is?" is even more polite.',
        difficulty: 'medium',
      },
      {
        title: 'Learn 5 nature words in Luxembourgish',
        tip: 'Learn: Bësch (forest), Floss (river), Bierg (mountain/hill), Blumm (flower), Vull (bird). Try naming what you see on a walk — it makes vocabulary stick!',
        difficulty: 'easy',
      },
      {
        title: 'Read a news article in a language you\'re learning',
        tip: 'Try RTL.lu for Luxembourgish, Tageblatt.lu for French, or Wort.lu for German. Even reading headlines and captions counts — the habit is what matters!',
        difficulty: 'medium',
      },
      {
        title: 'Learn to say "hello" in a neighbour\'s language',
        tip: 'Find out what language your neighbour, colleague, or friend speaks at home, then learn their greeting. Luxembourg has residents from over 170 nationalities!',
        difficulty: 'easy',
      },
    ],
  },
  {
    id: 'explore',
    icon: '📍',
    title: 'Explore Luxembourg',
    color: '#065F46',
    bg: '#D1FAE5',
    border: '#6EE7B7',
    description: 'Luxembourg is full of hidden gems waiting to be discovered. From medieval castles to vibrant neighbourhoods — there\'s always something new around the corner.',
    activities: [
      {
        title: 'Visit a local weekly market',
        tip: 'Head to one of Luxembourg\'s weekly markets — such as the Marché de la Ville in Luxembourg City. Buy at least one item and chat briefly with a vendor. Find your nearest market at luxembourg.public.lu.',
        difficulty: 'medium',
      },
      {
        title: 'Take a walk in a new neighbourhood',
        tip: 'Explore a part of Luxembourg you\'ve never visited — a different commune, a new street, or a park you\'ve always passed but never entered. Try Bonnevoie, Hollerich, Esch-sur-Alzette, or Differdange.',
        difficulty: 'easy',
      },
      {
        title: 'Explore a natural site in Luxembourg',
        tip: 'Visit the Müllerthal (Little Switzerland), the Moselle Valley, the Ardennes, or the Minett Biosphere Reserve. Visit Luxembourg (visitluxembourg.com) has excellent trail maps.',
        difficulty: 'medium',
      },
      {
        title: 'Visit a public institution',
        tip: 'Visit the Chamber of Deputies (guided tours available at chd.lu), the European Court of Justice, or a local town hall (mairie). The Luxembourg Parliament offers free guided tours.',
        difficulty: 'medium',
      },
      {
        title: 'Spend an hour in a Luxembourg park',
        tip: 'Try Parc de Merl, Parc Schlassbësch, or the gardens of the Abbaye de Neumünster in the Grund. Observe the people around you — Luxembourg\'s parks reflect the country\'s remarkable diversity.',
        difficulty: 'easy',
      },
      {
        title: 'Take a train to a town you\'ve never visited',
        tip: 'Luxembourg\'s public transport (trains, buses, trams) is completely free! Use it to visit a town or village you\'ve never been to. Luxembourg was the first country in the world to make all public transport free (2020).',
        difficulty: 'easy',
      },
      {
        title: 'Visit a local museum or cultural site',
        tip: 'Spend at least 30 minutes at a museum, castle, or cultural heritage site. Options include MUDAM, Musée National, Casino Luxembourg, Vianden Castle, or any of the many maisons de la culture. Many museums offer free entry on certain days.',
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 'connect',
    icon: '🤝',
    title: 'Connect with Others',
    color: '#1D4ED8',
    bg: '#DBEAFE',
    border: '#BFDBFE',
    description: 'Nearly half of Luxembourg\'s residents are foreign nationals. Genuine connections across cultures begin with curiosity and openness.',
    activities: [
      {
        title: 'Ask a neighbour where they\'re from',
        tip: 'Strike up a conversation with a neighbour you don\'t know well. Ask where they\'re originally from and share where you\'re from too. A simple "Hi, I don\'t think we\'ve properly met yet" works perfectly.',
        difficulty: 'medium',
      },
      {
        title: 'Have coffee with someone from a different culture',
        tip: 'Invite a colleague, classmate, or acquaintance from a different cultural background for a coffee or tea. Ask them one thing they love about their home country. Be curious — everyone has a fascinating story.',
        difficulty: 'medium',
      },
      {
        title: 'Share a meal from your own culture',
        tip: 'Cook or share a dish from your own cultural background with a colleague, friend, or neighbour. Use food as a bridge to tell them something about where you\'re from. Potluck lunches at work are a great way to do this!',
        difficulty: 'medium',
      },
      {
        title: 'Volunteer for a local community activity',
        tip: 'Sign up for a one-time volunteering activity — a clean-up day, a food bank, a community garden, or helping a local association. Search for opportunities on luxassoc.lu or your commune\'s website.',
        difficulty: 'hard',
      },
      {
        title: 'Join a group sport or fitness activity',
        tip: 'Participate in a group sport or fitness session — a running club, yoga class, football match, or group hike. Sport is a universal language that breaks barriers. Many communes have free or low-cost activities for all residents.',
        difficulty: 'medium',
      },
      {
        title: 'Join a language exchange',
        tip: 'Find a partner who wants to learn your language while you learn theirs. Meet for 30 minutes, switching halfway. Language exchanges can be found through Biergerpakt, Meetup.com, or local Facebook groups.',
        difficulty: 'medium',
        link: BIERGERPAKT_URL,
        linkLabel: 'Find exchanges on Biergerpakt',
      },
      {
        title: 'Organise a neighbourhood gathering',
        tip: 'Take the initiative: organise a small gathering — a picnic, board game night, or barbecue — and invite people from at least two different cultural backgrounds. You can get inspiration and support through the Biergerpakt platform.',
        difficulty: 'hard',
        link: BIERGERPAKT_URL,
        linkLabel: 'Get ideas on Biergerpakt',
      },
    ],
  },
  {
    id: 'culture',
    icon: '🎭',
    title: 'Experience Culture',
    color: '#B45309',
    bg: '#FEF3C7',
    border: '#FDE68A',
    description: 'Luxembourg\'s culture is unique — rooted in its history as a crossroads nation, shaped by its three languages, and continuously enriched by the contributions of its diverse population.',
    activities: [
      {
        title: 'Listen to a Luxembourgish song',
        tip: 'Find and listen to a song in Lëtzebuergesch. Try artists like Serge Tonnar, Def Dogg, or look up "Ons Heemecht" — the national anthem. Search "musique lëtzebuergesch" or browse the RTL Lëtzebuerg music playlist.',
        difficulty: 'easy',
      },
      {
        title: 'Try a traditional Luxembourgish dish',
        tip: 'Try Judd mat Gaardebounen (smoked pork with broad beans), Bouneschlupp (green bean soup), or Gromperekichelcher (potato fritters) at a local restaurant. Many traditional dishes are served at "guinguettes" (local countryside restaurants).',
        difficulty: 'easy',
      },
      {
        title: 'Read about a Luxembourg tradition',
        tip: 'Look up one Luxembourg cultural tradition: the Schueberfouer fair, Émaischen (pottery fair), the Octave pilgrimage, Bretzelsonndeg (Pretzel Sunday), or the Dancing Procession of Echternach. luxembourg.public.lu has detailed cultural guides.',
        difficulty: 'easy',
      },
      {
        title: 'Attend a free cultural event',
        tip: 'Attend an outdoor concert, art exhibition opening, street performance, or public lecture. Check the Agenda Culturel (agenda.lu) for free events near you.',
        difficulty: 'easy',
      },
      {
        title: 'Watch a film from a different culture',
        tip: 'Watch a film or documentary from a culture different from your own — bonus if it\'s from one of Luxembourg\'s many represented nationalities. Discuss it with someone afterwards. Cinémathèque de la Ville de Luxembourg shows international films regularly.',
        difficulty: 'medium',
      },
      {
        title: 'Explore Luxembourg\'s industrial heritage',
        tip: 'Visit the former blast furnaces at Belval (Esch-sur-Alzette), the National Mining Museum in Rumelange, or the Fond-de-Gras heritage railway site. Luxembourg\'s industrial past is a powerful story of transformation.',
        difficulty: 'medium',
      },
    ],
  },
  {
    id: 'biergerpakt',
    icon: '🤝',
    title: 'Biergerpakt Activities',
    color: '#0369A1',
    bg: '#E0F2FE',
    border: '#7DD3FC',
    description: 'The Biergerpakt (Citizens\' Pact) is Luxembourg\'s government programme for intercultural connection. It connects newcomers and long-term residents through activities, events, and shared experiences — all free or low cost.',
    activities: [
      {
        title: 'Register on the Biergerpakt platform',
        tip: 'Create your account on biergerpakt.zesummeliewen.lu. Explore the activities and events available in your area. Registration is free and available in multiple languages.',
        difficulty: 'medium',
        link: BIERGERPAKT_URL,
        linkLabel: 'Register on Biergerpakt',
      },
      {
        title: 'Attend a Biergerpakt event',
        tip: 'Sign up for and attend a Biergerpakt event or activity in your area — a guided walk, cooking class, language exchange, or community gathering. Browse activities sorted by your commune.',
        difficulty: 'hard',
        link: 'https://biergerpakt.zesummeliewen.lu/en/activities/',
        linkLabel: 'Browse Biergerpakt events',
      },
      {
        title: 'Invite someone to a Biergerpakt event',
        tip: 'Find a Biergerpakt event you find interesting, then invite a friend, neighbour, or colleague to join you. Sharing the experience makes it even richer. The platform lets you browse events by date, commune, and theme.',
        difficulty: 'hard',
        link: 'https://biergerpakt.zesummeliewen.lu/en/activities/',
        linkLabel: 'Find an event to share',
      },
      {
        title: 'Complete a Biergerpakt online module',
        tip: 'Complete at least one short online course or module available through the Biergerpakt platform about Luxembourg\'s culture, institutions, or intercultural living. The online resources are available in multiple languages.',
        difficulty: 'medium',
        link: BIERGERPAKT_URL,
        linkLabel: 'Explore online resources',
      },
      {
        title: 'Organise a Biergerpakt-inspired gathering',
        tip: 'Take the initiative: organise a small gathering and invite people from at least two different cultural backgrounds. You can get inspiration and even support for your event through the Biergerpakt platform.',
        difficulty: 'hard',
        link: BIERGERPAKT_URL,
        linkLabel: 'Get support on Biergerpakt',
      },
    ],
  },
]

const DIFFICULTY_LABELS = { easy: 'Easy', medium: 'Medium', hard: 'Challenge' }
const DIFFICULTY_COLORS = {
  easy:   { bg: '#D1FAE5', text: '#065F46' },
  medium: { bg: '#FEF3C7', text: '#92400E' },
  hard:   { bg: '#FEE2E2', text: '#991B1B' },
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function ChallengeGame() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('language')
  const [expandedIdx, setExpandedIdx] = useState(null)

  const category = ACTIVITY_CATEGORIES.find(c => c.id === activeCategory)

  return (
    <div className="container" style={{ paddingTop: 20 }}>
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
          Ideas and inspiration for connecting across cultures in Luxembourg — in your neighbourhood, at work, and in everyday life.
        </p>
      </div>

      {/* Category tabs */}
      <div style={{
        display: 'flex', gap: 6, marginBottom: 16,
        overflowX: 'auto', paddingBottom: 4, scrollbarWidth: 'none'
      }}>
        {ACTIVITY_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => { setActiveCategory(cat.id); setExpandedIdx(null) }}
            style={{
              padding: '8px 14px', borderRadius: 999, border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font)', fontSize: '0.82rem', fontWeight: 600,
              whiteSpace: 'nowrap', flexShrink: 0,
              background: activeCategory === cat.id ? cat.color : 'var(--gray-100)',
              color: activeCategory === cat.id ? 'white' : 'var(--gray-600)',
              transition: 'all 0.15s'
            }}
          >
            {cat.icon} {cat.title.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Category header */}
      {category && (
        <div key={category.id} className="animate-fade-in">
          <div style={{
            background: category.bg,
            border: `1px solid ${category.border}`,
            borderRadius: 'var(--radius-lg)',
            padding: '16px 18px',
            marginBottom: 16
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
              <h2 style={{ margin: 0, fontSize: '1.05rem', color: category.color }}>
                {category.title}
              </h2>
            </div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--gray-700)', lineHeight: 1.55 }}>
              {category.description}
            </p>
          </div>

          {/* Activity list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
            {category.activities.map((activity, idx) => {
              const isExpanded = expandedIdx === idx
              const diff = DIFFICULTY_COLORS[activity.difficulty]
              return (
                <div
                  key={idx}
                  style={{
                    background: 'white',
                    border: `1.5px solid ${isExpanded ? category.color : 'var(--border)'}`,
                    borderRadius: 'var(--radius)',
                    overflow: 'hidden',
                    transition: 'border-color 0.15s'
                  }}
                >
                  <button
                    onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                    style={{
                      width: '100%', textAlign: 'left', padding: '14px 16px',
                      background: 'transparent', border: 'none', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: 12,
                      fontFamily: 'var(--font)',
                    }}
                  >
                    <div style={{
                      width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                      background: category.bg, border: `2px solid ${category.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.85rem', fontWeight: 700, color: category.color
                    }}>
                      {idx + 1}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--gray-800)', lineHeight: 1.3 }}>
                        {activity.title}
                      </div>
                      <div style={{ marginTop: 4 }}>
                        <span style={{
                          background: diff.bg, color: diff.text,
                          borderRadius: 999, padding: '2px 8px', fontSize: '0.68rem', fontWeight: 600
                        }}>
                          {DIFFICULTY_LABELS[activity.difficulty]}
                        </span>
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
                    </div>
                  )}
                </div>
              )
            })}
          </div>
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

      {/* Key facts about Luxembourg's diversity */}
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
