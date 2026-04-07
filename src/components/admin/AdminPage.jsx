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
import { useTranslation } from 'react-i18next'
import AdminStats     from './AdminStats'
import AdminQuestions from './AdminQuestions'
import AdminLocations from './AdminLocations'
import AdminInfo      from './AdminInfo'
import AdminFamous    from './AdminFamous'
import AdminPlaces    from './AdminPlaces'
import AdminErrorReports from './AdminErrorReports'
import { useFeatureFlags } from '../../contexts/FeatureFlagsContext'

const ADMIN_PASSWORD = 'biergerpakt'

const TAB_KEYS = [
  { id: 'stats',     icon: '📊', labelKey: 'adminPage.tabStatistics' },
  { id: 'questions', icon: '🎯', labelKey: 'adminPage.tabQuizQuestions' },
  { id: 'locations', icon: '🗺️', labelKey: 'adminPage.tabGeoLocations' },
  { id: 'info',      icon: '📝', labelKey: 'adminPage.tabInfoContent' },
  { id: 'famous',    icon: '🌟', labelKey: 'adminPage.tabFamousPeople' },
  { id: 'places',    icon: '🏛️', labelKey: 'adminPage.tabFamousPlaces' },
  { id: 'errors',    icon: '⚑', labelKey: 'adminPage.tabErrorReports' },
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
function LoginGate({ onAuth, t }) {
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
        <h2 style={{ margin: '0 0 6px', fontSize: '1.3rem' }}>{t('adminPage.accessTitle')}</h2>
        <p style={{ color: '#64748B', fontSize: '0.88rem', margin: '0 0 24px' }}>
          {t('adminPage.accessSubtitle')}
        </p>

        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ position: 'relative' }}>
            <input
              type={show ? 'text' : 'password'}
              value={pw}
              onChange={e => setPw(e.target.value)}
              placeholder={t('adminPage.password')}
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
              {t('adminPage.incorrectPassword')}
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
            {t('adminPage.signIn')}
          </button>
        </form>
      </div>
    </div>
  )
}

// ── Single toggle row ──────────────────────────────────────────────────────
function ToggleRow({ label, description, enabled, onToggle, busy }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 20px',
      borderBottom: '1px solid rgba(255,255,255,0.12)',
    }}>
      <span style={{
        display: 'inline-block',
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: enabled ? '#10B981' : '#F59E0B',
        boxShadow: enabled
          ? '0 0 0 3px rgba(16,185,129,0.3)'
          : '0 0 0 3px rgba(245,158,11,0.3)',
        flexShrink: 0,
      }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ color: 'white', fontWeight: 700, fontSize: '0.88rem' }}>
          {enabled ? '✅' : '⚠️'} {label}
        </div>
        {description && (
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem', marginTop: 1 }}>
            {description}
          </div>
        )}
      </div>
      <button
        onClick={onToggle}
        disabled={busy}
        style={{
          background: enabled ? 'rgba(239,68,68,0.85)' : 'rgba(16,185,129,0.85)',
          color: 'white',
          border: '1.5px solid rgba(255,255,255,0.35)',
          borderRadius: 6,
          padding: '7px 14px',
          fontSize: '0.78rem',
          fontWeight: 700,
          cursor: busy ? 'not-allowed' : 'pointer',
          textTransform: 'uppercase',
          letterSpacing: '0.03em',
          whiteSpace: 'nowrap',
          opacity: busy ? 0.6 : 1,
          transition: 'all 0.2s',
        }}
      >
        {busy ? '...' : enabled ? '🙈 Hide' : '👁 Show'}
      </button>
    </div>
  )
}

// ── Feature visibility panel ──────────────────────────────────────────────
function FeatureVisibilityPanel({ t }) {
  const flags = useFeatureFlags()
  const [busy, setBusy] = useState(null) // tracks which flag is currently toggling

  const handleToggle = async (flagKey, toggleFn) => {
    setBusy(flagKey)
    if (toggleFn) {
      await toggleFn()
    } else {
      await flags.toggleFlag(flagKey)
    }
    setBusy(null)
  }

  const rows = [
    { key: 'infoHubEnabled',      label: t('adminPage.infoHubToggleLabel'),      desc: t('adminPage.infoHubToggleDesc'),      toggleFn: flags.toggleInfoHub },
    { key: 'famousGameEnabled',   label: t('adminPage.famousGameToggleLabel'),   desc: t('adminPage.famousGameToggleDesc') },
    { key: 'placesGameEnabled',   label: t('adminPage.placesGameToggleLabel'),   desc: t('adminPage.placesGameToggleDesc') },
    { key: 'adminGameEnabled',    label: t('adminPage.adminGameToggleLabel'),    desc: t('adminPage.adminGameToggleDesc') },
    { key: 'economyGameEnabled',  label: t('adminPage.economyGameToggleLabel'),  desc: t('adminPage.economyGameToggleDesc') },
    { key: 'spellingGameEnabled', label: t('adminPage.spellingGameToggleLabel'), desc: t('adminPage.spellingGameToggleDesc') },
  ]

  const enabledCount = rows.filter(r => flags[r.key]).length

  return (
    <div style={{
      background: 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
      borderBottom: '3px solid #475569',
    }}>
      <div style={{
        padding: '12px 20px 6px',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}>
        <span style={{ fontSize: '1.1rem' }}>🎛️</span>
        <span style={{ color: 'white', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.02em' }}>
          {t('adminPage.visibilityPanelTitle')}
        </span>
        <span style={{
          marginLeft: 'auto',
          background: 'rgba(255,255,255,0.15)',
          color: 'rgba(255,255,255,0.7)',
          borderRadius: 12,
          padding: '2px 10px',
          fontSize: '0.72rem',
          fontWeight: 600,
        }}>
          {enabledCount}/{rows.length} {t('adminPage.visibilityActive')}
        </span>
      </div>
      {rows.map(row => (
        <ToggleRow
          key={row.key}
          label={row.label}
          description={row.desc}
          enabled={flags[row.key]}
          busy={busy === row.key}
          onToggle={() => handleToggle(row.key, row.toggleFn)}
        />
      ))}
      <div style={{ height: 6 }} />
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────────────────
export default function AdminPage() {
  const { t } = useTranslation()
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem('admin-auth') === '1'
  )
  const [activeTab, setActiveTab] = useState('stats')

  if (!authed) {
    return <LoginGate onAuth={() => setAuthed(true)} t={t} />
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
          <span>{t('adminPage.headerTitle')}</span>
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
            {t('adminPage.signOut')}
          </button>
        </div>
        <div style={S.headerSub}>
          {t('adminPage.headerSub')}
        </div>
      </div>

      {/* Feature visibility toggles — always visible regardless of active tab */}
      <FeatureVisibilityPanel t={t} />

      {/* Tab bar */}
      <div style={S.tabBar}>
        {TAB_KEYS.map(tab => (
          <button
            key={tab.id}
            style={S.tab(activeTab === tab.id)}
            onClick={() => setActiveTab(tab.id)}
          >
            <span style={S.tabIcon}>{tab.icon}</span>
            {t(tab.labelKey)}
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
        {activeTab === 'places'    && <AdminPlaces />}
        {activeTab === 'errors'    && <AdminErrorReports />}
      </div>
    </div>
  )
}
