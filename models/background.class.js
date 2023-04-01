class Background extends MovableObject{ 
    
    width = 480; // width ist height? 
    height = 720; // height ist width? 


    constructor(imagePath , x, y){
        super().loadImage(imagePath);
        this.y = y;
        this.x = x;
    }
}