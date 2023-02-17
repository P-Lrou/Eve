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

let spritePlayerSize = 120;
let spriteCutSize = 20;
let tileSizeCut = 16;

switch (currentEngine) {
    case ENGINE_ONE:
        spritePlayerSize = 60;

        let playerSpeed = 4;
        playerPosX = screenWidth / 2 - spritePlayerSize / 2;
        playerPosY = screenHeight / 2 - spritePlayerSize / 2;
        break;

    case ENGINE_TWO:
        spritePlayerSize = 280;

        playerPosX = screenWidth / 2 - spritePlayerSize / 2;
        playerPosY = screenHeight - spritePlayerSize;
        break;
}

let playerSpeed = 6;
let playerState = "idle";

// Set sprite and animate repetition
let sprite;
let indexOfAnimation = 0;
setInterval(() => {
    if (indexOfAnimation < 6) {
        indexOfAnimation += 1
    } else {
        indexOfAnimation = 1
    }
}, 110)

// Set the variable to check the player direction
let Direction;

// ! Engine One Configuration

// Set all map variables initialisation
let map;
// actually useless -- just take array.length
let mapColumn;
let mapRow;
// actually useless -- just take array.length
let mapWidth;
let mapHeight;
let tileSize;

// Change value when changing engine
function detectEngine() {
    if (currentEngine != tempCurrentEngine) {
        if (currentEngine == "engine_one") {
            console.log('EngineOne')

            spritePlayerSize = 60;

            playerPosX = screenWidth / 2 - spritePlayerSize / 2;
            playerPosY = screenHeight / 2 - spritePlayerSize / 2;
        } else {
            console.log('EngineTwo')

            spritePlayerSize = 280;

            playerPosX = screenWidth / 2 - spritePlayerSize / 2;
            playerPosY = screenHeight - spritePlayerSize;
        }
        tempCurrentEngine = currentEngine
    }
}
let inventorySquareSize = 80;
let inventoryWidthStart = 240;
let inventoryHeigthStart = 810;
let inventoryTab = [];
let inventoryTabNumber = 0;
let actualInventoryChoose = 1;
inventoryTab.length = 5;
