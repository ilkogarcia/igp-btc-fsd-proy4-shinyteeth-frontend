// Import React library
import React, { useEffect } from 'react'

// Import PropTypes
import PropTypes from 'prop-types'

// Imports from React Bootstrap
import { Offcanvas } from 'react-bootstrap'

// Import from Redux
import { useSelector } from 'react-redux'
import { userData } from '../../redux/slices/userSlice'

// Import components
import { Login } from '../../components/login/Login'
import { Register } from '../../components/register/Register'

// Import stylesheet
import './Panel.css'

export const Panel = props => {
  const { show, onClose } = props
  const logedUserData = useSelector(userData)

  // Effect Hook to perform side effects in Panel function component
  useEffect(() => {
    if (logedUserData?.credentials?.token !== '') {
      onClose()
    }
  }, [logedUserData])

  return (
    <>
      <Offcanvas show={show} onHide={onClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{props.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
            (props.name === 'Signin')
              ? <Login />
              : <Register />
          }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

// Use PropTypes for type checking
Panel.propTypes = {
  // key is the name of the prop andvalue is the PropType
  name: PropTypes.string,
  placement: PropTypes.string,
  scroll: PropTypes.bool,
  backdrop: PropTypes.bool,
  show: PropTypes.bool,
  onClose: PropTypes.func
}
