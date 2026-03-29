import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const { t } = useTranslation()
  const [gamesOpen, setGamesOpen] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - var(--nav-height))', marginBottom: '-80px', background: 'linear-gradient(160deg, #0F172A 0%, #1A2744 60%, #1B3A6B 100%)' }}>

      {/* ── Hero ── */}
      <section className="home-hero" style={{ flex: 1 }}>
        <div className="container-wide">
          <div className="home-hero-inner">
            <h1 className="home-hero-title">
              {t('home.headline')}<br />
              <span className="home-hero-title-accent">Games</span>
            </h1>
            <p className="home-hero-sub">{t('home.tagline')}</p>
            <div className="home-hero-actions">
              <button className="btn-hero-primary" onClick={() => setGamesOpen(true)}>🎯 Start the games</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Games Popup Modal ── */}
      {gamesOpen && (
        <div className="games-modal-overlay" onClick={() => setGamesOpen(false)}>
          <div className="games-modal" onClick={e => e.stopPropagation()}>
            <div className="games-modal-header">
              <h2>{t('home.gamesTitle')}</h2>
              <button className="games-modal-close" onClick={() => setGamesOpen(false)} aria-label="Close">✕</button>
            </div>

            <div className="home-game-grid" style={{ marginTop: '12px' }}>
              <Link to="/quiz" className="game-card-v" onClick={() => setGamesOpen(false)}>
                <div className="game-card-v-body">
                  <div className="game-card-v-header-row">
                    <div className="game-card-v-icon" style={{ background: '#DBEAFE' }}>❓</div>
                    <div className="game-card-v-title">Quiz</div>
                  </div>
                  <p className="game-card-v-desc">Fun multiple-choice questions about history, culture, language and more.</p>
                </div>
                <div className="game-card-v-footer">
                  <span className="game-card-v-cta">Start playing</span>
                  <div className="game-card-v-arrow">›</div>
                </div>
              </Link>

              <Link to="/geo" className="game-card-v" onClick={() => setGamesOpen(false)}>
                <div className="game-card-v-body">
                  <div className="game-card-v-header-row">
                    <div className="game-card-v-icon" style={{ background: '#D1FAE5' }}>🎯</div>
                    <div className="game-card-v-title">Map-Game</div>
                  </div>
                  <p className="game-card-v-desc">{t('geo.subtitle')} — Pin locations on the map and earn points based on your accuracy.</p>
                </div>
                <div className="game-card-v-footer">
                  <span className="game-card-v-cta">Start playing</span>
                  <div className="game-card-v-arrow">›</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
