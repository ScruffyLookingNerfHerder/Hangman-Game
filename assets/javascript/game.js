
var Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(Alphabet.length);

var SecretWords = ["Gandalf", "Valinor", "Sauron", "Galadriel", "Balrog", "Gondor", "Rohan", "Moria", "Shire", "Baggins", "Gollum", "Frodo", "Orc", "Troll", "Dwarf", "Fellowship", "Aragorn", "Boromir", "Legolas",
"Merry", "Pippin", "Sam"];
console.log(SecretWords.length);

var Word=0;
var Userguess;
var answerArray;
var lives;





function play (){
  Word = SecretWords[Math.floor(Math.random() * SecretWords.length)].toLowerCase();
  Word = Word.split("");
  document.getElementById('Letters').innerHTML=Alphabet.join(" ").toUpperCase();
}



   answerArray = [];
  document.onkeyup = function(event){
    if (Word===0){ //pick only one word to start the game
    play();

     lives= 10;
    document.getElementById('gameStart').innerHTML="Try to guess the word!";


    for (var i=0; i < Word.length; i++){
      answerArray[i] = "_";
    }



    if (Word != answerArray) {
      var spaces = document.getElementById('wordspaces');
      spaces.innerHTML = answerArray.join(" ");



      document.onkeyup = function  (event){
        Userguess=event.key; //log user's letter guess

        // console.log(Userguess);
        for (var h=0; h < Word.length; h++){
          if (Word[h] === Userguess){
            answerArray[h] = (Userguess);
            spaces.innerHTML = answerArray.join(" ").toUpperCase();
            // console.log (answerArray);

              }
            };




            for (var j=0; j < Alphabet.length; j++){
              if (Alphabet[j] === Userguess){
                Alphabet[j] = ("__");
                document.getElementById('Letters').innerHTML = Alphabet.join(" ").toUpperCase();

              };// ends Alphabet if statement
            }; //ends Alphabet for loop




        } //ends on key up
        console.log (Userguess);
        console.log (Word);

        // console.log (answerArray);


        }     if(Word === answerArray)  {
           // why doesn't this work? This SHOULD compare Word and answerArray, and if they contain the same values the code should run. Console logging both shows them containing the same values, however the code below does not run.
           document.getElementById('gameStart').innerHTML= "Word guessed!";
           document.getElementById('gameover').innerHTML= "Congratulations! You are correct. Your word was " + Word + ". Please press any key to start again";
           Word = (0);
          // console.log (Word);
        };

  }; //ends the original if statement setting Word to 0

    // else{
    //   //use for reset(?)
    // }
  };//ends the on key up function that starts the whole game
