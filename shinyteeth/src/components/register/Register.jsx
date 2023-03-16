// Imports from React library
import React, { useState, useEffect } from 'react'

// Imports from React-Bootstrap framework
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'

// Import stylesheet
import './Register.css'

// Import helpers
import { validateForm } from '../../helpers/Validations'

export const Register = () => {
  // Estado para guardar el valor de los campos del formulario
  const [formData, setformData] = useState({
    email: '',
    password: '',
    checkbox: false
  })

  // Estado para guardar si hay errores de los datos introducidos en el formulario
  const [formDataError, setformDataError] = useState({
    emailError: '',
    passwordError: '',
    checkboxError: ''
  })

  // Estado para guardar si los datos introducidos en el formulario son validos
  const [formDataOk, setformDataOk] = useState({
    emailOk: false,
    passwordOk: false,
    checkboxOk: false
  })

  // Estado para guardar cuando el botón submmit del formulario estará activo o no
  const [registerButtonState, setRegisterButtonState] = useState(false)

  // Hook useEffect para gestionar el ciclo de vida del todos los componentes
  useEffect(() => {
    for (const data in formData) {
      if (formData[data] === '') {
        setRegisterButtonState(false)
        return
      }
    }

    for (const error in formDataError) {
      if (formDataError[error] !== '') {
        setRegisterButtonState(false)
        return
      }
    }

    for (const ok in formDataOk) {
      if (formDataOk[ok] === false) {
        setRegisterButtonState(false)
        return
      }
    }

    setRegisterButtonState(true)
  })

  const { email, password, checkbox } = formData

  // Función para validar las entradas de datos del formulario
  const checkError = ({ target }) => {
    const { name, value, required } = target
    const result = validateForm(name, value, required)

    setformDataOk((prevState) => ({
      ...prevState,
      [target.name + 'Ok']: result.valid
    }))

    setformDataError((prevState) => ({
      ...prevState,
      [target.name + 'Error']: result.message
    }))
  }

  // Función para gestionar en tiempo real la entrada de datos
  const handleImputChange = ({ target }) => {
    setformData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  // Función para gestionar el clic en el botón del formulario
  const handleFormSubmit = () => {
    console.log(formData)
  }

  return (
        <Container fluid className="registerContainer">
            <Row>
                <Col>
                    <Form noValidate>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                name="email"
                                placeholder="name@example.com"
                                defaultValue={ email }
                                onChange={ (event) => handleImputChange(event) }
                                onBlur={ (event) => checkError(event) }
                            />
                            <Form.Text className='errorMessage'>{formDataError.emailError}</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                name="password"
                                placeholder="*************"
                                defaultValue={ password }
                                onChange={ (event) => handleImputChange(event) }
                                onBlur={ (event) => checkError(event) }
                            />
                            <Form.Text className='errorMessage'>{formDataError.passwordError}</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                required
                                type="checkbox"
                                label="I agree to the terms and conditions"
                                name="checkbox"
                                defaultValue={ checkbox }
                                onChange={ (event) => handleImputChange(event) }
                                onBlur={ (event) => checkError(event) }
                            />
                        </Form.Group>

                        <Button
                            className='button is-large'
                            onClick={handleFormSubmit}
                            disabled={!registerButtonState}>
                            Sign Up
                        </Button>

                    </Form>
                </Col>
            </Row>
        </Container>
  )
}
