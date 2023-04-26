class World {
  // Everthing what in world contains
  character = new Character();
  level = level1;
  backgroundMusic = new Audio("audio/music/music1.mp3");
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusbar = new StatusBar();
  
  
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.music();
    this.checkCollisions();
    this.checkLocation();
  }

  checkCollisions() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          this.character.hit();
          this.statusbar.setPercentage(this.character.energy);
          enemy.animationForEnemie();
          
        } else {
          
        }
      });
    }, 100);
  }

  checkLocation() {
  setInterval(() => {
    this.level.enemies.forEach((enemy) => {
      if (this.character.x !== enemy.x) {            
        
        const dx = this.character.x - enemy.x;
        const distance = Math.abs(dx);
        const speed = 3; // Geschwindigkeit des Feindes
        if (distance > 0) {
          enemy.x += dx * speed  / distance;
        }
      } 
    });
  }, 50); // kürzere Intervalle für schnellere Bewegung
}

  

  setWorld() {
    this.character.world = this;
  }

  music() {
    this.backgroundMusic.play();
  }


 

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);
    
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.background);
    this.addObjectsToMap(this.level.fence);
    this.addObjectsToMap(this.level.floor);
    this.addObjectsToMap(this.level.secondFloor);
    this.addObjectsToMap(this.level.lamps);
    this.addObjectsToMap(this.level.rocks);
    this.addObjectsToMap(this.level.shop);
    
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusbar);
    
    this.ctx.translate(this.camera_x, 0);
    
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.ctx.translate(-this.camera_x, 0);

    // Draw() wird immer wieder getriggerd
    self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);

    mo.drawFrame(this.ctx);
    

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
