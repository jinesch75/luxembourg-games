/**
 * AdminPage — password-protected admin area
 * Route: /admin
 *
 * Tabs:
 *   📊 Statistics  — visitor analytics dashboard
 *   🎯 Quiz        — edit quiz questions
 *   🗺️  Geo         — edit geo locations
 */

import { useState } from 'react'
import AdminStats     from './AdminStats'
import AdminQuestions from './AdminQuestions'
import AdminLocations from './AdminLocations'
import AdminInfo      from './AdminInfo'

const ADMIN_PASSWORD = 'biergerpakt'

const TABS = [
  { id: 'stats',     icon: '📊', label: 'Statistics' },
  { id: 'questions', icon: '🎯', label: 'Quiz Questions' },
  { id: 'locations', icon: '🗺️', label: 'Geo Locations' },
  { id: 'info',      icon: '📝', label: 'Info Content' },
]

// ── Styles ─────────────────────────────────────────────────────────────────
const S = {
  page: {
    minHeight: '100vh',
    background: '#F8FAFC',
    paddingBottom: 80,
  },
  header: {
    background: 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
    padding: '28px 20px 20px',
    color: 'white',
  },
  headerTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontSize: '1.3rem',
    fontWeight: 800,
    marginBottom: 4,
  },
  headerSub: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '0.82rem',
  },
  tabBar: {
    display: 'flex',
    background: 'white',
    borderBottom: '1px solid #E2E8F0',
    overflowX: 'auto',
    position: 'sticky',
    top: 'var(--nav-height, 56px)',
    zIndex: 40,
  },
  tab: (active) => ({
    flex: '0 0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
    padding: '10px 18px',
    fontSize: '0.72rem',
    fontWeight: active ? 700 : 500,
    color: active ? '#EF3340' : '#64748B',
    borderBottom: active ? '2px solid #EF3340' : '2px solid transparent',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    transition: 'color 0.15s',
    whiteSpace: 'nowrap',
  }),
  tabIcon: { fontSize: '1.2rem' },
  content: { padding: '20px 16px' },
}

// ── Password gate ──────────────────────────────────────────────────────────
function LoginGate({ onAuth }) {
  const [pw, setPw]       = useState('')
  const [error, setError] = useState(false)
  const [show, setShow]   = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (pw === ADMIN_PASSWORD) {
      sessionStorage.setItem('admin-auth', '1')
      onAuth()
    } else {
      setError(true)
      setTimeout(() => setError(false), 2000)
    }
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 120px)',
      padding: 24,
    }}>
      <div style={{
        background: 'white',
        borderRadius: 16,
        padding: '36px 32px',
        maxWidth: 360,
        width: '100%',
        boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>🔐</div>
        <h2 style={{ margin: '0 0 6px', fontSize: '1.3rem' }}>Admin Access</h2>
        <p style={{ color: '#64748B', fontSize: '0.88rem', margin: '0 0 24px' }}>
          Enter the admin password to continue
        </p>

        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ position: 'relative' }}>
            <input
              type={show ? 'text' : 'password'}
              value={pw}
              onChange={e => setPw(e.target.value)}
              placeholder="Password"
              autoFocus
              style={{
                width: '100%',
                padding: '12px 40px 12px 14px',
                borderRadius: 8,
                border: `2px solid ${error ? '#EF4444' : '#E2E8F0'}`,
                fontSize: '1rem',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.15s',
              }}
            />
            <button
              type="button"
              onClick={() => setShow(s => !s)}
              style={{
                position: 'absolute', right: 10, top: '50%',
                transform: 'translateY(-50%)',
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '1.1rem', color: '#94A3B8', padding: 4,
              }}
            >
              {show ? '🙈' : '👁️'}
            </button>
          </div>

          {error && (
            <div style={{ color: '#EF4444', fontSize: '0.85rem', fontWeight: 600 }}>
              Incorrect password. Try again.
            </div>
          )}

          <button
            type="submit"
            style={{
              background: '#EF3340',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              padding: '13px 20px',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Sign in →
          </button>
        </form>
      </div>
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────────────────
export default function AdminPage() {
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem('admin-auth') === '1'
  )
  const [activeTab, setActiveTab] = useState('stats')

  if (!authed) {
    return <LoginGate onAuth={() => setAuthed(true)} />
  }

  const logout = () => {
    sessionStorage.removeItem('admin-auth')
    setAuthed(false)
  }

  return (
    <div style={S.page}>
      {/* Header */}
      <div style={S.header}>
        <div style={S.headerTitle}>
          <span>🇱🇺</span>
          <span>Lëtz Play — Admin</span>
          <button
            onClick={logout}
            style={{
              marginLeft: 'auto',
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'white',
              borderRadius: 6,
              padding: '5px 12px',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Sign out
          </button>
        </div>
        <div style={S.headerSub}>
          Manage game content and view visitor statistics
        </div>
      </div>

      {/* Tab bar */}
      <div style={S.tabBar}>
        {TABS.map(tab => (
          <button
            key={tab.id}
            style={S.tab(activeTab === tab.id)}
            onClick={() => setActiveTab(tab.id)}
          >
            <span style={S.tabIcon}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={S.content}>
        {activeTab === 'stats'     && <AdminStats />}
        {activeTab === 'questions' && <AdminQuestions />}
        {activeTab === 'locations' && <AdminLocations />}
        {activeTab === 'info'      && <AdminInfo />}
      </div>
    </div>
  )
}
