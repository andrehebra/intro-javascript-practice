//initial score values
let computerScore = 0;
let playerScore = 0;


function computerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    
    let computerChoice = computerChoices[Math.floor(Math.random() * 3)];
    //console.log("The computer chose " + computerChoice);
    return computerChoice;

}

function winOrLose(choice) {

    const computerResult = computerChoice();

    if (choice === 'rock'){
        if (computerResult === 'scissors') {
            return 'win';
        } else if (computerResult === choice) {
            return 'tie';
        } else {
            return 'lose';
        }
    } else if (choice === 'paper') {
        if (computerResult === 'rock') {
            return 'win';
        } else if (computerResult === choice) {
            return 'tie';
        } else {
            return 'lose';
        }
    } else if (choice === 'scissors') {
        if (computerResult === 'paper') {
            return 'win';
        } else if (computerResult === choice) {
            return 'tie';
        } else {
            return 'lose';
        }
    } else {
        return 'error';
    }
}

//update the win/loss counter
//get the score elements
const computerScoreElement = document.getElementById('computerScore');
const playerScoreElement = document.getElementById('playerScore');

//play game with choice and update the score count GUI
function playGame(choice) {
    const result = winOrLose(choice);

    if (result === 'win') {
        playerScore++;
    } else if (result === 'lose') {
        computerScore++;
    } else if (result === 'tie') {

    } else {
        console.log('playGame error');
    }

    computerScoreElement.textContent = computerScore;
    playerScoreElement.textContent = playerScore;
}

//get the three buttons
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

//add event listeners for each and call winOrLose function
rock.addEventListener('click', () => playGame('rock'));
paper.addEventListener('click', () => playGame('paper'));
scissors.addEventListener('click', () => playGame('scissors'));


