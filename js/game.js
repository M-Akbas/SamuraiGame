let canvas;
let character = new Image();


function init(){
    canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d');

    character.src = "sprites/Samurai/Attack_1.png";

    setTimeout(function(){
        ctx.drawImage(character, 20, 20, 50, 150);
    }, 2000)
    
}