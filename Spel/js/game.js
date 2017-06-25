// Create an array of words
var words = [
  "Albania",
  "Andorra",
  "Armenia",
  "Austria",
  "Azerbaijan",
  "Belarus",
  "Belgium",
  "Bosnia and Herzegovina",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Kazakhstan",
  "Kosovo",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "Ukraine",
  "United Kingdom",
  "Vatican"
];

// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];
// Set up the answer array
var answerArray = [];
var countryName;
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
document.getElementById('countryName').innerHTML = answerArray + "<span>" + answerArray.length + " characters country name with first letter capital!" + "</span>";

var remainingLetters = word.length;
while (remainingLetters > 0) {
  var guess = prompt("Guess a letter or click Cancel to stop playing.");

  if (guess === null ) {

    break;
  } else if (guess.length !== 1  ) {
    alert("Please enter a single letter.");
  } else {
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
       console.log(answerArray[j]);


      }
    }
  }

  document.getElementById('countryName').innerHTML = answerArray;
}
document.getElementById('congratesMsg').innerHTML = " You guessed the country`s name! If you want to play again Refresh Page!";
