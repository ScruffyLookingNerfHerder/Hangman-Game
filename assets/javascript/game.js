var allletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var secretwords = ["Gandalf", "Valinor", "Sauron", "Galadriel", "Balrog", "Gondor", "Rohan", "Moria", "Shire", "Baggins", "Gollum", "Frodo", "Orc", "Troll", "Dwarf", "Fellowship", "Aragorn", "Boromir", "Legolas",
  "Merry", "Pippin", "Sam"
];

var word;
var userguess;
var answerarray = [];
var remainingguesses = 10;
var startvar;
var wins;
var losses;
var spaces = document.getElementById('wordspaces');
var picture = document.getElementById('pic');
var remainingletters;
var newgame;
var currentalphabet;
var alphabetspaces = document.getElementById('Letters');



function chooseword() {
  word = "";
  remainingletters = [];
  word = secretwords[Math.floor(Math.random() * secretwords.length)].toLowerCase();
  remainingletters = word.length;
  console.log(word);

};

function initalphabet() {
  alphabetspaces.innerHTML= "";
  alphabetspaces.innerHTML = currentalphabet.join(" ").toUpperCase();
}

function returnblanks() {

  for (var i = 0; i < word.length; i++) {
    answerarray[i] = "_";
    spaces.innerHTML = answerarray.join(" ");
  }
};

//FIGURE OUT DUPLICATES (user guesses 'P' twice)
function compare() {

  for (var h = 0; h < word.length; h++) {
    if (word[h] === userguess) {
      if (userguess === answerarray[h]){
        alert("You already guessed " + userguess);
        return;
      }
      answerarray[h] = (userguess);
      remainingletters--;
      spaces.innerHTML = answerarray.join(" ").toUpperCase();

      //possibly create another for loop in here comparing guess to answerarry to weed out duplicates?
    }
  }

  for (var k = 0; k < currentalphabet.length; k++){
    if (currentalphabet[k] === userguess) {
    currentalphabet[k] = ("__");
    alphabetspaces.innerHTML = currentalphabet.join(" ").toUpperCase();
  }
  }
};



function start() {
  if (remainingguesses === 0) {
    losses++;
    return 3;


  } else if (remainingletters ===0) {
    wins++;
    return 2;

  } else {
    document.getElementById('gameStart').innerHTML = "Try to guess the word! You have " + remainingguesses + " guesses remaining!";
    return 1;

  }
};


function pictures() {
  picture.innerHTML = ""
  if (word == "gandalf") {
    picture.innerHTML = "<img src=\"./assets/images/gandalf.jpg\">";
  }
  if (word == "valinor") {
    picture.innerHTML = "<img src=\"./assets/images/valinor.jpg\">";
  }
  if (word == "sauron") {
    picture.innerHTML = "<img src=\"./assets/images/sauron.jpg\">";
  }
  if (word == "galadriel") {
    picture.innerHTML = "<img src=\"./assets/images/galadriel.jpg\">";
  }
  if (word == "balrog") {
    picture.innerHTML = "<img src=\"./assets/images/balrog.jpg\">";
  }
  if (word == "gondor") {
    picture.innerHTML = "<img src=\"./assets/images/gondor.png\">";
  }
  if (word == "rohan") {
    picture.innerHTML = "<img src=\"./assets/images/rohan.jpg\">";
  }
  if (word == "moria") {
    picture.innerHTML = "<img src=\"./assets/images/moria.jpg\">";
  }
  if (word == "shire") {
    picture.innerHTML = "<img src=\"./assets/images/shire.jpg\">";
  }
  if (word == "baggins") {
    picture.innerHTML = "<img src=\"./assets/images/baggins.jpg\">";
  }
  if (word == "gollum") {
    picture.innerHTML = "<img src=\"./assets/images/gollum.jpg\">";
  }
  if (word == "frodo") {
    picture.innerHTML = "<img src=\"./assets/images/frodo.jpg\">";
  }
  if (word == "orc") {
    picture.innerHTML = "<img src=\"./assets/images/orc.jpg\">";
  }
  if (word == "troll") {
    picture.innerHTML = "<img src=\"./assets/images/troll.jpg\">";
  }
  if (word == "dwarf") {
    picture.innerHTML = "<img src=\"./assets/images/dwarf.jpg\">";
  }
  if (word == "fellowship") {
    picture.innerHTML = "<img src=\"./assets/images/fellowship.jpg\">";

  }
  if (word == "aragorn") {

    picture.innerHTML = "<img src=\"./assets/images/aragorn.jpg\">";

  }
  if (word == "boromir") {
    picture.innerHTML = "<img src=\"./assets/images/boromir.jpg\">";

  }
  if (word == "legolas") {

    picture.innerHTML = "<img src=\"./assets/images/legolas.jpg\">";
  }
  if (word == "merry") {

    picture.innerHTML = "<img src=\"./assets/images/merry.jpg\">";

  }
  if (word == "pippin") {

    picture.innerHTML = "<img src=\"./assets/images/pippin.jpg\">";

  }
  if (word == "sam") {
    picture.innerHTML = "<img src=\"./assets/images/sam.jpg\">";
  }
}



function gameinit() {
  picture.innerHTML="";
  console.log("new game");
  remainingguesses = 10;
  currentalphabet = allletters.slice();
  word = "";
  answerarray =[];
  spaces.innerHTML = "";
  initalphabet();
  chooseword();
  returnblanks();
}


function game() {
  gameinit();
  startvar = start();
  document.onkeyup = function(event) {
    startvar = start();
    if (startvar == 1) {
      remainingguesses--;
      userguess = event.key;
      compare();
      console.log(answerarray);
      console.log(remainingletters)
      if(remainingletters === 0){
        document.getElementById('gameover').innerHTML = "Congratulations! You guessed correctly, your word was " + word + ". Please press any key to start again!";
        pictures();
        gamestart();
      }
      start();
    }
    //end conditions
    else if (startvar == 3) {
      document.getElementById('gameover').innerHTML = "Sorry, you have run out of guesses. Your word was " + word + ". Please press any key to start again!";
      gamestart();
    //if new game
    } else {

      start();
      gamestart();

    }

  };
};


//starts the game (press any key listener)
function gamestart() {
  document.onkeyup = function(event) {
    game();
  }
}


// window.onload = function() {
game();


// };
