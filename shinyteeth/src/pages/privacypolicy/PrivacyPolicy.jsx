// Imports from React
import React from 'react'

// Import stylesheet
import './PrivacyPolicy.css'

// Imports from React-Bootstrap
import { Stack, Container, Row, Col } from 'react-bootstrap'

// AboutUs page payout
export const PrivacyPolicy = () => {
  return (
    <div className='privacyPolicyMainContainer'>
      <Stack gap={0}>
        <div className="lightSection">
            <Container fluid>
              <Row className="justify-content-md-center">
                <Col xs lg='6'>
                  <h1>Privacy Policy</h1>
                  <p>Lorem ipsum....</p>
                </Col>
                <Col xs lg='6'></Col>
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
                  <p>Nuestros centros están dirigidos por personal estrictamente sanitario. Los directores son odontólogos con vocación médico-sanitaria y por tanto velan por la salud y bienestar del paciente por encima de todo.</p>
                </Col>
                <Col xs lg='6'></Col>
              </Row>
            </Container>
        </div>
      </Stack>
    </div>
  )
}
