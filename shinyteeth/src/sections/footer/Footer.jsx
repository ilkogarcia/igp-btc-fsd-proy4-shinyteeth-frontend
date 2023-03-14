// Import from React library
import React from 'react'

// Import React Router components
import { Link } from 'react-router-dom'

// Import React-Bootstrap components
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons'

// Import stylesheet
import './Footer.css'

export const Footer = () => {
  return (
      <Container fluid className='p-5 bg-secondary text-white'>
        <Row className='justify-contect-center'>
          <Col xs md='6' lg='4'>
            <span className='textLogo'>Shiny Teeth</span><br />
            <span className='tagLine'>los dientes más brillantes</span><br />
            <Container>
              <Row xs='auto' className='mt-3'>
                <Col><Facebook className='socialIcon' size={20} /></Col>
                <Col><Instagram className='socialIcon' size={20} /></Col>
                <Col><Twitter className='socialIcon' size={20} /></Col>
              </Row>
            </Container>
          </Col>
          <Col xs md='6' lg='2'>
            <Nav className="flex-column">
              <Nav.Link className="link-light" as={Link} to="/">Home</Nav.Link>
              <Nav.Link className="link-light" as={Link} to="/services">Services</Nav.Link>
              <Nav.Link className="link-light" as={Link} to="/aboutus">Who we are</Nav.Link>
              <Nav.Link className="link-light" as={Link} to="/contactus">Contact us</Nav.Link>
            </Nav>
          </Col>
          <Col xs md='6' lg='3'>
          <Nav className="flex-column">
              <Nav.Link className="link-light" as={Link} to="/">Terms & Contitions</Nav.Link>
              <Nav.Link className="link-light" as={Link} to="/services">Privacy Policy</Nav.Link>
            </Nav>
          </Col>
          <Col xs md='6' lg='3'>
            <span className='footerColumTitle'>Contact</span><br />
            C/Emilio Baró 82 bajo 46020<br />
            Tel. 96 329 98 33<br />
            Whatsap. 644 700 289<br />
          </Col>
        </Row>
        <Row className='justify-contect-center mt-5'>
          <Col>
            <span className='textCopy'>Copyright &copy; All right reserved.</span>
          </Col>
        </Row>
      </Container>
  )
}
