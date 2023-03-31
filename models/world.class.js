class World {
  // Everthing what in world contains
  character = new Character();
  enemies = [new Enemie(), new Enemie(), new Enemie()];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(
      this.character.img,
      this.character.x,
      this.character.y,
      this.character.height,
      this.character.width
    );

    this.enemies.forEach((enemy) => {
      this.ctx.drawImage(
        enemy.img,
        enemy.x,
        enemy.y,
        enemy.height,
        enemy.width
      );
    });
    // draw triggerd
    self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }
}
