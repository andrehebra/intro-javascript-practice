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

//get the three buttons
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

//add event listeners for each
rock.addEventListener('click', () => winOrLose('rock'));
paper.addEventListener('click', () => winOrLose('paper'));
scissors.addEventListener('click', () => winOrLose('scissors'));


//play game when clicked


//update the win/loss counter