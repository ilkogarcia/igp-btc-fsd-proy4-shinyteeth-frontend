// Email inputs validations function
export const validateForm = (name, data, required) => {
  switch (name) {
    case 'email':
      if (data === '' && required === true) {
        return { message: 'Email is required!', valid: false }
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)) {
        return { message: 'Email must use this format name@example.com', valid: false }
      }
      return { message: '', valid: true }

    case 'password':
      if (data === '' && required === true) {
        return { message: 'Password is required!', valid: false }
      } else if (data.length < 8 || data.length > 32) {
        return { message: 'Password length is not valid!', valid: false }
      }
      return { message: '', valid: true }

    default:
      console.log('Fielt not recognized')
  }
}
