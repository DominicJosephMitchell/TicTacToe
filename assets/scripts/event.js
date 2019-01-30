'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
    event.preventDefault()
    const data = getFormFields(event.target)
    api.signUp(data)
        .then(ui.signUpSuccess) 
        .catch(ui.signUpFailure) 
}

const onSignIn = event => {
    event.preventDefault()
    const data = getFormFields(event.target)
    api.signIn(data)
        .then(ui.signInSuccess) 
        .catch(ui.signInFailure) 
}

const onSignOut = event => {
    event.preventDefault()
    api.signOut()
        .then(ui.signOutSuccess) 
        .catch(ui.signOutFailure) 
}

const onChangePassword = event => {
    event.preventDefault()
    const data = getFormFields(event.target)
    api.changePassword(data)
        .then(ui.changePasswordSuccess) 
        .catch(ui.changePasswordFailure) 
}

const updateGame = event => {
    event.preventDefault()
    const data = getFormFields(event.target)
    api.userMoves(data, index, value, over)
        .then(ui.movesLogged)
        .catch(ui.movesNotLogged)
}

const newGame = event => {
    event.preventDefault()
    const data = getFormFields(event.target)
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
    const data = $('#delete-task').val()
    api.pastGamesDelete(data)
        .then(ui.pastGamesDeleteSuccess) 
        .catch(ui.pastGamesDeleteFailure) 
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
