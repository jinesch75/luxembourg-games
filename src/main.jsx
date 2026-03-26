import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './i18n/index'
import { trackVisit } from './utils/analytics'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Fire-and-forget visit tracking (geo-IP lookup is async)
trackVisit()
