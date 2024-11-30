function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice == 1)
        return "rock";
    if (computerChoice == 2)
        return "paper";
    return "scissors";
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice = "", computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock")
                console.log("You tied!");
            else if (computerChoice === "scissors") {
                console.log("You win! Rock beats Scissors")
                humanScore++;
            }
            else {
                console.log("You lose! Paper beats Rock")
                computerScore++;

            }
            break;
        case "paper":
            if (computerChoice === "paper")
                console.log("You tied!");
            else if (computerChoice === "rock") {
                console.log("You win! Paper beats Rock")
                humanScore++;
            }
            else {
                console.log("You lose! Scissors beats Paper")
                computerScore++;
            }
            break;
        case "scissors":
            if (computerChoice === "scissors")
                console.log("You tied!");
            else if (computerChoice === "rock") {
                console.log("You win! Scissors beats Paper")
                humanScore++;
            }
            else {
                console.log("You lose! Rock beats Scissors")
                computerScore++;
            }
            break;
    }
}

document.getElementById("player-score").textContent = humanScore;
document.getElementById("computer-score").textContent = computerScore;

let buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.id) {
        case "Scissors":
            playRound("Scissors", getComputerChoice());
            break;
        case "Rock":
            playRound("Rock", getComputerChoice());
            break;
        case "Paper":
            playRound("Paper", getComputerChoice());
            break;
    }
    document.getElementById("player-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
    if (humanScore === 5) {
        document.getElementById("result").textContent = "You win!";
        resetGame();
    } else if (computerScore === 5) {
        document.getElementById("result").textContent = "Computer wins!";
        resetGame();
    }
});

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("player-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
}