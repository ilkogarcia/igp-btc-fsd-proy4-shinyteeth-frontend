// Import React library
import React, { useState } from 'react'

// Import React-Boostrap components
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

// Import React Router components
import { Link, useNavigate } from 'react-router-dom'

// Import from Redux
import { useSelector, useDispatch } from 'react-redux'
import { userData, logout } from '../../redux/slices/userSlice'

// Import stylesheet
import './Menu.css'

// Import components
import { Panel } from '../../sections/panel/Panel'

// Navbar component
export const Menu = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logedUserData = useSelector(userData)

  const [show, setShow] = useState(false)
  const [option, setOption] = useState('Signin')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleClick = (option) => {
    switch (option) {
      case 'Signin':
      case 'Signup':
        setOption(option)
        handleShow()
        break
      case 'Signout':
        dispatch(logout({ credentials: {} }))
        navigate('/')
        break
      default:
        console.log('Estamos en el case default')
        break
    }
  }

  return (
    <Navbar bg="light" variant="light" sticky="top">
      <Container>

        <Navbar.Brand className='brandText' as={Link} to="/">
          Shiny Teeth
        </Navbar.Brand>

        <Nav variant="pills" activeKey="/" onSelect={(selectedKey) => navigate(selectedKey)}>
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
          <Nav variant="pills" activeKey="1" onSelect={(selectedKey) => navigate(selectedKey)}>
            { logedUserData?.credentials?.userId
              ? (
                <>
                  <NavDropdown title={logedUserData?.credentials?.userId} id="nav-dropdown">
                    <NavDropdown.Item eventKey="/profile">Profile</NavDropdown.Item>
                    <NavDropdown.Item eventKey="/dates">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => handleClick('Signout')}>Logout</NavDropdown.Item>
                  </NavDropdown>
                </>)
              : (
                <>
                  <Nav.Item>
                    <Nav.Link className='menuText' onClick={() => handleClick('Signin')}>Signin</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className='menuText' onClick={() => handleClick('Signup')}>Signup</Nav.Link>
                  </Nav.Item>

                </>)
            }
          </Nav>
        </Navbar.Collapse>

      </Container>

      <Panel name={option} placement={'end'} scroll={true} backdrop={true} show={show} onClose={handleClose} />

    </Navbar>
  )
}
