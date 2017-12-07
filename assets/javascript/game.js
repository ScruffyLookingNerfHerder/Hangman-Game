


var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var secretwords = ["Gandalf", "Valinor", "Sauron", "Galadriel", "Balrog", "Gondor", "Rohan", "Moria", "Shire", "Baggins", "Gollum", "Frodo", "Orc", "Troll", "Dwarf", "Fellowship", "Aragorn", "Boromir", "Legolas",
"Merry", "Pippin", "Sam"];

var word;
var userguess;
var answerarray = [];
var remainingguesses;
var startvar;
var wins;
var losses;
var spaces;
var picture;


function chooseword (){
  word = secretwords[Math.floor(Math.random() * secretwords.length)].toLowerCase();
  word = word.split("");

};

function returnblanks (){
for (var i=0; i < word.length; i++){
  answerarray[i] = "_";
  spaces = document.getElementById('wordspaces');
  spaces.innerHTML = answerarray.join(" ");
}
};

function compare () {
for (var h=0; h < word.length; h++){
  if (word[h] === userguess){
    answerarray[h] = (userguess);
    spaces.innerHTML = answerarray.join(" ").toUpperCase();

      }
    }
};

function alphabetdisplay (){
for (var j=0; j < alphabet.length; j++){
  if (alphabet[j] === userguess){
    alphabet[j] = ("__");
    document.getElementById('Letters').innerHTML = alphabet.join(" ").toUpperCase();

  };// ends Alphabet if statement
}; //ends Alphabet for loop
};

function start (){
  remainingguesses = 10;
  if (remainingguesses==0){
    document.getElementById('gameover').innerHTML="Sorry, you have run out of guesses. Your word was " + word +". Please press any key to start again!";
    losses++;
    return false;

  }
   else if (word===answerarray){
      document.getElementById('gameover').innerHTML="Congratulations! You guessed correctly, your word was " + word +". Please press any key to start again!";
      wins++;
      return false;
  } else {
    chooseword();
    returnblanks();
    alphabetdisplay();
    document.getElementById('gameStart').innerHTML= "Try to guess the word! You have " + remainingguesses + " guesses remaining!";
    document.getElementById('Letters').innerHTML = alphabet.join(" ").toUpperCase();

    return true;
  }
};

function picture (){
  word.toString();
  picture=0;
  if (word == "gandalf"){
    picture=document.getElementById('pic')
    picture.innerHTML= "<img src=\"../images/gandalf.jpg\">";
  }
  if (word == "valinor"){
    picture=document.getElementById('pic')
    picture.innerHTML= "<img src=\"../images/valinor.jpg\">";
  }
  if (word == "sauron"){
    picture=document.getElementById('pic')
    picture.innerHTML= "<img src=\"../images/sauron.jpg\">";
  }
  if (word == "galadriel"){
    picture=document.getElementById('pic')
    picture.innerHTML= "<img src=\"../images/galadriel.jpg\">";
  }
  if (word == "balrog"){
    picture=document.getElementById('pic')
    picture.innerHTML= "<img src=\"../images/balrog.jpg\">";
  }
  if (word == "gondor"){
    picture=document.getElementById('pic')
    picture.innerHTML= "<img src=\"../images/gondor.png\">";
  }
  if (word == "rohan"){
    picture=document.getElementById('pic')
    picture.innerHTML= "<img src=\"../images/rohan.jpg\">";
  }
  if (word == "moria"){
    picture=document.getElementById('pic')
    picture.innerHTML= "<img src=\"../images/moria.jpg\">";
  }
  if (word == "shire"){
    picture=document.getElementById('pic')
    picture.innerHTML= "<img src=\"../images/shire.jpg\">";
  }
  if (word == "baggins"){
    picture=document.getElementById('pic')
    picture.innerHTML= "<img src=\"../images/baggins.jpg\">";
  }
  if (word == "gollum"){
    picture=document.getElementById('pic')
    picture.innerHTML= "<img src=\"../images/gollum.jpg\">";
  }
  if (word == "frodo"){
    picture=document.getElementById('pic')
    picture.innerHTML= "<img src=\"../images/frodo.jpg\">";
  }
  if (word == "orc"){
    picture=document.getElementById('pic')
    picture.innerHTML= "<img src=\"../images/orc.jpg\">";
  }
  if (word == "troll"){
    picture=document.getElementById('pic')
    picture.innerHTML= "<img src=\"../images/troll.jpg\">";
  }
  if (word == "dwarf"){
    picture=document.getElementById('pic')
    picture.innerHTML= "<img src=\"../images/dwarf.jpg\">";
  }
  if (word == "fellowship"){
    picture=document.getElementById('pic')
    picture.innerHTML= "<img src=\"../images/fellowship.jpg\">";

  }
  if (word == "aragorn"){
    picture=document.getElementById('pic')
    picture.innerHTML= "<img src=\"../images/aragorn.jpg\">";

  }
  if (word == "boromir"){
    picture=document.getElementById('pic')
    picture.innerHTML= "<img src=\"../images/boromir.jpg\">";

  }
  if (word == "legolas"){
    picture=document.getElementById('pic')
    picture.innerHTML= "<img src=\"../images/legolas.jpg\">";
  }
  if (word == "merry"){
    picture=document.getElementById('pic')
    picture.innerHTML= "<img src=\"../images/merry.jpg\">";

  }
  if (word == "pippin"){
    picture=document.getElementById('pic')
    picture.innerHTML= "<img src=\"../images/pippin.jpg\">";

  }
  if (word == "sam"){
    picture=document.getElementById('pic')
    picture.innerHTML= "<img src=\"../images/sam.jpg\">";

  }
}





document.onkeyup = function (event){
  startvar= start();
  if (startvar=true){
  userguess=event.key;
  compare();
  console.log(userguess);
  console.log(word);
  };
};






//       if (startvar==false){
//
//       }
//
// };
//
// };
