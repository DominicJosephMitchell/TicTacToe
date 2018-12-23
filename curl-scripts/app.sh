'use strict'

#  use require with a reference to bundle the file and use it in this file
#  const example = require('./example')

#  use require without a reference to ensure a file is bundled
#  require('./example')

const authEvents = require('./auth/events.js')
const store = require('./auth/store.js')
const JS = require('./auth/JS.js')

$(() => {
  
  # console.log('hello')
  #  your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#newGameButton').on('click', JS.beginGame)
})
