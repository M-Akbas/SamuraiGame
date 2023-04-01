class Enemie extends MovableObject { // Enemie extends classes from MovableObject
   
    constructor(){
        super().loadImage('enemies/skelleton/walk/tile000.png');

        this.x = 200 + Math.random() * 500;
    }
   
}