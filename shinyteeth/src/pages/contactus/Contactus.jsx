// Imports from React
import React from 'react'

// Import stylesheet
import './Contactus.css'

// Imports from React-Bootstrap
import { Stack, Container, Row, Col } from 'react-bootstrap'

// AboutUs page payout
export const Contactus = () => {
  return (
    <div className="contactUsMainContainer">
      <Stack gap={0}>
        <div className="lightSection">
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col xs lg="10">
                <h1>Contact us</h1>
                <p>Somos un equipo de profesionales de la odontología que desde 2.002, nos dedicamos a la prevención, diagnóstico y tratamiento de los problemas de salud bucodental.</p>
                <p>Nam ac volutpat sem. Nunc placerat massa in vestibulum vehicula. Curabitur et feugiat mauris. Sed fringilla accumsan dolor, non viverra magna scelerisque vitae. Praesent in tortor dapibus, vestibulum ligula ut, fringilla tellus. Aliquam placerat massa vitae urna dapibus finibus. Quisque massa dolor, dignissim non tempus in, placerat eget augue. Donec in purus sem. Vivamus commodo lorem non metus facilisis venenatis.</p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="darkSection">
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col xs lg="10">
              <p>Actualmente disponemos de dos centros en la provincia de Valencia: en Valencia capital, ubicado en el barrio de Benimaclet y en Oliva, en la comarca de la Safor. La odontología contemporánea nos exige clínicas accesibles, multidisciplinares, con profesionales altamente cualificados y en constante actualización con las nuevas tecnologías y técnicas de tratamiento.</p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="lightSection">
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col xs lg="10">
                <p> Nuestros centros están dirigidos por personal estrictamente sanitario. Los directores son odontólogos con vocación médico-sanitaria y por tanto velan por la salud y bienestar del paciente por encima de todo.</p>
              </Col>
            </Row>
          </Container>
        </div>
      </Stack>
    </div>
  )
}
