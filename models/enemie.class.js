class Enemie extends MovableObject {
  // Enemie extends classes from MovableObject

  y = 222;
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

    this.x = 400 + Math.random() * 600;
    this.speed = 0.15 + Math.random() * 0.25;
    this.animate();
    this.moveLeft();
  }



  animate() {
    setInterval(() => {
      this.moveLeft();
    } ,1000 / 60)
    setInterval(() => {
      
      this.playAnimation(this.Img_Running);
    }, 200);
  }
}
