const store = require('./store.js')

const signUpSuccess = data => {
  $('#message1').text('Signed up successfully')
  $('#message1').removeClass()
  $('#message1').addClass('sucess')
  // unhide game board, purge, and scorekeepers
  console.log('signUpSuccess ran. data is : ', data)
}

const signUpFailure = data => {
  $('#message1').text('Sign up unsucessful')
  $('#message1').removeClass()
  $('#message1').addClass('sucess')
  console.error('signUpFailure ran. Error is: ', data)
}

const signInSuccess = data => {
  store.user = data.user
  $('#message2').text('Signed in successful')
  $('#message2').removeClass()
  $('#message2').addClass('sucess')
  $('#user-controls').hidden = false
  $('emp-box').hidden = false
  // unhide game board, purge, and scorekeepers
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
  signInFailure
}
