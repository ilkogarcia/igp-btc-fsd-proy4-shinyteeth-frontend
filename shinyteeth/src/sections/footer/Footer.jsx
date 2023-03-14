// Import from React library
import React from 'react'

// Import React-Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Import stylesheet
import './Footer.css'

export const Footer = () => {
  return (
    <div className='darkFooter'>
      <Container fluid >
        <Row>
          <Col xs lg='6'>
            <span className='textLogo'>Shiny Teeth</span><br />
            <span className='tagLine'>los dientes más brillantes</span>
          </Col>
          <Col xs lg='3'>
            <ul>
              <li>Services</li>
              <li>Who we are</li>
              <li>Contact us</li>
            </ul>
          </Col>
          <Col xs lg='3'>
            ...aquí van los créditos
          </Col>
        </Row>
      </Container>
    </div>
  )
}
