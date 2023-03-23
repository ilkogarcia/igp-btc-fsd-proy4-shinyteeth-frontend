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

export const updateProfile = async (token, body) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.put(`${root}/api/updateprofile`, body, config)
}

export const updateUser = async (token, user, body) => {
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

export const getMyAppointments = async (token) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.get(`${root}/api/patient/appointments`, config)
}

export const getPatientUserInfo = async (token, body) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.post(`${root}/api/patients/user/`, body, config)
}

export const getDoctorUserInfo = async (token, body) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.post(`${root}/api/professionals/user/`, body, config)
}

export const getDocAppointments = async (token) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.get(`${root}/api/professional/appointments`, config)
}

export const getTreatmentDetail = async (token, treatment) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.get(`${root}/api/dentaltreatments/${treatment}`, config)
}

export const getProfessionalDetail = async (token, professional) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.get(`${root}/api/professionals/${professional}`, config)
}

export const cancelAppointment = async (token, appointment) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  return await axios.delete(`${root}/api/patient/appointments/${appointment}`, config)
}
