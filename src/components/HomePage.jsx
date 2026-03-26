import { useTranslation } from 'react-i18next'
import GameCard from './GameCard'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { isToday } from '../utils/dateUtils'

export default function HomePage() {
  const { t } = useTranslation()
  const [quizState] = useLocalStorage('letz-quiz-state', null)
  const [streak] = useLocalStorage('letz-streak', { count: 0, lastDate: null })

  const quizPlayedToday = quizState && isToday(quizState.date)

  const stats = [
    { label: t('home.stat1Label'), value: t('home.stat1Value'), icon: '👥' },
    { label: t('home.stat2Label'), value: t('home.stat2Value'), icon: '🌍' },
    { label: t('home.stat3Label'), value: t('home.stat3Value'), icon: '🚗' },
    { label: t('home.stat4Label'), value: t('home.stat4Value'), icon: '🗣️' }
  ]

  return (
    <div className="container">
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #5BAEE8 0%, #2E86C1 100%)',
        borderRadius: 'var(--radius-xl)',
        padding: '28px 24px',
        marginTop: 20,
        marginBottom: 24,
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: -20, right: -20,
          fontSize: '7rem', opacity: 0.15, lineHeight: 1
        }}>🇱🇺</div>
        <h1 style={{ color: 'white', marginBottom: 8, fontSize: 'clamp(1.4rem, 5vw, 2rem)' }}>
          {t('home.headline')}
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0, fontSize: '0.95rem' }}>
          {t('home.tagline')}
        </p>
        {streak.count >= 2 && (
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            marginTop: 16,
            background: 'rgba(255,255,255,0.2)',
            borderRadius: 999,
            padding: '6px 14px',
            fontSize: '0.85rem',
            fontWeight: 700
          }}>
            🔥 {streak.count} {t('quiz.streak')}
          </div>
        )}
      </div>

      {/* Games */}
      <div style={{ marginBottom: 28 }}>
        <div className="section-title">{t('home.gamesTitle')}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <GameCard
            path="/quiz"
            emoji="🎯"
            title="Lëtz Quiz"
            description={t('quiz.subtitle')}
            color="#DBEAFE"
            badge={quizPlayedToday ? '✓ Done' : 'Daily'}
          />
          <GameCard
            path="/geo"
            emoji="🗺️"
            title="Lëtz Géo"
            description={t('geo.subtitle')}
            color="#D1FAE5"
          />
          <GameCard
            path="/connect"
            emoji="🔗"
            title="Lëtz Connect"
            description={t('connect.subtitle')}
            color="#EDE9FE"
            badge="Weekly"
          />
        </div>
      </div>

      {/* Stats */}
      <div style={{ marginBottom: 28 }}>
        <div className="section-title">{t('home.statsTitle')}</div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 10
        }}>
          {stats.map(stat => (
            <div key={stat.label} style={{
              background: 'white',
              borderRadius: 'var(--radius)',
              padding: '16px',
              border: '1px solid var(--border)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: 4 }}>{stat.icon}</div>
              <div style={{ fontWeight: 800, fontSize: '1.3rem', color: 'var(--gray-800)' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 2 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'right', marginTop: 6 }}>
          <a href="https://statistiques.public.lu/en/statistique-publique/statec.html"
            target="_blank" rel="noreferrer"
            style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Source: STATEC →
          </a>
        </div>
      </div>

      {/* Biergerpakt Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2563EB 100%)',
        borderRadius: 'var(--radius-lg)',
        padding: '20px',
        marginBottom: 28,
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <span style={{ fontSize: '2rem', flexShrink: 0 }}>🤝</span>
          <div>
            <div style={{ fontWeight: 700, marginBottom: 4, fontSize: '1rem' }}>Biergerpakt</div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', margin: 0 }}>
              {t('home.biergerpaktBanner')}
            </p>
          </div>
        </div>
        <a
          href="https://biergerpakt.zesummeliewen.lu/en/"
          target="_blank"
          rel="noreferrer"
          style={{
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            color: 'white',
            borderRadius: 8,
            padding: '10px 16px',
            textAlign: 'center',
            fontWeight: 600,
            fontSize: '0.9rem',
            textDecoration: 'none',
            display: 'block'
          }}
        >
          {t('home.biergerpaktCta')} →
        </a>
      </div>

      {/* Daily reminder */}
      <div style={{
        background: '#FFFBEB',
        border: '1px solid #FDE68A',
        borderRadius: 'var(--radius)',
        padding: 16,
        marginBottom: 28,
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start'
      }}>
        <span style={{ fontSize: '1.4rem' }}>⚡</span>
        <div>
          <div style={{ fontWeight: 600, marginBottom: 2, color: '#92400E' }}>
            {t('home.dailyReminderTitle')}
          </div>
          <div style={{ fontSize: '0.85rem', color: '#78350F' }}>
            {t('home.dailyReminderText')}
          </div>
        </div>
      </div>

      {/* Sources */}
      <div style={{ marginBottom: 28 }}>
        <div className="section-title">{t('home.sourcesTitle')}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { label: 'Visit Luxembourg', href: 'https://www.visitluxembourg.com/', icon: '🏔️' },
            { label: 'Gouvernement.lu', href: 'https://luxembourg.public.lu/en.html', icon: '🏛️' },
            { label: 'STATEC', href: 'https://statistiques.public.lu/en/statistique-publique/statec.html', icon: '📊' }
          ].map(src => (
            <a
              key={src.href}
              href={src.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '12px 16px',
                textDecoration: 'none',
                color: 'var(--text)',
                fontSize: '0.9rem',
                fontWeight: 500
              }}
            >
              <span style={{ fontSize: '1.3rem' }}>{src.icon}</span>
              <span style={{ flex: 1 }}>{src.label}</span>
              <span style={{ color: 'var(--gray-400)' }}>→</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
