class Lamps extends MovableObject {

    height = 120; 
    width = 50; 

   

    constructor(imagePath , x, y){
        super().loadImage(imagePath);
        this.y = y;
        this.x = x;
    }
    
}