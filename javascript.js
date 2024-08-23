let choice_list=["rock","paper","scissors"];
console.log(choice_list[0]);
console.log(choice_list[1]);
console.log(choice_list[2]);
console.log(" ");

function getComputerChoice() {
    console.log("Number "+(Math.floor((Math.random()*3))))
    console.log(choice_list[Math.floor(Math.random()*3)])
    console.log("")
    return choice_list[Math.floor(Math.random()*3)]
}

// let cpu_choice = getComputerChoice();
// console.log(cpu_choice);

let human_choice;

function getHumanChoice(){
    human_choice = prompt("input your choice. rock, paper, or scissors",)
    human_choice = human_choice.toLowerCase()
    // console.log(human_choice);
    while ((human_choice!="rock")&&(human_choice!="paper")&&(human_choice!="scissors")){
        human_choice = prompt("wrong. input your choice again",)
        human_choice = human_choice.toLowerCase()
        // console.log(human_choice)
    }
    // console.log(human_choice);
    return human_choice
}

// getHumanChoice();

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
    else if((human_choice == "rock") && (cpu_choice=="paper")||
            (human_choice == "paper") && (cpu_choice == "rock")||
            (human_choice == "scissors") && (cpu_choice == "paper"))
            {
                console.log("You win! "+human_choice+" beats "+cpu_choice+".")
                humanScore++
            }
    else{
        console.log("Same hands! Draw.")
    }
    // console.log("Human score: "+humanScore)
    // console.log("Computer score: "+computerScore)
}

// playRound()

function playGame(){
    for (let i=0; i<5; i++){
        playRound()
        console.log("Round: "+(i+1)+" Human score: "+humanScore)
        console.log("Round: "+(i+1)+" Computer score: "+computerScore)
        console.log("")
    }
}

playGame()
