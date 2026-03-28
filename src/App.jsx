import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import QuizGame from './games/quiz/QuizGame'
import GeoGame from './games/geo/GeoGame'
import InfoHub from './components/InfoHub'
import AdminPage from './components/admin/AdminPage'
import LoginGate from './components/LoginGate'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <LoginGate>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main className="page">
          <Routes>
            <Route path="/"      element={<HomePage />} />
            <Route path="/quiz"  element={<QuizGame />} />
            <Route path="/geo"   element={<GeoGame />} />
            <Route path="/info"  element={<InfoHub />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </LoginGate>
  )
}
