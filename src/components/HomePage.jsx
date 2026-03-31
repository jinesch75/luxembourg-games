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
                  <strong>Game 1: Quiz</strong>
                  <small>{t('home.quizCardDesc')}</small>
                </span>
              </Link>
              <Link to="/geo" className="btn-hero-game btn-hero-game-geo">
                <span className="btn-hero-game-icon"><MapPin size={26} strokeWidth={1.75} /></span>
                <span className="btn-hero-game-text">
                  <strong>Game 2: Map Game</strong>
                  <small>{t('home.mapCardDesc')}</small>
                </span>
              </Link>
              <Link to="/famous" className="btn-hero-game btn-hero-game-famous">
                <span className="btn-hero-game-icon"><Camera size={26} strokeWidth={1.75} /></span>
                <span className="btn-hero-game-text">
                  <strong>Game 3: Famous People</strong>
                  <small>{t('home.famousCardDesc', { defaultValue: 'Recognise Luxembourg\'s famous faces' })}</small>
                </span>
              </Link>
              <Link to="/places" className="btn-hero-game btn-hero-game-places">
                <span className="btn-hero-game-icon"><Building size={26} strokeWidth={1.75} /></span>
                <span className="btn-hero-game-text">
                  <strong>Game 4: Famous Places</strong>
                  <small>{t('home.placesCardDesc', { defaultValue: 'Identify Luxembourg\'s iconic landmarks' })}</small>
                </span>
              </Link>
              <Link to="/life" className="btn-hero-game btn-hero-game-admin">
                <span className="btn-hero-game-icon"><ClipboardList size={26} strokeWidth={1.75} /></span>
                <span className="btn-hero-game-text">
                  <strong>Game 5: Life in Luxembourg</strong>
                  <small>{t('home.adminCardDesc', { defaultValue: 'Master daily life, admin & institutions' })}</small>
                </span>
              </Link>
              <Link to="/economy" className="btn-hero-game btn-hero-game-economy">
                <span className="btn-hero-game-icon"><TrendingUp size={26} strokeWidth={1.75} /></span>
                <span className="btn-hero-game-text">
                  <strong>Game 6: Economy</strong>
                  <small>{t('home.economyCardDesc', { defaultValue: 'Explore Luxembourg\'s economy & financial sector' })}</small>
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
            Language Game
          </Link>
        </div>
      </div>

    </div>
  )
}
