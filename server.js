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
const vm      = require('vm')

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
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'xxx'

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

// ── Quiz Import/Export ────────────────────────────────────────────────────
// Uses the content override system so changes are live immediately —
// no rebuild or redeploy needed. The quiz game's useGameContent hook
// picks up the 'questions' key from /api/content automatically.
// ──────────────────────────────────────────────────────────────────────────
const QUESTIONS_FILE = path.join(__dirname, 'src', 'games', 'quiz', 'data', 'questions.js')

/** Read bundled questions.js and return an array of question objects */
function readBundledQuestions() {
  const src = fs.readFileSync(QUESTIONS_FILE, 'utf8')
    .replace(/\bconst\b/g, 'var')
    .replace(/^export /gm, '')
    .replace(/export \{[^}]*\}/g, '')
    .replace(/export function[\s\S]*$/m, '')
  const sandbox = {}
  vm.createContext(sandbox)
  vm.runInContext(src, sandbox)
  return [
    ...(sandbox.NEWCOMER || []),
    ...(sandbox.EXPLORER || []),
    ...(sandbox.RESIDENT || []),
    ...(sandbox.CITIZEN || []),
    ...(sandbox.AMBASSADOR || []),
  ]
}

/** Return the currently active questions (overrides first, then bundled) */
function getActiveQuestions() {
  if (contentOverrides.questions && Array.isArray(contentOverrides.questions) && contentOverrides.questions.length > 0) {
    return { questions: contentOverrides.questions, isOverride: true }
  }
  return { questions: readBundledQuestions(), isOverride: false }
}

/** Check whether custom questions are currently active */
app.get('/api/admin/quiz-status', adminAuth, (req, res) => {
  const hasOverride = Array.isArray(contentOverrides.questions) && contentOverrides.questions.length > 0
  const count = hasOverride ? contentOverrides.questions.length : 0
  res.json({ hasOverride, count })
})

/** Escape a CSV field value (wrap in quotes if needed) */
function csvEscape(val) {
  const s = String(val == null ? '' : val)
  if (s.includes('"') || s.includes(',') || s.includes('\n') || s.includes('\r')) {
    return '"' + s.replace(/"/g, '""') + '"'
  }
  return s
}

/** Convert a questions array into a CSV string */
function questionsToCsv(questions) {
  const headers = [
    'ID', 'Level', 'Category', 'Question',
    'Option A', 'Option B', 'Option C', 'Option D',
    'Correct Answer', 'Explanation', 'Link',
    'FR Question', 'FR Option A', 'FR Option B', 'FR Option C', 'FR Option D',
    'FR Explanation',
  ]
  const rows = [headers.map(csvEscape).join(',')]
  for (const q of questions) {
    const fr = q.translations?.fr || {}
    const frOpts = fr.options || ['', '', '', '']
    rows.push([
      q.id, q.level, q.category, q.question,
      q.options[0] || '', q.options[1] || '', q.options[2] || '', q.options[3] || '',
      q.options[q.answer] || '',
      q.explanation || '', q.link || '',
      fr.question || '',
      frOpts[0] || '', frOpts[1] || '', frOpts[2] || '', frOpts[3] || '',
      fr.explanation || '',
    ].map(csvEscape).join(','))
  }
  return rows.join('\r\n')
}

/** Export active quiz questions as .csv download */
app.get('/api/admin/export-quiz', adminAuth, (req, res) => {
  try {
    const { questions } = getActiveQuestions()
    const csv = questionsToCsv(questions)
    res.setHeader('Content-Disposition', 'attachment; filename="Quiz Questions.csv"')
    res.setHeader('Content-Type', 'text/csv; charset=utf-8')
    res.send('\uFEFF' + csv) // BOM for Excel compatibility
  } catch (e) {
    console.error('Export error:', e)
    res.status(500).json({ error: e.message })
  }
})

/** Parse a CSV buffer into an array of question objects + warnings */
function parseQuizCsv(buffer) {
  const text = buffer.toString('utf8').replace(/^\uFEFF/, '') // strip BOM if present
  const lines = text.split(/\r?\n/).filter(l => l.trim() !== '')
  if (lines.length < 2) throw new Error('The CSV file is empty or has no data rows.')

  // Parse a single CSV line respecting quoted fields
  function parseLine(line) {
    const fields = []
    let cur = ''
    let inQuotes = false
    for (let i = 0; i < line.length; i++) {
      const ch = line[i]
      if (inQuotes) {
        if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++ }
        else if (ch === '"') { inQuotes = false }
        else { cur += ch }
      } else {
        if (ch === '"') { inQuotes = true }
        else if (ch === ',') { fields.push(cur); cur = '' }
        else { cur += ch }
      }
    }
    fields.push(cur)
    return fields
  }

  const headers = parseLine(lines[0])
  const col = (row, name) => {
    const idx = headers.indexOf(name)
    return idx === -1 ? '' : (row[idx] || '')
  }

  const LEVEL_ORDER = ['newcomer', 'explorer', 'resident', 'citizen', 'ambassador']
  const questions = []
  const warnings = []

  for (let i = 1; i < lines.length; i++) {
    const row = parseLine(lines[i])
    const level = col(row, 'Level').toLowerCase().trim()
    if (!LEVEL_ORDER.includes(level)) {
      warnings.push(`Unknown level "${col(row, 'Level')}" for ID "${col(row, 'ID')}", skipped.`)
      continue
    }
    const options = [
      col(row, 'Option A'), col(row, 'Option B'),
      col(row, 'Option C'), col(row, 'Option D'),
    ].map(String)

    const correctLabel = String(col(row, 'Correct Answer'))
    let answerIdx = options.findIndex(o => o === correctLabel)
    if (answerIdx === -1) {
      warnings.push(`Correct answer not found in options for "${col(row, 'ID')}". Defaulting to A.`)
      answerIdx = 0
    }

    const frQ = col(row, 'FR Question')
    const frOpts = [
      col(row, 'FR Option A'), col(row, 'FR Option B'),
      col(row, 'FR Option C'), col(row, 'FR Option D'),
    ].map(String)
    const frExp = col(row, 'FR Explanation')
    const hasFr = frQ || frOpts.some(o => o) || frExp

    const q = {
      id: String(col(row, 'ID')),
      level,
      category: col(row, 'Category').toLowerCase().trim(),
      question: String(col(row, 'Question')),
      options,
      answer: answerIdx,
      explanation: String(col(row, 'Explanation')),
      link: String(col(row, 'Link')),
    }
    if (hasFr) {
      q.translations = { fr: { question: String(frQ), options: frOpts, explanation: String(frExp) } }
    }
    questions.push(q)
  }
  return { questions, warnings }
}

/** Import quiz questions from uploaded .csv → saves to content overrides (live instantly) */
app.post('/api/admin/import-quiz', adminAuth, express.raw({ type: '*/*', limit: '10mb' }), (req, res) => {
  try {
    const { questions, warnings } = parseQuizCsv(req.body)

    // Save to content overrides — the quiz game picks this up immediately
    contentOverrides = { ...contentOverrides, questions }
    persist(CONTENT_FILE, contentOverrides)

    // Build per-level summary
    const LEVEL_ORDER = ['newcomer', 'explorer', 'resident', 'citizen', 'ambassador']
    const summary = {}
    LEVEL_ORDER.forEach(l => { summary[l] = questions.filter(q => q.level === l).length })

    res.json({ ok: true, total: questions.length, summary, warnings })
  } catch (e) {
    console.error('Import error:', e)
    res.status(500).json({ error: e.message })
  }
})

/** Revert to bundled questions (remove override) */
app.delete('/api/admin/import-quiz', adminAuth, (req, res) => {
  try {
    delete contentOverrides.questions
    persist(CONTENT_FILE, contentOverrides)
    const bundled = readBundledQuestions()
    res.json({ ok: true, total: bundled.length })
  } catch (e) {
    console.error('Revert error:', e)
    res.status(500).json({ error: e.message })
  }
})

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
