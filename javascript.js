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

function game() {
    let playerSelection, computerSelection, roundMessage;
    let score = 0, scoreComputer = 0;

    while((score != 5) && (scoreComputer != 5)) {
        playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        computerSelection = getComputerChoice();
        roundMessage = playRound(playerSelection, computerSelection);

        if(roundMessage.includes("won")) {
            score++;
        } else {
            scoreComputer++;
        }

        console.log(`${roundMessage}\nYou ${score} x ${scoreComputer} Computer`);
    }

    if(score > scoreComputer) {
        console.log("YOU WON!");
    } else {
        console.log("COMPUTER WON!");
    }
}

game();