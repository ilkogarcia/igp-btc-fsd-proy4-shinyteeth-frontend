// Imports from React library
import React, { useState, useEffect } from 'react'

// Immports from Reacts Router
import { useNavigate } from 'react-router-dom'

// Imports from React-Bootstrap framework
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

// Import components, layouts, stylesheet and helpers from my App
import ValidateForm from '../../helpers/Validations'
import { signMeUp } from '../../services/shinyteeth.service'
import './Register.css'

// Import Redux methods
import { useDispatch } from 'react-redux'
import { signup } from '../../redux/slices/userSlice'

export const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
    // const { name, value, required } = target
    const result = ValidateForm(target)

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
      [target.name]: (target.name !== 'checkbox' ? target.value : target.checked)
    }))
  }

  // Función para gestionar el clic en el botón del formulario
  const handleFormSubmit = () => {
    const userData = {
      email: formData.email,
      password: formData.password
    }

    signMeUp(userData)
      .then(output => {
        console.log(output)
        const { data } = output
        const dataBackend = {
          userId: data.user
        }
        console.log(dataBackend)
        dispatch(signup({ credentials: dataBackend }))
        console.log('Ahora deberíamos navegar')
        navigate('/')
        console.log('ya hemos navegado');
      })
      .catch(error => console.log(error))
  }

  return (
        <Container fluid className="registerContainer">
            <Row>
                <Col>
                    <Form noValidate>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address <span>*</span></Form.Label>
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
                            <Form.Label>Password <span>*</span></Form.Label>
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

                        <p><span>*</span> indicates that it is a required data.</p>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                required
                                type="switch"
                                label="I agree to the terms and conditions"
                                name="checkbox"
                                checked={ checkbox }
                                onChange={ (event) => handleImputChange(event) }
                                onBlur={ (event) => checkError(event) }
                            />
                            <Form.Text className='errorMessage'>{formDataError.checkboxError}</Form.Text>
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
