class MovableObject {
  // All moveable Chracter's or Objects
  x = -100;
  y = 200;
  height = 400;
  width = 400;
  img;
  imageCache = {};
  currentImage = 0;
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  accerleration = 1;

  applyGravity(){
    setInterval(() => {
      if(this.isAboveGround() || this.speedY > 0 )
      this.y -= this.speedY;
      this.speedY -= this.accerleration;
    }, 1000 / 25 )
  }

  isAboveGround(){
    return this.y < 157;
  }

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
  }

  moveLeft() {
    this.x -= this.speed;
    this.otherDirection = true;
  }

  playAnimation(images) {
    let i = this.currentImage % this.Img_Running.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  jump() {
    this.speedY = 15;
  }
}
