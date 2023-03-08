// Assign all player inputs
function playerInputsEngineTwo() {
  playerState = "idle";
  if (keyIsDown(LEFT_ARROW) || keyIsDown(81)) {
    playerState = "mooving";
    playerPosX -= playerSpeed;
    if (playerPosX < 3) {
      if (-EngineTwoMapX < 0) {
        playerPosX += playerSpeed;
        playerState = "idle";
      } else {
        EngineTwoMapX += playerSpeed;
        playerPosX += playerSpeed;
      }
    }
    Direction = "left";
  }

  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    playerState = "mooving";
    playerPosX += playerSpeed;
    if (playerPosX + spritePlayerSize > screenWidth + 17) {
      if (screenWidth - 900 - EngineTwoMapX > backgroundCloneMap.width * 15) {
        playerPosX -= playerSpeed;
        playerState = "idle";
      } else {
        playerPosX -= playerSpeed;
        EngineTwoMapX -= playerSpeed;
      }
    }
    Direction = "right";
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
}

// Draw Player with the good asset
function drawPlayerEngineTwo() {
  switch (playerState) {
    case "idle":
      drawIdlePlayerEngineTwo();
      break;
    case "mooving":
      drawMovePlayerEngineTwo();
      break;
    default:
      throw new Error("Player State isn't defined or isn't the good value");
  }
}

function drawIdlePlayerEngineTwo() {
  switch (Direction) {
    case "left":
      image(
        mainCaracter.get(0, spriteCutSize * 1, spriteCutSize, spriteCutSize),
        playerPosX,
        playerPosY,
        spritePlayerSize,
        spritePlayerSize
      );
      break;
    case "right":
      image(
        mainCaracter.get(0, spriteCutSize * 0, spriteCutSize, spriteCutSize),
        playerPosX,
        playerPosY,
        spritePlayerSize,
        spritePlayerSize
      );
      break;
    default:
      image(
        mainCaracter.get(0, spriteCutSize * 3, spriteCutSize, spriteCutSize),
        playerPosX,
        playerPosY,
        spritePlayerSize,
        spritePlayerSize
      );
  }
}

function drawMovePlayerEngineTwo() {
  switch (Direction) {
    case "left":
      image(
        mainCaracter.get(
          spriteCutSize * indexOfAnimation,
          spriteCutSize * 1,
          spriteCutSize,
          spriteCutSize
        ),
        playerPosX,
        playerPosY,
        spritePlayerSize,
        spritePlayerSize
      );
      break;
    case "right":
      image(
        mainCaracter.get(
          spriteCutSize * indexOfAnimation,
          spriteCutSize * 0,
          spriteCutSize,
          spriteCutSize
        ),
        playerPosX,
        playerPosY,
        spritePlayerSize,
        spritePlayerSize
      );
      break;
    default:
      image(
        mainCaracter.get(
          spriteCutSize,
          spriteCutSize * 3,
          spriteCutSize,
          spriteCutSize
        ),
        playerPosX,
        playerPosY,
        spritePlayerSize,
        spritePlayerSize
      );
  }
}

function changeMapEngineTwo() {
  if (actualDirectionEngineTwo == "left") {
    if (
      EngineTwoMapX - playerPosX < -4579 &&
      EngineTwoMapX - playerPosX > -5173
    ) {
      textSize(32);
      text("Press E to change room", 10, 30);
      setTimeout(() => {
        if (keyIsDown(69)) {
          currentEngine = ENGINE_ONE;
        }
      }, 500);
    }
  }
  if (actualDirectionEngineTwo == "rigth") {
    if (
      EngineTwoMapX - playerPosX < -163 &&
      EngineTwoMapX - playerPosX > -800
    ) {
      textSize(32);
      text("Press E to change room", 10, 30);
      setTimeout(() => {
        if (keyIsDown(69)) {
          currentEngine = ENGINE_ONE;
        }
      }, 500);
    }
  }
}
