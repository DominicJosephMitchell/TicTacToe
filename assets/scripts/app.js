'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./event.js')
const store = require('./store.js')
const JS = require('./JS.js')

// your JS code goes here

$(() => {
  store.userSignedIn = false
  if (store.userSignedIn === false) {
    $('#sign-up-btn').show()
    $('#sign-in-btn').show()
    $('#sign-out-btn').hide()
    $('#password-btn').hide()
    $('#showModal').hide()
  }

  // Auth CRUD Actions
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-form').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  // $('#sign-out-form').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#newGame').on('click', JS.beginGame)
  $('#reset').on('click', JS.beginGame)
})

// module.exports = {
//   userSignedIn
// }
