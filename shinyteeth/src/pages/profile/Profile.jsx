// Immport from React library
import React, { useState, useEffect } from 'react'

// Import from React Router
import { useNavigate } from 'react-router-dom'

// Import from Redux
import { useSelector, useDispatch } from 'react-redux'
import { userData, update } from '../../redux/slices/userSlice'

// Imports from React-Bootstrap framework
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

// Import components, layouts, stylesheet and helpers from my App
import ValidateForm from '../../helpers/Validations'
import { getUserProfile, updateUserProfile } from '../../services/shinyteeth.service'
import './Profile.css'

export const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logedUserData = useSelector(userData)

  // Estado para guardar el valor de los campos del formulario
  const [formData, setformData] = useState({
    firstname: '',
    middlename: '',
    lastname: '',
    mobilephone: '',
    email: ''
  })

  // Estado para guardar si hay errores de los datos introducidos en el formulario
  const [formDataError, setformDataError] = useState({
    firstnameError: '',
    middlenameError: '',
    lastnameError: '',
    mobilephoneError: '',
    emailError: ''
  })

  // Estado para guardar si los datos introducidos en el formulario son validos
  const [formDataOk, setformDataOk] = useState({
    firstnameOK: '',
    middlenameOk: '',
    lastnameOk: '',
    mobilephoneOk: '',
    emailOk: ''
  })

  // Estado para habilitar la edición de datos en el formuario
  const [formEditMode, setFormEditMode] = useState(false)

  // Estado para habilitar el guardado cuando la validación de los datos ha sido correcta
  const [formSaveState, setFormSaveState] = useState(false)

  useEffect(() => {
    const currentToken = logedUserData?.credentials?.token
    const currentUser = logedUserData?.credentials?.userId

    if (!currentToken) {
      navigate('/')
    } else {
      getUserProfile(currentToken, currentUser)
        .then(
          output => {
            const { data } = output
            const dataBackend = {
              firstname: data.user.first_name,
              middlename: data.user.middle_name,
              lastname: data.user.last_name,
              mobilephone: data.user.mobile_phone,
              email: data.user.email
            }
            dispatch(update({ profile: dataBackend }))
            setformData(dataBackend)
          }
        )
        .catch(error => console.log(error))
    }
  }, [])

  useEffect(() => {
    for (const data in formData) {
      if (formData[data] === '') {
        setFormSaveState(false)
        return
      }
    }

    for (const error in formDataError) {
      if (formDataError[error] !== '') {
        setFormSaveState(false)
        return
      }
    }

    for (const ok in formDataOk) {
      if (formDataOk[ok] === false) {
        setFormSaveState(false)
        return
      }
    }

    setFormSaveState(true)
  })

  const checkError = ({ target }) => {
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
      [target.name]: target.value
    }))
  }

  // Funciones para gestionar los botones del formulario
  const handleEdit = () => {
    setFormEditMode(true)
  }

  const handleSave = () => {
    const currentToken = logedUserData?.credentials?.token
    const currentUser = logedUserData?.credentials?.userId

    const dataBackend = {
      first_name: formData.firstname,
      middle_name: formData.middlename,
      last_name: formData.lastname,
      mobile_phone: formData.mobilephone,
      email: formData.email
    }

    updateUserProfile(currentToken, currentUser, dataBackend)
      .then(
        output => {
          setFormEditMode(false)
        }
      )
      .catch(error => console.log(error))
  }

  const handleCancel = () => {
    setformData(logedUserData.profile)
    setformDataError('')
    setformDataOk('')
    setFormEditMode(false)
  }

  const { firstname, middlename, lastname, mobilephone, email } = formData

  return (
    <Container fluid className="mainProfileContainer">
      <Form noValidate>

        <Row>
          <Col>
            <h3>My Profile</h3>
          </Col>
        </Row>

        <Row>
          <Col xs='10' md='6' lg='4'>
            <Form.Group className="mb-3" controlId="form_firstname">
                <Form.Label>First name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    name="firstname"
                    defaultValue={ firstname }
                    value={ firstname }
                    disabled={ !formEditMode }
                    onChange={ (event) => handleImputChange(event) }
                    onBlur={ (event) => checkError(event) }
                />
                <Form.Text className='errorMessage'>{formDataError.firstnameError}</Form.Text>
            </Form.Group>
          </Col>
          <Col xs='10' md='6' lg='4'>
            <Form.Group className="mb-3" controlId="form_middlename">
                <Form.Label>Middle name</Form.Label>
                <Form.Control
                    type="text"
                    name="middlename"
                    defaultValue={ middlename }
                    value={ middlename }
                    disabled={ !formEditMode }
                    onChange={ (event) => handleImputChange(event) }
                    onBlur={ (event) => checkError(event) }
                />
                <Form.Text className='errorMessage'>{formDataError.middlenameError}</Form.Text>
            </Form.Group>
          </Col>
          <Col xs='10' md='6' lg='4'>
            <Form.Group className="mb-3" controlId="form_lastname">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                    type="text"
                    name="lastname"
                    defaultValue={ lastname }
                    value={ lastname }
                    disabled={ !formEditMode }
                    onChange={ (event) => handleImputChange(event) }
                    onBlur={ (event) => checkError(event) }
                />
                <Form.Text className='errorMessage'>{formDataError.lastnameError}</Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs='10' md='6' lg='4'>
            <Form.Group className="mb-3" controlId="form_mobilephone">
                <Form.Label>Mobile phone</Form.Label>
                <Form.Control
                    type="text"
                    name="mobilephone"
                    defaultValue={ mobilephone }
                    value={ mobilephone }
                    disabled={ !formEditMode }
                    onChange={ (event) => handleImputChange(event) }
                    onBlur={ (event) => checkError(event) }
                />
                <Form.Text className='errorMessage'>{formDataError.mobilephoneError}</Form.Text>
            </Form.Group>
          </Col>
          <Col xs='10' md='6' lg='8'>
            <Form.Group className="mb-3" controlId="form_email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    required
                    type="text"
                    name="email"
                    defaultValue={ email }
                    value={ email }
                    disabled={ !formEditMode }
                    onChange={ (event) => handleImputChange(event) }
                    onBlur={ (event) => checkError(event) }
                />
                <Form.Text className='errorMessage'>{formDataError.emailError}</Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs md='auto' lg='auto'>
            <Button variant='primary'
                onClick={() => handleEdit()}
                disabled={ formEditMode }>
                Edit
            </Button>{' '}
            <Button variant='secondary'
                onClick={() => handleSave()}
                disabled={ !formEditMode || !formSaveState }>
                Save
            </Button>{' '}
            <Button variant='secondary'
                onClick={() => handleCancel()}
                disabled={ !formEditMode }>
                Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}
