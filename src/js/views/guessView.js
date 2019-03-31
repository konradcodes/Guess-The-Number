import { elements } from "./base";

export const getInput = () => elements.userGuess.value;

export const clearField = () => (elements.userGuess.innerHTML = "");

export const renderValues = (min, max) => {
  elements.minNum.textContent = min;
  elements.maxNum.textContent = max;
};

export const renderMessage = (message, won) => {
  elements.message.textContent = message;
  //Disable user input
  elements.userGuess.disabled = true;
  //Play again
  clearField();
};
