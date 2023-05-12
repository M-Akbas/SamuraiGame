class Shuriken extends MovableObject {
    x = -400;
    y = 300;
    height = 50;
    width = 70;

    constructor(imagePath , x, y){
        super().loadImage(imagePath);
        this.y = y;
        this.x = x;
    }
}