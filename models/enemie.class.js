class Enemie extends MovableObject { // Enemie extends classes from MovableObject
    
    y= 218;
    width = 210;
    height = 200;
    
    constructor(){
        super().loadImage('enemies/skelleton/walk/tile000.png');

        this.x = 200 + Math.random() * 500;
        this.animate();
    }

    animate(){
        setInterval(() =>{
            this.x -= 0.15;
        }, 1000/ 60);
    }
   
}