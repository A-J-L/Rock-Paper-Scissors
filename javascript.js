//Logic for Computer Choice
function getComputerChoice() {
for (let i = 1; i <= 3; i++) {
  let randomNum = Math.floor(Math.random() * 3);
  
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
  console.log(randomNum);
  }
}

console.log(getComputerChoice());


//Logic to get Human Choice
function getHumanChoice() {
  let userChoice = prompt("Enter either; rock, paper, or scissors");
  return userChoice
}

 console.log(getHumanChoice());

 //Step 4: Tracking players score
 let humanScore = 0;
 let computerScore = 0;


 //Step 5: Logic for playing a single round
 function playRound(humanChoice, computerChoice) {
    //humanChoice.toLowerCase();
    console.log("You lose! Paper beats Rock");
 }

 const humanSelection = getHumanChoice();
 const computerSelection = getComputerChoice();

 console.log(playRound(humanSelection, computerSelection));

 //Step 6: Logic to play the entire game