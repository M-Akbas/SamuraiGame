class Level {
  shuriken;
  enemies;
  endboss;
  background;
  floor;
  secondFloor;
  fence;
  lamps;
  rocks;
  shop;
  hearticon;
  level_end_x = 1600;

  constructor(
    shuriken,
    enemies,
    endboss,
    background,
    floor,
    fence,
    secondFloor,
    lamps,
    rocks,
    shop,
    hearticon
  ) {
    this.shuriken = shuriken;
    this.enemies = enemies;
    this.endboss = endboss;
    this.background = background;
    this.floor = floor;
    this.fence = fence;
    this.secondFloor = secondFloor;
    this.lamps = lamps;
    this.rocks = rocks;
    this.shop = shop;
    this.hearticon = hearticon;
  }
}
