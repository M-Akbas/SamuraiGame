class Character extends MovableObject {
  // Character extends classes from MovableObject
  speed = 5;
  y = 5;
  energy = 16000999999999999999;
  swordSounds = [
    new Audio("audio/hits/hit1.mp3"),
    new Audio("audio/hits/hit2.mp3"),
    new Audio("audio/hits/hit3.mp3"),
  ];
  jumping_sound = new Audio("audio/jump/jump1.mp3");
  hitSounds = new Audio("audio/hits/hitsounds.mp3");

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

  
  /**
   * Stops the enemy from being hit by playing the complete dead animation.
   */
  enemyStopHit() {
    this.playAnimation(this.Img_CompletlyDead);
  }


  /**
   * Triggers the animation for the character when it takes a hit.
   */
  animationForChar() {
    this.playAnimation(this.Img_TakeHit);
  }


  /**
   * Returns the x-coordinate of the object.
   * @returns {number} The x-coordinate of the object.
   */
  thisX() {
    return this.x;
  }


  /**
   * Controls the sound effects based on the current state of the sound.
   * If the sound is muted, the sword sounds will be muted and other sounds will be adjusted accordingly.
   * If the sound is not muted, the sword sounds will be unmuted and other sounds will be adjusted accordingly.
   */
  soundEffects() {
    if (soundIsOn === false) {
      this.swordSounds.forEach((sound) => (sound.muted = true));
      this.walking_sound.muted = false;
      this.jumping_sound.muted = true;
      this.hitSounds.muted = true;
    } else {
      this.swordSounds.forEach((sound) => (sound.muted = false));
      this.walking_sound.muted = true;
      this.jumping_sound.muted = false;
      this.hitSounds.muted = false;
    }
  }


  /**
   * Periodically checks if the right arrow key is pressed and the character is within the level boundaries.
   * If conditions are met, the character moves to the right, sets the direction to false, and adjusts sound effects if necessary.
   */
  movingRight() {
    setInterval(() => {
      this.walking_sound.pause();
      if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
        if (!this.world.keyboard.up && !this.isAboveGround()) {
          this.soundEffects();
        }
      }
    }, 1000 / 60);
  }


  /**
   * Periodically checks the character's state and plays the corresponding animation based on the conditions.
   */
  isJumping() {
    setInterval(() => {
      let lastImage = this.Img_Dead[6];
      if (this.isAboveGround()) {
        this.playAnimation(this.Img_Jumping);
      } else if (this.world.keyboard.right || this.world.keyboard.left) {
        // run animation
        this.playAnimation(this.Img_Running);
      } else if (this.isDead()) {
        this.playAnimation(this.Img_Dead);
        if (lastImage) {
          this.enemyStopHit();
        }
      } else {
        this.playAnimation(this.Img_Standing);
      }
    }, 80);
  }


  /**
   * Initiates the character's attack animation and plays the corresponding sound effects.
   */
  charAttacking() {
    this.playAnimation(this.Img_Attack);
    this.soundEffects();
    this.hitSounds.play();

    setTimeout(() => {
      this.offset.left = 60;
      this.offset.right = 60;
    }, 50);
  }


  /**
   * Pauses the character's attacking animation by adjusting the offset and pausing the hit sounds.
   */
  charPauseAttacking() {
    this.offset.left = 150;
    this.offset.right = 150;
    this.hitSounds.pause();
  }


  /**
   * Triggers the character's jumping action by playing the jumping sound, applying jump animation, and initiating the jump movement.
   */
  charJumping() {
    this.soundEffects();
    this.jumping_sound.play();
    this.jump();
  }


  /**
   * Initiates the animation loop for the character.
   * Handles character movement, attacking, jumping, and camera positioning.
   */
  animate() {
    this.movingRight();

    setInterval(() => {
      if (this.world.keyboard.space) {
        this.charAttacking();
      }
      if (!this.world.keyboard.space) {
        this.charPauseAttacking();
      }
      if (this.world.keyboard.left && this.x > 0) {
        this.moveLeft();
        this.otherDirection = true;

        if (!this.world.keyboard.up && !this.isAboveGround()) {
          this.soundEffects();
        }
      }
      if (this.world.keyboard.up && !this.isAboveGround()) {
        this.charJumping();
      }
      this.world.camera_x = -this.x;
    }, 1000 / 60);

    this.isJumping();
  }
}
