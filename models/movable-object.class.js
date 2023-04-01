class MovableObject {
  // All moveable Chracter's or Objects
  x = -100;
  y = 200;
  height = 400;
  width = 400;
  img;


  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {}

  moveLeft() {}
}
