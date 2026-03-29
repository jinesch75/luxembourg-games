import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector'

export default function Navbar() {
  const { t } = useTranslation()
  return (
    <>
      {/* Top bar */}
      <header className="navbar-top">
        <div className="navbar-brand">
          <Link to="/">
            <img src="/bl-logo-1.png" alt="Beautiful Luxembourg logo" style={{ height: '40px', width: '40px', objectFit: 'contain' }} />
            <div>
              <div className="navbar-brand-name">Beautiful Luxembourg</div>
              <div className="navbar-brand-sub">{t('nav.discoverSub')}</div>
            </div>
          </Link>
        </div>

        <div className="navbar-right">
          <LanguageSelector />
        </div>
      </header>
    </>
  )
}
