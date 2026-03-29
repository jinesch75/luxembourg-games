import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const { t } = useTranslation()
  const [gamesOpen, setGamesOpen] = useState(false)

  return (
    <div>

      {/* ── Hero ── */}
      <section className="home-hero">
        <div className="container-wide">
          <div className="home-hero-inner">
            <h1 className="home-hero-title">
              {t('home.headline')}<br />
              <span className="home-hero-title-accent">Through Play</span>
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
              <span className="home-section-eyebrow">Interactive Games</span>
              <h2>{t('home.gamesTitle')}</h2>
              <p>Two interactive games designed to make learning about Luxembourg fun, engaging, and rewarding.</p>
              <button className="games-modal-close" onClick={() => setGamesOpen(false)} aria-label="Close">✕</button>
            </div>

            <div className="home-game-grid" style={{ marginTop: '24px' }}>
              <Link to="/quiz" className="game-card-v" onClick={() => setGamesOpen(false)}>
                <div className="game-card-v-body">
                  <div className="game-card-v-icon" style={{ background: '#DBEAFE' }}>🎯</div>
                  <div className="game-card-v-title">Quiz</div>
                  <p className="game-card-v-desc">{t('quiz.subtitle')} — 5 levels with 25 sub-levels covering history, culture, language, and more.</p>
                </div>
                <div className="game-card-v-footer">
                  <span className="game-card-v-cta">Start playing</span>
                  <div className="game-card-v-arrow">›</div>
                </div>
              </Link>

              <Link to="/geo" className="game-card-v" onClick={() => setGamesOpen(false)}>
                <div className="game-card-v-body">
                  <div className="game-card-v-icon" style={{ background: '#D1FAE5' }}>🗺️</div>
                  <div className="game-card-v-title">Géo</div>
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
