import nicknames from "./nicknames.mjs";

const maxNumber = 90;
const previous = [];

const startGame = document.getElementById("start-game");
const randNumberPlaceholder = document.getElementById("random-number");
const generateButton = document.getElementById("generate-random-number");
const prevNumbersPlaceholder = document.getElementById("previous-numbers");
const numberSayingPlaceholder = document.getElementById("number-saying");
const numberExplanationPlaceholder = document.getElementById(
  "number-explanation"
);

function generateRandomNumber(max = maxNumber) {
  const number = Math.floor(Math.random() * Math.floor(max - 1)) + 1;
  numberSayingPlaceholder.innerHTML = "";
  numberExplanationPlaceholder.innerHTML = "";

  if (previous.includes(number)) {
    console.log("repeated: ", number);
    generateRandomNumber();
  } else {
    previous.push(number);
    console.log(nicknames[number]);

    randNumberPlaceholder.innerHTML = number;

    if (nicknames[number]) {
      numberSayingPlaceholder.innerHTML = nicknames[number].saying;
      numberExplanationPlaceholder.innerHTML = nicknames[number].explanation;
    }

    prevNumbersPlaceholder.innerHTML = previous.join(", ");
    return;
  }
}

generateButton.addEventListener("click", () => {
  startGame.remove();
  generateRandomNumber();
});
