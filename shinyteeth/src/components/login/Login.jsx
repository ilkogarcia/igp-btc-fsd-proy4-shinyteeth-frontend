// Imports from React library
import React, { useState } from 'react'

// Imports stylesheets
import './Login.css'

// Imports from React-Bootstrap framework
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'

export const Login = () => {
  const [formState, setformState] = useState({
    userEmail: 'mark.otto@gmail.com',
    userPass: 'supercalifragilistico'
  })

  const { userEmail, userPass } = formState

  const handleImputChange = ({ target }) => {
    const { name, value } = target
    // console.log({name, value});
    setformState({
      ...formState,
      [name]: value
    })
  }

  const handleFormSubmit = (event) => {
    // event.persist();
    console.log(event)
  }

  return (
        <Container fluid className="loginContainer">
            <Row>
                <Col>
                    <Form>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                name="userEmail"
                                placeholder="Enter email"
                                defaultValue={ userEmail }
                                onChange={ handleImputChange }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                name="userPass"
                                placeholder="Password"
                                defaultValue={ userPass }
                                onChange={ handleImputChange }
                            />
                        </Form.Group>

                        <Button
                            type="submit"
                            className="button is-large"
                            onClick={handleFormSubmit}>
                            Sign In
                        </Button>

                    </Form>
                </Col>
            </Row>
        </Container>
  )
}
