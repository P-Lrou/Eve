//& This file managed the Engine One

//^ This function actually start and managed the Engine One
function engineOneStart() {
  drawMapFirstValue = 4
  if (mapX < 3500) {
    if (mapY > 815 || mapY < 600 && mapY > 400) {
      drawMapFirstValue = map.layers.length
    }
  }
  background("black");
  drawMap();
  drawPlayer();
  if (mapX < 3500) {
    if (mapY < 815 && mapY > 600 || mapY < 400 || mapY > 970) {
      drawMap2();
    }
  } else {
    drawMap2();
  }
  showSpecificCollisionDebug();
  drawInventory();
  drawQuestMenu();
  playerInputs();
}

//^ This function draw the map using the json instruction
function drawMap() {
  for (let i = 0; i < drawMapFirstValue; i++) {
    drawTilesForOneLayer(map.layers[i]);
  }
}

//^ This function is used to draw layer by layer the map using the json instruction
//- Take in params the actual layer who's set by drawMap()
function drawTilesForOneLayer(actualLayer) {
  for (let y = 0; y < map.mapRow; y++) {
    for (let x = 0; x < map.mapColumn; x++) {
      let actualAsset = findActualAsset(actualLayer, y, x);
      image(actualAsset, x * tileSize - mapX, y * tileSize - mapY, tileSize, tileSize);
      if (debugMode) {
        stroke(255, 255, 255, 150)
        strokeWeight(1.5)
        noFill()
        rect(x * tileSize - mapX, y * tileSize - mapY, tileSize, tileSize)
      }
    }
  }
}

//^ This two functions do the same as the other function but in front of the player
function drawMap2() {
  for (let i = 4; i < map.layers.length; i++) {
    drawTilesForOneLayer(map.layers[i]);
  }
}

function drawTilesForOneLayer2(actualLayer) {
  for (let y = 0; y < map.mapRow; y++) {
    for (let x = 0; x < map.mapColumn; x++) {
      let actualAsset = findActualAsset(actualLayer, y, x);
      image(actualAsset, x * tileSize - mapX, y * tileSize - mapY, tileSize, tileSize);
      if (debugMode) {
        stroke(255, 255, 255, 150)
        strokeWeight(1.5)
        noFill()
        rect(x * tileSize - mapX, y * tileSize - mapY, tileSize, tileSize)
      }
    }
  }
}
