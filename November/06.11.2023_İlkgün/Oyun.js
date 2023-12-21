function startGame() {
    const playerChoice = prompt("Enter: rock, paper, or scissors");
    const computerChoice = computerSelection();
    alert("Computer's choice: " + computerChoice);
    const result = determineWinner(playerChoice, computerChoice);
    alert(result);
}

function computerSelection() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

// To start the game, call the startGame function
startGame();