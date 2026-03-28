/**
 * Analytics — lightweight visit + game-event tracking
 * All data is sent to the Express backend (/api/visit and /api/game-event).
 * Silently no-ops if the backend is unavailable (e.g. in Vite dev mode).
 */

// ── Session ID ─────────────────────────────────────────────────────────────
// One random ID per browser tab session (resets when tab is closed).
let _sessionId = null

function getSessionId() {
  if (_sessionId) return _sessionId
  _sessionId = sessionStorage.getItem('letz-session-id')
  if (!_sessionId) {
    _sessionId = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`
    sessionStorage.setItem('letz-session-id', _sessionId)
  }
  return _sessionId
}

// ── Geo-IP lookup ──────────────────────────────────────────────────────────
// Uses ipapi.co free tier (30 k requests/month) — no API key required.
let _geoCache = null

async function getGeoData() {
  if (_geoCache !== null) return _geoCache
  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 4000)
    const res = await fetch('https://ipapi.co/json/', { signal: controller.signal })
    clearTimeout(timer)
    if (!res.ok) throw new Error('geo failed')
    const g = await res.json()
    _geoCache = {
      country:     g.country_name  || null,
      countryCode: g.country_code  || null,
      city:        g.city          || null,
      region:      g.region        || null,
      latitude:    g.latitude      || null,
      longitude:   g.longitude     || null,
    }
  } catch {
    _geoCache = {}
  }
  return _geoCache
}

// ── Platform detection ─────────────────────────────────────────────────────
function getPlatform() {
  const ua = navigator.userAgent
  if (/iPhone|iPad|iPod/.test(ua))   return 'iOS'
  if (/Android/.test(ua))            return 'Android'
  if (/Windows/.test(ua))            return 'Windows'
  if (/Macintosh/.test(ua))          return 'macOS'
  if (/Linux/.test(ua))              return 'Linux'
  return 'Other'
}

// ── POST helper ────────────────────────────────────────────────────────────
async function post(url, body) {
  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 6000)
    await fetch(url, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(body),
      signal:  controller.signal,
    })
    clearTimeout(timer)
  } catch {
    // silently ignore — backend may not be running in dev
  }
}

// ── Public API ─────────────────────────────────────────────────────────────

/**
 * Call once on app mount to record a page visit.
 * Geo-IP lookup happens asynchronously in the background.
 */
export async function trackVisit() {
  const geo = await getGeoData()
  await post('/api/visit', {
    sessionId:  getSessionId(),
    language:   navigator.language || 'unknown',
    platform:   getPlatform(),
    referrer:   document.referrer || 'direct',
    screenSize: `${window.screen.width}×${window.screen.height}`,
    ...geo,
  })
}

/**
 * Track a game event such as starting or completing a game.
 * @param {'quiz'|'geo'} game
 * @param {'start'|'complete'}     event
 * @param {object}                 [extra]   e.g. { score: 4, total: 5 }
 */
export async function trackGameEvent(game, event, extra = {}) {
  await post('/api/game-event', {
    sessionId: getSessionId(),
    game,
    event,
    ...extra,
  })
}
