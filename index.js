const winMsg = "You win! ";
const loseMsg = "You lose! ";
const drawMsg = "DRAW! ";
let playerScore = 0;
let computerScore = 0;
document.getElementById("playerScore").innerHTML = playerScore;
document.getElementById("computerScore").innerHTML = computerScore;

document.getElementById("rock").addEventListener("click", function(){ resetColors();game('rock'); });
document.getElementById("paper").addEventListener("click", function(){ resetColors();game('paper') });
document.getElementById("scissors").addEventListener("click", function(){ resetColors();game('scissors') });


function resetColors() {
    document.getElementById("rock").style.backgroundColor = "#e7e7e7";
    document.getElementById("paper").style.backgroundColor = "#e7e7e7";
    document.getElementById("scissors").style.backgroundColor = "#e7e7e7";
    document.getElementById("rockComputer").style.backgroundColor = "white";
    document.getElementById("paperComputer").style.backgroundColor = "white";
    document.getElementById("scissorsComputer").style.backgroundColor = "white";
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        // return drawMsg;
        return 0;
    }else{
        if (playerSelection == "rock"){
            if(computerSelection == "paper"){
                // return loseMsg + computerSelection + " beats " + playerSelection;
                return -1;
            }else {
                // return winMsg + playerSelection + " beats " + computerSelection;
                return 1;
            }
        }else if (playerSelection =="paper"){
            if(computerSelection == "rock"){
                // return winMsg + playerSelection + " beats " + computerSelection;
                return 1;
            }else {
                // return loseMsg + computerSelection + " beats " + playerSelection;
                return -1;
            }
        }else {
            if(computerSelection == "rock"){
                // return loseMsg + computerSelection + " beats " + playerSelection;
                return -1;
            }else {
                // return winMsg + playerSelection + " beats " + computerSelection;
                return 1;
            }
        }
    }
}

function game(playerSelection) {
    console.log("GAMEE");
    // playerSelection = prompt("Rock,paper or scissors?");
    computerSelection = getComputerChoice();
    if(playRound(playerSelection,computerSelection) == 1){
        playerScore++;
        document.getElementById("playerScore").innerHTML = playerScore;
        document.getElementById(playerSelection).style.backgroundColor = "#4CAF50";
        document.getElementById(`${computerSelection}Computer`).style.backgroundColor = "#f44336";
    }else if(playRound(playerSelection,computerSelection) == -1){
        computerScore++;
        document.getElementById("computerScore").innerHTML = computerScore;
        document.getElementById(playerSelection).style.backgroundColor = "#f44336";
        document.getElementById(`${computerSelection}Computer`).style.backgroundColor = "#4CAF50";
    }else{
        document.getElementById(playerSelection).style.backgroundColor = "#008CBA";
        document.getElementById(`${computerSelection}Computer`).style.backgroundColor = "#008CBA";
    }
}
