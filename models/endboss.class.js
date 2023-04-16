class Endboss extends MovableObject {

    height = 220;
    width = 210;
    y = 200;

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

      constructor(){
        super().loadImage(this.Img_Running[0]);
        this.loadImages(this.Img_Running);

        this.x = 1600; 
        this.animate();
        this.moveLeft();
      }

      animate() {
        setInterval(() => {
        
          this.playAnimation(this.Img_Running);
        }, 200);
      }
}