const playerText = document.querySelector('.playerText');
const computerText = document.querySelector('.computerText');
const resultText = document.querySelector('.resultText');

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const choices = ['rock', 'paper', 'scissors'];

let computerChance = computerPlay();
console.log(computerChance);
rock.addEventListener("click",()=>{
    playerText.innerHTML = "Player : Rock";
    computerText.innerHTML = "Computer : " +  computerChance[0].toLocaleUpperCase() + computerChance.slice(1);
    if(computerChance == 'rock'){
        resultText.innerHTML = "Result  : Draw!";
    }
    else if(computerChance == 'paper'){
        resultText.innerHTML = "Result : You Lose";
    }
    else{
        resultText.innerHTML = "Result : You Win";
    }
})
paper.addEventListener("click",()=>{
    playerText.innerHTML = "Player : Paper";
    computerText.innerHTML ="Computer : "+ computerChance[0].toLocaleUpperCase() + computerChance.slice(1);
    if(computerChance == 'paper'){
        resultText.innerHTML = "Result  : Draw!";
    }
    else if(computerChance == 'scissors'){
        resultText.innerHTML = "Result : You Lose";
    }
    else{
        resultText.innerHTML = "Result : You Win";
    }
})
scissors.addEventListener("click",()=>{
    playerText.innerHTML = "Player : Scissor";
    computerText.innerHTML = "Computer : " +  computerChance[0].toLocaleUpperCase() + computerChance.slice(1);
    if(computerChance == 'scissors'){
        resultText.innerHTML = "Result  : Draw!";
    }
    else if(computerChance == 'rock'){
        resultText.innerHTML = "Result : You Lose";
    }
    else{
        resultText.innerHTML = "Result : You Win";
    }
})



function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    return choices[random];
}