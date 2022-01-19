function computerPlay(){
  const options = ['rock','paper','scissors'];
  let random = Math.floor(Math.random() * ((options.length -1) + 1));
  const randomOption = options[random];
  return randomOption
}

function playRound(playerSelection, computerSelection){
  

  switch(true){
   case playerSelection == 'scissors' && computerSelection == 'paper':
   case playerSelection == 'rock' && computerSelection == 'scissors':
   case playerSelection == 'paper' && computerSelection == 'rock':
   console.log('you win');
   break;
   case playerSelection == 'rock' && computerSelection == 'paper':
   case playerSelection == 'scissors' && computerSelection == 'rock':
   case playerSelection == 'paper' && computerSelection == 'scissors':
   console.log('you lose');
   break;
   case playerSelection == computerSelection:
   console.log('draw');
   case playerSelection =='' || computerSelection == '':
   console.log(null);
  }
}




