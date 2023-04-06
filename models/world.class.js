class World {
  // Everthing what in world contains
  character = new Character();
  enemies = [new Enemie(), new Enemie(), new Enemie()];
  canvas;
  ctx;

  background = [
    new Background("oak_woods/background/background_layer_1.png", 0, 0),
    new Background("oak_woods/background/background_layer_2.png", 0, 0),
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

    this.addObjectsToMap(this.background);
    this.addObjectsToMap(this.floor);
    this.addObjectsToMap(this.secondFloor);

    this.addObjectsToMap(this.enemies);

    this.addToMap(this.character);

    // Draw() wird immer wieder getriggerd
    self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addToMap(mo) {
    if(mo.otherDirection){
      this.ctx.save();
      this.ctx.translate(mo.width, 0);
      this.ctx.scale(-1, 1);
      mo.x = mo.x * -1;
    }
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    if(mo.otherDirection){
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
