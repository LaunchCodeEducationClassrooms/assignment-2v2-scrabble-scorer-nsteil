// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

function simpleScore(word) {
  word = word.toUpperCase();

  	score = 0
 
	for (let i = 0; i < word.length; i++) {
 
		score++
 
	  }

  return score;
}

function vowelBonusScore(word) {
  word = word.toUpperCase();
  let score = 0
  for (let i=0; i < word.length; i++) {
    if (word[i] == 'A' || word[i] == 'E' || word[i] == 'I' || word[i] == 'O' || word[i] == 'U' ) {
      score += 3
    } else {
      score += 1
    }
  }
  return score
}

function scrabbleScore(word) {
	word = word.toLowerCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (letter in newPointStructure) {
          
		 if (letter == word[i] ) {
       
			letterPoints += Number(newPointStructure[letter])
		 }
 
	  }
	}
	return letterPoints;
 }
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let userWord
function initialPrompt() {
   console.log("Let's play some scrabble! Enter a word:");
   userWord = input.question("Enter a word to score: ")
   return userWord
};

let simpleScoring = {name:`Simple Score`,description:`Each letter is worth 1 point.`,scoringFunction:simpleScore};

let vowelBonusScoring = {name:`Bonus Vowels`,description:`Vowels are 3 pts, consonants are 1 pt.`,scoringFunction:vowelBonusScore};

let scrabbleScoring = {name:`Scrabble`,description:`The traditional scoring algorithm.`,scoringFunction:scrabbleScore};

const scoringAlgorithms = [simpleScoring, vowelBonusScoring, scrabbleScoring];

function scorerPrompt() {
  console.log(`Which scoring algorithm would you like to use?\n\n
0 - ${simpleScoring.name}: ${simpleScoring.description}\n
1 - ${vowelBonusScoring.name}: ${vowelBonusScoring.description}\n
2 - ${scrabbleScoring.name}: ${scrabbleScoring.description}\n`)
  let num = input.question("Enter 0, 1, or 2: ")
  if (num == 0) {
    return console.log(`Score for '${userWord}': ${simpleScoring.scoringFunction(userWord)}`)
  } else if (num == 1) {
    return console.log(`Score for '${userWord}': ${vowelBonusScoring.scoringFunction(userWord)}`)
  } else if (num ==2) {
    return console.log(`Score for '${userWord}':\n${scrabbleScoring.scoringFunction(userWord)}`)
  } else {

  }
}

function transform(object) {
  let newObject = {}
  
  for (item in object) {
    let turn = 0
    
    while (turn < object[item].length) {
      let newKey = object[item][turn]
      newKey = newKey.toLowerCase()
      newObject[`${newKey}`] = Number(item);
     
      turn++
    }
  }
  return newObject
};

let newPointStructure = transform(oldPointStructure);
newPointStructure[' '] = 0
//console.log(newPointStructure)
function runProgram() {
   initialPrompt();
   //console.log(vowelBonusScorer(initialPrompt()));
   scorerPrompt()
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

