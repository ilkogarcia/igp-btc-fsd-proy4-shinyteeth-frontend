// Immport from React library
import React, { useState, useEffect } from 'react'

// Import from React Router
import { useNavigate } from 'react-router-dom'

// Import from Redux
import { useSelector } from 'react-redux'
import { userData } from '../../redux/slices/userSlice'

// Imports from React-Bootstrap framework
import { Container, Stack, Row, Col, Table, Form, Button } from 'react-bootstrap'

// Imports from other third-party libraries
import dayjs from 'dayjs'

// Import components, layouts, stylesheet and helpers from my App
import { getMyAppointments, getDocAppointments, cancelAppointment } from '../../services/shinyteeth.service'
import { AppointmentView } from '../../components/appointmentview/AppointmentView'
import './Appointments.css'

export const Appointments = () => {
  const navigate = useNavigate()
  const logedUserData = useSelector(userData)

  // Hook to handle appointment list table component rendering
  const [appointments, updateAppointments] = useState([])
  const [pastAppointments, updatePastAppointments] = useState([])

  // Hook to handle the appointments selected by users
  const [selectedAppointments, updateSelectedAppointments] = useState([])

  // Hook to handle user detail
  const [appointmentDetails, updateAppointmentDetails] = useState({
    id: '',
    patientid: '',
    professionalid: '',
    treatmentid: '',
    appointmenton: '',
    startat: '',
    endat: ''
  })

  // Hook to handle modal view show and close event
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const currentToken = logedUserData?.credentials?.token
  const currentUserRole = logedUserData?.credentials?.roleId

  useEffect(() => {
    if (!currentToken) {
      navigate('/')
    } else {
      if (currentUserRole === 2) {
        getMyAppointments(currentToken)
          .then(
            output => {
              const { data } = output
              // Filtear array to get appointments before current dates
              const pastAppointments = data.appointments.filter((appointment) =>
                dayjs(appointment.appointment_on) < dayjs(new Date())
              )
              console.log(pastAppointments)
              updatePastAppointments(pastAppointments)
              // Filtear array to get upcomming appointments from current dates
              const appointments = data.appointments.filter((appointment) =>
                dayjs(appointment.appointment_on) >= dayjs(new Date())
              )
              console.log(appointments)
              updateAppointments(appointments)
            }
          )
          .catch(
            error => console.log(error)
          )
      } else if (currentUserRole === 3) {
        getDocAppointments(currentToken)
          .then(
            output => {
              const { data } = output
              // Filtear array to get appointments before current dates
              const pastAppointments = data.appointments.filter((appointment) =>
                dayjs(appointment.appointment_on) < dayjs(new Date())
              )
              console.log(pastAppointments)
              updatePastAppointments(pastAppointments)
              // Filtear array to get upcomming appointments from current dates
              const appointments = data.appointments.filter((appointment) =>
                dayjs(appointment.appointment_on) >= dayjs(new Date())
              )
              console.log(appointments)
              updateAppointments(appointments)
            }
          )
          .catch(
            error => console.log(error)
          )
      }
    }
  }, [])

  const handleCreate = () => {
    alert('Create a new user')
  }

  const handleView = (idx) => {
    const appointmentData = {
      id: appointments[idx].id,
      patientid: appointments[idx].patient_id,
      professionalid: appointments[idx].professional_id,
      treatmentid: appointments[idx].treatment_id,
      appointmenton: appointments[idx].appointment_on,
      startat: appointments[idx].start_at,
      endat: appointments[idx].end_at
    }
    updateAppointmentDetails(appointmentData)
    handleShow()
  }

  const handleDelete = (idx) => {
    const currentToken = logedUserData?.credentials?.token
    cancelAppointment(currentToken, appointments[idx].id)
      .then(
        output => {
          // update users hook to force re-render functional component
          const appointmentsCopy = [...appointments]
          appointmentsCopy.splice(idx, 1)
          updateAppointments(appointmentsCopy)
        }
      )
      .catch(error => console.log(error))
  }

  const selectThisElement = ({ target }) => {
    if (target.checked) {
      selectedAppointments.push(target.id)
      console.log(selectedAppointments)
    } else {
      const index = selectedAppointments.indexOf(target.id)
      selectedAppointments.splice(index, 1)
      console.log(selectedAppointments)
    }
  }

  const renderAppointments = (appointments, actionsIsAllow) => {
    return <Table responsive='md' striped='true' hover='true'>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Start time</th>
          <th>End time</th>
          <th>Treatment</th>
          <th>Doctor</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => {
          return <tr key={index}>
              <td>
                <Form.Check
                  type={'checkbox'}
                  defaultChecked={false}
                  disabled={actionsIsAllow}
                  id={appointment.id}
                  onChange={ (event) => selectThisElement(event) }
                >
                </Form.Check>
              </td>
              <td>{dayjs(appointment.appointment_on).format('DD/MM/YYYY')}</td>
              <td>{appointment.start_at}</td>
              <td>{appointment.end_at}</td>
              <td>{appointment.treatment_id}</td>
              <td>{appointment.professional_id}</td>
              <td><Button
                    variant='info'
                    size="sm"
                    onClick={() => handleView(index)}
                    disabled={actionsIsAllow}>
                    View
                </Button>{' '}
                <Button
                    variant='danger'
                    size="sm"
                    onClick={() => handleDelete(index)}
                    disabled={actionsIsAllow}>
                    Cancel
                </Button></td>
            </tr>
        })}
      </tbody>
    </Table>
  }

  return (
    <Container fluid className="mainAppointmentContainer">
      {show &&
        <AppointmentView show={show} onClose={handleClose} appointmentInfo={appointmentDetails}/>
      }
      <Stack gap={3}>
        <div>
          <Row md={12}>
              <Col xs='8' lg='9'>
                  <h4>My Appointments</h4>
              </Col>
              <Col xs='4' lg='3'>
              <Button variant='primary'
                onClick={() => handleCreate()}
                disabled={ false }>
                Get a new Appointment
              </Button>
            </Col>
          </Row>
        </div>
        <div>
          <h6>Upcomming appointments</h6>
          {console.log(appointments.length)}
          {(appointments.length > 0)
            ? renderAppointments(appointments, false)
            : <span className="warningText">You do not have upcomming appointments in your history.</span>
          }
        </div>
        <div>
          <h6>Previous appointments</h6>
          {console.log(pastAppointments.length)}
          {(pastAppointments.length > 0)
            ? renderAppointments(pastAppointments, true)
            : <span className="warningText">You do not have pass appointments in your history.</span>
          }
        </div>
      </Stack>
    </Container>
  )
}
