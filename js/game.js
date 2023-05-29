let canvas;
let world;
let soundIsOn = true;
let buttonSound = new Audio("audio/gameoverMusic/buttonSOund.mp3");
function playButtonSound() {
  buttonSound.play();
}
lastKeyArr = [];

function gameStart() {
  let button = document.getElementById("startButton");
  let overlay = document.getElementById("overlay");
  let enemieImg = document.getElementById("E-Img");
  let heroImg = document.getElementById("H-Img");
  enemieImg.style.display = "none";
  heroImg.style.display = "none";
  overlay.style.backgroundColor = "rgba(0,0,0,0)";
  button.style.display = "none";

  init();
  checkButtonsAreReleased();
  checkButtonsArePressed();
}

let keyboard = new Keyboard();
function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);

  console.log("My Character is", world.character);
}
function muteSound() {
  if (soundIsOn === true) {
    world.backgroundMusic.pause();
    soundIsOn = false;
    
  } else if (soundIsOn === false) {
    world.backgroundMusic.play();
    soundIsOn = true;
  }
}
function toggleMute() {
  let mute = document.getElementsByClassName("muteImg")[0];
  let backgroundColor = mute.style.backgroundColor;

  if (backgroundColor === "red") {
    mute.style.backgroundColor = "green";
  } else {
    mute.style.backgroundColor = "red";
  }
}

window.addEventListener("keydown", (event) => {
  if (event.keyCode == 39) {
    keyboard.right = true;
    lastKeyArr = [];
    lastKeyArr.push("right");
  }
  if (event.keyCode == 37) {
    keyboard.left = true;
    lastKeyArr = [];
    lastKeyArr.push("left");
  }
  if (event.keyCode == 38) {
    keyboard.up = true;
  }
  if (event.keyCode == 40) {
    keyboard.down = true;
  }
  if (event.keyCode == 32) {
    keyboard.space = true;
  }
  if (event.keyCode == 68) {
    keyboard.D = true;
  }
});

window.addEventListener("keyup", (event) => {
  if (event.keyCode == 39) {
    keyboard.right = false;
  }
  if (event.keyCode == 37) {
    keyboard.left = false;
  }
  if (event.keyCode == 38) {
    keyboard.up = false;
  }
  if (event.keyCode == 40) {
    keyboard.down = false;
  }
  if (event.keyCode == 32) {
    keyboard.space = false;
  }
  if (event.keyCode == 68) {
    keyboard.D = false;
  }
});

function checkButtonsArePressed() {
  setTimeout(() => {
    document
      .getElementById("btnLeft")
      .addEventListener("touchstart", (event) => {
        event.preventDefault();
        keyboard.left = true;
      });
    document
      .getElementById("btnRight")
      .addEventListener("touchstart", (event) => {
        event.preventDefault();
        keyboard.right = true;
      });

    document.getElementById("btnUp").addEventListener("touchstart", (event) => {
      event.preventDefault();
      keyboard.up = true;
    });

    document
      .getElementById("btnShuriken")
      .addEventListener("touchstart", (event) => {
        event.preventDefault();
        keyboard.D = true;
      });

    document
      .getElementById("btnAttack")
      .addEventListener("touchstart", (event) => {
        event.preventDefault();
        keyboard.space = true;
      });
  }, 500);
}

function checkButtonsAreReleased() {
  setTimeout(() => {
    document.getElementById("btnLeft").addEventListener("touchend", (event) => {
      event.preventDefault();
      keyboard.left = false;
    });
    document
      .getElementById("btnRight")
      .addEventListener("touchend", (event) => {
        event.preventDefault();
        keyboard.right = false;
      });

    document.getElementById("btnUp").addEventListener("touchend", (event) => {
      event.preventDefault();
      keyboard.up = false;
    });

    document
      .getElementById("btnShuriken")
      .addEventListener("touchend", (event) => {
        event.preventDefault();
        keyboard.D = false;
      });

    document
      .getElementById("btnAttack")
      .addEventListener("touchend", (event) => {
        event.preventDefault();
        keyboard.space = false;
      });
  }, 500);
}
