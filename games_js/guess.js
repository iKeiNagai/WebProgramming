const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const feedback = document.getElementById("msg");

//test variables
const userNumber = document.getElementById("testNumber");
const randomNumber = document.getElementById("testRand");

let secretNumber;

function startGame(){
    secretNumber = Math.floor(Math.random() * 100) + 1;
}

function endGame(message){
    feedback.textContent = message;
}

guessButton.addEventListener("click", function(){
    const guess = parseInt(guessInput.value.trim());

    if(isNaN(guess) || guess < 1 || guess > 100){
        feedback.textContent = "Enter number between 1 and 100.";
        return;
    }

    if( guess === secretNumber){
        endGame(`Correct! The number was ${secretNumber}`);
    }else{
        feedback.textContent = guess < secretNumber ? "Too low! Try again" : "Too high! Try again";
    }


    userNumber.textContent = `userNumber = ${guess}`;
    randomNumber.textContent = `randomNumber = ${secretNumber}`;
});



window.addEventListener("DOMContentLoaded", startGame);