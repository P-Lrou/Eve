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

// ! Engine One Configuration

// Set the start engine
let currentEngine = ENGINE_ONE;

// Set player start point/ tile size / speed
let playerPosX = 100;
let playerPosY = 100;
let spritePlayerSize = 100;
let playerMoveSize = 2.5;
let playerState = "idle";

// Set sprite and animate repetition
let sprite;
let rep = 0;
setInterval(() =>{
    if (rep < 6){
        rep += 1
    } else {
        rep = 1
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

