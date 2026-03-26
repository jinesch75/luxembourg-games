/**
 * AdminStats — visitor analytics dashboard
 * Fetches from GET /api/stats (requires x-admin-password header).
 */

import { useState, useEffect } from 'react'

const ADMIN_PASSWORD = 'biergerpakt'

// ── Helpers ────────────────────────────────────────────────────────────────
function countryFlag(code) {
  if (!code || code.length !== 2) return '🌍'
  return code.toUpperCase().replace(/[A-Z]/g, ch =>
    String.fromCodePoint(ch.charCodeAt(0) + 127397)
  )
}

function fmt(n) {
  return n?.toLocaleString() ?? 0
}

function relTime(iso) {
  const diff = Date.now() - new Date(iso).getTime()
  const m = Math.floor(diff / 60000)
  const h = Math.floor(m / 60)
  const d = Math.floor(h / 24)
  if (d > 0) return `${d}d ago`
  if (h > 0) return `${h}h ago`
  if (m > 0) return `${m}m ago`
  return 'just now'
}

function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const k = item[key] || 'Unknown'
    acc[k] = (acc[k] || 0) + 1
    return acc
  }, {})
}

function topN(obj, n = 10) {
  return Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
}

function getLast14Days(visits) {
  const counts = {}
  const now = new Date()
  for (let i = 13; i >= 0; i--) {
    const d = new Date(now)
    d.setDate(d.getDate() - i)
    counts[d.toISOString().slice(0, 10)] = 0
  }
  visits.forEach(v => {
    const day = v.timestamp?.slice(0, 10)
    if (day && day in counts) counts[day]++
  })
  return Object.entries(counts)
}

// ── Small reusable pieces ──────────────────────────────────────────────────
function StatCard({ icon, label, value, sub, color = '#EF3340' }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: 12,
      padding: '16px 18px',
      boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
      borderLeft: `4px solid ${color}`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <span style={{ fontSize: '1.3rem' }}>{icon}</span>
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          {label}
        </span>
      </div>
      <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1E293B', lineHeight: 1 }}>
        {fmt(value)}
      </div>
      {sub && <div style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: 4 }}>{sub}</div>}
    </div>
  )
}

function SectionTitle({ children }) {
  return (
    <h3 style={{
      margin: '24px 0 12px',
      fontSize: '0.78rem',
      fontWeight: 700,
      color: '#94A3B8',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    }}>
      {children}
    </h3>
  )
}

function BarRow({ label, count, max, prefix = '' }) {
  const pct = max > 0 ? (count / max) * 100 : 0
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
      <div style={{ width: 120, fontSize: '0.82rem', color: '#475569', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 5 }}>
        <span>{prefix}</span>
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
      </div>
      <div style={{ flex: 1, height: 8, background: '#F1F5F9', borderRadius: 4, overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${pct}%`,
          background: 'linear-gradient(90deg, #EF3340, #FF6B6B)',
          borderRadius: 4,
          transition: 'width 0.5s ease',
        }} />
      </div>
      <div style={{ width: 28, textAlign: 'right', fontSize: '0.82rem', fontWeight: 700, color: '#1E293B' }}>
        {count}
      </div>
    </div>
  )
}

function Sparkline({ data }) {
  if (!data || data.length === 0) return null
  const values = data.map(([, v]) => v)
  const max = Math.max(...values, 1)
  const W = 280, H = 48, n = values.length
  const pts = values.map((v, i) => {
    const x = (i / (n - 1)) * W
    const y = H - (v / max) * (H - 4) - 2
    return `${x},${y}`
  })
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block' }}>
      <polyline
        points={pts.join(' ')}
        fill="none"
        stroke="#EF3340"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {values.map((v, i) => (
        <circle
          key={i}
          cx={(i / (n - 1)) * W}
          cy={H - (v / max) * (H - 4) - 2}
          r={v > 0 ? 3 : 1.5}
          fill={v > 0 ? '#EF3340' : '#CBD5E1'}
        />
      ))}
    </svg>
  )
}

// ── Main component ─────────────────────────────────────────────────────────
export default function AdminStats() {
  const [stats, setStats]   = useState(null)
  const [error, setError]   = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/stats', {
      headers: { 'x-admin-password': ADMIN_PASSWORD }
    })
      .then(r => {
        if (!r.ok) throw new Error(r.status === 401 ? 'Unauthorized' : 'Server error')
        return r.json()
      })
      .then(data => { setStats(data); setLoading(false) })
      .catch(e => { setError(e.message); setLoading(false) })
  }, [])

  if (loading) return (
    <div style={{ textAlign: 'center', padding: 48, color: '#94A3B8' }}>
      Loading statistics…
    </div>
  )

  if (error) return (
    <div style={{
      background: '#FEF2F2', border: '1px solid #FCA5A5',
      borderRadius: 10, padding: 20, color: '#B91C1C', fontSize: '0.9rem',
    }}>
      <strong>Could not load statistics.</strong><br />
      {error === 'Unauthorized'
        ? 'Authentication failed.'
        : 'The analytics API is not available. Make sure the Express backend is running (not just Vite dev server).'}
    </div>
  )

  const { visits = [], gameEvents = [] } = stats
  const uniqueSessions = new Set(visits.map(v => v.sessionId)).size
  const gameStarts     = gameEvents.filter(e => e.event === 'start').length
  const gameCompletes  = gameEvents.filter(e => e.event === 'complete').length

  const byCountry  = groupBy(visits.filter(v => v.country), 'country')
  const byCity     = groupBy(visits.filter(v => v.city), 'city')
  const byLang     = groupBy(visits, 'language')
  const byPlatform = groupBy(visits, 'platform')
  const byGame     = groupBy(gameEvents.filter(e => e.event === 'complete'), 'game')

  const topCountries = topN(byCountry)
  const topCities    = topN(byCity, 8)
  const topLangs     = topN(byLang, 6)
  const topPlatforms = topN(byPlatform)

  const countryMax   = topCountries[0]?.[1] || 1
  const cityMax      = topCities[0]?.[1] || 1
  const langMax      = topLangs[0]?.[1] || 1
  const platformMax  = topPlatforms[0]?.[1] || 1

  const last14 = getLast14Days(visits)
  const recent = [...visits].sort((a, b) =>
    new Date(b.timestamp) - new Date(a.timestamp)
  ).slice(0, 20)

  // Average quiz score
  const quizCompletes = gameEvents.filter(e => e.event === 'complete' && e.game === 'quiz' && e.score != null)
  const avgQuizScore = quizCompletes.length > 0
    ? (quizCompletes.reduce((s, e) => s + (e.score / (e.total || 5)), 0) / quizCompletes.length * 100).toFixed(0)
    : null

  return (
    <div>
      {/* Summary cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
        <StatCard icon="👥" label="Total visitors"    value={visits.length}      sub="page loads"      color="#EF3340" />
        <StatCard icon="🖥️" label="Unique sessions"  value={uniqueSessions}      sub="browser sessions" color="#3B82F6" />
        <StatCard icon="🎮" label="Games started"     value={gameStarts}          sub="game opens"      color="#8B5CF6" />
        <StatCard icon="🏆" label="Games completed"   value={gameCompletes}       sub="games finished"  color="#10B981" />
      </div>

      {avgQuizScore !== null && (
        <div style={{
          marginTop: 12,
          background: 'white', borderRadius: 12, padding: '14px 18px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <span style={{ fontSize: '1.4rem' }}>🎯</span>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase' }}>
              Average quiz score
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1E293B' }}>
              {avgQuizScore}%
            </div>
          </div>
          <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
            <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>from {quizCompletes.length} games</div>
          </div>
        </div>
      )}

      {/* Visits over last 14 days */}
      {visits.length > 0 && (
        <>
          <SectionTitle>Visitors — last 14 days</SectionTitle>
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', boxShadow: '0 1px 4px rgba(0,0,0,0.07)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94A3B8', marginBottom: 8 }}>
              <span>{last14[0]?.[0]?.slice(5)}</span>
              <span>today</span>
            </div>
            <Sparkline data={last14} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94A3B8', marginTop: 6 }}>
              {last14.filter((_, i) => i % 7 === 0 || i === last14.length - 1).map(([d, v]) => (
                <span key={d}>{v}</span>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Countries */}
      {topCountries.length > 0 && (
        <>
          <SectionTitle>Visitors by country</SectionTitle>
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', boxShadow: '0 1px 4px rgba(0,0,0,0.07)' }}>
            {topCountries.map(([country, count]) => {
              const code = visits.find(v => v.country === country)?.countryCode
              return (
                <BarRow
                  key={country}
                  label={country}
                  count={count}
                  max={countryMax}
                  prefix={countryFlag(code)}
                />
              )
            })}
          </div>
        </>
      )}

      {/* Cities */}
      {topCities.length > 0 && (
        <>
          <SectionTitle>Top cities</SectionTitle>
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', boxShadow: '0 1px 4px rgba(0,0,0,0.07)' }}>
            {topCities.map(([city, count]) => (
              <BarRow key={city} label={city} count={count} max={cityMax} prefix="📍" />
            ))}
          </div>
        </>
      )}

      {/* Games breakdown */}
      {gameCompletes > 0 && (
        <>
          <SectionTitle>Games completed</SectionTitle>
          <div style={{ background: 'white', borderRadius: 12, padding: '16px 18px', boxShadow: '0 1px 4px rgba(0,0,0,0.07)' }}>
            {[['quiz','🎯','Quiz'],['geo','🗺️','Géo'],['connect','🔗','Connect']].map(([game, icon, label]) => (
              <BarRow
                key={game}
                label={label}
                count={byGame[game] || 0}
                max={gameCompletes}
                prefix={icon}
              />
            ))}
          </div>
        </>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {/* Languages */}
        {topLangs.length > 0 && (
          <div>
            <SectionTitle>Browser language</SectionTitle>
            <div style={{ background: 'white', borderRadius: 12, padding: '14px 16px', boxShadow: '0 1px 4px rgba(0,0,0,0.07)' }}>
              {topLangs.map(([lang, count]) => (
                <BarRow key={lang} label={lang} count={count} max={langMax} />
              ))}
            </div>
          </div>
        )}

        {/* Platforms */}
        {topPlatforms.length > 0 && (
          <div>
            <SectionTitle>Platform / OS</SectionTitle>
            <div style={{ background: 'white', borderRadius: 12, padding: '14px 16px', boxShadow: '0 1px 4px rgba(0,0,0,0.07)' }}>
              {topPlatforms.map(([plat, count]) => (
                <BarRow key={plat} label={plat} count={count} max={platformMax} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Recent visitors */}
      {recent.length > 0 && (
        <>
          <SectionTitle>Recent visitors</SectionTitle>
          <div style={{
            background: 'white', borderRadius: 12,
            boxShadow: '0 1px 4px rgba(0,0,0,0.07)', overflow: 'hidden',
          }}>
            {recent.map((v, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 16px',
                borderBottom: i < recent.length - 1 ? '1px solid #F1F5F9' : 'none',
              }}>
                <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>
                  {countryFlag(v.countryCode)}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1E293B' }}>
                    {v.city && v.country ? `${v.city}, ${v.country}` : v.country || 'Unknown location'}
                  </div>
                  <div style={{ fontSize: '0.73rem', color: '#94A3B8' }}>
                    {v.language} · {v.platform}
                  </div>
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94A3B8', flexShrink: 0 }}>
                  {relTime(v.timestamp)}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {visits.length === 0 && (
        <div style={{
          textAlign: 'center', padding: '40px 20px',
          color: '#94A3B8', fontSize: '0.9rem',
        }}>
          <div style={{ fontSize: '2rem', marginBottom: 8 }}>📭</div>
          No visitor data yet. Once users visit the app, their sessions will appear here.
        </div>
      )}
    </div>
  )
}
