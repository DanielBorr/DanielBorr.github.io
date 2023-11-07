//let text = documentlgetElementById('textbox').value;

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_HEIGHT = canvas.height = 300;
const CANVAS_WIDTH = canvas.width = 300;

const textImage = new Image();
textImage.src = 'font.png';
const spriteWidth = 48.5;
const spriteHeight = 65;

const a = [0, 0];
const b = [48.5, 0];
const c = [100, 0];
const d = [150, 0];
const e = [200, 0];
const f = [250, 0];
const g = [295, 0];
const h = [350, 0];
const i = [390, 0];
const j = [430, 0];
const k = [475, 0];
const l = [525, 0];
const m = [575, 0];
const n = [635, 0];
const o = [685, 0];
const p = [735, 0];
const q = [785, 0];
const r = [830, 0];
const s = [880, 0];
const t = [930, 0];
const u = [0, 65];
const v = [0, 65];
const w = [0, 65];
const x = [0, 65];
const y = [0, 65];
const z = [0, 65];

function drawLetter(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(50,50,100,100);
    //ctx.drawImage(textImage, 0, 0);
    ctx.drawImage(textImage, u[0], u[1], spriteWidth, 
        spriteHeight, 0, 0, spriteWidth, spriteHeight);
    
    requestAnimationFrame(drawLetter);
};
drawLetter();











