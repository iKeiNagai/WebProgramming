let playerTurn = true;
let computerMoveTimeout = 0;

let playerMoveTimeout = 0;
let countdownInterval = 0;
let timeLeft = 5;

const gameStatus = {
    MORE_MOVES_LEFT: 1,
    HUMAN_WINS: 2,
    COMPUTER_WINS: 3,
    DRAW_GAME: 4
};
window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    // Setup the click event for the "New game" button
    const newBtn = document.getElementById("newGameButton");
    newBtn.addEventListener("click", newGame);

    // Create click-event handlers for each game board button
    const buttons = getGameBoardButtons();
    for (let button of buttons) {
        button.addEventListener("click", function ()
    { boardButtonClicked(button); });
    }
}

//Returns an array of 9 <button> elements that make up the game board.
//The first 3 elements are the top row, the next 3 the middle row, and the last 3
//the bottom row.
function getGameBoardButtons() {
    return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
const buttons = getGameBoardButtons();
// Ways to win
const possibilities = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
];
// Check for a winner first
for (let indices of possibilities) {
    if (buttons[indices[0]].innerHTML !== "" &&
        buttons[indices[0]].innerHTML ===
        buttons[indices[1]].innerHTML &&
        buttons[indices[1]].innerHTML ===
        buttons[indices[2]].innerHTML) {
        // Found a winner
        if (buttons[indices[0]].innerHTML === "X") {
            return gameStatus.HUMAN_WINS;
        }
        else {
            return gameStatus.COMPUTER_WINS;
        }
    }
}
// See if any more moves are left
for (let button of buttons) {
    if (button.innerHTML !== "X" && button.innerHTML !== "O") {
        return gameStatus.MORE_MOVES_LEFT;
    }
}
// If no winner and no moves left, then it's a draw
return gameStatus.DRAW_GAME;
}
function newGame() {
    clearTimeout(computerMoveTimeout);
    clearInterval(countdownInterval);
    computerMoveTimeout = 0;

    //Loop through all game board buttons to reset them
    const buttons = getGameBoardButtons();
    for (let button of buttons) {
        button.textContent = "";
        button.className = ""; 
        button.disabled = false;
    }

    //Allow the player to take a turn
    playerTurn = true;

    //Update turn information text
    document.getElementById("turnInfo").textContent = "Your turn";
    document.getElementById("timer").textContent = "";
}
function boardButtonClicked(button) {
    //if player's true
    if (playerTurn) {
        //Set the button's text content to "X"
        button.textContent = "X";
        
        //Add the "x" class to the button
        button.classList.add("x");
        
        //Disable the button to prevent further clicks
        button.disabled = true;
        
        //stop timer once player moves
        clearTimeout(playerMoveTimeout);

        //stops countdown
        clearInterval(countdownInterval);

        //Switch the turn to the computer
        switchTurn();
    }
}
function switchTurn() {
    const status = checkForWinner();

    clearInterval(countdownInterval);
    clearTimeout(playerMoveTimeout);

    //If more moves are left, continue the game
    if (status === gameStatus.MORE_MOVES_LEFT) {
        if (playerTurn) {
            //switching from player to computer
            playerTurn = false;
            document.getElementById("turnInfo").textContent = "Computer's turn";
            
            //simulate computer thinking before making a move
            computerMoveTimeout = setTimeout(makeComputerMove, 1000);
        } else {
            //switching from computer to player
            playerTurn = true;
            document.getElementById("turnInfo").textContent = "Your turn";

            //timer starts
            timeLeft = 5;
            document.getElementById("timer").textContent = `Time left: ${timeLeft}s`;

            //updates timer every second
            countdownInterval = setInterval(() => {
                timeLeft--;
                document.getElementById("timer").textContent = `Time left: ${timeLeft}s`;

                if (timeLeft === 0) {
                    clearInterval(countdownInterval);
                    if (playerTurn) {
                        makeComputerMove();
                    }
                }
            }, 1000);

            //starts 5 second countdown
            playerMoveTimeout = setTimeout(() => {
                if (playerTurn) {
                    makeComputerMove(); // Auto-move if time runs out
                }
            }, 5000);
        }
    } else {
        //Game over, prevent further moves
        playerTurn = false;

        if (status === gameStatus.HUMAN_WINS) {
            document.getElementById("turnInfo").textContent = "You win!";
        } else if (status === gameStatus.COMPUTER_WINS) {
            document.getElementById("turnInfo").textContent = "Computer wins!";
        } else if (status === gameStatus.DRAW_GAME) {
            document.getElementById("turnInfo").textContent = "Draw game";
        }
    }
}
function makeComputerMove() {
    const buttons = getGameBoardButtons();
    let availableButtons = [];

    //find all available (empty) buttons
    for (let button of buttons) {
        if (button.innerHTML === "") {
            availableButtons.push(button);
        }
    }

    //choose a random button from the available ones
    if (availableButtons.length > 0) {
        let randomIndex = Math.floor(Math.random() * availableButtons.length);
        let chosenButton = availableButtons[randomIndex];

        //Set the button's text content to "O"
        chosenButton.textContent = "O";

        //Add the "o" class
        chosenButton.classList.add("o");

        //Disable the button
        chosenButton.disabled = true;
    }

    //switch back to the player's turn
    switchTurn();
}