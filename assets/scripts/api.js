'use strict'

const config = require('./config.js')
const store = require('./store.js')

// Game Create
const game = () => {
    return $.ajax({
        url: config.apiUrl + '/games',
        method: 'POST',

        headers: {
            Authorization: 'Token token=' + store.user.token
        },
        data
    })
}

// User Moves
const userMoves = function (index, value, over) {
    return $.ajax({
        url: config.apiUrl + '/games/:id',
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token
        },
        data: {
            'game': {
                'cell': {
                    'index': index,
                    'value': value
                },
                'over': over
            }
        }
    })
}

// Delete
const pastGameDelete = id => {
    return $.ajax({
        url: config.apiUrl + '/games/' + id,
        method: 'DELETE',
        headers: {
            Authorization: 'Token token=' + store.user.token
        }
    })
}

// Game History
const gameHistory = () => {
    return $.ajax({
        url: config.apiUrl + '/games',
        method: 'GET',
        headers: {
            Authorization: 'Token token=' + store.user.token
        }
            // data: data

    })
}

// Sign Up
const signUp = data => {
    return $.ajax({
        url: config.apiUrl + '/sign-up',
        method: 'POST',
        data: data
    })
}

// Sign In
const signIn = data => {
    return $.ajax({
        url: config.apiUrl + '/sign-in',
        method: 'POST',
        data: data
    })
}

// Change Password
const changePassword = data => {
    return $.ajax({
        url: config.apiUrl + '/change-password',
        method: 'PATCH',
        headers: {
            Authorizaton: 'Token token=' + store.user.token
        },
        data: data//added 2nd data
    })
}

// Sign Out
const signOut = () => {
    return $.ajax({
        url: config.apiUrl + '/sign-out',
        method: 'DELETE',
        headers: {
            Authorization: 'Token token=' + store.user.token
        },
        // data: data//added
    })
}

module.exports = {
    signUp,
    signIn,
    changePassword,
    signOut,
    game,
    userMoves,
    gameHistory,
    pastGameDelete
}

