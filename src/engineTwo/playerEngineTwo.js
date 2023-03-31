// Assign all player inputs
function playerInputsEngineTwo() {
  playerState = "idle";
  if (keyIsDown(LEFT_ARROW) && canMoveEngineTwo || (keyIsDown(81) && canMoveEngineTwo)) {
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

  if (keyIsDown(RIGHT_ARROW) && canMoveEngineTwo || (keyIsDown(68) && canMoveEngineTwo)) {
    playerState = "mooving";
    playerPosX += playerSpeed;
    if (playerPosX + spritePlayerSize > screenWidth + 17) {
      if (
        screenWidth - EngineTwoMapX >
        engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH)
      ) {
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
      EngineTwoMapX - playerPosX < engineTwoDividePartW * 16 &&
      EngineTwoMapX - playerPosX > engineTwoDividePartW * 18
    ) {
      textSize(20);
      fill("white");
      text("Press E to change room", playerPosX - 40, playerPosY - 20);
      setTimeout(() => {
        if (keyIsDown(69)) {
          currentEngine = ENGINE_ONE;
        }
      }, 500);
    }
  }
  if (actualDirectionEngineTwo == "rigth") {
    if (
      EngineTwoMapX - playerPosX < engineTwoDividePartW * 1 &&
      EngineTwoMapX - playerPosX > engineTwoDividePartW * 3
    ) {
      textSize(20);
      fill("rgb(255,255,255)");
      noStroke();
      text("Press E to change room", playerPosX - 40, playerPosY - 20);
      setTimeout(() => {
        if (keyIsDown(69)) {
          currentEngine = ENGINE_ONE;
        }
      }, 500);
    }
  }
}

function canDoInteraction() {
  if (
    EngineTwoMapX - playerPosX < engineTwoDividePartW * 7 &&
    EngineTwoMapX - playerPosX > engineTwoDividePartW * 9
  ) {
    textSize(20);
    fill("rgb(255,255,255)");
    noStroke();
    text("Press E to interact", playerPosX - 40, playerPosY - 20);
    setTimeout(() => {
      if (keyIsDown(69)) {
        canDrawEngineCloneMapQuest = true;
        canMoveEngineTwo = false;
        canMoveAllNPC = false;
      }
    }, 500);
  }
}

function drawnQuestCloneMap() {
  image(
    questAnimationCloneMap.get(
      1100 * indexOfAnimationQuestClone,
      0,
      1100,
      800
    ),
    400,
    50,
    screenWidth / 1.74,
    screenHeight / 1.16
  );
  noStroke();
  fill('#00E4B0')
  rect(1086.5, yRectMapEngineTwoCloneMap, 117, heigthRectMapEngineTwoCloneMap)
  image(
    questCloneMap1,
    400,
    50,
    screenWidth / 1.74,
    screenHeight / 1.16
  );
  image(
    questCloneMap2,
    400 + (screenWidth / 1.74) - (screenWidth / 29.09),
    50,
    screenWidth / 29.09,
    screenHeight / 12.72
  );

  if (pointIsInRect([mouseX, mouseY], [1086.5, 192 , 117, yRectMapEngineTwoCloneMap + 50 - 192])) {
    if (mouseIsPressed) {
      if (mouseButton == LEFT) {
        yRectMapEngineTwoCloneMap = mouseY
        heigthRectMapEngineTwoCloneMap = heigthRectMapEngineTwoCloneMap + (oldY - yRectMapEngineTwoCloneMap)
        oldY = yRectMapEngineTwoCloneMap
      }
    }
  }

  setTimeout(() => {
    if (pointIsInRect([mouseX, mouseY], [400 + (screenWidth / 1.74) - (screenWidth / 29.09), 50, screenWidth / 29.09, screenHeight / 12.72])) {
      cursor('pointer');
      if (mouseIsPressed === true) {
        if (mouseButton == LEFT) {
          canDrawEngineTow2ndMap = false;
          canMoveAllNPC = true;
          canMoveEngineTwo = true;
        }
      }
    } else {
      cursor('auto')
    }
  }, 500);
}