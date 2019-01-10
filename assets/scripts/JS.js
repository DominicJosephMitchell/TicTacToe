const gameEvents = require('./api.js');
const customEvent = require('./event.js');
const api = require('./api.js')
const ui = require('./ui.js')


let ticTacToeBoard
// Game Board
let playerOne = 'X'
// Player One
let playerTwo = 'O'
// Player Two
let playerTurn = playerOne

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
]
// Results of WINNING combinations from the board
// expalins how the function works
function beginGame() {
    const squares = document.querySelectorAll('.square')
    document.querySelector('.endgame').style.display = 'none'
    ticTacToeBoard = Array.from(Array(9).keys());
    for (let i = 0; i < squares.length; i++) {
        squares[i].innerText = '' //sets box to blank
        squares[i].style.removeProperty('background-color')
        squares[i].addEventListener('click', _listener, true)
    }
}

const _listener = function (event) {
    event.preventDefault()
    turnClick(this);
}

function turnClick(box) {
    box = Number(box.id);
    turn(box, playerTurn)
}

function turn(boxId, player) {
    ticTacToeBoard[boxId] = player
    document.getElementById(boxId).innerText = player //places x
    document.getElementById(boxId).removeEventListener('click', _listener, true);
    const gameWon = checkWin(ticTacToeBoard, player)

    if (gameWon) {
        gameOver(gameWon);
    } else if (!gameWon && emptyBoxs().length == 0) {
        checkTie();
    } else {
        playerTurn = swapPlayer(playerTurn)
    }
}

function swapPlayer(currentPlayer) {
    if (currentPlayer == playerOne) {
        currentPlayer = playerTwo;
    } else {
        currentPlayer = playerOne;
    }
    return currentPlayer
}



function checkWin(board, player) {
    const plays = board.reduce((a, e, i) =>
        (e === player) ? a.concat(i) : a, [])
    for (const [index, win] of winCombos.entries()) {
        if (win.every(element => plays.indexOf(element) > -1)) {
            let gameWon = {
                index: index,
                player: player
            }
            return gameWon;
        }
    }
}

function gameOver(gameWon) {
    for (const index of winCombos[gameWon.index]) {
        document.getElementById(index).style.backgroundColor =
            gameWon.player === playerOne ? 'green' : 'red'
    }
    const squares = document.querySelectorAll('.square')
    for (let i = 0; i < squares.length; i++) {

        squares[i].removeEventListener('click', _listener, true);
    }
    declareWinner(gameWon.player === playerOne ? 'You Won!' : 'Your a LOSER !')
}

function declareWinner(who) {
    document.querySelector('.endgame').style.display = 'block';
    document.querySelector('.endgame .text').innerText = who; //places winner
    if (who !== 'You Won!' && who !== 'Your a LOSER !') {
        tieGame = document.querySelector('.endgame');
        tieGame.style.backgroundColor = 'rebeccapurple';
    }
    let currentGame = {}
    game();
}


//********************************************  Check for Tie  ***************************************/
function emptyBoxs() {
    return ticTacToeBoard.filter(spotClaimed);
}
function spotClaimed(spot) {
    return spot = typeof (spot) === 'number';
}


function checkTie() {
    if (emptyBoxs().length == 0) {
        const squares = document.querySelectorAll('.square')
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = 'purple'
            squares[i].removeEventListener('click', _listener, true)
        }
        declareWinner('Tie Game!')
        return true;
    }
    return false;
}

window.onload = function () {
    beginGame();
}

function placeMarker(box) {
    let boxStuff = box;
}


function value(square) {
    if (playerOne == 1) {
        document.getElementById(square).innerHTML = 'X'
        playerOne = 0
    } else {
        document.getElementById(square).innerHTML = 'O'
        playerOne = 1
    }
}

// for newgame and display past games
module.exports = {
    beginGame,
    turnClick,
    turn,
    swapPlayer,
    checkWin,
    gameOver,
    declareWinner,
    emptyBoxs,
    spotClaimed,
    checkTie,
    placeMarker,
    value
}
