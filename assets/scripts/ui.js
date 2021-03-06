'use strict'

const store = require('./store.js')
const JS = require('./JS.js')

$('#reset-btn').hide()
$('#new-game-btn').hide()
$('#animation-content').hide()


const signUpSuccess = data => {
    $('#message').text('Signed up Successfully')
    $('#message').removeClass()
    $('#sign-up-form').trigger('reset')
    $('#message').addClass('success')
    // $('#signUpModal').modal('hide')
    window.setTimeout(function () {
        $('#signUpModal').modal('hide');
    }, 500);
}

const signUpFailure = error => {
    $('#message').text('Error on SignUp')
    $('#message').removeClass()
    $('#message').addClass('failure')
    $('#sign-up-form').trigger('reset')
}

const signInSuccess = data => {
    store.user = data.user
    store.userSignedIn = true
    $('#sign-up-btn').hide()
    $('#sign-in-btn').hide()
    $('#sign-out-btn').show()
    $('#animation-content').show()
    $('#password-btn').show()
    $('#reset-btn').show()
    $('#new-game-btn').show()
    $('#showModal').show()
    $('#showEditModal').show()
    $('#message2').text('Signed In Successfully')
    $('#message2').removeClass()
    $('#message2').addClass('success')
    $('#sign-in-form').trigger('reset')
    // $('#signInModal').modal('hide')
    window.setTimeout(function () {
        $('#signInModal').modal('hide');
    }, 500);
    $('#gameBoard').css('visibility', 'visible')
}

const signInFailure = error => {
    $('#message2').text('Error on SignIn')
    $('#message2').removeClass()
    $('#message2').addClass('failure')
    $('#sign-in-form').trigger('reset')
}

const signOutSuccess = data => {
    store.userSignedIn = false
    $('#sign-up-btn').show()
    $('#sign-in-btn').show()
    $('#sign-out-btn').hide()
    $('#password-btn').hide()
    $('#reset-btn').hide()
    $('#new-game-btn').hide()
    $('#animation-content').hide()
    $('#showModal').hide()
    $('#showEditModal').hide()
    store.user = null
    $('#message3').text('Signed Out Successfully')
    $('#message3').removeClass()
    $('#message3').addClass('success')
    $('#message2').empty()
    // $('#signOutModal').modal('hide')
    window.setTimeout(function () {
        $('#signOutModal').modal('hide');
    }, 500);
    $('#gameBoard').css('visibility', 'hidden')
}

const signOutFailure = error => {
    store.user = null
    $('#message3').text('Error on SignOut')
    $('#message3').removeClass()
    $('#message3').addClass('failure')
}

const changePasswordSuccess = data => {
    $('#message4').text('Change Password Successfully')
    $('#message4').removeClass()
    $('#message4').addClass('success')
    $('#change-password-form').trigger('reset')
    // $('#changePasswordModal').modal('hide')
    window.setTimeout(function () {
        $('#changePasswordModal').modal('hide');
    }, 500);
}

const changePasswordFailure = error => {
    $('#message4').text('Error on Change Password')
    $('#message4').removeClass()
    $('#message4').addClass('failure')
    $('#change-password-form').trigger('reset')
    // window.setTimeout(function () {
    //     $('#changePasswordModal').modal('hide');
    // }, 500);

}

const gameSuccess = () => {
    $('.gameBoard').show()
    $('#reset').show()
    $('#history').show()
}

const movesLogged = (data) => {
}

const movesNotLogged = () => {
}

const onNewGameSuccess = (data) => {
    // $('#new-game').hide()
    app.game = data.game
    app.game.id = data.game.id
    JS.beginGame
}

const onNewGameFailure = (data) => {
}

const getSuccess = function (data) {
    $('#message').html('Games Played:' + data.games.length)
}

const getFail = () => {
}


module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    changePasswordSuccess,
    changePasswordFailure,
    movesLogged,
    movesNotLogged,
    onNewGameSuccess,
    onNewGameFailure,
    gameSuccess,
    getFail,
    getSuccess
}
