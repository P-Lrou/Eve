// Set the global screen size
let screenWidth = innerWidth;
let screenHeight = innerHeight;

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

let EngineTwoMapX = 0;
let EngineTwoMapY = 0;
let actualMapEngineTwo = "";
let actualDirectionEngineTwo = "";

let spriteCutSize = 20;
let tileSizeCut = 16;

let playerSpeed = 6;
let pnjSpeed = 3;
let playerState = "idle";

// Set sprite and animate repetition

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
let inventorySquareSize = 80;
let inventoryWidthStart = screenWidth / 1.5;
let inventoryHeigthStart = 10;
let inventoryTab = [];
let inventoryTabNumber = 0;
let actualInventoryChoose = 1;
inventoryTab.length = 5;

let canInteract = false;
let tempText = "";
let i = 0;
let index = 0;
let bool = false;
let actualDialog = [];
