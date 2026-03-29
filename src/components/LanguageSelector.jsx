import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '../i18n/index'

export default function LanguageSelector() {
  const { i18n, t } = useTranslation()
  const [open, setOpen] = useState(false)

  const current = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0]

  const select = (code) => {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={t('common.language')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: 'rgba(255,255,255,0.15)',
          border: 'none',
          borderRadius: 8,
          padding: '6px 10px',
          cursor: 'pointer',
          color: 'white',
          fontFamily: 'var(--font)',
          fontSize: '0.875rem',
          fontWeight: 600
        }}
      >
        <span style={{ fontSize: '0.85rem' }}>{current.flag}</span>
        <span style={{ textTransform: 'uppercase', letterSpacing: '0.04em' }}>{current.code}</span>
        <span style={{ fontSize: '0.6rem', opacity: 0.8 }}>▼</span>
      </button>

      {open && (
        <>
          <div
            style={{
              position: 'fixed', inset: 0, zIndex: 90
            }}
            onClick={() => setOpen(false)}
          />
          <div style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            background: 'white',
            borderRadius: 12,
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            padding: 8,
            zIndex: 100,
            minWidth: 180,
            animation: 'fadeIn 0.15s ease'
          }}>
            {LANGUAGES.map(lang => (
              <button
                key={lang.code}
                onClick={() => select(lang.code)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  width: '100%',
                  padding: '10px 12px',
                  border: 'none',
                  borderRadius: 8,
                  cursor: 'pointer',
                  background: lang.code === i18n.language ? 'var(--red-light)' : 'transparent',
                  color: lang.code === i18n.language ? 'var(--red)' : 'var(--gray-700)',
                  fontFamily: 'var(--font)',
                  fontSize: '0.9rem',
                  fontWeight: lang.code === i18n.language ? 600 : 400,
                  textAlign: 'left'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
