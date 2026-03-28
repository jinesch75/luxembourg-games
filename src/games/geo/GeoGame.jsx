import { useState, useRef, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { MapContainer, TileLayer, Marker, useMapEvents, Circle, Polyline, useMap } from 'react-leaflet'
import L from 'leaflet'
import { getSessionLocations, calcDistance, distanceToScore, LOCATIONS } from './data/locations'
import { useGameContent } from '../../hooks/useGameContent'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { trackGameEvent } from '../../utils/analytics'

// Fix leaflet default icons
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl:       'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl:     'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
})

const pinIcon = (color) => L.divIcon({
  html: `<div style="width:28px;height:28px;border-radius:50% 50% 50% 0;background:${color};border:3px solid white;transform:rotate(-45deg);box-shadow:0 2px 8px rgba(0,0,0,0.3)"></div>`,
  className: '',
  iconSize: [28, 28],
  iconAnchor: [14, 28]
})

const targetIcon = L.divIcon({
  html: `<div style="width:32px;height:32px;border-radius:50%;background:#059669;border:3px solid white;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.3);font-size:14px;line-height:26px;text-align:center">📍</div>`,
  className: '',
  iconSize: [32, 32],
  iconAnchor: [16, 16]
})

function ClickHandler({ onMapClick }) {
  useMapEvents({ click: (e) => onMapClick([e.latlng.lat, e.latlng.lng]) })
  return null
}

// Resets the map view to Luxembourg center on each new question
function MapResetter({ roundIdx, center, zoom }) {
  const map = useMap()
  useEffect(() => {
    map.setView(center, zoom, { animate: true })
  }, [roundIdx]) // eslint-disable-line
  return null
}

// Fits the map to show both the user pin and the correct answer when result is revealed
function MapFitBounds({ revealed, userPin, targetCoords }) {
  const map = useMap()
  useEffect(() => {
    if (revealed && userPin) {
      const bounds = L.latLngBounds([userPin, targetCoords])
      map.fitBounds(bounds.pad(0.5), { animate: true, maxZoom: 12 })
    }
  }, [revealed]) // eslint-disable-line
  return null
}

// ─── Level system ──────────────────────────────────────────────────────────────
const GEO_LEVELS = [
  { id: 1, name: 'Tourist',     icon: '🗺️', minPoints: 0,     color: '#6B7280', bg: '#F3F4F6' },
  { id: 2, name: 'Wanderer',    icon: '🧭', minPoints: 1000,  color: '#059669', bg: '#D1FAE5' },
  { id: 3, name: 'Navigator',   icon: '📍', minPoints: 3000,  color: '#2563EB', bg: '#DBEAFE' },
  { id: 4, name: 'Explorer',    icon: '🌟', minPoints: 6000,  color: '#7C3AED', bg: '#F3E8FF' },
  { id: 5, name: 'Geographer',  icon: '🏆', minPoints: 10000, color: '#D97706', bg: '#FEF3C7' },
]

function getGeoLevel(totalPoints) {
  let level = GEO_LEVELS[0]
  for (const l of GEO_LEVELS) {
    if (totalPoints >= l.minPoints) level = l
  }
  return level
}

function GeoLevelBadges({ totalPoints }) {
  const currentLevel = getGeoLevel(totalPoints)
  return (
    <div style={{ display: 'flex', gap: 6, justifyContent: 'space-between' }}>
      {GEO_LEVELS.map(level => {
        const isUnlocked = totalPoints >= level.minPoints
        const isCurrent = level.id === currentLevel.id
        return (
          <div
            key={level.id}
            title={`${level.name} (${level.minPoints.toLocaleString()}+ pts)`}
            style={{
              flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: 4, opacity: isUnlocked ? 1 : 0.3,
              transform: isCurrent ? 'scale(1.15)' : 'scale(1)',
              transition: 'transform 0.2s'
            }}
          >
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: isUnlocked ? level.bg : 'var(--gray-100)',
              border: isCurrent ? `2px solid ${level.color}` : '2px solid transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1rem',
              boxShadow: isCurrent ? `0 0 8px ${level.color}40` : 'none'
            }}>
              {isUnlocked ? level.icon : '🔒'}
            </div>
            <div style={{
              fontSize: '0.55rem', fontWeight: isCurrent ? 800 : 500,
              color: isCurrent ? level.color : 'var(--text-muted)',
              textAlign: 'center', lineHeight: 1.2
            }}>
              {level.name}
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function GeoGame() {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language || 'en').split('-')[0]
  // Resolve a multilingual field: object { en, fr, de, lb } or plain string
  const loc_t = (field) => {
    if (!field) return ''
    if (typeof field === 'string') return field
    return field[lang] || field.en || ''
  }

  // Persistent progress
  const [geoProgress, setGeoProgress] = useLocalStorage('letz-geo-progress', {
    totalPoints: 0,
    sessionsPlayed: 0,
  })

  // Random seed per session
  const [sessionSeed] = useState(() => Math.floor(Math.random() * 99999) + 1)

  // Use server-side content override if available
  const allLocations = useGameContent('locations', LOCATIONS)
  const locations    = useMemo(() => getSessionLocations(sessionSeed, allLocations), [sessionSeed, allLocations])

  const [step, setStep]           = useState('intro')
  const [roundIdx, setRoundIdx]   = useState(0)
  const [userPin, setUserPin]     = useState(null)
  const [revealed, setRevealed]   = useState(false)
  const [roundScores, setRoundScores] = useState([])
  const [shake, setShake]         = useState(false)
  const [newLevelUnlocked, setNewLevelUnlocked] = useState(null)
  const [resultCollapsed, setResultCollapsed] = useState(false)
  const mapRef = useRef(null)

  const loc = locations[roundIdx]

  // Luxembourg center + expanded bounds (shows Belgium, France, Germany)
  const LUX_CENTER = [49.75, 6.17]
  const LUX_ZOOM   = 8
  const LUX_BOUNDS = [[48.7, 4.9], [50.8, 7.5]]

  const handleGuess = () => {
    if (!userPin) {
      setShake(true)
      setTimeout(() => setShake(false), 500)
      return
    }
    setRevealed(true)
    setResultCollapsed(false)
  }

  const handleNext = () => {
    const km = calcDistance(userPin[0], userPin[1], loc.coords[0], loc.coords[1])
    const pts = distanceToScore(km)
    const newScores = [...roundScores, { km, pts }]
    setRoundScores(newScores)

    if (roundIdx + 1 >= locations.length) {
      const sessionTotal = newScores.reduce((s, r) => s + r.pts, 0)
      const prevTotal = geoProgress.totalPoints || 0
      const updatedTotal = prevTotal + sessionTotal

      // Check for level up
      const prevLevel = getGeoLevel(prevTotal)
      const newLevel  = getGeoLevel(updatedTotal)
      if (newLevel.id > prevLevel.id) {
        setNewLevelUnlocked(newLevel)
      }

      setGeoProgress(prev => ({
        totalPoints: updatedTotal,
        sessionsPlayed: (prev.sessionsPlayed || 0) + 1,
      }))

      trackGameEvent('geo', 'complete', { score: sessionTotal, rounds: locations.length })
      setStep('done')
    } else {
      setRoundIdx(i => i + 1)
      setUserPin(null)
      setRevealed(false)
      setResultCollapsed(false)
    }
  }

  const handleReplay = () => {
    setStep('intro')
    setRoundIdx(0)
    setUserPin(null)
    setRevealed(false)
    setRoundScores([])
    setNewLevelUnlocked(null)
  }

  if (step === 'intro') {
    return (
      <Intro
        t={t}
        totalPoints={geoProgress.totalPoints || 0}
        onStart={() => { trackGameEvent('geo', 'start'); setStep('game') }}
      />
    )
  }

  if (step === 'done') {
    return (
      <Done
        scores={roundScores}
        locations={locations}
        t={t}
        loc_t={loc_t}
        totalPoints={geoProgress.totalPoints || 0}
        newLevelUnlocked={newLevelUnlocked}
        onReplay={handleReplay}
      />
    )
  }

  const currentKm     = revealed && userPin ? calcDistance(userPin[0], userPin[1], loc.coords[0], loc.coords[1]) : null
  const currentScore  = currentKm !== null ? distanceToScore(currentKm) : null

  if (!loc) return null

  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      position: 'fixed',
      top: 'var(--nav-height)',
      left: 0, right: 0,
      bottom: 68
    }}>

      {/* Clue panel — hidden after guess is confirmed */}
      {!revealed && <div style={{ padding: '12px 16px', background: 'white', borderBottom: '1px solid var(--border)', flexShrink: 0 }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{loc.emoji}</span>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4, gap: 8 }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {t('geo.clue')} {roundIdx + 1}/{locations.length}
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', margin: 0, lineHeight: 1.5, color: 'var(--gray-700)' }}>
              {loc_t(loc.clue)}
            </p>
          </div>
        </div>
      </div>}

      {/* Tap hint — right-aligned, sits just above the map */}
      {!revealed && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '4px 10px', flexShrink: 0, background: 'white' }}>
          <div style={{
            background: 'rgba(0,0,0,0.72)', color: 'white',
            fontSize: '0.75rem', fontWeight: 700,
            padding: '5px 11px', borderRadius: 8,
            letterSpacing: '0.03em',
            boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.15)'
          }}>
            📍 Tap the map to set your pin
          </div>
        </div>
      )}

      {/* Map */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <MapContainer
          center={LUX_CENTER}
          zoom={LUX_ZOOM}
          maxBounds={LUX_BOUNDS}
          maxBoundsViscosity={0.7}
          style={{ height: '100%', width: '100%' }}
          ref={mapRef}
          zoomControl={true}
        >
          <TileLayer
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapResetter roundIdx={roundIdx} center={LUX_CENTER} zoom={LUX_ZOOM} />
          <MapFitBounds revealed={revealed} userPin={userPin} targetCoords={loc.coords} />
          {!revealed && <ClickHandler onMapClick={setUserPin} />}
          {userPin && <Marker position={userPin} icon={pinIcon('#EF3340')} />}
          {revealed && (
            <>
              <Marker position={loc.coords} icon={targetIcon} />
              {userPin && (
                <>
                  <Polyline
                    positions={[userPin, loc.coords]}
                    pathOptions={{ color: '#EF3340', weight: 2, dashArray: '6 6' }}
                  />
                  <Circle
                    center={loc.coords}
                    radius={500}
                    pathOptions={{ color: '#059669', fillColor: '#D1FAE5', fillOpacity: 0.4, weight: 2 }}
                  />
                </>
              )}
            </>
          )}
        </MapContainer>

        {/* Pinch hint overlay */}
        <div style={{
          position: 'absolute', bottom: 10, right: 10, zIndex: 1000,
          background: 'rgba(0,0,0,0.72)', color: 'white',
          fontSize: '0.75rem', fontWeight: 700,
          padding: '6px 12px', borderRadius: 8,
          pointerEvents: 'none', letterSpacing: '0.03em',
          boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
          border: '1px solid rgba(255,255,255,0.15)'
        }}>
          🤏 Pinch to change size
        </div>

      </div>

      {/* Result panel */}
      {revealed && (
        <div className="animate-slide-up" style={{
          background: '#EFF6FF', borderTop: '1px solid var(--border)', flexShrink: 0
        }}>
          {/* Collapse toggle bar */}
          <button
            onClick={() => setResultCollapsed(c => !c)}
            style={{
              width: '100%', padding: '7px 16px',
              background: 'var(--gray-50)', border: 'none',
              borderBottom: resultCollapsed ? 'none' : '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 6, cursor: 'pointer', fontSize: '0.78rem', fontWeight: 600,
              color: 'var(--text-muted)'
            }}
          >
            {resultCollapsed ? '▲ Show results' : '▼ Minimise'}
          </button>

          {/* Full result content */}
          {!resultCollapsed && (
            <div style={{ padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{
                  background: currentScore >= 800 ? '#D1FAE5' : currentScore >= 500 ? '#FEF3C7' : '#FEE2E2',
                  borderRadius: 'var(--radius)', padding: '10px 16px', textAlign: 'center', minWidth: 80
                }}>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>{currentScore}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{t('geo.points')}</div>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>{loc_t(loc.name)}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {t('geo.distance')} {currentKm < 1 ? `${Math.round(currentKm * 1000)}${t('geo.m')}` : `${currentKm.toFixed(1)}${t('geo.km')}`} {t('geo.away')}
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--gray-700)', marginBottom: 12 }}>{loc_t(loc.fact)}</p>
              <div style={{ display: 'flex', gap: 8 }}>
                <a href={loc.link} target="_blank" rel="noreferrer"
                  className="btn btn-outline btn-sm" style={{ flex: 1 }}>
                  {t('geo.learnMore')} ↗
                </a>
                <button onClick={handleNext} className="btn btn-primary" style={{ flex: 2 }}>
                  {roundIdx + 1 >= locations.length ? t('geo.finish') : t('geo.nextRound')} →
                </button>
              </div>
            </div>
          )}

          {/* Compact bar when collapsed */}
          {resultCollapsed && (
            <div style={{ padding: '10px 16px', display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{
                background: currentScore >= 800 ? '#D1FAE5' : currentScore >= 500 ? '#FEF3C7' : '#FEE2E2',
                color: currentScore >= 800 ? '#065F46' : currentScore >= 500 ? '#92400E' : '#991B1B',
                borderRadius: 999, padding: '4px 12px', fontWeight: 800, fontSize: '0.9rem'
              }}>
                {currentScore} pts
              </div>
              <button onClick={handleNext} className="btn btn-primary" style={{ flex: 1 }}>
                {roundIdx + 1 >= locations.length ? t('geo.finish') : t('geo.nextRound')} →
              </button>
            </div>
          )}
        </div>
      )}

      {/* Guess button */}
      {!revealed && (
        <div style={{ padding: '12px 16px', background: 'white', borderTop: '1px solid var(--border)', flexShrink: 0 }}>
          {shake && !userPin && (
            <div style={{ textAlign: 'center', color: 'var(--red)', fontSize: '0.85rem', marginBottom: 8, fontWeight: 600 }}>
              {t('geo.noPin')}
            </div>
          )}
          <button
            onClick={handleGuess}
            disabled={!userPin}
            className={`btn btn-primary btn-full${shake ? ' animate-shake' : ''}`}
          >
            {t('geo.guess')}
          </button>
        </div>
      )}
    </div>
  )
}

// ─── Rules Modal ───────────────────────────────────────────────────────────────
function RulesModal({ t, onClose }) {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(0,0,0,0.55)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20
    }}>
      <div className="animate-slide-up" style={{
        background: 'white', borderRadius: 'var(--radius-xl)',
        padding: '28px 24px', maxWidth: 400, width: '100%',
        boxShadow: '0 20px 60px rgba(0,0,0,0.25)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div style={{ fontSize: '2.2rem', marginBottom: 8 }}>🗺️</div>
          <h2 style={{ margin: '0 0 8px' }}>How to Play</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 24 }}>
          {[['📖', 'Read the location description'], ['📍', 'Tap the map to set your pin'], ['⭐', '1000 pts max']].map(([icon, label], i, arr) => (
            <>
              <div key={label} style={{ flex: 1, background: 'var(--gray-50)', borderRadius: 8, padding: 12, textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem' }}>{icon}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: 4 }}>{label}</div>
              </div>
              {i < arr.length - 1 && (
                <div key={`arrow-${i}`} style={{ color: 'var(--text-muted)', fontSize: '1rem', flexShrink: 0 }}>→</div>
              )}
            </>
          ))}
        </div>
        <button onClick={onClose} className="btn btn-full btn-lg" style={{ background: '#059669', color: 'white' }}>
          Let's Go! →
        </button>
      </div>
    </div>
  )
}

// ─── Intro Screen ──────────────────────────────────────────────────────────────
function Intro({ t, totalPoints, onStart }) {
  const currentLevel = getGeoLevel(totalPoints)
  const nextLevel = GEO_LEVELS.find(l => l.minPoints > totalPoints)
  const [showRules, setShowRules] = useState(false)

  return (
    <div className="container" style={{ paddingTop: 24 }}>
      {showRules && (
        <RulesModal t={t} onClose={() => { setShowRules(false); onStart() }} />
      )}

      {/* Smaller title box */}
      <div style={{
        background: 'linear-gradient(135deg, #065F46 0%, #059669 100%)',
        borderRadius: 'var(--radius-xl)', padding: '16px 20px', marginBottom: 14,
        color: 'white', textAlign: 'center'
      }}>
        <div style={{ fontSize: '2rem', marginBottom: 6 }}>🗺️</div>
        <h2 style={{ color: 'white', margin: '0 0 4px', fontSize: '1.3rem' }}>{t('geo.title')}</h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0, fontSize: '0.85rem' }}>{t('geo.subtitle')}</p>
      </div>

      {/* Start button — right under the title */}
      <button
        onClick={() => setShowRules(true)}
        className="btn btn-full btn-lg"
        style={{ background: '#059669', color: 'white', marginBottom: 16 }}
      >
        {t('quiz.startBtn')} →
      </button>

      {/* Level display */}
      <div className="card" style={{ marginBottom: 16, padding: '18px 20px' }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
          Your Explorer Level
        </div>
        <GeoLevelBadges totalPoints={totalPoints} />
        <div style={{
          marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {currentLevel.icon} {currentLevel.name}
          </div>
          <div style={{ fontWeight: 800, color: '#059669', fontSize: '1rem' }}>
            {(totalPoints || 0).toLocaleString()} pts
          </div>
        </div>
        {nextLevel && (
          <div style={{ marginTop: 8, fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            {(nextLevel.minPoints - totalPoints).toLocaleString()} pts to unlock {nextLevel.icon} {nextLevel.name}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Done Screen ───────────────────────────────────────────────────────────────
function Done({ scores, locations, t, loc_t, totalPoints, newLevelUnlocked, onReplay }) {
  const sessionTotal = scores.reduce((s, r) => s + r.pts, 0)
  const maxTotal = scores.length * 1000
  const currentLevel = getGeoLevel(totalPoints)
  const nextLevel = GEO_LEVELS.find(l => l.minPoints > totalPoints)

  return (
    <div className="container" style={{ paddingTop: 24 }}>
      {/* Level up celebration */}
      {newLevelUnlocked && (
        <div className="animate-slide-up" style={{
          background: `linear-gradient(135deg, ${newLevelUnlocked.color}CC 0%, ${newLevelUnlocked.color} 100%)`,
          borderRadius: 'var(--radius-xl)', padding: '20px 24px', marginBottom: 20,
          color: 'white', textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: 8 }}>{newLevelUnlocked.icon}</div>
          <div style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: 4 }}>
            Level Up! {newLevelUnlocked.name} unlocked!
          </div>
          <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>
            You've reached Level {newLevelUnlocked.id}
          </div>
        </div>
      )}

      <div style={{
        background: 'linear-gradient(135deg, #065F46 0%, #059669 100%)',
        borderRadius: 'var(--radius-xl)', padding: '28px 24px', marginBottom: 24,
        color: 'white', textAlign: 'center'
      }}>
        <div style={{ fontSize: '3.5rem', marginBottom: 8 }}>🗺️</div>
        <div style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}>{sessionTotal.toLocaleString()}</div>
        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>/ {maxTotal.toLocaleString()} {t('geo.points')}</div>
        <div style={{ marginTop: 8, color: 'rgba(255,255,255,0.85)' }}>{t('geo.results')}</div>
      </div>

      {/* Level progress */}
      <div className="card" style={{ marginBottom: 16, padding: '18px 20px' }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
          Your Explorer Level
        </div>
        <GeoLevelBadges totalPoints={totalPoints} />
        <div style={{
          marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            +{sessionTotal.toLocaleString()} pts this session
          </div>
          <div style={{ fontWeight: 800, color: '#059669', fontSize: '1rem' }}>
            {totalPoints.toLocaleString()} total
          </div>
        </div>
        {nextLevel && (
          <div style={{ marginTop: 8, fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            {(nextLevel.minPoints - totalPoints).toLocaleString()} pts to {nextLevel.icon} {nextLevel.name}
          </div>
        )}
      </div>

      {/* Round breakdown */}
      <div className="card" style={{ marginBottom: 20 }}>
        {scores.map((s, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '10px 0', borderBottom: i < scores.length - 1 ? '1px solid var(--border)' : 'none'
          }}>
            <span style={{ fontSize: '1.4rem' }}>{locations[i].emoji}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{loc_t(locations[i].name)}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                {s.km < 1 ? `${Math.round(s.km * 1000)}m` : `${s.km.toFixed(1)}km`} {t('geo.away')}
              </div>
            </div>
            <div style={{
              background: s.pts >= 800 ? '#D1FAE5' : s.pts >= 500 ? '#FEF3C7' : '#FEE2E2',
              color: s.pts >= 800 ? '#065F46' : s.pts >= 500 ? '#92400E' : '#991B1B',
              padding: '4px 10px', borderRadius: 999, fontWeight: 700, fontSize: '0.85rem'
            }}>
              {s.pts}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {nextLevel ? (
          <button onClick={onReplay} className="btn btn-full btn-lg" style={{ background: '#059669', color: 'white', whiteSpace: 'normal', lineHeight: 1.3, padding: '12px 16px' }}>
            <div>🚀 Next Level</div>
            <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>{nextLevel.icon} {nextLevel.name} — {(nextLevel.minPoints - totalPoints).toLocaleString()} pts away</div>
          </button>
        ) : (
          <button onClick={onReplay} className="btn btn-full btn-lg" style={{ background: '#059669', color: 'white' }}>
            🔄 {t('geo.playAgain')}
          </button>
        )}
      </div>
    </div>
  )
}
