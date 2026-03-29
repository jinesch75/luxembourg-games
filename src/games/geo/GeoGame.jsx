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

function MapResetter({ roundIdx, center, zoom }) {
  const map = useMap()
  useEffect(() => { map.setView(center, zoom, { animate: true }) }, [roundIdx]) // eslint-disable-line
  return null
}

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
    <div style={{ display: 'flex', flexDirection: 'column', position: 'fixed', top: 'var(--nav-height)', left: 0, right: 0, bottom: 68 }}>

      {/* Clue panel */}
      {!revealed && (
        <div className="geo-clue-panel">
          <div className="geo-clue-row">
            <span className="geo-clue-emoji">{loc.emoji}</span>
            <div style={{ flex: 1 }}>
              <div className="geo-clue-meta">
                <span className="geo-clue-counter">
                  {t('geo.clue')} {roundIdx + 1}/{locations.length}
                </span>
                <span className="geo-clue-level-badge" style={{ color: curLevel.color, background: curLevel.bg }}>
                  {curLevel.icon} {t(`geo.levelNames.${curLevel.id}`)} {curSubLevel}/5
                </span>
              </div>
              <p className="geo-clue-text">{loc_t(loc.clue)}</p>
            </div>
          </div>
        </div>
      )}

      {/* Tap hint */}
      {!revealed && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '5px 12px 5px', flexShrink: 0, background: 'white', borderBottom: '1px solid #E5E7EB' }}>
          <div style={{ background: '#F9FAFB', color: '#6B7280', fontSize: '0.72rem', fontWeight: 600, padding: '4px 10px', borderRadius: 7, letterSpacing: '0.03em', border: '1px solid #E5E7EB' }}>
            📍 {t('geo.tapMapPin')}
          </div>
        </div>
      )}

      {/* Map */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
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
        <div style={{ position: 'absolute', bottom: 10, right: 10, zIndex: 1000, background: 'rgba(0,0,0,0.72)', color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '6px 12px', borderRadius: 8, pointerEvents: 'none', letterSpacing: '0.03em', boxShadow: '0 2px 8px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.15)' }}>
          🤏 {t('geo.pinchToZoom')}
        </div>
      </div>

      {/* Result panel */}
      {revealed && (
        <div className="animate-slide-up" style={{ background: '#FFFFFF', borderTop: '1px solid #E5E7EB', flexShrink: 0 }}>
          <button onClick={() => setResultCollapsed(c => !c)} style={{ width: '100%', padding: '7px 16px', background: '#F9FAFB', border: 'none', borderBottom: resultCollapsed ? 'none' : '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.03em' }}>
            {resultCollapsed ? `▲ ${t('geo.showResults')}` : `▼ ${t('geo.minimise')}`}
          </button>
          {!resultCollapsed && (
            <div style={{ padding: '16px 16px 20px' }}>
              {/* Score + location row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                <div style={{
                  background: currentScore >= 800 ? '#ECFDF5' : currentScore >= 500 ? '#FFFBEB' : '#FEF2F2',
                  border: `1px solid ${currentScore >= 800 ? '#6EE7B7' : currentScore >= 500 ? '#FCD34D' : '#FCA5A5'}`,
                  borderRadius: 12, padding: '10px 14px', textAlign: 'center', minWidth: 72, flexShrink: 0,
                }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: currentScore >= 800 ? '#065F46' : currentScore >= 500 ? '#92400E' : '#991B1B', lineHeight: 1 }}>{currentScore}</div>
                  <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 3 }}>{t('geo.points')}</div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: '#111827', lineHeight: 1.3 }}>{loc_t(loc.name)}</div>
                  <div style={{ fontSize: '0.82rem', color: '#6B7280', marginTop: 3 }}>
                    {t('geo.distance')} {currentKm < 1 ? `${Math.round(currentKm * 1000)}${t('geo.m')}` : `${currentKm.toFixed(1)}${t('geo.km')}`} {t('geo.away')}
                  </div>
                </div>
              </div>
              {/* Fact */}
              <p style={{ fontSize: '0.84rem', color: '#374151', background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 10, padding: '10px 13px', margin: '0 0 14px', lineHeight: 1.6 }}>{loc_t(loc.fact)}</p>
              {/* Next button */}
              <button onClick={handleNext} style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '14px 20px', borderRadius: 12,
                background: '#111827', color: '#FFFFFF',
                border: '1px solid #1F2937',
                boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                cursor: 'pointer', fontFamily: 'var(--font)',
                fontSize: '0.95rem', fontWeight: 700,
                transition: 'transform 0.15s ease, box-shadow 0.15s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.28)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.18)' }}
              >
                {roundIdx + 1 >= locations.length ? t('geo.finish') : t('geo.nextRound')} →
              </button>
            </div>
          )}
          {resultCollapsed && (
            <div style={{ padding: '10px 16px', display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{
                background: currentScore >= 800 ? '#ECFDF5' : currentScore >= 500 ? '#FFFBEB' : '#FEF2F2',
                border: `1px solid ${currentScore >= 800 ? '#6EE7B7' : currentScore >= 500 ? '#FCD34D' : '#FCA5A5'}`,
                color: currentScore >= 800 ? '#065F46' : currentScore >= 500 ? '#92400E' : '#991B1B',
                borderRadius: 999, padding: '4px 13px', fontWeight: 800, fontSize: '0.88rem', flexShrink: 0,
              }}>
                {currentScore} pts
              </div>
              <button onClick={handleNext} style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                padding: '10px 16px', borderRadius: 10,
                background: '#111827', color: '#FFFFFF',
                border: 'none', cursor: 'pointer', fontFamily: 'var(--font)',
                fontSize: '0.88rem', fontWeight: 700,
              }}>
                {roundIdx + 1 >= locations.length ? t('geo.finish') : t('geo.nextRound')} →
              </button>
            </div>
          )}
        </div>
      )}

      {/* Guess button */}
      {!revealed && (
        <div style={{ padding: '12px 16px', background: '#FFFFFF', borderTop: '1px solid #E5E7EB', flexShrink: 0 }}>
          {shake && !userPin && (
            <div style={{ textAlign: 'center', color: '#DC2626', fontSize: '0.82rem', marginBottom: 8, fontWeight: 600 }}>
              {t('geo.noPin')}
            </div>
          )}
          <button
            onClick={handleGuess}
            disabled={!userPin}
            className={shake ? 'animate-shake' : ''}
            style={{
              width: '100%', padding: '14px 20px', borderRadius: 12,
              background: userPin ? '#111827' : '#E5E7EB',
              color: userPin ? '#FFFFFF' : '#9CA3AF',
              border: 'none', cursor: userPin ? 'pointer' : 'default',
              fontFamily: 'var(--font)', fontSize: '0.95rem', fontWeight: 700,
              transition: 'background 0.15s ease, transform 0.15s ease',
            }}
            onMouseEnter={e => { if (userPin) e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
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

  return (
    <div>
      {showRules && <RulesModal t={t} onClose={() => { setShowRules(false); onStart() }} />}

      {/* Level header */}
      <div style={{
        color: 'white', textAlign: 'center',
        padding: '18px 20px 8px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          <span style={{ fontSize: '2rem', lineHeight: 1 }}>{curLevel.icon}</span>
          <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800 }}>{t('geo.title')}</h2>
        </div>
      </div>

      {/* Content */}
      <div className="container" style={{ paddingTop: 28 }}>
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
            marginBottom: 16,
            borderRadius: 16,
            background: '#111827',
            color: '#FFFFFF',
            border: '1px solid #1F2937',
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
                : t('geo.startSubLevel', { name: t(`geo.levelNames.${curLevel.id}`), num: curSubLevel })}
            </strong>
            {!isFinished && (
              <small style={{ display: 'block', fontSize: '0.72rem', opacity: 0.65, marginTop: 3, fontWeight: 400 }}>
                {curLevel.icon} {t(`geo.levelNames.${curLevel.id}`)} · {t('geo.subLevel', { defaultValue: 'Sub-level' })} {curSubLevel}/5
              </small>
            )}
          </span>
          <span style={{ opacity: 0.45, fontSize: '1.1rem' }}>→</span>
        </button>

        {/* Progress card */}
        <div className="card" style={{ marginBottom: 16, padding: '18px 20px' }}>
          <div className="section-title" style={{ marginBottom: 12 }}>{t('geo.yourProgress')}</div>
          <LevelMapBadges progress={geoProgress} />
          <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {t('geo.subLevelsDone', { done: totalSubLevelsDone(geoProgress) })}
            </span>
            <span style={{ fontWeight: 800, color: '#059669', fontSize: '1rem' }}>
              {(geoProgress.totalPoints || 0).toLocaleString()} pts
            </span>
          </div>
        </div>
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
            border: '1px solid #1F2937',
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
            border: '1px solid #1F2937',
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
