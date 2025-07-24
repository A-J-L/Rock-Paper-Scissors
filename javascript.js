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
//console.log(getComputerChoice());


//Logic to get Human Choice
function getHumanChoice() {
  let userChoice = prompt("Enter either; rock, paper, or scissors");
  return userChoice;
}

 //console.log(getHumanChoice());

 //Step 4: Tracking players score
 let humanScore = 0;
 let computerScore = 0;


 //Step 5: Logic for playing a single round
 



 
 //Step 6: Logic to play the entire game
function playGame() {
  function playRound(humanChoice, computerChoice) {
    //console.log(humanChoice = humanChoice.toLowerCase());
    if (humanChoice === "rock" && computerChoice ==="scissors"
    ) {
      console.log("You win! Rock beats scissors");
      humanScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper beats rock");
      computerScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "rock") {
      console.log("Draw!");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors beats paper");
      humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose! Rock beats scissors");
      computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
      console.log("Draw!");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose! Scissors beats paper");
      computerScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats rock");
      humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "paper") {
      console.log("Draw!")
    } else {
      console.log("Try again");
    }
 }
}

 const humanSelection = getHumanChoice();
 const computerSelection = getComputerChoice();


//Testing for step 5
playRound(humanSelection, computerSelection);
console.log(humanScore);
console.log(computerScore);