let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
}

updateScore();

/*function autoPlay() {
    setInterval(function () {
        let playerMove = pickMove();
        playGame(playerMove);
    }, 1000);
}*/




document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playGame('Rock');
    }
    )


document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        playGame('Paper');
    }
    )


document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
        playGame('scissors');
    }
    )

document.querySelector('.js-reset-score')
    .addEventListener('click', () => {
        score.losses = 0;
        score.ties = 0;
        score.wins = 0;
        localStorage.removeItem('score');
        updateScore();
    })


document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('Rock');
    } else if (event.key === 'p') {
        playGame('Paper');
    } else if (event.key === 's') {
        playGame('scissors');
    }
})


let computrMove = '';

function pickMove() {

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
}


function playGame(playerMove) {

    pickMove();

    let result = '';

    if (playerMove === 'Rock') {

        if (computrMove === 'Rock') {
            result = 'Tie.';
        }
        else if (computrMove === 'Paper') {
            result = 'You lose.';
        }
        else if (computrMove === 'scissors') {
            result = 'You win.';
        }
    }

    else if (playerMove === 'Paper') {

        if (computrMove === 'Rock') {
            result = 'You win.';

        } else if (computrMove === 'Paper') {
            result = 'Tie.';

        } else if (computrMove === 'scissors') {
            result = 'You lose.';
        }
    }

    else if (playerMove === 'scissors') {

        if (computrMove === 'Rock') {
            result = 'You lose.';

        } else if (computrMove === 'Paper') {
            result = 'You win.';

        } else if (computrMove === 'scissors') {
            result = 'Tie.';
        }
    }

    if (result === 'You lose.') {
        score.losses += 1;

    } else if (result === 'You win.') {
        score.wins += 1;

    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-move').innerHTML
        = ` You 
                <img class="move-img" src="../images/${playerMove}-emoji.png">
                <img class="move-img" src="../images/${computrMove}-emoji.png">
                Computer `;
}

function updateScore() {
    document.querySelector('.js-score')
        .innerHTML =
        ` wins : ${score.wins} , losses : ${score.losses} , Ties : ${score.ties} `;
}