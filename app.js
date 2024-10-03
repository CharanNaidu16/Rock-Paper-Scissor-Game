let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const messageDisplay = document.querySelector("#msg");
const computerScoreDisplay = document.querySelector("#comp-score");
const userScoreDisplay = document.querySelector("#you-score");

const displayDraw = () => {
  messageDisplay.innerText = "It's a draw!";
};

const displayWinner = (userWins) => {
  if (userWins) {
    userScore++;
    userScoreDisplay.innerText = userScore;
    messageDisplay.innerText = "You win!";
  } else {
    computerScore++;
    computerScoreDisplay.innerText = computerScore;
    messageDisplay.innerText = "You lose!";
  }
};

const generateComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

const playGame = (userChoice) => {
  const computerChoice = generateComputerChoice();

  if (userChoice === computerChoice) {
    displayDraw();
  } else {
    const userWins = determineWinner(userChoice, computerChoice);
    displayWinner(userWins);
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return true;
  }
  return false;
};

const setupEventListeners = () => {
  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });
};

const initGame = () => {
  setupEventListeners();
};

initGame();
