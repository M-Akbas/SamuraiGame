class Character extends MovableObject {
  // Character extends classes from MovableObject

  y = 165;
  Img_Running = [
    "hero/sprites/run/tile000.png",
    "hero/sprites/run/tile001.png",
    "hero/sprites/run/tile002.png",
    "hero/sprites/run/tile003.png",
    "hero/sprites/run/tile004.png",
    "hero/sprites/run/tile005.png",
    "hero/sprites/run/tile006.png",
    "hero/sprites/run/tile007.png",
  ];
  world;

  constructor() {
    super().loadImage("hero/sprites/standing/tile000.png");
    this.loadImages(this.Img_Running);

    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.right) {
        let i = this.currentImage % this.Img_Running.length;
        let path = this.Img_Running[i];
        this.img = this.imageCache[path];
        this.currentImage++;
      }
    }, 60);
  }

  jump() {}
}
