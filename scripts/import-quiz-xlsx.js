#!/usr/bin/env node
/**
 * import-quiz-xlsx.js — Import quiz questions from an Excel file
 * into src/games/quiz/data/questions.js
 *
 * Usage:
 *   node scripts/import-quiz-xlsx.js "Quiz Questions.xlsx"
 *
 * The Excel file must have a sheet named "Quiz Questions" with these columns:
 *   ID | Level | Category | Question | Option A | Option B | Option C | Option D |
 *   Correct Answer | Explanation | Link |
 *   FR Question | FR Option A | FR Option B | FR Option C | FR Option D | FR Explanation
 */

const XLSX = require('xlsx')
const fs = require('fs')
const path = require('path')

const inputFile = process.argv[2]
if (!inputFile) {
  console.error('Usage: node scripts/import-quiz-xlsx.js <excel-file>')
  process.exit(1)
}

// ── Read Excel ────────────────────────────────────────────────────────────────
const wb = XLSX.readFile(inputFile)
const ws = wb.Sheets['Quiz Questions']
if (!ws) {
  console.error('Error: Sheet "Quiz Questions" not found.')
  process.exit(1)
}

const rows = XLSX.utils.sheet_to_json(ws)
console.log(`Read ${rows.length} questions from Excel.`)

// ── Group by level ────────────────────────────────────────────────────────────
const LEVEL_ORDER = ['newcomer', 'explorer', 'resident', 'citizen', 'ambassador']
const byLevel = {}
LEVEL_ORDER.forEach(l => { byLevel[l] = [] })

for (const row of rows) {
  const level = (row['Level'] || '').toLowerCase().trim()
  if (!LEVEL_ORDER.includes(level)) {
    console.warn(`Warning: Unknown level "${row['Level']}" for question "${row['ID']}", skipping.`)
    continue
  }

  const options = [
    row['Option A'] || '',
    row['Option B'] || '',
    row['Option C'] || '',
    row['Option D'] || '',
  ].map(String)

  const correctLabel = String(row['Correct Answer'] || '')
  let answerIdx = options.findIndex(o => o === correctLabel)
  if (answerIdx === -1) {
    console.warn(`Warning: Correct answer "${correctLabel}" not found in options for "${row['ID']}". Defaulting to 0.`)
    answerIdx = 0
  }

  const frQuestion = row['FR Question'] || ''
  const frOptions = [
    row['FR Option A'] || '',
    row['FR Option B'] || '',
    row['FR Option C'] || '',
    row['FR Option D'] || '',
  ].map(String)
  const frExplanation = row['FR Explanation'] || ''

  const hasFr = frQuestion || frOptions.some(o => o) || frExplanation

  const q = {
    id: String(row['ID'] || ''),
    level,
    category: (row['Category'] || '').toLowerCase().trim(),
    question: String(row['Question'] || ''),
    options,
    answer: answerIdx,
    explanation: String(row['Explanation'] || ''),
    link: String(row['Link'] || ''),
  }

  if (hasFr) {
    q.translations = {
      fr: {
        question: String(frQuestion),
        options: frOptions,
        explanation: String(frExplanation),
      },
    }
  }

  byLevel[level].push(q)
}

// ── Generate JS source ───────────────────────────────────────────────────────
function escapeJS(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n')
}

function formatQuestion(q, indent) {
  const pad = ' '.repeat(indent)
  const pad2 = ' '.repeat(indent + 2)
  let out = `${pad}{\n`
  out += `${pad2}id: '${escapeJS(q.id)}', level: '${escapeJS(q.level)}', category: '${escapeJS(q.category)}',\n`
  out += `${pad2}question: '${escapeJS(q.question)}',\n`
  out += `${pad2}options: [${q.options.map(o => `'${escapeJS(o)}'`).join(', ')}],\n`
  out += `${pad2}answer: ${q.answer},\n`
  out += `${pad2}explanation: '${escapeJS(q.explanation)}',\n`
  out += `${pad2}link: '${escapeJS(q.link)}',\n`

  if (q.translations) {
    out += `${pad2}translations: {\n`
    for (const [lang, t] of Object.entries(q.translations)) {
      out += `${pad2}  ${lang}: {\n`
      out += `${pad2}    question: '${escapeJS(t.question)}',\n`
      out += `${pad2}    options: [${t.options.map(o => `'${escapeJS(o)}'`).join(', ')}],\n`
      out += `${pad2}    explanation: '${escapeJS(t.explanation)}',\n`
      out += `${pad2}  },\n`
    }
    out += `${pad2}},\n`
  }

  out += `${pad}}`
  return out
}

function formatLevel(name, questions) {
  const label = name.toUpperCase()
  let out = `// ─── ${label} ───${'─'.repeat(70 - label.length)}\n`
  out += `const ${label} = [\n`
  out += questions.map(q => formatQuestion(q, 2)).join(',\n')
  out += ',\n]\n'
  return out
}

let source = `/**
 * Quiz question bank — Luxembourg
 * Each question: id, level, category, question, options[], answer (0-based), explanation, link
 * Levels: 'newcomer' | 'explorer' | 'resident' | 'citizen' | 'ambassador'
 * 25 questions per level (5 sub-levels × 5 questions each), categories interleaved.
 */

`

for (const level of LEVEL_ORDER) {
  source += formatLevel(level, byLevel[level]) + '\n'
}

source += `export const QUESTIONS = [...NEWCOMER, ...EXPLORER, ...RESIDENT, ...CITIZEN, ...AMBASSADOR]

/**
 * Return the 5 questions for a given sub-level.
 * subLevel is 0-based (0..4) within the level.
 */
export function getSubLevelQuestions(level, subLevel, questionsPool = null) {
  const pool = questionsPool || QUESTIONS
  const levelQs = pool.filter(q => q.level === level)
  const start = subLevel * 5
  return levelQs.slice(start, start + 5)
}

/**
 * Legacy helper kept for compatibility.
 */
export function getDailyQuestions(dayIdx, questionsPool = null) {
  const pool = questionsPool || QUESTIONS
  const categories = ['language', 'history', 'culture', 'people', 'institutions', 'economy']
  const byCategory = {}
  categories.forEach(c => { byCategory[c] = pool.filter(q => q.category === c) })
  const seed = dayIdx + 1
  const selected = []
  const catOrder = categories.slice((seed % 6)).concat(categories.slice(0, seed % 6))
  for (let i = 0; i < 5; i++) {
    const cat = catOrder[i % categories.length]
    const catPool = byCategory[cat]
    if (!catPool || catPool.length === 0) continue
    selected.push(catPool[(seed * (i + 1) * 7) % catPool.length])
  }
  return selected
}
`

const outPath = path.resolve(__dirname, '..', 'src', 'games', 'quiz', 'data', 'questions.js')
fs.writeFileSync(outPath, source, 'utf8')

// Summary
let total = 0
for (const level of LEVEL_ORDER) {
  const count = byLevel[level].length
  total += count
  console.log(`  ${level}: ${count} questions`)
}
console.log(`\nWrote ${total} questions to ${outPath}`)
