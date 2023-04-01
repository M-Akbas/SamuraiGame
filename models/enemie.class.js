class Enemie extends MovableObject { // Enemie extends classes from MovableObject
    
    y = 230;
    width = 220;
    height = 200;
    
    constructor(){
        super().loadImage('enemies/skelleton/walk/tile000.png');

        this.x = 200 + Math.random() * 500;
    }
   
}