import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <div className="container-wide">
        <div className="site-footer-inner">
          {/* Brand */}
          <div className="site-footer-brand">
            <img src="/bl-logo.svg" alt="Beautiful Luxembourg logo" style={{ height: '28px', width: '28px', objectFit: 'contain' }} />
            <span>Beautiful Luxembourg</span>
          </div>

          {/* Nav links */}
          <nav className="site-footer-links" aria-label="Footer navigation">
            <Link to="/">Home</Link>
            <Link to="/quiz">Quiz</Link>
            <Link to="/geo">Géo</Link>
            <Link to="/info">Info Hub</Link>
          </nav>

          {/* Made with */}
          <div className="site-footer-made">{t('footer.madeWith')}</div>
        </div>

        <div className="site-footer-divider" />

        <p className="site-footer-disclaimer">{t('footer.disclaimer')}</p>
      </div>
    </footer>
  )
}
