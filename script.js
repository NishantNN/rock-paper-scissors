// all variables of the game
let choices = document.querySelectorAll(".choice")
let userScore = document.querySelector("#user-score")
let compScore = document.querySelector("#comp-score")
let drawScore = document.querySelector("#draw-score")
let displayMessage = document.querySelector(".prompt")
let userChoosed;
let compChoosed;
let userScoreVal = 1;
let compScoreVal = 1;
let drawScoreVal = 1;
let gameResult;

// returns randomly either 0 or 1 or 2
const compChoice = () => {
    val = parseInt(Math.random() * 3);
    if (val == 0) {
        compChoosed = `rock`;
    }
    else if (val == 1) {
        compChoosed = `paper`;
    }
    else {
        compChoosed = `scissors`;
    }
}

// recieves id of respective moves- rock, paper and scissors 
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoosed = choice.getAttribute("id")
        compChoice()
        gameDecide(userChoosed, compChoosed)
    })
})

// decides the result -- main game logic
const gameDecide = (userChoosed, compChoosed) => {
    if (userChoosed != compChoosed) {
        if (userChoosed == `rock`) {
            if (compChoosed == `paper`) {
                displayMessage.innerText = `You lose. you choosed ${userChoosed} against ${compChoosed}.`
                gameResult = `lose`
                colChange(gameResult);
                scoreUpdate(gameResult);
            } else {
                compChoosed = `scissors`
                displayMessage.innerText = `You win. You choosed ${userChoosed} against ${compChoosed}.`
                gameResult = `win`
                colChange(gameResult);
                scoreUpdate(gameResult);
            }
        }
        else if (userChoosed == `paper`) {
            if (compChoosed == `scissors`) {
                displayMessage.innerText = `You lose. you choosed ${userChoosed} against ${compChoosed}.`
                gameResult = `lose`
                colChange(gameResult);
                scoreUpdate(gameResult);
            } else {
                compChoosed = `rock`
                displayMessage.innerText = `You win. You choosed ${userChoosed} against ${compChoosed}.`
                gameResult = `win`
                colChange(gameResult);
                scoreUpdate(gameResult);
            }
        } else {
            if (compChoosed == `rock`) {
                displayMessage.innerText = `You lose. you choosed ${userChoosed} against ${compChoosed}.`
                gameResult = `lose`
                colChange(gameResult);
                scoreUpdate(gameResult);
            } else {
                compChoosed = `paper`
                displayMessage.innerText = `You win. You choosed ${userChoosed} against ${compChoosed}.`
                gameResult = `win`
                colChange(gameResult);
                scoreUpdate(gameResult);
            }
        }
    } else {
        displayMessage.innerText = `Game Draw.`
        gameResult = `draw`
        colChange(gameResult);
        scoreUpdate(gameResult);
    }
}
// updates the game score 
const scoreUpdate = (gameResult) => {
    if (gameResult == `win`) {
        userScore.innerText = userScoreVal
        userScoreVal++;
    } else if (gameResult == `lose`) {
        compScore.innerText = compScoreVal
        compScoreVal++;
    } else {
        drawScore.innerText = drawScoreVal
        drawScoreVal++;
    }
}

// changes box color based on game result
const colChange = (gameResult) => {
    if (gameResult == `win`) {
        displayMessage.style.backgroundColor = `blue`;
    } else if (gameResult == `lose`) {
        displayMessage.style.backgroundColor = `red`;
    } else {
        displayMessage.style.backgroundColor = `blueviolet`;
    }
}


