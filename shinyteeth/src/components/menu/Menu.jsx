// Import from React
import React from 'react'

// Import React-Boostrap components
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

// Import React Router components
import { Link } from 'react-router-dom'

// Import stylesheet
import './Menu.css'

// Navbar component
export const Menu = () => {
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
            <Nav.Link className='menuText' as={Link} to="/signin">
              Signin
            </Nav.Link>
            <Nav.Link className='menuText' as={Link} to="/signup">
              Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
