// Imports from React
import React from 'react'

// Import stylesheet
import './Signin.css'

// Imports React-Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Import own components
import { Login } from '../../components/login/Login'

export const Signin = () => {
  return (
        <Container className="signInPage">
            <Container>
                <Row>
                    <Col xs={6}>
                        <Login />
                    </Col>
                    <Col xs={4}>
                        <h1 className='pageTitle'>Sign Up</h1>
                        <p className='pageText'>Provide your credentials to access.</p>
                    </Col>
                </Row>
            </Container>
        </Container>
  )
}
