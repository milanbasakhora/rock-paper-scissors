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

/* Declare the players score variables */
let humanScore = 0;
let computerScore = 0;

/* Write the logic to get the player's choice */
function getPlayerChoice() {
  return prompt("Enter your choice (Rock, Paper, or Scissors):");
}

/* Write the logic to play a single round. */
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice == "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return "You win this round!";
  } else {
    computerScore++;
    return "Computer wins this round!";
  }
}

/* Write the logic to play a 5 round game */
function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getPlayerChoice().toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(`Final Score: You- ${humanScore}, Computer- ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("You Win!");
  } else if (humanScore < computerScore) {
    console.log("You Lose!");
  } else {
    console.log("Draw!");
  }
}

playGame();
