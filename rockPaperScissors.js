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
        roundResult('win');
    } else if (result === 'lose') {
        computerScore++;
        roundResult('lose');
    } else if (result === 'tie') {
        roundResult('tie');
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


//updating the bottom text for each game
//get the round result text element
const roundResultElement = document.getElementById('play-results');

function roundResult(result) {

    if (result === 'win') {
        roundResultElement.textContent = 'You Won! Congratulations!';
    } else if (result === 'lose') {
        roundResultElement.textContent = 'You Lost! Sorry to hear that.';
    } else if (result === 'tie') {
        roundResultElement.textContent = 'It was a tie, but at least you did not lose!';
    }
}