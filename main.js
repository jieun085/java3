let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.querySelector("#user-input");
let resultText = document.querySelector(".result-text");
let resetButton = document.querySelector(".button-reset");
let chanceArea = document.getElementById("chance-area");
let gameOver = false;
let chance = 5;
let userValueList = [];

chanceArea.innerHTML = `남은 기회:${chance}`;
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", focusInput);

function pickRandomNumber() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
}

function play(){
    const userValue = userInput.value;
    if(userValue < 1 || userValue > 100){
        resultText.textContent = "1과 100사이 숫자를 입력해 주세요";
        return;
    }

    if(userValueList.includes(userValue)){
        resultText.textContent = "이미 입력한 숫자입니다 다른 숫자를 입력해 주세요";
        return;
    }

    chance -- ;
    chanceArea.textContent = `남은 기회:${chance}`;
    userValueList.push(userValue);
    if(userValue < computerNum) {
        resultText.textContent = "UP!!";
    }else if(userValue > computerNum) {
        resultText.textContent = "DOWN!!";
    }else {
        resultText.textContent = "맞췄습니다!!";
        gameOver = true;
    }
    
    if (chance == 0) {
        gameOver = true;
    } 

    if (gameOver == true) {
        playButton.disabled = true;
    }
}

function focusInput() {
    userInput.value = "";
}

function reset() {
    userInput.value = "";
    pickRandomNumber();
    resultText.textContent="결과값이 여기 나옵니다";
    gameOver = false;
    playButton.disabled = false;
    chance = 5;
    chanceArea.innerHTML = `남은 기회:${chance}`;
    userValueList = [];
}

pickRandomNumber();
