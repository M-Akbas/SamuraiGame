class Level {
  enemies;
  background;
  floor;
  secondFloor;
  fence;
  lamps;
  rocks;
  shop;

  constructor(enemies, background, floor, fence, secondFloor, lamps, rocks, shop){
    this.enemies = enemies; 
    this.background = background;
    this.floor = floor;
    this.fence = fence;
    this.secondFloor = secondFloor;
    this.lamps = lamps;
    this.rocks = rocks;
    this.shop = shop;
  }
}
