'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "hello babes";

const number = Math.trunc((Math.random() * 100) + 1);
let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = "Start guessing...";

    document.querySelector('body').style.backgroundColor = 'grey';


});
document.querySelector('.check').addEventListener('click', function() {
    const value = Number(document.querySelector('.guess').value);
    // console.log(typeof value);

    if (!value) {
        document.querySelector('.message').textContent = "NO try again!!!";
    } else if (value == number) {
        document.querySelector('.message').textContent = "Hurray Correct guess!!!";
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = number;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }



    } else if (value > number) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Value is greater";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "U LOOSE THE GAME !!!";

        }


    } else if (value < number) {

        if (score > 1) {
            document.querySelector('.message').textContent = "Value is smaller";
            score--;
            document.querySelector('.score').textContent = score;

        } else {
            document.querySelector('.message').textContent = "U LOOSE THE GAME !!!";

        }

    }

})