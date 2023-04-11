class World {
  // Everthing what in world contains
  character = new Character();
  enemies = [new Enemie(), new Enemie(), new Enemie()];
  canvas;
  ctx;
  keyboard;
  camera_x = 0;

  background = [
    new Background("oak_woods/background/background_layer_1.png", -100, 0),
    new Background("oak_woods/background/background_layer_2.png", -100, 0),
    new Background("oak_woods/background/background_layer_1.png", 620, 0),
    new Background("oak_woods/background/background_layer_2.png", 620, 0),
    new Background("oak_woods/background/background_layer_1.png", 1240, 0),
    new Background("oak_woods/background/background_layer_2.png", 1240, 0),
  ];

  floor = [
    new Floor("oak_woods/floor/mainFloor.png", -130, 360),
    new Floor("oak_woods/floor/mainFloor.png", 500, 360),
    new Floor("oak_woods/floor/mainFloor.png", 430, 360),
    new Floor("oak_woods/floor/mainFloor.png", 830, 360),
    new Floor("oak_woods/floor/mainFloor.png", 930, 360),
    new Floor("oak_woods/floor/mainFloor.png", 1240, 360),
    new Floor("oak_woods/floor/mainFloor.png", 1300, 360),
  ];
  secondFloor = [
    new SecondFloor("oak_woods/floor/secondFloor.png", -50, 405),
    new SecondFloor("oak_woods/floor/secondFloor.png", -50, 405),
    new SecondFloor("oak_woods/floor/secondFloor.png", 1200, 405),
  ];

  fence = [
    new Fence('oak_woods/decorations/fence_1.png', -50 , 370)
  ];

  lamps = [
    new Lamps('oak_woods/decorations/rock_1.png', -130 , 300),
    new Lamps('oak_woods/decorations/sign.png', -90 , 300),
    new Lamps('oak_woods/decorations/lamp.png' , 700, 300),
    new Lamps('oak_woods/decorations/sign.png' , 710, 300)
  ]

  rocks = [
    new Rock('oak_woods/decorations/rock_2.png', 50, 379),
    new Rock('oak_woods/decorations/rock_2.png', 640, 379),

  ]
  

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
    this.ctx.clearRect(0, 0,  this.canvas.height, this.canvas.width,);

    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.background);
    this.addObjectsToMap(this.fence);
    this.addObjectsToMap(this.floor);
    this.addObjectsToMap(this.secondFloor);
    this.addObjectsToMap(this.lamps);
    this.addObjectsToMap(this.rocks);

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
