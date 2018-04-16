$(document).ready(function () {

    // Array of valid latters
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Randomly picks a letter 
    var randomGuess;
    // Store user guest
    var userGuess;
    // Store wins
    var winCount = 0;
    // Store losses
    var lossCount = 0;
    // Store guesses left
    var guessesLeft = 10;
    // Store guessed letters
    var guessedLetters = [];

    // Key up event
    document.onkeyup = function (event) {
        userGuess = event.key;

        if (guessedLetters.includes(userGuess)) {
            return false;
        }

        if (letters.includes(userGuess)) {
            guessedLetters.push(userGuess);
            var index = Math.floor(Math.random() * letters.length);
            randomGuess = letters[index];

            if (isUserWinner()) {
                winCount++;
                restartGame();
            } else {
                guessesLeft--;
            }

            if (guessesLeft < 1) {
                lossCount++;
                restartGame()
            }
            displayHTML();
        }
    };

    // Function start game
    function restartGame() {
        guessesLeft = 10;
        guessedLetters = [];
    }

    // Function is user winner?
    function isUserWinner() {
        if (randomGuess === userGuess) {
            //user is the winner!!
            return true;
        }
        return false;
    }
    // use javascript to update the html with variables
    function displayHTML() {
        $("#user-guess").text(userGuess);
        $("#wins").text(winCount);
        $("#losses").text(lossCount);
        $("#guesses-left").text(guessesLeft);
        $("#letters-guessed").text(guessedLetters.join(", "));
    }
});