import { images } from "../scripts/images.js";

let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
}

updateScore();

document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playGame('Rock');
    });

document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        playGame('Paper');
    });

document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
        playGame('scissors');
    });

document.querySelector('.js-reset-score')
    .addEventListener('click', () => {
        score.losses = 0;
        score.ties = 0;
        score.wins = 0;
        localStorage.removeItem('score');
        updateScore();
    });


document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('Rock');
    } else if (event.key === 'p') {
        playGame('Paper');
    } else if (event.key === 's') {
        playGame('scissors');
    }
});



let computrMove = '';

const pickMove = () => {

    let randomNumberse = Math.random();

    if (randomNumberse >= 0 && randomNumberse < (1 / 3)) {
        computrMove = 'Rock';
    }
    else if (randomNumberse >= (1 / 3) && randomNumberse < (2 / 3)) {
        computrMove = 'Paper';
    }
    else if (randomNumberse >= (2 / 3) && randomNumberse < 1) {
        computrMove = 'scissors';
    }
};


const playGame = playerMove => {

    pickMove();

    let result = '';
    let result2 = '';

    if (playerMove === 'Rock') {

        if (computrMove === 'Rock') {
            result = `Tie.`;
            result2 = `${images[0]}`;
        }
        else if (computrMove === 'Paper') {
            result = `You lose.`;
            result2 = `${images[1]}`;
        }
        else if (computrMove === 'scissors') {
            result = `You Win.`;
            result2 = `${images[2]}`;
        }
    }

    else if (playerMove === 'Paper') {

        if (computrMove === 'Rock') {
            result = `You Win.`;
            result2 = `${images[2]}`;
        } else if (computrMove === 'Paper') {
            result = `Tie.`;
            result2 = `${images[0]}`;

        } else if (computrMove === 'scissors') {
            result = `You lose.`;
            result2 = `${images[1]}`;
        }
    }

    else if (playerMove === 'scissors') {

        if (computrMove === 'Rock') {
            result = `You lose.`;
            result2 = `${images[1]}`;

        } else if (computrMove === 'Paper') {
            result = `You Win.`;
            result2 = `${images[2]}`;

        } else if (computrMove === 'scissors') {
            result = `Tie.`;
            result2 = `${images[0]}`;
        }
    }

    if (result === `You lose.`) {
        score.losses += 1;

    } else if (result === `You Win.`) {
        score.wins += 1;

    } else if (result === `Tie.`) {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-image').innerHTML = result2;

    document.querySelector('.js-move').innerHTML
        = ` You 
                <img class="move-img" src="../images/${playerMove}-emoji.png">
                <img class="move-img" src="../images/${computrMove}-emoji.png">
                Computer `;
};

function updateScore() {
    document.querySelector('.js-score')
        .innerHTML =
        ` wins : ${score.wins} , losses : ${score.losses} , Ties : ${score.ties} `;
};