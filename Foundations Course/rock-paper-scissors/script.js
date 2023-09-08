const selection = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
  let computerChoice = selection[Math.floor(Math.random() * selection.length)];
  console.log(computerChoice);
}

getComputerChoice();
