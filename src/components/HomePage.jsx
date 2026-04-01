import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { HelpCircle, MapPin, Camera, Building, ClipboardList, TrendingUp } from 'lucide-react'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - var(--nav-height))', marginBottom: '-80px', background: '#F6F5F1' }}>

      {/* ── Hero ── */}
      <section className="home-hero">
        <div className="container-wide">
          <div className="home-hero-inner">
            <h1 className="home-hero-title">
              {(() => {
                const words = t('home.headline').split(' ')
                const lastWord = words.pop()
                return <>{words.join(' ')}<br />{lastWord}</>
              })()}
            </h1>
            <div className="home-hero-actions">
              <Link to="/quiz" className="btn-hero-game btn-hero-game-quiz">
                <span className="btn-hero-game-icon"><HelpCircle size={26} strokeWidth={1.75} /></span>
                <span className="btn-hero-game-text">
                  <strong>{t('home.game1Title')}</strong>
                  <small>{t('home.quizCardDesc')}</small>
                </span>
              </Link>
              <Link to="/geo" className="btn-hero-game btn-hero-game-geo">
                <span className="btn-hero-game-icon"><MapPin size={26} strokeWidth={1.75} /></span>
                <span className="btn-hero-game-text">
                  <strong>{t('home.game2Title')}</strong>
                  <small>{t('home.mapCardDesc')}</small>
                </span>
              </Link>
              <Link to="/famous" className="btn-hero-game btn-hero-game-famous">
                <span className="btn-hero-game-icon"><Camera size={26} strokeWidth={1.75} /></span>
                <span className="btn-hero-game-text">
                  <strong>{t('home.game3Title')}</strong>
                  <small>{t('home.famousCardDesc')}</small>
                </span>
              </Link>
              <Link to="/places" className="btn-hero-game btn-hero-game-places">
                <span className="btn-hero-game-icon"><Building size={26} strokeWidth={1.75} /></span>
                <span className="btn-hero-game-text">
                  <strong>{t('home.game4Title')}</strong>
                  <small>{t('home.placesCardDesc')}</small>
                </span>
              </Link>
              <Link to="/life" className="btn-hero-game btn-hero-game-admin">
                <span className="btn-hero-game-icon"><ClipboardList size={26} strokeWidth={1.75} /></span>
                <span className="btn-hero-game-text">
                  <strong>{t('home.game5Title')}</strong>
                  <small>{t('home.adminCardDesc')}</small>
                </span>
              </Link>
              <Link to="/economy" className="btn-hero-game btn-hero-game-economy">
                <span className="btn-hero-game-icon"><TrendingUp size={26} strokeWidth={1.75} /></span>
                <span className="btn-hero-game-text">
                  <strong>{t('home.game6Title')}</strong>
                  <small>{t('home.economyCardDesc')}</small>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bridge Photo Section ── */}
      <div className="home-bridge-section" />

      {/* ── Small link to test/preview games ── */}
      <div style={{ textAlign: 'center', padding: '12px 16px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
          <Link to="/spelling" style={{ fontSize: 10, color: '#B0AFA8', textDecoration: 'none' }}>
            {t('home.languageGameLink')}
          </Link>
        </div>
      </div>

    </div>
  )
}
