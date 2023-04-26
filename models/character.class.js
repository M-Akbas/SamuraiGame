class Character extends MovableObject {
  // Character extends classes from MovableObject
  speed = 5;
  y = 5;
  Img_Running = [
    "hero/sprites/run/tile000.png",
    "hero/sprites/run/tile001.png",
    "hero/sprites/run/tile002.png",
    "hero/sprites/run/tile003.png",
    "hero/sprites/run/tile004.png",
    "hero/sprites/run/tile005.png",
    "hero/sprites/run/tile006.png",
    "hero/sprites/run/tile007.png",
  ];

  Img_Jumping = [
    "hero/sprites/jump/tile000.png",
    "hero/sprites/jump/tile001.png",
    "hero/sprites/jump/tile000.png",
    "hero/sprites/jump/tile001.png",
    "hero/sprites/jump/tile000.png",
    "hero/sprites/jump/tile001.png",
    "hero/sprites/jump/tile000.png",
    "hero/sprites/jump/tile001.png",
  ];

  Img_Standing = [
    "hero/sprites/standing/tile000.png",
    "hero/sprites/standing/tile001.png",
    "hero/sprites/standing/tile002.png",
    "hero/sprites/standing/tile003.png",
    "hero/sprites/standing/tile000.png",
    "hero/sprites/standing/tile001.png",
    "hero/sprites/standing/tile002.png",
    "hero/sprites/standing/tile003.png",
  ];

  Img_Dead = [
    "hero/sprites/death/tile000.png",
    "hero/sprites/death/tile001.png",
    "hero/sprites/death/tile002.png",
    "hero/sprites/death/tile003.png",
    "hero/sprites/death/tile004.png",
    "hero/sprites/death/tile005.png",
    "hero/sprites/death/tile006.png",
    "hero/sprites/death/tile006.png",
  ];

  Img_TakeHit = [
    "hero/sprites/takeHit/tile000.png",
    "hero/sprites/takeHit/tile001.png",
    "hero/sprites/takeHit/tile002.png",
    "hero/sprites/takeHit/tile000.png",
    "hero/sprites/takeHit/tile001.png",
    "hero/sprites/takeHit/tile002.png",
    "hero/sprites/takeHit/tile000.png",
    "hero/sprites/takeHit/tile001.png",
  ];

  offset = {
    top: 130,
    left: 150,
    right: 150,
    bottom: 130
  };
  world;
  walking_sound = new Audio("audio/run/run.mp3");
  jumping_sound = new Audio("audio/jump/jump1.mp3");
  hurt1_sound = new Audio("audio/hurt/hurt1.mp3");
  hurt2_sound = new Audio("audio/hurt/hurt2.mp3");

  constructor() {
    super().loadImage("hero/sprites/standing/tile000.png");
    this.loadImages(this.Img_Running);
    this.loadImages(this.Img_Jumping);
    this.loadImages(this.Img_Standing);
    this.loadImages(this.Img_Dead);
    this.loadImages(this.Img_TakeHit);
    this.applyGravity();
    this.animate();
  }

  animationForChar(){
    this.playAnimation(this.Img_TakeHit);
    this.hurt2_sound.play();
  }
  
  thisX(){
    return this.x;
  }
  animate() {
    setInterval(() => {
      this.walking_sound.pause();
      if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;

        if (!this.world.keyboard.up && !this.isAboveGround()) {
          this.walking_sound.play();
        }
      }
    }, 1000 / 60);

    setInterval(() => {
      if (this.world.keyboard.left && this.x > 0) {
        this.moveLeft();
        this.otherDirection = true;

        if (!this.world.keyboard.up && !this.isAboveGround()) {
          this.walking_sound.play();
        }
      }

      if (this.world.keyboard.up && !this.isAboveGround()) {
        this.jumping_sound.play();
        this.jump();
      }
      this.world.camera_x = -this.x;
    }, 1000 / 60);

    setInterval(() => {
      if (this.isAboveGround()) {
        this.playAnimation(this.Img_Jumping);
      } 
      else if (this.world.keyboard.right || this.world.keyboard.left) {
        // run animation
        this.playAnimation(this.Img_Running);
      } 
      else if (this.isDead()) {
        this.playAnimation(this.Img_Dead);
      } 
      else {
        this.playAnimation(this.Img_Standing);
      }
    }, 80);
  }
}
