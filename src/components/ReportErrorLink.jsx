/**
 * ReportErrorLink — small red link + popup modal for users to report
 * errors in game questions/answers.
 *
 * Props:
 *   gameType   — 'quiz' | 'famous' | 'places' | 'economy' | 'geo' | 'admin' | 'spelling'
 *   questionId — unique identifier of the question (q.id, p.id, loc.id, etc.)
 *   questionText — the displayed question text (for context in the report)
 */

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function ReportErrorLink({ gameType, questionId, questionText }) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!message.trim()) return
    setStatus('sending')
    try {
      const res = await fetch('/api/report-error', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gameType,
          questionId,
          questionText,
          message: message.trim(),
        }),
      })
      if (res.ok) {
        setStatus('sent')
        setTimeout(() => { setOpen(false); setMessage(''); setStatus('idle') }, 2000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Small red link — right-aligned below the continue button */}
      <div style={{ textAlign: 'right', marginTop: 8 }}>
        <button
          onClick={() => setOpen(true)}
          style={{
            background: 'none',
            border: 'none',
            color: '#DC2626',
            fontSize: '0.68rem',
            fontWeight: 600,
            cursor: 'pointer',
            padding: '2px 0',
            textDecoration: 'underline',
            fontFamily: 'var(--font, inherit)',
            opacity: 0.8,
          }}
        >
          ⚑ {t('report.linkText', { defaultValue: 'Report an error' })}
        </button>
      </div>

      {/* Popup modal */}
      {open && (
        <div
          onClick={() => { if (status !== 'sending') { setOpen(false); setStatus('idle') } }}
          style={{
            position: 'fixed', inset: 0, zIndex: 2000,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 20,
            animation: 'fadeIn 0.15s ease',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#FFFFFF',
              borderRadius: 16,
              padding: '24px 22px',
              maxWidth: 400,
              width: '100%',
              boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
              animation: 'slideUp 0.2s ease',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#111827' }}>
                ⚑ {t('report.title', { defaultValue: 'Report an error' })}
              </h3>
              <button
                onClick={() => { setOpen(false); setStatus('idle') }}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: '1.2rem', color: '#9CA3AF', padding: 4,
                }}
              >✕</button>
            </div>

            {/* Question context */}
            {questionText && (
              <div style={{
                background: '#F9FAFB',
                border: '1px solid #E5E7EB',
                borderRadius: 10,
                padding: '10px 14px',
                marginBottom: 14,
                fontSize: '0.78rem',
                color: '#6B7280',
                lineHeight: 1.5,
              }}>
                <strong style={{ color: '#374151' }}>{t('report.question', { defaultValue: 'Question' })}:</strong> {questionText}
              </div>
            )}

            {status === 'sent' ? (
              <div style={{
                textAlign: 'center', padding: '20px 0',
                color: '#059669', fontWeight: 700, fontSize: '0.95rem',
              }}>
                ✓ {t('report.thankYou', { defaultValue: 'Thank you! Your report has been submitted.' })}
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder={t('report.placeholder', { defaultValue: 'Describe the error (e.g., wrong answer, typo, incorrect explanation…)' })}
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 10,
                    border: '1.5px solid #D1D5DB',
                    fontSize: '0.88rem',
                    fontFamily: 'var(--font, inherit)',
                    resize: 'vertical',
                    outline: 'none',
                    boxSizing: 'border-box',
                    lineHeight: 1.5,
                    transition: 'border-color 0.15s',
                  }}
                  onFocus={e => e.target.style.borderColor = '#6B7280'}
                  onBlur={e => e.target.style.borderColor = '#D1D5DB'}
                  autoFocus
                />

                {status === 'error' && (
                  <div style={{ color: '#DC2626', fontSize: '0.8rem', marginTop: 8, fontWeight: 600 }}>
                    {t('report.error', { defaultValue: 'Something went wrong. Please try again.' })}
                  </div>
                )}

                <div style={{ display: 'flex', gap: 10, marginTop: 14, justifyContent: 'flex-end' }}>
                  <button
                    type="button"
                    onClick={() => { setOpen(false); setStatus('idle') }}
                    style={{
                      background: '#F3F4F6',
                      border: '1px solid #D1D5DB',
                      borderRadius: 8,
                      padding: '10px 18px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      color: '#374151',
                    }}
                  >
                    {t('report.cancel', { defaultValue: 'Cancel' })}
                  </button>
                  <button
                    type="submit"
                    disabled={!message.trim() || status === 'sending'}
                    style={{
                      background: '#DC2626',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: 8,
                      padding: '10px 20px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      cursor: !message.trim() || status === 'sending' ? 'not-allowed' : 'pointer',
                      opacity: !message.trim() || status === 'sending' ? 0.6 : 1,
                      transition: 'opacity 0.15s',
                    }}
                  >
                    {status === 'sending' ? t('report.sending', { defaultValue: 'Sending…' }) : t('report.submit', { defaultValue: 'Submit Report' })}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
