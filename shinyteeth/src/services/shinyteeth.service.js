import axios from 'axios'

const root = 'http://localhost:3000'

export const logMeIn = async (body) => {
  return await axios.post(`${root}/api/signin`, body, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
}

export const signMeUp = async (body) => {
  return await axios.post(`${root}/api/signup`, body, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
}
