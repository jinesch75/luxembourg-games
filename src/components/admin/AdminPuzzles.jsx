/**
 * AdminPuzzles — view and edit Connect game puzzles.
 */

import { useState, useEffect } from 'react'
import { PUZZLES, COLOR_META } from '../../games/connect/data/puzzles'

const ADMIN_PASSWORD = 'biergerpakt'
const COLORS = ['yellow', 'green', 'blue', 'purple']

function inputStyle(multiline = false) {
  return {
    width: '100%',
    padding: '8px 11px',
    border: '1.5px solid #E2E8F0',
    borderRadius: 7,
    fontSize: '0.85rem',
    fontFamily: 'var(--font, inherit)',
    resize: multiline ? 'vertical' : 'none',
    outline: 'none',
    boxSizing: 'border-box',
    lineHeight: 1.5,
    minHeight: multiline ? 60 : undefined,
  }
}

// ── Puzzle view card ───────────────────────────────────────────────────────
function PuzzleCard({ puzzle, onEdit }) {
  return (
    <div style={{
      background: 'white', borderRadius: 10, padding: '14px 16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.07)', marginBottom: 12,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{puzzle.title}</div>
          <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: 2 }}>{puzzle.id}</div>
        </div>
        <button
          onClick={onEdit}
          style={{
            background: '#EF3340', color: 'white', border: 'none',
            borderRadius: 6, padding: '6px 12px',
            fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer',
          }}
        >
          ✏️ Edit
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {puzzle.groups.map(group => {
          const meta = COLOR_META[group.color]
          return (
            <div key={group.color} style={{
              background: meta.bg,
              border: `1px solid ${meta.border}`,
              borderRadius: 8, padding: '8px 12px',
            }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: meta.text, marginBottom: 4 }}>
                {group.color.toUpperCase()} — {group.title}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {group.items.map((item, i) => (
                  <span key={i} style={{
                    background: 'white', border: `1px solid ${meta.border}`,
                    borderRadius: 5, padding: '2px 8px',
                    fontSize: '0.78rem', color: meta.text, fontWeight: 500,
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── Puzzle editor ──────────────────────────────────────────────────────────
function PuzzleEditor({ puzzle, onSave, onCancel }) {
  const [draft, setDraft] = useState(JSON.parse(JSON.stringify(puzzle)))

  const setTitle = val => setDraft(d => ({ ...d, title: val }))
  const setGroupTitle = (ci, val) => setDraft(d => {
    const groups = d.groups.map((g, i) => i === ci ? { ...g, title: val } : g)
    return { ...d, groups }
  })
  const setItem = (ci, ii, val) => setDraft(d => {
    const groups = d.groups.map((g, i) => {
      if (i !== ci) return g
      const items = [...g.items]; items[ii] = val
      return { ...g, items }
    })
    return { ...d, groups }
  })

  return (
    <div style={{
      background: 'white', borderRadius: 10, padding: 16,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12)', marginBottom: 12,
      border: '2px solid #EF3340',
    }}>
      <div style={{ fontWeight: 700, marginBottom: 14, color: '#EF3340', fontSize: '0.85rem' }}>
        ✏️ Editing — {puzzle.id}
      </div>

      {/* Puzzle title */}
      <div style={{ marginBottom: 14 }}>
        <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', display: 'block', marginBottom: 4 }}>
          Puzzle title
        </label>
        <input
          type="text"
          value={draft.title}
          onChange={e => setTitle(e.target.value)}
          style={{ ...inputStyle(), height: 36 }}
        />
      </div>

      {/* Groups */}
      {draft.groups.map((group, ci) => {
        const meta = COLOR_META[group.color]
        return (
          <div key={group.color} style={{
            background: meta.bg, border: `1px solid ${meta.border}`,
            borderRadius: 8, padding: '12px', marginBottom: 12,
          }}>
            <div style={{
              fontSize: '0.72rem', fontWeight: 700, color: meta.text,
              textTransform: 'uppercase', marginBottom: 8,
            }}>
              {group.color} group
            </div>

            <div style={{ marginBottom: 8 }}>
              <label style={{ fontSize: '0.72rem', fontWeight: 600, color: meta.text, display: 'block', marginBottom: 3 }}>
                Category title (shown on reveal)
              </label>
              <input
                type="text"
                value={group.title}
                onChange={e => setGroupTitle(ci, e.target.value)}
                style={{ ...inputStyle(), height: 34, background: 'white' }}
              />
            </div>

            <label style={{ fontSize: '0.72rem', fontWeight: 600, color: meta.text, display: 'block', marginBottom: 4 }}>
              4 items (one per box)
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
              {group.items.map((item, ii) => (
                <input
                  key={ii}
                  type="text"
                  value={item}
                  onChange={e => setItem(ci, ii, e.target.value)}
                  style={{ ...inputStyle(), height: 34, background: 'white', padding: '6px 10px' }}
                  placeholder={`Item ${ii + 1}`}
                />
              ))}
            </div>
          </div>
        )
      })}

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={() => onSave(draft)}
          style={{
            flex: 1, background: '#059669', color: 'white', border: 'none',
            borderRadius: 7, padding: 10, fontSize: '0.88rem', fontWeight: 700, cursor: 'pointer',
          }}
        >
          ✓ Save changes
        </button>
        <button
          onClick={onCancel}
          style={{
            flex: 1, background: '#F1F5F9', color: '#475569', border: 'none',
            borderRadius: 7, padding: 10, fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer',
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────────────────
export default function AdminPuzzles() {
  const [puzzles, setPuzzles]   = useState(PUZZLES)
  const [editingId, setEditingId] = useState(null)
  const [saving, setSaving]     = useState(false)
  const [saved, setSaved]       = useState(false)
  const [error, setError]       = useState(null)
  const [isOverride, setIsOverride] = useState(false)

  useEffect(() => {
    fetch('/api/content')
      .then(r => r.ok ? r.json() : {})
      .then(data => {
        if (data.puzzles?.length > 0) { setPuzzles(data.puzzles); setIsOverride(true) }
      })
      .catch(() => {})
  }, [])

  const saveToServer = async (updatedPuzzles) => {
    setSaving(true); setError(null)
    try {
      const r = await fetch('/api/content')
      const current = r.ok ? await r.json() : {}
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'x-admin-password': ADMIN_PASSWORD },
        body: JSON.stringify({ ...current, puzzles: updatedPuzzles }),
      })
      if (!res.ok) throw new Error()
      setSaved(true); setIsOverride(true)
      setTimeout(() => setSaved(false), 2500)
    } catch {
      setError('Could not save — is the Express server running?')
    } finally {
      setSaving(false)
    }
  }

  const handleSave = (updated) => {
    const list = puzzles.map(p => p.id === updated.id ? updated : p)
    setPuzzles(list); setEditingId(null); saveToServer(list)
  }

  const resetToDefaults = async () => {
    if (!confirm('Reset ALL puzzles to the original defaults?')) return
    const r = await fetch('/api/content').then(r => r.json()).catch(() => ({}))
    const { puzzles: _, ...rest } = r
    await fetch('/api/content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': ADMIN_PASSWORD },
      body: JSON.stringify(rest),
    })
    setPuzzles(PUZZLES); setIsOverride(false)
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#64748B' }}>
          {puzzles.length} weekly puzzles
        </span>
        {isOverride && (
          <span style={{ background: '#FEF3C7', color: '#B45309', borderRadius: 99, padding: '2px 8px', fontSize: '0.72rem', fontWeight: 700 }}>
            ✏️ Custom content active
          </span>
        )}
        {saved && <span style={{ color: '#059669', fontSize: '0.8rem', fontWeight: 700 }}>✓ Saved!</span>}
        {saving && <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>Saving…</span>}
        {isOverride && (
          <button onClick={resetToDefaults} style={{ marginLeft: 'auto', background: '#F1F5F9', color: '#EF4444', border: 'none', borderRadius: 6, padding: '5px 10px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}>
            Reset to defaults
          </button>
        )}
      </div>

      {error && (
        <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: 8, padding: '10px 14px', marginBottom: 12, color: '#B91C1C', fontSize: '0.82rem' }}>
          {error}
        </div>
      )}

      {puzzles.map(puzzle => (
        editingId === puzzle.id
          ? <PuzzleEditor key={puzzle.id} puzzle={puzzle} onSave={handleSave} onCancel={() => setEditingId(null)} />
          : <PuzzleCard key={puzzle.id} puzzle={puzzle} onEdit={() => setEditingId(puzzle.id)} />
      ))}
    </div>
  )
}
