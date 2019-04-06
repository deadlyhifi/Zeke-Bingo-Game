import nicknames from "./nicknames.mjs";

const maxNumber = 90;
let started = false;
let previous = [];
let balls;

const startGame = document.getElementById("start-game");
const randNumberPlaceholder = document.getElementById("random-number");
const generateButton = document.getElementById("generate-random-number");
const prevNumbersPlaceholder = document.getElementById("previous-numbers");
const prevNumbersCounter = document.getElementById("previous-numbers-counter");
const numberSayingPlaceholder = document.getElementById("number-saying");
const numberExplanationPlaceholder = document.getElementById(
  "number-explanation"
);

const generateBalls = () => {
  const total = Array.from(Array(maxNumber + 1).keys());
  total.shift(); // Remove 0 from array

  return total;
};

function generateRandomNumber() {
  // Start of the game
  if (!started) {
    started = true;
    balls = generateBalls();
    startGame.remove();

    randNumberPlaceholder.setAttribute("class", "started");
    generateButton.innerHTML = "Pick Bingo Ball";
  }

  // End of the game
  if (balls.length < 1) {
    started = false;
    previous = [];

    randNumberPlaceholder.setAttribute("class", "");
    randNumberPlaceholder.innerHTML = "Game Over!";
    numberSayingPlaceholder.innerHTML = "";
    numberExplanationPlaceholder.innerHTML = "";
    prevNumbersPlaceholder.innerHTML = "";
    generateButton.innerHTML = "Start a New Game";

    return;
  }

  const pick = balls[Math.floor(Math.random() * balls.length)];
  const index = balls.indexOf(pick);
  if (index > -1) {
    balls.splice(index, 1);
  }
  previous.push(pick);

  numberSayingPlaceholder.innerHTML = "";
  numberExplanationPlaceholder.innerHTML = "";
  randNumberPlaceholder.innerHTML = pick;

  if (nicknames[pick]) {
    numberSayingPlaceholder.innerHTML = nicknames[pick].saying;
    numberExplanationPlaceholder.innerHTML = nicknames[pick].explanation;
  }

  prevNumbersCounter.innerHTML = previous.length;
  prevNumbersPlaceholder.innerHTML = previous.join(", ");

  return;
}

generateButton.addEventListener("click", () => {
  generateRandomNumber();
});
