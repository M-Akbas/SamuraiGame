class Endboss extends MovableObject {
  height = 220;
  width = 210;
  y = 200;
  speed = 0.5;
  energy = 250;
  isFighting = true;

  
  Img_Running = [
    "EndBoss/walk/tile001.png",
    "EndBoss/walk/tile002.png",
    "EndBoss/walk/tile003.png",
    "EndBoss/walk/tile004.png",
    "EndBoss/walk/tile005.png",
    "EndBoss/walk/tile006.png",
    "EndBoss/walk/tile007.png",
    "EndBoss/walk/tile008.png",
  ];


  Img_Attack = [
    "EndBoss/attack/tile000.png",
    "EndBoss/attack/tile001.png",
    "EndBoss/attack/tile002.png",
    "EndBoss/attack/tile003.png",
    "EndBoss/attack/tile004.png",
    "EndBoss/attack/tile000.png",
    "EndBoss/attack/tile001.png",
    "EndBoss/attack/tile002.png",
  ];


  Img_Dead = [
    "EndBoss/dead/tile000.png",
    "EndBoss/dead/tile001.png",
    "EndBoss/dead/tile002.png",
    "EndBoss/dead/tile003.png",
    "EndBoss/dead/tile004.png",
    "EndBoss/dead/tile005.png",
  ];


  Img_Hurt = [
    "EndBoss/hurt/tile000.png",
    "enemies/skelleton/hurt/pngwing.com (1) Kopie 2.png",
    "EndBoss/hurt/tile001.png",
    "enemies/skelleton/hurt/pngwing.com (1).png",
    "EndBoss/hurt/tile002.png",
    "enemies/skelleton/hurt/pngwing.com (1) Kopie.png",
  ];

  Img_CompletyDead = ["EndBoss/dead/tile000.png", "EndBoss/dead/tile000.png"];


  offset = {
    top: 100,
    left: 50,
    right: 50,
    bottom: 0,
  };


  constructor() {
    super();
    this.loadImage(this.Img_Running[0]);
    this.loadImages(this.Img_Running);
    this.loadImages(this.Img_Attack);
    this.loadImages(this.Img_Dead);
    this.loadImages(this.Img_Hurt);
    this.loadImages(this.Img_CompletyDead);
    this.x = 1600;
    this.animate();
  }


  /**
   * Returns the x-coordinate of the object.
   * @returns {number} The x-coordinate.
   */
  thisX() {
    return this.x;
  }


  /**
   * Reduces the energy of the object by the specified damage amount.
   * @param {number} damage - The amount of damage to be inflicted.
   */
  hitDamage(damage) {
    this.energy -= damage;
    if (this.energy < 0) {
      this.energy = 0;
    }
  }


  /**
   * Initiates the animation loop for the object.
   */
  animate() {
    setInterval(() => {
      this.moveLeft(this.energy);
    }, 1000 / 60);
    setInterval(() => {
      if (this.energy == 0) {
        this.deadAnimation();
      } else {
        this.playAnimation(this.Img_Running);
      }
    }, 120);
  }


  /**
   * Initiates the attack animation for the object.
   */
  attackAnimation() {
    this.playAnimation(this.Img_Attack);
  }


  /**
   * Initiates the death animation for the object.
   */
  deadAnimation() {
    this.playAnimation(this.Img_Dead);
    let lastImage = this.Img_Dead[5];
    if (lastImage) {
      this.playAnimation(this.Img_CompletyDead);
    }
  }


  /**
   * Initiates the hurt animation for the object.
   */
  hurtAnimation() {
    this.playAnimation(this.Img_Hurt);
  }
}
