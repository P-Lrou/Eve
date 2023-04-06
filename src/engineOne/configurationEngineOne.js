//& This file setup all variables for the first Engine

//+ This set the player start position on the map
let playerStartX = 1750;
let playerStartY =  3150;

//+ Set the start point of the map
let mapX = -(screenWidth / 2) + playerStartX;
let mapY = -(screenHeight / 2) + playerStartY;

//+ Set the ratio if need zoom on map
let ratio = 1;

//+ Set the tile size
let tileSizeCut = 16;

//+ Set player speed
let playerSpeed = 7;

//+ actually useless -> Just set variable to take map settings in Json
let map = undefined;
let mapColumn = undefined;
let mapRow = undefined;
let mapWidth = undefined;
let mapHeight = undefined;
let tileSize = undefined;