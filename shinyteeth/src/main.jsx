// Imports from React library
import React from 'react'
import ReactDOM from 'react-dom/client'

// Imports from React Router library
import { BrowserRouter } from 'react-router-dom'

// Imports App layouts and components
import { App } from './App'

// Import App stylesheet
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
