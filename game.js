// Create a coin flip game
class Game {
  constructor() {
    // Define variables
    this.score = 0;
    this.choice = '';

    this.canvas = document.getElementById('gameContainer').getContext('2d');
    this.canvas.font = '24px Arial';

    this.playButton = document.getElementById('playButton');
    this.headsButton = document.getElementById('headsButton');
    this.tailsButton = document.getElementById('tailsButton');

    // On click listeners for the game's buttons.
    this.playButton.addEventListener('click', () => {
      this.erase();
      this.play();
    });

    this.headsButton.addEventListener('click', () => {
      this.choice = 'Heads';
      this.flipCoin();
    });

    this.tailsButton.addEventListener('click', () => {
      this.choice = 'Tails';
      this.flipCoin();
    });

    this.erase();
  }

  // Start the game
  play() {
    this.score = 0;
    this.canvas.fillText('Score: ' + this.score, 8, 26);
    this.canvas.fillText('Heads or Tails?', 66, 150);
    this.playButton.style.display = 'none';
    this.headsButton.style.display = 'inline-block';
    this.tailsButton.style.display = 'inline-block';
  }

  // Flip the coin
  flipCoin() {
    this.headsButton.disabled = true;
    this.tailsButton.disabled = true;
    this.erase();
    this.canvas.fillText('Score: ' + this.score, 8, 26);
    this.canvas.fillText('Flipping coin . . .', 60, 150);

    setTimeout(() => { this.coinLanded() }, 2000);
  }

  // Logic for when the coin lands
  coinLanded() {
    this.headsButton.disabled = false;
    this.tailsButton.disabled = false;
    let sideUp;
    if(Math.random() < 0.5) {
      sideUp = 'Heads';
    } else {
      sideUp = 'Tails';
    }

    if (sideUp === this.choice ) {
      this.win(sideUp);
    } else {
      this.lose(sideUp);
    }
  }

  // Guess the flip correctly
  win(sideUp) {
    this.erase();
    this.score += 1;
    this.canvas.fillText('Score: ' + this.score, 8, 26);
    this.canvas.fillText('It was ' + sideUp + '!', 66, 150);
    this.canvas.fillText('Guess again', 70, 200);
  }

  // Guess the flip incorrectly
  lose(sideUp) {
    this.erase();
    this.canvas.fillText('Sorry, it was ' + sideUp, 50, 100);
    this.canvas.fillText('Your score was ' + this.score, 50, 150);
    this.canvas.fillText('Want to play again?', 45, 200);

    this.playButton.style.display = 'inline-block';
    this.headsButton.style.display = 'none';
    this.tailsButton.style.display = 'none';
  }

  // Erase the canvas
  erase() {
    this.canvas.fillStyle = '#ADD8E6';
    this.canvas.fillRect(0, 0, 300, 300);
    this.canvas.fillStyle = '#000000';
  }
}

const game = new Game();