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

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");

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

function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();

  if (human === computer) {
    resultsDiv.textContent = "It's a tie!";
  } else if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    resultsDiv.textContent = `You win! ${human} beats ${computer}`;
    humanScore++;
  } else if (
    (human === "rock" && computer === "paper") ||
    (human === "paper" && computer === "scissors") ||
    (human === "scissors" && computer === "rock")
  ) {
    resultsDiv.textContent = `You lose! ${computer} beats ${human}`;
    computerScore++;
  } else {
    resultsDiv.textContent = "Invalid input from human.";
  }

  playerScoreSpan.textContent = humanScore;
  compuerScoreSpan.textContent = computerScore;

  if (humanScore === 5 || computerScore === 5) {
    const winner =
      humanScore === 5 ? "You won the game!" : "Computer won the game!";
    resultsDiv.textContent += `, ${winner}`;

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}

const playerScoreSpan = document.querySelector("#player-score");
const compuerScoreSpan = document.querySelector("#computer-score");

const resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;

  resultsDiv.textContent = "";

  playerScoreSpan.textContent = humanScore;
  compuerScoreSpan.textContent = computerScore;

  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
});
