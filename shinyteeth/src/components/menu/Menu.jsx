// Import from React
import React, { useState } from 'react'

// Import React-Boostrap components
import { Container, Navbar, Nav } from 'react-bootstrap'

// Import React Router components
import { Link } from 'react-router-dom'

// Import stylesheet
import './Menu.css'
import { Panel } from '../../sections/panel/Panel'

// Navbar component
export const Menu = () => {
  const [show, setShow] = useState(false)
  const [option, setOption] = useState('Signin')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleClick = (option) => {
    setOption(option)
    handleShow()
  }

  return (
    <Navbar bg="light" variant="light" sticky="top">
      <Container>
        <Navbar.Brand className='brandText' as={Link} to="/">
          Shiny Teeth
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className='menuText' as={Link} to="/services">
            Services
          </Nav.Link>
          <Nav.Link className='menuText' as={Link} to="/aboutus">
            Who we are
          </Nav.Link>
          <Nav.Link className='menuText' as={Link} to="/contactus">
            Contact us
          </Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link className='menuText' as={Link} onClick={() => handleClick('Signin')}>
              Signin
            </Nav.Link>
            <Nav.Link className='menuText' as={Link} onClick={() => handleClick('Signup')}>
              Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Panel name={option} placement={'end'} scroll={true} backdrop={true} show={show} onClose={handleClose} />
    </Navbar>
  )
}
