const selection = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector("#ROCK");
rock.addEventListener("click", () => {
  computer = getComputerChoice();
  result = simulateGame("ROCK", computer);
});

const paper = document.querySelector("#PAPER");
paper.addEventListener("click", () => {
  computer = getComputerChoice();
  result = simulateGame("PAPER", computer);
  alert(result);
});

const scissors = document.querySelector("#SCISSORS");
scissors.addEventListener("click", () => {
  computer = getComputerChoice();
  result = simulateGame("SCISSORS", computer);
  alert(result);
});

function getComputerChoice() {
  let computerChoice = selection[Math.floor(Math.random() * selection.length)];
  return computerChoice;
}

function simulateGame(playerSelection, computerSelection) {
  if (playerSelection === "ROCK") {
    if (computerSelection === "ROCK") {
      return "Draw!";
    } else if (computerSelection === "PAPER") {
      computerScore += 1;
      return "Computer wins!";
    } else {
      playerScore += 1;
      return "You win!";
    }
  } else if (playerSelection === "PAPER") {
    if (computerSelection === "ROCK") {
      playerScore += 1;
      return "You win!!";
    } else if (computerSelection === "PAPER") {
      return "Draw!";
    } else {
      computerScore += 1;
      return "Computer wins!";
    }
  } else if (playerSelection === "SCISSORS") {
    if (computerSelection === "ROCK") {
      computerScore += 1;
      return "Computer wins!";
    } else if (computerSelection === "Paper") {
      playerScore += 1;
      return "Player wins!";
    } else {
      return "Draw!";
    }
  } else {
    return "Invalid Input";
  }
}
