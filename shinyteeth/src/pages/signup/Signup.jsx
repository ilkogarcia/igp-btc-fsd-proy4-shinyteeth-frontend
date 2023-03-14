// Imports from React
import React from 'react'

// Import stylesheet
import './Signup.css'

// Imports React-Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Import own components
import { Register } from '../../components/register/Register'

export const Signup = () => {
  return (
    <Container className="signUpPage">
        <Container>
            <Row>
                <Col xs={6}>
                    <Register />
                </Col>
                <Col xs={4}>
                    <h1 className='pageTitle'>Sign In</h1>
                    <p className='pageText'>Register to unlock the advanced options of the application.</p>
                </Col>
            </Row>
        </Container>
    </Container>
  )
}
