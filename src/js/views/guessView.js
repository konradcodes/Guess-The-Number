import { elements } from "./base";

export const getInput = () => elements.userGuess.value;

export const clearField = () => (elements.userGuess.innerHTML = "");

export const renderValues = (min, max) => {
  elements.minNum.textContent = min;
  elements.maxNum.textContent = max;
};

export const renderMessage = (option, guessesLeft, winningNumber) => {
  if (option === "won") {
    elements.message.textContent = "Well done you won!";
    elements.userGuess.disabled = true;
    elements.btnSubmit.textContent = "Play Again";
    elements.btnSubmit.classList.add("play-again");
  } else if (option === "nextTry") {
    elements.message.textContent = `Wrong answer. Try Again Guesses left ${guessesLeft}`;
    elements.userGuess.value = "";
  } else if (option === "lost") {
    elements.message.textContent = `Game Over! You lost, Winning Number was: ${winningNumber}`;
    elements.userGuess.disabled = true;
    elements.btnSubmit.textContent = "Play Again";
    elements.btnSubmit.classList.add("play-again");
  }
};

export const cleanView = () => {
  elements.message.textContent = "";
  elements.userGuess.disabled = false;
  elements.userGuess.value = "";
  elements.btnSubmit.textContent = "Check!";
  elements.btnSubmit.classList.remove("play-again");
};
