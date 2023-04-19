let canvas;
let world;

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
    
})