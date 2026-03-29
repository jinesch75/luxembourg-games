import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import QuizGame from './games/quiz/QuizGame'
import GeoGame from './games/geo/GeoGame'
import InfoHub from './components/InfoHub'
import AdminPage from './components/admin/AdminPage'
import LoginGate from './components/LoginGate'
import { FeatureFlagsProvider, useFeatureFlags } from './contexts/FeatureFlagsContext'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function AppRoutes() {
  const { infoHubEnabled } = useFeatureFlags()
  return (
    <Routes>
      <Route path="/"      element={<HomePage />} />
      <Route path="/quiz"  element={<QuizGame />} />
      <Route path="/geo"   element={<GeoGame />} />
      <Route path="/info"  element={infoHubEnabled ? <InfoHub /> : <Navigate to="/" replace />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  )
}

function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="page">
        <AppRoutes />
      </main>
    </>
  )
}

export default function App() {
  return (
    <LoginGate>
      <BrowserRouter>
        <FeatureFlagsProvider>
          <ScrollToTop />
          <AppLayout />
        </FeatureFlagsProvider>
      </BrowserRouter>
    </LoginGate>
  )
}
