import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const STATS = [
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
  { icon: '🎓', label: 'University of Luxembourg founded', value: '2003', source: 'Uni.lu' }
]

const LINKS = [
  {
    category: 'Tourism & Discovery',
    icon: '🏔️',
    items: [
      { label: 'Visit Luxembourg — official tourism', href: 'https://www.visitluxembourg.com/', desc: 'Places, events, hiking trails, itineraries' },
      { label: 'Luxembourg City Tourist Office', href: 'https://www.lcto.lu/en', desc: 'Explore the capital city' }
    ]
  },
  {
    category: 'Government & Services',
    icon: '🏛️',
    items: [
      { label: 'Gouvernement.lu — official portal', href: 'https://luxembourg.public.lu/en.html', desc: 'Government services, living in Luxembourg' },
      { label: 'Guichet.lu — administrative guide', href: 'https://guichet.public.lu/en.html', desc: 'Step-by-step guides for administrative procedures' },
      { label: 'ADEM — employment agency', href: 'https://adem.public.lu/en.html', desc: 'Find work, unemployment support' }
    ]
  },
  {
    category: 'Statistics & Data',
    icon: '📊',
    items: [
      { label: 'STATEC — official statistics', href: 'https://statistiques.public.lu/en/statistique-publique/statec.html', desc: 'Population, economy, employment data' },
      { label: 'Open Data Luxembourg', href: 'https://data.public.lu/en/', desc: 'Government open data portal' }
    ]
  },
  {
    category: 'Intercultural Living-together',
    icon: '🤝',
    items: [
      { label: 'Biergerpakt — Citizens\' Pact', href: '__biergerpakt__', desc: 'Activities, events, and community connections' },
      { label: 'OLAI — Office for Reception and Integration', href: 'https://olai.public.lu/en.html', desc: 'Support for newcomers in Luxembourg' },
      { label: 'Info-migrants Luxembourg', href: 'https://www.infomigrants.net/en/country/luxembourg', desc: 'Practical information for people moving to Luxembourg' }
    ]
  },
  {
    category: 'Culture & Heritage',
    icon: '🎭',
    items: [
      { label: 'MNHA — National Museum of History & Art', href: 'https://www.mnha.lu/en', desc: 'Luxembourg\'s leading cultural museum' },
      { label: 'Mudam Luxembourg — Modern Art', href: 'https://www.mudam.com/en', desc: 'Contemporary art museum on Kirchberg plateau' },
      { label: 'Luxembourg tradition & folklore', href: 'https://luxembourg.public.lu/en/culture/traditions.html', desc: 'Festivals, customs, and cultural heritage' }
    ]
  }
]

const LANGUAGE_PHRASES = [
  { lb: 'Moien', fr: 'Bonjour', de: 'Guten Morgen', meaning: 'Hello / Good morning' },
  { lb: 'Äddi', fr: 'Au revoir', de: 'Auf Wiedersehen', meaning: 'Goodbye' },
  { lb: 'Merci villmools', fr: 'Merci beaucoup', de: 'Vielen Dank', meaning: 'Thank you very much' },
  { lb: 'Wéi geet\'s?', fr: 'Comment ça va?', de: 'Wie geht es Ihnen?', meaning: 'How are you?' },
  { lb: 'Ech hunn dech gär', fr: 'Je t\'aime', de: 'Ich liebe dich', meaning: 'I love you' },
  { lb: 'Wou ass...?', fr: 'Où est...?', de: 'Wo ist...?', meaning: 'Where is...?' },
  { lb: 'Wéi vill kascht dat?', fr: 'Combien ça coûte?', de: 'Wie viel kostet das?', meaning: 'How much does it cost?' }
]

const BIERGERPAKT_URLS = {
  en: 'https://biergerpakt.zesummeliewen.lu/en/',
  fr: 'https://biergerpakt.zesummeliewen.lu',
  de: 'https://biergerpakt.zesummeliewen.lu/de/',
  lb: 'https://biergerpakt.zesummeliewen.lu/lu/'
}

export default function InfoHub() {
  const { t, i18n } = useTranslation()
  const [activeTab, setActiveTab] = useState('biergerpakt')
  const biergerpaktUrl = BIERGERPAKT_URLS[i18n.language] || BIERGERPAKT_URLS.en

  const tabs = [
    { id: 'biergerpakt', label: 'Biergerpakt', icon: '🤝' },
    { id: 'stats',       label: 'Stats',       icon: '📊' },
    { id: 'links',       label: 'Links',       icon: '🔗' },
    { id: 'language',    label: 'Language',    icon: '🗣️' }
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
        overflowX: 'auto', paddingBottom: 4,
        scrollbarWidth: 'none'
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '8px 14px', borderRadius: 999, border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font)', fontSize: '0.85rem', fontWeight: 600,
              whiteSpace: 'nowrap', flexShrink: 0,
              background: activeTab === tab.id ? 'var(--red)' : 'var(--gray-100)',
              color: activeTab === tab.id ? 'white' : 'var(--gray-600)'
            }}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Biergerpakt */}
      {activeTab === 'biergerpakt' && (
        <div className="animate-fade-in">
          <div style={{
            background: 'linear-gradient(135deg, #1E3A5F 0%, #2563EB 100%)',
            borderRadius: 'var(--radius-xl)', padding: '24px',
            color: 'white', marginBottom: 20
          }}>
            <div style={{ fontSize: '3rem', marginBottom: 12 }}>🤝</div>
            <h2 style={{ color: 'white', marginBottom: 12 }}>{t('info.biergerpakt.title')}</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.6 }}>
              {t('info.biergerpakt.text')}
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
              {t('info.biergerpakt.cta')} →
            </a>
          </div>

          <div className="card" style={{ marginBottom: 16 }}>
            <h3 style={{ marginBottom: 12 }}>{t('info.intercultural.title')}</h3>
            <p style={{ color: 'var(--gray-700)', margin: 0, lineHeight: 1.6 }}>
              {t('info.intercultural.text')}
            </p>
          </div>

          {/* What is the Biergerpakt? Key facts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { icon: '🗓️', title: 'Regular events', text: 'The Biergerpakt organises workshops, guided tours, sports events, and cultural activities throughout the year — all free or low cost.' },
              { icon: '👥', title: 'For everyone', text: 'Whether you arrived last month or were born here, the Biergerpakt is designed for all residents regardless of nationality or background.' },
              { icon: '🌱', title: 'Building bridges', text: 'Activities are specifically designed to bring people from different backgrounds together, creating friendships and a sense of shared community.' },
              { icon: '📱', title: 'How to participate', text: 'Check the programme on the official website, sign up for activities near you, and take part in building an open and welcoming Luxembourg.' }
            ].map(item => (
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

      {/* Stats */}
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
            {STATS.map(stat => (
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

      {/* Links */}
      {activeTab === 'links' && (
        <div className="animate-fade-in">
          <h2 style={{ marginBottom: 16 }}>{t('info.links.title')}</h2>
          {LINKS.map(section => (
            <div key={section.category} style={{ marginBottom: 20 }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: 10 }}>
                {section.icon} {section.category}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {section.items.map(link => (
                  <a key={link.href} href={link.href === '__biergerpakt__' ? biergerpaktUrl : link.href} target="_blank" rel="noreferrer"
                    style={{
                      display: 'block', background: 'white', border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)', padding: '14px 16px', textDecoration: 'none',
                      color: 'var(--text)'
                    }}>
                    <div style={{ fontWeight: 600, marginBottom: 2, color: 'var(--accent)' }}>{link.label}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{link.desc}</div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Language */}
      {activeTab === 'language' && (
        <div className="animate-fade-in">
          <div className="card" style={{ marginBottom: 20 }}>
            <h3 style={{ marginBottom: 8 }}>{t('info.languages.title')}</h3>
            <p style={{ color: 'var(--gray-700)', margin: 0, lineHeight: 1.6 }}>
              {t('info.languages.text')}
            </p>
          </div>

          {/* Language flags */}
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

          {/* Phrase table */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: 12 }}>
              Useful phrases in 3 languages
            </div>
            {LANGUAGE_PHRASES.map((phrase) => (
              <div key={phrase.lb} className="card" style={{ marginBottom: 8, padding: 14 }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {phrase.meaning}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                  {[
                    { flag: '🇱🇺', text: phrase.lb },
                    { flag: '🇫🇷', text: phrase.fr },
                    { flag: '🇩🇪', text: phrase.de }
                  ].map(({ flag, text }) => (
                    <div key={flag} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1rem' }}>{flag}</div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 600, marginTop: 4, lineHeight: 1.3 }}>{text}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <a href="https://luxembourg.public.lu/en/vivre/luxembourgeois.html"
            target="_blank" rel="noreferrer"
            className="btn btn-outline btn-full">
            Learn more about Luxembourgish →
          </a>
        </div>
      )}
    </div>
  )
}
