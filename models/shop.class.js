class Shop extends MovableObject{

    

    height = 180;
    width = 200;

    constructor(imagePath , x, y){
        super().loadImage(imagePath);
        this.y = y;
        this.x = x;
    }
    
}
