//& This file managed the Engine One

//^ This function actually start and managed the Engine One
function engineOneStart() {
  background(backgroundSpace);
  drawMap();
  drawPlayer();
  drawMap2();
  drawInventory();
  playerInputs();
}

//^ This function draw the map using the json instruction
function drawMap() {
  for (let i = 0; i < 2; i++) {
    drawTilesForOneLayer(map.layers[i]);
  }
}

//^ This function is used to draw layer by layer the map using the json instruction
//- Take in params the actual layer who's set by drawMap()
function drawTilesForOneLayer(actualLayer) {
  for (let y = 0; y < map.mapRow; y++) {
    for (let x = 0; x < map.mapColumn; x++) {
      let actualAsset = findActualAsset(actualLayer, y, x);
      image(
        actualAsset,
        x * tileSize - mapX,
        y * tileSize - mapY,
        tileSize,
        tileSize
      );
    }
  }
}

//^ This two functions do the same as the other function but in front of the player
function drawMap2() {
  for (let i = 2; i < map.layers.length; i++) {
    drawTilesForOneLayer(map.layers[i]);
  }
}

function drawTilesForOneLayer2(actualLayer) {
  for (let y = 0; y < map.mapRow; y++) {
    for (let x = 0; x < map.mapColumn; x++) {
      let actualAsset = findActualAsset(actualLayer, y, x);
      image(
        actualAsset,
        x * tileSize - mapX,
        y * tileSize - mapY,
        tileSize,
        tileSize
      );
    }
  }
}
