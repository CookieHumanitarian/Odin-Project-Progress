const selection = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector("#ROCK");
rock.addEventListener("click", () => {
  computer = getComputerChoice();
  displayScore(simulateGame("ROCK", computer));
});

const paper = document.querySelector("#PAPER");
paper.addEventListener("click", () => {
  computer = getComputerChoice();
  displayScore(simulateGame("PAPER", computer));
});

const scissors = document.querySelector("#SCISSORS");
scissors.addEventListener("click", () => {
  computer = getComputerChoice();
  displayScore(simulateGame("SCISSORS", computer));
});

function getComputerChoice() {
  let computerChoice = selection[Math.floor(Math.random() * selection.length)];
  return computerChoice;
}

function simulateGame(playerSelection, computerSelection) {
  if (playerSelection === "ROCK") {
    if (computerSelection === "ROCK") {
      return "draw";
    } else if (computerSelection === "PAPER") {
      computerScore += 1;
      return "lose";
    } else {
      playerScore += 1;
      return "win";
    }
  } else if (playerSelection === "PAPER") {
    if (computerSelection === "ROCK") {
      playerScore += 1;
      return "win";
    } else if (computerSelection === "PAPER") {
      return "draw";
    } else {
      computerScore += 1;
      return "lose";
    }
  } else if (playerSelection === "SCISSORS") {
    if (computerSelection === "ROCK") {
      computerScore += 1;
      return "lose";
    } else if (computerSelection === "Paper") {
      playerScore += 1;
      return "wins";
    } else {
      return "draw";
    }
  }
}

function displayScore(result) {
  const content = document.querySelector("#score");
  const results = document.querySelector("#result");
  let outcome = result.toUpperCase();
  content.textContent = `You: ${playerScore} vs Computer: ${computerScore}`;
  results.textContent = `Result: ${outcome}`;

  if (playerScore == 5) {
    content.textContent = `YOU WIN`;
    results.textContent = "";
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore == 5) {
    content.textContent = "YOU LOSE";
    playerScore = 0;
    computerScore = 0;
    results.textContent = "";
  }
}
