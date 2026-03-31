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
import AdminFamous    from './AdminFamous'
import { useFeatureFlags } from '../../contexts/FeatureFlagsContext'

const ADMIN_PASSWORD = 'biergerpakt'

const TABS = [
  { id: 'stats',     icon: '📊', label: 'Statistics' },
  { id: 'questions', icon: '🎯', label: 'Quiz Questions' },
  { id: 'locations', icon: '🗺️', label: 'Geo Locations' },
  { id: 'info',      icon: '📝', label: 'Info Content' },
  { id: 'famous',    icon: '🌟', label: 'Famous People' },
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
    color: active ? '#16A34A' : '#64748B',
    borderBottom: active ? '2px solid #16A34A' : '2px solid transparent',
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
              background: '#16A34A',
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

// ── Info Hub toggle banner ─────────────────────────────────────────────────
function InfoHubToggleBanner() {
  const { infoHubEnabled, toggleInfoHub } = useFeatureFlags()
  const [busy, setBusy] = useState(false)

  const handleToggle = async () => {
    setBusy(true)
    await toggleInfoHub()
    setBusy(false)
  }

  return (
    <div style={{
      background: infoHubEnabled
        ? 'linear-gradient(135deg, #065F46 0%, #047857 100%)'
        : 'linear-gradient(135deg, #7C2D12 0%, #B45309 100%)',
      padding: '14px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap',
      borderBottom: infoHubEnabled ? '3px solid #10B981' : '3px solid #F59E0B',
    }}>
      {/* Pulsing status dot */}
      <span style={{
        display: 'inline-block',
        width: 14,
        height: 14,
        borderRadius: '50%',
        background: infoHubEnabled ? '#10B981' : '#F59E0B',
        boxShadow: infoHubEnabled
          ? '0 0 0 4px rgba(16,185,129,0.3)'
          : '0 0 0 4px rgba(245,158,11,0.3)',
        flexShrink: 0,
        animation: !infoHubEnabled ? 'pulse 2s infinite' : 'none',
      }} />

      <div style={{ flex: 1 }}>
        <div style={{ color: 'white', fontWeight: 800, fontSize: '0.95rem', letterSpacing: '0.02em' }}>
          {infoHubEnabled ? '✅ Info Hub is VISIBLE to users' : '⚠️ Info Hub is HIDDEN from users'}
        </div>
        <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.78rem', marginTop: 2 }}>
          {infoHubEnabled
            ? 'The Info Hub section appears in the navigation and is accessible.'
            : 'The ℹ️ Info Hub tab is not shown in the menu. Click to re-enable it at any time.'}
        </div>
      </div>

      <button
        onClick={handleToggle}
        disabled={busy}
        style={{
          background: infoHubEnabled ? 'rgba(239,68,68,0.9)' : 'rgba(16,185,129,0.9)',
          color: 'white',
          border: '2px solid rgba(255,255,255,0.4)',
          borderRadius: 8,
          padding: '10px 20px',
          fontSize: '0.88rem',
          fontWeight: 800,
          cursor: busy ? 'not-allowed' : 'pointer',
          letterSpacing: '0.03em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          opacity: busy ? 0.7 : 1,
          transition: 'all 0.2s',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        }}
      >
        {busy ? '...' : infoHubEnabled ? '🙈 Hide Info Hub' : '👁 Show Info Hub'}
      </button>

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 4px rgba(245,158,11,0.3); }
          50% { box-shadow: 0 0 0 8px rgba(245,158,11,0.1); }
        }
      `}</style>
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
          <span>Beautiful Luxembourg — Admin</span>
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

      {/* Info Hub visibility toggle — always visible regardless of active tab */}
      <InfoHubToggleBanner />

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
        {activeTab === 'famous'    && <AdminFamous />}
      </div>
    </div>
  )
}
