/**
 * AdminErrorReports — admin panel tab for reviewing user-reported errors
 */

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const ADMIN_PASSWORD = 'biergerpakt'

const STATUS_COLORS = {
  new:       { color: '#DC2626', bg: '#FEF2F2', border: '#FECDD3', labelKey: 'adminPage.statusNew' },
  reviewed:  { color: '#D97706', bg: '#FFFBEB', border: '#FDE68A', labelKey: 'adminPage.statusReviewed' },
  resolved:  { color: '#059669', bg: '#ECFDF5', border: '#A7F3D0', labelKey: 'adminPage.statusResolved' },
  dismissed: { color: '#6B7280', bg: '#F3F4F6', border: '#D1D5DB', labelKey: 'adminPage.statusDismissed' },
}

const GAME_ICONS = {
  quiz:     { icon: '🎯', labelKey: 'adminPage.gameQuiz' },
  famous:   { icon: '🌟', labelKey: 'adminPage.gameFamous' },
  places:   { icon: '🏛️', labelKey: 'adminPage.gamePlaces' },
  economy:  { icon: '💶', labelKey: 'adminPage.gameEconomy' },
  geo:      { icon: '🗺️', labelKey: 'adminPage.gameGeo' },
  admin:    { icon: '📋', labelKey: 'adminPage.gameAdmin' },
  spelling: { icon: '📝', labelKey: 'adminPage.gameSpelling' },
  unknown:  { icon: '❓', labelKey: 'adminPage.gameUnknown' },
}

export default function AdminErrorReports() {
  const { t } = useTranslation()
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter]   = useState('all') // all | new | reviewed | resolved | dismissed

  const fetchReports = async () => {
    try {
      const res = await fetch('/api/error-reports', {
        headers: { 'x-admin-password': ADMIN_PASSWORD },
      })
      if (res.ok) {
        const data = await res.json()
        setReports(data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)))
      }
    } catch (e) {
      console.error('Failed to fetch error reports:', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchReports() }, [])

  const updateStatus = async (id, status) => {
    try {
      await fetch(`/api/error-reports/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': ADMIN_PASSWORD,
        },
        body: JSON.stringify({ status }),
      })
      setReports(prev => prev.map(r => r.id === id ? { ...r, status } : r))
    } catch (e) {
      console.error('Failed to update report:', e)
    }
  }

  const deleteReport = async (id) => {
    if (!window.confirm(t('adminPage.deleteConfirm'))) return
    try {
      await fetch(`/api/error-reports/${id}`, {
        method: 'DELETE',
        headers: { 'x-admin-password': ADMIN_PASSWORD },
      })
      setReports(prev => prev.filter(r => r.id !== id))
    } catch (e) {
      console.error('Failed to delete report:', e)
    }
  }

  const filtered = filter === 'all' ? reports : reports.filter(r => r.status === filter)
  const newCount = reports.filter(r => r.status === 'new').length

  if (loading) {
    return <div style={{ textAlign: 'center', padding: 40, color: '#6B7280' }}>{t('adminPage.loadingReports')}</div>
  }

  return (
    <div>
      {/* Summary bar */}
      <div style={{
        display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap',
      }}>
        <SummaryCard label={t('adminPage.summaryTotal')} value={reports.length} color="#374151" />
        <SummaryCard label={t('adminPage.summaryNew')} value={newCount} color="#DC2626" highlight={newCount > 0} />
        <SummaryCard label={t('adminPage.summaryReviewed')} value={reports.filter(r => r.status === 'reviewed').length} color="#D97706" />
        <SummaryCard label={t('adminPage.summaryResolved')} value={reports.filter(r => r.status === 'resolved').length} color="#059669" />
      </div>

      {/* Filter bar */}
      <div style={{
        display: 'flex', gap: 8, marginBottom: 18, flexWrap: 'wrap',
      }}>
        {['all', 'new', 'reviewed', 'resolved', 'dismissed'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: '6px 16px',
              borderRadius: 8,
              border: filter === f ? '2px solid #16A34A' : '1px solid #D1D5DB',
              background: filter === f ? '#F0FDF4' : '#FFFFFF',
              color: filter === f ? '#16A34A' : '#6B7280',
              fontWeight: filter === f ? 700 : 500,
              fontSize: '0.82rem',
              cursor: 'pointer',
              textTransform: 'capitalize',
            }}
          >
            {f === 'all' ? `All (${reports.length})` : `${f} (${reports.filter(r => r.status === f).length})`}
          </button>
        ))}
      </div>

      {/* Reports list */}
      {filtered.length === 0 ? (
        <div style={{
          textAlign: 'center', padding: '48px 20px',
          color: '#9CA3AF', fontSize: '0.95rem',
        }}>
          {reports.length === 0
            ? `🎉 ${t('adminPage.noReportsYet')}`
            : t('adminPage.noReportsMatch')}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {filtered.map(report => (
            <ReportCard
              key={report.id}
              report={report}
              onUpdateStatus={updateStatus}
              onDelete={deleteReport}
              t={t}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function SummaryCard({ label, value, color, highlight }) {
  return (
    <div style={{
      flex: '1 1 100px',
      background: highlight ? '#FEF2F2' : '#FFFFFF',
      border: `1px solid ${highlight ? '#FECDD3' : '#E5E7EB'}`,
      borderRadius: 12,
      padding: '14px 18px',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: '1.6rem', fontWeight: 800, color, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{label}</div>
    </div>
  )
}

function ReportCard({ report, onUpdateStatus, onDelete, t }) {
  const statusDef = STATUS_COLORS[report.status] || STATUS_COLORS.new
  const gameDef = GAME_ICONS[report.gameType] || GAME_ICONS.unknown
  const date = new Date(report.timestamp)
  const dateStr = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  const timeStr = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })

  return (
    <div style={{
      background: '#FFFFFF',
      border: `1px solid ${report.status === 'new' ? '#FECDD3' : '#E5E7EB'}`,
      borderLeft: `4px solid ${statusDef.color}`,
      borderRadius: 12,
      padding: '18px 20px',
      boxShadow: report.status === 'new' ? '0 2px 8px rgba(220,38,38,0.08)' : 'none',
    }}>
      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, flexWrap: 'wrap' }}>
        {/* Game badge */}
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          background: '#F3F4F6', borderRadius: 6, padding: '3px 10px',
          fontSize: '0.75rem', fontWeight: 600, color: '#374151',
        }}>
          {gameDef.icon} {t(gameDef.labelKey)}
        </span>

        {/* Status badge */}
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 4,
          background: statusDef.bg, border: `1px solid ${statusDef.border}`,
          borderRadius: 999, padding: '2px 12px',
          fontSize: '0.7rem', fontWeight: 700, color: statusDef.color,
          textTransform: 'uppercase', letterSpacing: '0.06em',
        }}>
          {report.status === 'new' && '●'} {t(statusDef.labelKey)}
        </span>

        {/* Date */}
        <span style={{ marginLeft: 'auto', fontSize: '0.72rem', color: '#9CA3AF' }}>
          {dateStr} {timeStr}
        </span>
      </div>

      {/* Question info */}
      <div style={{
        background: '#F9FAFB', border: '1px solid #E5E7EB',
        borderRadius: 8, padding: '10px 14px', marginBottom: 12,
        fontSize: '0.82rem', color: '#374151', lineHeight: 1.55,
      }}>
        <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
          {t('adminPage.questionLabel')} · ID: {report.questionId}
        </div>
        {report.questionText || t('adminPage.noQuestionText')}
      </div>

      {/* User message */}
      <div style={{
        background: '#FFF7ED', border: '1px solid #FED7AA',
        borderRadius: 8, padding: '10px 14px', marginBottom: 14,
        fontSize: '0.88rem', color: '#9A3412', lineHeight: 1.55,
        fontStyle: 'italic',
      }}>
        "{report.message}"
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {report.status !== 'reviewed' && (
          <ActionBtn label={t('adminPage.markReviewed')} color="#D97706" onClick={() => onUpdateStatus(report.id, 'reviewed')} />
        )}
        {report.status !== 'resolved' && (
          <ActionBtn label={t('adminPage.markResolved')} color="#059669" onClick={() => onUpdateStatus(report.id, 'resolved')} />
        )}
        {report.status !== 'dismissed' && (
          <ActionBtn label={t('adminPage.dismiss')} color="#6B7280" onClick={() => onUpdateStatus(report.id, 'dismissed')} />
        )}
        <button
          onClick={() => onDelete(report.id)}
          style={{
            marginLeft: 'auto',
            background: 'none', border: 'none',
            color: '#DC2626', fontSize: '0.75rem',
            cursor: 'pointer', fontWeight: 600,
            opacity: 0.6,
          }}
        >
          🗑 {t('adminPage.delete')}
        </button>
      </div>
    </div>
  )
}

function ActionBtn({ label, color, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: '#FFFFFF',
        border: `1px solid ${color}40`,
        borderRadius: 6,
        padding: '5px 14px',
        fontSize: '0.78rem',
        fontWeight: 600,
        color,
        cursor: 'pointer',
        transition: 'background 0.15s',
      }}
      onMouseEnter={e => e.currentTarget.style.background = `${color}10`}
      onMouseLeave={e => e.currentTarget.style.background = '#FFFFFF'}
    >
      {label}
    </button>
  )
}
