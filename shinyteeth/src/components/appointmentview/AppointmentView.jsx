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
import { getTreatmentDetail, getPatientUserInfo, getDoctorUserInfo } from '../../services/shinyteeth.service'
import './AppointmentView.css'

export const AppointmentView = props => {
  const { show, onClose, appointmentInfo } = props

  const navigate = useNavigate()
  const logedUserData = useSelector(userData)
  const currentToken = logedUserData?.credentials?.token
  const currentUserRole = logedUserData?.credentials?.roleId

  // useState hook to store appointment data
  const [appointmentData, setAppointmentData] = useState({
    id: '',
    patientid: '',
    professionalid: '',
    treatmentid: '',
    appointmenton: '',
    startat: '',
    endat: ''
  })

  // useState hook to store treatment data
  const [treatmentData, setTreatmentData] = useState({
    id: '',
    treatmentname: '',
    treatmentdescription: '',
    treatmentduration: ''
  })

  // useState hook to store patient user info
  const [patientUserData, setPatientUserData] = useState({
    id: '',
    firstname: '',
    middlename: '',
    lastname: '',
    mobilephone: '',
    email: ''
  })

  // useState hook to store doctos user info
  const [doctorUserData, setDoctorUserData] = useState({
    id: '',
    firstname: '',
    middlename: '',
    lastname: '',
    mobilephone: '',
    email: ''
  })

  //  useEffect hook to render component only the first time
  useEffect(() => {
    if (!currentToken) {
      navigate('/')
    } else {
      const initAppointmentData = {
        id: appointmentInfo.id,
        patientid: appointmentInfo.patientid,
        professionalid: appointmentInfo.professionalid,
        treatmentid: appointmentInfo.treatmentid,
        appointmenton: dayjs(appointmentInfo.appointmenton).format('DD/MM/YYYY'),
        startat: appointmentInfo.startat,
        endat: appointmentInfo.endat
      }
      setAppointmentData(initAppointmentData)

      getPatientUserInfo(currentToken, {
        patient_id: appointmentInfo.patientid
      })
        .then(
          output => {
            const { data } = output
            const initPatientUserData = {
              id: data.patient.id,
              firstname: data.patient.first_name || '',
              middlename: data.patient.middle_name || '',
              lastname: data.patient.last_name || '',
              mobilephone: data.patient.mobile_phone || 'n/a',
              email: data.patient.email || 'n/a'
            }
            setPatientUserData(initPatientUserData)
          }
        ).catch(error => console.log(error))

      getDoctorUserInfo(currentToken, {
        professional_id: appointmentInfo.professionalid
      })
        .then(
          output => {
            const { data } = output
            const initDoctorUserData = {
              id: data.professional.id,
              firstname: data.professional.first_name || '',
              middlename: data.professional.middle_name || '',
              lastname: data.professional.last_name || '',
              mobilephone: data.professional.mobile_phone || 'n/a',
              email: data.professional.email || 'n/a'
            }
            setDoctorUserData(initDoctorUserData)
          }
        ).catch(error => console.log(error))

      getTreatmentDetail(currentToken, appointmentInfo.treatmentid)
        .then(
          output => {
            const { data } = output
            const initTreatmentData = {
              id: data.treatment.id,
              treatmentname: data.treatment.name,
              treatmentdescription: data.treatment.description,
              treatmentduration: data.treatment.standard_duration
            }
            setTreatmentData(initTreatmentData)
          }
        ).catch(error => console.log(error))
    }
  }, [])

  const { professionalid, patientid, appointmenton, startat, endat } = appointmentData
  const { treatmentname, treatmentdescription, treatmentduration } = treatmentData

  const renderDoctorInfo = () => {
    return <>
      <h5>Doctor info:</h5>
      <ul>
        <li><span>Name:</span> {`${doctorUserData.firstname} ${doctorUserData.middlename} ${doctorUserData.lastname}`}</li>
        <li><span>Phone:</span> {doctorUserData.mobilephone}</li>
        <li><span>Email:</span> {doctorUserData.email}</li>
      </ul>

    </>
  }

  const renderPatientInfo = () => {
    return <>
      <h5>Patient info:</h5>
      <ul>
        <li><span>Name:</span> {`${patientUserData.firstname} ${patientUserData.middlename} ${patientUserData.lastname}`}</li>
        <li><span>Phone:</span> {patientUserData.mobilephone}</li>
        <li><span>Email:</span> {patientUserData.email}</li>
      </ul>
    </>
  }

  return (
    <Modal show={show} size='xl' onHide={onClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>Appointment details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container fluid>
            <Row>
              <Col xs='10' md='3' lg='3'>
                <h5>Appointment on:</h5>
                <ul>
                  <li><span>Date:</span> {appointmenton}</li>
                  <li><span>Start time:</span> {startat}</li>
                  <li><span>End time:</span> {endat}</li>
                </ul>
              </Col>
              <Col xs='10' md='5' lg='5'>
                <h5>Treatment:</h5>
                <ul>
                  <li><span>Name: </span> {treatmentname}</li>
                  <li><span>Description:</span> {treatmentdescription}</li>
                  <li><span>Expected duration:</span> {treatmentduration}</li>
                </ul>
              </Col>
              <Col xs='10' md='4' lg='4'>
                {(currentUserRole === 2)
                  ? renderDoctorInfo()
                  : renderPatientInfo()
                }
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
