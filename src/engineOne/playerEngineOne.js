//& This file actually managed the player for the Engine One

//^ This function managed player input
function playerInputs() {
  let lastPosition = [mapX, mapY]

  Direction = [0, 0];
  playerState = "idle";

  if (keyIsDown(UP_ARROW) || keyIsDown(90) && canMovePlayer) {
    mapY -= playerSpeed;
    Direction[1] -= 1;
    playerState = "mooving";
  }

  if (keyIsDown(DOWN_ARROW) || keyIsDown(83) && canMovePlayer) {
    mapY += playerSpeed;
    Direction[1] += 1;
    playerState = "mooving";
  }

  if (keyIsDown(LEFT_ARROW) || keyIsDown(81) && canMovePlayer) {
    mapX -= playerSpeed;
    Direction[0] -= 1;
    playerState = "mooving";
  }

  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68) && canMovePlayer) {
    mapX += playerSpeed;
    Direction[0] += 1;
    playerState = "mooving";
  }

  if (keyIsDown(49)) actualInventoryChoose = 1; // Keyboard 1 --> Set inventory slot selected to 1
  if (keyIsDown(50)) actualInventoryChoose = 2; // Keyboard 2 --> Set inventory slot selected to 2
  if (keyIsDown(51)) actualInventoryChoose = 3; // Keyboard 3 --> Set inventory slot selected to 3
  if (keyIsDown(52)) actualInventoryChoose = 4; // Keyboard 4 --> Set inventory slot selected to 4


  madeCollision();

  // Specific collision, just put the player position on map and then it returns if yes or not there is a collision here
  if (checkSpecificCollision([mapX + playerPosX + spritePlayerSize / 2, mapY + playerPosY + spritePlayerSize / 2]) === true) { mapX = lastPosition[0]; mapY = lastPosition[1] }

}

//^ This function call the function to draw the player using the direction
function drawPlayer() {
  let TopCornerLeft = getTopCornerLeft([playerPosX + 28, playerPosY, spritePlayerSize, spritePlayerSize,]);
  let TopCornerRight = getTopCornerRight([playerPosX, playerPosY, spritePlayerSize - 28, spritePlayerSize,]);
  let BottomCornerLeft = getBottomCornerLeft([playerPosX + 28, playerPosY, spritePlayerSize - 40, spritePlayerSize - 2,]);
  let BottomCornerRight = getBottomCornerRight([playerPosX, playerPosY, spritePlayerSize - 28, spritePlayerSize - 2,]);

  // fill("red")
  // ellipse(TopCornerLeft[0], TopCornerLeft[1], 15)
  // fill("blue")
  // ellipse(TopCornerRight[0], TopCornerRight[1], 15)
  // fill("green")
  // ellipse(BottomCornerLeft[0], BottomCornerLeft[1], 15)
  // fill("yellow")
  // ellipse(BottomCornerRight[0], BottomCornerRight[1], 15)

  switch (playerState) {
    case "idle":
      drawIdlePlayer();
      break;
    case "mooving":
      drawMovePlayer();
      break;
    default:
      throw new Error("Player State isn't defined or isn't the good value");
  }

  if (checkIfIsObject(getTileNameForObject(TopCornerLeft))) {
    takeObject(TopCornerLeft);
  }
  if (checkIfIsObject(getTileNameForObject(TopCornerRight))) {
    takeObject(TopCornerRight);
  }
  if (checkIfIsObject(getTileNameForObject(BottomCornerLeft))) {
    takeObject(BottomCornerLeft);
  }
  if (checkIfIsObject(getTileNameForObject(BottomCornerRight))) {
    takeObject(BottomCornerRight);
  }
}

//^ This function draw the player if he dont move
function drawIdlePlayer() {
  image(mainCaracter.get(0, spriteCutSize * 3, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
}

//^ This function draw the player if he move
function drawMovePlayer() {
  let animationMoovePlayer = mainCaracter.get(0, spriteCutSize * 3, spriteCutSize, spriteCutSize);

  switch (Direction[1]) {
    case 0:
      break;
    case 1:
      animationMoovePlayer = mainCaracter.get(spriteCutSize * indexOfAnimation, spriteCutSize * 3, spriteCutSize, spriteCutSize);
      break;
    case -1:
      animationMoovePlayer = mainCaracter.get(spriteCutSize * indexOfAnimation, spriteCutSize * 2, spriteCutSize, spriteCutSize);
      break;
  }

  switch (Direction[0]) {
    case 0:
      break;
    case 1:
      animationMoovePlayer = mainCaracter.get(spriteCutSize * indexOfAnimation, spriteCutSize * 0, spriteCutSize, spriteCutSize);
      break;
    case -1:
      animationMoovePlayer = mainCaracter.get(spriteCutSize * indexOfAnimation, spriteCutSize * 1, spriteCutSize, spriteCutSize);
      break;
  }

  image(animationMoovePlayer, playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
}

//^ This function is used to check if the actual tile of the player is an tile with collision
//- Take in param the actualtile number
function checkIfIsCollisionWall(actualTile) {
  switch (actualTile) {
    case 1:
      return true;
    case 2:
      return true;
    case 3:
      return true;
    case 4:
      return true;
    case 5:
      return true;
    case 6:
      return true;
    case 7:
      return true;
    case 8:
      return true;
    case 9:
      return true;
    case 10:
      return true;
    case 11:
      return true;
    case 12:
      return true;
    case 14:
      return true;
    case 18:
      return true;
    case 19:
      return true;
    case 20:
      return true;
    case 24:
      return true;
    case 26:
      return true;
    case 30:
      return true;
    case 222:
      return true;
    case 216:
      return true;
    case 244:
      return true;
    case 245:
      return true;

    case 998:
      changeMap("clone");
      return false;
    case 999:
      changeMap("botanic");
      return false;
    case 997:
      changeMap("command");
      return false;
    case 996:
      changeMap("capsule");
      return false;

    default:
      return false;
  }
}

//^ This function is used to check if the actual tile of the player is an tile with an object that can be taked
//- Take in param the actualtile number
function checkIfIsObject(actualTile) {
  switch (actualTile) {
    default:
      return false;
  }
}

//^ This function is used to get the actual tile name for collision tiles
//- Take in param the player position point
function getTileName(point) {
  return map.layers[0][Math.trunc((point[1] + mapY) / tileSize)][Math.trunc((point[0] + mapX) / tileSize)];
}

//^ This function is used to get the actual tile name for objects tiles
//- Take in param the player position point
function getTileNameForObject(point) {
  return map.layers[1][Math.trunc((point[1] + mapY) / tileSize)][Math.trunc((point[0] + mapX) / tileSize)];
}

//^ This function made the collision for the player
function madeCollision() {
  let TopCornerLeft = getTopCornerLeft([playerPosX + 28, playerPosY + 110, spritePlayerSize, spritePlayerSize,]);
  let TopCornerRight = getTopCornerRight([playerPosX, playerPosY + 110, spritePlayerSize - 28, spritePlayerSize,]);
  let BottomCornerLeft = getBottomCornerLeft([playerPosX + 28, playerPosY, spritePlayerSize - 40, spritePlayerSize + 8,]);
  let BottomCornerRight = getBottomCornerRight([playerPosX, playerPosY, spritePlayerSize - 28, spritePlayerSize + 8,]);
  if (debugMode) {
    fill(255, 0, 0, 60)
    noStroke();
    rect(playerPosX + 28, playerPosY + 60, spritePlayerSize - 60, spritePlayerSize - 54)
  }
  // fill("red")
  // ellipse(TopCornerLeft[0], TopCornerLeft[1], 15)
  // fill("blue")
  // ellipse(TopCornerRight[0], TopCornerRight[1], 15)
  // fill("green")
  // ellipse(BottomCornerLeft[0], BottomCornerLeft[1], 15)
  // fill("yellow")
  // ellipse(BottomCornerRight[0], BottomCornerRight[1], 15)
  // console.log("topleft")
  // console.log(getTileName(TopCornerLeft))
  // console.log("topright")
  // console.log(getTileName(TopCornerRight))
  if (checkIfIsCollisionWall(getTileName(TopCornerLeft)) || checkIfIsCollisionWall(getTileNameForObject(TopCornerLeft))) {
    if (Direction[0] === -1) {
      mapX += playerSpeed;
    } else if (Direction[1] === -1) {
      mapY += playerSpeed;
    }
  }
  if (checkIfIsCollisionWall(getTileName(TopCornerRight)) || checkIfIsCollisionWall(getTileNameForObject(TopCornerRight))) {
    if (Direction[0] === 1) {
      mapX -= playerSpeed;
    } else if (Direction[1] === -1) {
      mapY += playerSpeed;
    }
  }
  if (checkIfIsCollisionWall(getTileName(BottomCornerLeft)) || checkIfIsCollisionWall(getTileNameForObject(BottomCornerLeft))) {
    if (Direction[1] === 1) {
      mapY -= playerSpeed;
    } else if (Direction[0] === -1) {
      mapX += playerSpeed;
    }
  }
  if (checkIfIsCollisionWall(getTileName(BottomCornerRight)) || checkIfIsCollisionWall(getTileNameForObject(BottomCornerRight))) {
    if (Direction[1] === 1) {
      mapY -= playerSpeed;
    } else if (Direction[0] === 1) {
      mapX -= playerSpeed;
    }
  }
}

//^ This function is used to take an object and set him in the inventory
//- Take in param the player position point
function takeObject(point) {
  image(interactionButton, playerPosX + 45, playerPosY - 50, 40, 40);
  if (keyIsDown(69)) {
    inventoryTab[inventoryTabNumber] = getTileNameForObject(point);
    inventoryTabNumber++;
    map.layers[1][Math.trunc((point[1] + mapY) / tileSize)][Math.trunc((point[0] + mapX) / tileSize)] = 0;
  }
}

//^ This function is used to change map from the first engine to the second
//- Take in param tha map wanted
function changeMap(map) {
  if (map === "clone") {
    image(interactionButton, playerPosX + 45, playerPosY - 50, 40, 40);
    setTimeout(() => {
      if (keyIsDown(69)) {
        actualMapEngineTwo = "cloneMap";
        actualDirectionEngineTwo = "left";
        EngineTwoMapX = -engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH) + screenWidth;
        canDoTransition = true;
        canMovePlayer = false;
        newEngineSelected = ENGINE_TWO
      }
    }, 500);
  }
  if (map === "botanic") {
    image(interactionButton, playerPosX + 45, playerPosY - 50, 40, 40);
    setTimeout(() => {
      if (keyIsDown(69)) {
        actualMapEngineTwo = "botanicMap";
        actualDirectionEngineTwo = "rigth";
        EngineTwoMapX = 0;
        canDoTransition = true;
        canMovePlayer = false;
        newEngineSelected = ENGINE_TWO
      }
    }, 500);
  }
  if (map === "command") {
    image(interactionButton, playerPosX + 45, playerPosY - 50, 40, 40);
    setTimeout(() => {
      if (keyIsDown(69)) {
        actualMapEngineTwo = "commandMap";
        actualDirectionEngineTwo = "left";
        EngineTwoMapX = -engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH) + screenWidth;
        canDoTransition = true;
        canMovePlayer = false;
        newEngineSelected = ENGINE_TWO
      }
    }, 500);
  }
  if (map === "capsule") {
    image(interactionButton, playerPosX + 45, playerPosY - 50, 40, 40);
    setTimeout(() => {
      if (keyIsDown(69)) {
        actualMapEngineTwo = "capsuleMap";
        actualDirectionEngineTwo = "left";
        EngineTwoMapX = -engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH) + screenWidth;
        canDoTransition = true;
        canMovePlayer = false;
        newEngineSelected = ENGINE_TWO
      }
    }, 500);
  }
}
