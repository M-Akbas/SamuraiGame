class DrawableObject {
  img;
  imageCache = {};
  currentImage = 0;
  x = 100;
  y = 200;
  height = 400;
  width = 400;

  
  /**
   * Loads an image by setting the source path.
   * @param {string} path - The path to the image file.
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }


  /**
   * Draws the character image on the canvas context.
   * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }


  /**
   * Draws the frame around the character, enemy, or endboss image on the canvas context.
   * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
   */
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


  /**
   * Loads multiple images into the image cache.
   * @param {string[]} arr - An array of image paths to load.
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }
}
