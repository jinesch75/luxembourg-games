/**
 * AdminImportExport — export quiz questions to Excel, import them back.
 * Changes go live instantly via the content override system (no rebuild needed).
 */

import { useState, useRef, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

const ADMIN_PASSWORD = 'biergerpakt'

const S = {
  card: {
    background: 'white',
    borderRadius: 14,
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
    overflow: 'hidden',
    marginBottom: 20,
  },
  cardHeader: {
    padding: '18px 20px 14px',
    borderBottom: '1px solid #F1F5F9',
  },
  cardTitle: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#1E293B',
    margin: 0,
  },
  cardDesc: {
    fontSize: '0.82rem',
    color: '#64748B',
    margin: '4px 0 0',
    lineHeight: 1.5,
  },
  cardBody: {
    padding: '18px 20px',
  },
  btn: (color, disabled) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: disabled ? '#CBD5E1' : color,
    color: 'white',
    border: 'none',
    borderRadius: 8,
    padding: '12px 22px',
    fontSize: '0.9rem',
    fontWeight: 700,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.15s',
    letterSpacing: '0.02em',
  }),
  btnOutline: (color, disabled) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'white',
    color: disabled ? '#CBD5E1' : color,
    border: `2px solid ${disabled ? '#CBD5E1' : color}`,
    borderRadius: 8,
    padding: '10px 20px',
    fontSize: '0.9rem',
    fontWeight: 700,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.15s',
    letterSpacing: '0.02em',
  }),
  dropzone: (active) => ({
    border: `2px dashed ${active ? '#16A34A' : '#CBD5E1'}`,
    borderRadius: 12,
    padding: '32px 20px',
    textAlign: 'center',
    cursor: 'pointer',
    background: active ? '#F0FDF4' : '#FAFAFA',
    transition: 'all 0.2s',
    marginBottom: 16,
  }),
  dropzoneText: {
    fontSize: '0.88rem',
    color: '#64748B',
    margin: 0,
  },
  dropzoneIcon: {
    fontSize: '2rem',
    marginBottom: 8,
  },
  result: (ok) => ({
    padding: '14px 18px',
    borderRadius: 10,
    background: ok ? '#F0FDF4' : '#FEF2F2',
    border: `1px solid ${ok ? '#BBF7D0' : '#FECACA'}`,
    marginTop: 16,
    fontSize: '0.85rem',
    color: ok ? '#166534' : '#991B1B',
    lineHeight: 1.6,
  }),
  warning: {
    padding: '10px 14px',
    borderRadius: 8,
    background: '#FFFBEB',
    border: '1px solid #FDE68A',
    marginTop: 10,
    fontSize: '0.78rem',
    color: '#92400E',
    lineHeight: 1.5,
  },
  fileName: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    background: '#F1F5F9',
    borderRadius: 6,
    padding: '6px 12px',
    fontSize: '0.82rem',
    color: '#334155',
    fontWeight: 600,
    marginBottom: 14,
  },
  statusBanner: (active) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '14px 18px',
    borderRadius: 10,
    background: active
      ? 'linear-gradient(135deg, #065F46 0%, #047857 100%)'
      : 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
    color: 'white',
    marginBottom: 20,
    fontSize: '0.88rem',
    fontWeight: 600,
  }),
}

export default function AdminImportExport() {
  const { t } = useTranslation()

  // ── Status state ──
  const [status, setStatus] = useState(null) // { hasOverride, count }

  // ── Export state ──
  const [exporting, setExporting] = useState(false)
  const [exportResult, setExportResult] = useState(null)

  // ── Import state ──
  const [file, setFile] = useState(null)
  const [dragActive, setDragActive] = useState(false)
  const [importing, setImporting] = useState(false)
  const [importResult, setImportResult] = useState(null)
  const fileInputRef = useRef(null)

  // ── Revert state ──
  const [reverting, setReverting] = useState(false)
  const [revertResult, setRevertResult] = useState(null)

  // ── Load current status ──
  const loadStatus = useCallback(() => {
    fetch('/api/admin/quiz-status', {
      headers: { 'x-admin-password': ADMIN_PASSWORD },
    })
      .then(r => r.json())
      .then(setStatus)
      .catch(() => {})
  }, [])

  useEffect(() => { loadStatus() }, [loadStatus])

  // ── Export handler ──
  const handleExport = async () => {
    setExporting(true)
    setExportResult(null)
    try {
      const resp = await fetch('/api/admin/export-quiz', {
        headers: { 'x-admin-password': ADMIN_PASSWORD },
      })
      if (!resp.ok) throw new Error(`Server error: ${resp.status}`)
      const blob = await resp.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'Quiz Questions.xlsx'
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
      setExportResult({ ok: true })
    } catch (e) {
      setExportResult({ ok: false, error: e.message })
    } finally {
      setExporting(false)
    }
  }

  // ── Import handlers ──
  const handleFile = (f) => {
    if (f && f.name.match(/\.xlsx?$/i)) {
      setFile(f)
      setImportResult(null)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragActive(false)
    if (e.dataTransfer.files.length > 0) handleFile(e.dataTransfer.files[0])
  }

  const handleImport = async () => {
    if (!file) return
    setImporting(true)
    setImportResult(null)
    setRevertResult(null)
    try {
      const buf = await file.arrayBuffer()
      const resp = await fetch('/api/admin/import-quiz', {
        method: 'POST',
        headers: {
          'x-admin-password': ADMIN_PASSWORD,
          'Content-Type': 'application/octet-stream',
        },
        body: buf,
      })
      const data = await resp.json()
      if (!resp.ok) throw new Error(data.error || `Server error: ${resp.status}`)
      setImportResult({ ok: true, ...data })
      setFile(null)
      loadStatus()
    } catch (e) {
      setImportResult({ ok: false, error: e.message })
    } finally {
      setImporting(false)
    }
  }

  // ── Revert handler ──
  const handleRevert = async () => {
    if (!confirm(t('adminPage.revertConfirm'))) return
    setReverting(true)
    setRevertResult(null)
    setImportResult(null)
    try {
      const resp = await fetch('/api/admin/import-quiz', {
        method: 'DELETE',
        headers: { 'x-admin-password': ADMIN_PASSWORD },
      })
      const data = await resp.json()
      if (!resp.ok) throw new Error(data.error || `Server error: ${resp.status}`)
      setRevertResult({ ok: true, total: data.total })
      loadStatus()
    } catch (e) {
      setRevertResult({ ok: false, error: e.message })
    } finally {
      setReverting(false)
    }
  }

  return (
    <div>
      {/* ── Status banner ── */}
      {status && (
        <div style={S.statusBanner(status.hasOverride)}>
          <span style={{ fontSize: '1.3rem' }}>{status.hasOverride ? '✏️' : '📦'}</span>
          <div style={{ flex: 1 }}>
            {status.hasOverride
              ? t('adminPage.statusCustom', { count: status.count })
              : t('adminPage.statusBundled')}
          </div>
          {status.hasOverride && (
            <button
              onClick={handleRevert}
              disabled={reverting}
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '1.5px solid rgba(255,255,255,0.4)',
                borderRadius: 6,
                padding: '7px 14px',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: reverting ? 'not-allowed' : 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {reverting ? '...' : `↩ ${t('adminPage.revertBtn')}`}
            </button>
          )}
        </div>
      )}

      {/* ── Revert result ── */}
      {revertResult && (
        <div style={S.result(revertResult.ok)}>
          {revertResult.ok
            ? `✅ ${t('adminPage.revertSuccess', { total: revertResult.total })}`
            : `❌ ${revertResult.error}`}
        </div>
      )}

      {/* ── Export Card ── */}
      <div style={S.card}>
        <div style={S.cardHeader}>
          <h3 style={S.cardTitle}>📤 {t('adminPage.exportTitle')}</h3>
          <p style={S.cardDesc}>{t('adminPage.exportDesc')}</p>
        </div>
        <div style={S.cardBody}>
          <button
            onClick={handleExport}
            disabled={exporting}
            style={S.btn('#16A34A', exporting)}
          >
            {exporting ? '⏳' : '📥'} {exporting ? t('adminPage.exporting') : t('adminPage.exportBtn')}
          </button>
          {exportResult && (
            <div style={S.result(exportResult.ok)}>
              {exportResult.ok
                ? `✅ ${t('adminPage.exportSuccess')}`
                : `❌ ${exportResult.error}`}
            </div>
          )}
        </div>
      </div>

      {/* ── Import Card ── */}
      <div style={S.card}>
        <div style={S.cardHeader}>
          <h3 style={S.cardTitle}>📥 {t('adminPage.importTitle')}</h3>
          <p style={S.cardDesc}>{t('adminPage.importDesc')}</p>
        </div>
        <div style={S.cardBody}>
          {/* Drop zone */}
          <div
            style={S.dropzone(dragActive)}
            onDragOver={(e) => { e.preventDefault(); setDragActive(true) }}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <div style={S.dropzoneIcon}>{dragActive ? '📂' : '📎'}</div>
            <p style={S.dropzoneText}>
              {dragActive
                ? t('adminPage.dropHere')
                : t('adminPage.dropzoneText')}
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept=".xlsx,.xls"
              style={{ display: 'none' }}
              onChange={(e) => { if (e.target.files[0]) handleFile(e.target.files[0]) }}
            />
          </div>

          {/* Selected file */}
          {file && (
            <>
              <div style={S.fileName}>
                📄 {file.name}
                <button
                  onClick={() => { setFile(null); setImportResult(null) }}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94A3B8', fontSize: '1rem', padding: 0, marginLeft: 4 }}
                >
                  ✕
                </button>
              </div>
              <button
                onClick={handleImport}
                disabled={importing}
                style={S.btn('#2563EB', importing)}
              >
                {importing ? '⏳' : '🚀'} {importing ? t('adminPage.importing') : t('adminPage.importBtn')}
              </button>
            </>
          )}

          {/* Import result */}
          {importResult && (
            <div style={S.result(importResult.ok)}>
              {importResult.ok ? (
                <>
                  ✅ {t('adminPage.importSuccess', { total: importResult.total })}
                  <div style={{ marginTop: 6, fontSize: '0.8rem', color: '#475569' }}>
                    {Object.entries(importResult.summary || {}).map(([level, count]) => (
                      <span key={level} style={{ marginRight: 12 }}>
                        {level}: <strong>{count}</strong>
                      </span>
                    ))}
                  </div>
                  <div style={{ marginTop: 8, fontSize: '0.78rem', color: '#047857', fontWeight: 600 }}>
                    🟢 {t('adminPage.importLiveNote')}
                  </div>
                </>
              ) : (
                `❌ ${importResult.error}`
              )}
            </div>
          )}

          {/* Warnings */}
          {importResult?.ok && importResult.warnings?.length > 0 && (
            <div style={S.warning}>
              <strong>⚠️ Warnings:</strong>
              {importResult.warnings.map((w, i) => <div key={i}>{w}</div>)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
