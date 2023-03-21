import axios from 'axios'

const root = 'http://localhost:3000'

export const logMeIn = async (body) => {
  return await axios.post(`${root}/api/signin`, body)
}

export const signMeUp = async (body) => {
  return await axios.post(`${root}/api/signup`, body)
}

export const getUserProfile = async (token, user) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.get(`${root}/api/users/${user}`, config)
}

export const updateUserProfile = async (token, user, body) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.put(`${root}/api/users/${user}`, body, config)
}

export const getAllUsers = async (token) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.get(`${root}/api/users/`, config)
}

export const deleteUser = async (token, user) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.delete(`${root}/api/users/${user}`, config)
}
