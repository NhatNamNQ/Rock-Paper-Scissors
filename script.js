function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice == 1)
        return "rock";
    if (computerChoice == 2)
        return "paper";
    return "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("rock, paper of scissors?");
    return humanChoice;
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
            else if (computerChoice === "rock")
            {
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



function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore < computerScore) {
        console.log("You lose!");
    } else {
        console.log("You tie!");
    }
}

playGame();