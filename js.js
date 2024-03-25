// Making a function to get a random number, then transform that number in a choice
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    // Make a switch statement to return the election, 0 for paper, 1 for rock and 2 for scissors.
    switch (choice){
        case 0:
            return "paper";
            break;
        case 1:
            return "rock";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "Error";
    }
}

//This function will compare the result from the computer and the election from the user and decide who will win

function playRound(playerChoice, computerSelection) {
    if (playerChoice === "rock") {
        switch (computerSelection) {
            case "paper":
                console.log("You lost")
                break;
            case "rock":
                console.log("It's a tie")
                break;
            case "scissors":
                console.log("You won!")
                break;
        }
    }
    else if (playerChoice === "paper") {
        switch (computerSelection) {
            case "paper":
                console.log("It's a tie")
                break;
            case "rock":
                console.log("You won!")
                break;
            case "scissors":
                console.log("You lost")
                break;
        }
    }
    else if (playerChoice === "scissors") {
        switch (computerSelection) {
            case "paper":
                console.log("You won!")
                break;
            case "rock":
                console.log("You lost")
                break;
            case "scissors":
                console.log("It's a tie")
                break;
        }
    }
}
