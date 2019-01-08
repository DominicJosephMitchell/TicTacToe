// const gameEvents = require('./api.js');
// const customEvent = require('./event.js');


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

// function knows its going to load but will wait its turn until html has loaded
// to begin game - same as restart
// matching the display from the HTML 'display'
// expalins how the function works
function beginGame() {
    // 11/17/2018
    // for newgame and display past games
    // change for newgame and dispaly past games
    // customEvent.newGame

    // store info to each sqaure on the html page in the flex-containers / took out ;
    const squares = document.querySelectorAll('.square')
    document.querySelector('.endgame').style.display = 'none'
    //  ref the endgame function - and working with the css line 190 style to modify
    // and working with the display: none;
    ticTacToeBoard = Array.from(Array(9).keys());
    // keys = 0 thru 8 in the array / (from)inside the array
    // console.log(ticTacToeBoard);
    for (let i = 0; i < squares.length; i++) {
        // squares = as it goes thru the for loop / took out ;
        squares[i].innerText = '' //sets box to blank
        // squares [i] is the squares in the array
        //  innerText set to nothing - nothing in the sqaures
        squares[i].style.removeProperty('background-color')
        // to remove the color from the background
        squares[i].addEventListener('click', _listener, true)
        // does it default as true or false-with no entry:?
        // 'click' function
        // return function beginGame
    }
}
// calls from addEventListener from above / listener function
const _listener = function (event) {
    event.preventDefault()
    turnClick(this);
}
// box aka square pulling the ID
function turnClick(box) {
    box = Number(box.id);

    turn(box, playerTurn)
    // let playerTurn = playerOne
    // function being called more than once / placed outside of first function
    // console.log(box.target.id)
    // turn function can be either player
    // box id - we are clicking and player taking the turn-player one
}

function turn(boxId, player) {
    // 2 parameters-box id and player(playerOne)-passed in above line 49
    // define turn function
    ticTacToeBoard[boxId] = player
    //  board array - win player that took a turn
    document.getElementById(boxId).innerText = player //places x
    document.getElementById(boxId).removeEventListener('click', _listener, true);

    // box id from html page(the ID's)
    const gameWon = checkWin(ticTacToeBoard, player)

    if (gameWon) {
        gameOver(gameWon);
        // 11/17/2018
        // for newgame and display past games
        // gameEvents.userMoves(boxId, player, true)
    } else if (!gameWon && emptyBoxs().length == 0) {
        checkTie();
        // 11/17/2018
        // for newgame and display past games
        // gameEvents.userMoves(boxId, player, false)

    } else {
        // 11/17/2018
        // for newgame and display past games
        // gameEvents.userMoves(boxId, player, false)
        playerTurn = swapPlayer(playerTurn)
    }
}

function swapPlayer(currentPlayer) {
    if (currentPlayer == playerOne) {
        // currentplayer looking for the value of playerTwo
        currentPlayer = playerTwo;
        // currentPlayer becomes playerTwo
    } else {
        currentPlayer = playerOne;
        // currentPlayer becomes playerTwo which is playerOne
    }
    return currentPlayer
    // 11/17/2018
    // for newgame and display past games

    // playerTurn = swapPlayer(playerTurn)
    // return stops the function - until the next click and starts over
}



function checkWin(board, player) {
    // using the reduce process,
    // 'e'isfor element equal to player,
    // 'i' for index) terenary is '?',
    //  add index to the array 'concat'
    const plays = board.reduce((a, e, i) =>
        // define plays already played
        //  using 'a' for accumulator to find index player has played(at the end),
        // 'e' is for element equal to player,
        // 'i' for index=inmthe array stores a list of key
        // ['1', '2', '3'] is 0 in the array with parameters
        // ? is the terenary/operator=quantity on which an operation is to be done
        (e === player) ? a.concat(i) : a, [])
    // e (element) equals player /
    // 'a' for accumulator
    // 'i' for index
    //  add index to the array 'concat'(Concatenate)link together ,join
    // concatenating strings, a string being any series of characters,
    // if e is not the winner nothing will be added to the Array
    for (const [index, win] of winCombos.entries()) {
        if (win.every(element => plays.indexOf(element) > -1)) {
            // check game for winnner with 4 loop
            // go through all combos listed above in the array / 'const winCombos ='
            // to search for all ways the win,index 0-8
            // index of the win
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

// 
function declareWinner(who) {
    // if a Modal is to be used
    // $('#displayPastGamesModal').modal('show')
    document.querySelector('.endgame').style.display = 'block';
    document.querySelector('.endgame .text').innerText = who; //places winner
    if (who !== 'You Won!' && who !== 'Your a LOSER !') {
        tieGame = document.querySelector('.endgame');
        tieGame.style.backgroundColor = 'rebeccapurple';
    }
    // 11/17/2018
    // for newgame and display past games
    let currentGame = {}
    game();
}


//********************************************  Check for Tie  ***************************************/
function emptyBoxs() {
    return ticTacToeBoard.filter(spotClaimed);
    // everything that is not a number is getting filtered out
}
function spotClaimed(spot) {
    return spot = typeof (spot) === 'number';
    // return the empty spots if not a number pushes it out
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

// looping thru win combos get the index and the win (index of the win)
// function to create onclick for sqaures
window.onload = function () {
    beginGame();
}
// called outside of function

function placeMarker(box) {
    let boxStuff = box;
    // boxStuff is equal to 'this' above
    // boxStuff.innerText = playerOne;
    // passing 'x' through
    // console.log('Click the Box')
}

// *******************************************************************

function value(square) {
    if (playerOne == 1) {
        document.getElementById(square).innerHTML = 'X'
        playerOne = 0
    } else {
        document.getElementById(square).innerHTML = 'O'
        playerOne = 1
    }
}

// 11/17/2018
// for newgame and display past games
module.exports = {
    beginGame
}
