/*function getText(){
  var text1 = document.getElementById("textbox");
  return text1;
}*/

/*function getValue() {
  let textbox = document.getElementById("textbox");
  return textbox;
}*/

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_HEIGHT = canvas.height = 300;
const CANVAS_WIDTH = canvas.width = 300;

const textImage = new Image();
textImage.src = 'font.png';
const spriteWidth = 48.5;
const spriteHeight = 65;

function chooseLoc(letter)
{
    switch(letter) {
        
        case "a" :
          return [0, 0]
          break;
        case "b" :
          return [48.5, 0]
          break;
        case "c" :
          return [100, 0]
          break;
        case "d" :
          return [150, 0]
          break;
        case "e" :
          return [200, 0]
          break;
        case "f" :
          return [250, 0]
          break;
        case "g" :
          return [295, 0]
          break;
        case "h" :
          return [350, 0]
          break;
        case "i" :
          return [390, 0]
          break;
        case "j" :
          return [430, 0]
          break;
        case "k" :
          return [475, 0]
          break;
        case "l" :
          return [525, 0]
          break;
        case "m" :
          return [575, 0]
          break;
        case "n" :
          return [635, 0]
          break;
        case "o" :
          return [685, 0]
          break;
        case "p" :
          return [735, 0]
          break;
        case "q" :
          return [785, 0]
          break;
        case "r" :
          return [830, 0]
          break;
        case "s" :
          return [880, 0]
          break;
        case "t" :
          return [930, 0]
          break;
        case "u" :
          return [0, 65]
          break;
        case "v" :
          return [45, 65]
          break;
        case "w" :
          return [99, 65]
          break;
        case "x" :
          return [158, 65]
          break;
        case "y" :
          return [210, 65]
          break;
        case "z" :
          return [260, 65]
          break;
    }
}

var totalLetters = 0
var letterSpacing = 0
//var letterArray = []
//var tempLetter = getValue();




var letterLoc;
var wordArray = [];

const multiLetter = "fefg"
wordArray = multiLetter.split("");

for ( i = 0 ; i < wordArray.length; i ++){
  letterLoc = chooseLoc(wordArray[i]);
  drawLetter(letterLoc);
  requestAnimationFrame(drawLetter);
}


//let letterLoc = chooseLoc("h");
//drawLetter()

function drawLetter(){
    if(totalLetters === 0){
      //ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(textImage, letterLoc[0], letterLoc[1], spriteWidth, 
        spriteHeight, letterSpacing, 0, spriteWidth, spriteHeight);

        totalLetters++;
    }

    else {
      letterSpacing = (i-1) * 50;
      ctx.drawImage(textImage, letterLoc[0], letterLoc[1], spriteWidth, 
        spriteHeight, letterSpacing, 0, spriteWidth, spriteHeight,)

    }
    
};












