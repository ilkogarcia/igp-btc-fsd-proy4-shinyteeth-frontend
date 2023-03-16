// Immports from Reacts
import React, { useState, useEffect } from 'react'

// Immports from Reacts Router
import { Route, Routes } from 'react-router-dom'

// Import Web Font Loader
import WebFont from 'webfontloader'

// Import SnackBar fron Notistack
import { SnackbarProvider } from 'notistack'
import { SnackbarUtilitiesConfigurator } from './utilities/SnackbarManager'

// Import app pages
import { Home } from './pages/home/Home'
import { Services } from './pages/services/Services'
import { Aboutus } from './pages/aboutus/Aboutus'
import { Contactus } from './pages/contactus/Contactus'
import { PrivacyPolicy } from './pages/privacypolicy/PrivacyPolicy'
import { TermsConditions } from './pages/termscontitions/TermsConditions'

// Import app sections and components
import { Menu } from './components/menu/Menu'
import { Footer } from './sections/footer/Footer'

// Import app services
import { testingService } from './services/testing.service'

// Import stylesheets
import './App.css'

export const App = () => {
  const [morty, setMorty] = useState({})
  const fetchMorty = async () => {
    const { data } = await testingService()
    setMorty(data)
  }

  // Load Google fonts used on App
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat', 'Karla']
      }
    })
    fetchMorty()
  }, [])

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
          <Route index path='/services' element={<Services /> } />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/terms' element={<TermsConditions />} />
          <Route path="*" element={<Home />} />
      </Routes>
      <SnackbarProvider>
        <SnackbarUtilitiesConfigurator />
      </SnackbarProvider>
      <Footer />
    </>
  )
}
