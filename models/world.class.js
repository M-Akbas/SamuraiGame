class World {
  // Everthing what in world contains
  swordSounds = [
    new Audio("audio/hits/hit1.mp3"),
    new Audio("audio/hits/hit2.mp3"),
    new Audio("audio/hits/hit3.mp3"),
  ];
  newShuriken = [];
  throwableObject = [];
  character = new Character();
  level = level1;
  backgroundMusic = new Audio("audio/music/music1.mp3");
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusbar = new StatusBar();
  heartIcon = new HeartIcon("healthbar/health.png", 10, 20);
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.music();
    this.checkCollisions();
    this.checkLocation();
    this.checkThrowObject();
  }

  checkThrowObject() {
    let shuriken = new ThrowableObject(
      this.character.x + 200,
      this.character.y + 100
    );
    
    if (this.keyboard.D) {
      if (this.newShuriken.length > 0) {
        shuriken.trow();
        console.log("wurf");
        
      } else { 
        // do nothing
      }
    }
    
    console.log(this.newShuriken.length);
  }
  

  checkCollisions() {
    let endboss = this.level.endboss[0];

    setInterval(() => {
      this.checkThrowObject();
      
        this.level.enemies.forEach((enemy) => {
          if (this.character.isColliding(enemy)) {
            if (enemy.energy == 0) {
              // stay there
            } else if (enemy.isFighting == true) {
              this.character.hit();
              this.statusbar.setPercentage(this.character.energy);
              this.swordSounds.forEach((sound) => sound.play());
              enemy.animationForEnemie();
            }
          }
          if (this.character.isColliding(endboss)) {
            if (endboss.energy == 0) {
              let currentX = endboss.x;
              endboss.x = currentX;
            } else {
              this.character.hit();
              this.statusbar.setPercentage(this.character.energy);
              this.swordSounds.forEach((sound) => sound.play());
            }
          }
          if (
            this.character.world.keyboard.space &&
            this.character.isColliding(enemy)
          ) {
            if (enemy.energy == 0) {
            } else {
              enemy.isFighting = false;
              console.log(enemy.energy);
              enemy.hurtAnimation();
              this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                  enemy.hitDamage(1);
                }
              });
            }
          }
          if (
            this.character.world.keyboard.space &&
            this.character.isColliding(endboss)
          ) {
            if (endboss.energy == 0) {
              setTimeout(() => {}, 100);
            } else {
              endboss.isFighting = false;
              endboss.hurtAnimation();
              endboss.hitDamage(1);
            }
          }
          if (!this.character.world.keyboard.space) {
            endboss.isFighting = true;
            enemy.isFighting = true;
          }

          if (this.character.isColliding(endboss)) {
            if (endboss.energy == 0) {
              // do nothing
            } else if (endboss.isFighting == true) {
              endboss.attackAnimation();
              this.swordSounds.forEach((sound) => sound.play());
            }
          }
        });
        
        for (let i = 0; i < this.level.shuriken.length; i++) {
          let shuriken = this.level.shuriken[i];
          if (this.character.isColliding(shuriken)) {
            console.log("collid / shuriken");
            this.level.shuriken.splice(i, 1);
            this.newShuriken.push(shuriken);
            
            break;
          }
        }
        
        
        
        
      
    }, 100);
  }

  

  checkLocation() {
    const endboss = this.level.endboss[0];
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (enemy.energy == 0) {
          // do nothing
        } else if (this.character.x !== enemy.x) {
          const dx = this.character.x - enemy.x;
          const distance = Math.abs(dx);
          const speed = enemy.speed;
          if (dx > 0) {
            enemy.x += (dx * speed * 10) / distance + 1;
            enemy.otherDirection = true;
          } else {
            enemy.otherDirection = false;
          }
        }
      });

      // Check end boss location
      if (endboss.energy == 0) {
        // do nothing
      } else if (this.character.x !== endboss.x) {
        const dx = this.character.x - endboss.x;
        const distance = Math.abs(dx);
        const speed = endboss.speed;
        if (dx > 0) {
          endboss.x += (dx * speed * 10) / distance + 1;
          endboss.otherDirection = true;
        } else {
          endboss.otherDirection = false;
        }
      }
    }, 50);
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
    this.addObjectsToMap(this.throwableObject);
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusbar);
    this.addToMap(this.heartIcon);
    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.level.secondFloor);
    this.addObjectsToMap(this.level.lamps);
    this.addObjectsToMap(this.level.rocks);
    this.addObjectsToMap(this.level.shop);

    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.shuriken);
    this.addObjectsToMap(this.level.endboss);
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
    this.ctx.restore();
    mo.x = mo.x * -1;
  }
}
