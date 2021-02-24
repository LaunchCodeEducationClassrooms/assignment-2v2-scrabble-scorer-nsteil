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

function simpleScorer(word) {
  word = word.toUpperCase();

  	score = 0
 
	for (let i = 0; i < word.length; i++) {
 
		score++
 
	  }

  return score;
}

function vowelBonusScorer(word) {
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

function scrabbleScorer(word) {
	word = word.toLowerCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (letter in newPointStructure) {
          
		 if (letter == word[i] ) {
       console.log(newPointStructure[letter])
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

let simpleScore = {name:`Simple Score`,description:`Each letter is worth 1 point.`,scorerFunction:simpleScorer};

let vowelBonusScore = {name:`Bonus Vowels`,description:`Vowels are 3 pts, consonants are 1 pt.`,scorerFunction:vowelBonusScorer};

let scrabbleScore = {name:`Scrabble`,description:`The traditional scoring algorithm.`,scorerFunction:scrabbleScorer};

const scoringAlgorithms = [simpleScore, vowelBonusScore, scrabbleScore];

function scorerPrompt() {
  console.log(`Which scoring algorithm would you like to use?\n\n
0 - ${simpleScore.name}: ${simpleScore.description}\n
1 - ${vowelBonusScore.name}: ${vowelBonusScore.description}\n
2 - ${scrabbleScore.name}: ${scrabbleScore.description}\n`)
  let num = input.question("Enter 0, 1, or 2: ")
  if (num == 0) {
    return console.log(`Score for '${userWord}': ${simpleScore.scorerFunction(userWord)}`)
  } else if (num == 1) {
    return console.log(`Score for '${userWord}': ${vowelBonusScore.scorerFunction(userWord)}`)
  } else if (num ==2) {
    return console.log(`Score for '${userWord}':\n${scrabbleScore.scorerFunction(userWord)}`)
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

