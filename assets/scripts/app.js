'use strict'

const authEvents = require('./event.js')
const store = require('./store.js')
// const JS = require('./JS.js')

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
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#new-game-btn').on('submit', JS.beginGame)
  $('#reset-btn').on('submit', JS.beginGame)
  
})
