import axios from 'axios'
import { getInLocalStorage, getValidationError, LocalStorageKeys, saveInLocalStorage } from '../utilities'
import { SnackbarUtilities } from '../utilities/SnackbarManager'

export const AxiosInterceptor = () => {
  saveInLocalStorage(LocalStorageKeys.TOKEN, '123123123123')

  const updateHeader = (request) => {
    const token = getInLocalStorage(LocalStorageKeys.TOKEN)
    const newHeaders = {
      Authorization: token,
      'Content-Type': 'application/json'
    }
    request.headers = newHeaders
    return request
  }

  axios.interceptors.request.use((request) => {
    if (request.url?.includes('assets')) return request
    return updateHeader(request)
  })

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
