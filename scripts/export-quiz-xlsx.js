#!/usr/bin/env node
/**
 * export-quiz-xlsx.js — Export quiz questions to an editable Excel file
 *
 * Usage:
 *   node scripts/export-quiz-xlsx.js [output-file]
 *
 * Default output: "Quiz Questions.xlsx" in the project root.
 */

const XLSX = require('xlsx')
const vm = require('vm')
const fs = require('fs')
const path = require('path')

const outFile = process.argv[2] || path.resolve(__dirname, '..', 'Quiz Questions.xlsx')

// ── Read questions from source ────────────────────────────────────────────────
const srcPath = path.resolve(__dirname, '..', 'src', 'games', 'quiz', 'data', 'questions.js')
const src = fs.readFileSync(srcPath, 'utf8')
  .replace(/\bconst\b/g, 'var')
  .replace(/^export /gm, '')
  .replace(/export \{[^}]*\}/g, '')
  .replace(/export function[\s\S]*$/m, '')

const sandbox = {}
vm.createContext(sandbox)
vm.runInContext(src, sandbox)

const questions = [
  ...(sandbox.NEWCOMER || []),
  ...(sandbox.EXPLORER || []),
  ...(sandbox.RESIDENT || []),
  ...(sandbox.CITIZEN || []),
  ...(sandbox.AMBASSADOR || []),
]

console.log(`Exporting ${questions.length} questions...`)

// ── Build rows ────────────────────────────────────────────────────────────────
const headers = [
  'ID', 'Level', 'Category', 'Question',
  'Option A', 'Option B', 'Option C', 'Option D',
  'Correct Answer', 'Explanation', 'Link',
  'FR Question', 'FR Option A', 'FR Option B', 'FR Option C', 'FR Option D',
  'FR Explanation',
]

const data = [headers]
for (const q of questions) {
  const fr = q.translations?.fr || {}
  const frOpts = fr.options || ['', '', '', '']
  data.push([
    q.id, q.level, q.category, q.question,
    q.options[0] || '', q.options[1] || '', q.options[2] || '', q.options[3] || '',
    q.options[q.answer] || '',
    q.explanation || '', q.link || '',
    fr.question || '',
    frOpts[0] || '', frOpts[1] || '', frOpts[2] || '', frOpts[3] || '',
    fr.explanation || '',
  ])
}

const ws = XLSX.utils.aoa_to_sheet(data)

// Column widths
ws['!cols'] = [
  { wch: 12 }, { wch: 12 }, { wch: 14 }, { wch: 55 },
  { wch: 30 }, { wch: 30 }, { wch: 30 }, { wch: 30 },
  { wch: 30 }, { wch: 55 }, { wch: 40 },
  { wch: 55 }, { wch: 30 }, { wch: 30 }, { wch: 30 }, { wch: 30 },
  { wch: 55 },
]

const wb = XLSX.utils.book_new()
XLSX.utils.book_append_sheet(wb, ws, 'Quiz Questions')
XLSX.writeFile(wb, outFile)
console.log(`Saved to ${outFile}`)
