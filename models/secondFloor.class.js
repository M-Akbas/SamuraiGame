class SecondFloor extends MovableObject{
  

    height = 100;
    width = 650;

    constructor(imagePath , x, y){
        super().loadImage(imagePath);
        this.y = y;
        this.x = x;
    }
}