// start the game with a score of zero
var wins = 0;
// words to guess will be selected from here
var wordSelectionArray = [
    "adventure", "bandit", "battleaxe", "battlefield", "beholder", "bugbear", "castle", "catapult", "cleric", "dragon", "dungeon",
    "fairy", "fireball", "giant", "goblin", "knight", "magic", "monster", "necromancer", "owlbear", "paladin", "potion", "quarterstaff",
    "sorcerer", "spells", "sword", "vampire", "warlock", "wizard", "zombie"]
//variable to hold number of guesses remaining
var guessesRemaining = 12;
//variable to hold the randomly selected word
var selectedWord;
//variable to identify a letter
var isLetter = ["abcdefghijklmnopqrstuvwxyz"];
//variable to store number of blanks
var blanks = 0;




//function to choose a word from the array
function getWord() {
    wordInt = Math.floor((Math.random)() * wordSelectionArray.length);
    selectedWord = wordSelectionArray[wordInt];
}
//funciton to split the random word into an array of letters
function wordSplit() {
    var letters = selectedWord.split("");
    console.log(letters);

};


//function to display the guesses remaining
function guessesLeft() {
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
}

//function to display the current score
function totalWins() {
    document.getElementById("wins").innerHTML = wins;
}
getWord();
guessesLeft();
totalWins();
wordSplit();
console.log(selectedWord);
// console.log();