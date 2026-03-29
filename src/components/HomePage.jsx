import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - var(--nav-height))', marginBottom: '-80px', background: 'linear-gradient(160deg, #0F172A 0%, #1A2744 60%, #1B3A6B 100%)' }}>

      {/* ── Hero ── */}
      <section className="home-hero">
        <div className="container-wide">
          <div className="home-hero-inner">
            <h1 className="home-hero-title">
              {t('home.headline')}
            </h1>
            <p className="home-hero-sub">{t('home.tagline')}</p>
            <div className="home-hero-actions">
              <Link to="/quiz" className="btn-hero-game btn-hero-game-quiz">
                <span className="btn-hero-game-icon">🗳️</span>
                <span className="btn-hero-game-text">
                  <strong>Game 1: Quiz</strong>
                  <small>{t('home.quizCardDesc')}</small>
                </span>
              </Link>
              <Link to="/geo" className="btn-hero-game btn-hero-game-geo">
                <span className="btn-hero-game-icon">🎯</span>
                <span className="btn-hero-game-text">
                  <strong>Game 2: Map Game</strong>
                  <small>{t('home.mapCardDesc')}</small>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bridge Photo Section ── */}
      <div className="home-bridge-section" />

    </div>
  )
}
