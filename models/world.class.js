class World {
  swordSounds = [
    
    new Audio("audio/hits/Enemy Knight Grunt Sound Effect First Variation.mp3"),
    new Audio("audio/hurt/enemieHUrt.mp3"),
  ];


  gameOverMusic = new Audio("audio/gameoverMusic/gameover.mp3");
  enmieHurtSound = new Audio("audio/hurt/enemieHUrt.mp3");
  throwSound = new Audio("audio/jump/throw.sound.mp3");
  ShurikenCounter = [];
  throwableObject = [];
  character = new Character();
  level = level1;
  backgroundMusic = new Audio("audio/music/ZO ぞ SAMURAI Background Theme Music.mp3");
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


  /**
   * Zeigt den Game Over-Text an
   */
  showGameOverText(enemy ,endboss) {
    let gameOverOverlay = document.getElementById("gameOverOverlay");
    gameOverOverlay.style.display = "block";
    let gameOverText = document.getElementById("gameOverText");
    if(enemy.energy === 0 && endboss.energy === 0){
      gameOverText.innerHTML = "YOU WON!"
    } else { 
      gameOverText.innerHTML = "YOU LOSE!"
    }

  }


  /**
   * Beendet das Spiel und zeigt den Game Over-Text an, wenn bestimmte Bedingungen erfüllt sind
   */
  endOfGame() {
    let endboss = this.level.endboss[0];
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (
          (endboss.energy === 0 && enemy.energy === 0) ||
          this.character.energy === 0
        ) {
          this.backgroundMusic.pause();
          this.MutedOrNot();
          setTimeout(() => {
            this.showGameOverText(enemy ,endboss);
          }, 2000); 
        }
      });
    });
  }


  /**
   * Überprüft den aktuellen Soundstatus und pausiert oder spielt die Game Over-Musik entsprechend
   */
  MutedOrNot() {
    if (soundIsOn === false) {
      this.gameOverMusic.pause();
    } else {
      this.gameOverMusic.play();
    }
  }


  /**
   * Draws a new shuriken periodically if the shuriken counter is not empty.
   */
  drawNewShuriken() {
    setInterval(() => {
      if (this.ShurikenCounter.length > 0) {
        this.addObjectsToMap(this.ShurikenCounter);
      }
    });
  }


  /**
   * Checks if the character throws an object, handles the throwing logic, and checks for collisions between the thrown object, end boss, and enemies.
   */
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
          newShuriken = this.throwableObject[i];
          newShuriken.throw(direction);
          
          this.throwSound.play();
          this.ShurikenCounter.shift();
          i++;
        }
      }
      this.level.enemies.forEach((enemy) => {
        this.handleCollisionsEnemy(newShuriken, enemy);
        this.handleCollisionsEndboss(newShuriken, endboss);
      });
    }, 100);
  }


  /**
   * Checks the last pressed key and returns the corresponding direction.
   * @returns {string} The direction based on the last pressed key.
   */
  checkDirection() {
    let lastPressedKey = lastKeyArr[0];
    return lastPressedKey;
  }


  /**
   * Checks for collisions between the character, enemies, and end boss, and performs corresponding actions.
   */
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


  /**
   * Checks the location of enemies and the end boss, and makes them follow the character.
   */
  checkLocation() {
    const endboss = this.level.endboss[0];
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        this.enemyFollowChar(enemy);
      });
      this.endbossFollowChar(endboss);
    }, 50);
  }


  /**
   * Sets the world for the character.
   */
  setWorld() {
    this.character.world = this;
  }


  /**
   * Plays the background music.
   */
  music() {
    this.backgroundMusic.play();
  }


  /**
   * Draws the game elements on the canvas.
   */
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


  /**
   * Adds a game object to the map.
   * @param {GameObject} mo - The game object to be added.
   */
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


  /**
   * Adds multiple game objects to the map.
   * @param {Array<GameObject>} objects - The array of game objects to be added.
   */
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }


  /**
   * Flips the image of a game object horizontally.
   * @param {GameObject} mo - The game object to flip the image of.
   */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }


  /**
   * Reverts the image flipping of a game object back to its original state.
   * @param {GameObject} mo - The game object to revert the image flipping of.
   */
  flipImageBack(mo) {
    this.ctx.restore();
    mo.x = mo.x * -1;
  }


  /**
   * Handles collisions between a new shuriken, end boss, and enemy.
   * @param {ThrowableObject} newShuriken - The new shuriken object.
   * @param {Enemy} enemy - The enemy object.
   */
  handleCollisionsEnemy(newShuriken, enemy) {
    if (
      newShuriken &&
      (newShuriken.isColliding(enemy))
    ) {
      if (enemy.energy === 0) {
      } else {
        enemy.hurtAnimation();
        
        enemy.hitDamage(2);
        this.enmieHurtSound.play();
      }
    }
  }

  /**
   * Handles collisions between a new shuriken, end boss, and enemy.
   * @param {ThrowableObject} newShuriken - The new shuriken object.
   * @param {Endboss} endboss - The enemy object.
   */
  handleCollisionsEndboss(newShuriken, endboss){
    if (
      newShuriken &&
      (newShuriken.isColliding(endboss))
    ) {
      if (endboss.energy === 0) {
      } else {
        endboss.hurtAnimation();
        endboss.hitDamage(1);
        this.enmieHurtSound.play();
      }
    }
  }


  /**
   * Handles the fighting action between the character and an enemy.
   * @param {Enemy} enemy - The enemy object.
   */
  isFighting(enemy) {
    if (enemy.energy == 0 || this.character.energy == 0) {
    } else if (enemy.isFighting == true) {
      this.character.hit(enemy);
      this.statusbar.setPercentage(this.character.energy);
      this.swordSounds.forEach((sound) => sound.play());
      enemy.animationForEnemie();
    }
  }


  /**
   * Initiates the fight against an enemy.
   * @param {Enemy} enemy - The enemy object.
   */
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


  /**
   * Initiates the fight against the end boss.
   * @param {Endboss} endboss - The end boss object.
   */
  fightEndboss(endboss) {
    if (endboss.energy == 0) {
      setTimeout(() => {}, 100);
    } else {
      endboss.isFighting = false;
      endboss.hurtAnimation();
      endboss.hitDamage(1);
    }
  }


  /**
   * Sets the enemies (enemy and end boss) to the fighting state.
   * @param {Enemy} enemy - The enemy object.
   * @param {Endboss} endboss - The end boss object.
   */
  enemiesAreFighting(enemy, endboss) {
    endboss.isFighting = true;
    enemy.isFighting = true;
  }


  /**
   * Handles the end boss attacking action.
   * @param {Endboss} endboss - The end boss object.
   */
  endbossAttacking(endboss) {
    if (endboss.energy == 0 || this.character.energy == 0) {
      // do nothing
    } else if (endboss.isFighting == true) {
      endboss.attackAnimation();
      this.swordSounds.forEach((sound) => sound.play());
    }
  }


  /**
   * Checks if the character has collected a shuriken.
   */
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


  /**
   * Handles the state of the character and end boss when one of them is defeated.
   * @param {Endboss} endboss - The end boss object.
   */
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


  /**
   * Makes the enemy follow the character's position.
   * @param {Enemy} enemy - The enemy object.
   */
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


  /**
   * Makes the end boss follow the character's position.
   * @param {Endboss} endboss - The end boss object.
   */
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
