class Fence extends MovableObject {

    height = 50; 
    width = 100; 

   

    constructor(imagePath , x, y){
        super().loadImage(imagePath);
        this.y = y;
        this.x = x;
    }
    
}