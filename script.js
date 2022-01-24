// create a function
// function creates a random number between 1 and 3
// if/else for each number to return rock, paper, or scissor
// log the return to the console

let randomNumber;
let playerWin = false;
let computerWin = false;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  getRandomNumber();
  if (randomNumber == 0) {
    return "Rock";
  } else if (randomNumber == 1) {
    return "Paper";
  } else if (randomNumber == 2) {
    return "Scissors";
  }
}

function getRandomNumber() {
  randomNumber = Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toUpperCase() == "ROCK") {
    if (computerSelection == "Paper") {
      incrementScore(computerScore);
      return `You lose. The computer played ${computerSelection}.`;
    } else if (computerSelection == "Scissors") {
      incrementScore(playerScore);
      return `You win! The computer played ${computerSelection}!`;
    } else {
      return `Tie game. You both played ${playerSelection}.`;
    }
  }
  if (playerSelection.toUpperCase() == "PAPER") {
    if (computerSelection == "Scissors") {
      incrementScore(computerScore);
      return `You lose. The computer played ${computerSelection}.`;
    } else if (computerSelection == "Rock") {
      incrementScore(playerScore);
      return `You win! The computer played ${computerSelection}!`;
    } else {
      return `Tie game. You both played ${playerSelection}.`;
    }
  }
  if (playerSelection.toUpperCase() == "SCISSORS") {
    if (computerSelection == "Rock") {
      incrementScore(computerScore);
      return `You lose. The computer played ${computerSelection}.`;
    } else if (computerSelection == "Paper") {
      incrementScore(playerScore);
      return `You win! The computer played ${computerSelection}!`;
    } else {
      return `Tie game. You both played ${playerSelection}.`;
    }
  } else {
    return `That isn't how you play the game...`;
  }
}

function incrementScore(player) {
  player += 1;
}

function game() {
  console.log("You play 5 rounds of Rock Paper Scissors. The results are...");
  for (let i = 1; i < 6; i++) {
    console.log(playRound("Rock", computerPlay()));
  }
}

game();
console.log(`Your Score: ${playerScore}
 Computer Score: ${computerScore}`);

//for each time the player/ computer wins, xScore += 1. run a function that prints the total scores for each. run another function that declares the winner with a string.

// console.log(playRound("Rock", computerPlay()));
