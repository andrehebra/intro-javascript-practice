function computerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    
    let computerChoice = computerChoices[Math.floor(Math.random() * 3)];
    console.log("The computer chose " + computerChoice);
    return computerChoice;

}

function winOrLose(choice) {

    const computerResult = computerChoice();

    if (choice === 'rock'){
        if (computerResult === 'scissors') {
            return "You win!";
        } else if (computerResult === choice) {
            return "It's a Tie!";
        } else {
            return "You lose!";
        }
    } else if (choice === 'paper') {
        if (computerResult === 'rock') {
            return "You win!";
        } else if (computerResult === choice) {
            return "It's a Tie!";
        } else {
            return "You lose!";
        }
    } else if (choice === 'scissors') {
        if (computerResult === 'paper') {
            return "You win!";
        } else if (computerResult === choice) {
            return "It's a Tie!";
        } else {
            return "You lose!";
        }
    } else {
        console.log("something really went wrong here! Try and fix it!");
    }
}

function play(playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    //console.log(playerChoice);

    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        console.log(winOrLose(playerChoice));
        game();
    } else {
        console.log("please enter either rock, paper, or scissors");
        game();
    }
}

//get the three buttons


//add event listeners for each


//play game when clicked


//update the win/loss counter