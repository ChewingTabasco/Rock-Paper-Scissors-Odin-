// create a function
// function creates a random number between 1 and 3
// if/else for each number to return rock, paper, or scissor
// log the return to the console

let randomNumber;

function computerPlay() {
  getRandomNumber();
  if (randomNumber == 0) {
    return "Rock!";
  } else if (randomNumber == 1) {
    return "Paper!";
  } else if (randomNumber == 2) {
    return "Scissors";
  }
}

function getRandomNumber() {
  randomNumber = Math.floor(Math.random() * 3);
}

console.log(computerPlay());
