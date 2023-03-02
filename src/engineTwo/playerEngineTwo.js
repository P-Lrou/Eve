// Assign all player inputs
function playerInputsEngineTwo() {
  playerState = "idle";
  if (keyIsDown(LEFT_ARROW) || keyIsDown(81)) {
    playerState = "mooving";
    playerPosX -= playerSpeed;
    if (playerPosX < 30) {
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
    if (playerPosX + spritePlayerSize > 970) {
      if (1000 - EngineTwoMapX > backgroundCloneMap.width * 15) {
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
        protoSprite.get(0, spriteCutSize * 1, spriteCutSize, spriteCutSize),
        playerPosX,
        playerPosY,
        spritePlayerSize,
        spritePlayerSize
      );
      break;
    case "right":
      image(
        protoSprite.get(0, spriteCutSize * 0, spriteCutSize, spriteCutSize),
        playerPosX,
        playerPosY,
        spritePlayerSize,
        spritePlayerSize
      );
      break;
    default:
      image(
        protoSprite.get(0, spriteCutSize * 3, spriteCutSize, spriteCutSize),
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
        protoSprite.get(
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
        protoSprite.get(
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
        protoSprite.get(
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
  if ((playerPosX + EngineTwoMapX) > -3604 && (playerPosX + EngineTwoMapX) < -3166) {
    textSize(32);
    text("Press E to change room", 10, 30);
    setTimeout(() => {
      if (keyIsDown(69)) {
        currentEngine = ENGINE_ONE;
      }
    }, 500);
  }
}
