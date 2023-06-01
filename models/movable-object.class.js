class MovableObject extends DrawableObject {
  // All moveable Chracter's or Objects
  lastImageOfDead;
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  accerleration = 1;
  energy = 100;
  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  
  /**
   * Applies gravity to the enemy, causing it to fall down.
   */
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) this.y -= this.speedY;
      this.speedY -= this.accerleration;
    }, 1000 / 25);
  }


  /**
   * Checks if the enemy is colliding with another object.
   * @param {Object} mo - The other object to check collision with.
   * @returns {boolean} - True if colliding, false otherwise.
   */
  // isColliding (enemie)
  isColliding(mo) {
    return (
      this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    );
  }


  /**
   * Decreases the enemy's energy by 2 and triggers the character's hit animation.
   * If the energy becomes negative, it is set to 0.
   */
  hit() {
    this.energy -= 2;
    this.animationForChar();
    if (this.energy < 0) {
      this.energy = 0;
    }
  }


  /**
   * Checks if the enemy is dead.
   * @returns {boolean} - True if energy is 0, false otherwise.
   */
  isDead() {
    return this.energy == 0;
  }


  /**
   * Checks if the character is above the ground.
   * @returns {boolean} - True if the character is above the ground, false otherwise.
   */
  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else;
    return this.y < 157;
  }


  /**
   * Moves the character to the right.
   */
  moveRight() {
    this.x += this.speed;
  }


  /**
   * Moves the character to the left if the enemy's energy is not zero.
   * @param {number} enemieEnergy - The energy of the enemy.
   */
  moveLeft(enemieEnergy) {
    if (enemieEnergy == 0) {
      // do nothing
    } else {
      this.x -= this.speed;
    }
  }


  /**
   * Plays the animation by updating the character's image.
   * @param {string[]} images - Array of image paths for the animation.
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }


  /**
   * Makes the character jump by setting the vertical speed.
   */
  jump() {
    this.speedY = 20;
  }
}
