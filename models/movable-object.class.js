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
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) this.y -= this.speedY;
      this.speedY -= this.accerleration;
    }, 1000 / 25);
  }

  // isColliding (enemie)
  isColliding(mo) {
    return (
      this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    );
  }

  hit() {
    this.energy -= 2;
    this.animationForChar();
    if (this.energy < 0) {
      this.energy = 0;
    }
  }

  isDead() {
    return this.energy == 0;
  }

  isAboveGround() {
    if(this instanceof ThrowableObject){
      return true;
    } else;
    return this.y < 157;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft(enemieEnergy) {
    if (enemieEnergy == 0) {
      // do nothing
    } else {
      this.x -= this.speed;
    }
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  jump() {
    this.speedY = 20;
  }
}
