let text = documentlgetElementById('textbox').value;

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_HEIGHT = canvas.height = 300;
const CANVAS_WIDTH = canvas.width = 300;

const textImage = new Image();
textImage.src = 'font.png';
const spriteWidth = 48.5;
const spriteHeight = 65;

const letterSheet = [
    {
        letter : a,
        loc : [0, 0],
    },
    {
        letter : b,
        loc : [48.5, 0],
    },
    {
        letter : c,
        loc : [100, 0],
    },
    {
        letter : d,
        loc : [150, 0],
    },
    {
        letter : e,
        loc : [200, 0],
    },
    {
        letter : f,
        loc : [250, 0],
    },
    {
        letter : g,
        loc : [295, 0],
    },
    {
        letter : h,
        loc : [350, 0],
    },
    {
        letter : i,
        loc : [390, 0],
    },
    {
        letter : j,
        loc : [430, 0],
    },
    {
        letter : k,
        loc : [475, 0],
    },
    {
        letter : l,
        loc : [525, 0],
    },
    {
        letter : m,
        loc : [575, 0],
    },
    {
        letter : n,
        loc : [635, 0],
    },
    {
         letter : o,
         loc : [685, 0],
    },
    {
        letter : p,
        loc : [735, 0],
    },
    {
        letter : q,
        loc : [785, 0],
    },
    {
        letter : r,
        loc : [830, 0],
    },
    {
        letter : s,
        loc : [880, 0],
    },
    {
        letter : t,
        loc : [930, 0],
    },
    {
        letter : u,
        loc : [0, 65],
    },
    {
        letter : v,
        loc : [45, 65],
    },
    {
        letter : w,
        loc : [99, 65],
    },
    {
        letter : x,
        loc : [158, 65],
    },
    {
        letter : y,
        loc : [210, 65],
    },
    {
        letter : z,
        loc : [260, 65],
    }
];


function drawLetter(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(50,50,100,100);
    //ctx.drawImage(textImage, 0, 0);
    ctx.drawImage(textImage, z[0], z[1], spriteWidth, 
        spriteHeight, 0, 0, spriteWidth, spriteHeight);
    
    requestAnimationFrame(drawLetter);
};
drawLetter();











