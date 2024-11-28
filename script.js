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
