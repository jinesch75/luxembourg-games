/**
 * AdminPlaces — view and edit all famous-places entries.
 * Loads current content from /api/content and saves via PUT /api/content.
 * Falls back to the bundled static data if the API is unavailable.
 */

import { useState, useEffect } from 'react'
import { PLACES } from '../../games/places/data/places'

const ADMIN_PASSWORD = 'xxx'

const LEVELS = ['newcomer', 'explorer', 'resident', 'citizen', 'ambassador']
const LEVEL_META = {
  newcomer:   { icon: '🌱', label: 'Newcomer',   bg: '#F3F4F6', text: '#6B7280' },
  explorer:   { icon: '🏘️', label: 'Explorer',   bg: '#D1FAE5', text: '#059669' },
  resident:   { icon: '🌆', label: 'Resident',   bg: '#DBEAFE', text: '#2563EB' },
  citizen:    { icon: '🏛️', label: 'Citizen',    bg: '#F3E8FF', text: '#7C3AED' },
  ambassador: { icon: '⭐', label: 'Ambassador', bg: '#FEF3C7', text: '#D97706' },
}

const CAT_COLORS = {
  castle:    { bg: '#FEF3C7', text: '#D97706', icon: '🏰' },
  religious: { bg: '#F3E8FF', text: '#7C3AED', icon: '⛪' },
  political: { bg: '#DBEAFE', text: '#1D4ED8', icon: '🏛️' },
  museum:    { bg: '#FCE7F3', text: '#BE185D', icon: '🎨' },
  landmark:  { bg: '#D1FAE5', text: '#065F46', icon: '📍' },
  historical: { bg: '#FEE2E2', text: '#DC2626', icon: '📜' },
  nature:    { bg: '#CFFAFE', text: '#0E7490', icon: '🌿' },
  bridge:    { bg: '#E0E7FF', text: '#4338CA', icon: '🌉' },
}
const CATEGORIES = Object.keys(CAT_COLORS)
const OPTION_LABELS = ['A', 'B', 'C', 'D']

// ── Styles ─────────────────────────────────────────────────────────────────
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

// ── Wikipedia image thumbnail (runtime fetch) ─────────────────────────────
function WikiThumb({ wikiTitle, imageUrl, noPhoto, photoPos, size = 80 }) {
  const [src, setSrc] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    setSrc(null); setError(false)
    if (noPhoto) { setError(true); return }
    if (imageUrl) { setSrc(imageUrl); return }
    if (!wikiTitle) { setError(true); return }
    let cancelled = false
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wikiTitle)}`)
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(data => {
        if (!cancelled) {
          const url = data.thumbnail?.source || data.originalimage?.source
          if (url) setSrc(url); else setError(true)
        }
      })
      .catch(() => { if (!cancelled) setError(true) })
    return () => { cancelled = true }
  }, [wikiTitle, imageUrl, noPhoto])

  const style = {
    width: size,
    height: size,
    borderRadius: 10,
    objectFit: 'cover',
    objectPosition: photoPos || 'center center',
    background: '#F1F5F9',
    border: '2px solid #E2E8F0',
    flexShrink: 0,
  }

  if (error || !src) {
    return (
      <div style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size * 0.35,
        color: '#94A3B8',
      }}>
        {error ? '🏛️' : '⏳'}
      </div>
    )
  }

  return <img src={src} alt="" style={style} />
}

// ── Place card (view mode) ───────────────────────────────────────────────
function PlaceCard({ p, onEdit }) {
  const cat = CAT_COLORS[p.category] || CAT_COLORS.landmark
  const lvl = LEVEL_META[p.level] || LEVEL_META.newcomer

  return (
    <div style={{
      background: 'white',
      borderRadius: 12,
      padding: '16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.07)',
      marginBottom: 10,
    }}>
      {/* Top row: image + name + badges */}
      <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 12 }}>
        <WikiThumb
          wikiTitle={p.wikiTitle}
          imageUrl={p.imageUrl}
          noPhoto={p.noPhoto}
          photoPos={p.photoPos}
          size={80}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: '1.05rem',
            fontWeight: 700,
            marginBottom: 6,
            color: '#1E293B',
            lineHeight: 1.3,
          }}>
            {p.name}
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <span style={{
              background: lvl.bg, color: lvl.text,
              borderRadius: 99, padding: '2px 9px',
              fontSize: '0.7rem', fontWeight: 700,
              display: 'inline-flex', alignItems: 'center', gap: 3,
            }}>
              {lvl.icon} {lvl.label}
            </span>
            <span style={{
              background: cat.bg, color: cat.text,
              borderRadius: 99, padding: '2px 9px',
              fontSize: '0.7rem', fontWeight: 700,
              display: 'inline-flex', alignItems: 'center', gap: 3,
            }}>
              {cat.icon} {p.category}
            </span>
          </div>
          <div style={{ fontSize: '0.68rem', color: '#94A3B8', marginTop: 4 }}>{p.id}</div>
        </div>
      </div>

      {/* Hint */}
      <p style={{
        margin: '0 0 8px', fontSize: '0.82rem', color: '#475569',
        background: '#FFFBEB', borderRadius: 6, padding: '6px 10px',
        borderLeft: '3px solid #F59E0B',
      }}>
        <strong>Hint:</strong> {p.hint}
      </p>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3, marginBottom: 8 }}>
        {p.options.map((opt, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '4px 8px',
            background: i === p.answer ? '#D1FAE5' : '#F8FAFC',
            borderRadius: 5,
            border: i === p.answer ? '1px solid #A7F3D0' : '1px solid transparent',
          }}>
            <span style={{
              width: 18, height: 18, borderRadius: '50%',
              background: i === p.answer ? '#059669' : '#E2E8F0',
              color: i === p.answer ? 'white' : '#64748B',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.6rem', fontWeight: 800, flexShrink: 0,
            }}>
              {OPTION_LABELS[i]}
            </span>
            <span style={{ fontSize: '0.8rem', color: i === p.answer ? '#065F46' : '#475569' }}>
              {opt}
            </span>
          </div>
        ))}
      </div>

      {/* Explanation */}
      {p.explanation && (
        <p style={{
          margin: '0 0 10px', fontSize: '0.76rem', color: '#64748B',
          background: '#F8FAFC', borderRadius: 6, padding: '6px 10px',
          borderLeft: '3px solid #CBD5E1',
        }}>
          {p.explanation}
        </p>
      )}

      <button
        onClick={onEdit}
        style={{
          width: '100%', background: '#16A34A', color: 'white', border: 'none',
          borderRadius: 7, padding: '8px 14px',
          fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer',
        }}
      >
        ✏️ Edit
      </button>
    </div>
  )
}

// ── Place editor ─────────────────────────────────────────────────────────
function PlaceEditor({ p, onSave, onCancel }) {
  const [draft, setDraft] = useState(() => ({
    ...p,
    options: [...p.options],
  }))

  const set = (key, val) => setDraft(d => ({ ...d, [key]: val }))
  const setOpt = (i, val) => setDraft(d => {
    const opts = [...d.options]; opts[i] = val; return { ...d, options: opts }
  })

  return (
    <div style={{
      background: 'white', borderRadius: 12, padding: '16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.12)', marginBottom: 10,
      border: '2px solid #EF3340',
    }}>
      <div style={{ fontWeight: 700, marginBottom: 12, color: '#EF3340', fontSize: '0.85rem' }}>
        ✏️ Editing — {p.name}
      </div>

      {/* Image preview while editing */}
      <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 14 }}>
        <WikiThumb
          wikiTitle={draft.wikiTitle}
          imageUrl={draft.imageUrl}
          noPhoto={draft.noPhoto}
          photoPos={draft.photoPos}
          size={90}
        />
        <div style={{ flex: 1 }}>
          {/* Name */}
          <div style={{ marginBottom: 8 }}>
            <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', display: 'block', marginBottom: 3 }}>
              Name
            </label>
            <input
              type="text"
              value={draft.name}
              onChange={e => set('name', e.target.value)}
              style={{ ...inputStyle(), height: 36 }}
            />
          </div>
          {/* Wiki Title */}
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', display: 'block', marginBottom: 3 }}>
              Wikipedia title <span style={{ color: '#94A3B8', fontWeight: 400 }}>(for photo lookup)</span>
            </label>
            <input
              type="text"
              value={draft.wikiTitle || ''}
              onChange={e => set('wikiTitle', e.target.value)}
              style={{ ...inputStyle(), height: 36 }}
              placeholder="e.g. Vianden_Castle"
            />
          </div>
        </div>
      </div>

      {/* Level + Category row */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', display: 'block', marginBottom: 3 }}>
            Level
          </label>
          <select
            value={draft.level}
            onChange={e => set('level', e.target.value)}
            style={{ ...inputStyle(), height: 38, minHeight: undefined, resize: 'none' }}
          >
            {LEVELS.map(l => (
              <option key={l} value={l}>{LEVEL_META[l].icon} {LEVEL_META[l].label}</option>
            ))}
          </select>
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', display: 'block', marginBottom: 3 }}>
            Category
          </label>
          <select
            value={draft.category}
            onChange={e => set('category', e.target.value)}
            style={{ ...inputStyle(), height: 38, minHeight: undefined, resize: 'none' }}
          >
            {CATEGORIES.map(c => (
              <option key={c} value={c}>{CAT_COLORS[c].icon} {c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Image overrides */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', display: 'block', marginBottom: 3 }}>
            Direct image URL <span style={{ color: '#94A3B8', fontWeight: 400 }}>(optional, overrides Wikipedia)</span>
          </label>
          <input
            type="url"
            value={draft.imageUrl || ''}
            onChange={e => set('imageUrl', e.target.value || undefined)}
            style={{ ...inputStyle(), height: 36 }}
            placeholder="https://…"
          />
        </div>
        <div style={{ flex: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={!!draft.noPhoto}
              onChange={e => set('noPhoto', e.target.checked || undefined)}
            />
            No photo
          </label>
        </div>
      </div>

      {/* Photo position */}
      <div style={{ marginBottom: 10 }}>
        <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', display: 'block', marginBottom: 3 }}>
          Photo position <span style={{ color: '#94A3B8', fontWeight: 400 }}>(CSS object-position, e.g. "center 15%")</span>
        </label>
        <input
          type="text"
          value={draft.photoPos || ''}
          onChange={e => set('photoPos', e.target.value || undefined)}
          style={{ ...inputStyle(), height: 36 }}
          placeholder="center center"
        />
      </div>

      {/* Hint */}
      <div style={{ marginBottom: 10 }}>
        <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', display: 'block', marginBottom: 3 }}>
          Hint
        </label>
        <textarea
          value={draft.hint || ''}
          onChange={e => set('hint', e.target.value)}
          style={inputStyle(true)}
          rows={2}
          placeholder="Hint shown before guessing…"
        />
      </div>

      {/* Options */}
      <div style={{ marginBottom: 10 }}>
        <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', display: 'block', marginBottom: 3 }}>
          Answer options (select the correct answer)
        </label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {draft.options.map((opt, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input
                type="radio"
                name="correct-answer"
                checked={draft.answer === i}
                onChange={() => set('answer', i)}
                style={{ flexShrink: 0 }}
              />
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
                value={opt}
                onChange={e => setOpt(i, e.target.value)}
                style={{ ...inputStyle(), height: 36 }}
                placeholder={`Option ${OPTION_LABELS[i]}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Explanation */}
      <div style={{ marginBottom: 14 }}>
        <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', display: 'block', marginBottom: 3 }}>
          Explanation
        </label>
        <textarea
          value={draft.explanation || ''}
          onChange={e => set('explanation', e.target.value)}
          style={inputStyle(true)}
          rows={3}
          placeholder="Explanation shown after answering…"
        />
      </div>

      {/* Buttons */}
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

// ── Search bar ────────────────────────────────────────────────────────────
function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Search by name…"
      style={{
        width: '100%',
        padding: '10px 14px',
        border: '1.5px solid #E2E8F0',
        borderRadius: 9,
        fontSize: '0.9rem',
        outline: 'none',
        boxSizing: 'border-box',
        marginBottom: 14,
      }}
    />
  )
}

// ── Main component ────────────────────────────────────────────────────────
export default function AdminPlaces() {
  const [places, setPlaces]       = useState(PLACES)
  const [editingId, setEditingId] = useState(null)
  const [saving, setSaving]       = useState(false)
  const [saved, setSaved]         = useState(false)
  const [error, setError]         = useState(null)
  const [isOverride, setIsOverride] = useState(false)
  const [levelFilter, setLevelFilter] = useState('all')
  const [catFilter, setCatFilter]     = useState('all')
  const [search, setSearch]           = useState('')

  // Load server overrides on mount
  useEffect(() => {
    fetch('/api/content')
      .then(r => r.ok ? r.json() : {})
      .then(data => {
        if (data.places?.length > 0) {
          setPlaces(data.places)
          setIsOverride(true)
        }
      })
      .catch(() => {})
  }, [])

  const saveToServer = async (updatedPlaces) => {
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
        body: JSON.stringify({ ...current, places: updatedPlaces }),
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

  const handleSave = (updatedP) => {
    const updated = places.map(p => p.id === updatedP.id ? updatedP : p)
    setPlaces(updated)
    setEditingId(null)
    saveToServer(updated)
  }

  const resetToDefaults = async () => {
    if (!confirm('Reset ALL famous places to the original defaults? This cannot be undone.')) return
    const r = await fetch('/api/content').then(r => r.json()).catch(() => ({}))
    const { places: _, ...rest } = r
    await fetch('/api/content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': ADMIN_PASSWORD },
      body: JSON.stringify(rest),
    })
    setPlaces(PLACES)
    setIsOverride(false)
  }

  // Apply filters
  const filtered = places.filter(p => {
    if (levelFilter !== 'all' && p.level !== levelFilter) return false
    if (catFilter !== 'all' && p.category !== catFilter) return false
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <div>
      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#64748B' }}>
          {places.length} places · {filtered.length} shown
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
        <div style={{ marginLeft: 'auto' }}>
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
        </div>
      </div>

      {error && (
        <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: 8, padding: '10px 14px', marginBottom: 12, color: '#B91C1C', fontSize: '0.82rem' }}>
          {error}
        </div>
      )}

      {/* Search */}
      <SearchBar value={search} onChange={setSearch} />

      {/* Level filter */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
        {['all', ...LEVELS].map(l => {
          const isActive = levelFilter === l
          const meta = LEVEL_META[l]
          return (
            <button
              key={l}
              onClick={() => setLevelFilter(l)}
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
              {meta?.icon} {l === 'all' ? 'All levels' : meta?.label}
            </button>
          )
        })}
      </div>

      {/* Category filter */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
        {['all', ...CATEGORIES].map(cat => {
          const isActive = catFilter === cat
          const meta = CAT_COLORS[cat]
          return (
            <button
              key={cat}
              onClick={() => setCatFilter(cat)}
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
              {meta?.icon} {cat === 'all' ? 'All categories' : cat}
            </button>
          )
        })}
      </div>

      {/* Places list */}
      {filtered.map(p => (
        editingId === p.id
          ? <PlaceEditor key={p.id} p={p} onSave={handleSave} onCancel={() => setEditingId(null)} />
          : <PlaceCard key={p.id} p={p} onEdit={() => setEditingId(p.id)} />
      ))}

      {filtered.length === 0 && (
        <div style={{
          textAlign: 'center', padding: '40px 20px', color: '#94A3B8', fontSize: '0.9rem',
        }}>
          No places match your filters.
        </div>
      )}
    </div>
  )
}
