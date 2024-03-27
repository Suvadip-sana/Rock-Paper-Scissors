const choice = document.querySelectorAll(".choice-img");
const yourScoreBoard = document.querySelector("#user-score");
const compScoreBoard = document.querySelector("#comp-score");
const drawScoreBoard = document.querySelector("#draw");
const displayMsg = document.querySelector("#msg");

let userScore = 0;
let compScore = 0;
let drawScore = 0;

const generateComChoice = () => {
    const options = ['Rock', 'Paper', 'Scissors'];
    //Generate 0, 1 & 2 using random function
    const mt = Math.floor(Math.random() * 3);
    return options[mt];
    console.log(mt);
};

const drawGame = () => {
    drawScore++;
    drawScoreBoard.innerHTML = drawScore;
    displayMsg.innerHTML = `Match was draw! Play again.`;
    displayMsg.style.backgroundColor = "#e5880e";
};

const playGame = (userChoice) => {

    //Computer choice generator
    const compChoice = generateComChoice();

    if(userChoice === compChoice){
        // Draw
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "Rock"){
            // Paper, Scissors
           userWin = compChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper"){
            // Scissor, Rock
           userWin = compChoice === "Scissors" ? false : true;
        }
        else{
            // Rock, Paper
           userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin == true){
        userScore++;
        yourScoreBoard.innerHTML = userScore;
        displayMsg.innerHTML = `You Win! Your ${userChoice} beats ${compChoice}.`;
        displayMsg.style.backgroundColor = "rgb(0, 202, 0)";

    }else{
        compScore++;
        compScoreBoard.innerHTML = compScore;
        displayMsg.innerHTML = `You Lost! ${compChoice} beats your ${userChoice}.`;
        displayMsg.style.backgroundColor = "red";
    }
};

// Every small details was written inside function, This type of programming called Modular Programming.

choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});