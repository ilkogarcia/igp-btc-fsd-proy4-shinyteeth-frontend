// Immports from React library
import React from 'react'

// Imports from React-Bootstrap
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap'

// Import stylesheet
import './Home.css'

export const Home = () => {
  const handleClic = (event) => {
    console.log(event)
  }

  return (
    <div className='mainHomeContainer'>
      <Stack gap={0}>
        <div className='bannerTop'>
          <Container className='bannerTopContainer'>
              <Row xs="auto">
                  <Col xs lg='6'>
                    <span className='title'>200€</span>
                  </Col>
              </Row>
              <Row xs="auto">
                  <Col xs lg='6'>
                    <span className='subtitle'>price discount</span>
                  </Col>
              </Row>
              <Row xs="auto">
                  <Col xs lg='6'>
                    <span className='text'>in invisible orthodontic treatments or implant + crown</span>
                  </Col>
              </Row>
              <Row xs="auto" className="mt-3">
                  <Col xs lg='6'>
                    <Button variant="info" size="lg" type="submit" onClick={handleClic}>Get your free appointment</Button>
                  </Col>
              </Row>
          </Container>
        </div>
        <div className="darkSection">
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col xs lg='6'>
                <p>Actualmente disponemos de dos centros en la provincia de Valencia: en Valencia capital, ubicado en el barrio de Benimaclet y en Oliva, en la comarca de la Safor. La odontología contemporánea nos exige clínicas accesibles, multidisciplinares, con profesionales altamente cualificados y en constante actualización con las nuevas tecnologías y técnicas de tratamiento.</p>
              </Col>
              <Col xs lg='6'></Col>
            </Row>
          </Container>
        </div>
        <div className="lightSection">
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col xs lg='6'>
                <p>Actualmente disponemos de dos centros en la provincia de Valencia: en Valencia capital, ubicado en el barrio de Benimaclet y en Oliva, en la comarca de la Safor. La odontología contemporánea nos exige clínicas accesibles, multidisciplinares, con profesionales altamente cualificados y en constante actualización con las nuevas tecnologías y técnicas de tratamiento.</p>
              </Col>
              <Col xs lg='6'></Col>
            </Row>
          </Container>
        </div>
      </Stack>
    </div>
  )
}
