const level1 = new Level(
  [
    new ThrowableObject(500, 100),
    new ThrowableObject(1200, 70),
    new ThrowableObject(1600, 120),
    new ThrowableObject(800, 70),
  ],
  [
    new Enemie(10),
    new Enemie(35),
    new Enemie(20),
    new Enemie(15),
    new Enemie(25),
    new Enemie(15),
    new Enemie(25),
    new Enemie(15),
  ],
  [new Endboss()],
  [
    new Background("oak_woods/background/background_layer_1.png", -800, 0),
    new Background("oak_woods/background/background_layer_2.png", -800, 0),
    new Background("oak_woods/background/background_layer_1.png", -100, 0),
    new Background("oak_woods/background/background_layer_2.png", -100, 0),
    new Background("oak_woods/background/background_layer_1.png", 620, 0),
    new Background("oak_woods/background/background_layer_2.png", 620, 0),
    new Background("oak_woods/background/background_layer_1.png", 1240, 0),
    new Background("oak_woods/background/background_layer_2.png", 1240, 0),
    new Background("oak_woods/background/background_layer_1.png", 620 * 3, 0),
    new Background("oak_woods/background/background_layer_2.png", 620 * 3, 0),
    new Background("oak_woods/background/background_layer_1.png", 620 * 4, 0),
    new Background("oak_woods/background/background_layer_2.png", 620 * 4, 0),
  ],

  [
    new Floor("oak_woods/floor/mainFloor.png", -630, 360),
    new Floor("oak_woods/floor/mainFloor.png", -130, 360),
    new Floor("oak_woods/floor/mainFloor.png", 500, 360),
    new Floor("oak_woods/floor/mainFloor.png", 430, 360),
    new Floor("oak_woods/floor/mainFloor.png", 830, 360),
    new Floor("oak_woods/floor/mainFloor.png", 930, 360),
    new Floor("oak_woods/floor/mainFloor.png", 1240, 360),
    new Floor("oak_woods/floor/mainFloor.png", 1300, 360),
    new Floor("oak_woods/floor/mainFloor.png", 1600, 360),
    new Floor("oak_woods/floor/mainFloor.png", 1500, 360),
  ],

  [
    new SecondFloor("oak_woods/floor/secondFloor.png", -550, 405),
    new SecondFloor("oak_woods/floor/secondFloor.png", -50, 405),
    new SecondFloor("oak_woods/floor/secondFloor.png", -50, 405),
    new SecondFloor("oak_woods/floor/secondFloor.png", 1200, 405),
  ],

  [new Fence("oak_woods/decorations/fence_1.png", -50, 370)],
  [
    new Lamps("oak_woods/decorations/rock_1.png", -130, 300),
    new Lamps("oak_woods/decorations/sign.png", -90, 300),
    new Lamps("oak_woods/decorations/lamp.png", 700, 300),
    new Lamps("oak_woods/decorations/sign.png", 710, 300),
  ],

  [
    new Rock("oak_woods/decorations/rock_2.png", 50, 379),
    new Rock("oak_woods/decorations/rock_2.png", 640, 379),
  ],

  [new Shop("oak_woods/decorations/shop.png", 900, 240)]
);
