// Array of all the options (A-Z)
var computerChoices = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

// Variables that holds numbers of wins, losses, and guesses left
var wins = 0;
var losses = 0;
var guess= 5;

// Variables that holds references to places in the HTML where we want things displayed
var directionsText = document.getElementById ("directions-text");
var winsText = document.getElementById ("wins-text");
var lossesText = document.getElementById ("losses-text");
var guessesText = document.getElementById ("guesses-text");
var userChoiceText = document.getElementById ("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");

// Player picks letter by pressing key
document.onkeyup = function(event) {
    var userGuess = event.key;
    // Player's guesses are displayed on screen

// Computer picks letter randomly from the A-Z array
    var computerGuess = computerChoices [Math.floor(Math.random() * computerChoices.length)];

// If Player picks same letter as Computer...
    if ((userGuess === computerChoices)) {
    // add one point to Win and ...
    wins ++;
    }
    // game resets and ...

    // computer chooses new letter ...

// If Player picks different letter than Computer...
    if ((userGuess != computerChoices)) {
    (guess - 1);
    }
    // and remove one guess left ...
    // player keeps on guessing

// If no more guesses remaining then ...
    // loss goes up by 1
    // computer chooses new letter

// Displays user guess, win, losses and guesses left
    userChoiceText.textContent = "You chose: " + userGuess;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesText.textContent = "Guesses Left: " + guess;
}