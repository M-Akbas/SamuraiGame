class Enemie extends MovableObject {
  // Enemie extends classes from MovableObject

  y = 218;
  width = 210;
  height = 200;
  Img_Running = [
    "enemies/skelleton/walk/tile006.png",
    "enemies/skelleton/walk/tile005.png",
    "enemies/skelleton/walk/tile004.png",
    "enemies/skelleton/walk/tile003.png",
    "enemies/skelleton/walk/tile002.png",
    "enemies/skelleton/walk/tile001.png",
    "enemies/skelleton/walk/tile000.png",
  ];

  constructor() {
    super().loadImage("enemies/skelleton/walk/tile001.png");
    this.loadImages(this.Img_Running);

    this.x = 200 + Math.random() * 500;
    this.speed = 0.15 + Math.random() * 0.25;
    this.animate();
    this.moveLeft();
  }

  animate() {}

  animate() {
    setInterval(() => {
    
      let i = this.currentImage % this.Img_Running.length;
      let path = this.Img_Running[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 200);
  }
}
