// Set the global screen size
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

// Set the ratio if need zoom on map
let ratio = 1;

// Set engines names to variables
const ENGINE_ONE = "engine_one";
const ENGINE_TWO = "engine_two";

// ! Engine One Configuration

// Set the start engine
let currentEngine = ENGINE_ONE;

// Set player start point/ tile size / speed

//let playerStart = createVector(100, 100); // Create a new vector with X on first parameter and Y on second
let playerStartX = 100;
let playerStartY = 100;

// Set the map creation start point
let mapX = -(window.innerWidth/2) + playerStartX;
let mapY = -(window.innerHeight/2) + playerStartY;


let playerPosX = window.innerWidth/2;
let playerPosY = window.innerHeight/2 - 50;
let spritePlayerSize = 100;
let playerSpeed = 5;
let playerState = "idle";

// Set sprite and animate repetition
let sprite;
let indexOfAnimation = 0;
setInterval(() =>{
    if (indexOfAnimation < 6){
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

