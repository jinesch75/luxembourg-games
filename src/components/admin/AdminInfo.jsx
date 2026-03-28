/**
 * AdminInfo — edit the text cards shown in the Info Hub.
 *   • Biergerpakt info cards  (title + body text)
 *   • Intercultural activity categories  (title + tip list)
 */

import { useState, useEffect } from 'react'
import { DEFAULT_BP_CARDS, DEFAULT_ACTIVITIES } from '../InfoHub'

const ADMIN_PASSWORD = 'biergerpakt'

// ── Shared helpers ──────────────────────────────────────────────────────────
function inputStyle(multiline = false) {
  return {
    width: '100%', padding: '8px 11px',
    border: '1.5px solid #E2E8F0', borderRadius: 7,
    fontSize: '0.85rem', fontFamily: 'var(--font, inherit)',
    resize: multiline ? 'vertical' : 'none', outline: 'none',
    boxSizing: 'border-box', lineHeight: 1.5,
    minHeight: multiline ? 60 : undefined,
  }
}
function Label({ children }) {
  return (
    <label style={{ fontSize: '0.73rem', fontWeight: 600, color: '#64748B', display: 'block', marginBottom: 3 }}>
      {children}
    </label>
  )
}
function SectionHeader({ title }) {
  return (
    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#1E293B', marginBottom: 12, paddingBottom: 8, borderBottom: '2px solid #E2E8F0' }}>
      {title}
    </div>
  )
}

// ── Biergerpakt card editor ─────────────────────────────────────────────────
function BpCardRow({ card, onEdit, onDelete }) {
  return (
    <div style={{ background: 'white', borderRadius: 10, padding: '12px 14px', boxShadow: '0 1px 3px rgba(0,0,0,0.07)', marginBottom: 8, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{card.icon}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: 2 }}>{card.title}</div>
        <div style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.4 }}>{card.text}</div>
      </div>
      <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
        <button onClick={onEdit} style={{ background: '#EF3340', color: 'white', border: 'none', borderRadius: 6, padding: '5px 10px', fontSize: '0.73rem', fontWeight: 600, cursor: 'pointer' }}>✏️</button>
        <button onClick={onDelete} style={{ background: '#FEF2F2', color: '#DC2626', border: '1px solid #FECACA', borderRadius: 6, padding: '5px 8px', fontSize: '0.73rem', fontWeight: 600, cursor: 'pointer' }}>🗑️</button>
      </div>
    </div>
  )
}

function BpCardEditor({ card, onSave, onCancel }) {
  const [d, setD] = useState({ ...card })
  return (
    <div style={{ background: 'white', borderRadius: 10, padding: 14, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: 8, border: '2px solid #EF3340' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 8, marginBottom: 8 }}>
        <div><Label>Icon</Label><input value={d.icon} onChange={e => setD(p => ({ ...p, icon: e.target.value }))} style={{ ...inputStyle(), height: 36 }} /></div>
        <div><Label>Title</Label><input value={d.title} onChange={e => setD(p => ({ ...p, title: e.target.value }))} style={{ ...inputStyle(), height: 36 }} /></div>
      </div>
      <div style={{ marginBottom: 10 }}><Label>Text</Label><textarea value={d.text} onChange={e => setD(p => ({ ...p, text: e.target.value }))} style={inputStyle(true)} rows={3} /></div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => onSave(d)} style={{ flex: 1, background: '#059669', color: 'white', border: 'none', borderRadius: 7, padding: 9, fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer' }}>✓ Save</button>
        <button onClick={onCancel} style={{ flex: 1, background: '#F1F5F9', color: '#475569', border: 'none', borderRadius: 7, padding: 9, fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
      </div>
    </div>
  )
}

// ── Activity category editor ────────────────────────────────────────────────
function ActivityRow({ cat, onEdit, onDelete }) {
  return (
    <div style={{ background: 'white', borderRadius: 10, padding: '12px 14px', boxShadow: '0 1px 3px rgba(0,0,0,0.07)', marginBottom: 8, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{cat.icon}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: 4 }}>{cat.title}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {cat.tips.map((tip, i) => (
            <div key={i} style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.3 }}>• {tip}</div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
        <button onClick={onEdit} style={{ background: '#EF3340', color: 'white', border: 'none', borderRadius: 6, padding: '5px 10px', fontSize: '0.73rem', fontWeight: 600, cursor: 'pointer' }}>✏️</button>
        <button onClick={onDelete} style={{ background: '#FEF2F2', color: '#DC2626', border: '1px solid #FECACA', borderRadius: 6, padding: '5px 8px', fontSize: '0.73rem', fontWeight: 600, cursor: 'pointer' }}>🗑️</button>
      </div>
    </div>
  )
}

function ActivityEditor({ cat, onSave, onCancel }) {
  const [d, setD] = useState({ ...cat, tips: [...cat.tips] })
  const setTip = (i, val) => setD(p => { const t = [...p.tips]; t[i] = val; return { ...p, tips: t } })
  const removeTip = (i) => setD(p => ({ ...p, tips: p.tips.filter((_, j) => j !== i) }))
  const addTip = () => setD(p => ({ ...p, tips: [...p.tips, ''] }))

  return (
    <div style={{ background: 'white', borderRadius: 10, padding: 14, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: 8, border: '2px solid #EF3340' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 90px 90px', gap: 8, marginBottom: 10 }}>
        <div><Label>Icon</Label><input value={d.icon} onChange={e => setD(p => ({ ...p, icon: e.target.value }))} style={{ ...inputStyle(), height: 36 }} /></div>
        <div><Label>Title</Label><input value={d.title} onChange={e => setD(p => ({ ...p, title: e.target.value }))} style={{ ...inputStyle(), height: 36 }} /></div>
        <div><Label>Color</Label><input value={d.color} onChange={e => setD(p => ({ ...p, color: e.target.value }))} style={{ ...inputStyle(), height: 36 }} /></div>
        <div><Label>Bg color</Label><input value={d.bg} onChange={e => setD(p => ({ ...p, bg: e.target.value }))} style={{ ...inputStyle(), height: 36 }} /></div>
      </div>

      <Label>Tips</Label>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 8 }}>
        {d.tips.map((tip, i) => (
          <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'flex-start' }}>
            <textarea value={tip} onChange={e => setTip(i, e.target.value)} style={{ ...inputStyle(true), minHeight: 40, flex: 1 }} rows={2} />
            <button onClick={() => removeTip(i)} style={{ background: '#FEF2F2', color: '#DC2626', border: '1px solid #FECACA', borderRadius: 6, padding: '5px 8px', fontSize: '0.8rem', cursor: 'pointer', flexShrink: 0 }}>✕</button>
          </div>
        ))}
      </div>
      <button onClick={addTip} style={{ background: '#F0FDF4', color: '#059669', border: '1px solid #A7F3D0', borderRadius: 6, padding: '5px 12px', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', marginBottom: 12 }}>+ Add tip</button>

      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => onSave(d)} style={{ flex: 1, background: '#059669', color: 'white', border: 'none', borderRadius: 7, padding: 9, fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer' }}>✓ Save</button>
        <button onClick={onCancel} style={{ flex: 1, background: '#F1F5F9', color: '#475569', border: 'none', borderRadius: 7, padding: 9, fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
      </div>
    </div>
  )
}

// ── Main component ──────────────────────────────────────────────────────────
export default function AdminInfo() {
  const [bpCards, setBpCards]       = useState(DEFAULT_BP_CARDS)
  const [activities, setActivities] = useState(DEFAULT_ACTIVITIES)
  const [editingBp, setEditingBp]   = useState(null)   // card id being edited
  const [editingAct, setEditingAct] = useState(null)   // category id being edited
  const [saving, setSaving]         = useState(false)
  const [saved, setSaved]           = useState(false)
  const [error, setError]           = useState(null)
  const [isOverride, setIsOverride] = useState(false)

  useEffect(() => {
    fetch('/api/content')
      .then(r => r.ok ? r.json() : {})
      .then(data => {
        if (data.bpCards?.length)    { setBpCards(data.bpCards);       setIsOverride(true) }
        if (data.activities?.length) { setActivities(data.activities); setIsOverride(true) }
      })
      .catch(() => {})
  }, [])

  const saveToServer = async (updatedBp, updatedActs) => {
    setSaving(true); setError(null)
    try {
      const current = await fetch('/api/content').then(r => r.ok ? r.json() : {}).catch(() => ({}))
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'x-admin-password': ADMIN_PASSWORD },
        body: JSON.stringify({ ...current, bpCards: updatedBp, activities: updatedActs }),
      })
      if (!res.ok) throw new Error()
      setSaved(true); setIsOverride(true)
      setTimeout(() => setSaved(false), 2500)
    } catch {
      setError('Could not save — is the server running?')
    } finally {
      setSaving(false)
    }
  }

  // ── Biergerpakt card handlers ─────────────────────────────────────────────
  const saveBpCard = (updated) => {
    const list = bpCards.map(c => c.id === updated.id ? updated : c)
    setBpCards(list); setEditingBp(null); saveToServer(list, activities)
  }
  const deleteBpCard = (id) => {
    const list = bpCards.filter(c => c.id !== id)
    setBpCards(list); saveToServer(list, activities)
  }
  const addBpCard = () => {
    const id = `bp_${Date.now()}`
    const card = { id, icon: '📌', title: 'New card', text: '' }
    const list = [...bpCards, card]
    setBpCards(list); setEditingBp(id)
  }

  // ── Activity handlers ─────────────────────────────────────────────────────
  const saveActivity = (updated) => {
    const list = activities.map(a => a.id === updated.id ? updated : a)
    setActivities(list); setEditingAct(null); saveToServer(bpCards, list)
  }
  const deleteActivity = (id) => {
    const list = activities.filter(a => a.id !== id)
    setActivities(list); saveToServer(bpCards, list)
  }
  const addActivity = () => {
    const id = `act_${Date.now()}`
    const cat = { id, icon: '🌟', title: 'New category', color: '#374151', bg: '#F3F4F6', tips: [''] }
    const list = [...activities, cat]
    setActivities(list); setEditingAct(id)
  }

  const resetToDefaults = async () => {
    if (!confirm('Reset Info Hub content to defaults?')) return
    const current = await fetch('/api/content').then(r => r.ok ? r.json() : {}).catch(() => ({}))
    const { bpCards: _, activities: __, ...rest } = current
    await fetch('/api/content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': ADMIN_PASSWORD },
      body: JSON.stringify(rest),
    })
    setBpCards(DEFAULT_BP_CARDS); setActivities(DEFAULT_ACTIVITIES); setIsOverride(false)
  }

  return (
    <div>
      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18, flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#64748B' }}>Info Hub content</span>
        {isOverride && <span style={{ background: '#FEF3C7', color: '#B45309', borderRadius: 99, padding: '2px 8px', fontSize: '0.72rem', fontWeight: 700 }}>✏️ Custom content active</span>}
        {saved   && <span style={{ color: '#059669', fontSize: '0.8rem', fontWeight: 700 }}>✓ Saved!</span>}
        {saving  && <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>Saving…</span>}
        {isOverride && (
          <button onClick={resetToDefaults} style={{ marginLeft: 'auto', background: '#F1F5F9', color: '#EF4444', border: 'none', borderRadius: 6, padding: '5px 10px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}>
            Reset to defaults
          </button>
        )}
      </div>

      {error && <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: 8, padding: '10px 14px', marginBottom: 12, color: '#B91C1C', fontSize: '0.82rem' }}>{error}</div>}

      {/* ── Biergerpakt info cards ─────────────────────────────────────────── */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <SectionHeader title="🤝 Biergerpakt info cards" />
          <button onClick={addBpCard} style={{ background: '#059669', color: 'white', border: 'none', borderRadius: 6, padding: '5px 12px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}>+ Add card</button>
        </div>
        {bpCards.map(card => (
          editingBp === card.id
            ? <BpCardEditor key={card.id} card={card} onSave={saveBpCard} onCancel={() => setEditingBp(null)} />
            : <BpCardRow    key={card.id} card={card} onEdit={() => setEditingBp(card.id)} onDelete={() => deleteBpCard(card.id)} />
        ))}
        {bpCards.length === 0 && <div style={{ color: '#94A3B8', fontSize: '0.82rem', padding: '10px 0' }}>No cards — click "+ Add card" to add one.</div>}
      </div>

      {/* ── Intercultural activity categories ─────────────────────────────── */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <SectionHeader title="🌍 Intercultural activity categories" />
          <button onClick={addActivity} style={{ background: '#059669', color: 'white', border: 'none', borderRadius: 6, padding: '5px 12px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}>+ Add category</button>
        </div>
        {activities.map(cat => (
          editingAct === cat.id
            ? <ActivityEditor key={cat.id} cat={cat} onSave={saveActivity} onCancel={() => setEditingAct(null)} />
            : <ActivityRow    key={cat.id} cat={cat} onEdit={() => setEditingAct(cat.id)} onDelete={() => deleteActivity(cat.id)} />
        ))}
        {activities.length === 0 && <div style={{ color: '#94A3B8', fontSize: '0.82rem', padding: '10px 0' }}>No categories — click "+ Add category" to add one.</div>}
      </div>
    </div>
  )
}
