import { useState, useRef, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { MapContainer, TileLayer, Marker, useMapEvents, Circle, Polyline, useMap } from 'react-leaflet'
import L from 'leaflet'
import { getSubLevelLocations, calcDistance, distanceToScore, LOCATIONS, LEVEL_ORDER } from './data/locations'
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
  html: `<div style="width:18px;height:18px;border-radius:50%;background:${color};border:2.5px solid white;box-shadow:0 2px 10px rgba(0,0,0,0.35)"></div>`,
  className: '',
  iconSize: [18, 18],
  iconAnchor: [9, 9]
})

const targetIcon = L.divIcon({
  html: `<div style="width:20px;height:20px;border-radius:50%;background:#1E293B;border:2.5px solid white;box-shadow:0 2px 10px rgba(0,0,0,0.4)"></div>`,
  className: '',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
})

function ClickHandler({ onMapClick }) {
  useMapEvents({ click: (e) => onMapClick([e.latlng.lat, e.latlng.lng]) })
  return null
}

function MapResetter({ roundIdx, center, zoom }) {
  const map = useMap()
  useEffect(() => {
    map.stop()
    map.setView(center, zoom, { animate: true })
  }, [roundIdx]) // eslint-disable-line
  return null
}

function MapFitBounds({ revealed, userPin, targetCoords }) {
  const map = useMap()
  useEffect(() => {
    if (revealed && userPin) {
      // Wait for the result panel to render and the map to resize,
      // then recalculate size before fitting both pins into view.
      const timer = setTimeout(() => {
        map.invalidateSize()
        const bounds = L.latLngBounds([userPin, targetCoords])
        map.fitBounds(bounds.pad(0.55), { animate: true, maxZoom: 12 })
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [revealed]) // eslint-disable-line
  return null
}

// ─── Level system ──────────────────────────────────────────────────────────────
const GEO_LEVELS = [
  { id: 'tourist',    name: 'Tourist',    icon: '🗺️', color: '#6B7280', bg: '#F3F4F6', subLevels: 5 },
  { id: 'wanderer',   name: 'Wanderer',   icon: '🧭', color: '#059669', bg: '#D1FAE5', subLevels: 5 },
  { id: 'navigator',  name: 'Navigator',  icon: '📍', color: '#2563EB', bg: '#DBEAFE', subLevels: 5 },
  { id: 'explorer',   name: 'Explorer',   icon: '🌟', color: '#7C3AED', bg: '#F3E8FF', subLevels: 5 },
  { id: 'geographer', name: 'Geographer', icon: '🏆', color: '#D97706', bg: '#FEF3C7', subLevels: 5 },
]

// Returns { levelIdx, subLevel } for the current progress
function parseProgress(progress) {
  const { completedSubLevels } = progress
  for (let li = 0; li < GEO_LEVELS.length; li++) {
    const lvl = GEO_LEVELS[li]
    const done = completedSubLevels[lvl.id] || 0
    if (done < lvl.subLevels) return { levelIdx: li, subLevel: done + 1 }
  }
  return { levelIdx: GEO_LEVELS.length - 1, subLevel: 5, finished: true }
}

function totalSubLevelsDone(progress) {
  return GEO_LEVELS.reduce((acc, lvl) => acc + (progress.completedSubLevels[lvl.id] || 0), 0)
}

// ─── Level Map Badge ───────────────────────────────────────────────────────────
function LevelMapBadges({ progress }) {
  const { t } = useTranslation()
  const { levelIdx: curLvlIdx, subLevel: curSub } = parseProgress(progress)
  return (
    <div style={{ display: 'flex', gap: 6, justifyContent: 'space-between' }}>
      {GEO_LEVELS.map((level, li) => {
        const done = progress.completedSubLevels[level.id] || 0
        const isCurrentLevel = li === curLvlIdx
        const isFullyDone = done >= level.subLevels
        const isLocked = li > curLvlIdx
        return (
          <div key={level.id} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            opacity: isLocked ? 0.3 : 1,
            transform: isCurrentLevel ? 'scale(1.12)' : 'scale(1)',
            transition: 'transform 0.2s'
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: isFullyDone ? level.color : isCurrentLevel ? level.bg : 'var(--gray-100)',
              border: isCurrentLevel ? `2px solid ${level.color}` : '2px solid transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
              boxShadow: isCurrentLevel ? `0 0 8px ${level.color}40` : 'none'
            }}>
              {isLocked ? '🔒' : level.icon}
            </div>
            {/* Sub-level pip dots */}
            <div style={{ display: 'flex', gap: 2 }}>
              {Array.from({ length: level.subLevels }).map((_, si) => (
                <div key={si} style={{
                  width: 5, height: 5, borderRadius: '50%',
                  background: si < done ? level.color : (isCurrentLevel && si === done ? level.color + '80' : 'var(--gray-200)')
                }} />
              ))}
            </div>
            <div style={{
              fontSize: '0.5rem', fontWeight: isCurrentLevel ? 800 : 500,
              color: isCurrentLevel ? level.color : 'var(--text-muted)',
              textAlign: 'center', lineHeight: 1.2
            }}>
              {t(`geo.levelNames.${level.id}`)}
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
  const loc_t = (field) => {
    if (!field) return ''
    if (typeof field === 'string') return field
    return field[lang] || field.en || ''
  }

  // Persistent progress – now sub-level based
  const [geoProgress, setGeoProgress] = useLocalStorage('letz-geo-progress-v2', {
    completedSubLevels: { tourist: 0, wanderer: 0, navigator: 0, explorer: 0, geographer: 0 },
    totalPoints: 0,
  })

  const allLocations = useGameContent('locations', LOCATIONS)

  const [step, setStep]           = useState('intro')
  const [roundIdx, setRoundIdx]   = useState(0)
  const [userPin, setUserPin]     = useState(null)
  const [revealed, setRevealed]   = useState(false)
  const [roundScores, setRoundScores] = useState([])
  const [shake, setShake]         = useState(false)
  const [levelUpInfo, setLevelUpInfo] = useState(null)
  const [resultCollapsed, setResultCollapsed] = useState(false)
  const mapRef = useRef(null)

  // Derive current level/subLevel from progress
  const { levelIdx: curLevelIdx, subLevel: curSubLevel } = parseProgress(geoProgress)
  const curLevel = GEO_LEVELS[curLevelIdx]

  // Get the 5 questions for this sub-level
  const locations = useMemo(
    () => getSubLevelLocations(curLevel.id, curSubLevel, allLocations),
    [curLevel.id, curSubLevel, allLocations]
  )

  const loc = locations[roundIdx]

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
      // Sub-level complete!
      const sessionTotal = newScores.reduce((s, r) => s + r.pts, 0)
      const prevLevelIdx = curLevelIdx
      const newCompleted = {
        ...geoProgress.completedSubLevels,
        [curLevel.id]: (geoProgress.completedSubLevels[curLevel.id] || 0) + 1
      }
      const newTotal = (geoProgress.totalPoints || 0) + sessionTotal

      // Check for major level up
      const newProgress = { completedSubLevels: newCompleted, totalPoints: newTotal }
      const { levelIdx: newLevelIdx } = parseProgress(newProgress)
      if (newLevelIdx > prevLevelIdx) {
        setLevelUpInfo(GEO_LEVELS[newLevelIdx])
      }

      setGeoProgress({ completedSubLevels: newCompleted, totalPoints: newTotal })
      trackGameEvent('geo', 'complete', { score: sessionTotal, level: curLevel.id, subLevel: curSubLevel })
      setStep('done')
    } else {
      setRoundIdx(i => i + 1)
      setUserPin(null)
      setRevealed(false)
      setResultCollapsed(false)
    }
  }

  const handleReplay = () => {
    setStep('game')
    setRoundIdx(0)
    setUserPin(null)
    setRevealed(false)
    setRoundScores([])
    setLevelUpInfo(null)
  }

  if (step === 'intro') {
    return <Intro t={t} geoProgress={geoProgress} curLevel={curLevel} curSubLevel={curSubLevel}
      onStart={() => { trackGameEvent('geo', 'start'); setStep('game') }} />
  }

  if (step === 'done') {
    return <Done scores={roundScores} locations={locations} t={t} loc_t={loc_t}
      geoProgress={geoProgress} curLevel={curLevel} curSubLevel={curSubLevel}
      levelUpInfo={levelUpInfo} onReplay={handleReplay} />
  }

  const currentKm    = revealed && userPin ? calcDistance(userPin[0], userPin[1], loc.coords[0], loc.coords[1]) : null
  const currentScore = currentKm !== null ? distanceToScore(currentKm) : null

  if (!loc) return null

  return (
    <div style={{ display: 'flex', flexDirection: 'column', position: 'fixed', top: 'var(--nav-height)', left: 0, right: 0, bottom: 68, padding: '4px 8px 0 8px', gap: '4px' }}>

      {/* Clue panel */}
      {!revealed && (
        <div style={{
          background: '#FFFFFF',
          borderRadius: 14,
          padding: '7px 14px 8px',
          flexShrink: 0,
          boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 4 }}>
            <span style={{ fontSize: '1.05rem', lineHeight: 1 }}>{loc.emoji}</span>
            <span style={{
              fontSize: '0.6rem', fontWeight: 700, color: '#1e3a8a',
              textTransform: 'uppercase', letterSpacing: '0.08em',
            }}>
              {t('geo.clue')} {roundIdx + 1}/{locations.length}
            </span>
          </div>
          <p style={{ fontSize: '0.855rem', color: 'var(--gray-700)', lineHeight: 1.45, margin: 0 }}>
            {loc_t(loc.clue)}
          </p>
        </div>
      )}

      {/* Map */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden', borderRadius: 14, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
        <MapContainer center={LUX_CENTER} zoom={LUX_ZOOM} maxBounds={LUX_BOUNDS} maxBoundsViscosity={0.7}
          style={{ height: '100%', width: '100%' }} ref={mapRef} zoomControl={true}>
          <TileLayer attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapResetter roundIdx={roundIdx} center={LUX_CENTER} zoom={LUX_ZOOM} />
          <MapFitBounds revealed={revealed} userPin={userPin} targetCoords={loc.coords} />
          {!revealed && <ClickHandler onMapClick={setUserPin} />}
          {userPin && <Marker position={userPin} icon={pinIcon('#EF3340')} />}
          {revealed && (
            <>
              <Marker position={loc.coords} icon={targetIcon} />
              {userPin && (
                <>
                  <Polyline positions={[userPin, loc.coords]} pathOptions={{ color: '#EF3340', weight: 2, dashArray: '6 6' }} />
                  <Circle center={loc.coords} radius={500} pathOptions={{ color: '#059669', fillColor: '#D1FAE5', fillOpacity: 0.4, weight: 2 }} />
                </>
              )}
            </>
          )}
        </MapContainer>
        {!revealed && (
          <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 1000, background: 'rgba(255,255,255,0.92)', color: 'var(--red)', fontSize: '0.65rem', fontWeight: 700, padding: '5px 10px', borderRadius: 6, pointerEvents: 'none', letterSpacing: '0.03em', boxShadow: '0 1px 4px rgba(0,0,0,0.12)', border: '1px solid rgba(239,51,64,0.2)' }}>
            {t('geo.tapMapPin')}
          </div>
        )}
        <div style={{ position: 'absolute', bottom: 12, right: 12, zIndex: 1000, background: 'rgba(255,255,255,0.92)', color: 'var(--red)', fontSize: '0.65rem', fontWeight: 700, padding: '5px 10px', borderRadius: 6, pointerEvents: 'none', letterSpacing: '0.04em', boxShadow: '0 1px 4px rgba(0,0,0,0.12)', border: '1px solid rgba(239,51,64,0.2)' }}>
          {t('geo.pinchToZoom')}
        </div>
      </div>

      {/* Result panel */}
      {revealed && (
        <div className="animate-slide-up" style={{
          background: '#FFFFFF',
          borderRadius: 14,
          overflow: 'hidden',
          flexShrink: 0,
          boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
        }}>
          <button onClick={() => setResultCollapsed(c => !c)} style={{
            width: '100%', padding: '7px 16px',
            background: 'var(--gray-50)', border: 'none',
            borderBottom: resultCollapsed ? 'none' : '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            cursor: 'pointer', fontSize: '0.65rem', fontWeight: 700,
            color: 'var(--gray-400)', letterSpacing: '0.07em', textTransform: 'uppercase',
          }}>
            {resultCollapsed ? `▲ ${t('geo.showResults')}` : `▼ ${t('geo.minimise')}`}
          </button>
          {!resultCollapsed && (
            <div style={{ padding: '16px 16px 20px' }}>
              {/* Score + location row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14, paddingBottom: 14, borderBottom: '1px solid var(--border)' }}>
                <div style={{ textAlign: 'center', minWidth: 60, flexShrink: 0 }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--gray-900)', lineHeight: 1 }}>{currentScore}</div>
                  <div style={{ fontSize: '0.58rem', fontWeight: 700, color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 3 }}>{t('geo.points')}</div>
                </div>
                <div style={{ width: 1, height: 38, background: 'var(--border)', flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--gray-900)', lineHeight: 1.3 }}>{loc_t(loc.name)}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 3 }}>
                    {t('geo.distance')} {currentKm < 1 ? `${Math.round(currentKm * 1000)}${t('geo.m')}` : `${currentKm.toFixed(1)}${t('geo.km')}`} {t('geo.away')}
                  </div>
                </div>
              </div>
              {/* Fact */}
              <p style={{ fontSize: '0.82rem', color: 'var(--gray-600)', lineHeight: 1.65, margin: '0 0 14px', borderLeft: '2px solid var(--gray-200)', paddingLeft: 12 }}>{loc_t(loc.fact)}</p>
              {/* Next button */}
              <button onClick={handleNext} style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '13px 20px', borderRadius: 10,
                background: 'var(--gray-900)', color: '#FFFFFF',
                border: 'none', cursor: 'pointer', fontFamily: 'var(--font)',
                fontSize: '0.92rem', fontWeight: 700, letterSpacing: '0.01em',
                transition: 'opacity 0.15s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
              >
                {roundIdx + 1 >= locations.length ? t('geo.finish') : t('geo.nextRound')} →
              </button>
            </div>
          )}
          {resultCollapsed && (
            <div style={{ padding: '10px 16px', display: 'flex', gap: 10, alignItems: 'center' }}>
              <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--gray-700)', flexShrink: 0 }}>
                {currentScore} <span style={{ fontWeight: 500, fontSize: '0.7rem', color: 'var(--gray-400)' }}>pts</span>
              </span>
              <button onClick={handleNext} style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                padding: '10px 16px', borderRadius: 8,
                background: 'var(--gray-900)', color: '#FFFFFF',
                border: 'none', cursor: 'pointer', fontFamily: 'var(--font)',
                fontSize: '0.85rem', fontWeight: 700,
              }}>
                {roundIdx + 1 >= locations.length ? t('geo.finish') : t('geo.nextRound')} →
              </button>
            </div>
          )}
        </div>
      )}

      {/* Guess button */}
      {!revealed && (
        <div style={{ padding: '0 0 8px 0', background: 'transparent', flexShrink: 0 }}>
          {shake && !userPin && (
            <div style={{ textAlign: 'center', color: 'var(--red)', fontSize: '0.78rem', marginBottom: 8, fontWeight: 600 }}>
              {t('geo.noPin')}
            </div>
          )}
          <button
            onClick={handleGuess}
            disabled={!userPin}
            className={shake ? 'animate-shake' : ''}
            style={{
              width: '100%', padding: '10px 20px', borderRadius: 10,
              background: userPin ? 'var(--gray-900)' : 'var(--gray-200)',
              color: userPin ? '#FFFFFF' : 'var(--gray-400)',
              border: userPin ? '1px solid rgba(255,255,255,0.25)' : '1px solid transparent',
              cursor: userPin ? 'pointer' : 'default',
              fontFamily: 'var(--font)', fontSize: '0.92rem', fontWeight: 700,
              letterSpacing: '0.01em',
              transition: 'background 0.15s ease, opacity 0.15s ease',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}
            onMouseEnter={e => { if (userPin) e.currentTarget.style.opacity = '0.85' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
          >
            {t('geo.guess')}
            <span style={{ fontSize: '1rem', opacity: userPin ? 0.6 : 0.3 }}>→</span>
          </button>
        </div>
      )}
    </div>
  )
}

// ─── Rules Modal ───────────────────────────────────────────────────────────────
function RulesModal({ t, onClose }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div className="animate-slide-up" style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '28px 24px', maxWidth: 400, width: '100%', boxShadow: '0 20px 60px rgba(0,0,0,0.25)' }}>
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div style={{ fontSize: '2.2rem', marginBottom: 8 }}>🗺️</div>
          <h2 style={{ margin: '0 0 8px' }}>{t('geo.howToPlay')}</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 24 }}>
          {[[`📖`, t('geo.readClue')], [`📍`, t('geo.tapMapStep')], [`⭐`, t('geo.maxPtsPerQ')]].map(([icon, label], i, arr) => (
            <>
              <div key={label} style={{ flex: 1, background: 'var(--gray-50)', borderRadius: 8, padding: 12, textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem' }}>{icon}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: 4 }}>{label}</div>
              </div>
              {i < arr.length - 1 && <div key={`arrow-${i}`} style={{ color: 'var(--text-muted)', fontSize: '1rem', flexShrink: 0 }}>→</div>}
            </>
          ))}
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center', margin: '0 0 16px' }}>
          {t('geo.completeSubLevelHint')}
        </p>
        <button onClick={onClose} className="btn btn-full btn-lg" style={{ background: '#059669', color: 'white' }}>
          {t('geo.letsGo')} →
        </button>
      </div>
    </div>
  )
}

// ─── Intro Screen ──────────────────────────────────────────────────────────────
function Intro({ t, geoProgress, curLevel, curSubLevel, onStart }) {
  const [showRules, setShowRules] = useState(false)
  const { levelIdx } = parseProgress(geoProgress)
  const isFinished = levelIdx >= GEO_LEVELS.length - 1 && (geoProgress.completedSubLevels['geographer'] || 0) >= 5
  const doneSubs = totalSubLevelsDone(geoProgress)
  const totalSubs = GEO_LEVELS.reduce((acc, l) => acc + l.subLevels, 0)

  return (
    <div>
      {showRules && <RulesModal t={t} onClose={() => { setShowRules(false); onStart() }} />}

      {/* Title header */}
      <div style={{ color: 'white', textAlign: 'center', padding: '18px 20px 8px' }}>
        <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800 }}>{t('geo.title')}</h2>
      </div>

      {/* Content */}
      <div className="container" style={{ paddingTop: 28 }}>

        {/* Progress card — on top */}
        <div className="card" style={{ marginBottom: 16, padding: '18px 20px' }}>
          <div className="section-title" style={{ marginBottom: 12 }}>{t('geo.yourProgress')}</div>
          <div className="game-progress-row">
            <span className="game-progress-label">{doneSubs} / {totalSubs}</span>
            <span className="game-progress-pct">{Math.round((doneSubs / totalSubs) * 100)}%</span>
          </div>
          <div className="progress-bar" style={{ marginBottom: 14 }}>
            <div className="progress-fill" style={{ width: `${(doneSubs / totalSubs) * 100}%` }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <span style={{ fontWeight: 800, color: '#059669', fontSize: '1rem' }}>
              {(geoProgress.totalPoints || 0).toLocaleString()} pts
            </span>
          </div>
        </div>

        {/* Start button — below */}
        <button
          onClick={() => {
            const isVeryFirstLevel = totalSubLevelsDone(geoProgress) === 0
            if (isVeryFirstLevel) setShowRules(true)
            else onStart()
          }}
          style={{
            width: '100%',
            display: 'flex', alignItems: 'center', gap: 16,
            padding: '20px 24px',
            borderRadius: 16,
            background: '#111827',
            color: '#FFFFFF',
            border: '1px solid rgba(255,255,255,0.25)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
            cursor: 'pointer',
            fontFamily: 'var(--font)',
            transition: 'transform 0.15s ease, box-shadow 0.15s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.28)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.18)'
          }}
        >
          <span style={{
            width: 48, height: 48, borderRadius: 12, flexShrink: 0,
            background: 'rgba(255,255,255,0.10)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.6rem',
          }}>{isFinished ? '🔄' : '🎯'}</span>
          <span style={{ flex: 1, textAlign: 'left' }}>
            <strong style={{ display: 'block', fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
              {isFinished
                ? t('geo.allDone')
                : t('geo.startGame')}
            </strong>
            {!isFinished && (
              <small style={{ display: 'block', fontSize: '0.72rem', opacity: 0.65, marginTop: 3, fontWeight: 400 }}>
                {curLevel.icon} {t(`geo.levelNames.${curLevel.id}`)} · {t('geo.subLevel', { defaultValue: 'Sub-level' })} {curSubLevel}/5
              </small>
            )}
          </span>
          <span style={{ opacity: 0.45, fontSize: '1.1rem' }}>→</span>
        </button>

      </div>
    </div>
  )
}

// ─── Done Screen ───────────────────────────────────────────────────────────────
function Done({ scores, locations, t, loc_t, geoProgress, curLevel, curSubLevel, levelUpInfo, onReplay }) {
  const sessionTotal = scores.reduce((s, r) => s + r.pts, 0)
  const maxTotal = scores.length * 1000
  const { levelIdx: nextLevelIdx, subLevel: nextSub } = parseProgress(geoProgress)
  const nextLevel = GEO_LEVELS[nextLevelIdx]
  const isFinished = (geoProgress.completedSubLevels['geographer'] || 0) >= 5

  return (
    <div className="container" style={{ paddingTop: 28 }}>
      {/* Level progress */}
      <div className="card" style={{ marginBottom: 16, padding: '18px 20px' }}>
        <div className="section-title" style={{ marginBottom: 12 }}>{t('geo.yourProgress')}</div>
        <LevelMapBadges progress={geoProgress} />
        <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t('geo.ptsThisRound', { pts: sessionTotal.toLocaleString() })}</span>
          <span style={{ fontWeight: 800, color: '#059669', fontSize: '1rem' }}>{t('geo.totalPts', { pts: (geoProgress.totalPoints || 0).toLocaleString() })}</span>
        </div>
      </div>

      {isFinished ? (
        <button
          onClick={onReplay}
          style={{
            width: '100%',
            display: 'flex', alignItems: 'center', gap: 16,
            padding: '20px 24px',
            borderRadius: 16,
            background: '#111827',
            color: '#FFFFFF',
            border: '1px solid rgba(255,255,255,0.25)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
            cursor: 'pointer',
            fontFamily: 'var(--font)',
            transition: 'transform 0.15s ease, box-shadow 0.15s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.28)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.18)'
          }}
        >
          <span style={{
            width: 48, height: 48, borderRadius: 12, flexShrink: 0,
            background: 'rgba(255,255,255,0.10)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.6rem',
          }}>🏆</span>
          <span style={{ flex: 1, textAlign: 'left' }}>
            <strong style={{ display: 'block', fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
              {t('geo.allDone')}
            </strong>
            <small style={{ display: 'block', fontSize: '0.72rem', opacity: 0.75, marginTop: 3, fontWeight: 400 }}>
              {t('geo.allLevelsCompleted', { defaultValue: 'All levels completed!' })}
            </small>
          </span>
          <span style={{ opacity: 0.55, fontSize: '1.1rem' }}>→</span>
        </button>
      ) : (
        <button
          onClick={onReplay}
          style={{
            width: '100%',
            display: 'flex', alignItems: 'center', gap: 16,
            padding: '20px 24px',
            borderRadius: 16,
            background: '#111827',
            color: '#FFFFFF',
            border: '1px solid rgba(255,255,255,0.25)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
            cursor: 'pointer',
            fontFamily: 'var(--font)',
            transition: 'transform 0.15s ease, box-shadow 0.15s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.28)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.18)'
          }}
        >
          <span style={{
            width: 48, height: 48, borderRadius: 12, flexShrink: 0,
            background: 'rgba(255,255,255,0.10)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.6rem',
          }}>▶</span>
          <span style={{ flex: 1, textAlign: 'left' }}>
            <strong style={{ display: 'block', fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
              {t('geo.continueNextLevel')}
            </strong>
            <small style={{ display: 'block', fontSize: '0.72rem', opacity: 0.75, marginTop: 3, fontWeight: 400 }}>
              {nextLevel.icon} {t(`geo.levelNames.${nextLevel.id}`)} · {t('geo.subLevel', { defaultValue: 'Sub-level' })} {nextSub}/5
            </small>
          </span>
          <span style={{ opacity: 0.55, fontSize: '1.1rem' }}>→</span>
        </button>
      )}
    </div>
  )
}
