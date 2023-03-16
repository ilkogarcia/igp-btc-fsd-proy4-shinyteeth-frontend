export const getValidationError = (errorCode) => {
  const codeMatcher = {
    ERR_NETWORK: 'Estamos experimentando algunos problemas de red',
    ERR_TIMEOUT: 'Se acabó el tiempo',
    ERR_CANCEL: 'Se canceló la petición',
    ERR_UNKNOWN: 'Error desconocido',
    ERR_400: 'Error 400',
    ERR_401: 'Error 401',
    ERR_403: 'Error 403'
  }

  return codeMatcher[errorCode]
}
