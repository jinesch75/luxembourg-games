/**
 * AdminQuestions — view and edit all quiz questions.
 * Loads current content from /api/content and saves via PUT /api/content.
 * Falls back to the bundled static data if the API is unavailable.
 */

import { useState, useEffect } from 'react'
import { QUESTIONS } from '../../games/quiz/data/questions'
import LangTabs from './LangTabs'
import { ensureTranslations } from '../../utils/contentLang'

const TRANS_LANGS = ['fr']

const ADMIN_PASSWORD = 'biergerpakt'

const CAT_COLORS = {
  language:     { bg: '#F3E8FF', text: '#7C3AED', icon: '🗣️' },
  history:      { bg: '#FEF3C7', text: '#B45309', icon: '📚' },
  culture:      { bg: '#FCE7F3', text: '#BE185D', icon: '🎭' },
  people:       { bg: '#D1FAE5', text: '#065F46', icon: '👤' },
  institutions: { bg: '#DBEAFE', text: '#1D4ED8', icon: '🏛️' },
  economy:      { bg: '#CFFAFE', text: '#0E7490', icon: '📊' },
}

const CATEGORIES = Object.keys(CAT_COLORS)
const OPTION_LABELS = ['A', 'B', 'C', 'D']

// ── Shared helpers ─────────────────────────────────────────────────────────
function labelStyle(bg, text) {
  return {
    background: bg, color: text,
    borderRadius: 999, padding: '3px 10px',
    fontSize: '0.72rem', fontWeight: 700,
    display: 'inline-flex', alignItems: 'center', gap: 4,
  }
}

function inputStyle(multiline = false) {
  return {
    width: '100%',
    padding: '9px 12px',
    border: '1.5px solid #E2E8F0',
    borderRadius: 7,
    fontSize: '0.88rem',
    fontFamily: 'var(--font, inherit)',
    resize: multiline ? 'vertical' : 'none',
    outline: 'none',
    boxSizing: 'border-box',
    lineHeight: 1.5,
    minHeight: multiline ? 70 : undefined,
  }
}

// ── Question card in view mode ─────────────────────────────────────────────
function QuestionCard({ q, onEdit, onDelete }) {
  const cat = CAT_COLORS[q.category] || CAT_COLORS.culture
  const [confirmDel, setConfirmDel] = useState(false)

  return (
    <div style={{
      background: 'white',
      borderRadius: 10,
      padding: '14px 16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.07)',
      marginBottom: 10,
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10, marginBottom: 8 }}>
        <span style={labelStyle(cat.bg, cat.text)}>
          {cat.icon} {q.category}
        </span>
        <span style={{ fontSize: '0.7rem', color: '#94A3B8', flexShrink: 0 }}>{q.id}</span>
      </div>

      <p style={{ margin: '0 0 10px', fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.4 }}>
        {q.question}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 10 }}>
        {q.options.map((opt, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '5px 8px',
            background: i === q.answer ? '#D1FAE5' : '#F8FAFC',
            borderRadius: 6,
            border: i === q.answer ? '1px solid #A7F3D0' : '1px solid transparent',
          }}>
            <span style={{
              width: 20, height: 20, borderRadius: '50%',
              background: i === q.answer ? '#059669' : '#E2E8F0',
              color: i === q.answer ? 'white' : '#64748B',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.65rem', fontWeight: 800, flexShrink: 0,
            }}>
              {OPTION_LABELS[i]}
            </span>
            <span style={{ fontSize: '0.82rem', color: i === q.answer ? '#065F46' : '#475569' }}>
              {opt}
            </span>
          </div>
        ))}
      </div>

      {q.explanation && (
        <p style={{
          margin: '0 0 10px', fontSize: '0.78rem', color: '#64748B',
          background: '#F8FAFC', borderRadius: 6, padding: '7px 10px',
          borderLeft: '3px solid #CBD5E1',
        }}>
          {q.explanation}
        </p>
      )}

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={onEdit}
          style={{
            flex: 1, background: '#16A34A', color: 'white', border: 'none',
            borderRadius: 6, padding: '7px 14px',
            fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer',
          }}
        >
          ✏️ Edit
        </button>
        {confirmDel ? (
          <>
            <button
              onClick={() => { onDelete(); setConfirmDel(false) }}
              style={{
                background: '#16A34A', color: 'white', border: 'none',
                borderRadius: 6, padding: '7px 12px',
                fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer',
              }}
            >
              Confirm delete
            </button>
            <button
              onClick={() => setConfirmDel(false)}
              style={{
                background: '#F1F5F9', color: '#475569', border: 'none',
                borderRadius: 6, padding: '7px 10px',
                fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer',
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setConfirmDel(true)}
            style={{
              background: '#DCFCE7', color: '#16A34A', border: '1px solid #BBF7D0',
              borderRadius: 6, padding: '7px 12px',
              fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer',
            }}
          >
            🗑️
          </button>
        )}
      </div>
    </div>
  )
}

// ── Question card in edit mode ─────────────────────────────────────────────
function QuestionEditor({ q, onSave, onCancel }) {
  const [draft, setDraft] = useState(() =>
    ensureTranslations({ ...q, options: [...q.options] }, ['question', 'options', 'explanation'])
  )
  const [editLang, setEditLang] = useState('en')

  // ── helpers ──
  const set = (key, val) => setDraft(d => ({ ...d, [key]: val }))
  const setOpt = (i, val) => setDraft(d => {
    const opts = [...d.options]; opts[i] = val; return { ...d, options: opts }
  })

  // For non-English tabs, read/write via translations object
  const getT = (key) => {
    if (editLang === 'en') return editLang === 'en' && key === 'options' ? draft.options : draft[key]
    return draft.translations[editLang][key]
  }
  const getOpts = () => editLang === 'en' ? draft.options : (draft.translations[editLang].options || draft.options.map(() => ''))
  const setT = (key, val) => {
    if (editLang === 'en') { set(key, val); return }
    setDraft(d => ({
      ...d,
      translations: { ...d.translations, [editLang]: { ...d.translations[editLang], [key]: val } }
    }))
  }
  const setOptT = (i, val) => {
    if (editLang === 'en') { setOpt(i, val); return }
    setDraft(d => {
      const base = d.translations[editLang].options || d.options.map(() => '')
      const opts = [...base]; opts[i] = val
      return { ...d, translations: { ...d.translations, [editLang]: { ...d.translations[editLang], options: opts } } }
    })
  }

  // Detect which langs are missing translations
  const missingFor = TRANS_LANGS.filter(l => !draft.translations[l]?.question)

  return (
    <div style={{
      background: 'white', borderRadius: 10, padding: '16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.12)', marginBottom: 10,
      border: '2px solid #EF3340',
    }}>
      <div style={{ fontWeight: 700, marginBottom: 10, color: '#EF3340', fontSize: '0.85rem' }}>
        ✏️ Editing — {q.id}
      </div>

      <LangTabs lang={editLang} onChange={setEditLang} missingFor={missingFor} />

      {/* Category — only on English tab */}
      {editLang === 'en' && (
        <div style={{ marginBottom: 10 }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', display: 'block', marginBottom: 4 }}>
            Category
          </label>
          <select
            value={draft.category}
            onChange={e => set('category', e.target.value)}
            style={{ ...inputStyle(), minHeight: undefined, resize: 'none', height: 38 }}
          >
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      )}

      {/* Question */}
      <div style={{ marginBottom: 10 }}>
        <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', display: 'block', marginBottom: 4 }}>
          Question text {editLang !== 'en' && <span style={{ color: '#94A3B8' }}>(leave blank to use English)</span>}
        </label>
        <textarea
          value={getT('question') || ''}
          onChange={e => setT('question', e.target.value)}
          style={inputStyle(true)}
          rows={3}
          placeholder={editLang !== 'en' ? draft.question : undefined}
        />
      </div>

      {/* Options */}
      <div style={{ marginBottom: 10 }}>
        <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', display: 'block', marginBottom: 4 }}>
          Answer options {editLang === 'en' ? '(select the correct answer)' : <span style={{ color: '#94A3B8' }}>(leave blank to use English)</span>}
        </label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {draft.options.map((_, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {editLang === 'en' && (
                <input
                  type="radio"
                  name="correct"
                  checked={draft.answer === i}
                  onChange={() => set('answer', i)}
                  style={{ flexShrink: 0 }}
                />
              )}
              <span style={{
                width: 22, height: 22, borderRadius: '50%',
                background: draft.answer === i ? '#16A34A' : '#E2E8F0',
                color: draft.answer === i ? 'white' : '#64748B',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.65rem', fontWeight: 800, flexShrink: 0,
              }}>
                {OPTION_LABELS[i]}
              </span>
              <input
                type="text"
                value={getOpts()[i] || ''}
                onChange={e => setOptT(i, e.target.value)}
                style={{ ...inputStyle(), height: 36 }}
                placeholder={editLang !== 'en' ? draft.options[i] : `Option ${OPTION_LABELS[i]}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Explanation */}
      <div style={{ marginBottom: 14 }}>
        <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', display: 'block', marginBottom: 4 }}>
          Explanation {editLang !== 'en' && <span style={{ color: '#94A3B8' }}>(leave blank to use English)</span>}
        </label>
        <textarea
          value={getT('explanation') || ''}
          onChange={e => setT('explanation', e.target.value)}
          style={inputStyle(true)}
          rows={3}
          placeholder={editLang !== 'en' ? (draft.explanation || 'Explanation…') : 'Explanation shown after answering…'}
        />
      </div>

      {/* Link — only on English tab */}
      {editLang === 'en' && (
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', display: 'block', marginBottom: 4 }}>
            Learn-more URL (optional)
          </label>
          <input
            type="url"
            value={draft.link || ''}
            onChange={e => set('link', e.target.value || null)}
            style={{ ...inputStyle(), height: 36 }}
            placeholder="https://…"
          />
        </div>
      )}

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={() => onSave(draft)}
          style={{
            flex: 1, background: '#059669', color: 'white', border: 'none',
            borderRadius: 7, padding: '10px', fontSize: '0.88rem',
            fontWeight: 700, cursor: 'pointer',
          }}
        >
          ✓ Save changes
        </button>
        <button
          onClick={onCancel}
          style={{
            flex: 1, background: '#F1F5F9', color: '#475569', border: 'none',
            borderRadius: 7, padding: '10px', fontSize: '0.88rem',
            fontWeight: 600, cursor: 'pointer',
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

function newBlankQuestion(existingIds) {
  const base = 'custom_'
  let n = 1
  while (existingIds.includes(`${base}${String(n).padStart(3, '0')}`)) n++
  return {
    id: `${base}${String(n).padStart(3, '0')}`,
    category: 'culture',
    question: '',
    options: ['', '', '', ''],
    answer: 0,
    explanation: '',
    link: null,
  }
}

// ── Main component ─────────────────────────────────────────────────────────
export default function AdminQuestions() {
  const [questions, setQuestions] = useState(QUESTIONS)
  const [editingId, setEditingId] = useState(null)
  const [addingNew, setAddingNew] = useState(false)
  const [newDraft, setNewDraft]   = useState(null)
  const [saving, setSaving]       = useState(false)
  const [saved, setSaved]         = useState(false)
  const [error, setError]         = useState(null)
  const [filter, setFilter]       = useState('all')
  const [isOverride, setIsOverride] = useState(false)

  // Load server overrides on mount
  useEffect(() => {
    fetch('/api/content')
      .then(r => r.ok ? r.json() : {})
      .then(data => {
        if (data.questions?.length > 0) {
          setQuestions(data.questions)
          setIsOverride(true)
        }
      })
      .catch(() => {})
  }, [])

  const saveToServer = async (updatedQuestions) => {
    setSaving(true); setError(null)
    try {
      const r = await fetch('/api/content')
      const current = r.ok ? await r.json() : {}
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': ADMIN_PASSWORD,
        },
        body: JSON.stringify({ ...current, questions: updatedQuestions }),
      })
      if (!res.ok) throw new Error('Save failed')
      setSaved(true)
      setIsOverride(true)
      setTimeout(() => setSaved(false), 2500)
    } catch (e) {
      setError('Could not save — is the Express server running?')
    } finally {
      setSaving(false)
    }
  }

  const handleSave = (updatedQ) => {
    const updated = questions.map(q => q.id === updatedQ.id ? updatedQ : q)
    setQuestions(updated)
    setEditingId(null)
    saveToServer(updated)
  }

  const handleDelete = (id) => {
    const updated = questions.filter(q => q.id !== id)
    setQuestions(updated)
    saveToServer(updated)
  }

  const handleAddNew = () => {
    const blank = newBlankQuestion(questions.map(q => q.id))
    setNewDraft(blank)
    setAddingNew(true)
    setEditingId(null)
  }

  const handleSaveNew = (q) => {
    // Validate minimum fields
    if (!q.question.trim()) return
    const updated = [...questions, q]
    setQuestions(updated)
    setAddingNew(false)
    setNewDraft(null)
    saveToServer(updated)
  }

  const resetToDefaults = async () => {
    if (!confirm('Reset ALL questions to the original defaults? This cannot be undone.')) return
    const r = await fetch('/api/content').then(r => r.json()).catch(() => ({}))
    const { questions: _, ...rest } = r
    await fetch('/api/content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': ADMIN_PASSWORD },
      body: JSON.stringify(rest),
    })
    setQuestions(QUESTIONS)
    setIsOverride(false)
  }

  const filtered = filter === 'all' ? questions : questions.filter(q => q.category === filter)

  return (
    <div>
      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#64748B' }}>
          {questions.length} questions
        </span>
        {isOverride && (
          <span style={{
            background: '#FEF3C7', color: '#B45309',
            borderRadius: 99, padding: '2px 8px', fontSize: '0.72rem', fontWeight: 700,
          }}>
            ✏️ Custom content active
          </span>
        )}
        {saved && (
          <span style={{ color: '#059669', fontSize: '0.8rem', fontWeight: 700 }}>✓ Saved!</span>
        )}
        {saving && (
          <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>Saving…</span>
        )}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
          {isOverride && (
            <button
              onClick={resetToDefaults}
              style={{
                background: '#F1F5F9', color: '#EF4444', border: 'none',
                borderRadius: 6, padding: '5px 10px', fontSize: '0.75rem',
                fontWeight: 600, cursor: 'pointer',
              }}
            >
              Reset to defaults
            </button>
          )}
          <button
            onClick={handleAddNew}
            disabled={addingNew}
            style={{
              background: '#059669', color: 'white', border: 'none',
              borderRadius: 6, padding: '5px 12px', fontSize: '0.75rem',
              fontWeight: 700, cursor: addingNew ? 'default' : 'pointer',
              opacity: addingNew ? 0.5 : 1,
            }}
          >
            + Add question
          </button>
        </div>
      </div>

      {error && (
        <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: 8, padding: '10px 14px', marginBottom: 12, color: '#B91C1C', fontSize: '0.82rem' }}>
          {error}
        </div>
      )}

      {/* Category filter */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
        {['all', ...CATEGORIES].map(cat => {
          const isActive = filter === cat
          const meta = CAT_COLORS[cat]
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '5px 12px',
                borderRadius: 99,
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontWeight: 600,
                background: isActive ? (meta?.bg || '#1E293B') : '#F1F5F9',
                color: isActive ? (meta?.text || 'white') : '#64748B',
              }}
            >
              {meta?.icon} {cat === 'all' ? 'All' : cat}
            </button>
          )
        })}
      </div>

      {/* New question form */}
      {addingNew && newDraft && (
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontWeight: 700, fontSize: '0.82rem', color: '#059669', marginBottom: 8 }}>
            ➕ New question
          </div>
          <QuestionEditor
            q={newDraft}
            onSave={handleSaveNew}
            onCancel={() => { setAddingNew(false); setNewDraft(null) }}
          />
        </div>
      )}

      {/* Question list */}
      {filtered.map(q => (
        editingId === q.id
          ? <QuestionEditor key={q.id} q={q} onSave={handleSave} onCancel={() => setEditingId(null)} />
          : <QuestionCard key={q.id} q={q} onEdit={() => setEditingId(q.id)} onDelete={() => handleDelete(q.id)} />
      ))}
    </div>
  )
}
