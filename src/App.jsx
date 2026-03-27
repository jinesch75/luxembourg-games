import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import QuizGame from './games/quiz/QuizGame'
import GeoGame from './games/geo/GeoGame'
import ConnectGame from './games/connect/ConnectGame'
import InfoHub from './components/InfoHub'
import AdminPage from './components/admin/AdminPage'
import LoginGate from './components/LoginGate'

export default function App() {
  return (
    <LoginGate>
      <BrowserRouter>
        <Navbar />
        <main className="page">
          <Routes>
            <Route path="/"        element={<HomePage />} />
            <Route path="/quiz"    element={<QuizGame />} />
            <Route path="/geo"     element={<GeoGame />} />
            <Route path="/connect" element={<ConnectGame />} />
            <Route path="/info"    element={<InfoHub />} />
            <Route path="/admin"   element={<AdminPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </LoginGate>
  )
}
