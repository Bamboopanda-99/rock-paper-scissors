function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getComputerChoice() {
  let r = getRandomInt(0, 2);
  if (r === 0) {
    return "Rock";
  } else if (r === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter Rock, Paper, or Scissors:").trim();
  let validChoices = ["rock", "paper", "scissors"];
  while (!validChoices.includes(choice.toLowerCase())) {
    choice = prompt(
      "Invalid input! Please enter Rock, Paper, or Scissors:"
    ).trim();
  }
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(h, c) {
  let player1 = h.toLowerCase();
  let player2 = c.toLowerCase();

  console.log(`Yoy chose: ${player1}`);
  console.log(`Computer chose:${player2}`);
  console.log("-------");

  if (player1 === player2) {
    return "It's a tie!";
  }
  if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper")
  ) {
    humanScore++;
    return "you win this round!";
  } else {
    computerScore++;
    return "Computer wins this round!";
  }
}

for (let i = 1; i < 5; i++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getHumanChoice();
  console.log(playRound(humanSelection, computerSelection));
  console.log(`Score-You:${humanScore}, Computer:${computerScore}`);
}

if (humanScore > computerScore) {
  console.log("You won the game!");
} else if (computerScore > humanScore) {
  console.log("Computer won the game!");
} else {
  console.log("It's a tie overall!");
}
