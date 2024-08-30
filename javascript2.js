let buttons = document.querySelector(".buttons");
let rockBtn = document.createElement("button");
rockBtn.textContent = "rock";
buttons.appendChild(rockBtn)
let paperBtn = document.createElement("button");
paperBtn.textContent = "paper";
buttons.appendChild(paperBtn);
let scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "scissors";
buttons.appendChild(scissorsBtn);

let humanChoise = document.querySelector(".choise .human");
let cpuChoise = document.querySelector(".choise .cpu");
let humanTotalScore = document.querySelector(".score .human");
let cpuTotalScore = document.querySelector(".score .cpu")

rockBtn.addEventListener("click",()=>{
    playRound("rock")
})
paperBtn.addEventListener("click",()=>{
    playRound("paper")
})
scissorsBtn.addEventListener("click",()=>{
    playRound("scissors")
})

function getComputerChoice() {
    let choice_list=["rock","paper","scissors"];
    let number = Math.floor((Math.random()*3))
    // console.log("Number "+ number)
    console.log(choice_list[number])
    // console.log("")
    return choice_list[number]
}

function getHumanChoice(){
    let human_choice;
    human_choice = prompt("input your choice. rock, paper, or scissors",)
    human_choice = human_choice.toLowerCase()
    while ((human_choice!="rock")&&(human_choice!="paper")&&(human_choice!="scissors")){
        human_choice = prompt("wrong. input your choice again",)
        human_choice = human_choice.toLowerCase()

    }
    return human_choice
}

let humanScore = 0;
let computerScore = 0;

function playRound(human_choice){
    let cpu_choice = getComputerChoice()
    // human_choice = getHumanChoice() 
    console.log("cpu:"+cpu_choice)
    console.log("human:"+human_choice)
    humanChoise.textContent = "human:"
    humanChoise.textContent += human_choice;
    cpuChoise.textContent = "CPU:"
    cpuChoise.textContent += cpu_choice;
    if ((human_choice == "rock") && (cpu_choice == "paper") ||
        (human_choice == "paper") && (cpu_choice == "scissors")||
        (human_choice == "scissors") && (cpu_choice == "rock"))
        {
            console.log("You lose! "+cpu_choice+" beats "+human_choice+".")
            computerScore++
        }
    else if((human_choice == "rock") && (cpu_choice=="scissors")||
            (human_choice == "paper") && (cpu_choice == "rock")||
            (human_choice == "scissors") && (cpu_choice == "paper"))
            {
                console.log("You win! "+human_choice+" beats "+cpu_choice+".")
                humanScore++
            }
    else{
        console.log("Same hands! Draw.")
    }
    humanTotalScore.textContent = "human:";
    cpuTotalScore.textContent = "CPU:";
    humanTotalScore.textContent += humanScore;
    cpuTotalScore.textContent += computerScore;
    if (humanScore == 5){
        alert("you win!");
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5){
        alert("you lose...")
        humanScore = 0;
        computerScore = 0;
    }

}

function playGame(){
    for (let i=0; i<5; i++){
        playRound()
        console.log("Round: "+(i+1)+" Human score: "+humanScore)
        console.log("Round: "+(i+1)+" Computer score: "+computerScore)
        console.log("")
    }
    if (humanScore>computerScore){
        console.log("You are the winner!")
    }
    else{
        console.log("You lose...")
    }
}

// playGame()