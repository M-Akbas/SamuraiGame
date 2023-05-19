class Character extends MovableObject {
  // Character extends classes from MovableObject
  speed = 5;
  y = 5;
  energy = 1600;
  swordSounds = [
    new Audio("audio/hits/hit1.mp3"),
    new Audio("audio/hits/hit2.mp3"),
    new Audio("audio/hits/hit3.mp3")
  ];
  
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
  Img_CompletlyDead = [
    "hero/sprites/death/tile006.png",
    "hero/sprites/death/tile006.png",
    "hero/sprites/death/tile006.png",
    "hero/sprites/death/tile006.png",
    "hero/sprites/death/tile006.png",
    "hero/sprites/death/tile006.png",
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

  Img_Attack = [
    "hero/sprites/attack/tile000.png",
    "hero/sprites/attack/tile001.png",
    "hero/sprites/attack/tile002.png",
    "hero/sprites/attack/tile003.png",
    "hero/sprites/attack2/tile000.png",
    "hero/sprites/attack2/tile001.png",
    "hero/sprites/attack2/tile002.png",
    "hero/sprites/attack2/tile003.png",
  ];

  offset = {
    top: 130,
    left: 150,
    right: 150,
    bottom: 130,
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
    this.loadImages(this.Img_Attack);
    this.applyGravity();
    this.animate();
  }

  enemyStopHit(){
    this.playAnimation(this.Img_CompletlyDead);
  }

  animationForChar() {
    this.playAnimation(this.Img_TakeHit);
    
  }

  thisX() {
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
      if (this.world.keyboard.space) {
        this.playAnimation(this.Img_Attack);
        this.swordSounds.forEach(sound => sound.play());
        setTimeout(() => {

          this.offset.left = 60;
          this.offset.right = 60;
        } , 50);  
        
      }
      if(!this.world.keyboard.space){
        this.offset.left = 150;
        this.offset.right = 150;
      }
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
      let lastImage = this.Img_Dead[6];
      if (this.isAboveGround()) {
        this.playAnimation(this.Img_Jumping);
      } else if (this.world.keyboard.right || this.world.keyboard.left) {
        // run animation
        this.playAnimation(this.Img_Running);
      } else if (this.isDead()) {
        this.playAnimation(this.Img_Dead);
        if(lastImage){
          this.enemyStopHit();
        }
      } else {
        this.playAnimation(this.Img_Standing);
      }
    }, 80);
  }
}
