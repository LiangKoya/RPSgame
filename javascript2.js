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

function playRound(){
    cpu_choice = getComputerChoice()
    human_choice = getHumanChoice()
    console.log("cpu:"+cpu_choice)
    console.log("human:"+human_choice)
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

playGame()
// for (let i=0;i<20;i++){
//     getComputerChoice()
// }