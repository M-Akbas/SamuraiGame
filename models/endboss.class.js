class Endboss extends MovableObject {

    height = 220;
    width = 210;
    y = 200;
    speed = 0.5;

    Img_Running = [
        "EndBoss/walk/tile001.png",
        "EndBoss/walk/tile002.png",
        "EndBoss/walk/tile003.png",
        "EndBoss/walk/tile004.png",
        "EndBoss/walk/tile005.png",
        "EndBoss/walk/tile006.png",
        "EndBoss/walk/tile007.png",
        "EndBoss/walk/tile008.png",
      ];

    Img_Attack = [
      "EndBoss/attack/tile000.png",
      "EndBoss/attack/tile001.png",
      "EndBoss/attack/tile002.png",
      "EndBoss/attack/tile003.png",
      "EndBoss/attack/tile004.png",
      "EndBoss/attack/tile000.png",
      "EndBoss/attack/tile001.png",
      "EndBoss/attack/tile002.png"
    ];

      constructor(){
        super();
        this.loadImage(this.Img_Running[0]);
        this.loadImages(this.Img_Running);
        this.loadImages(this.Img_Attack);
        this.x = 1600; 
        this.animate();
        this.moveLeft();
      }

      animate() {
        setInterval(() => {
          this.moveLeft();
        }, 1000 / 60);
        setInterval(() => {
          this.playAnimation(this.Img_Running);
        }, 200);
      }
}
