import axios from 'axios'
import { getValidationError } from '../utilities'
import { SnackbarUtilities } from '../utilities/SnackbarManager'

// Import from Redux
// import { useSelector } from 'react-redux'
// import { userData } from '../redux/slices/userSlice'

export const AxiosInterceptor = () => {
  // const logedUserData = useSelector(userData)

  axios.interceptors.request.use(
    (request) => {
      // if (logedUserData?.credentials?.token) {
      //   request.headers['Authorization'] = `Bearer ${logedUserData?.credentials?.token}`
      //   console.log(request.headers)
      // }
      return request
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  axios.interceptors.response.use(
    (response) => {
      console.log('response', response)
      SnackbarUtilities.success('Success')
      return response
    },
    (error) => {
      SnackbarUtilities.error(getValidationError(error.code))
      return Promise.reject(error)
    }
  )
}
