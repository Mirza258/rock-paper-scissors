function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * 3)];
    console.log(choice);
    return choice;
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const winMsg = "You win! ";
    const loseMsg = "You lose! ";
    const drawMsg = "DRAW! ";
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

function game() {
    let playerSelection = "";
    let computerSelection = "";
    let playerScore = 0;
    let computerScore = 0;
    for(let index = 0; index < 5; index++){
        playerSelection = prompt("Rock,paper or scissors?");
        computerSelection = getComputerChoice();
        if(playRound(playerSelection,computerSelection) == 1){
            playerScore++;
        }else if(playRound(playerSelection,computerSelection) == -1){
            computerScore++;
        }
    }
    let endMsg = "Player   " + playerScore.toString() + ":" + computerScore.toString() + "    Computer";
    alert(endMsg);
}

game();