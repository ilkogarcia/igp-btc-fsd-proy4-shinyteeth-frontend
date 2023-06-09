// Immports from React library
import React from 'react'

// Imports from React-Bootstrap
import { Stack, Container, Row, Col, Button } from 'react-bootstrap'
import { InfoCard } from '../../components/card/InfoCard'

// Import stylesheet
import './Home.css'

// Import data needed
import { tratementsData } from '../../db/db.treatments'

// Import Cloudinary classes
import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'

// Import any actions required for transformations
import { fill } from '@cloudinary/url-gen/actions/resize'

export const Home = () => {
  const handleClic = (event) => {
    console.log(event)
  }

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dtxhybmyx'
    }
  })

  // Instantiate a CloudinaryImage object for the image with the public ID.
  const myImage = cld.image('shinyteeth/pexels-bakytzhan-9951388_pplpuj')

  // Transform the image.
  myImage.resize(fill().width(250).height(250))

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
            <Row className="justify-content-center">
              <Col xs lg='4'>
                <AdvancedImage cldImg={ myImage } className='headlineImage'/>
              </Col>
              <Col xs lg='6'>
                <blockquote className='headline'>We are an accessible and multidisciplinary clinic, with highly qualified professionals who are constantly updated..</blockquote>
                <span className='headlineAuthor'>Juliana Pérez. CEO. Shiny Teeth</span>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="lightSection">
          <Container fluid>
            <Row className="justify-content-center">
              {Array.from({ length: 3 }).map((_, idx) => (
                <Col key={idx}><InfoCard name={tratementsData[idx].name} description={tratementsData[idx].description} image={tratementsData[idx].image} /></Col>
              ))}
            </Row>
          </Container>
        </div>
      </Stack>
    </div>
  )
}
