import React from 'react'
import PropTypes from 'prop-types'
import { Offcanvas } from 'react-bootstrap'

// Import stylesheet
import './Panel.css'

// Import components
import { Login } from '../../components/login/Login'
import { Register } from '../../components/register/Register'

export const Panel = props => {
  const { show, onClose } = props

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
