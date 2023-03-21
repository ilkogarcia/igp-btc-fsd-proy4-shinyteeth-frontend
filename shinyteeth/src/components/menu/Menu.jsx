// Import React library
import React, { useState } from 'react'

// Import React-Boostrap components
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { PersonCircle, BoxArrowRight } from 'react-bootstrap-icons'

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

  const renderUserMenu = (role) => {
    switch (role) {
      case 2:
      case 3:
        return (<>
          <NavDropdown title={<PersonCircle size={25} />} id="nav-dropdown">
            <NavDropdown.Item eventKey="/profile">My Profile</NavDropdown.Item>
            <NavDropdown.Item eventKey="/appointments">Appointments</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => handleClick('Signout')}>{<BoxArrowRight size={20} />} Logout</NavDropdown.Item>
          </NavDropdown>
          </>)
      case 4:
        return (<>
          <NavDropdown title={<PersonCircle size={25} />} id="nav-dropdown">
            <NavDropdown.Item eventKey="/users">Users</NavDropdown.Item>
            <NavDropdown.Item eventKey="/patients">Patients</NavDropdown.Item>
            <NavDropdown.Item eventKey="/professionals">Professionals</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => handleClick('Signout')}>{<BoxArrowRight size={20} />} Logout</NavDropdown.Item>
          </NavDropdown>
          </>)
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
            {(logedUserData?.credentials?.token)
              ? (
                  renderUserMenu(logedUserData.credentials.roleId)
                )
              : (
                  <>
                    <Nav.Item><Nav.Link className='menuText' onClick={() => handleClick('Signin')}>Signin</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link className='menuText' onClick={() => handleClick('Signup')}>Signup</Nav.Link></Nav.Item>
                  </>
                )}
          </Nav>
        </Navbar.Collapse>

      </Container>

      <Panel name={option} placement={'end'} scroll={true} backdrop={true} show={show} onClose={handleClose} />

    </Navbar>
  )
}
