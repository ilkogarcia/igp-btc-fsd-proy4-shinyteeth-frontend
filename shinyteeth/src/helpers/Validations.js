// All validations function
const ValidateForm = (target) => {
  switch (target.name) {
    case 'email':
      if (target.value === '' && target.required === true) {
        return { message: 'Email is required!', valid: false }
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(target.value)) {
        return { message: 'Email must use this format name@example.com', valid: false }
      }
      return { message: '', valid: true }

    case 'password':
      if (target.value === '' && target.required === true) {
        return { message: 'Password is required!', valid: false }
      }
      return { message: '', valid: true }

    case 'checkbox':
      if (target.checked === false && target.required === true) {
        return { message: 'Users must first agree our terms and conditions', valid: false }
      }
      return { message: '', valid: true }

    default:
      console.log('Fielt not recognized')
  }
}

export default ValidateForm
