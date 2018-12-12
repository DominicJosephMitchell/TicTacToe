'use strict'

const config = require('./config.js')
const store = require('./store.js')

const game = () => {
    return $.ajax({
        url: config.apiUrl + '/games',
        headers: {
            Authorization: 'Token token=' + store.user.token
        },
        method: 'POST',
    })
}

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

const gameHistory = () => {
    return $.ajax({
        url: config.apiUrl + '/games',
        method: 'GET',
        headers: {
            Authorization: 'Token token=' + store.user.token
        }
    })
}

const signUp = data => {
    return $.ajax({
        url: config.apiUrl + '/sign-up',
        method: 'POST',
        data: data
    })
}

const signIn = data => {
    return $.ajax({
        url: config.apiUrl + '/sign-in',
        method: 'POST',
        data: data
    })
}

const changePassword = data => {
    return $.ajax({
        url: config.apiUrl + '/change-password',
        method: 'PATCH',
        headers: {
            Authorizaton: 'Token token=' + store.user.token
        },
        data: data
    })
}

const signOut = () => {
    return $.ajax({
        url: config.apiUrl + '/sign-out',
        method: 'DELETE',
        headers: {
            Authorization: 'Token token=' + store.user.token
        }
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
}

