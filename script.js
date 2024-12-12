let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg")
const compPara = document.querySelector("#comp-score");
const userPara = document.querySelector("#user-score")

checkWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userPara.innerText = userScore
        msg.innerText = `You win!.Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compPara.innerText = compScore;
        msg.innerText = `Computer win!.Your ${userChoice} looses with ${compChoice}`
        msg.style.backgroundColor = "blue";
    }

}

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"]
    const ranIdx = Math.floor(Math.random() * 3)
    return options[ranIdx];
}
const drawGame = () => {
    msg.innerText = "Game is draw"
}

const playGame = (userChoice) => {
    const compChoice = genComputerChoice();
    console.log("computer choice is ", compChoice);
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === 'paper') {
            userWin = compChoice === "scissor" ? false : true;
        }
        else if (userChoice === "scissor") {
            userWin = compChoice === "roc" ? false : true;
        }
        checkWinner(userWin, userChoice, compChoice);
    }


}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })

})