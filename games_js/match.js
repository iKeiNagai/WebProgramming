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


    for (let i = 0; i < 16; i++) {
        const imgElement = document.getElementById(`img${i}`);
        imgElement.src = placeholder; //hide image
        imgElement.onclick = () => handleClick(i); //img click  handler

        //metadata image
        board[i] = {
            imgElement: imgElement,
            imagePath: imagePairs[i],
            revealed: false
        };
    }
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