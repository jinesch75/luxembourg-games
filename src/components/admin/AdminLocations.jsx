/**
 * AdminLocations — view and edit Geo game locations.
 */

import { useState, useEffect } from 'react'
import { LOCATIONS } from '../../games/geo/data/locations'

const ADMIN_PASSWORD = 'biergerpakt'

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
    minHeight: multiline ? 70 : undefined,
  }
}

function Label({ children }) {
  return (
    <label style={{ fontSize: '0.73rem', fontWeight: 600, color: '#64748B', display: 'block', marginBottom: 3 }}>
      {children}
    </label>
  )
}

// ── Location view card ─────────────────────────────────────────────────────
function LocationCard({ loc, onEdit }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div style={{
      background: 'white', borderRadius: 10, padding: '14px 16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.07)', marginBottom: 10,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <span style={{ fontSize: '1.5rem' }}>{loc.emoji}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{loc.name}</div>
          <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>
            {loc.region} · {loc.coords[0].toFixed(4)}, {loc.coords[1].toFixed(4)} · {loc.id}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <button
            onClick={() => setExpanded(e => !e)}
            style={{
              background: '#F1F5F9', color: '#475569', border: 'none',
              borderRadius: 6, padding: '5px 10px',
              fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer',
            }}
          >
            {expanded ? '▲' : '▼'}
          </button>
          <button
            onClick={onEdit}
            style={{
              background: '#EF3340', color: 'white', border: 'none',
              borderRadius: 6, padding: '5px 10px',
              fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer',
            }}
          >
            ✏️ Edit
          </button>
        </div>
      </div>

      {expanded && (
        <div style={{ marginTop: 8 }}>
          <div style={{ marginBottom: 8 }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', marginBottom: 3 }}>Clue</div>
            <p style={{ margin: 0, fontSize: '0.82rem', color: '#475569', lineHeight: 1.5, background: '#F8FAFC', padding: '8px 10px', borderRadius: 6, borderLeft: '3px solid #CBD5E1' }}>
              {loc.clue}
            </p>
          </div>
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', marginBottom: 3 }}>Fun fact</div>
            <p style={{ margin: 0, fontSize: '0.82rem', color: '#475569', lineHeight: 1.5, background: '#F0FDF4', padding: '8px 10px', borderRadius: 6, borderLeft: '3px solid #A7F3D0' }}>
              {loc.fact}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Location editor ────────────────────────────────────────────────────────
function LocationEditor({ loc, onSave, onCancel }) {
  const [draft, setDraft] = useState({ ...loc, coords: [...loc.coords] })
  const set = (key, val) => setDraft(d => ({ ...d, [key]: val }))

  return (
    <div style={{
      background: 'white', borderRadius: 10, padding: 16,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12)', marginBottom: 10,
      border: '2px solid #EF3340',
    }}>
      <div style={{ fontWeight: 700, marginBottom: 14, color: '#EF3340', fontSize: '0.85rem' }}>
        ✏️ Editing — {loc.id}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
        <div>
          <Label>Name</Label>
          <input type="text" value={draft.name} onChange={e => set('name', e.target.value)} style={{ ...inputStyle(), height: 36 }} />
        </div>
        <div>
          <Label>Emoji icon</Label>
          <input type="text" value={draft.emoji} onChange={e => set('emoji', e.target.value)} style={{ ...inputStyle(), height: 36 }} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 10 }}>
        <div>
          <Label>Region</Label>
          <input type="text" value={draft.region} onChange={e => set('region', e.target.value)} style={{ ...inputStyle(), height: 36 }} />
        </div>
        <div>
          <Label>Latitude</Label>
          <input type="number" step="0.0001" value={draft.coords[0]}
            onChange={e => setDraft(d => ({ ...d, coords: [parseFloat(e.target.value) || 0, d.coords[1]] }))}
            style={{ ...inputStyle(), height: 36 }} />
        </div>
        <div>
          <Label>Longitude</Label>
          <input type="number" step="0.0001" value={draft.coords[1]}
            onChange={e => setDraft(d => ({ ...d, coords: [d.coords[0], parseFloat(e.target.value) || 0] }))}
            style={{ ...inputStyle(), height: 36 }} />
        </div>
      </div>

      <div style={{ marginBottom: 10 }}>
        <Label>Clue text (shown during the game — don't give away the name!)</Label>
        <textarea value={draft.clue} onChange={e => set('clue', e.target.value)} style={inputStyle(true)} rows={4} />
      </div>

      <div style={{ marginBottom: 10 }}>
        <Label>Fun fact (shown after correct answer)</Label>
        <textarea value={draft.fact} onChange={e => set('fact', e.target.value)} style={inputStyle(true)} rows={3} />
      </div>

      <div style={{ marginBottom: 16 }}>
        <Label>Learn-more URL (optional)</Label>
        <input type="url" value={draft.link || ''} onChange={e => set('link', e.target.value || null)}
          style={{ ...inputStyle(), height: 36 }} placeholder="https://…" />
      </div>

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
export default function AdminLocations() {
  const [locations, setLocations] = useState(LOCATIONS)
  const [editingId, setEditingId] = useState(null)
  const [saving, setSaving]       = useState(false)
  const [saved, setSaved]         = useState(false)
  const [error, setError]         = useState(null)
  const [isOverride, setIsOverride] = useState(false)

  useEffect(() => {
    fetch('/api/content')
      .then(r => r.ok ? r.json() : {})
      .then(data => {
        if (data.locations?.length > 0) { setLocations(data.locations); setIsOverride(true) }
      })
      .catch(() => {})
  }, [])

  const saveToServer = async (updatedLocations) => {
    setSaving(true); setError(null)
    try {
      const r = await fetch('/api/content')
      const current = r.ok ? await r.json() : {}
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'x-admin-password': ADMIN_PASSWORD },
        body: JSON.stringify({ ...current, locations: updatedLocations }),
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
    const list = locations.map(l => l.id === updated.id ? updated : l)
    setLocations(list); setEditingId(null); saveToServer(list)
  }

  const resetToDefaults = async () => {
    if (!confirm('Reset ALL locations to the original defaults?')) return
    const r = await fetch('/api/content').then(r => r.json()).catch(() => ({}))
    const { locations: _, ...rest } = r
    await fetch('/api/content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': ADMIN_PASSWORD },
      body: JSON.stringify(rest),
    })
    setLocations(LOCATIONS); setIsOverride(false)
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#64748B' }}>
          {locations.length} locations
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

      {locations.map(loc => (
        editingId === loc.id
          ? <LocationEditor key={loc.id} loc={loc} onSave={handleSave} onCancel={() => setEditingId(null)} />
          : <LocationCard key={loc.id} loc={loc} onEdit={() => setEditingId(loc.id)} />
      ))}
    </div>
  )
}
