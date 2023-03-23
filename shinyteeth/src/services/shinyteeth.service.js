import axios from 'axios'

const root = 'https://avocadogeeks-btc-fsd-shinyteeth-production.up.railway.app/api/'

export const logMeIn = async (body) => {
  return await axios.post(`${root}/signin`, body)
}

export const signMeUp = async (body) => {
  return await axios.post(`${root}/signup`, body)
}

export const getUserProfile = async (token, user) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.get(`${root}/users/${user}`, config)
}

export const updateProfile = async (token, body) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.put(`${root}/updateprofile`, body, config)
}

export const updateUser = async (token, user, body) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.put(`${root}/users/${user}`, body, config)
}

export const getAllUsers = async (token) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.get(`${root}/users/`, config)
}

export const deleteUser = async (token, user) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.delete(`${root}/users/${user}`, config)
}

export const getMyAppointments = async (token) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.get(`${root}/patient/appointments`, config)
}

export const getPatientUserInfo = async (token, body) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.post(`${root}/patients/user/`, body, config)
}

export const getDoctorUserInfo = async (token, body) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.post(`${root}/professionals/user/`, body, config)
}

export const getDocAppointments = async (token) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.get(`${root}/professional/appointments`, config)
}

export const getTreatmentDetail = async (token, treatment) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.get(`${root}/dentaltreatments/${treatment}`, config)
}

export const getProfessionalDetail = async (token, professional) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.get(`${root}/professionals/${professional}`, config)
}

export const cancelAppointment = async (token, appointment) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.delete(`${root}/patient/appointments/${appointment}`, config)
}
