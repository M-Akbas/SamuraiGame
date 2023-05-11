let canvas;
let world;

function gameStart(){
    let button = document.getElementById("startButton");
    let overlay = document.getElementById("overlay");
    let enemieImg = document.getElementById("E-Img");
    let heroImg = document.getElementById("H-Img");
    enemieImg.style.display = "none";
    heroImg.style.display = "none";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
    button.style.display = "none";
    
    init();
    
    
}

let keyboard = new Keyboard();
function init(){
    canvas = document.getElementById('canvas')
    world = new World(canvas, keyboard);
    

    console.log('My Character is' , world.character);
}

window.addEventListener('keydown', (event) => {
    if(event.keyCode == 39){
        keyboard.right = true;
    }
    if(event.keyCode == 37){
        keyboard.left = true;
    }
    if(event.keyCode == 38){
        keyboard.up = true;
    }
    if(event.keyCode == 40){
        keyboard.down = true;
    }
    if(event.keyCode == 32){
        keyboard.space = true;
    }
    if(event.keyCode == 68){
        keyboard.D = true;
    }
})

window.addEventListener('keyup', (event) => {
    if(event.keyCode == 39){
        keyboard.right = false;
    }
    if(event.keyCode == 37){
        keyboard.left = false;
    }
    if(event.keyCode == 38){
        keyboard.up = false;
    }
    if(event.keyCode == 40){
        keyboard.down = false;
    }
    if(event.keyCode == 32){
        keyboard.space = false;
    }
    if(event.keyCode == 68){
        keyboard.D = false;
    }
    
})