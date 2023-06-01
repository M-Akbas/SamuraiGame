class ThrowableObject extends MovableObject {
  constructor(x ,y) {
    super().loadImage("hero/sprites/shuriken.png");
    this.x = x;
    this.y = y;
    
   
    this.height = 40;
    this.width = 40;
  }

  throw(direction) {
    if(direction === "right"){

      this.speedY = 10;
      this.applyGravity(); 
      setInterval(() => {
          
          this.x += 15;
         
      }, 50);
    } else {
      this.speedY = 10;
      this.applyGravity(); 
      setInterval(() => {
          
          this.x -= 15;
         
      }, 50);
    }
  }
}
