let team1Points = 0;
let team2Points = 0;
let currentSet = 1;
let setButton = document.getElementById('setButton');
let team1Name = document.getElementById('team1Name');
let team2Name = document.getElementById('team2Name');
let team1Score = document.getElementById('team1Score');
let team2Score = document.getElementById('team2Score');
let historyList = document.getElementById('historyList');
let errorMessage = document.getElementById('errorMessage');

let team1 = document.getElementById('team1');
let team2 = document.getElementById('team2');

function incrementPoints(team) {
    if (team === 1) {
        team1Points++;
        team1Score.innerHTML = team1Points;
    } else {
        team2Points++;
        team2Score.innerHTML = team2Points;
    }
    logHistory(team);
}

function decrementPoints(team) {
    if (team === 1 && team1Points > 0) {
        team1Points--;
        team1Score.innerHTML = team1Points;
    } else if (team === 2 && team2Points > 0) {
        team2Points--;
        team2Score.innerHTML = team2Points;
    }
    logHistory(team);
}

function logHistory(team) {
    let date = new Date();
    let time = date.toLocaleString();
    let historyItem = document.createElement('li');
    historyItem.textContent = `Time ${team} - ${time}`;
    historyList.appendChild(historyItem);
}

function changeSet() {
    if ((team1Points >= 25 || team2Points >= 25) && Math.abs(team1Points - team2Points) >= 2) {
        if (currentSet < 5) {
            currentSet++;
            setButton.innerHTML = `Set ${currentSet}`;
            team1Points = 0;
            team2Points = 0;
            team1Score.innerHTML = team1Points;
            team2Score.innerHTML = team2Points;
            errorMessage.textContent = '';
            adjustSetButton();
        } else {
            currentSet = 1;
            setButton.innerHTML = `Set 1`;
            team1Points = 0;
            team2Points = 0;
            team1Score.innerHTML = team1Points;
            team2Score.innerHTML = team2Points;
            errorMessage.textContent = '';
        }
    } else if (team1Points < 25 && team2Points < 25) {
        errorMessage.textContent = 'Não há pontos suficientes para mudar de set!';
    } else {
        errorMessage.textContent = 'É necessário uma diferença de 2 pontos para mudar de set!';
    }
}

function adjustSetButton() {
    let scaleFactor = 1 + (currentSet * 0.1);
    setButton.style.transform = `scale(${scaleFactor})`;
}