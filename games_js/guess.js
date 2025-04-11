const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const feedback = document.getElementById("msg");
const timerDisplay = document.getElementById("timer");
const soundCorrect = document.getElementById("sound-correct");
const soundWrong = document.getElementById("sound-wrong");
const remainingGuesses = document.getElementById("remainingGuesses");

//test variables
const userNumber = document.getElementById("testNumber");
const randomNumber = document.getElementById("testRand");

let secretNumber;
let startTime, timerInterval;
let guessesLeft,maxGuesses = 5;

//starts game
function startGame(){
    secretNumber = Math.floor(Math.random() * 100) + 1;

    startTime = Date.now();
    updateTimer();
    timerInterval = setInterval(updateTimer,1000);
    
    guessesLeft = maxGuesses;
    remainingGuesses.textContent = `Guesses remaining: ${guessesLeft}`;

    guessButton.disabled = false;
    guessInput.disabled = false;

    feedback.textContent = "New game started...";
}

//endgame with message
function endGame(message, sound){
    clearInterval(timerInterval); //stops timer

    feedback.textContent = message;
    sound.play();

    guessButton.disabled = true;
    guessButton.disabled = true;

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

    guessesLeft--;

    //if guess is correct
    if( guess === secretNumber){
        endGame(`Correct! The number was ${secretNumber}. Starting new game...`, soundCorrect);
    }else if(guessesLeft === 0){
        endGame(`Game Over. The number was ${secretNumber}. Starting new game...`, soundWrong);
    }else{
        feedback.textContent = guess < secretNumber ? "Too low! Try again" : "Too high! Try again";
        soundWrong.play();
        remainingGuesses.textContent = `Guesses remaining: ${guessesLeft}`;
    }

    userNumber.textContent = `userNumber = ${guess}`;
    randomNumber.textContent = `randomNumber = ${secretNumber}`;
    guessInput.value = "";
});


//starts game
window.addEventListener("DOMContentLoaded", startGame);