const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const winnerEachRound = document.querySelector('.textAlign :nth-child(1)');
const buttonContainer = document.querySelector('.textAlign :nth-child(2)');
const button = document.querySelector('button')
const textPlayerScore = document.querySelector('#playerScore');
const textComputerScore = document.querySelector('#computerScore')
const showRock = document.querySelector('.showRock');
const showPaper = document.querySelector('.showPaper');
const showScissors = document.querySelector('.showScissors');
const showRock1 = document.querySelector('.showRock1');
const showPaper1 = document.querySelector('.showPaper1');
const showScissors1 = document.querySelector('.showScissors1');
const border = document.querySelector('.border');
const border1 = document.querySelector('.border1');

const endOfGame = document.querySelector('.endOfGame');
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
  const options = ['rock','paper','scissors'];
  let random = Math.floor(Math.random() * ((options.length-1 )+1));
  let randomOption = options[random];
  return randomOption
}

function playRound(playerSelection){
  let computerSelection = computerPlay();
  if(playerSelection == 'scissors' && computerSelection == 'paper'){
    win()
  }
  else if(playerSelection == 'rock' && computerSelection == 'scissors'){
    win()
  }
  else if( playerSelection == 'paper' && computerSelection == 'rock'){
    win()
  }
  else if(playerSelection == 'rock' && computerSelection == 'paper'){
    lose();
  }
  else if(playerSelection == 'scissors' && computerSelection == 'rock'){
  lose();
  }
  else if(playerSelection == 'paper' && computerSelection == 'scissors'){
    lose();
  }
  else if(playerSelection == computerSelection){
    winnerEachRound.textContent = 'Draw!'
  }

  if(computerSelection == 'paper'){
    showPaper1.classList.remove('hidden');
    showRock1.classList.add('hidden')
    showScissors1.classList.add('hidden')
  }
  if(computerSelection == 'rock'){
    showRock1.classList.remove('hidden')
  showPaper1.classList.add('hidden')
  showScissors1.classList.add('hidden')
  }
  if(computerSelection == 'scissors'){
    showRock1.classList.add('hidden')
  showPaper1.classList.add('hidden')
  showScissors1.classList.remove('hidden')
  }

 
  showEndGameResult();
}

function win(){
  winnerEachRound.textContent = 'You win';
  playerScore++;
  textPlayerScore.textContent = playerScore;
  border.classList.add('highLightGreen');
  setTimeout(() => {
   border.classList.remove('highLightGreen')
 }, 1000)
 border1.classList.add('highLightRed');
 setTimeout(() => {
  border1.classList.remove('highLightRed')
}, 1000)

 
}
function lose(){
  winnerEachRound.textContent = 'You lose';
   computerScore++;
   textComputerScore.textContent = computerScore;
   border.classList.add('highLightRed');
   setTimeout(() => {
     border.classList.remove('highLightRed')
   }, 1000)
   border1.classList.add('highLightGreen');
   setTimeout(() => {
    border1.classList.remove('highLightGreen')
  }, 1000)
  
}

function showEndGameResult(){
  if(playerScore == 5){
    endOfGame.textContent = 'You have CONQUERED the MACHINE'
    removeListeners();

  }else if(computerScore == 5){
    endOfGame.textContent = 'THE MACHINE IS JUST RELENTLESS'
    removeListeners();

  }
}

function rockListenerEvent(){
  playRound('rock');
  showRock.classList.remove('hidden')
  showPaper.classList.add('hidden')
  showScissors.classList.add('hidden')

}
function scissorsListenerEvent(){
  playRound('scissors');
  showScissors.classList.remove('hidden')
  showRock.classList.add('hidden')
  showPaper.classList.add('hidden')
}
function paperListenerEvent(){
  playRound('paper');
  showPaper.classList.remove('hidden');
  showRock.classList.add('hidden')
  showScissors.classList.add('hidden')
}


rock.addEventListener('click',rockListenerEvent);
scissors.addEventListener('click',scissorsListenerEvent);
paper.addEventListener('click',paperListenerEvent);

function removeListeners(){
  rock.removeEventListener('click',rockListenerEvent);
  scissors.removeEventListener('click',scissorsListenerEvent);
  paper.removeEventListener('click',paperListenerEvent);
  
  winnerEachRound.classList.add('hidden');
  buttonContainer.classList.remove('hidden');
  responsiveButton();
  
}

function responsiveButton(){
button.addEventListener('click',()=>{
  playerScore = 0;
  computerScore = 0;
  textPlayerScore.textContent = playerScore;
  textComputerScore.textContent = computerScore;

  endOfGame.textContent = '';
  rock.addEventListener('click',rockListenerEvent);
  scissors.addEventListener('click',scissorsListenerEvent);
  paper.addEventListener('click',paperListenerEvent);
  winnerEachRound.textContent = 'Lets Play!';
 
  winnerEachRound.classList.remove('hidden');
  buttonContainer.classList.add('hidden');
  showPaper.classList.add('hidden');
  showRock.classList.add('hidden')
  showScissors.classList.add('hidden')
  showPaper1.classList.add('hidden');
  showRock1.classList.add('hidden')
  showScissors1.classList.add('hidden')
  })}