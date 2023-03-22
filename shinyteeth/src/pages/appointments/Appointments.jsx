// Immport from React library
import React, { useState, useEffect } from 'react'

// Import from React Router
import { useNavigate } from 'react-router-dom'

// Import from Redux
import { useSelector } from 'react-redux'
import { userData } from '../../redux/slices/userSlice'

// Imports from React-Bootstrap framework
import { Container, Stack, Row, Col, Table, Form, Button } from 'react-bootstrap'

// Import components, layouts, stylesheet and helpers from my App
import { getMyAppointments } from '../../services/shinyteeth.service'
import './Appointments.css'

export const Appointments = () => {
  const navigate = useNavigate()
  const logedUserData = useSelector(userData)

  // Hook to handle appointment list table component rendering
  const [appointments, setAppointments] = useState([])

  // Hook to handle the appointments selected by users
  const [selectedAppointments, updateSelectedAppointments] = useState([])

  // Hook to handle user detail
  const [appointmentDetail, updateAppointmentDetail] = useState({
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

  // Callback function we send to modal popup
  const handleClose = () => {
    const currentToken = logedUserData?.credentials?.token
    setShow(false)
    getMyAppointments(currentToken)
      .then(
        output => {
          const { data } = output
          setAppointments(data.appointments)
        }
      )
      .catch(
        error => console.log(error)
      )
  }

  useEffect(() => {
    const currentToken = logedUserData?.credentials?.token

    if (!currentToken) {
      navigate('/')
    } else {
      getMyAppointments(currentToken)
        .then(
          output => {
            const { data } = output
            setAppointments(data.appointments)
            console.log(appointments)
          }
        )
        .catch(
          error => console.log(error)
        )
    }
  }, [])

  const handleCreate = () => {
    alert('Create a new user')
  }

  const handleUpdate = (idx) => {
    alert('Update user', idx)
  }

  const handleDelete = (idx) => {
    alert('Delete user', idx)
  }

  const selectThisUser = ({ target }) => {
    if (target.checked) {
      selectedAppointments.push(target.id)
      console.log(selectedAppointments)
    } else {
      const index = selectedAppointments.indexOf(target.id)
      selectedAppointments.splice(index, 1)
      console.log(selectedAppointments)
    }
  }

  return (
    <Container fluid className="mainAppointmentContainer">
      {show &&
        <AppointmentView show={show} onClose={handleClose} userInfo={appointmentDetail}/>
      }
      <Stack gap={3}>
        <div>
          <Row md={12}>
              <Col xs='10' lg='12'>
                  <h4>My Appointments</h4>
              </Col>
          </Row>
        </div>
        <div>
          <Row className='justify-content-end'>
            <Col xs='2' lg='2'>
              <Button variant='primary'
                onClick={() => handleCreate()}
                disabled={ false }>
                New Appointment
              </Button>
            </Col>
          </Row>
        </div>
        <div>
          <Table responsive striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Start time</th>
                <th>End time</th>
                <th>Treatment</th>
                <th>Doctor</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => {
                return <tr key={index}>
                    <td>
                      <Form.Check
                        type={'checkbox'}
                        defaultChecked={false}
                        id={appointment.id}
                        onChange={ (event) => selectThisUser(event) }
                      >
                      </Form.Check>
                    </td>
                    <td>{appointment.appointment_on}</td>
                    <td>{appointment.start_at}</td>
                    <td>{appointment.end_at}</td>
                    <td>{appointment.treatment_id}</td>
                    <td>{appointment.professional_id}</td>
                    <td><Button
                          variant='info'
                          size="sm"
                          onClick={() => handleUpdate(index)}
                          disabled={ false }>
                          Reschedule
                      </Button>{' '}
                      <Button
                          variant='danger'
                          size="sm"
                          onClick={() => handleDelete(index)}
                          disabled={ false }>
                          Cancel
                      </Button></td>
                  </tr>
              })}
            </tbody>
          </Table>
        </div>
      </Stack>
    </Container>
  )
}
