function game() {
  const selection = ["ROCK", "PAPER", "SCISSORS"];
  let playerScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    let computerChoice =
      selection[Math.floor(Math.random() * selection.length)];
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
  for (let i = 0; i < 5; i++) {
    userInput = prompt("Rock, Paper, or Scissors?");
    userInput = userInput.toUpperCase();
    computerInput = getComputerChoice();

    result = simulateGame(userInput, computerInput);
    console.log(result);
    console.log(
      `Your score: ${playerScore} vs Computer\'s score: ${computerScore}`
    );
  }
  console.log("END");
}

game();
