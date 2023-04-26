class HeartIcon extends MovableObject {
    x = -400;
    y = 100;
    height = 50;
    width = 100;

    constructor(imagePath , x, y){
        super().loadImage(imagePath);
        this.y = y;
        this.x = x;
    }
}