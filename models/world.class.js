class World {
  // Everthing what in world contains
  character = new Character();
  enemies = [new Enemie(), new Enemie(), new Enemie()];
  canvas;
  ctx;
  camera_x = 0;

  background = [
    new Background("oak_woods/background/background_layer_1.png", -100, 0),
    new Background("oak_woods/background/background_layer_2.png", -100, 0),
    new Background("oak_woods/background/background_layer_1.png", 620, 0),
    new Background("oak_woods/background/background_layer_2.png", 620, 0),
    new Background("oak_woods/background/background_layer_1.png", 1240, 0),
    new Background("oak_woods/background/background_layer_2.png", 1240, 0),
   
  ];

  floor = [new Floor()];
  secondFloor = [new SecondFloor()];
  keyboard;

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
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.background);
    this.addObjectsToMap(this.floor);
    this.addObjectsToMap(this.secondFloor);

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
