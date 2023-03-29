let canvas;
let character = new Image();


function init(){
    canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d');

    character.src = "hero/sprites/standing/tile000.png";

    setTimeout(function(){
        ctx.drawImage(character, 20, 20, 50, 150);
    }, 2000)
    
}