


var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var secretwords = ["Gandalf", "Valinor", "Sauron", "Galadriel", "Balrog", "Gondor", "Rohan", "Moria", "Shire", "Baggins", "Gollum", "Frodo", "Orc", "Troll", "Dwarf", "Fellowship", "Aragorn", "Boromir", "Legolas",
"Merry", "Pippin", "Sam"];

var word;
var userguess;
var answerarray = [];
var remainingguesses=10;
var startvar;
var wins;
var losses;
var spaces;
var picture;
var remainingletters;
var newgame;


function chooseword (){
  word = secretwords[Math.floor(Math.random() * secretwords.length)].toLowerCase();
  // word = word.split("");
  remainingletters = word.length;
  document.getElementById('Letters').innerHTML = alphabet.join(" ").toUpperCase();

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
    remainingletters--;
    spaces.innerHTML = answerarray.join(" ").toUpperCase();
    //possibly create another for loop in here comparing guess to answerarry to weed out duplicates?

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

    losses++;
    return 3;

  }
   else if (remainingletters==0){

      wins++;
      return 2;
  } else {


    document.getElementById('gameStart').innerHTML= "Try to guess the word! You have " + remainingguesses + " guesses remaining!";


    return 1;
  }
};



function picture (){
  // word.toString();
  //I don't know why this doesn't return the correct image. It keeps saying it can't find the image through the filepath but I am pretty sure I did it right
  picture=0;
  if (word == "gandalf"){
    picture=document.getElementById('pic')
    picture.innerHTML= "<img src=\"../assets/images/gandalf.jpg\">";
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



function game () {


chooseword();
returnblanks();

newgame=0;
document.onkeyup = function (event){

    startvar= start();
    start();
    if (startvar==1){
    userguess=event.key;
    // console.log (answerarray);
    // console.log (word);
    //
    // console.log (userguess);
    // return event.key;


    compare();
    alphabetdisplay();



  }

    else if (startvar == 2){
      // somehow, within these 2 conditions, I think the answer to how to reset the game lies. I just could not for the life of me figure it document
      //I also have no idea where to even start in finding out why when you must press another key after the word is completed to show the gameover message

      document.getElementById('gameover').innerHTML="Congratulations! You guessed correctly, your word was " + word +". Please press any key to start again!";
      picture();
    }
    else {
      document.getElementById('gameover').innerHTML="Sorry, you have run out of guesses. Your word was " + word +". Please press any key to start again!";
    };

  };
};





console.log (remainingguesses);



window.onload=function(){
game();
console.log (answerarray);

console.log (userguess);
};













//       if (startvar==false){
//
//       }
//
// };
//
// };
