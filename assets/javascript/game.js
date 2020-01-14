// words to guess will be selected from here
var wordSelectionArray = [
    "adventure", "bandit", "battleaxe", "battlefield", "beholder", "bugbear", "castle", "catapult", "cleric", "dragon", "dungeon",
    "fairy", "fireball", "giant", "goblin", "knight", "magic", "monster", "necromancer", "owlbear", "paladin", "potion", "quarterstaff",
    "sorcerer", "spells", "sword", "vampire", "warlock", "wizard", "zombie"]
    //variable to hold the randomly selected word
    var selectedWord = "";
    //variable to store number of blanks
    var blanks = 0;
    //var to hold the split out array of the randomly selected word. 
    var letters = [];
    //var to store blanks with the correct word
    var blankAndCorrect = [];
    //var to hold the incorrect letter guesses when input by the user.
    var wrongGuess = [];
    // start the game with a score of zero
    var wins = 0;
    var losses = 0;
    //variable to hold number of guesses remaining
    var guessesRemaining = 12;
    //array for guessed letters
    var alreadyGuessedLetters = [];
    //variable to hold the background music
    var myMusic = document.getElementById("background-music");

function game() {
    selectedWord = wordSelectionArray[Math.floor(Math.random() * wordSelectionArray.length)];
    letters = selectedWord.split("");
    blanks = selectedWord.length;
    for (var i = 0; i < blanks; i++) {
        blankAndCorrect.push("_");
    } 
    document.getElementById("current-word").innerHTML = " " + blankAndCorrect.join("  ");
    myMusic.play();
    // console.log(selectedWord);
    // console.log(letters);
    // console.log(blanks);
    // console.log(blankAndCorrect);
};

//function to start the game over
function reset() {
    guessesRemaining = 12;
    wrongGuess = [];
    blankAndCorrect = [];
    game();
};

//check and compare function
function checkInput(letter) {
    letterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (selectedWord[i] == letter) {
            letterInWord = true;
        }
    } if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (selectedWord[i] == letter) {
                blankAndCorrect[i] = letter;
            }
        }
    } if (letterInWord) {
        for (var i = 0; i < alreadyGuessedLetters.length; i++) {
            if (selectedWord[i] !== letter) {
                alreadyGuessedLetters[i] = letter;
                return;
            }
        }
    } else {
        wrongGuess.push(letter);
        alreadyGuessedLetters.push(letter);
        guessesRemaining--;
        console.log(alreadyGuessedLetters);
    }
};

//function to check wins/losses
function completeGame () {
    if (letters.toString() == blankAndCorrect.toString()) {
        wins++;
        document.getElementById("correct-answer-message").innerHTML = "Great Job! " + selectedWord.toLocaleUpperCase() + "  was the word!" ;
        reset();
        document.getElementById("wins").innerHTML = " " + wins;
    } else if (guessesRemaining === 0) {
        losses++;
        reset();
        document.getElementById("losses").innerHTML = " " + losses;
    }
    document.getElementById("current-word").innerHTML = " " + blankAndCorrect.join(" ");
    document.getElementById("guesses-remaining").innerHTML = " " + guessesRemaining;
};

game();

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkInput(guesses);
    completeGame();
    // console.log(guesses);
    document.getElementById("letters-guessed").innerHTML = " " + wrongGuess.join(" ");
}