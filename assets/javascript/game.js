// start the game with a score of zero
var wins = 0;
// words to guess will be selected from here
var wordSelectionArray = [
    "adventure", "bandit", "battleaxe", "battlefield", "beholder", "bugbear", "castle", "catapult", "cleric", "dragon", "dungeon", 
    "fairy", "fireball", "giant", "goblin", "knight", "magic", "monster", "necromancer", "owlbear", "paladin", "potion", "quarterstaff", 
    "sorcerer", "spells", "sword", "vampire", "warlock", "wizard", "zombie"]
//variable to hold number of guesses remaining
var guessesRemaining = 12;
var selectedWord;
//function to choose a word from the array
function getWord() {
    wordInt = Math.floor((Math.random)() * wordSelectionArray.length);
    selectedWord = wordSelectionArray[wordInt];
    console.log(selectedWord);
}




//function to display the current score
function totalWins() {
    document.getElementById("wins").innerHTML = wins;
}

totalWins();
getWord();