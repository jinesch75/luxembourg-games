import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
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
    window.scrollTo(0, 0)
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

export default function App() {
  return (
    <LoginGate>
      <BrowserRouter>
        <FeatureFlagsProvider>
          <ScrollToTop />
          <Navbar />
          <main className="page">
            <AppRoutes />
          </main>
          <Footer />
        </FeatureFlagsProvider>
      </BrowserRouter>
    </LoginGate>
  )
}
