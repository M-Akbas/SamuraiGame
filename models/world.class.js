class World {
  // Everthing what in world contains
  character = new Character();

  enemies = level1.enemies;
  background = level1.background;
  floor = level1.floor;
  secondFloor = level1.secondFloor;
  fence = level1.fence;
  lamps = level1.lamps;
  rocks = level1.rocks;
  shop = level1.shop;

  canvas;
  ctx;
  keyboard;
  camera_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);

    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.background);
    this.addObjectsToMap(this.fence);
    this.addObjectsToMap(this.floor);
    this.addObjectsToMap(this.secondFloor);
    this.addObjectsToMap(this.lamps);
    this.addObjectsToMap(this.rocks);
    this.addObjectsToMap(this.shop);
    
    this.addObjectsToMap(this.enemies);

    this.addToMap(this.character);
    this.ctx.translate(-this.camera_x, 0);

    // Draw() wird immer wieder getriggerd
    self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.ctx.save();
      this.ctx.translate(mo.width, 0);
      this.ctx.scale(-1, 1);
      mo.x = mo.x * -1;
    }
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    if (mo.otherDirection) {
      mo.x = mo.x * -1;
      this.ctx.restore();
    }
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }
}
