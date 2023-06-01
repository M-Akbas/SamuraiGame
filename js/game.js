let canvas;
let world;
let soundIsOn = true;
let buttonSound = new Audio("audio/gameoverMusic/buttonSOund.mp3");
let keyboard = new Keyboard();

lastKeyArr = [];

/**
 * Plays the button sound.
 */
function playButtonSound() {
  buttonSound.play();
}


/**
 * Starts the game by hiding the start button, overlay, and images, and initializing the game.
 */
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


/**
 * Initializes the game by setting up the canvas and creating a new World instance.
 */
function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);

  console.log("My Character is", world.character);
}


/**
 * Mutes or unmutes the game sounds based on the current sound state.
 */
function muteSound() {
  if (soundIsOn === true) {
    world.backgroundMusic.pause();
    world.throwSound.muted = true;
    world.enmieHurtSound.muted = true;

    for (const sound of world.swordSounds) {
      sound.muted = true;
    }

    soundIsOn = false;
  } else if (soundIsOn === false) {
    world.backgroundMusic.play();
    world.throwSound.muted = false;
    world.enmieHurtSound.muted = false;

    for (const sound of world.swordSounds) {
      sound.muted = false;
    }
    soundIsOn = true;
  }
}


/**
 * Toggles the mute state by changing the background color of the mute button.
 */
function toggleMute() {
  let mute = document.getElementsByClassName("muteImg")[0];
  let backgroundColor = mute.style.backgroundColor;

  if (backgroundColor === "red") {
    mute.style.backgroundColor = "green";
  } else {
    mute.style.backgroundColor = "red";
  }
}


/**
 * Event listener for keydown event to handle keyboard input.
 * Sets the corresponding properties in the keyboard object based on the pressed key.
 */
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


/**
 * Event listener for keyup event to handle keyboard input.
 * Resets the corresponding properties in the keyboard object based on the released key.
 */
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


/**
 * Function to check if touch buttons are pressed.
 * Adds touch event listeners to the corresponding buttons and updates the keyboard object accordingly.
 */
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


/**
 * Function to check if touch buttons are released.
 * Adds touch event listeners to the corresponding buttons and updates the keyboard object accordingly.
 */
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
