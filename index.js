let playerMarker = "X"
let winner = ""
let gameIsGoing = true

const box = document.querySelector(".box")
const message = document.querySelector(".header")
const gridContainer = document.querySelectorAll('.grid-container > div')
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")


// This section controls the effects when user hovers over one of the tiles
gridContainer.forEach(gridItem => gridItem.addEventListener('mouseover', () => {
    handleMouseOverEffect(gridItem);
}))


gridContainer.forEach(gridItem => gridItem.addEventListener('mouseleave', () => {
    handleMouseLeaveEffect(gridItem)
}))


function handleMouseOverEffect(tile) {
    tile.style.transform = "scale(1.05)";
    tile.style.boxShadow = "3px 2px #AE26D8";
    tile.style.textShadow = "3px 2px rgb(174, 38, 216, 0.6)";}


function handleMouseLeaveEffect(tile) {
    tile.style.transform = "scale(1)";
    tile.style.boxShadow = "none";
    tile.style.textShadow = "none";
}

// This section controls what happens when the user clicks a tile and starts a game
gridContainer.forEach(gridItem => gridItem.addEventListener('click', () => {
    playGame(gridItem)
}))

function playGame(tile) {
    if (gameIsGoing === true) {
        if (tile.textContent === "X" || tile.textContent === "O"){
            message.textContent = "That tile is already taken. Pick a different tile."
        } else {
            tile.textContent = playerMarker;
            message.textContent = "Noughts and Crosses"
            checkWinner()
            declareWinner()
            switchPlayer()
        }
    }
}

function checkWinner(){
    if (one.textContent === playerMarker && two.textContent === playerMarker && three.textContent === playerMarker){
        //top row win
        winner = playerMarker;
        gameIsGoing = false;
    } else if (four.textContent === playerMarker && five.textContent === playerMarker && six.textContent === playerMarker){
        //middle row win
        winner = playerMarker;
        gameIsGoing = false;
    } else if (seven.textContent === playerMarker && eight.textContent === playerMarker && nine.textContent === playerMarker) {
        //bottom row win
        winner = playerMarker;
        gameIsGoing = false;
    } else if (one.textContent === playerMarker && four.textContent === playerMarker && seven.textContent === playerMarker){
        //first column win
        winner = playerMarker;
        gameIsGoing = false;
    } else if (two.textContent === playerMarker && five.textContent === playerMarker && eight.textContent === playerMarker){
        //second column win
        winner = playerMarker;
        gameIsGoing = false;
    } else if (three.textContent === playerMarker && six.textContent === playerMarker && nine.textContent === playerMarker) {
        //third column win
        winner = playerMarker;
        gameIsGoing = false;
    } else if (one.textContent === playerMarker && five.textContent === playerMarker && nine.textContent === playerMarker){
        //diagonal down win
        winner = playerMarker;
        gameIsGoing = false;
    } else if (seven.textContent === playerMarker && five.textContent === playerMarker && three.textContent === playerMarker){
        //diagonal up win
        winner = playerMarker;
        gameIsGoing = false;
    } else if (
        //tie
        (one.textContent === "X" || one.textContent === "O") &&
        (two.textContent === "X" || two.textContent === "O") &&
        (three.textContent === "X" || three.textContent === "O") &&
        (four.textContent === "X" || four.textContent === "O") &&
        (five.textContent === "X" || five.textContent === "O") &&
        (six.textContent === "X" || six.textContent === "O") &&
        (seven.textContent === "X" || seven.textContent === "O") &&
        (eight.textContent === "X" || eight.textContent === "O") &&
        (nine.textContent === "X" || nine.textContent === "O")) {
            console.log("nobody wins")
            gameIsGoing = false;
            winner = "nobody"

        }
}


function switchPlayer(){
    if (playerMarker === "X") {
    playerMarker = "O";
    } else if (playerMarker === "O") {
        playerMarker = "X"
    }
}


function declareWinner() {
    if (Boolean(winner) === true) {
        if (winner === "X" || winner === "O") {
            message.textContent = `${playerMarker} wins!`

        } else if (winner === "nobody") {
            message.textContent = "It's a tie!"
        }
        const playAgainButton = document.createElement('div');
        playAgainButton.classList.add("play-again")
        playAgainButton.textContent = "Play Again";
        playAgainButton.style.display = "inline-block";
        playAgainButton.style.border = " solid 1px rgb(245, 73, 66)"
        playAgainButton.style.margin = "0 0 0 2rem"
        playAgainButton.style.padding = "0 0.5rem"
        message.appendChild(playAgainButton)
        const playAgain = document.querySelector(".play-again")
        playAgain.addEventListener('mouseover', (e) => {
            handleMouseOverEffect(e.target)
        });
        playAgain.addEventListener('mouseleave', (e) => {
            handleMouseLeaveEffect(e.target)
        })
        playAgain.addEventListener('click', playAgainFunction)
    }
}

function playAgainFunction() {
    playerMarker = "X"
    winner = ""
    gridContainer.forEach(clearContent)
    message.textContent = "Noughts and Crosses"
    gameIsGoing = true
}

function clearContent(container) {
    container.textContent = ""
}