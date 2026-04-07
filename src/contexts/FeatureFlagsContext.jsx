/**
 * FeatureFlagsContext — manages feature visibility flags
 * Controls: Info Hub, individual game visibility (games 3-6, spelling)
 *
 * Flags are persisted server-side in content.json via PUT /api/content.
 * Defaults to hidden (false) until server confirms otherwise.
 *
 * Game flags:
 *   famousGameEnabled   — Game 3: Famous Luxembourgers
 *   placesGameEnabled   — Game 4: Famous Places
 *   adminGameEnabled    — Game 5: Lëtz Admin
 *   economyGameEnabled  — Game 6: Lëtz Economy
 *   spellingGameEnabled — Language / Spelling game
 */

import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const FeatureFlagsContext = createContext({
  infoHubEnabled: false,
  famousGameEnabled: false,
  placesGameEnabled: false,
  adminGameEnabled: false,
  economyGameEnabled: false,
  spellingGameEnabled: false,
  loading: true,
  toggleInfoHub: async () => {},
  toggleFlag: async () => {},
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

  /* Toggle any boolean flag by key name */
  const toggleFlag = useCallback(async (flagKey) => {
    const current = await loadContent()
    const newEnabled = !(current[flagKey] === true)
    const merged = { ...current, [flagKey]: newEnabled }

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

  const toggleInfoHub = useCallback(() => toggleFlag('infoHubEnabled'), [toggleFlag])

  return (
    <FeatureFlagsContext.Provider value={{
      infoHubEnabled: content.infoHubEnabled === true,
      famousGameEnabled: content.famousGameEnabled === true,
      placesGameEnabled: content.placesGameEnabled === true,
      adminGameEnabled: content.adminGameEnabled === true,
      economyGameEnabled: content.economyGameEnabled === true,
      spellingGameEnabled: content.spellingGameEnabled === true,
      loading,
      toggleInfoHub,
      toggleFlag,
    }}>
      {children}
    </FeatureFlagsContext.Provider>
  )
}

export const useFeatureFlags = () => useContext(FeatureFlagsContext)
