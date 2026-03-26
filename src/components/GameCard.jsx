import { Link } from 'react-router-dom'

export default function GameCard({ path, emoji, title, description, color, badge }) {
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <div style={{
        background: 'white',
        borderRadius: 'var(--radius-lg)',
        padding: '20px',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        transition: 'transform 0.15s, box-shadow 0.15s',
        cursor: 'pointer'
      }}
        onTouchStart={e => {
          e.currentTarget.style.transform = 'scale(0.98)'
        }}
        onTouchEnd={e => {
          e.currentTarget.style.transform = 'scale(1)'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = 'var(--shadow)'
          e.currentTarget.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        <div style={{
          width: 56,
          height: 56,
          borderRadius: 16,
          background: color || 'var(--red-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.75rem',
          flexShrink: 0
        }}>{emoji}</div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 4
          }}>
            <span style={{
              fontWeight: 700,
              fontSize: '1rem',
              color: 'var(--gray-800)'
            }}>{title}</span>
            {badge && (
              <span style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                background: 'var(--red-light)',
                color: 'var(--red)',
                padding: '2px 7px',
                borderRadius: 999,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>{badge}</span>
            )}
          </div>
          <p style={{
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            margin: 0,
            lineHeight: 1.4
          }}>{description}</p>
        </div>

        <span style={{ color: 'var(--gray-300)', fontSize: '1.2rem', flexShrink: 0 }}>›</span>
      </div>
    </Link>
  )
}
