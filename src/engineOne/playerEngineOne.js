// Assign all player inputs
function playerInputs() {
  Direction = [0, 0];
  playerState = "idle";
  if (keyIsDown(UP_ARROW) || keyIsDown(90)) {
    mapY -= playerSpeed;
    Direction[1] -= 1;
    playerState = "mooving";
  }

  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    mapY += playerSpeed;
    Direction[1] += 1;
    playerState = "mooving";
  }

  if (keyIsDown(LEFT_ARROW) || keyIsDown(81)) {
    mapX -= playerSpeed;
    Direction[0] -= 1;
    playerState = "mooving";
  }

  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    mapX += playerSpeed;
    Direction[0] += 1;
    playerState = "mooving";
  }

  if (keyIsDown(49)) {
    actualInventoryChoose = 1;
  }

  if (keyIsDown(50)) {
    actualInventoryChoose = 2;
  }

  if (keyIsDown(51)) {
    actualInventoryChoose = 3;
  }

  if (keyIsDown(52)) {
    actualInventoryChoose = 4;
  }

  if (keyIsDown(53)) {
    actualInventoryChoose = 5;
  }

  if (keyIsDown(54)) {
    actualInventoryChoose = 6;
  }
  madeCollision();
}

// Draw Player with the good asset
function drawPlayer() {
  let TopCornerLeft = getTopCornerLeft([
    playerPosX + 28,
    playerPosY,
    spritePlayerSize,
    spritePlayerSize,
  ]);
  let TopCornerRight = getTopCornerRight([
    playerPosX,
    playerPosY,
    spritePlayerSize - 28,
    spritePlayerSize,
  ]);
  let BottomCornerLeft = getBottomCornerLeft([
    playerPosX + 28,
    playerPosY,
    spritePlayerSize - 40,
    spritePlayerSize - 2,
  ]);
  let BottomCornerRight = getBottomCornerRight([
    playerPosX,
    playerPosY,
    spritePlayerSize - 28,
    spritePlayerSize - 2,
  ]);
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

function drawIdlePlayer() {
  image(
    mainCaracter.get(0, spriteCutSize * 3, spriteCutSize, spriteCutSize),
    playerPosX,
    playerPosY,
    spritePlayerSize,
    spritePlayerSize
  );
}

function drawMovePlayer() {
  let animationMoovePlayer = mainCaracter.get(
    0,
    spriteCutSize * 3,
    spriteCutSize,
    spriteCutSize
  );

  switch (Direction[0]) {
    case 0:
      break;
    case 1:
      animationMoovePlayer = mainCaracter.get(
        spriteCutSize * indexOfAnimation,
        spriteCutSize * 0,
        spriteCutSize,
        spriteCutSize
      );
      break;
    case -1:
      animationMoovePlayer = mainCaracter.get(
        spriteCutSize * indexOfAnimation,
        spriteCutSize * 1,
        spriteCutSize,
        spriteCutSize
      );
      break;
  }
  switch (Direction[1]) {
    case 0:
      break;
    case 1:
      animationMoovePlayer = mainCaracter.get(
        spriteCutSize * indexOfAnimation,
        spriteCutSize * 3,
        spriteCutSize,
        spriteCutSize
      );
      break;
    case -1:
      animationMoovePlayer = mainCaracter.get(
        spriteCutSize * indexOfAnimation,
        spriteCutSize * 2,
        spriteCutSize,
        spriteCutSize
      );
      break;
  }

  image(
    animationMoovePlayer,
    playerPosX,
    playerPosY,
    spritePlayerSize,
    spritePlayerSize
  );
}

// Check if the tile where the player is, is a collision block
function checkIfIsCollisionWall(actualTile) {
  switch (actualTile) {
    case 1:
      return true;
    case 2:
      return true;
    case "doorTopDown":
      return true;
    case 99:
      changeMap("clone");
      return false;
    case "doorTopDown2":
      return true;
    case 98:
      changeMap("botanic");
      return false;
    case 7:
      return true;
    case 8:
      return true;
    case 9:
      return true;
    case 14:
      return true;
    case 16:
      return true;
    case 20:
      return true;
    case 21:
      return true;
    case 22:
      return true;
    case 23:
      return true;
    case 24:
      return true;
    case 25:
      return true;
    case 26:
      return true;
    case 90:
      return true;
    case 29:
      return true;
    case 30:
      return true;
    case 33:
      return true;
    default:
      return false;
  }
}

function checkIfIsObject(actualTile) {
  switch (actualTile) {
    case "coinYellow":
      return true;
    case "coinGreen":
      return true;
    case "coinBlue":
      return true;
    default:
      return false;
  }
}

function getTileName(point) {
  return map.layers[0][Math.trunc((point[1] + mapY) / tileSize)][
    Math.trunc((point[0] + mapX) / tileSize)
  ];
}

function getTileNameForObject(point) {
  return map.layers[1][Math.trunc((point[1] + mapY) / tileSize)][
    Math.trunc((point[0] + mapX) / tileSize)
  ];
}

// Made the collision between the player and the collision tile
function madeCollision() {
  let TopCornerLeft = getTopCornerLeft([
    playerPosX + 28,
    playerPosY + 60,
    spritePlayerSize,
    spritePlayerSize,
  ]);
  let TopCornerRight = getTopCornerRight([
    playerPosX,
    playerPosY + 60,
    spritePlayerSize - 28,
    spritePlayerSize,
  ]);
  let BottomCornerLeft = getBottomCornerLeft([
    playerPosX + 28,
    playerPosY,
    spritePlayerSize - 40,
    spritePlayerSize - 2,
  ]);
  let BottomCornerRight = getBottomCornerRight([
    playerPosX,
    playerPosY,
    spritePlayerSize - 28,
    spritePlayerSize - 2,
  ]);
  // fill("red")
  // ellipse(TopCornerLeft[0], TopCornerLeft[1], 15)
  // fill("blue")
  // ellipse(TopCornerRight[0], TopCornerRight[1], 15)
  // fill("green")
  // ellipse(BottomCornerLeft[0], BottomCornerLeft[1], 15)
  // fill("yellow")
  // ellipse(BottomCornerRight[0], BottomCornerRight[1], 15)
  if (
    checkIfIsCollisionWall(getTileName(TopCornerLeft)) ||
    checkIfIsCollisionWall(getTileNameForObject(TopCornerLeft))
  ) {
    if (Direction[0] === -1) {
      mapX += playerSpeed;
    } else if (Direction[1] === -1) {
      mapY += playerSpeed;
    }
  }
  if (
    checkIfIsCollisionWall(getTileName(TopCornerRight)) ||
    checkIfIsCollisionWall(getTileNameForObject(TopCornerRight))
  ) {
    if (Direction[0] === 1) {
      mapX -= playerSpeed;
    } else if (Direction[1] === -1) {
      mapY += playerSpeed;
    }
  }
  if (
    checkIfIsCollisionWall(getTileName(BottomCornerLeft)) ||
    checkIfIsCollisionWall(getTileNameForObject(BottomCornerLeft))
  ) {
    if (Direction[1] === 1) {
      mapY -= playerSpeed;
    } else if (Direction[0] === -1) {
      mapX += playerSpeed;
    }
  }
  if (
    checkIfIsCollisionWall(getTileName(BottomCornerRight)) ||
    checkIfIsCollisionWall(getTileNameForObject(BottomCornerRight))
  ) {
    if (Direction[1] === 1) {
      mapY -= playerSpeed;
    } else if (Direction[0] === 1) {
      mapX -= playerSpeed;
    }
  }
}

function takeObject(point) {
  textSize(18);
  text("Press E to take the object", playerPosX - 100, playerPosY - 10);
  if (keyIsDown(69)) {
    inventoryTab[inventoryTabNumber] = getTileNameForObject(point);
    inventoryTabNumber++;
    map.layers[1][Math.trunc((point[1] + mapY) / tileSize)][
      Math.trunc((point[0] + mapX) / tileSize)
    ] = 0;
  }
}

function changeMap(map) {
  if (map === "clone") {
    textSize(18);
    text("Press E to change room", playerPosX - 100, playerPosY - 10);
    setTimeout(() => {
      if (keyIsDown(69)) {
        actualMapEngineTwo = "cloneMap";
        actualDirectionEngineTwo = "left";
        EngineTwoMapX = -3840;
        currentEngine = ENGINE_TWO;
      }
    }, 500);
  }
  if (map === "botanic") {
    textSize(18);
    text("Press E to change room", playerPosX - 100, playerPosY - 10);
    setTimeout(() => {
      if (keyIsDown(69)) {
        actualMapEngineTwo = "botanicMap";
        actualDirectionEngineTwo = "rigth";
        EngineTwoMapX = 0;
        currentEngine = ENGINE_TWO;
      }
    }, 500);
  }
}
