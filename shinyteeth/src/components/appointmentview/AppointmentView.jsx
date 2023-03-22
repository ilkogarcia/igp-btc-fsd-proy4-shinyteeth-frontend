// Immport from React library
import React, { useState, useEffect } from 'react'

// Imports from other librarys
import PropTypes from 'prop-types'

// Import from React Router
import { useNavigate } from 'react-router-dom'

// Import from Redux
import { useSelector } from 'react-redux'
import { userData } from '../../redux/slices/userSlice'

// Imports from React-Bootstrap framework
import { Modal, Container, Row, Col, Form, Button } from 'react-bootstrap'

// Import components, layouts, stylesheet and helpers from my App
import ValidateForm from '../../helpers/Validations'
import { updateUser } from '../../services/shinyteeth.service'

import './UserView.css'

export const AppointmentView = props => {
  const { show, onClose, appointmentInfo } = props
  const navigate = useNavigate()
  const logedUserData = useSelector(userData)

  // Estado para guardar los valores iniciales en el momento de la edicion
  const [currentData, updateCurrentData] = useState({
    id: '',
    patientid: '',
    professionalid: '',
    treatmentid: '',
    appointmenton: '',
    startat: '',
    endat: ''
  })
  // Estado para guardar el valor de los campos del formulario
  const [formData, setformData] = useState({
    id: '',
    patientid: '',
    professionalid: '',
    treatmentid: '',
    appointmenton: '',
    startat: '',
    endat: ''
  })

  // Estado para guardar si hay errores de los datos introducidos en el formulario
  const [formDataError, setformDataError] = useState({
    id: '',
    patientidError: '',
    professionalidError: '',
    treatmentidError: '',
    appointmentonError: '',
    startatError: '',
    endatError: ''
  })

  // Estado para guardar si los datos introducidos en el formulario son validos
  const [formDataOk, setformDataOk] = useState({
    id: '',
    patientidOk: '',
    professionalidOk: '',
    treatmentidOk: '',
    appointmentonOk: '',
    startatOk: '',
    endatOk: ''
  })

  // Estado para habilitar la edición de datos en el formuario
  const [formEditMode, setFormEditMode] = useState(false)

  // Estado para habilitar el guardado cuando la validación de los datos ha sido correcta
  const [formSaveState, setFormSaveState] = useState(false)

  //   Hook que se ejecuta la primera vez que se renderiza el componente
  useEffect(() => {
    const currentToken = logedUserData?.credentials?.token
    if (!currentToken) {
      navigate('/')
    } else {
      const initAppointmentInfo = {
        id: appointmentInfo.id,
        patientid: appointmentInfo.patientid,
        professionalid: appointmentInfo.professionalid,
        treatmentid: appointmentInfo.treatmentid,
        appointmenton: appointmentInfo.appointmenton,
        startat: appointmentInfo.startat,
        endat: appointmentInfo.endat
      }
      setformData(initAppointmentInfo)
    }
  }, [])

  // Hook que se ejecuta cada que cambia el estado del componente
  useEffect(() => {
    // Comprobamos que los campos no están vacios
    for (const data in formData) {
      if (formData[data] === '') {
        setFormSaveState(false)
        return
      }
    }
    // Comprobamos que no existen errores en los datos
    for (const error in formDataError) {
      if (formDataError[error] !== '') {
        setFormSaveState(false)
        return
      }
    }
    // Comprobamos que los datos son todos validos
    for (const ok in formDataOk) {
      if (formDataOk[ok] === false) {
        setFormSaveState(false)
        return
      }
    }
    // Si todo ha ido bien, se activará el botón de guardar
    setFormSaveState(true)
    console.log(userInfo)
  })

  // Función que comprueba si existen errores en los campos
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
    updateCurrentData(formData)
    setFormEditMode(true)
  }

  // Función que se ejecuta cuando hacemos clic en el botón de guardar del formulario
  const handleSave = () => {
    console.log('Guardamos la cita')
  }

  // Función que se ejecuta cuando el usuario hace clic en el botón de cancelar del formulario
  const handleCancel = () => {
    setformData(currentData)
    setformDataError('')
    setformDataOk('')
    setFormEditMode(false)
  }

  const { id, patientid, professionalid, treatmentid, appointmenton, startat, endat } = formData

  return (
    <Modal show={show} size="lg" onHide={onClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>{`${appointmenton} : ${startat}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container fluid>
            <Form noValidate>
            <Row>
              <Col xs='10' md='6' lg='4'>
              </Col>
              <Col xs='10' md='6' lg='4'>
              </Col>
              <Col xs='10' md='6' lg='4'>
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

        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
  )
}

// Use PropTypes for type checking
AppointmentView.propTypes = {
  // key is the name of the prop andvalue is the PropType
  show: PropTypes.bool,
  onClose: PropTypes.func,
  appointmentInfo: PropTypes.object
}
