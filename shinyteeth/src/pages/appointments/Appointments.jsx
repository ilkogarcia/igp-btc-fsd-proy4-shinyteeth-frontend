// Immport from React library
import React, { useState, useEffect } from 'react'

// Import from React Router
import { useNavigate } from 'react-router-dom'

// Import from Redux
import { useSelector } from 'react-redux'
import { userData } from '../../redux/slices/userSlice'

// Import stylesheet
import './Appointments.css'

export const Appointments = () => {
  const navigate = useNavigate()
  const logedUserData = useSelector(userData)

  useEffect(() => {
    if (!logedUserData?.credentials?.token) {
      navigate('/')
    }
  }, [])

  return (
    <div className='mainAppointmentContainer'>
        Appointments
    </div>
  )
}
