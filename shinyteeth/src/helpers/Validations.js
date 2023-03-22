// All validations function
const ValidateForm = (target) => {
  switch (target.name) {
    case 'firstname':
    case 'middlename':
    case 'lastname':
      if (target.required === true && target.value === '') {
        return { message: 'This field is required!', valid: false }
      } else if (!/^$|^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(target.value)) {
        return { message: 'Use only characters', valid: false }
      }
      return { message: '', valid: true }

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

    case 'mobilephone':
      if (target.value === '' && target.required === true) {
        return { message: 'Mobile phone number is required!', valid: false }
      } else if (!/^(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}$/.test(target.value)) {
        return { message: 'Only spain mobile phone numbers admited', valid: false }
      }
      return { message: '', valid: true }

    default:
      console.log('Fielt not recognized')
  }
}

export default ValidateForm
