// Imports from React library
import React, { useState, useEffect } from 'react'

// Immports from Reacts Router
import { useNavigate } from 'react-router-dom'

// Imports from React-Bootstrap framework
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

// Import components, layouts, stylesheet and helpers from my App
import ValidateForm from '../../helpers/Validations'
import { logMeIn } from '../../services/DummyJSON.service'
import './Login.css'

// Import Redux methods
import { useDispatch } from 'react-redux'
import { login } from '../../redux/slices/userSlice'

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Estado para guardar el valor de los campos del formulario
  const [formData, setformData] = useState({
    email: '',
    password: ''
  })

  // Estado para guardar si hay errores de los datos introducidos en el formulario
  const [formDataError, setformDataError] = useState({
    emailError: '',
    passwordError: ''
  })

  // Estado para guardar si los datos introducidos en el formulario son validos
  const [formDataOk, setformDataOk] = useState({
    emailOk: false,
    passwordOk: false
  })

  // Estado para guardar cuando el botón submmit del formulario estará activo o no
  const [loginButtonState, setLoginButtonState] = useState(false)

  ///

  // Hook useEffect para gestionar el ciclo de vida del todos los componentes
  useEffect(() => {
    for (const data in formData) {
      if (formData[data] === '') {
        setLoginButtonState(false)
        return
      }
    }

    for (const error in formDataError) {
      if (formDataError[error] !== '') {
        setLoginButtonState(false)
        return
      }
    }

    for (const ok in formDataOk) {
      if (formDataOk[ok] === false) {
        setLoginButtonState(false)
        return
      }
    }

    setLoginButtonState(true)
  })

  const { email, password } = formData

  // Función para validar las entradas de datos del formulario
  const checkError = ({ target }) => {
    const { name, value, required } = target
    const result = ValidateForm(name, value, required)

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
    // Esto solo para probar de momento con la API de DummyJSON

    const userData = {
      username: formData.email,
      password: formData.password
    }

    logMeIn(userData)
      .then(
        output => {
          const { data } = output
          const dataBackend = {
            id: data.id,
            username: data.username,
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender,
            image: data.image,
            token: data.token
          }
          console.log(dataBackend)
          // Este es el momento en el que guardo en REDUX
          dispatch(login({ credentials: dataBackend }))
          navigate('/')
        }
      )
      .catch(error => console.log(error))
  }

  return (
        <Container fluid className="loginContainer">
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
                                // onBlur={ (event) => checkError(event) }
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
                                // onBlur={ (event) => checkError(event) }
                            />
                            <Form.Text className='errorMessage'>{formDataError.passwordError}</Form.Text>
                        </Form.Group>

                        <Button
                            className='button is-large'
                            onClick={() => handleFormSubmit()}
                            disabled={loginButtonState}>
                            Sign In
                        </Button>

                    </Form>
                </Col>
            </Row>
        </Container>
  )
}
