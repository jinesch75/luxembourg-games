/**
 * LangTabs — language tab bar for admin content editors.
 * Renders EN / FR tabs and highlights the active one.
 * Props:
 *   lang       — currently selected language code
 *   onChange   — callback(newLang)
 *   missingFor — optional array of lang codes that have no translation yet (shown with ⚠️)
 */

const TABS = [
  { code: 'en', flag: '🇬🇧', label: 'EN' },
  { code: 'fr', flag: '🇫🇷', label: 'FR' },
]

export default function LangTabs({ lang, onChange, missingFor = [] }) {
  return (
    <div style={{
      display: 'flex',
      gap: 4,
      marginBottom: 14,
      background: '#F8FAFC',
      borderRadius: 8,
      padding: 4,
    }}>
      {TABS.map(tab => {
        const active = tab.code === lang
        const missing = missingFor.includes(tab.code)
        return (
          <button
            key={tab.code}
            onClick={() => onChange(tab.code)}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
              padding: '6px 8px',
              border: 'none',
              borderRadius: 6,
              cursor: 'pointer',
              fontSize: '0.78rem',
              fontWeight: active ? 700 : 500,
              background: active ? 'white' : 'transparent',
              color: active ? '#16A34A' : '#64748B',
              boxShadow: active ? '0 1px 4px rgba(0,0,0,0.1)' : 'none',
              transition: 'all 0.15s',
            }}
          >
            <span style={{ fontSize: '0.9rem' }}>{tab.flag}</span>
            <span>{tab.label}</span>
            {missing && !active && (
              <span style={{ fontSize: '0.65rem', color: '#F59E0B' }} title="No translation yet">⚠️</span>
            )}
          </button>
        )
      })}
    </div>
  )
}
