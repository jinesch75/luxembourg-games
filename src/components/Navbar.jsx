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
            <img src="/bl-logo-1.png" alt="Beautiful Luxembourg logo" style={{ height: '28px', width: '28px', objectFit: 'contain', borderRadius: '6px' }} />
            <div>
              <div className="navbar-brand-name" translate="no">Beautiful<br />Luxembourg</div>
            </div>
          </Link>
        </div>

        <div className="navbar-right">
          <Link to="/" aria-label="Home" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 36, height: 36, borderRadius: 10,
            background: 'rgba(0,0,0,0.04)',
            color: '#64748B',
            textDecoration: 'none', fontSize: '1.1rem',
            transition: 'background 0.18s, color 0.18s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.08)'; e.currentTarget.style.color = '#1E293B' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.04)'; e.currentTarget.style.color = '#64748B' }}
          >
            🏠
          </Link>
          <LanguageSelector />
        </div>
      </header>
    </>
  )
}
