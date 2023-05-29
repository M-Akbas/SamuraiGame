class World {
  swordSounds = [
    new Audio("audio/hits/hit1.mp3"),
    new Audio("audio/hits/hit2.mp3"),
    new Audio("audio/hits/hit3.mp3"),
  ];
  gameOverMusic = new Audio("audio/gameoverMusic/gameover.mp3");
  enmieHurtSound = new Audio("audio/hurt/enemieHUrt.mp3");
  throwSound = new Audio("audio/jump/throw.sound.mp3");
  ShurikenCounter = [];
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
  shurikenIcon = new Shuriken("imgForDesign/shurikenpixel.png", 10, 100);

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
    this.drawNewShuriken();
    this.endOfGame();
    
  }


  showGameOverText() {
    let gameOverOverlay = document.getElementById("gameOverOverlay");
    gameOverOverlay.style.display = "block";
  }

  endOfGame() {
    let endboss = this.level.endboss[0];
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (
          (endboss.energy === 0 && enemy.energy === 0) ||
          this.character.energy === 0
        ) {
          this.backgroundMusic.pause();
          this.gameOverMusic.play();
          setTimeout(() => {
            this.showGameOverText();
            
          }, 2000); // 2000 Millisekunden entsprechen 2 Sekunden
        }
      });
    });
  }

  drawNewShuriken() {
    setInterval(() => {
      if (this.ShurikenCounter.length > 0) {
        this.addObjectsToMap(this.ShurikenCounter);
      }
    });
  }

  checkThrowObject() {
    let i = 0;
    let endboss = this.level.endboss[0];
    let newShuriken;

    setInterval(() => {
      let direction = this.checkDirection();
      if (this.keyboard.D) {
        if (this.ShurikenCounter.length > 0 && i < 4) {
          let shuriken = new ThrowableObject(
            this.character.x + 190,
            this.character.y + 100
          );
          this.throwableObject.push(shuriken);
          newShuriken = this.throwableObject[i];+
          
          newShuriken.throw(direction);
          this.throwSound.play();
          this.ShurikenCounter.shift();
          i++;
        }
      }
      this.level.enemies.forEach((enemy) => {
        this.handleCollisions(newShuriken, endboss, enemy);
      });
    }, 100);
  }
  checkDirection(){
    let lastPressedKey = lastKeyArr[0];
    return lastPressedKey;
  }

  checkCollisions() {
    let endboss = this.level.endboss[0];

    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          this.isFighting(enemy);
        }
        if (this.character.isColliding(endboss)) {
          this.deadOrAlive(endboss);
        }
        if (
          this.character.world.keyboard.space &&
          this.character.isColliding(enemy)
        ) {
          this.fightEnemie(enemy);
        }
        if (
          this.character.world.keyboard.space &&
          this.character.isColliding(endboss)
        ) {
          this.fightEndboss(endboss);
        }
        if (!this.character.world.keyboard.space) {
          this.enemiesAreFighting(enemy, endboss);
        }

        if (this.character.isColliding(endboss)) {
          this.endbossAttacking(endboss);
        }
      });

      this.isShurikenCollected();
    }, 100);
  }

  checkLocation() {
    const endboss = this.level.endboss[0];
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        this.enemyFollowChar(enemy);
      });
      this.endbossFollowChar(endboss);
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
    this.addToMap(this.shurikenIcon);
    this.ctx.font = "30px 'Press Start 2P'";
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    this.ctx.fillText(this.ShurikenCounter.length, 100, 140);
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

  handleCollisions(newShuriken, endboss, enemy) {
    if (
      newShuriken &&
      (newShuriken.isColliding(endboss) || newShuriken.isColliding(enemy))
    ) {
      enemy.hurtAnimation();
      endboss.hurtAnimation();
      endboss.hitDamage(1);
      enemy.hitDamage(2);
      this.enmieHurtSound.play();
      
    }
  }

  isFighting(enemy) {
    if (enemy.energy == 0 || this.character.energy == 0) {
    } else if (enemy.isFighting == true) {
      this.character.hit(enemy);
      this.statusbar.setPercentage(this.character.energy);
      this.swordSounds.forEach((sound) => sound.play());
      enemy.animationForEnemie();
    }
  }

  fightEnemie(enemy) {
    if (enemy.energy == 0) {
    } else {
      enemy.isFighting = false;
      enemy.hurtAnimation();
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          enemy.hitDamage(1);
        }
      });
    }
  }

  fightEndboss(endboss) {
    if (endboss.energy == 0) {
      setTimeout(() => {}, 100);
    } else {
      endboss.isFighting = false;
      endboss.hurtAnimation();
      endboss.hitDamage(1);
    }
  }

  enemiesAreFighting(enemy, endboss) {
    endboss.isFighting = true;
    enemy.isFighting = true;
  }

  endbossAttacking(endboss) {
    if (endboss.energy == 0 || this.character.energy == 0) {
      // do nothing
    } else if (endboss.isFighting == true) {
      endboss.attackAnimation();
      this.swordSounds.forEach((sound) => sound.play());
    }
  }

  isShurikenCollected() {
    for (let i = 0; i < this.level.shuriken.length; i++) {
      let shuriken = this.level.shuriken[i];
      if (this.character.isColliding(shuriken)) {
        this.level.shuriken.splice(i, 1);
        this.ShurikenCounter.push(shuriken);

        break;
      }
    }
  }

  deadOrAlive(endboss) {
    if (endboss.energy == 0 || this.character.energy == 0) {
      let currentX = endboss.x;
      endboss.x = currentX;
    } else {
      this.character.hit();
      this.statusbar.setPercentage(this.character.energy);
      this.swordSounds.forEach((sound) => sound.play());
    }
  }

  enemyFollowChar(enemy) {
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
  }

  endbossFollowChar(endboss) {
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
  }
}
