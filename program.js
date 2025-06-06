// console.log("Hello, YuzStack!");

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
