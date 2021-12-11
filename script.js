'use strict';
let sercurityNumber = Math.trunc(Math.random()*20)+1;

const number = document.querySelector('.number')

const check = document.querySelector('.check');
const message = document.querySelector('.message');
const again = document.querySelector('.again');

check.addEventListener('click',()=>{
    const guess = Number(document.querySelector('.guess').value);
    let score = Number(document.querySelector('.score').textContent);
    let highScore = Number(document.querySelector('.highscore').textContent);
    console.log(score)
    if(score === 1){
        message.textContent = "Haha You Lost ";
        document.querySelector('.score').value = 0;
        document.querySelector('body').style.backgroundColor = 'red'
        return;
    }

    if(guess === 0 ){
        message.textContent = 'No Number!';
        return;
    }

    if(guess > sercurityNumber){
        message.textContent = 'Too high';
        score -= 1;
        document.querySelector('.score').textContent = String(score);
        return
    }
    if(guess < sercurityNumber){
        message.textContent = 'Too low';
        score -= 1
        document.querySelector('.score').textContent = String(score);
        return
    }
    if( guess ===  sercurityNumber){
        message.textContent = "Afarin zahmat keshidi"
        document.querySelector('body').style.backgroundColor = 'green'
        if(score > highScore){
            document.querySelector('.highscore').textContent = String(score);
        }

        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = sercurityNumber;
    }
});

again.addEventListener('click',()=>{
    sercurityNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent = String(20);
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem'


})