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


