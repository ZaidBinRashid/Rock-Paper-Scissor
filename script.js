// This function gets random chioce from computer between rock paper and scissor.
function getComputerChoice(random) {
 if  (random >= 0 && random <= 0.3) {
  return "Rock";
 } else if  (random >= 0.3 && random <= 0.7) {
  return "Paper";
 } else if  (random >= 0.7 && random <= 1) {
  return "Scissor";
 }
}


// This function plays a single round of rock paper scissor.
function playRound(playerSelection, computerSelection) {

 if (computerSelection === 'Rock' && playerSelection === 'scissor') {
  return 'You lose! Rock beats Scissor';
 } 
 else if (computerSelection === 'Rock' && playerSelection === 'paper') {
  return 'You won! Paper beats Rock';
 } 
 else if (computerSelection === 'Rock' && playerSelection === 'rock') {
  return 'Tie!';
 } 
 else if (computerSelection === 'Paper' && playerSelection === 'rock') {
  return 'You lose! Paper beats Rock';
 } 
 else if (computerSelection === 'Paper' && playerSelection === 'scissor') {
  return 'You won! Scissor beats Paper';
 } 
 else if (computerSelection === 'Paper' && playerSelection === 'paper') {
  return 'Tie!';
 } 
 else if (computerSelection === 'Scissor' && playerSelection === 'paper') {
  return 'You lose! Scissor beats Paper';
 } 
 else if (computerSelection === 'Scissor' && playerSelection === 'rock') {
  return 'You won! Rock beats Scissor';
 } 
 else if (computerSelection === 'Scissor' && playerSelection === 'scissor') {
  return 'Tie!';
 }
 
 
 
}
//  const playerSelection = 'Scissor';
//  const computerSelection = getComputerChoice(Math.random());
//  console.log(playRound(playerSelection,computerSelection));


 function game() {
  
  for(let i = 1; i <= 5; i++) {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice(Math.random());
    console.log(playRound(playerSelection,computerSelection));
  }
 }

 game();