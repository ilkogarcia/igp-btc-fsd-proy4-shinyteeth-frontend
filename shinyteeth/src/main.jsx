// Import React library
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import Redux and App store
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { store } from './redux/store'

// Import React Router library
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
