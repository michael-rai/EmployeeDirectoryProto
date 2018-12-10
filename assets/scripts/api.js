const config = require('./config.js')
const store = require('./store.js')

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  }
  )
}

const createEmp = data => {
  return $.ajax({
    url: config.apiUrl + '/employees',
    method: 'POST',
    data
  }
  )
}

const showEmps = data => {
  return $.ajax({
    url: config.apiUrl + '/employees',
    method: 'GET',
    data
  }
  )
}
// const delEmps = data => {
//   return $.ajax({
//     url: config.apiUrl + `/employees/${data}`,
//     method: 'DELETE',
//     data
//   }
//   )
// }
const changePw = data => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const delEmp = data => {
  return $.ajax({
    url: config.apiUrl + '/employees',
    method: 'DELETE',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  }
  )
}

module.exports = {
  signUp,
  signIn,
  signOut,
  createEmp,
  showEmps,
  delEmp,
  changePw
}
