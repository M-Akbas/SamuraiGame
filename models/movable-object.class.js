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

  moveRight() {}

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }

  playAnimation(images) {
    let i = this.currentImage % this.Img_Running.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
}
