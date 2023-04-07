class Character extends MovableObject {
  // Character extends classes from MovableObject
  speed = 5;
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
      if (this.world.keyboard.right){
        this.x += this.speed;
        this.otherDirection = false;
      }
    }, 1000 / 60);

    setInterval(() => {
      if (this.world.keyboard.left){
        this.x -= this.speed;
        this.otherDirection = true;
      }
      this.world.camera_x = -this.x;
    }, 1000 / 60);



    setInterval(() => {
      if (this.world.keyboard.right || this.world.keyboard.left) {
      
        // run animation
        let i = this.currentImage % this.Img_Running.length;
        let path = this.Img_Running[i];
        this.img = this.imageCache[path];
        this.currentImage++;
      }
    }, 60);
  }

  jump() {}
}
