class MovableObject {
  // All moveable Chracter's or Objects
  x = -50;
  y = 200;
  height = 300;
  width = 300;
  img;


  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {}

  moveLeft() {}
}
