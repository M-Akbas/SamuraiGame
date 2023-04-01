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

  objects = [
    new Object('')
  ]

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.addObjectsToMap(this.background);
    this.addObjectsToMap(this.enemies);

    this.addToMap(this.character);

    // Draw() wird immer wieder getriggerd
    self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addToMap(mo) {
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.height, mo.width);
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }
}
