class ThrowableObject extends MovableObject {
  constructor(x ,y) {
    super().loadImage("hero/sprites/shuriken.png");
    this.x = x;
    this.y = y;
    this.trow();
    
    this.height = 30;
    this.width = 30;
  }

  trow() {
   
    this.speedY = 10;
    this.applyGravity(); 
    setInterval(() => {
        
        this.x += 10;
       
    }, 50);
  }
}
