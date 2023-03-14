// Immports from Reacts
import React, { useEffect } from 'react'

// Immports from Reacts Router
import { Route, Routes } from 'react-router-dom'

// Import Web Font Loader
import WebFont from 'webfontloader'

// Import app pages
import { Home } from './pages/home/Home'
import { Services } from './pages/services/Services'
import { Aboutus } from './pages/aboutus/Aboutus'
import { Contactus } from './pages/contactus/Contactus'
import { Signin } from './pages/signin/Signin'
import { Signup } from './pages/signup/Signup'

// Immport app sections and components
import { Menu } from './components/menu/Menu'
import { Footer } from './sections/footer/Footer'

// Import stylesheets
import './App.css'

export const App = () => {
  // Load Google fonts used on App
  useEffect(() => {
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
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
      </Routes>
    <Footer />
    </>
  )
}
