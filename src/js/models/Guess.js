export default class Guess {
  constructor() {
    this.guess = null;
    this.min = 1;
    this.max = 10;
    this.guessesLeft = 3;
    this.winningNum = Guess.generateWinningNum(this.min, this.max);
  }

  addGuess(guess) {
    this.guess = parseInt(guess);
  }

  static generateWinningNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  checkGuess() {
    if (this.guess === this.winningNum) {
      //Game over - WON
      return true;
    } else {
      //Game Over - Lost
      return this.checkGuessesLeft();
    }
  }
  checkGuessesLeft() {
    //Wrong Answer
    this.guessesLeft -= 1;
    if (this.guessesLeft === 0) {
      //Game Over - Lost
      return false;
    }
  }
}
