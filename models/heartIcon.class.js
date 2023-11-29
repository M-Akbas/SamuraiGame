class HeartIcon extends MovableObject {
    x = -400;
    y = 100;
    height = 60;
    width = 80;

    constructor(imagePath , x, y){
        super().loadImage(imagePath);
        this.y = y;
        this.x = x;
    }
}