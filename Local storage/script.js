const wordList = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon', 'mango', 'orange', 'papaya', 'quince', 'raspberry', 'strawberry', 'tangerine', 'watermelon'];

let selectedWord = '';
let guessedWord = [];
let attemptsLeft = 6;

// Function to select a random word from the word list
function selectRandomWord() {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  selectedWord = wordList[randomIndex];
  guessedWord = Array(selectedWord.length).fill('_');
}

// Function to display the current state of the game
function displayGame() {
  console.clear();
  console.log(`Word: ${guessedWord.join(' ')}`);
  console.log(`Attempts left: ${attemptsLeft}`);
}

// Function to check if the player has won
function hasPlayerWon() {
  return !guessedWord.includes('_');
}

// Function to check if the player has lost
function hasPlayerLost() {
  return attemptsLeft === 0;
}

// Function to handle a guessed letter
function guessLetter(letter) {
  if (selectedWord.includes(letter)) {
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === letter) {
        guessedWord[i] = letter;
      }
    }
  } else {
    attemptsLeft--;
  }
}

// Function to start the game
function startGame() {
  selectRandomWord();
  while (!hasPlayerWon() && !hasPlayerLost()) {
    displayGame();
    const guess = prompt('Guess a letter:');
    if (guess && guess.length === 1 && /^[a-zA-Z]+$/.test(guess)) {
      guessLetter(guess.toLowerCase());
    } else {
      console.log('Please enter a valid letter.');
    }
  }

  if (hasPlayerWon()) {
    console.log('Congratulations! You won!');
  } else {
    console.log(`You lost. The word was: ${selectedWord}`);
  }
}

// Start the game
startGame();
