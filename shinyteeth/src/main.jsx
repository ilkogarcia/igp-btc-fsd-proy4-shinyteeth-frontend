// Import react library
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import redux and app store
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

// Import react router library
import { BrowserRouter as Router } from 'react-router-dom'

// Import App, components and stylesheets
import { App } from './App'
import { AxiosInterceptor } from './interceptors/Interceptors'
import ScrollToTop from './helpers/ScrollToTop'
import './index.css'

const persistor = persistStore(store)

AxiosInterceptor()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <ScrollToTop />
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
