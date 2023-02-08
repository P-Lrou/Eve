// Set the global screen size
let screenWidth = 810;
let screenHeight = 910;

// Set the map creation start point
let mapX = 0;
let mapY = 0;

// Set the ratio if need zoom on map
let ratio = 1;

// Set engines names to variables
const ENGINE_ONE = "engine_one";
const ENGINE_TWO = "engine_two";

// Set the start engine
let currentEngine = ENGINE_ONE;

// Set player start point/ tile size / speed
let playerPosX = 100;
let playerPosY = 100;
let playerTileSize = 100;
let playerMoveSize = 2.5;

// Set sprite and animate repetition
let sprite;
let rep = 0;
setInterval(() =>{
    if (rep < 15){
        rep += 1
    } else {
        rep = 0
    }
}, 60)

// Set the variable to check the player direction
let Direction;

// Set all map variables initialisation
let map;
let mapColumn;
let mapRow;
let mapWidth;
let mapHeight;
let tileWidth;
let tileHeight;
let mapRatio;