/**
 * AdminInfo — edit the text cards shown in the Info Hub.
 *   • "What is the Biergerpakt?" intro box (title + text + CTA label)
 *   • "Intercultural living-together" card (title + text)
 *   • Biergerpakt info cards        (title + body text)
 *   • Intercultural activity categories (title + tip list)
 *   • Stats                         (icon + label + value + source)
 *   • Language phrases              (meaning + fr)
 *   • Reliable sources              (category groups with source links)
 */

import { useState, useEffect } from 'react'
import {
  DEFAULT_BP_CARDS,
  DEFAULT_ACTIVITIES,
  DEFAULT_STATS,
  DEFAULT_LANGUAGE_PHRASES,
  DEFAULT_RELIABLE_SOURCES,
} from '../InfoHub'
import LangTabs from './LangTabs'
import { ensureTranslations } from '../../utils/contentLang'

const TRANS_LANGS = ['fr']
// Ensure an item has translation stubs for a given set of fields
function withTrans(item, fields) {
  return ensureTranslations(item, fields)
}

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
function editBtn(onClick) {
  return <button onClick={onClick} style={{ background: '#16A34A', color: 'white', border: 'none', borderRadius: 6, padding: '5px 10px', fontSize: '0.73rem', fontWeight: 600, cursor: 'pointer' }}>✏️</button>
}
function deleteBtn(onClick) {
  return <button onClick={onClick} style={{ background: '#DCFCE7', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 6, padding: '5px 8px', fontSize: '0.73rem', fontWeight: 600, cursor: 'pointer' }}>🗑️</button>
}
function SaveCancelRow({ onSave, onCancel }) {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <button onClick={onSave} style={{ flex: 1, background: '#059669', color: 'white', border: 'none', borderRadius: 7, padding: 9, fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer' }}>✓ Save</button>
      <button onClick={onCancel} style={{ flex: 1, background: '#F1F5F9', color: '#475569', border: 'none', borderRadius: 7, padding: 9, fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
    </div>
  )
}
function EditorBox({ children }) {
  return (
    <div style={{ background: 'white', borderRadius: 10, padding: 14, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: 8, border: '2px solid #EF3340' }}>
      {children}
    </div>
  )
}
function RowBox({ children }) {
  return (
    <div style={{ background: 'white', borderRadius: 10, padding: '12px 14px', boxShadow: '0 1px 3px rgba(0,0,0,0.07)', marginBottom: 8, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      {children}
    </div>
  )
}

// ── Biergerpakt card editor ─────────────────────────────────────────────────
function BpCardRow({ card, onEdit, onDelete }) {
  return (
    <RowBox>
      <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{card.icon}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: 2 }}>{card.title}</div>
        <div style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.4 }}>{card.text}</div>
      </div>
      <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
        {editBtn(onEdit)}{deleteBtn(onDelete)}
      </div>
    </RowBox>
  )
}
function BpCardEditor({ card, onSave, onCancel }) {
  const [d, setD] = useState(() => withTrans({ ...card }, ['title', 'text']))
  const [editLang, setEditLang] = useState('en')

  const getF = (f) => editLang === 'en' ? d[f] : (d.translations[editLang][f] || '')
  const setF = (f, val) => {
    if (editLang === 'en') { setD(p => ({ ...p, [f]: val })); return }
    setD(p => ({ ...p, translations: { ...p.translations, [editLang]: { ...p.translations[editLang], [f]: val } } }))
  }
  const missing = TRANS_LANGS.filter(l => !d.translations[l]?.title)

  return (
    <EditorBox>
      <LangTabs lang={editLang} onChange={setEditLang} missingFor={missing} />
      {editLang === 'en' && (
        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 8, marginBottom: 8 }}>
          <div><Label>Icon</Label><input value={d.icon} onChange={e => setD(p => ({ ...p, icon: e.target.value }))} style={{ ...inputStyle(), height: 36 }} /></div>
          <div><Label>Title (EN)</Label><input value={d.title} onChange={e => setF('title', e.target.value)} style={{ ...inputStyle(), height: 36 }} /></div>
        </div>
      )}
      {editLang !== 'en' && (
        <div style={{ marginBottom: 8 }}>
          <Label>Title <span style={{ color: '#94A3B8', fontWeight: 400 }}>(leave blank → EN)</span></Label>
          <input value={getF('title')} onChange={e => setF('title', e.target.value)} placeholder={d.title} style={{ ...inputStyle(), height: 36 }} />
        </div>
      )}
      <div style={{ marginBottom: 10 }}>
        <Label>Text {editLang !== 'en' && <span style={{ color: '#94A3B8', fontWeight: 400 }}>(leave blank → EN)</span>}</Label>
        <textarea value={getF('text')} onChange={e => setF('text', e.target.value)} placeholder={editLang !== 'en' ? d.text : undefined} style={inputStyle(true)} rows={3} />
      </div>
      <SaveCancelRow onSave={() => onSave(d)} onCancel={onCancel} />
    </EditorBox>
  )
}

// ── Activity category editor ────────────────────────────────────────────────
function ActivityRow({ cat, onEdit, onDelete }) {
  return (
    <RowBox>
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
        {editBtn(onEdit)}{deleteBtn(onDelete)}
      </div>
    </RowBox>
  )
}
function ActivityEditor({ cat, onSave, onCancel }) {
  const [d, setD] = useState({ ...cat, tips: [...cat.tips] })
  const setTip = (i, val) => setD(p => { const t = [...p.tips]; t[i] = val; return { ...p, tips: t } })
  const removeTip = (i) => setD(p => ({ ...p, tips: p.tips.filter((_, j) => j !== i) }))
  const addTip = () => setD(p => ({ ...p, tips: [...p.tips, ''] }))
  return (
    <EditorBox>
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
            <button onClick={() => removeTip(i)} style={{ background: '#DCFCE7', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 6, padding: '5px 8px', fontSize: '0.8rem', cursor: 'pointer', flexShrink: 0 }}>✕</button>
          </div>
        ))}
      </div>
      <button onClick={addTip} style={{ background: '#F0FDF4', color: '#059669', border: '1px solid #A7F3D0', borderRadius: 6, padding: '5px 12px', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', marginBottom: 12 }}>+ Add tip</button>
      <SaveCancelRow onSave={() => onSave(d)} onCancel={onCancel} />
    </EditorBox>
  )
}

// ── Stats editor ────────────────────────────────────────────────────────────
function StatRow({ stat, onEdit, onDelete }) {
  return (
    <RowBox>
      <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{stat.icon}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{stat.value}</div>
        <div style={{ fontSize: '0.8rem', color: '#64748B' }}>{stat.label}</div>
        <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: 2 }}>{stat.source}</div>
      </div>
      <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
        {editBtn(onEdit)}{deleteBtn(onDelete)}
      </div>
    </RowBox>
  )
}
function StatEditor({ stat, onSave, onCancel }) {
  const [d, setD] = useState({ ...stat })
  return (
    <EditorBox>
      <div style={{ display: 'grid', gridTemplateColumns: '70px 1fr', gap: 8, marginBottom: 8 }}>
        <div><Label>Icon</Label><input value={d.icon} onChange={e => setD(p => ({ ...p, icon: e.target.value }))} style={{ ...inputStyle(), height: 36 }} /></div>
        <div><Label>Label</Label><input value={d.label} onChange={e => setD(p => ({ ...p, label: e.target.value }))} style={{ ...inputStyle(), height: 36 }} /></div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 10 }}>
        <div><Label>Value</Label><input value={d.value} onChange={e => setD(p => ({ ...p, value: e.target.value }))} style={{ ...inputStyle(), height: 36 }} /></div>
        <div><Label>Source</Label><input value={d.source} onChange={e => setD(p => ({ ...p, source: e.target.value }))} style={{ ...inputStyle(), height: 36 }} /></div>
      </div>
      <SaveCancelRow onSave={() => onSave(d)} onCancel={onCancel} />
    </EditorBox>
  )
}

// ── Language phrase editor ──────────────────────────────────────────────────
function PhraseRow({ phrase, onEdit, onDelete }) {
  return (
    <RowBox>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 700, fontSize: '0.82rem', color: '#475569', marginBottom: 4 }}>{phrase.meaning}</div>
        <div style={{ fontSize: '0.78rem' }}><span style={{ fontSize: '0.9rem' }}>🇫🇷</span> {phrase.fr}</div>
      </div>
      <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
        {editBtn(onEdit)}{deleteBtn(onDelete)}
      </div>
    </RowBox>
  )
}
function PhraseEditor({ phrase, onSave, onCancel }) {
  const [d, setD] = useState({ ...phrase })
  return (
    <EditorBox>
      <div style={{ marginBottom: 8 }}><Label>Meaning (English)</Label><input value={d.meaning} onChange={e => setD(p => ({ ...p, meaning: e.target.value }))} style={{ ...inputStyle(), height: 36 }} /></div>
      <div style={{ marginBottom: 10 }}>
        <Label>🇫🇷 French</Label><input value={d.fr} onChange={e => setD(p => ({ ...p, fr: e.target.value }))} style={{ ...inputStyle(), height: 36 }} />
      </div>
      <SaveCancelRow onSave={() => onSave(d)} onCancel={onCancel} />
    </EditorBox>
  )
}

// ── Reliable sources editor ─────────────────────────────────────────────────
function SourceGroupRow({ group, onEdit, onDelete }) {
  return (
    <RowBox>
      <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{group.icon}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: 4 }}>{group.category}</div>
        {group.sources.map((src, i) => (
          <div key={i} style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.3, marginBottom: 2 }}>
            • <span style={{ fontWeight: 600 }}>{src.label}</span> — {src.desc}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
        {editBtn(onEdit)}{deleteBtn(onDelete)}
      </div>
    </RowBox>
  )
}
function SourceGroupEditor({ group, onSave, onCancel }) {
  const [d, setD] = useState({ ...group, sources: group.sources.map(s => ({ ...s })) })
  const setSource = (i, field, val) => setD(p => {
    const sources = p.sources.map((s, j) => j === i ? { ...s, [field]: val } : s)
    return { ...p, sources }
  })
  const removeSource = (i) => setD(p => ({ ...p, sources: p.sources.filter((_, j) => j !== i) }))
  const addSource = () => setD(p => ({ ...p, sources: [...p.sources, { label: '', href: '', desc: '' }] }))

  return (
    <EditorBox>
      <div style={{ display: 'grid', gridTemplateColumns: '70px 1fr', gap: 8, marginBottom: 10 }}>
        <div><Label>Icon</Label><input value={d.icon} onChange={e => setD(p => ({ ...p, icon: e.target.value }))} style={{ ...inputStyle(), height: 36 }} /></div>
        <div><Label>Category name</Label><input value={d.category} onChange={e => setD(p => ({ ...p, category: e.target.value }))} style={{ ...inputStyle(), height: 36 }} /></div>
      </div>

      <Label>Sources</Label>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 8 }}>
        {d.sources.map((src, i) => (
          <div key={i} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 8, padding: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748B' }}>Source {i + 1}</span>
              <button onClick={() => removeSource(i)} style={{ background: '#DCFCE7', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 5, padding: '3px 8px', fontSize: '0.72rem', cursor: 'pointer' }}>✕ Remove</button>
            </div>
            <div style={{ marginBottom: 6 }}><Label>Label (link text)</Label><input value={src.label} onChange={e => setSource(i, 'label', e.target.value)} style={{ ...inputStyle(), height: 32 }} /></div>
            <div style={{ marginBottom: 6 }}><Label>URL</Label><input value={src.href} onChange={e => setSource(i, 'href', e.target.value)} style={{ ...inputStyle(), height: 32 }} /></div>
            <div><Label>Description</Label><textarea value={src.desc} onChange={e => setSource(i, 'desc', e.target.value)} style={{ ...inputStyle(true), minHeight: 44 }} rows={2} /></div>
          </div>
        ))}
      </div>
      <button onClick={addSource} style={{ background: '#F0FDF4', color: '#059669', border: '1px solid #A7F3D0', borderRadius: 6, padding: '5px 12px', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', marginBottom: 12 }}>+ Add source</button>

      <SaveCancelRow onSave={() => onSave(d)} onCancel={onCancel} />
    </EditorBox>
  )
}

// ── Main component ──────────────────────────────────────────────────────────
export default function AdminInfo() {
  const [bpCards, setBpCards]                   = useState(DEFAULT_BP_CARDS)
  const [activities, setActivities]             = useState(DEFAULT_ACTIVITIES)
  const [stats, setStats]                       = useState(DEFAULT_STATS)
  const [languagePhrases, setLanguagePhrases]   = useState(DEFAULT_LANGUAGE_PHRASES)
  const [reliableSources, setReliableSources]   = useState(DEFAULT_RELIABLE_SOURCES)
  const [bpIntro, setBpIntro]                   = useState({ title: 'What is the Biergerpakt?', text: "The Biergerpakt (Citizens' Pact) is a government programme designed to foster intercultural living-together in Luxembourg. It connects newcomers and long-term residents through activities, events, and shared experiences — helping everyone feel at home.", cta: 'Discover the Biergerpakt' })
  const [bpInterculturalCard, setBpInterculturalCard] = useState({ title: 'Intercultural living-together', text: "Nearly half of Luxembourg's residents are foreign nationals. This rich diversity is one of Luxembourg's greatest strengths. Living and working together across cultures requires understanding, respect, and curiosity — exactly what these activities are designed to encourage." })
  const [editingBpIntro, setEditingBpIntro]           = useState(false)
  const [editingBpInterculturalCard, setEditingBpInterculturalCard] = useState(false)
  const [bpIntroLang, setBpIntroLang]   = useState('en')
  const [bpICLang,    setBpICLang]      = useState('en')

  const [editingBp, setEditingBp]         = useState(null)   // card.id
  const [editingAct, setEditingAct]       = useState(null)   // cat.id
  const [editingStat, setEditingStat]     = useState(null)   // index
  const [editingPhrase, setEditingPhrase] = useState(null)   // index
  const [editingSrc, setEditingSrc]       = useState(null)   // index

  const [saving, setSaving] = useState(false)
  const [saved, setSaved]   = useState(false)
  const [error, setError]   = useState(null)
  const [isOverride, setIsOverride] = useState(false)

  useEffect(() => {
    fetch('/api/content')
      .then(r => r.ok ? r.json() : {})
      .then(data => {
        if (data.bpCards?.length)         { setBpCards(data.bpCards);           setIsOverride(true) }
        if (data.activities?.length)      { setActivities(data.activities);     setIsOverride(true) }
        if (data.stats?.length)           { setStats(data.stats);               setIsOverride(true) }
        if (data.languagePhrases?.length) { setLanguagePhrases(data.languagePhrases); setIsOverride(true) }
        if (data.reliableSources?.length) { setReliableSources(data.reliableSources); setIsOverride(true) }
        if (data.bpIntro)                 { setBpIntro(data.bpIntro);           setIsOverride(true) }
        if (data.bpInterculturalCard)     { setBpInterculturalCard(data.bpInterculturalCard); setIsOverride(true) }
      })
      .catch(() => {})
  }, [])

  const saveToServer = async (payload) => {
    setSaving(true); setError(null)
    try {
      const current = await fetch('/api/content').then(r => r.ok ? r.json() : {}).catch(() => ({}))
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'x-admin-password': ADMIN_PASSWORD },
        body: JSON.stringify({ ...current, ...payload }),
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
    setBpCards(list); setEditingBp(null)
    saveToServer({ bpCards: list, activities })
  }
  const deleteBpCard = (id) => {
    const list = bpCards.filter(c => c.id !== id)
    setBpCards(list); saveToServer({ bpCards: list, activities })
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
    setActivities(list); setEditingAct(null)
    saveToServer({ bpCards, activities: list })
  }
  const deleteActivity = (id) => {
    const list = activities.filter(a => a.id !== id)
    setActivities(list); saveToServer({ bpCards, activities: list })
  }
  const addActivity = () => {
    const id = `act_${Date.now()}`
    const cat = { id, icon: '🌟', title: 'New category', color: '#374151', bg: '#F3F4F6', tips: [''] }
    const list = [...activities, cat]
    setActivities(list); setEditingAct(id)
  }

  // ── Stats handlers (index-based) ─────────────────────────────────────────
  const saveStat = (idx, updated) => {
    const list = stats.map((s, i) => i === idx ? updated : s)
    setStats(list); setEditingStat(null)
    saveToServer({ stats: list })
  }
  const deleteStat = (idx) => {
    const list = stats.filter((_, i) => i !== idx)
    setStats(list); saveToServer({ stats: list })
  }
  const addStat = () => {
    const list = [...stats, { icon: '📊', label: 'New stat', value: '—', source: '' }]
    setStats(list); setEditingStat(list.length - 1)
  }

  // ── Language phrase handlers (index-based) ────────────────────────────────
  const savePhrase = (idx, updated) => {
    const list = languagePhrases.map((p, i) => i === idx ? updated : p)
    setLanguagePhrases(list); setEditingPhrase(null)
    saveToServer({ languagePhrases: list })
  }
  const deletePhrase = (idx) => {
    const list = languagePhrases.filter((_, i) => i !== idx)
    setLanguagePhrases(list); saveToServer({ languagePhrases: list })
  }
  const addPhrase = () => {
    const list = [...languagePhrases, { meaning: 'New phrase', fr: '' }]
    setLanguagePhrases(list); setEditingPhrase(list.length - 1)
  }

  // ── Source group handlers (index-based) ───────────────────────────────────
  const saveSourceGroup = (idx, updated) => {
    const list = reliableSources.map((g, i) => i === idx ? updated : g)
    setReliableSources(list); setEditingSrc(null)
    saveToServer({ reliableSources: list })
  }
  const deleteSourceGroup = (idx) => {
    const list = reliableSources.filter((_, i) => i !== idx)
    setReliableSources(list); saveToServer({ reliableSources: list })
  }
  const addSourceGroup = () => {
    const list = [...reliableSources, { icon: '🔗', category: 'New category', sources: [] }]
    setReliableSources(list); setEditingSrc(list.length - 1)
  }

  const resetToDefaults = async () => {
    if (!confirm('Reset all Info Hub content to defaults?')) return
    const current = await fetch('/api/content').then(r => r.ok ? r.json() : {}).catch(() => ({}))
    const { bpCards: _, activities: __, stats: ___, languagePhrases: ____, reliableSources: _____, bpIntro: ______, bpInterculturalCard: _______, ...rest } = current
    await fetch('/api/content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': ADMIN_PASSWORD },
      body: JSON.stringify(rest),
    })
    setBpCards(DEFAULT_BP_CARDS)
    setActivities(DEFAULT_ACTIVITIES)
    setStats(DEFAULT_STATS)
    setLanguagePhrases(DEFAULT_LANGUAGE_PHRASES)
    setReliableSources(DEFAULT_RELIABLE_SOURCES)
    setBpIntro({ title: 'What is the Biergerpakt?', text: "The Biergerpakt (Citizens' Pact) is a government programme designed to foster intercultural living-together in Luxembourg. It connects newcomers and long-term residents through activities, events, and shared experiences — helping everyone feel at home.", cta: 'Discover the Biergerpakt' })
    setBpInterculturalCard({ title: 'Intercultural living-together', text: "Nearly half of Luxembourg's residents are foreign nationals. This rich diversity is one of Luxembourg's greatest strengths. Living and working together across cultures requires understanding, respect, and curiosity — exactly what these activities are designed to encourage." })
    setIsOverride(false)
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

      {/* ── "What is the Biergerpakt?" intro box ──────────────────────────── */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <SectionHeader title='🟦 "What is the Biergerpakt?" box' />
          {!editingBpIntro && editBtn(() => setEditingBpIntro(true))}
        </div>
        {editingBpIntro ? (() => {
          const intro = withTrans(bpIntro, ['title', 'text', 'cta'])
          const getF = (f) => bpIntroLang === 'en' ? intro[f] : (intro.translations[bpIntroLang]?.[f] || '')
          const setF = (f, val) => {
            if (bpIntroLang === 'en') {
              setBpIntro(p => ({ ...withTrans(p, ['title','text','cta']), [f]: val }))
            } else {
              setBpIntro(p => {
                const t = withTrans(p, ['title','text','cta'])
                return { ...t, translations: { ...t.translations, [bpIntroLang]: { ...t.translations[bpIntroLang], [f]: val } } }
              })
            }
          }
          const missingBpIntro = TRANS_LANGS.filter(l => !intro.translations[l]?.title)
          return (
            <EditorBox>
              <LangTabs lang={bpIntroLang} onChange={setBpIntroLang} missingFor={missingBpIntro} />
              <div style={{ marginBottom: 8 }}>
                <Label>Title {bpIntroLang !== 'en' && <span style={{ color: '#94A3B8', fontWeight: 400 }}>(leave blank → EN)</span>}</Label>
                <input value={getF('title')} onChange={e => setF('title', e.target.value)} placeholder={bpIntroLang !== 'en' ? intro.title : undefined} style={{ ...inputStyle(), height: 36 }} />
              </div>
              <div style={{ marginBottom: 8 }}>
                <Label>Body text {bpIntroLang !== 'en' && <span style={{ color: '#94A3B8', fontWeight: 400 }}>(leave blank → EN)</span>}</Label>
                <textarea value={getF('text')} onChange={e => setF('text', e.target.value)} placeholder={bpIntroLang !== 'en' ? intro.text : undefined} style={inputStyle(true)} rows={4} />
              </div>
              {bpIntroLang === 'en' && (
                <div style={{ marginBottom: 12 }}>
                  <Label>CTA button label</Label>
                  <input value={intro.cta} onChange={e => setF('cta', e.target.value)} style={{ ...inputStyle(), height: 36 }} />
                </div>
              )}
              {bpIntroLang !== 'en' && (
                <div style={{ marginBottom: 12 }}>
                  <Label>CTA label <span style={{ color: '#94A3B8', fontWeight: 400 }}>(leave blank → EN)</span></Label>
                  <input value={getF('cta')} onChange={e => setF('cta', e.target.value)} placeholder={intro.cta} style={{ ...inputStyle(), height: 36 }} />
                </div>
              )}
              <SaveCancelRow onSave={() => { setEditingBpIntro(false); setBpIntroLang('en'); saveToServer({ bpIntro: withTrans(bpIntro, ['title','text','cta']) }) }} onCancel={() => { setEditingBpIntro(false); setBpIntroLang('en') }} />
            </EditorBox>
          )
        })()
        : (
          <RowBox>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: 4 }}>{bpIntro.title}</div>
              <div style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.4, marginBottom: 6 }}>{bpIntro.text}</div>
              <div style={{ fontSize: '0.75rem', color: '#7C3AED', fontWeight: 600 }}>CTA: {bpIntro.cta} →</div>
            </div>
          </RowBox>
        )}
      </div>

      {/* ── "Intercultural living-together" card ──────────────────────────── */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <SectionHeader title='🌿 "Intercultural living-together" card' />
          {!editingBpInterculturalCard && editBtn(() => setEditingBpInterculturalCard(true))}
        </div>
        {editingBpInterculturalCard ? (() => {
          const ic = withTrans(bpInterculturalCard, ['title', 'text'])
          const getF = (f) => bpICLang === 'en' ? ic[f] : (ic.translations[bpICLang]?.[f] || '')
          const setF = (f, val) => {
            if (bpICLang === 'en') {
              setBpInterculturalCard(p => ({ ...withTrans(p, ['title','text']), [f]: val }))
            } else {
              setBpInterculturalCard(p => {
                const t = withTrans(p, ['title','text'])
                return { ...t, translations: { ...t.translations, [bpICLang]: { ...t.translations[bpICLang], [f]: val } } }
              })
            }
          }
          const missingIC = TRANS_LANGS.filter(l => !ic.translations[l]?.title)
          return (
            <EditorBox>
              <LangTabs lang={bpICLang} onChange={setBpICLang} missingFor={missingIC} />
              <div style={{ marginBottom: 8 }}>
                <Label>Title {bpICLang !== 'en' && <span style={{ color: '#94A3B8', fontWeight: 400 }}>(leave blank → EN)</span>}</Label>
                <input value={getF('title')} onChange={e => setF('title', e.target.value)} placeholder={bpICLang !== 'en' ? ic.title : undefined} style={{ ...inputStyle(), height: 36 }} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <Label>Body text {bpICLang !== 'en' && <span style={{ color: '#94A3B8', fontWeight: 400 }}>(leave blank → EN)</span>}</Label>
                <textarea value={getF('text')} onChange={e => setF('text', e.target.value)} placeholder={bpICLang !== 'en' ? ic.text : undefined} style={inputStyle(true)} rows={4} />
              </div>
              <SaveCancelRow onSave={() => { setEditingBpInterculturalCard(false); setBpICLang('en'); saveToServer({ bpInterculturalCard: withTrans(bpInterculturalCard, ['title','text']) }) }} onCancel={() => { setEditingBpInterculturalCard(false); setBpICLang('en') }} />
            </EditorBox>
          )
        })()
        : (
          <RowBox>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: 4 }}>{bpInterculturalCard.title}</div>
              <div style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.4 }}>{bpInterculturalCard.text}</div>
            </div>
          </RowBox>
        )}
      </div>

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
      <div style={{ marginBottom: 28 }}>
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

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <SectionHeader title="📊 Stats (Stats page)" />
          <button onClick={addStat} style={{ background: '#059669', color: 'white', border: 'none', borderRadius: 6, padding: '5px 12px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}>+ Add stat</button>
        </div>
        {stats.map((stat, idx) => (
          editingStat === idx
            ? <StatEditor key={idx} stat={stat} onSave={updated => saveStat(idx, updated)} onCancel={() => setEditingStat(null)} />
            : <StatRow    key={idx} stat={stat} onEdit={() => setEditingStat(idx)} onDelete={() => deleteStat(idx)} />
        ))}
        {stats.length === 0 && <div style={{ color: '#94A3B8', fontSize: '0.82rem', padding: '10px 0' }}>No stats — click "+ Add stat" to add one.</div>}
      </div>

      {/* ── Language phrases ───────────────────────────────────────────────── */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <SectionHeader title="🗣️ Language phrases (Language page)" />
          <button onClick={addPhrase} style={{ background: '#059669', color: 'white', border: 'none', borderRadius: 6, padding: '5px 12px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}>+ Add phrase</button>
        </div>
        {languagePhrases.map((phrase, idx) => (
          editingPhrase === idx
            ? <PhraseEditor key={idx} phrase={phrase} onSave={updated => savePhrase(idx, updated)} onCancel={() => setEditingPhrase(null)} />
            : <PhraseRow    key={idx} phrase={phrase} onEdit={() => setEditingPhrase(idx)} onDelete={() => deletePhrase(idx)} />
        ))}
        {languagePhrases.length === 0 && <div style={{ color: '#94A3B8', fontSize: '0.82rem', padding: '10px 0' }}>No phrases — click "+ Add phrase" to add one.</div>}
      </div>

      {/* ── Reliable sources ───────────────────────────────────────────────── */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <SectionHeader title="🔗 Reliable sources (Sources page)" />
          <button onClick={addSourceGroup} style={{ background: '#059669', color: 'white', border: 'none', borderRadius: 6, padding: '5px 12px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}>+ Add category</button>
        </div>
        {reliableSources.map((group, idx) => (
          editingSrc === idx
            ? <SourceGroupEditor key={idx} group={group} onSave={updated => saveSourceGroup(idx, updated)} onCancel={() => setEditingSrc(null)} />
            : <SourceGroupRow    key={idx} group={group} onEdit={() => setEditingSrc(idx)} onDelete={() => deleteSourceGroup(idx)} />
        ))}
        {reliableSources.length === 0 && <div style={{ color: '#94A3B8', fontSize: '0.82rem', padding: '10px 0' }}>No source groups — click "+ Add category" to add one.</div>}
      </div>
    </div>
  )
}
