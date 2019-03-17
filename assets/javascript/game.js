// GAME VARIABLES AND ARRAYS

// An array of the alphabet used for computer's choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables of 'wins', 'losses', 'guesses left' and 'current guesses' for tracking scores and guesses

var wins = 0;
var losses = 0;
var guessesLeft = 10;

// Variables to hold references and display them in HTML
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");

// GAME FUNCTION 

// Function that runs when user presses a key
document.onkeyup = function (event) {
    // Function runs only if user picks a letter from A-Z to limit other keys being pressed

    // This determines when a key was pressed
    var userGuess = event.key;

    // Shows the user's current guesses, up to 10
    console.log(userGuess)

    // Computer randomly picks a letter, does not display it
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Alerts the 'userGuess' and 'computerGuess'
    console.log("Computer Guess: " + computerGuess);

    // If User and Computer guesses are equal...
    if (userGuess === computerGuess) {
        // Add one to 'win' score
        wins++;
    }

    // If user and Computer guesses are not equal
    else if (userGuess != computerGuess) {
        // Subtract one from 'guesses left'
        guessesLeft--;
    }

    // If there are 0 'guesses left'
    if (guessesLeft === 0) {
        // Add one to 'losses'
        losses++;
        guessesLeft = 10;
    }

    // Display user's 'current guess' on HTML page
    userChoiceText.textContent = "You chose: " + userGuess;
    // Display all of user's guesses made on HTML page

    // Display 'win' score on HTML page
    winsText.textContent = "Wins: " + wins;
    // Display 'losses' score on HTML page
    lossesText.textContent = "Losses: " + losses;
    // Display 'guesses left' on HTML page
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;

};

