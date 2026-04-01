/**
 * Lëtz Play — Express backend
 * Serves the static Vite build and provides:
 *   POST /api/visit          — record a page visit (anonymous analytics)
 *   POST /api/game-event     — record a game start/complete event
 *   GET  /api/stats          — admin: retrieve analytics (password required)
 *   GET  /api/content        — public: get content overrides for games
 *   PUT  /api/content        — admin: save content overrides (password required)
 *   GET  /api/photos         — public: get photo mapping (id → filename)
 *   POST /api/photos/fetch   — admin: download all photos from Wikipedia
 *   POST /api/report-error   — public: submit an error report for a question
 *   GET  /api/error-reports   — admin: list all error reports
 *   PUT  /api/error-reports/:id — admin: update report status
 *   DELETE /api/error-reports/:id — admin: delete a report
 *   /photos/*                — public: serve downloaded photo files
 *
 * Data is persisted to ./data/ on the server filesystem.
 * NOTE: Railway's filesystem resets on redeploy. For permanent persistence
 * across deploys, attach a Railway Volume and set DATA_DIR=/mnt/data
 */

const express = require('express')
const fs      = require('fs')
const path    = require('path')

const app  = express()
const PORT = process.env.PORT || 8080

const DIST_DIR = path.join(__dirname, 'dist')

// DATA_DIR resolution order:
//   1. DATA_DIR env var (explicit override)
//   2. /app/data  — Railway persistent volume (declared in railway.toml [[mounts]])
//   3. ./data     — local development fallback
const DATA_DIR = process.env.DATA_DIR ||
  (process.env.RAILWAY_ENVIRONMENT ? '/app/data' : path.join(__dirname, 'data'))

// ── Ensure data directory exists ───────────────────────────────────────────
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true })
}

const ANALYTICS_FILE    = path.join(DATA_DIR, 'analytics.json')
const CONTENT_FILE      = path.join(DATA_DIR, 'content.json')
const ERROR_REPORTS_FILE = path.join(DATA_DIR, 'error-reports.json')

// ── Load persisted data ────────────────────────────────────────────────────
let analyticsData = { visits: [], gameEvents: [] }
let contentOverrides = {}
let errorReports = []

try {
  if (fs.existsSync(ANALYTICS_FILE)) {
    analyticsData = JSON.parse(fs.readFileSync(ANALYTICS_FILE, 'utf-8'))
    if (!analyticsData.visits)     analyticsData.visits = []
    if (!analyticsData.gameEvents) analyticsData.gameEvents = []
  }
} catch (e) { console.error('Could not load analytics:', e.message) }

try {
  if (fs.existsSync(CONTENT_FILE)) {
    contentOverrides = JSON.parse(fs.readFileSync(CONTENT_FILE, 'utf-8'))
  }
} catch (e) { console.error('Could not load content overrides:', e.message) }

try {
  if (fs.existsSync(ERROR_REPORTS_FILE)) {
    errorReports = JSON.parse(fs.readFileSync(ERROR_REPORTS_FILE, 'utf-8'))
    if (!Array.isArray(errorReports)) errorReports = []
  }
} catch (e) { console.error('Could not load error reports:', e.message) }

function persist(file, data) {
  try { fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf-8') }
  catch (e) { console.error('Save error:', e.message) }
}

// ── Middleware ─────────────────────────────────────────────────────────────
app.use(express.json({ limit: '1mb' }))

// CORS for local dev
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,x-admin-password')
  if (req.method === 'OPTIONS') return res.sendStatus(204)
  next()
})

// ── Admin auth ─────────────────────────────────────────────────────────────
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'biergerpakt'

function adminAuth(req, res, next) {
  if (req.headers['x-admin-password'] !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  next()
}

// ── Analytics — record a visit ─────────────────────────────────────────────
app.post('/api/visit', (req, res) => {
  const { sessionId } = req.body
  if (!sessionId) return res.status(400).json({ error: 'Missing sessionId' })

  // Deduplicate: same session within the last 30 min counts only once
  const threshold = Date.now() - 30 * 60 * 1000
  const recent = analyticsData.visits.find(
    v => v.sessionId === sessionId && new Date(v.timestamp).getTime() > threshold
  )
  if (!recent) {
    const ip =
      (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
      req.socket?.remoteAddress ||
      'unknown'
    analyticsData.visits.push({
      ...req.body,
      ip,
      timestamp: new Date().toISOString()
    })
    persist(ANALYTICS_FILE, analyticsData)
  }
  res.json({ ok: true })
})

// ── Analytics — record a game event ───────────────────────────────────────
app.post('/api/game-event', (req, res) => {
  analyticsData.gameEvents.push({
    ...req.body,
    timestamp: new Date().toISOString()
  })
  persist(ANALYTICS_FILE, analyticsData)
  res.json({ ok: true })
})

// ── Analytics — read stats (admin) ────────────────────────────────────────
app.get('/api/stats', adminAuth, (req, res) => {
  res.json(analyticsData)
})

// ── Content — read overrides (public) ─────────────────────────────────────
app.get('/api/content', (req, res) => {
  res.json(contentOverrides)
})

// ── Content — save overrides (admin) ──────────────────────────────────────
app.put('/api/content', adminAuth, (req, res) => {
  contentOverrides = req.body
  persist(CONTENT_FILE, contentOverrides)
  res.json({ ok: true })
})

// ── Photos — serve downloaded photos as static files ─────────────────────
const PHOTOS_DIR = path.join(DATA_DIR, 'photos')
const PHOTOS_FILE = path.join(DATA_DIR, 'photos.json')

if (!fs.existsSync(PHOTOS_DIR)) {
  fs.mkdirSync(PHOTOS_DIR, { recursive: true })
}

// Serve photo files with long cache headers (images don't change)
app.use('/photos', express.static(PHOTOS_DIR, {
  maxAge: '7d',
  immutable: true,
}))

// ── Photos — get mapping (public) ────────────────────────────────────────
app.get('/api/photos', (req, res) => {
  try {
    if (fs.existsSync(PHOTOS_FILE)) {
      const mapping = JSON.parse(fs.readFileSync(PHOTOS_FILE, 'utf-8'))
      res.json(mapping)
    } else {
      res.json({})
    }
  } catch (e) {
    console.error('Could not load photo mapping:', e.message)
    res.json({})
  }
})

// ── Photos — download all from Wikipedia (admin) ─────────────────────────
let photoFetchInProgress = false

app.post('/api/photos/fetch', adminAuth, async (req, res) => {
  if (photoFetchInProgress) {
    return res.status(409).json({ error: 'A photo fetch is already in progress' })
  }
  photoFetchInProgress = true
  try {
    const { fetchAllPhotos } = require('./scripts/fetch-photos')
    const peopleFile = path.join(__dirname, 'src', 'games', 'famous', 'data', 'people.js')
    const summary = await fetchAllPhotos(DATA_DIR, peopleFile)
    res.json({ ok: true, ...summary })
  } catch (e) {
    console.error('Photo fetch error:', e)
    res.status(500).json({ error: e.message })
  } finally {
    photoFetchInProgress = false
  }
})

// ── Place Photos — serve downloaded place photos as static files ─────────
const PLACE_PHOTOS_DIR = path.join(DATA_DIR, 'place-photos')
const PLACE_PHOTOS_FILE = path.join(DATA_DIR, 'place-photos.json')

if (!fs.existsSync(PLACE_PHOTOS_DIR)) {
  fs.mkdirSync(PLACE_PHOTOS_DIR, { recursive: true })
}

app.use('/place-photos', express.static(PLACE_PHOTOS_DIR, {
  maxAge: '7d',
  immutable: true,
}))

// ── Place Photos — get mapping (public) ──────────────────────────────────
app.get('/api/place-photos', (req, res) => {
  try {
    if (fs.existsSync(PLACE_PHOTOS_FILE)) {
      const mapping = JSON.parse(fs.readFileSync(PLACE_PHOTOS_FILE, 'utf-8'))
      res.json(mapping)
    } else {
      res.json({})
    }
  } catch (e) {
    console.error('Could not load place photo mapping:', e.message)
    res.json({})
  }
})

// ── Place Photos — download all from Wikipedia (admin) ───────────────────
let placePhotoFetchInProgress = false

app.post('/api/place-photos/fetch', adminAuth, async (req, res) => {
  if (placePhotoFetchInProgress) {
    return res.status(409).json({ error: 'A place photo fetch is already in progress' })
  }
  placePhotoFetchInProgress = true
  try {
    const { fetchAllPlacePhotos } = require('./scripts/fetch-place-photos')
    const placesFile = path.join(__dirname, 'src', 'games', 'places', 'data', 'places.js')
    const summary = await fetchAllPlacePhotos(DATA_DIR, placesFile)
    res.json({ ok: true, ...summary })
  } catch (e) {
    console.error('Place photo fetch error:', e)
    res.status(500).json({ error: e.message })
  } finally {
    placePhotoFetchInProgress = false
  }
})

// ── Error Reports — submit a report (public) ─────────────────────────────
app.post('/api/report-error', (req, res) => {
  const { gameType, questionId, questionText, message } = req.body
  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Message is required' })
  }

  const report = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    gameType: gameType || 'unknown',
    questionId: questionId || 'unknown',
    questionText: questionText || '',
    message: message.trim(),
    status: 'new',           // new | reviewed | resolved | dismissed
    timestamp: new Date().toISOString(),
  }

  errorReports.push(report)
  persist(ERROR_REPORTS_FILE, errorReports)

  // Send email notification (fire-and-forget, don't block the response)
  sendErrorReportEmail(report).catch(e =>
    console.error('Error sending report email:', e.message)
  )

  res.json({ ok: true, id: report.id })
})

// ── Error Reports — list all reports (admin) ─────────────────────────────
app.get('/api/error-reports', adminAuth, (req, res) => {
  res.json(errorReports)
})

// ── Error Reports — update report status (admin) ─────────────────────────
app.put('/api/error-reports/:id', adminAuth, (req, res) => {
  const report = errorReports.find(r => r.id === req.params.id)
  if (!report) return res.status(404).json({ error: 'Report not found' })

  if (req.body.status) report.status = req.body.status
  if (req.body.adminNote !== undefined) report.adminNote = req.body.adminNote
  report.updatedAt = new Date().toISOString()

  persist(ERROR_REPORTS_FILE, errorReports)
  res.json({ ok: true })
})

// ── Error Reports — delete a report (admin) ──────────────────────────────
app.delete('/api/error-reports/:id', adminAuth, (req, res) => {
  const idx = errorReports.findIndex(r => r.id === req.params.id)
  if (idx === -1) return res.status(404).json({ error: 'Report not found' })
  errorReports.splice(idx, 1)
  persist(ERROR_REPORTS_FILE, errorReports)
  res.json({ ok: true })
})

// ── Email helper for error reports ───────────────────────────────────────
async function sendErrorReportEmail(report) {
  // Use nodemailer if available, otherwise log to console
  try {
    const nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp-mail.outlook.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'beautiful_luxembourg@hotmail.com',
        pass: process.env.SMTP_PASS || '',
      },
    })

    if (!process.env.SMTP_PASS) {
      console.log('[Error Report] Email not sent (SMTP_PASS not configured). Report:', JSON.stringify(report, null, 2))
      return
    }

    await transporter.sendMail({
      from: process.env.SMTP_USER || 'beautiful_luxembourg@hotmail.com',
      to: 'beautiful_luxembourg@hotmail.com',
      subject: `[Lëtz Play] Error Report — ${report.gameType} game — ${report.questionId}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #DC2626;">⚑ New Error Report</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Game</td><td style="padding: 8px;">${report.gameType}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Question ID</td><td style="padding: 8px;">${report.questionId}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Question</td><td style="padding: 8px;">${report.questionText}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #374151;">User Message</td><td style="padding: 8px; color: #DC2626;">${report.message}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Time</td><td style="padding: 8px;">${report.timestamp}</td></tr>
          </table>
          <p style="margin-top: 20px; color: #6B7280; font-size: 13px;">
            Review this report in the <a href="${process.env.APP_URL || 'https://luxembourggames.com'}/admin">Admin Panel</a> → Error Reports tab.
          </p>
        </div>
      `,
    })
    console.log('[Error Report] Email sent for report:', report.id)
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      console.log('[Error Report] nodemailer not installed. Report logged:', JSON.stringify(report, null, 2))
    } else {
      throw e
    }
  }
}

// ── Serve Vite build ───────────────────────────────────────────────────────
app.use(express.static(DIST_DIR))

// SPA fallback — all unmatched routes serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'))
})

// ── Start ──────────────────────────────────────────────────────────────────
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🇱🇺  Lëtz Play server listening on port ${PORT}`)
  console.log(`     Serving static files from: ${DIST_DIR}`)
  console.log(`     Data directory: ${DATA_DIR}`)
})
