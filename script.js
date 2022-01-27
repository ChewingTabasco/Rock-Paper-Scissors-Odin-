// create a function
// function creates a random number between 1 and 3
// if/else for each number to return rock, paper, or scissor
// log the return to the console

let randomNumber;
// let playerWin = false;
// let computerWin = false;
let playerScore = 0;
let computerScore = 0;
let playerSelection = prompt("Rock, Paper, or Scissors?");

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
      incrementScoreComputer();
      return `You lose. The computer played ${computerSelection}.`;
    } else if (computerSelection == "Scissors") {
      incrementScorePlayer();
      return `You win! The computer played ${computerSelection}!`;
    } else {
      return `Tie game. You both played ${playerSelection}.`;
    }
  }
  if (playerSelection.toUpperCase() == "PAPER") {
    if (computerSelection == "Scissors") {
      incrementScoreComputer();
      return `You lose. The computer played ${computerSelection}.`;
    } else if (computerSelection == "Rock") {
      incrementScorePlayer();
      return `You win! The computer played ${computerSelection}!`;
    } else {
      return `Tie game. You both played ${playerSelection}.`;
    }
  }
  if (playerSelection.toUpperCase() == "SCISSORS") {
    if (computerSelection == "Rock") {
      incrementScoreComputer();
      return `You lose. The computer played ${computerSelection}.`;
    } else if (computerSelection == "Paper") {
      incrementScorePlayer();
      return `You win! The computer played ${computerSelection}!`;
    } else {
      return `Tie game. You both played ${playerSelection}.`;
    }
  } else {
    return `That isn't how you play the game...`;
  }
}

function incrementScoreComputer() {
  computerScore += 1;
}

function incrementScorePlayer() {
  playerScore += 1;
}

function renderFinalMessage() {
  console.log(`Your Score: ${playerScore}
Computer Score: ${computerScore}`);
  if (playerScore > computerScore) {
    console.log("Congratulations! You won overall!");
  } else if (playerScore == computerScore) {
    console.log("You and the Computer tied overall.");
  } else {
    console.log("Sorry, the computer won overall...");
  }
}

function game() {
  console.log("You play 5 rounds of Rock Paper Scissors. The results are...");
  for (let i = 1; i < 6; i++) {
    console.log(playRound(playerSelection, computerPlay()));
  }
}

game();
renderFinalMessage();

//for each time the player/ computer wins, xScore += 1. run a function that prints the total scores for each. run another function that declares the winner with a string.

// console.log(playRound("Rock", computerPlay()));
