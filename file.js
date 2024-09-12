const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissors");

let printed = false;

let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
let playerChoice;
let computerChoice;

const container = document.createElement("div");
document.body.appendChild(container);

rockBtn.addEventListener("click", () => {
    playerChoice = 'rock';
    computerChoice = getComputerChoice();
    playGame(playerChoice, computerChoice);
});

paperBtn.addEventListener("click", () => {
    playerChoice = 'paper';
    computerChoice = getComputerChoice();
    playGame(playerChoice, computerChoice);
});

scissorBtn.addEventListener("click", () => {
    playerChoice = 'scissors';
    computerChoice = getComputerChoice();
    playGame(playerChoice, computerChoice);
});

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3); // returns 0, 1, 2
    if (computerChoice == 0) return "rock";
    else if (computerChoice == 1) return "paper";
    else return "scissors";
}

function checkWinner(playerChoice, computerChoice) {
    let result;
    if (computerChoice == 'rock') {
        if (playerChoice == 'rock') result = 0;
        else if (playerChoice == 'paper') result = 1;
        else result = -1;
    }
    else if (computerChoice == 'paper') {
        if (playerChoice == 'rock') result = -1;
        else if (playerChoice == 'paper') result = 0;
        else result = 1;
    }
    else {
        if (playerChoice == 'rock') result = 1;
        else if (playerChoice == 'paper') result = -1;
        else result = 0;
    }
    return result;
}

function playOneRound(playerChoice, computerChoice, answer) {
    const child1 = document.createElement("p");
    container.appendChild(child1);
    child1.innerHTML = `<hr>Round ${roundNumber} :<br>Player Choice = ${playerChoice}<br>Computer Choice = ${computerChoice}`;
    if (answer == 1) {
        const child = document.createElement("p");
        container.appendChild(child);
        child.textContent = `Player Wins!`;
        playerScore++;
    }
    else if (answer == 0) {
        const child = document.createElement("p");
        container.appendChild(child);
        child.textContent = `Tied`;
    }
    else if (answer == -1) {
        const child = document.createElement("p");
        container.appendChild(child);
        child.textContent = `Computer Wins!`;
        computerScore++;
    }
    else {
        const child = document.createElement("p");
        container.appendChild(child);
        child.textContent = `Invalid Input!`;
    }
    const child2 = document.createElement("p");
    container.appendChild(child2);
    child2.innerHTML = `Player Score = ${playerScore}<br>Computer Score = ${computerScore}`;
}

function playGame(playerChoice, computerChoice) {
    if  (!(playerScore == 5 || computerScore == 5)) {
        let answer = checkWinner(playerChoice, computerChoice);
        playOneRound(playerChoice, computerChoice, answer);
        roundNumber++;
    }
    else {
        if (printed != true) {
                if (playerScore > computerScore) {
                const child = document.createElement("p");
                container.appendChild(child);
                child.innerHTML = `<hr>Player Wins : ${playerScore}-${computerScore}`;
                printed = true;
            }
            else {
                const child = document.createElement("p");
                container.appendChild(child);
                child.innerHTML = `<hr>Computer Wins : ${computerScore}-${playerScore}`;
                printed = true;
            }
            const child1 = document.createElement("p");
            container.appendChild(child1);
            child1.innerHTML = `To play again, refresh the page!<br>Thanks!<hr>`;
        }
    }
}