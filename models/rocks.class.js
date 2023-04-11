class Rock extends MovableObject {

    height = 40; 
    width = 70; 

   

    constructor(imagePath , x, y){
        super().loadImage(imagePath);
        this.y = y;
        this.x = x;
    }
    
}