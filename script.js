let playerScore = 0;
let compScore = 0;

// This function will generate rock,paper or scissor randomly:
function getComputerChoice() {
  const randomNumber = Math.random();

  if(randomNumber >= 0 && randomNumber <= 0.3){
    return 'rock'
  } else if(randomNumber >= 0.3 && randomNumber <= 0.7){
    return 'paper'
  } else if(randomNumber >= 0.7 && randomNumber <= 1){
    return 'scissor'
  }
}

// This function will play a single round and return the winner or the loser of the round:
function playRound(playerSelection, computerSelection) {

  if(playerSelection === 'rock' && computerSelection === 'scissor'){
    playerScore++;
    return 'You won!';
  } else if(playerSelection === 'rock' && computerSelection === 'paper'){
    compScore++;
    return 'You lose!';
  } else if(playerSelection === 'rock' && computerSelection === 'rock'){
    return 'Tie!'
  }

  else if(playerSelection === 'paper' && computerSelection === 'rock'){
    playerScore++;
    return 'You won!';
  } else if(playerSelection === 'paper' && computerSelection === 'scissor'){
    compScore++;
    return 'You lose';
  } else if(playerSelection === 'paper' && computerSelection === 'paper'){
    return 'Tie!';
  }

  else if(playerSelection === 'scissor' && computerSelection === 'paper'){
    playerScore++;
    return 'You won!';
  } else if(playerSelection === 'scissor' && computerSelection === 'rock'){
    compScore++;
    return 'You lose!';
  } else if(playerSelection === 'scissor' && computerSelection === 'scissor'){
    return 'Tie!';
  }


}

// This function will play a five round game and keeps the score:
function game(){

  for(i = 0; i < 5; i++){
  const playerSelection = prompt('Rock, Paper or Scissor').toLowerCase();
    console.log(`Playermove: ${playerSelection}`)
  const computerSelection = getComputerChoice();
    console.log(`Computeromove: ${computerSelection}`)
  console.log(playRound(playerSelection, computerSelection));
  console.log('-------------------');
  };
   
  if (playerScore > compScore){
    return 'You beat the Computer';
  } else if (playerScore < compScore){
    return 'You got beat by Computer';
  } else {
    return 'You tied with Computer';
  }
}
console.log(game());



