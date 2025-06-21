// console.log("Hello, YuzStack!");

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3); // Randomly returns either 0, 1 or 2

  if (computerChoice === 0) {
    return "Rock";
  } else if (computerChoice === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
// console.log(getComputerChoice());

function getHumanChoice() {
  let humanChoice = prompt("What's your choice; Rock, Paper, or Scissors?");
  return humanChoice;
}
// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();

  if (human === computer) {
    console.log("It's a tie!");
  } else if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    console.log(`You win! ${human} beats ${computer}`);
    humanScore++;
  } else if (
    (human === "rock" && computer === "paper") ||
    (human === "paper" && computer === "scissors") ||
    (human === "scissors" && computer === "rock")
  ) {
    console.log(`You lose! ${computer} beats ${human}`);
    computerScore++;
  } else {
    console.log("Invalid input from human.");
  }
}

/* function playGame() {
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(
      `Score after round ${i}: Human ${humanScore}, Computer ${computerScore}`
    );
  }

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Sorry! The computer won the game.");
  } else {
    console.log("It's a draw overall!");
  }
} */

// playGame();


const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  playRound("Rock", computerSelection);
});
paperButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  playRound("Paper", computerSelection);
});
scissorsButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  playRound("Scissors", computerSelection);
});

const resultsDiv = document.querySelector("#results");

