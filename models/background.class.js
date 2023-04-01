class Background extends MovableObject{ 
    
    width = 720; // width ist height? 
    height = 480; // height ist width? 


    constructor(imagePath , x, y){
        super().loadImage(imagePath);
        this.y = y;
        this.x = x;
    }
}