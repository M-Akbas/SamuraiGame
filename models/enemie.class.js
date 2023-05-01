class Enemie extends MovableObject {
  // Enemie extends classes from MovableObject

  y = 222;
  width = 210;
  height = 200;
  energy = 100;
  isFighting = true;
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
  Img_Dead = [
    "enemies/skelleton/dead/tile000.png",
    "enemies/skelleton/dead/tile001.png",
    "enemies/skelleton/dead/tile002.png",
    "enemies/skelleton/dead/tile003.png",
  ];
  Img_Hurt = [
    "enemies/skelleton/hurt/tile000.png",
    "enemies/skelleton/hurt/tile001.png",
  ];

  offset = {
    top: 100,
    left: 50,
    right: 50,
    bottom: 0,
  };
  constructor(energy) {
    super().loadImage("enemies/skelleton/walk/tile001.png");
    this.loadImages(this.Img_Running);
    this.loadImages(this.Img_Attacking);
    this.loadImages(this.Img_Dead);
    this.loadImages(this.Img_Hurt);
    this.x = 400 + Math.random() * 600;
    this.speed = 0.45 + Math.random() * 0.25;
    this.energy = energy; // set the energy value here
    this.animate();
  }
  
  deadAnimation() {
    this.playAnimation(this.Img_Dead);
    let lastImage = this.Img_Dead[3];
    if(lastImage){
      console.log("dead");
    }
    
  }
  

  animationForEnemie(){
    this.playAnimation(this.Img_Attacking);
    
  }
  hitDamage(damage) {
    this.energy -= damage;
    if (this.energy < 0) {
      this.energy = 0;
    }
  }
  
 


  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
    setInterval(() => {
      if(this.energy == 0){
        this.deadAnimation();
      } else {
        this.playAnimation(this.Img_Running);

      }
    }, 200);
  }

  hurtAnimation(){
    this.playAnimation(this.Img_Hurt);
  }
}
