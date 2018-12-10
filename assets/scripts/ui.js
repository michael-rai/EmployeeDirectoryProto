const store = require('./store.js')

const signUpSuccess = data => {
  $('#SignUpFormModal')[0].reset()
  $('#message1').text('Signed up successfully')
  $('#message1').removeClass()
  $('#message1').addClass('sucess')
  console.log('signUpSuccess ran. data is : ', data)
}

const addEmpSuccess = data => {
  $('#message4').text('Registered Employee')
  $('#message4').removeClass()
  $('#message4').addClass('sucess')
  console.log('addEmpSuccess ran. data is : ', data)
}

const addEmpFailure = data => {
  $('#message3').text('COULD NOT REGISTER EMPLOYEE!')
  $('#message3').removeClass()
  $('#message3').addClass('FAILURE')
  console.error('addEmpFailure ran. Error is: ', data)
}

const pwChangeFailure = data => {
  $('#message3').text('COULD NOT CHANGE USER PASSWORD!')
  $('#message3').removeClass()
  $('#message3').addClass('FAILURE')
  console.error('pwChangeFailure ran. Error is: ', data)
}

const pwChangeSuccess = data => {
  $('#message3').text('USER PASSWORD HAS BEEN CHANGED!')
  $('#message3').removeClass()
  $('#message3').addClass('SUCESS')
  console.error('pwChangeSuccess ran. Error is: ', data)
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
  $('#loginFormModal')[0].reset()
  $('#mainModal').modal('toggle')
  $('#message2').text('Signed in successfully')
  $('#message2').removeClass()
  $('#message2').addClass('sucess')
  console.log('signInSuccess ran. data is : ', data)
}

const signOutSuccess = data => {
  document.getElementById('user-controls').hidden = true
  document.getElementById('emp-box').hidden = true
  document.getElementById('launch-button').hidden = false
  document.getElementById('database-view').hidden = true
  document.getElementById('boxes').hidden = true
  $('#message2').text('You have successfully logged out')
  $('#message2').removeClass()
  $('#message2').addClass('sucess')
  console.log('signOutSuccess ran. data is : ', data)
}

const signInFailure = data => {
  $('#message2').text('Sign in unsucessful')
  $('#message2').removeClass()
  $('#message2').addClass('sucess')
  console.error('signInFailure ran. Error is: ', data)
}

const showEmpsSuccess = data => {
  data.employees.forEach(function (employee) {
    const empTemp = `<ul>
      <li>Name: ${employee.name}</li>
      <li>Email: ${employee.email}</li>
      <li>Department: ${employee.dept}</li>
      <li>Active?: ${employee.active}</li>
    </ul>`
    $('#data-view').append(empTemp)
  })
}

const showEmpsFailure = data => {
  $('#data-view').text('this did not work..now fix this function to display data!')
}

const signOutFailure = data => {
  $('#message2').text('Signout Failed! ')
  $('#message2').removeClass()
  $('#message2').addClass('sucess')
  console.error('signOutFailure ran. Error is: ', data)
}
module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  addEmpFailure,
  addEmpSuccess,
  showEmpsSuccess,
  showEmpsFailure,
  pwChangeFailure,
  pwChangeSuccess
}
