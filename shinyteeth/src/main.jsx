// Import react library
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import redux and app store
import { Provider } from 'react-redux'
import { store } from './redux/store'

// Import react router library
import { BrowserRouter as Router } from 'react-router-dom'

// Import App, components and stylesheets
import { App } from './App'
import { AxiosInterceptor } from './interceptors/Interceptors'
import ScrollToTop from './helpers/ScrollToTop'
import './index.css'

// AxiosInterceptor()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
)
