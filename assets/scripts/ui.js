const store = require('./store.js')

const signUpSuccess = data => {
  $('#message1').text('Signed up successfully')
  $('#message1').removeClass()
  $('#message1').addClass('sucess')
  // unhide game board, purge, and scorekeepers
  console.log('signUpSuccess ran. data is : ', data)
}

const addEmpSuccess = data => {
  $('#message4').text('Registered Employee')
  $('#message4').removeClass()
  $('#message4').addClass('sucess')
  // unhide game board, purge, and scorekeepers
  console.log('addEmpSuccess ran. data is : ', data)
}

const addEmpFailure = data => {
  $('#message3').text('COULD NOT REGISTER EMPLOYEE!')
  $('#message3').removeClass()
  $('#message3').addClass('FAILURE')
  console.error('addEmpFailure ran. Error is: ', data)
}

const signUpFailure = data => {
  $('#message1').text('Sign up unsucessful')
  $('#message1').removeClass()
  $('#message1').addClass('sucess')
  console.error('signUpFailure ran. Error is: ', data)
}

const signInSuccess = data => {
  store.user = data.user
  document.getElementById('user-controls').hidden = false
  document.getElementById('emp-box').hidden = false
  document.getElementById('launch-button').hidden = true
  document.getElementById('database-view').hidden = false
  document.getElementById('boxes').hidden = false
  $('#message2').text('Signed in successfully')
  $('#message2').removeClass()
  $('#message2').addClass('sucess')
  console.log('signInSuccess ran. data is : ', data)
}

const signInFailure = data => {
  $('#message2').text('Sign in unsucessful')
  $('#message2').removeClass()
  $('#message2').addClass('sucess')
  console.error('signInFailure ran. Error is: ', data)
}
module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  addEmpFailure,
  addEmpSuccess
}
