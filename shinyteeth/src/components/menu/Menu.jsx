// Import React library
import React, { useState, useEffect } from 'react'

// Import React-Boostrap components
import { Container, Navbar, Nav, Dropdown, NavItem, NavLink } from 'react-bootstrap'

// Import React Router components
import { Link, useNavigate } from 'react-router-dom'

// Import from Redux
import { useSelector } from 'react-redux'
import { userData } from '../../redux/slices/userSlice'

// Import stylesheet
import './Menu.css'

// Import components
import { Panel } from '../../sections/panel/Panel'

// Navbar component
export const Menu = () => {
  // Get user data from Redux store
  const logedUserData = useSelector(userData)

  const navigate = useNavigate()

  const [show, setShow] = useState(false)
  const [option, setOption] = useState('Signin')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleClick = (option) => {
    setOption(option)
    handleShow()
  }

  useEffect(() => {
    console.log(logedUserData)
  })

  return (
    <Navbar bg="light" variant="light" sticky="top">
      <Container>

        <Navbar.Brand className='brandText' as={Link} to="/">
          Shiny Teeth
        </Navbar.Brand>

        <Nav className="me-auto" activeKey="/" onSelect={(selectedKey) => navigate(selectedKey)}>
          <Nav.Item>
            <Nav.Link className='menuText' eventKey="/services">Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='menuText' eventKey="/aboutus">Who we are</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='menuText' eventKey="/contactus">Contact us</Nav.Link>
          </Nav.Item>
        </Nav>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Nav>
            { logedUserData?.credentials?.token
              ? (
                <>
                  <Dropdown as={NavItem}>
                    <Dropdown.Toggle as={NavLink}>{logedUserData?.credentials?.firstName}</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Hello there!</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>)
              : (
                <>
                  <Nav.Link className='menuText' as={Link} onClick={() => handleClick('Signin')}>Signin</Nav.Link>
                  <Nav.Link className='menuText' as={Link} onClick={() => handleClick('Signup')}>Signup</Nav.Link>
                </>)
            }
          </Nav>
        </Navbar.Collapse>

      </Container>

      <Panel name={option} placement={'end'} scroll={true} backdrop={true} show={show} onClose={handleClose} />

    </Navbar>
  )
}
