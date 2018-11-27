'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
const events = require('./events.js')

$(() => {
  console.log('page loaded')
  $('#SignUpFormModal').on('submit', events.onSignUp)
  $('#loginFormModal').on('submit', events.onSignIn)
  $('#logout').on('click', events.onSignOut)
})
