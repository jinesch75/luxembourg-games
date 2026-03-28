import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

export const DEFAULT_BP_CARDS = [
  { id: 'bp1', icon: '🗓️', title: 'Regular events', text: 'The Biergerpakt organises workshops, guided tours, sports events, and cultural activities throughout the year — all free or low cost.' },
  { id: 'bp2', icon: '👥', title: 'For everyone', text: 'Whether you arrived last month or were born here, the Biergerpakt is designed for all residents regardless of nationality or background.' },
  { id: 'bp3', icon: '🌱', title: 'Building bridges', text: 'Activities are specifically designed to bring people from different backgrounds together, creating friendships and a sense of shared community.' },
  { id: 'bp4', icon: '📱', title: 'How to participate', text: 'Check the programme on the official website, sign up for activities near you, and take part in building an open and welcoming Luxembourg.' },
]

export const DEFAULT_ACTIVITIES = [
  { id: 'act_lang',    icon: '🗣️', title: 'Language',   color: '#7C3AED', bg: '#F3E8FF', tips: [
    'Say "Moien" (hello) to three different people today.',
    'Learn 5 basic Luxembourgish phrases: Moien, Äddi, Merci, Wéi geet et?, Ech verstinn net.',
    'Order something in French at a café or bakery.',
    'Ask for directions using Luxembourgish: "Wou ass...?" (Where is...?)',
    'Read a headline or news article in a language you\'re learning: RTL.lu (LB), Tageblatt.lu (FR), Wort.lu (DE).',
    'Learn to greet a neighbour in their own language.',
  ]},
  { id: 'act_explore', icon: '📍', title: 'Explore',    color: '#065F46', bg: '#D1FAE5', tips: [
    'Visit a local weekly market and chat briefly with a vendor.',
    'Walk through a neighbourhood you\'ve never explored before.',
    'Take the free public transport to a town or village you\'ve never visited.',
    'Spend an hour in a Luxembourg park and observe the diversity around you.',
    'Visit a museum or cultural heritage site (many have free entry days).',
    'Explore a natural site: Mullerthal, Moselle valley, Ardennes, or Minett.',
  ]},
  { id: 'act_connect', icon: '🤝', title: 'Connect',    color: '#1D4ED8', bg: '#DBEAFE', tips: [
    'Introduce yourself to a neighbour you\'ve never spoken to. Ask where they\'re from.',
    'Invite a colleague from a different cultural background for a coffee.',
    'Share a dish from your own culture with someone you know.',
    'Join a local sports club, running group, or fitness class.',
    'Participate in a language exchange — teach your language, learn theirs.',
    'Volunteer for a local association, clean-up, or food bank.',
  ]},
  { id: 'act_culture', icon: '🎭', title: 'Culture',    color: '#B45309', bg: '#FEF3C7', tips: [
    'Listen to a Luxembourgish song (try Serge Tonnar or search "musique lëtzebuergesch").',
    'Try a traditional Luxembourgish dish: Judd mat Gaardebounen, Bouneschlupp, or Gromperekichelcher.',
    'Read about a Luxembourg tradition: Schueberfouer, Émaischen, Bretzelsonndeg, or the Dancing Procession.',
    'Attend a free cultural event: concert, art exhibition, or public lecture (check agenda.lu).',
    'Watch a film from a culture different from your own and discuss it with someone.',
    'Visit the industrial heritage of the south: Belval blast furnaces, Rumelange mining museum.',
  ]},
  { id: 'act_bp',      icon: '🤝', title: 'Biergerpakt', color: '#0369A1', bg: '#E0F2FE', tips: [
    'Register on biergerpakt.zesummeliewen.lu — free, in multiple languages.',
    'Browse upcoming events in your commune and sign up for one.',
    'Invite a friend, colleague, or neighbour to join a Biergerpakt activity with you.',
    'Complete an online module about Luxembourg\'s culture or institutions.',
    'Organise a small gathering — picnic, game night, or barbecue — for people from different backgrounds.',
  ]},
]

export const DEFAULT_STATS = [
  { icon: '👥', label: 'Total population', value: '~680,000', source: 'STATEC 2024' },
  { icon: '🌍', label: 'Foreign nationals', value: '47%', source: 'STATEC 2024' },
  { icon: '🇵🇹', label: 'Largest non-LU community', value: 'Portuguese (~100,000)', source: 'STATEC 2023' },
  { icon: '🚗', label: 'Cross-border workers', value: '~220,000', source: 'STATEC 2024' },
  { icon: '🌐', label: 'Nationalities represented', value: '170+', source: 'STATEC 2024' },
  { icon: '💶', label: 'GDP per capita (EU rank)', value: '#1 in EU', source: 'Eurostat 2023' },
  { icon: '🏢', label: 'Investment funds (global rank)', value: '2nd (after USA)', source: 'ALFI 2024' },
  { icon: '🗣️', label: 'Official languages', value: '3 (LB, FR, DE)', source: 'Law of 1984' },
  { icon: '📐', label: 'Area', value: '2,586 km²', source: 'STATEC' },
  { icon: '🏙️', label: 'Largest city', value: 'Luxembourg City (~130,000)', source: 'STATEC 2024' },
  { icon: '👶', label: 'Average age', value: '39.4 years', source: 'STATEC 2023' },
  { icon: '🎓', label: 'University of Luxembourg founded', value: '2003', source: 'Uni.lu' },
  { icon: '🚌', label: 'Public transport cost', value: 'Free since 2020', source: 'Gouvernement.lu' },
  { icon: '🏥', label: 'Life expectancy', value: '82.7 years', source: 'STATEC 2023' },
  { icon: '🌱', label: 'UNESCO Biosphere Reserve', value: 'Minett (2021)', source: 'UNESCO' },
]

export const DEFAULT_LANGUAGE_PHRASES = [
  { lb: 'Moien', fr: 'Bonjour', de: 'Guten Morgen', meaning: 'Hello / Good morning' },
  { lb: 'Äddi', fr: 'Au revoir', de: 'Auf Wiedersehen', meaning: 'Goodbye' },
  { lb: 'Merci villmools', fr: 'Merci beaucoup', de: 'Vielen Dank', meaning: 'Thank you very much' },
  { lb: 'Wéi geet et?', fr: 'Comment ça va?', de: 'Wie geht es Ihnen?', meaning: 'How are you?' },
  { lb: 'Ech hunn dech gär', fr: 'Je t\'aime', de: 'Ich liebe dich', meaning: 'I love you' },
  { lb: 'Wou ass...?', fr: 'Où est...?', de: 'Wo ist...?', meaning: 'Where is...?' },
  { lb: 'Wéi vill kascht dat?', fr: 'Combien ça coûte?', de: 'Wie viel kostet das?', meaning: 'How much does it cost?' },
  { lb: 'Ech verstinn net', fr: 'Je ne comprends pas', de: 'Ich verstehe nicht', meaning: 'I don\'t understand' },
]

const BIERGERPAKT_URLS = {
  en: 'https://biergerpakt.zesummeliewen.lu/en/',
  fr: 'https://biergerpakt.zesummeliewen.lu',
  de: 'https://biergerpakt.zesummeliewen.lu/de/',
  lb: 'https://biergerpakt.zesummeliewen.lu/lu/'
}

const LUXEMBOURGISH_URLS = {
  en: 'https://luxembourg.public.lu/en/society-and-culture/languages/luxembourgish-language-history.html',
  fr: 'https://luxembourg.public.lu/fr/societe-et-culture/langues/luxembourgeois-langue-histoire.html',
  de: 'https://luxembourg.public.lu/de/gesellschaft-und-kultur/sprachen/luxemburgisch-sprache-geschichte.html',
  lb: 'https://luxembourg.public.lu/fr/societe-et-culture/langues/luxembourgeois-langue-histoire.html'
}

export const DEFAULT_RELIABLE_SOURCES = [
  {
    category: 'Official Government',
    icon: '🏛️',
    sources: [
      { label: 'Gouvernement.lu — Official Luxembourg Government Portal', href: 'https://luxembourg.public.lu/en.html', desc: 'Laws, public services, residency, employment, and life in Luxembourg.' },
      { label: 'Legilux — Official Journal & Legislation', href: 'https://legilux.public.lu', desc: 'Full text of Luxembourg laws and official regulations.' },
      { label: 'Guichet.lu — Single Administrative Portal', href: 'https://guichet.public.lu/en.html', desc: 'All administrative procedures for residents and businesses, step by step.' },
    ]
  },
  {
    category: 'Statistics & Data',
    icon: '📊',
    sources: [
      { label: 'STATEC — National Statistics Institute', href: 'https://statistiques.public.lu/en/statistique-publique/statec.html', desc: 'Official data on population, economy, housing, employment and more.' },
      { label: 'Eurostat — EU Statistics', href: 'https://ec.europa.eu/eurostat', desc: 'Comparable statistics for all EU member states including Luxembourg.' },
    ]
  },
  {
    category: 'Culture & Tourism',
    icon: '🗺️',
    sources: [
      { label: 'Visit Luxembourg', href: 'https://www.visitluxembourg.com/', desc: 'Official tourism guide with places, trails, events, and travel information.' },
      { label: 'Agenda Culturel — Luxembourg Events', href: 'https://www.agenda.lu', desc: 'The comprehensive calendar of cultural events across Luxembourg.' },
      { label: 'Luxembourg City Tourist Office', href: 'https://www.lcto.lu/en', desc: 'Guided tours, museums, and what to see in the capital.' },
    ]
  },
  {
    category: 'Integration & Community',
    icon: '🤝',
    sources: [
      { label: 'Biergerpakt — Intercultural Activities', href: 'https://biergerpakt.zesummeliewen.lu/en/', desc: 'Government programme for intercultural connection and community activities.' },
      { label: 'OLAI — Reception & Integration Office', href: 'https://olai.public.lu/en.html', desc: 'Support for newcomers: integration contracts, language courses, rights.' },
      { label: 'Luxassoc — Associations & Volunteering', href: 'https://www.luxassoc.lu', desc: 'Directory of associations and volunteering opportunities in Luxembourg.' },
    ]
  },
  {
    category: 'Language Learning',
    icon: '🗣️',
    sources: [
      { label: 'Luxembourgish Language Portal', href: 'https://www.lod.lu/en/', desc: 'Official Luxembourgish dictionary, grammar guide, and learning resources.' },
      { label: 'Institut National des Langues (INL)', href: 'https://www.inll.lu/en', desc: 'State language school offering courses in Luxembourgish, French, German and more.' },
      { label: 'RTL Lëtzebuerg', href: 'https://www.rtl.lu', desc: 'Luxembourg\'s main broadcaster — news, radio and podcasts in Luxembourgish.' },
    ]
  },
  {
    category: 'Employment & Business',
    icon: '💼',
    sources: [
      { label: 'ADEM — National Employment Agency', href: 'https://adem.public.lu/en.html', desc: 'Job search, unemployment benefits, and employer support services.' },
      { label: 'Luxembourg for Business', href: 'https://www.luxembourgforbusiness.lu/en', desc: 'Setting up a company, investment, and business resources in Luxembourg.' },
    ]
  },
]

export default function InfoHub() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()

  const [bpCards, setBpCards]               = useState(DEFAULT_BP_CARDS)
  const [activities, setActivities]         = useState(DEFAULT_ACTIVITIES)
  const [stats, setStats]                   = useState(DEFAULT_STATS)
  const [languagePhrases, setLanguagePhrases] = useState(DEFAULT_LANGUAGE_PHRASES)
  const [reliableSources, setReliableSources] = useState(DEFAULT_RELIABLE_SOURCES)
  const [bpIntro, setBpIntro]               = useState(null)   // { title, text, cta }
  const [bpInterculturalCard, setBpInterculturalCard] = useState(null) // { title, text }

  useEffect(() => {
    fetch('/api/content')
      .then(r => r.ok ? r.json() : {})
      .then(data => {
        if (data.bpCards?.length)         setBpCards(data.bpCards)
        if (data.activities?.length)      setActivities(data.activities)
        if (data.stats?.length)           setStats(data.stats)
        if (data.languagePhrases?.length) setLanguagePhrases(data.languagePhrases)
        if (data.reliableSources?.length) setReliableSources(data.reliableSources)
        if (data.bpIntro)                 setBpIntro(data.bpIntro)
        if (data.bpInterculturalCard)     setBpInterculturalCard(data.bpInterculturalCard)
      })
      .catch(() => {})
  }, [])

  // Read initial tab from URL query param
  const getTabFromUrl = () => {
    const params = new URLSearchParams(location.search)
    const tab = params.get('tab')
    return ['biergerpakt', 'stats', 'language', 'intercultural', 'sources'].includes(tab) ? tab : 'biergerpakt'
  }

  const [activeTab, setActiveTab] = useState(getTabFromUrl)

  // Update URL when tab changes
  const switchTab = (tab) => {
    setActiveTab(tab)
    navigate(`/info?tab=${tab}`, { replace: true })
  }

  // Sync tab if URL changes externally (e.g. back button)
  useEffect(() => {
    setActiveTab(getTabFromUrl())
  }, [location.search])

  const biergerpaktUrl = BIERGERPAKT_URLS[i18n.language] || BIERGERPAKT_URLS.en
  const luxembourgishUrl = LUXEMBOURGISH_URLS[i18n.language] || LUXEMBOURGISH_URLS.en

  const tabs = [
    { id: 'biergerpakt', label: 'Biergerpakt', icon: '🤝' },
    { id: 'stats',       label: 'Stats',       icon: '📊' },
    { id: 'language',    label: 'Language',    icon: '🗣️' },
    { id: 'intercultural', label: 'Activities', icon: '🌍' },
    { id: 'sources',     label: 'Sources',     icon: '🔗' },
  ]

  return (
    <div className="container" style={{ paddingTop: 20 }}>
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: 4 }}>{t('info.title')}</h1>
        <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.9rem' }}>{t('info.subtitle')}</p>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex', gap: 6, marginBottom: 20,
        flexWrap: 'wrap',
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => switchTab(tab.id)}
            style={{
              padding: '8px 14px', borderRadius: 999, border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font)', fontSize: '0.85rem', fontWeight: 600,
              background: activeTab === tab.id ? 'var(--red)' : 'var(--gray-100)',
              color: activeTab === tab.id ? 'white' : 'var(--gray-600)'
            }}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* ── Biergerpakt Tab ─────────────────────────────────────────────────── */}
      {activeTab === 'biergerpakt' && (
        <div className="animate-fade-in">
          <div style={{
            background: 'linear-gradient(135deg, #1E3A5F 0%, #2563EB 100%)',
            borderRadius: 'var(--radius-xl)', padding: '24px',
            color: 'white', marginBottom: 20
          }}>
            <div style={{ fontSize: '3rem', marginBottom: 12 }}>🤝</div>
            <h2 style={{ color: 'white', marginBottom: 12 }}>{bpIntro?.title ?? t('info.biergerpakt.title')}</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.6 }}>
              {bpIntro?.text ?? t('info.biergerpakt.text')}
            </p>
            <a href={biergerpaktUrl}
              target="_blank" rel="noreferrer"
              style={{
                display: 'block', marginTop: 20,
                background: 'rgba(255,255,255,0.2)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: 'white', borderRadius: 10, padding: '12px 16px',
                textAlign: 'center', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem'
              }}>
              {bpIntro?.cta ?? t('info.biergerpakt.cta')} →
            </a>
          </div>

          <div className="card" style={{ marginBottom: 16 }}>
            <h3 style={{ marginBottom: 12 }}>{bpInterculturalCard?.title ?? t('info.intercultural.title')}</h3>
            <p style={{ color: 'var(--gray-700)', margin: 0, lineHeight: 1.6 }}>
              {bpInterculturalCard?.text ?? t('info.intercultural.text')}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {bpCards.map(item => (
              <div key={item.title} className="card" style={{ display: 'flex', gap: 14 }}>
                <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>{item.title}</div>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--gray-700)', lineHeight: 1.5 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Stats Tab ───────────────────────────────────────────────────────── */}
      {activeTab === 'stats' && (
        <div className="animate-fade-in">
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16
          }}>
            <h2 style={{ margin: 0 }}>{t('info.stats.title')}</h2>
            <a href="https://statistiques.public.lu/en/statistique-publique/statec.html"
              target="_blank" rel="noreferrer"
              style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>
              {t('info.stats.source')} →
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {stats.map(stat => (
              <div key={stat.label} style={{
                background: 'white', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '14px 16px',
                display: 'flex', alignItems: 'center', gap: 14
              }}>
                <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{stat.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: 'var(--gray-800)' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{stat.label}</div>
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--gray-400)', textAlign: 'right', flexShrink: 0 }}>
                  {stat.source}
                </div>
              </div>
            ))}
          </div>

          {/* Visual mini-chart */}
          <div className="card" style={{ marginTop: 16 }}>
            <div style={{ fontWeight: 700, marginBottom: 12 }}>Population by nationality group</div>
            {[
              { label: 'Luxembourgers', pct: 53, color: 'var(--red)' },
              { label: 'Portuguese', pct: 15, color: '#009C3B' },
              { label: 'French', pct: 7, color: '#0055A4' },
              { label: 'Italian', pct: 4, color: '#009246' },
              { label: 'Belgian', pct: 3, color: '#FAE042' },
              { label: 'Other nationalities', pct: 18, color: 'var(--gray-400)' }
            ].map(bar => (
              <div key={bar.label} style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 500 }}>{bar.label}</span>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>{bar.pct}%</span>
                </div>
                <div style={{ height: 6, background: 'var(--gray-100)', borderRadius: 999 }}>
                  <div style={{ height: '100%', width: `${bar.pct}%`, background: bar.color, borderRadius: 999 }} />
                </div>
              </div>
            ))}
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 8 }}>
              Approximate figures — Source: STATEC 2024
            </div>
          </div>
        </div>
      )}

      {/* ── Language Tab ────────────────────────────────────────────────────── */}
      {activeTab === 'language' && (
        <div className="animate-fade-in">
          <div className="card" style={{ marginBottom: 20 }}>
            <h3 style={{ marginBottom: 8 }}>{t('info.languages.title')}</h3>
            <p style={{ color: 'var(--gray-700)', margin: 0, lineHeight: 1.6 }}>
              {t('info.languages.text')}
            </p>
          </div>

          <div style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
            {[
              { flag: '🇱🇺', name: 'Lëtzebuergesch', role: 'National language' },
              { flag: '🇫🇷', name: 'Français', role: 'Administrative' },
              { flag: '🇩🇪', name: 'Deutsch', role: 'Administrative' },
              { flag: '🇵🇹', name: 'Português', role: 'Community' },
              { flag: '🇬🇧', name: 'English', role: 'Business' }
            ].map(lang => (
              <div key={lang.name} style={{
                flex: '1 1 calc(50% - 5px)', minWidth: 130,
                background: 'white', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '12px', textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: 4 }}>{lang.flag}</div>
                <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{lang.name}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 2 }}>{lang.role}</div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: 12 }}>
              Useful phrases in 3 languages
            </div>
            {languagePhrases.map((phrase) => (
              <div key={phrase.lb} className="card" style={{ marginBottom: 8, padding: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>🇱🇺</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--gray-900)' }}>{phrase.lb}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {[
                    { flag: '🇬🇧', text: phrase.meaning },
                    { flag: '🇫🇷', text: phrase.fr },
                    { flag: '🇩🇪', text: phrase.de }
                  ].map(({ flag, text }) => (
                    <div key={flag} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: '0.95rem', flexShrink: 0 }}>{flag}</span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--gray-600)', lineHeight: 1.3 }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <a href={luxembourgishUrl}
            target="_blank" rel="noreferrer"
            className="btn btn-outline btn-full">
            Learn more about Luxembourgish →
          </a>
        </div>
      )}

      {/* ── Intercultural Activities Tab ─────────────────────────────────────── */}
      {activeTab === 'intercultural' && (
        <div className="animate-fade-in">
          <div style={{
            background: 'linear-gradient(135deg, #059669 0%, #065F46 100%)',
            borderRadius: 'var(--radius-xl)', padding: '24px',
            color: 'white', marginBottom: 20
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 10 }}>🌍</div>
            <h2 style={{ color: 'white', marginBottom: 8 }}>Intercultural Activities</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0, fontSize: '0.9rem', lineHeight: 1.5 }}>
              Ideas for connecting across cultures — in your neighbourhood, at work, and in everyday life in Luxembourg.
            </p>
          </div>

          {activities.map(cat => (
            <div key={cat.title} style={{ marginBottom: 20 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12
              }}>
                <span style={{
                  background: cat.bg, color: cat.color,
                  borderRadius: 999, padding: '5px 14px',
                  fontSize: '0.85rem', fontWeight: 700,
                  display: 'inline-flex', alignItems: 'center', gap: 6
                }}>
                  {cat.icon} {cat.title}
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {cat.tips.map((tip, i) => (
                  <div key={i} style={{
                    background: 'white', border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)', padding: '12px 16px',
                    display: 'flex', gap: 12, alignItems: 'flex-start'
                  }}>
                    <span style={{
                      width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                      background: cat.bg, color: cat.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.75rem', fontWeight: 700
                    }}>{i + 1}</span>
                    <span style={{ fontSize: '0.88rem', color: 'var(--gray-700)', lineHeight: 1.5 }}>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <a href="https://biergerpakt.zesummeliewen.lu/en/"
            target="_blank" rel="noreferrer"
            style={{
              display: 'block',
              background: 'linear-gradient(135deg, #1E3A5F 0%, #2563EB 100%)',
              color: 'white', borderRadius: 'var(--radius-lg)', padding: '16px 20px',
              textDecoration: 'none', textAlign: 'center', fontWeight: 700,
              fontSize: '0.95rem', marginBottom: 24,
            }}>
            🤝 Discover all Biergerpakt activities →
          </a>
        </div>
      )}

      {/* ── Sources Tab ─────────────────────────────────────────────────────── */}
      {activeTab === 'sources' && (
        <div className="animate-fade-in">
          <div className="card" style={{ marginBottom: 20 }}>
            <h3 style={{ marginBottom: 8 }}>Reliable sources about Luxembourg</h3>
            <p style={{ color: 'var(--gray-700)', margin: 0, fontSize: '0.88rem', lineHeight: 1.6 }}>
              All information on this platform is based on these verified sources. We encourage you to explore them directly for the most up-to-date information.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {reliableSources.map(group => (
              <div key={group.category}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  marginBottom: 10
                }}>
                  <span style={{ fontSize: '1.2rem' }}>{group.icon}</span>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--gray-700)' }}>
                    {group.category}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {group.sources.map(src => (
                    <a
                      key={src.href}
                      href={src.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'flex', flexDirection: 'column', gap: 4,
                        background: 'white', border: '1px solid var(--border)',
                        borderRadius: 'var(--radius)', padding: '14px 16px',
                        textDecoration: 'none', color: 'var(--text)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                        <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--accent)' }}>{src.label}</span>
                        <span style={{ color: 'var(--gray-400)', flexShrink: 0 }}>→</span>
                      </div>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{src.desc}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 24, padding: '14px 16px',
            background: 'var(--gray-50)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius)', fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5
          }}>
            ℹ️ This platform is an educational tool and is not affiliated with the Luxembourg government. All content is based on publicly available official sources listed above.
          </div>
        </div>
      )}
    </div>
  )
}
