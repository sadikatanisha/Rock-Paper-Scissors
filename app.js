const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "scissor";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (userChoice === computerChoice) {
    result = "its a draw!";
  }
  if (userChoice === "rock" && computerChoice === "scissor") {
    result = "you won!";
  }
  if (userChoice === "rock" && computerChoice === "paper") {
    result = "you lost!";
  }
  if (userChoice === "paper" && computerChoice === "rock") {
    result = "you won!";
  }
  if (userChoice === "paper" && computerChoice == "scissor") {
    result = "you lost!";
  }
  if (userChoice === "scissor" && computerChoice === "rock") {
    result = "you lost!";
  }
  if (userChoice === "scissor" && computerChoice === "paper") {
    result = "you won!";
  }
  resultDisplay.innerHTML = result;
}
