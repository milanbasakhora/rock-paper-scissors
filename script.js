function getRandomChoice(randomNumber = Math.random() * 10) {
  if (randomNumber < 10 / 3) {
    return "rock";
  } else if (randomNumber < 20 / 3 && randomNumber >= 10 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getPlayerChoice() {
    return prompt("Enter your choice (Rock, Paper, or Scissors):");
}

const computerChoice = getRandomChoice();

const playerChoice = getPlayerChoice();

console.log("You:", playerChoice, " | ", "Computer:", computerChoice);

if (playerChoice.length == computerChoice.length) {
    console.log("It's a tie!");
}else if(playerChoice == "rock" && computerChoice == "scissors") {
    console.log("You win!");
}else if(playerChoice == "paper" && computerChoice == "rock") {
    console.log("You win!");
}else if(playerChoice == "scissors" && computerChoice == "paper") {
    console.log("You win!");
}else {
    console.log("Computer wins!");
}