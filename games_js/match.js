const placeholder = 'placeholder.png';

const images = [
    'img1.png',
    'img2.png',
    'img3.png',
    'img4.png',
    'img5.png',
    'img6.png',
    'img7.png',
    'img8.png'
];

let board = [];
let firstPick = null;
let secondPick = null;
let locked = false;
let timeLeft = 120;
let timerInterval = null;

const msg = document.getElementById('msg');
const timer = document.getElementById('timer');

//fisher-yates shuffle to randomize order
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//starts game
function startGame() {

    //duplicate and shuffle images
    const imagePairs = [...images, ...images];
    shuffle(imagePairs);
    board = [];

    //reset timer and msg on startup
    msg.textContent = '';
    timeLeft = 120;
    timer.textContent = `Time: ${timeLeft}`; 

    //clear existing
    if (timerInterval) clearInterval(timerInterval);

    for (let i = 0; i < 16; i++) {
        const imgElement = document.getElementById(`img${i}`);
        imgElement.src = imagePairs[i]; //show original img
        imgElement.onclick = () => handleClick(i); //img click  handler

        //metadata image
        board[i] = {
            imgElement: imgElement,
            imagePath: imagePairs[i],
            revealed: false
        };
    }

    //lock input
    locked = true;

    //after 3 second, hide all images with placeholder
    setTimeout(() => {
        for (let i = 0; i < 16; i++) {
            if (!board[i].revealed) {
                board[i].imgElement.src = placeholder;
          }
        }
        locked = false;
    }, 3000);

    //starts countdown
    timerInterval = setInterval(() => {
        timeLeft--;
        timer.textContent = `Time: ${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            locked = true;
            msg.style.color = "#ff6666" //light red
            msg.textContent = 'Time is up!';
        }
    }, 1000);
}

function handleClick(index) {
    if (locked || board[index].revealed) return;

    //reveal selected card
    board[index].imgElement.src = board[index].imagePath;

    //first pick
    if (firstPick === null) {
        firstPick = index;
        return;
    }

    if (firstPick === index) return; //no action if card selected

    //second selection and lock board
    secondPick = index;
    locked = true;

    //check if two selected cards match
    if (board[firstPick].imagePath === board[secondPick].imagePath) { //reveal cards
        board[firstPick].revealed = true;
        board[secondPick].revealed = true;
        resetPicks();
        checkWin();
    } else {
        //hide card again after 1 second if no match
        setTimeout(() => {
            board[firstPick].imgElement.src = placeholder;
            board[secondPick].imgElement.src = placeholder;
            resetPicks();
        }, 1000);
    }
}

//reset for next turn
function resetPicks() {
    firstPick = null;
    secondPick = null;
    locked = false;
}

//checks if all cards are revealed
function checkWin() {
    if (board.every(card => card.revealed)) {
        clearInterval(timerInterval);
        msg.style.color = "#90EE90" //light green
        msg.textContent = 'You Win!';
        locked = true;
    }
}