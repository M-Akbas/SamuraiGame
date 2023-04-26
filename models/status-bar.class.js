class StatusBar extends DrawableObject {
  Img_healthbar = [
    "healthbar/health01.png",
    "healthbar/health20.png",
    "healthbar/health40.png",
    "healthbar/health60.png",
    "healthbar/health80.png",
    "healthbar/health100.png",
  ];
 
  percentage = 100;

  
  constructor() {
    super();
    
    this.loadImages(this.Img_healthbar);
    this.x = 50;
    this.y = 30;
    this.width = 300;
    this.height = 30; 
    this.setPercentage(100);
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.Img_healthbar[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
