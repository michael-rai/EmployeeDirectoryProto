const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()
  console.log('success')
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  console.log('success')
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onAddEmp = event => {
  event.preventDefault()
  console.log('success')
  const data = getFormFields(event.target)
  api.createEmp(data)
    .then(ui.addEmpSuccess)
    .catch(ui.addEmpFailure)
}
// $('').trigger('reset') reset button look into this
const onSignOut = event => {
  event.preventDefault()
  console.log('Signed Out successfully')
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onAddEmp
}
