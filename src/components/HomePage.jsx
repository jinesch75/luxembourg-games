import { useTranslation } from 'react-i18next'
import GameCard from './GameCard'

export default function HomePage() {
  const { t } = useTranslation()

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
          />
          <GameCard
            path="/geo"
            emoji="🗺️"
            title="Lëtz Géo"
            description={t('geo.subtitle')}
            color="#D1FAE5"
          />
        </div>
      </div>

    </div>
  )
}
