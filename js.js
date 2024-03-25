// Making a function to get a random number, then transform that number in a choice

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    // Make a switch statement to return the election, 0 for paper, 1 for rock and 2 for scissors.
    switch (choice){
        case 0:
            return "paper";
        case 1:
            return "rock";
        case 2:
            return "scissors";
        default:
            return "Error";
    }
}

//This function will compare the result from the computer and the election from the user and decide who will win

function playRound(playerChoice, computerSelection) {
    if (playerChoice === "rock") {
        switch (computerSelection) {
            case ("paper"):
                return "You lose"
            case ("rock"):
                return "It's a tie"
            case ("scissors"):
                return "You win!"
        }
    }

    else if (playerChoice === "paper") {
        switch (computerSelection) {
            case "paper":
                return "It's a tie"
            case "rock":
                return "You win!"
            case "scissors":
                return "You lose"
        }
    }
    else if (playerChoice === "scissors") {
        switch (computerSelection) {
            case "paper":
                return "You win!"
            case "rock":
                return "You lose"
            case "scissors":
                return "It's a tie"
        }
    }
}

/* This function will throw 5 rounds and will count when we win, if we win 3 times or more there will be a message
congratulating us, if it not the case, there will be a message saying that we didn't win.
 */
function playGame(){
    let playerPoints = 0;
    let computerPoints = 0;
        for (let i = 0; i < 5; i++){
            const playerChoice = prompt("Rock, paper, scissors?").toLowerCase();
            const computerChoice = getComputerChoice();
            const result = playRound(playerChoice,computerChoice);

            if (result.includes("win")){
                playerPoints++
            }
            else if (result.includes("lose")){
                computerPoints++
            }

            console.log(`
                Round ${i + 1}:
                Player choice: ${playerChoice}
                Console choice: ${computerChoice}
                Points of player: ${playerPoints - computerPoints}
                `)
        }
        if (playerPoints > computerPoints){
            console.log("You won the computer :D")
        }
        else if (computerPoints > playerPoints){
            console.log("The computer won you :(")
        }
        else {console.log("It's a draw!")}
}

playGame()
