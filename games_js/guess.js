const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const feedback = document.getElementById("msg");
const timerDisplay = document.getElementById("timer");

//test variables
const userNumber = document.getElementById("testNumber");
const randomNumber = document.getElementById("testRand");

let secretNumber;
let startTime, timerInterval;

//starts game
function startGame(){
    secretNumber = Math.floor(Math.random() * 100) + 1;

    startTime = Date.now();
    updateTimer();
    timerInterval = setInterval(updateTimer,1000);
    
}

//endgame with message
function endGame(message){
    clearInterval(timerInterval); //stops timer

    feedback.textContent = message;

    setTimeout(startGame, 2000); //new game after 2 secs

}

//updates timer
function updateTimer(){
    const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
    timerDisplay.textContent = `Time: ${elapsedSeconds}s`;
}

guessButton.addEventListener("click", function(){
    const guess = parseInt(guessInput.value.trim());

    //input validation
    if(isNaN(guess) || guess < 1 || guess > 100){
        feedback.textContent = "Enter number between 1 and 100.";
        return;
    }

    //if guess is correct
    if( guess === secretNumber){
        endGame(`Correct! The number was ${secretNumber}`);
    }else{
        feedback.textContent = guess < secretNumber ? "Too low! Try again" : "Too high! Try again";
    }


    userNumber.textContent = `userNumber = ${guess}`;
    randomNumber.textContent = `randomNumber = ${secretNumber}`;
});


//starts game
window.addEventListener("DOMContentLoaded", startGame);