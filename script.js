/* Write the logic to get the computer's choice */

function getComputerChoice() {
  const randomNumber = Math.random() * 10;
  if (randomNumber < 10 / 3) {
    return "rock";
  } else if (randomNumber < 20 / 3 && randomNumber >= 10 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

/* Write the logic to get the player's choice */

function getPlayerChoice() {
    return prompt("Enter your choice (Rock, Paper, or Scissors):");
}

/* Declare the players score variables */

let humanScore = 0;
let computerScore = 0;

/* Write the logic to play a single round. */
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice){
    console.log("It's a draw!");
  }else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice == "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ){
    humanScore++;
    console.log("You win!");
  }else{
    computerScore++;
    console.log("You lose!");
  }
}

const humanSelection = getPlayerChoice().toLowerCase();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

/* Write the logic to play a 5 round game */

