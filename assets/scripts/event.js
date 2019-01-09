'use strict'


const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('./../store.js')
// const config = require('./../config.js')


const onSignUp = event => {
    // const onSignUp = function(event)
    event.preventDefault()
    const data = getFormFields(event.target)//added
    // const data = getFormFields($('#sign-up-form')[0])//removed
    // take this data and send it to the server
    // using a HTTP request
    api.signUp(data)
        .then(ui.signUpSuccess) // if the request passed
        .catch(ui.signUpFailure) // if the request failed
}

const onSignIn = event => {
    // on // const onSignUp = function(event)
    event.preventDefault()
    const data = getFormFields(event.target)//added
    // const data = getFormFields($('#sign-in-form')[0])//removed
    // take this data and send it to the server
    // using a HTTP request
    api.signIn(data)
        .then(ui.signInSuccess) // if the request passed
        .catch(ui.signInFailure) // if the request failed
}

const onSignOut = event => {
    // on // const onSignOut = function(event)
    event.preventDefault()
    api.signOut()
        .then(ui.signOutSuccess) // if the request passed
        .catch(ui.signOutFailure) // if the request failed
}

const onChangePassword = event => {
    // const onChangePassword = function(event)
    event.preventDefault()
    const data = getFormFields(event.target)//added
    // const data = getFormFields($('#change-password-form'))//removed
    // take this data and send it to the server
    // using a HTTP request
    api.changePassword(data)
        .then(ui.changePasswordSuccess) // if the request passed
        .catch(ui.changePasswordFailure) // if the request failed
}

const updateGame = event => {
    event.preventDefault()//added
    const data = getFormFields(event.target)//added
    api.userMoves(data, index, value, over)
        .then(ui.movesLogged)
        .catch(ui.movesNotLogged)
}

const newGame = event => {
    event.preventDefault()
    const data = getFormFields(event.target)//added
    api.game(data)
        .then(ui.onNewGameSuccess)
        .catch(ui.onNewGameFailure)
}

const pastGames = event => {
    event.preventDefault()
    api.gameHistory()
        .then(ui.getSuccess)
        .catch(ui.getFail)
}

const pastGamesDelete = event => {
    event.preventDefault()
    // deleting data input on click
    const data = $('#delete-task').val()
    // const data = $('#delete-todo_list[id]').val()
    api.pastGamesDelete(data)
        .then(ui.pastGamesDeleteSuccess) // if your request was succesful
        .catch(ui.pastGamesDeleteFailure) // if your request failed
}


module.exports = {
    onSignUp,
    onSignIn,
    onSignOut,
    onChangePassword,
    updateGame,
    newGame,
    pastGames,
    pastGamesDelete
}
