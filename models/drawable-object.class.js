class DrawableObject {
  img;
  imageCache = {};
  currentImage = 0;
  x = 100;
  y = 200;
  height = 400;
  width = 400;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  drawFrame(ctx) {
    if (
      this instanceof Character ||
      this instanceof Enemie ||
      this instanceof Endboss
    ) {
      ctx.beginPath();
      ctx.lineWidth = "4";
      ctx.strokeStyle = "rgba(0, 0, 0, 0)"; // transparent color
      ctx.rect(
        this.x + this.offset.left,
        this.y + this.offset.top,
        this.width - this.offset.left - this.offset.right,
        this.height - this.offset.top - this.offset.bottom
      );
      ctx.stroke();
    }
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }
}
