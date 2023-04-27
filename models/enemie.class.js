class Enemie extends MovableObject {
  // Enemie extends classes from MovableObject

  y = 222;
  width = 210;
  height = 200;
  Img_Running = [
    "enemies/skelleton/walk/tile006.png",
    "enemies/skelleton/walk/tile005.png",
    "enemies/skelleton/walk/tile004.png",
    "enemies/skelleton/walk/tile003.png",
    "enemies/skelleton/walk/tile002.png",
    "enemies/skelleton/walk/tile001.png",
    "enemies/skelleton/walk/tile000.png",
  ];

  Img_Attacking = [
    "enemies/skelleton/attack/tile000.png",
    "enemies/skelleton/attack/tile001.png",
    "enemies/skelleton/attack/tile002.png",
    "enemies/skelleton/attack/tile003.png",
    "enemies/skelleton/attack2/tile000.png",
    "enemies/skelleton/attack2/tile001.png",
    "enemies/skelleton/attack2/tile002.png",
    "enemies/skelleton/attack2/tile003.png",

  ];
  offset = {
    top: 100,
    left: 50,
    right: 50,
    bottom: 0,
  };
  constructor() {
    super().loadImage("enemies/skelleton/walk/tile001.png");
    this.loadImages(this.Img_Running);
    this.loadImages(this.Img_Attacking);
    this.x = 400 + Math.random() * 600;
    this.speed = 0.45 + Math.random() * 0.25;
    this.animate();
    
   
    
    
  }
  

  animationForEnemie(){
    this.playAnimation(this.Img_Attacking);
    
  }
  
 


  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
    setInterval(() => {
      this.playAnimation(this.Img_Running);
    }, 200);
  }
}
