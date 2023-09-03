// Get references to the HTML elements
const emojiDisplay = document.querySelector('.emoji-display');
const guessInput = document.querySelector('.input');
const feedback = document.querySelector('.feedback');
const newGameBtn = document.querySelector('.new-game-btn');

// Create an array of objects with words/phrases and corresponding emoji sequences
const emojiData = [
    {
        word: 'Scuba Diving',
        emojiSequence: '🤿🐠🐟🦈🌊'
    },
    {
        word: 'Haunted House',
        emojiSequence: '👻🏚️👻🏚️👻'
    },
    {
        word: 'Summer',
        emojiSequence: '🌞🥵🏖️🌴😎'
    },
    {
        word: 'Space',
        emojiSequence: '🚀🌠🪐🚀🌌'
    },
    {
        word: 'Beach Party',
        emojiSequence: '🏖️🎉🎈🍹🎶'
    },
    {
        word: 'Gardening',
        emojiSequence: '🌼🍃🌻🌺🍃'
    },
    {
        word: 'Chocolate Factory',
        emojiSequence: '🍫🏭🍫🏭🍫'
    },
    {
        word: 'Bookworm',
        emojiSequence: '📚🐛📚🐛📚'
    },
    {
        word: 'Rainy Day',
        emojiSequence: '🌧️☔🌧️☔🌧️'
    },
    // Add more words/phrases and emoji sequences here
];

// Initialize variables
let currentWord = '';
let currentEmojiSequence = '';
let userGuess = '';

// Function to start a new game
function startNewGame() {
    // Randomly select a word and its emoji sequence from the emojiData array
    const randomIndex = Math.floor(Math.random() * emojiData.length);
    currentWord = emojiData[randomIndex].word;
    currentEmojiSequence = emojiData[randomIndex].emojiSequence;

    // Display the emoji sequence on the page
    emojiDisplay.textContent = currentEmojiSequence;

    // Clear the previous feedback and user's guess
    feedback.textContent = '';
    guessInput.value = '';

    // Focus on the user input area
    guessInput.focus();
}

// Event listener for the "New Game" button
newGameBtn.addEventListener('click', startNewGame);

// Start a new game when the page loads
startNewGame();

// Function to check the user's guess
function checkGuess() {
    // Get the user's guess from the input field
    userGuess = guessInput.value.trim().toLowerCase();

    // Check if the user's guess matches the current word
    if (userGuess === currentWord.toLowerCase()) {
        feedback.textContent = 'Correct!';
        guessInput.value = '';
    } else {
        feedback.textContent = 'Try again!';
        guessInput.value = '';
    }
}

// Event listener for user input (Enter key)
guessInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkGuess();
    }
});
