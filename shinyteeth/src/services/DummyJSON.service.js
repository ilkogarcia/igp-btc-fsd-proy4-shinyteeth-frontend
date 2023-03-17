import axios from 'axios'

const root = 'https://dummyjson.com'

export const logMeIn = async (body) => {
  return await axios.post(`${root}/auth/login`, body, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
