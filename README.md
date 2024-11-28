# Rock-Paper-Scissors

## Plan
This game will be played entirely in the console, so we don't need interface.
The input of the program is the user choice.
The desired out put is whether the user can win or tie the computer which randomly returns "rock", "paper", or "scissors"

## Pseudocode
- Create a function named getComputerChoice
    Using method Math.random to get randomly data and save it to variable: computerChoice
    Return computerChoice which has one of the these string: "rock", "paper" or "scissors"
- Create a function name getHumanChoice
    Get the user's input by prompt method and save it to the variable: humanChoice
    Return humanChoice
- Create two new variables named humanScore and computerScore and set equal to 0
- Create a new function playRound which takes humanChoice and computerChoice as parameters
    + convert the humanChoice to lowercase string
    + case humanScore of
    "rock": 
    if computerScore equal "rock" then print "You tied!"
    else if computerScore equal "scissors" then print "You win! Rock beats Scissors"
    else print "You lose! Paper beats Rock"
    "paper":
    if computerScore equal "paper" then print "You tied!"
    else if computerScore equal "rock" then print "You win! Paper beats Rock"
    else print "You lose! Scissors beats Paper"
    "scissors":
    if computerScore equal "scissors" then print "You tied!"
    else if computerScore equal "paper" then print "You win! Scissors beats Paper"
    else print "You lose! Rock beats Scissors"
    ENDCASE
- Create a new function named playGame
    REPEAT function playRound 5 times