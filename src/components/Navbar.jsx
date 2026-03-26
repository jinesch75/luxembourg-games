import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector'

export default function Navbar() {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  const navLinks = [
    { path: '/',        icon: '🏠', label: t('nav.home') },
    { path: '/quiz',    icon: '🎯', label: 'Quiz' },
    { path: '/geo',     icon: '🗺️', label: 'Géo' },
    { path: '/connect', icon: '🔗', label: 'Connect' },
    { path: '/info',    icon: 'ℹ️', label: 'Info' }
  ]

  return (
    <>
      {/* Top bar */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--nav-height)',
        background: 'var(--red)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        zIndex: 50,
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
      }}>
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          textDecoration: 'none',
          color: 'white'
        }}>
          <span style={{ fontSize: '1.5rem' }}>🇱🇺</span>
          <span style={{
            fontWeight: 800,
            fontSize: '1.1rem',
            letterSpacing: '-0.02em'
          }}>
            Biergerpakt Games
          </span>
        </Link>
        <LanguageSelector />
      </header>

      {/* Bottom tab bar (mobile) */}
      <nav style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: 68,
        background: 'white',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'stretch',
        zIndex: 50,
        boxShadow: '0 -2px 12px rgba(0,0,0,0.08)'
      }}>
        {navLinks.map(link => {
          const active = pathname === link.path
          return (
            <Link
              key={link.path}
              to={link.path}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                textDecoration: 'none',
                color: active ? 'var(--red)' : 'var(--gray-400)',
                fontSize: '0.625rem',
                fontWeight: active ? 700 : 500,
                letterSpacing: '0.03em',
                transition: 'color 0.15s',
                paddingBottom: 4
              }}
            >
              <span style={{
                fontSize: '1.3rem',
                lineHeight: 1,
                filter: active ? 'none' : 'grayscale(0.4) opacity(0.7)'
              }}>{link.icon}</span>
              <span style={{ textTransform: 'uppercase' }}>{link.label}</span>
            </Link>
          )
        })}
      </nav>
    </>
  )
}
