// Immports from Reacts
import React, { useEffect } from 'react'

// Immports from Reacts Router
import { Route, Routes, Navigate } from 'react-router-dom'

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
import { Profile } from './pages/profile/Profile'
import { Appointments } from './pages/appointments/Appointments'

// Import app sections and components
import { Menu } from './components/menu/Menu'
import { Footer } from './sections/footer/Footer'

// Import stylesheets
import './App.css'

export const App = () => {
  // Hook that run just once
  useEffect(() => {
    // Load Google fonts used on App
    WebFont.load({
      google: {
        families: ['Montserrat', 'Karla']
      }
    })
  }, [])

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services /> } />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/terms' element={<TermsConditions />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/appointments' element={<Appointments />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <SnackbarProvider>
        <SnackbarUtilitiesConfigurator />
      </SnackbarProvider>
      <Footer />
    </>
  )
}
