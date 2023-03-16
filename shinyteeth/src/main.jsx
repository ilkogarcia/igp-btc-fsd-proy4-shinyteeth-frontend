// Imports from React library
import React from 'react'
import ReactDOM from 'react-dom/client'

// Imports from React Router library
import { BrowserRouter as Router } from 'react-router-dom'

// Imports App layouts and components
import { App } from './App'

// This is the magic helper thats scroll to top
import ScrollToTop from './helpers/ScrollToTop'

// Import Axios interceptors
import { AxiosInterceptor } from './interceptors/Interceptors'

// Import App stylesheet
import './index.css'

AxiosInterceptor()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>
)
