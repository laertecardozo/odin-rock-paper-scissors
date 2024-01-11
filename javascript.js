function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber === 1) {
        return "rock"; 
    } else if(randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    while(playerSelection === computerSelection) {
        playerSelection = prompt("It's a tie!\nRock, Paper or Scissors?").toLowerCase();
        computerSelection = getComputerChoice();
    }
    
    if(playerSelection === "rock" && computerSelection === "scissors") {
        return "You won! Rock beats Scissors";
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        return "You won! Paper beats Rock";
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        return "You won! Scissors beats Paper";
    } else {
        computerSelection = computerSelection.slice(0,1).toUpperCase() + computerSelection.slice(1);
        playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1);
        return "You lost! " + computerSelection + " beats " + playerSelection;
    }
}

const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));