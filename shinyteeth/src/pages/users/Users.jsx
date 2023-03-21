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
import { deleteUser, getAllUsers } from '../../services/shinyteeth.service'
import { UserView } from '../../components/userview/UserView'
import './Users.css'

export const Users = () => {
  const navigate = useNavigate()
  const logedUserData = useSelector(userData)

  // Hook to handle user list table component rendering
  const [users, setUsers] = useState([])

  // Hook to handle modal view show and close event
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  // Hook to handle user detail
  const [userDetail, updateUserDetail] = useState({
    id: '',
    firstname: '',
    middlename: '',
    lastname: '',
    mobilephone: '',
    email: ''
  })

  useEffect(() => {
    const currentToken = logedUserData?.credentials?.token
    const currentUserRole = logedUserData?.credentials?.roleId

    if (!currentToken || currentUserRole !== 4) {
      navigate('/')
    } else {
      getAllUsers(currentToken)
        .then(
          output => {
            const { data } = output
            console.log(data.user_list)
            setUsers(data.user_list)
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
    // console.log(idx)
    // console.log(users)
    // console.log(users[idx])
    console.log(userDetail)
    const newUserDetail = {
      id: users[idx].id,
      firstname: users[idx].first_name,
      middlename: users[idx].middle_name,
      lastname: users[idx].last_name,
      mobilephone: users[idx].mobile_phone,
      email: users[idx].email
    }
    updateUserDetail(newUserDetail)
    console.log(userDetail)
    handleShow()
  }

  const handleDelete = (idx) => {
    const currentToken = logedUserData?.credentials?.token
    deleteUser(currentToken, users[idx].id)
      .then(
        output => {
          // update users hook to force re-render functional component
          const usersCopy = [...users]
          usersCopy.splice(idx, 1)
          setUsers(usersCopy)
        }
      )
      .catch(error => console.log(error))
  }

  return (
    <Container fluid className="mainUsersContainer">
        <Stack gap={3}>
            <div>
                <Row md={12}>
                    <Col xs='10' lg='12'>
                        <h3>Users management</h3>
                    </Col>
                </Row>
            </div>
            <div>
                <Table responsive striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First name</th>
                    <th>Middle name</th>
                    <th>Last name</th>
                    <th>Mobile phone</th>
                    <th>Email</th>
                  </tr>
              </thead>
                <tbody>
                  {users.map((user, index) => {
                    return <tr key={index}>
                      <td><Form.Check type={'checkbox'} id={`check${index}`}></Form.Check></td>
                      <td>{user.first_name}</td>
                      <td>{user.middle_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.mobile_phone}</td>
                      <td>{user.email}</td>
                      <td><Button
                            variant='info'
                            size="sm"
                            onClick={() => handleUpdate(index)}
                            disabled={ false }>
                            Edit user
                        </Button>{' '}
                        <Button
                            variant='danger'
                            size="sm"
                            onClick={() => handleDelete(index)}
                            disabled={ false }>
                            Delete user
                        </Button></td>
                    </tr>
                  })}
                </tbody>
                </Table>
            </div>
            <div>
                <Row>
                    <Col xs='10' lg='12'>
                        <Button variant='primary'
                            onClick={() => handleCreate()}
                            disabled={ false }>
                            Add user
                        </Button>
                    </Col>
                </Row>
            </div>
        </Stack>
        <UserView show={show} onClose={handleClose} userInfo={userDetail}/>
    </Container>
  )
}
