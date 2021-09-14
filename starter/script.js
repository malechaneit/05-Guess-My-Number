'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let scoreValue = 20;
let highScoreValue = 0;
console.log(secretNumber);

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score')
const body = document.querySelector('body');
const highScore = document.querySelector('.highscore')

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        console.log('No number');
    } else if (guess === secretNumber) {
        message.textContent = 'Corrent answer!';
        number.textContent = secretNumber;
        body.style.backgroundColor = '#60b347';

        if(highScoreValue < scoreValue) {
            highScoreValue = scoreValue;
            highScore.textContent = highScoreValue;
        }
    } else if(guess !== secretNumber) {

        if (scoreValue > 1) {
            message.textContent =  guess < secretNumber ? 'Too low!': 'Too high!';
            scoreValue--;
            score.textContent = scoreValue;
        } else {
            message.textContent = '😡 You lost the game!';
            scoreValue = 0;
            score.textContent = scoreValue;
        }
    }
})

const resetGame = () => {
    scoreValue = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(`New: ${secretNumber}`);

    score.textContent = scoreValue;
    document.querySelector('.guess').value = '';
    message.textContent = 'Start guessing...';
    number.textContent = '?';
    body.style.backgroundColor = '#222';
}

document.querySelector('.again').addEventListener('click', resetGame());