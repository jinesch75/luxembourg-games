import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector'

export default function Navbar() {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  const navLinks = [
    { path: '/',     icon: '🏠', label: t('nav.home') },
    { path: '/quiz', icon: '🎯', label: t('nav.quiz') },
    { path: '/geo',  icon: '🗺️', label: t('nav.geo') },
    { path: '/info', icon: 'ℹ️', label: t('nav.info') }
  ]

  return (
    <>
      {/* Top bar */}
      <header className="navbar-top">
        <div className="navbar-brand">
          <Link to="/">
            <span className="navbar-brand-flag">🇱🇺</span>
            <div>
              <div className="navbar-brand-name">Biergerpakt Games</div>
              <div className="navbar-brand-sub">Discover Luxembourg Through Play</div>
            </div>
          </Link>
        </div>

        {/* Desktop nav links (hidden on mobile) */}
        <nav className="navbar-desktop-links" aria-label="Main navigation">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-desktop-link${pathname === link.path ? ' active' : ''}`}
            >
              <span>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="navbar-right">
          <LanguageSelector />
        </div>
      </header>

      {/* Bottom tab bar (mobile only — hidden on desktop via CSS) */}
      <nav className="navbar-bottom" aria-label="Tab navigation">
        {navLinks.map(link => {
          const active = pathname === link.path
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-bottom-link${active ? ' active' : ''}`}
            >
              <span className="navbar-bottom-icon">{link.icon}</span>
              <span className="navbar-bottom-label">{link.label}</span>
            </Link>
          )
        })}
      </nav>
    </>
  )
}
