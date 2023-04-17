//& This file setup all variables for the first Engine

//+ This set the player start position on the map
let playerStartX = 5000;
let playerStartY = 1400;

//+ Set the start point of the map
let mapX = -(screenWidth / 2) + playerStartX;
let mapY = -(screenHeight / 2) + playerStartY;

//+ Set the ratio if need zoom on map
let ratio = 1;

//+ Set the tile size
let tileSizeCut = 16;

//+ Set player speed
let playerSpeed = 10;

//+ actually useless -> Just set variable to take map settings in Json
let map = undefined;
let mapColumn = undefined;
let mapRow = undefined;
let mapWidth = undefined;
let mapHeight = undefined;
let tileSize = undefined;

let drawMapFirstValue = 4;
let leftDoorsAreClosed = false;
let rigthDoorsAreClosed = false;

let canReadNote = false;
let actualNote = undefined;
let canShowNotes = false;

let canDownRed = false;
let canUpRed = true;
let redValue = 0;

let canActiveDoorBool = false;
let canShowDoorMessage = false;

setInterval(() => {
    if (canUpRed) {
      if (redValue < 140) {
        redValue = redValue + 10;
      } else {
        canDownRed = true;
        canUpRed = false;
      }
    }
    if (canDownRed) {
      if (redValue > 0) {
        redValue = redValue - 10;
      } else {
        redValue = 0
        canDownRed = false;
        canUpRed = true;
      }
    }
  }, 100);