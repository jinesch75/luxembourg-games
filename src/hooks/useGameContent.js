/**
 * useGameContent — loads server-side content overrides from /api/content.
 *
 * Usage:
 *   const questions = useGameContent('questions', QUESTIONS)
 *
 * - Returns `staticData` immediately (no loading flash).
 * - If the server provides an override for `key`, switches to that data.
 * - Silently falls back to `staticData` if the API is unavailable.
 */

import { useState, useEffect } from 'react'

export function useGameContent(key, staticData) {
  const [data, setData] = useState(staticData)

  useEffect(() => {
    let cancelled = false
    fetch('/api/content')
      .then(r => {
        if (!r.ok) throw new Error('api unavailable')
        return r.json()
      })
      .then(overrides => {
        if (!cancelled && overrides[key] && Array.isArray(overrides[key]) && overrides[key].length > 0) {
          setData(overrides[key])
        }
      })
      .catch(() => {})
    return () => { cancelled = true }
  }, [key])

  return data
}
