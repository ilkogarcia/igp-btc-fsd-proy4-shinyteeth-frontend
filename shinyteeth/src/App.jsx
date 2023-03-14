// Immports from Reacts
import React, { useEffect } from 'react'

// Immports from Reacts Router
import { Route, Routes } from 'react-router-dom'

// Import Web Font Loader
import WebFont from 'webfontloader'

// Import app pages
import { Home } from './pages/home/Home'
import { Signin } from './pages/signin/Signin'
import { Signup } from './pages/signup/Signup'
import { Aboutus } from './pages/aboutus/Aboutus'

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
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/aboutus' element={<Aboutus />} />
      </Routes>
    <Footer />
    </>
  )
}
