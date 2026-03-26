import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { MapContainer, TileLayer, Marker, useMapEvents, Circle, Polyline } from 'react-leaflet'
import L from 'leaflet'
import { getSessionLocations, calcDistance, distanceToScore } from './data/locations'
import { dayIndex } from '../../utils/dateUtils'

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

export default function GeoGame() {
  const { t } = useTranslation()
  const [locations] = useState(() => getSessionLocations(dayIndex()))
  const [step, setStep]           = useState('intro')
  const [roundIdx, setRoundIdx]   = useState(0)
  const [userPin, setUserPin]     = useState(null)
  const [revealed, setRevealed]   = useState(false)
  const [roundScores, setRoundScores] = useState([])
  const [shake, setShake]         = useState(false)
  const mapRef = useRef(null)

  const loc = locations[roundIdx]

  // Luxembourg bounding box
  const LUX_CENTER = [49.75, 6.17]
  const LUX_BOUNDS = [[49.44, 5.73], [50.18, 6.53]]

  const handleGuess = () => {
    if (!userPin) {
      setShake(true)
      setTimeout(() => setShake(false), 500)
      return
    }
    setRevealed(true)
  }

  const handleNext = () => {
    const km = calcDistance(userPin[0], userPin[1], loc.coords[0], loc.coords[1])
    const pts = distanceToScore(km)
    setRoundScores(prev => [...prev, { km, pts }])
    if (roundIdx + 1 >= locations.length) {
      setStep('done')
    } else {
      setRoundIdx(i => i + 1)
      setUserPin(null)
      setRevealed(false)
    }
  }

  if (step === 'intro') return <Intro t={t} onStart={() => setStep('game')} />
  if (step === 'done')  return <Done  scores={roundScores} locations={locations} t={t} onReplay={() => { setStep('game'); setRoundIdx(0); setUserPin(null); setRevealed(false); setRoundScores([]) }} />

  const currentKm     = revealed && userPin ? calcDistance(userPin[0], userPin[1], loc.coords[0], loc.coords[1]) : null
  const currentScore  = currentKm !== null ? distanceToScore(currentKm) : null

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - var(--nav-height) - 68px)' }}>
      {/* Progress strip */}
      <div style={{ background: 'var(--red)', padding: '8px 16px', display: 'flex', gap: 6, alignItems: 'center' }}>
        {locations.map((_, i) => (
          <div key={i} style={{
            flex: 1, height: 4, borderRadius: 999,
            background: i < roundIdx ? 'rgba(255,255,255,0.9)' : i === roundIdx ? 'white' : 'rgba(255,255,255,0.3)'
          }} />
        ))}
        <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.75rem', fontWeight: 600, marginLeft: 4 }}>
          {roundIdx + 1}/{locations.length}
        </span>
      </div>

      {/* Clue panel */}
      <div style={{ padding: '12px 16px', background: 'white', borderBottom: '1px solid var(--border)', flexShrink: 0 }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{loc.emoji}</span>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
              {t('geo.clue')} {roundIdx + 1}
            </div>
            <p style={{ fontSize: '0.85rem', margin: 0, lineHeight: 1.5, color: 'var(--gray-700)' }}>
              {loc.clue}
            </p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <MapContainer
          center={LUX_CENTER}
          zoom={9}
          maxBounds={LUX_BOUNDS}
          maxBoundsViscosity={0.9}
          style={{ height: '100%', width: '100%' }}
          ref={mapRef}
          zoomControl={true}
        >
          <TileLayer
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
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

        {/* Tap hint */}
        {!userPin && !revealed && (
          <div style={{
            position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.7)', color: 'white', borderRadius: 999,
            padding: '8px 16px', fontSize: '0.8rem', fontWeight: 600, zIndex: 10,
            pointerEvents: 'none', whiteSpace: 'nowrap'
          }}>
            📍 {t('geo.tapMap')}
          </div>
        )}
      </div>

      {/* Result panel */}
      {revealed && (
        <div className="animate-slide-up" style={{
          background: 'white', padding: '16px', borderTop: '1px solid var(--border)',
          flexShrink: 0
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{
              background: currentScore >= 800 ? '#D1FAE5' : currentScore >= 500 ? '#FEF3C7' : '#FEE2E2',
              borderRadius: 'var(--radius)', padding: '10px 16px', textAlign: 'center', minWidth: 80
            }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>{currentScore}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{t('geo.points')}</div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1rem' }}>{loc.name}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {t('geo.distance')} {currentKm < 1 ? `${Math.round(currentKm * 1000)}${t('geo.m')}` : `${currentKm.toFixed(1)}${t('geo.km')}`} {t('geo.away')}
              </div>
            </div>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--gray-700)', marginBottom: 12 }}>{loc.fact}</p>
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

function Intro({ t, onStart }) {
  return (
    <div className="container" style={{ paddingTop: 24 }}>
      <div style={{
        background: 'linear-gradient(135deg, #065F46 0%, #059669 100%)',
        borderRadius: 'var(--radius-xl)', padding: '28px 24px', marginBottom: 24,
        color: 'white', textAlign: 'center'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>🗺️</div>
        <h1 style={{ color: 'white', marginBottom: 8 }}>{t('geo.title')}</h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>{t('geo.subtitle')}</p>
      </div>
      <div className="card" style={{ marginBottom: 20 }}>
        <p style={{ color: 'var(--gray-700)', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>
          {t('geo.instructions')}
        </p>
        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, textAlign: 'center' }}>
          {[['📖', '5 locations'], ['📍', 'Tap the map'], ['⭐', '1000 pts max']].map(([icon, label]) => (
            <div key={label} style={{ background: 'var(--gray-50)', borderRadius: 8, padding: 12 }}>
              <div style={{ fontSize: '1.5rem' }}>{icon}</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={onStart} className="btn btn-full btn-lg" style={{ background: '#059669', color: 'white' }}>
        {t('quiz.startBtn')} →
      </button>
    </div>
  )
}

function Done({ scores, locations, t, onReplay }) {
  const total = scores.reduce((s, r) => s + r.pts, 0)
  const maxTotal = scores.length * 1000
  return (
    <div className="container" style={{ paddingTop: 24 }}>
      <div style={{
        background: 'linear-gradient(135deg, #065F46 0%, #059669 100%)',
        borderRadius: 'var(--radius-xl)', padding: '28px 24px', marginBottom: 24,
        color: 'white', textAlign: 'center'
      }}>
        <div style={{ fontSize: '3.5rem', marginBottom: 8 }}>🗺️</div>
        <div style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}>{total.toLocaleString()}</div>
        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>/ {maxTotal.toLocaleString()} {t('geo.points')}</div>
        <div style={{ marginTop: 8, color: 'rgba(255,255,255,0.85)' }}>{t('geo.results')}</div>
      </div>
      <div className="card" style={{ marginBottom: 20 }}>
        {scores.map((s, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '10px 0', borderBottom: i < scores.length - 1 ? '1px solid var(--border)' : 'none'
          }}>
            <span style={{ fontSize: '1.4rem' }}>{locations[i].emoji}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{locations[i].name}</div>
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
      <button onClick={onReplay} className="btn btn-full" style={{ background: '#059669', color: 'white' }}>
        {t('geo.playAgain')}
      </button>
    </div>
  )
}
