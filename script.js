function getComputerChoice(max){
    return Math.floor(Math.random() * max);
}
if (getComputerChoice(3) == 0) {
let choice = "rock";
console.log(choice);
}
else if (getComputerChoice(3) == 1) {
let choice = "paper";
console.log (choice);
} else {
let choice = "scissor";
console.log(choice);
}


function getHumanChoice(){
let hchoice = prompt("Pick Rock, Paper, or Scissors")
return hchoice;
}


let humanChoice = getHumanChoice().toLowerCase();
console.log(humanChoice);
console.log(getComputerChoice());
console.log(getHumanChoice());

/*
if (getComputerChoice() == "rock" && getHumanChoice() == "scissor" || getComputerChoice() == "scissor" && getHumanChoice() == "paper" || getComputerChoice() == "paper" && getHumanChoice() == "rock") {
console.log("You lose");


} else if (getComputerChoice() == "rock" && getHumanChoice() == "paper" || getComputerChoice() == "scissor" && getHumanChoice() == "rock" || getComputerChoice() == "paper" && getHumanChoice() == "scissor"){
console.log("you win");
} else {
    console.log("Invalid Input")
}



have computer randomly generate a number between 0 and 2
store rock paper scissor respectively in the numbers
get human choice with a prompt
compare choices 
if computer wins, and 1 to computer score. if player wins and 1 to player score
first to reach or score of 5 wins and the game ends









*/