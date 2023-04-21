//& This file managed the Engine One

//^ This function actually start and managed the Engine One
function engineOneStart() {
  cursor('default');
  //- Here change map if doors are closed
  if (rigthDoorsAreClosed || leftDoorsAreClosed) {
    map = map2
  }
  if (rigthDoorsAreClosed && !leftDoorsAreClosed) {
    map = map3
  }

  //- Used to draw doors in front of or back the player
  drawMapFirstValue = 4
  if (mapX < 3500) {
    if (mapY > 815 || mapY < 600 && mapY > 400) {
      drawMapFirstValue = map.layers.length
    }
  }
  background("black");

  //- Draw the map and the player
  drawMap();
  drawPlayer();

  //- Used to draw doors in front of or back the player
  if (mapX < 3500) {
    if (mapY < 815 && mapY > 600 || mapY < 400 || mapY > 970) {
      drawMap2();
    }
  } else {
    drawMap2();
  }

  //- All this functions are used to set interactions or map modifications
  showSpecificCollisionDebug();
  drawInventory();
  drawQuestMenu();
  playerInputs();
  openChest();
  showNotes();
  canActiveDoor();
  showDoorMessage();
  showMoreInformationsAboutAlert();

  //- This condition is used to show dialogs part in front of all during the Engine One
  if (canInteract && !canMovePlayer && !animationActeTwoStart) {
    fill("rgba(31, 31, 31, 0.68)");
    rect(EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight)
    tint(0, 0, 0)
    noTint();
    writeText(actualDialog);
    noFill();
  }

  //- This part is used to show red alarms effect during engine One
  if (acteTwoIsStarting) {
    fill(`rgba(${redValue}, 0, 0, 0.2)`)
    rect(0, 0, screenWidth, screenHeight)
    noFill();
  }
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
  let actualAsset = undefined;
  for (let y = 0; y < map.mapRow; y++) {
    for (let x = 0; x < map.mapColumn; x++) {
      if (acteTwoIsStarting) {
        actualAsset = findActualDarkAsset(actualLayer, y, x);
      } else {
        actualAsset = findActualAsset(actualLayer, y, x);
      }
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
