import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div>

      {/* ── Hero ── */}
      <section className="home-hero">
        <div className="container-wide">
          <div className="home-hero-inner">
            <div className="home-hero-label"><img src="/bl-logo-1.png" alt="Beautiful Luxembourg" style={{ height: '24px', width: '24px', objectFit: 'contain', verticalAlign: 'middle', marginRight: '6px' }} />Beautiful Luxembourg</div>
            <h1 className="home-hero-title">
              {t('home.headline')}<br />
              <span className="home-hero-title-accent">Through Play</span>
            </h1>
            <p className="home-hero-sub">{t('home.tagline')}</p>
            <div className="home-hero-actions">
              <Link to="/quiz" className="btn-hero-primary">🎯 Start the Quiz</Link>
              <Link to="/info" className="btn-hero-outline">ℹ️ {t('home.biergerpaktCta')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="home-stats-bar">
        <div className="container-wide">
          <div className="home-stats-grid">
            <div>
              <div className="home-stat-value">{t('home.stat1Value')}</div>
              <div className="home-stat-label">{t('home.stat1Label')}</div>
            </div>
            <div>
              <div className="home-stat-value">{t('home.stat2Value')}</div>
              <div className="home-stat-label">{t('home.stat2Label')}</div>
            </div>
            <div>
              <div className="home-stat-value">{t('home.stat3Value')}</div>
              <div className="home-stat-label">{t('home.stat3Label')}</div>
            </div>
            <div>
              <div className="home-stat-value">{t('home.stat4Value')}</div>
              <div className="home-stat-label">{t('home.stat4Label')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Games ── */}
      <section className="home-section" id="games">
        <div className="container-wide">
          <div className="home-section-header">
            <span className="home-section-eyebrow">Interactive Games</span>
            <h2>{t('home.gamesTitle')}</h2>
            <p>Two interactive games designed to make learning about Luxembourg fun, engaging, and rewarding.</p>
          </div>

          <div className="home-game-grid">
            <Link to="/quiz" className="game-card-v">
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

            <Link to="/geo" className="game-card-v">
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
      </section>

      {/* ── Value Props ── */}
      <section className="home-section home-section-alt">
        <div className="container-wide">
          <div className="home-section-header">
            <span className="home-section-eyebrow">Why Play</span>
            <h2>Learn as you play</h2>
            <p>Designed for newcomers and long-term residents alike — discover Luxembourg at your own pace.</p>
          </div>

          <div className="home-value-grid">
            <div className="home-value-card">
              <div className="home-value-icon" style={{ background: '#EDE9FE' }}>🎓</div>
              <h3>Learn at your pace</h3>
              <p>5 levels per game, each unlocking as you progress. Come back daily for new challenges.</p>
            </div>
            <div className="home-value-card">
              <div className="home-value-icon" style={{ background: '#FEF3C7' }}>🏆</div>
              <h3>Track your progress</h3>
              <p>Earn points, unlock new levels, and see how well you know Luxembourg over time.</p>
            </div>
            <div className="home-value-card">
              <div className="home-value-icon" style={{ background: '#DCFCE7' }}>🌍</div>
              <h3>Connect with culture</h3>
              <p>History, geography, language, and people — content designed to foster real connection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Biergerpakt CTA ── */}
      <section className="home-cta-section">
        <div className="container-wide">
          <div className="home-cta-inner">
            <h2>Discover the Biergerpakt</h2>
            <p>{t('home.biergerpaktBanner')}</p>
            <Link to="/info" className="btn-cta-white">
              {t('home.biergerpaktCta')} →
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
