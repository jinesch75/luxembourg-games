import { useState } from 'react'

const PASSWORD = 'biergerpakt'
const STORAGE_KEY = 'letz_play_auth'

export default function LoginGate({ children }) {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) === '1'
  )
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  if (unlocked) return children

  function handleSubmit(e) {
    e.preventDefault()
    if (input === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, '1')
      setUnlocked(true)
    } else {
      setError(true)
      setInput('')
      setTimeout(() => setError(false), 600)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--gray-50)',
      padding: '16px',
    }}>
      <div className="card" style={{ width: '100%', maxWidth: '360px', textAlign: 'center' }}>

        {/* Flag strip */}
        <div style={{
          display: 'flex',
          height: '6px',
          borderRadius: '4px',
          overflow: 'hidden',
          marginBottom: '28px',
        }}>
          <div style={{ flex: 1, background: '#EF3340' }} />
          <div style={{ flex: 1, background: '#FFFFFF', border: '1px solid var(--border)' }} />
          <div style={{ flex: 1, background: '#00A3E0' }} />
        </div>

        <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🇱🇺</div>
        <h2 style={{ marginBottom: '6px' }}>Lëtz Play</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
          Enter the password to access the site.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Password"
            autoFocus
            className={error ? 'animate-shake' : ''}
            style={{
              width: '100%',
              padding: '12px 14px',
              borderRadius: 'var(--radius)',
              border: `2px solid ${error ? 'var(--red)' : 'var(--border)'}`,
              fontSize: '1rem',
              fontFamily: 'var(--font)',
              outline: 'none',
              marginBottom: '12px',
              transition: 'border-color 0.15s',
              background: error ? 'var(--red-light)' : 'white',
            }}
          />
          <button type="submit" className="btn btn-primary btn-full">
            Enter
          </button>
        </form>

        {error && (
          <p style={{ color: 'var(--red)', fontSize: '0.85rem', marginTop: '10px' }}>
            Incorrect password. Please try again.
          </p>
        )}
      </div>
    </div>
  )
}
