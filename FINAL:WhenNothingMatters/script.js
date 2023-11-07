let 
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_HEIGHT = canvas.height = 300;
const CANVAS_WIDTH = canvas.width = 300;

const textImage = new Image();
textImage.src = 'font.png';
const spriteWidth = 48.5;
const spriteHeight = 65;

const a = [0, 65];

function drawLetter(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(50,50,100,100);
    //ctx.drawImage(textImage, 0, 0);
    ctx.drawImage(textImage, a[0], 0, spriteWidth, 
        spriteHeight, 0, 0, spriteWidth, spriteHeight);
    
    requestAnimationFrame(drawLetter);
};
drawLetter();