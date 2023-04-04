class MovableObject {
  // All moveable Chracter's or Objects
  x = -100;
  y = 200;
  height = 400;
  width = 400;
  img;
  imageCache = {};

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }
  
  loadImages(arr){
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = path;
    });
 
  }

  moveRight() {}

  moveLeft() {}
}
