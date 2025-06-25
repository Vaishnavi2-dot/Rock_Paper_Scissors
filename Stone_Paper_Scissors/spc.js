let userScore = 0;
let compScore = 0;
const images = document.querySelectorAll(".images button");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}
const playGame = (choiceId) => {
    let k = 0;
    let m = 0;
    const compChoice = genCompChoice();
     if(choiceId===compChoice){
        //draw
     }
     else{
        if(
            (choiceId === "rock" && compChoice === "scissors") ||
            (choiceId === "scissors" && compChoice === "paper") ||
            (choiceId === "paper" && compChoice === "rock")
        ){
            k++;
            userScore++;
            document.getElementById("user-score").innerText = userScore;
        }
        else{
            m++;
            compScore++;
            document.getElementById("comp-score").innerText = compScore;
        }
     }
     if(k>m){
        msg.innerText = `You won! Your ${choiceId} beats Computer's ${compChoice}`;
        msg.style.backgroundColor = "green";
     }
     else if(k<m){
        msg.innerText = `You lost! Computer's ${compChoice} beats Your ${choiceId}`;
        msg.style.backgroundColor = "red";
     }
     else{
        msg.innerText = "It's a Draw";
        msg.style.backgroundColor ="rgb(3, 9, 82)";

     }
}

images.forEach((image) => {
    image.addEventListener("click", () => {
    const choiceId = image.getAttribute("id");
    playGame(choiceId)
    });
});