function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3); // returns 0, 1, 2
    if (computerChoice == 0) return "Rock";
    else if (computerChoice == 1) return "Paper";
    else return "Scissors";
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose rock , paper or scissors");
    return playerChoice;
}

function checkWinner() {
    let computerChoice = getComputerChoice().toLowerCase();
    let playerChoice = getPlayerChoice().toLowerCase();
    let result;
    if (playerChoice == 'scissor') playerChoice = 'scissors';
    if (computerChoice == 'rock') {
        if (playerChoice == 'rock') result = 0;
        else if (playerChoice == 'paper') result = 1;
        else if (playerChoice == 'scissors') result = -1;
        else result = 'wrong';
    }
    else if (computerChoice == 'paper') {
        if (playerChoice == 'rock') result = -1;
        else if (playerChoice == 'paper') result = 0;
        else if (playerChoice == 'scissors') result = 1;
        else result = 'wrong';
    }
    else {
        if (playerChoice == 'rock') result = 1;
        else if (playerChoice == 'paper') result = -1;
        else if (playerChoice == 'scissors') result = 0;
        else result = 'wrong';
    }
    return [computerChoice, playerChoice, result];
}

function playOneRound(roundNumber, playerScore, computerScore) {
    let answer = checkWinner();
    console.log(`Round ${roundNumber} : `);
    console.log(`Player Choice = ${answer[1]}`);
    console.log(`Computer Choice = ${answer[0]}`);
    if (answer[2] == 1) {
        console.log(`Player Wins!`);
        playerScore++;
    }
    else if (answer[2] == 0) {
        console.log(`Tied`)
    }
    else if (answer[2] == -1) {
        console.log(`Computer Wins!`);
        computerScore++;
    }
    else {
        console.log(`Invalid Input!`);
    }
    console.log(`Player Score = ${playerScore}`);
    console.log(`Computer Score = ${computerScore}`)
    console.log(` `);
    return [playerScore, computerScore];
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let roundNumber = 1;
    while (!(playerScore == 5 || computerScore == 5)) {
        let score = playOneRound(roundNumber, playerScore, computerScore);
        playerScore = score[0];
        computerScore = score[1];
        roundNumber++;
    }
    if (playerScore > computerScore) {
        console.log(`Player Wins : ${playerScore}-${computerScore}`);
    }
    else {
        console.log(`Computer Wins : ${computerScore}-${playerScore}`);
    }
    console.log(` `)
    console.log(`To play again, refresh the page!`);
    console.log(`Thanks!`)
}

playGame();