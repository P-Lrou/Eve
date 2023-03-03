// Set the global screen size
let screenWidth = 1000;
let screenHeight = 900;

// Set the ratio if need zoom on map
let ratio = 1;

// Set engines names to variables
const ENGINE_ONE = "engine_one";
const ENGINE_TWO = "engine_two";

// ! Engine One Configuration

// Set the start engine
let currentEngine = ENGINE_ONE;
let tempCurrentEngine = ENGINE_ONE;

// Set player start point/ tile size / speed

//let playerStart = createVector(400, 400); // Create a new vector with X on first parameter and Y on second
let playerStartX = 400;
let playerStartY = 400;

// Set the map creation start point
let mapX = -(screenWidth / 2) + playerStartX;
let mapY = -(screenHeight / 2) + playerStartY;

let EngineTwoMapX = -3840;
let EngineTwoMapY = 0;
let currentBackgroundEngineTwo;

let spriteCutSize = 20;
let tileSizeCut = 16;

switch (currentEngine) {
  case ENGINE_ONE:
    spritePlayerSize = 120;

    playerPosX = screenWidth / 2 - spritePlayerSize / 2;
    playerPosY = screenHeight / 2 - spritePlayerSize / 2;
    break;

  case ENGINE_TWO:
    spritePlayerSize = 360;

    playerPosX = screenWidth / 2 - spritePlayerSize / 2;
    playerPosY = screenHeight - spritePlayerSize;
    break;
}

let playerSpeed = 6;
let pnjSpeed = 3;
let playerState = "idle";

// Set sprite and animate repetition
let indexOfAnimation = 0;
setInterval(() => {
  if (indexOfAnimation < 6) {
    indexOfAnimation += 1;
  } else {
    indexOfAnimation = 1;
  }
}, 110);

let indexOfPnjAnim = 0;
setInterval(() => {
  if (indexOfPnjAnim < 6) {
    indexOfPnjAnim += 1;
  } else {
    indexOfPnjAnim = 1;
  }
}, 110);

// Set the variable to check the player direction
let Direction = [0, 0];

// ! Engine One Configuration

// Set all map variables initialisation
let map = undefined;
// actually useless -- just take array.length
let mapColumn = undefined;
let mapRow = undefined;
// actually useless -- just take array.length
let mapWidth = undefined;
let mapHeight = undefined;
let tileSize = undefined;

// Change value when changing engine
function detectEngine() {
  if (currentEngine != tempCurrentEngine) {
    if (currentEngine == "engine_one") {
      spritePlayerSize = 120;

      playerPosX = screenWidth / 2 - spritePlayerSize / 2;
      playerPosY = screenHeight / 2 - spritePlayerSize / 2;
    } else {
      spritePlayerSize = 360;

      playerPosX = screenWidth / 2 - spritePlayerSize / 2;
      playerPosY = screenHeight - spritePlayerSize - 30;
    }
    tempCurrentEngine = currentEngine;
  }
}
let inventorySquareSize = 80;
let inventoryWidthStart = 240;
let inventoryHeigthStart = 810;
let inventoryTab = [];
let inventoryTabNumber = 0;
let actualInventoryChoose = 1;
inventoryTab.length = 5;
