class Floor extends MovableObject{

    

    height = 180;
    width = 800;

    constructor(imagePath , x, y){
        super().loadImage(imagePath);
        this.y = y;
        this.x = x;
    }
    
}