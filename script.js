document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('game').style.display = 'block';
});

const playerScoreElem = document.getElementById('player-score');
const aiScoreElem = document.getElementById('ai-score');
const resultElem = document.getElementById('result');
let playerScore = 0;
let aiScore = 0;

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', function() {
        const playerChoice = this.getAttribute('data-choice');
        playRound(playerChoice);
    });
});

function playRound(playerChoice) {
    const aiChoice = getAIChoice(playerChoice);
    let result;

    if (playerChoice === aiChoice) {
        result = 'It\'s a draw!';
    } else if (
        (playerChoice === 'rock' && aiChoice === 'scissors') ||
        (playerChoice === 'paper' && aiChoice === 'rock') ||
        (playerChoice === 'scissors' && aiChoice === 'paper')
    ) {
        result = 'You win!';
        playerScore++;
    } else {
        result = 'You lose!';
        aiScore++;
    }

    updateScoreboard();
    showResult(result, playerChoice, aiChoice);
}

function getAIChoice(playerChoice) {
    if (playerChoice === 'rock') return 'paper';
    if (playerChoice === 'paper') return 'scissors';
    if (playerChoice === 'scissors') return 'rock';
}

function updateScoreboard() {
    playerScoreElem.textContent = `Player: ${playerScore}`;
    aiScoreElem.textContent = `AI: ${aiScore}`;
}

function showResult(result, playerChoice, aiChoice) {
    resultElem.textContent = `You chose ${playerChoice}, AI chose ${aiChoice}. ${result}`;
}
