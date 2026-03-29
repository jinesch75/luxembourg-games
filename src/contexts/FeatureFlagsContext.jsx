/**
 * FeatureFlagsContext — manages feature visibility flags
 * Currently controls: Info Hub section (infoHubEnabled)
 *
 * Flags are persisted server-side in content.json via PUT /api/content.
 * Defaults to hidden (false) until server confirms otherwise.
 */

import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const FeatureFlagsContext = createContext({
  infoHubEnabled: false,
  loading: true,
  toggleInfoHub: async () => {},
})

const ADMIN_PASSWORD = 'biergerpakt'

export function FeatureFlagsProvider({ children }) {
  const [content, setContent] = useState({})
  const [loading, setLoading] = useState(true)

  const loadContent = useCallback(() => {
    return fetch('/api/content')
      .then(r => r.json())
      .then(data => {
        setContent(data || {})
        setLoading(false)
        return data || {}
      })
      .catch(() => {
        setLoading(false)
        return {}
      })
  }, [])

  useEffect(() => { loadContent() }, [loadContent])

  const toggleInfoHub = useCallback(async () => {
    // Always fetch latest content to avoid overwriting other settings
    const current = await loadContent()
    const newEnabled = !(current.infoHubEnabled === true)
    const merged = { ...current, infoHubEnabled: newEnabled }

    await fetch('/api/content', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-password': ADMIN_PASSWORD,
      },
      body: JSON.stringify(merged),
    })

    setContent(merged)
    return newEnabled
  }, [loadContent])

  return (
    <FeatureFlagsContext.Provider value={{
      infoHubEnabled: content.infoHubEnabled === true,
      loading,
      toggleInfoHub,
    }}>
      {children}
    </FeatureFlagsContext.Provider>
  )
}

export const useFeatureFlags = () => useContext(FeatureFlagsContext)
