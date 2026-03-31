#!/usr/bin/env node
/**
 * fetch-place-photos.js — Download all Luxembourg Games places photos
 *
 * Reads places.js, resolves every Wikipedia image (via REST API or direct imageUrl),
 * downloads the actual image file, and writes a place-photos.json mapping.
 *
 * Usage:
 *   node scripts/fetch-place-photos.js [--out-dir ./data/place-photos]
 *
 * Can also be called programmatically from the server (admin endpoint).
 */

const fs    = require('fs')
const path  = require('path')
const https = require('https')
const http  = require('http')

// ── Parse places.js to extract id, wikiTitle, imageUrl, noPhoto ────────────
function parsePlaces(filePath) {
  const src = fs.readFileSync(filePath, 'utf-8')
  const places = []
  // Match each object block with id and wikiTitle
  const regex = /\{[^}]*?id:\s*'([^']+)'[^}]*?wikiTitle:\s*'([^']+)'[^}]*?\}/gs
  let m
  while ((m = regex.exec(src)) !== null) {
    const block = m[0]
    const id = m[1]
    const wikiTitle = m[2]
    const noPhoto = /noPhoto:\s*true/.test(block)
    const imageUrlMatch = block.match(/imageUrl:\s*'([^']+)'/)
    const imageUrl = imageUrlMatch ? imageUrlMatch[1] : null
    places.push({ id, wikiTitle, noPhoto, imageUrl })
  }
  return places
}

// ── HTTP(S) fetch with redirect following ──────────────────────────────────
function fetchUrl(url, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    if (maxRedirects <= 0) return reject(new Error('Too many redirects'))
    const mod = url.startsWith('https') ? https : http
    const req = mod.get(url, { headers: { 'User-Agent': 'LetzPlay/1.0 (game; contact: brosiusjacques@gmail.com)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location
        if (redirectUrl.startsWith('/')) {
          const parsed = new URL(url)
          redirectUrl = `${parsed.protocol}//${parsed.host}${redirectUrl}`
        }
        return fetchUrl(redirectUrl, maxRedirects - 1).then(resolve, reject)
      }
      if (res.statusCode !== 200) {
        res.resume()
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`))
      }
      const chunks = []
      res.on('data', c => chunks.push(c))
      res.on('end', () => resolve(Buffer.concat(chunks)))
      res.on('error', reject)
    })
    req.on('error', reject)
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('Timeout')) })
  })
}

// ── Resolve image URL from Wikipedia REST API ──────────────────────────────
async function resolveWikiImage(wikiTitle) {
  const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wikiTitle)}`
  const buf = await fetchUrl(apiUrl)
  const data = JSON.parse(buf.toString('utf-8'))
  return data.originalimage?.source || data.thumbnail?.source || null
}

// ── Determine file extension from URL or content-type ──────────────────────
function extFromUrl(url) {
  const u = url.split('?')[0].split('#')[0]
  const ext = path.extname(u).toLowerCase()
  if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext)) return ext
  return '.jpg' // default
}

// ── Main fetch logic ───────────────────────────────────────────────────────
async function fetchAllPlacePhotos(outDir, placesFile) {
  const photosDir = path.join(outDir, 'place-photos')
  if (!fs.existsSync(photosDir)) fs.mkdirSync(photosDir, { recursive: true })

  const places = parsePlaces(placesFile)
  console.log(`Found ${places.length} places in data file`)

  const mapping = {} // id → { file, url, status }
  let success = 0, skipped = 0, failed = 0

  for (const place of places) {
    const { id, wikiTitle, noPhoto, imageUrl } = place
    try {
      // 1. Resolve the image URL
      let resolvedUrl = null
      if (imageUrl) {
        // Direct imageUrl provided — use as-is
        // Handle commons.wikimedia.org/wiki/Special:FilePath/... URLs
        resolvedUrl = imageUrl
      } else if (!noPhoto && wikiTitle) {
        resolvedUrl = await resolveWikiImage(wikiTitle)
      }

      if (!resolvedUrl) {
        console.log(`  ⚠ ${id} (${wikiTitle}) — no image available, skipping`)
        mapping[id] = { file: null, url: null, status: 'no-image' }
        skipped++
        continue
      }

      // 2. Download the image
      const ext = extFromUrl(resolvedUrl)
      const filename = `${id}${ext}`
      const filePath = path.join(photosDir, filename)

      // Skip if already downloaded
      if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
        console.log(`  ✓ ${id} — already exists, skipping download`)
        mapping[id] = { file: filename, url: resolvedUrl, status: 'cached' }
        success++
        continue
      }

      console.log(`  ↓ ${id} — downloading...`)
      const imgBuf = await fetchUrl(resolvedUrl)
      fs.writeFileSync(filePath, imgBuf)
      mapping[id] = { file: filename, url: resolvedUrl, status: 'downloaded' }
      success++

      // Be polite to Wikipedia — small delay between requests
      await new Promise(r => setTimeout(r, 200))
    } catch (err) {
      console.error(`  ✗ ${id} (${wikiTitle}) — ${err.message}`)
      mapping[id] = { file: null, url: null, status: 'error', error: err.message }
      failed++
    }
  }

  // Write the mapping JSON
  const mappingFile = path.join(outDir, 'place-photos.json')
  fs.writeFileSync(mappingFile, JSON.stringify(mapping, null, 2), 'utf-8')

  const summary = { total: places.length, success, skipped, failed, mappingFile }
  console.log(`\nDone: ${success} downloaded, ${skipped} skipped, ${failed} failed`)
  console.log(`Mapping written to ${mappingFile}`)
  return summary
}

// ── CLI entry point ────────────────────────────────────────────────────────
if (require.main === module) {
  const args = process.argv.slice(2)
  const outDirIdx = args.indexOf('--out-dir')
  const outDir = outDirIdx >= 0 ? args[outDirIdx + 1] : path.join(__dirname, '..', 'data')
  const placesFile = path.join(__dirname, '..', 'src', 'games', 'places', 'data', 'places.js')

  fetchAllPlacePhotos(outDir, placesFile).catch(err => {
    console.error('Fatal error:', err)
    process.exit(1)
  })
}

module.exports = { fetchAllPlacePhotos, parsePlaces }
