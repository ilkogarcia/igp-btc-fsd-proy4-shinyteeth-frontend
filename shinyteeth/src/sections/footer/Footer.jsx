// Import from React library
import React from 'react'

// Import React Router components
import { useNavigate } from 'react-router-dom'

// Import React-Bootstrap components
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons'

// Import stylesheet
import './Footer.css'

export const Footer = () => {
  const navigate = useNavigate()

  return (
      <Container fluid className='p-5 bg-secondary text-white'>
        <Row className='justify-contect-center'>
          <Col xs md='6' lg='4'>
            <p className='footerLogo'>Shiny Teeth</p>
            <p className='footerTagline'>tús dientes más brillantes</p>
            <Container>
              <Row xs='auto' className='mt-3'>
                <Col><Facebook className='footerSocialIcon' size={20} /></Col>
                <Col><Instagram className='footerSocialIcon' size={20} /></Col>
                <Col><Twitter className='footerSocialIcon' size={20} /></Col>
              </Row>
            </Container>
          </Col>
          <Col xs md='6' lg='2'>
            <Nav className="flex-column" activeKey="/" onSelect={(selectedKey) => navigate(selectedKey)}>
              <Nav.Item>
                <Nav.Link className='footerMenu' eventKey='/'>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='footerMenu' eventKey='/services'>Services</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='footerMenu' eventKey='/aboutus'>Who we are</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='footerMenu' eventKey='/contactus'>Contact us</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col xs md='6' lg='3'>
            <Nav className="flex-column" onSelect={(selectedKey) => navigate(selectedKey)}>
              <Nav.Item>
                <Nav.Link className='footerMenu' eventKey='/terms'>Terms & Contitions</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='footerMenu' eventKey='/privacy'>Privacy Policy</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col xs md='6' lg='3'>
            <p className='footerColumTitle'>Contact</p>
            <p className='footerColumText'>C/Emilio Baró 82 bajo 46020</p>
            <p className='footerColumText'>Tel. 96 329 98 33</p>
            <p className='footerColumText'>Whatsap. 644 700 289</p>
          </Col>
        </Row>
        <Row className='justify-contect-center mt-2'>
          <Col>
            <p className='footerCopyright'>Copyright &copy; All right reserved.</p>
          </Col>
        </Row>
      </Container>
  )
}
