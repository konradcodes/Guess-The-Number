//Global App Controller

/*
GAME FUNCTION:
- Player must guess a number between a min and max
- player gets a certain amount of guesses
- notify player of guesses remaining
- notify the player of the correct answer if loose
- let player choose to play again
*/
//Models
import Guess from "./models/Guess";

//Views
import { elements } from "./views/base";
import * as guessView from "./views/guessView";

// CSS
import "../css/main.scss";

/** //? Global State of the app
 * - Search Object
 * - Current Recipe object
 * - Shopping list object
 * - Liked recipes
 *
 */
const state = {};
window.state = state;

// --- CONTROLLERS ---

//*Guess Controller
const controlGuess = () => {
  if (!state.guess) state.guess = new Guess();
  //Render Game Values to the UI
  guessView.renderValues(state.guess.min, state.guess.max);
};

//Guess Event Listeners
elements.formContainer.addEventListener("submit", e => {
  e.preventDefault();

  if (
    (state.guess.guessesLeft === 0 && elements.btnSubmit.classList.contains("play-again")) ||
    (state.guess.guessesLeft > 0 && elements.btnSubmit.classList.contains("play-again"))
  ) {
    guessView.cleanView();
    state.guess.cleanGuess();
    return;
  }
  //Get guess from the user
  const guess = guessView.getInput();
  //Add user guess to state
  state.guess.addGuess(guess);
  //Check if it matches the winning number
  guessView.renderMessage(state.guess.checkGuess(), state.guess.guessesLeft);
});

controlGuess();
