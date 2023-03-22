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
import { Modal, Container, Row, Col, Button } from 'react-bootstrap'

// Imports from other third-party libraries
import dayjs from 'dayjs'

// Import components, layouts, stylesheet and helpers from my App
import { getTreatmentDetail } from '../../services/shinyteeth.service'
import './AppointmentView.css'

export const AppointmentView = props => {
  const { show, onClose, appointmentInfo } = props

  const navigate = useNavigate()
  const logedUserData = useSelector(userData)

  // useState hook to store all data show on view
  const [formData, setformData] = useState({
    id: '',
    patientid: '',
    professionalid: '',
    treatmentid: '',
    treatmentname: '',
    treatmentdescription: '',
    treatmentduration: '',
    appointmenton: '',
    startat: '',
    endat: ''
  })

  //  useEffect hook to render component only the first time
  useEffect(() => {
    const currentToken = logedUserData?.credentials?.token

    if (!currentToken) {
      navigate('/')
    } else {
      console.log(appointmentInfo)
      getTreatmentDetail(currentToken, appointmentInfo.treatmentid)
        .then(
          output => {
            const { data } = output
            const initAppointmentInfo = {
              id: appointmentInfo.id,
              patientid: appointmentInfo.patientid,
              professionalid: appointmentInfo.professionalid,
              treatmentid: appointmentInfo.treatmentid,
              treatmentname: data.treatment.name,
              treatmentdescription: data.treatment.description,
              treatmentduration: data.treatment.standard_duration,
              appointmenton: dayjs(appointmentInfo.appointmenton).format('DD/MM/YYYY'),
              startat: appointmentInfo.startat,
              endat: appointmentInfo.endat
            }
            setformData(initAppointmentInfo)
          }
        )
        .catch(
          error => console.log(error)
        )
    }
  }, [])

  const { professionalid, treatmentname, treatmentdescription, treatmentduration, appointmenton, startat, endat } = formData

  return (
    <Modal show={show} size="lg" onHide={onClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>Appointment details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container fluid>
            <Row>
              <Col xs='10' md='3' lg='4'>
                <h5>Appointment on:</h5>
                <ul>
                  <li>Date: <span>{appointmenton}</span></li>
                  <li>Start time:<span>{startat}</span></li>
                  <li>End time: <span>{endat}</span></li>
                </ul>
              </Col>
              <Col xs='10' md='5' lg='6'>
                <h5>Treatment:</h5>
                <h6>{treatmentname}</h6>
                <p>{treatmentdescription}</p>
                <p>Expected duration: {treatmentduration}</p>
              </Col>
            </Row>
            <Row>
              <Col xs='10' md='8' lg='10'>
                <p>Doctor: {professionalid}</p>
              </Col>
            </Row>
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
