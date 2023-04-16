//& This file actually managed the player for the Engine Two

//^ This function managed player input
function playerInputsEngineTwo() {
  playerState = "idle";
  if (keyIsDown(LEFT_ARROW) && canMoveEngineTwo && canMovePlayer || (keyIsDown(81) && canMoveEngineTwo && canMovePlayer)) {
    canShowArrows = false;
    playerState = "mooving";
    playerPosX -= playerSpeedEngineTwo;
    if (playerPosX < 200) {
      if (-EngineTwoMapX > 0) {
        EngineTwoMapX += playerSpeedEngineTwo;
        playerPosX += playerSpeedEngineTwo;
      } else {
        if (playerPosX < 17) {
          playerPosX += playerSpeedEngineTwo;
          playerState = "idle";
        }
      }
    }
    Direction = "left";
  }

  if (keyIsDown(RIGHT_ARROW) && canMoveEngineTwo && canMovePlayer || (keyIsDown(68) && canMoveEngineTwo && canMovePlayer)) {
    canShowArrows = false;
    playerState = "mooving";
    playerPosX += playerSpeedEngineTwo;
    if (playerPosX + spritePlayerSize > screenWidth - 200) {
      if (screenWidth - EngineTwoMapX < engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH)) {
        playerPosX -= playerSpeedEngineTwo;
        EngineTwoMapX -= playerSpeedEngineTwo;
      } else {
        if (playerPosX + spritePlayerSize > screenWidth - 17) {
          playerPosX -= playerSpeedEngineTwo;
          playerState = "idle";
        }
      }
    }
    Direction = "right";
  }

  if (keyIsDown(49) && canMoveEngineTwo && canMovePlayer) {
    actualInventoryChoose = 1;
  }

  if (keyIsDown(50) && canMoveEngineTwo && canMovePlayer) {
    actualInventoryChoose = 2;
  }

  if (keyIsDown(51) && canMoveEngineTwo && canMovePlayer) {
    actualInventoryChoose = 3;
  }

  if (keyIsDown(52) && canMoveEngineTwo && canMovePlayer) {
    actualInventoryChoose = 4;
  }
}

//^ This function call the function to draw the player using the direction
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
  if (debugMode) {
    fill(255, 0, 0, 60)
    noStroke();
    rect(playerPosX + 50, playerPosY, spritePlayerSize - 90, spritePlayerSize)
    noFill();
  }
}

//^ This function draw the player if he dont move
function drawIdlePlayerEngineTwo() {
  switch (Direction) {
    case "left":
      image(mainCaracter.get(0, spriteCutSize * 1, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
      break;
    case "right":
      image(mainCaracter.get(0, spriteCutSize * 0, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
      break;
    default:
      image(mainCaracter.get(0, spriteCutSize * 1, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
  }
}

//^ This function draw the player if he move
function drawMovePlayerEngineTwo() {
  switch (Direction) {
    case "left":
      image(mainCaracter.get(spriteCutSize * indexOfAnimation, spriteCutSize * 1, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
      break;
    case "right":
      image(mainCaracter.get(spriteCutSize * indexOfAnimation, spriteCutSize * 0, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
      break;
    default:
      image(mainCaracter.get(spriteCutSize, spriteCutSize * 1, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
  }
}

//^ This function is used to change map from the second engine to the first
function changeMapEngineTwo() {
  if (actualDirectionEngineTwo == "left") {
    if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 16 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 18 && canMovePlayer && !canTalkingToNPC) {
      image(interactionButton, playerPosX + 160, playerPosY - 90, 64, 64);
      setTimeout(() => {
        if (keyIsDown(69) && canMoveEngineTwo && canMovePlayer) {
          canDoTransition = true;
          canMovePlayer = false;
          newEngineSelected = ENGINE_ONE;
        }
      }, 500);
    }
  }
  if (actualDirectionEngineTwo == "rigth") {
    if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 1 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 3 && canMovePlayer && !canTalkingToNPC) {
      image(interactionButton, playerPosX + 160, playerPosY - 90, 64, 64);
      setTimeout(() => {
        if (keyIsDown(69) && canMoveEngineTwo && canMovePlayer) {
          canDoTransition = true;
          canMovePlayer = false;
          newEngineSelected = ENGINE_ONE;
        }
      }, 500);
    }
  }
}

//^ This function is used to set the clone quest interaction
function canDoInteractionCloneQuest() {
  if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 7 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 9 && canMovePlayer && !quests.questCloneMap.questCloneMapIsOver && quests.questCloneMap.canDrawInteractionClonMapQuest && !canTalkingToNPC) {
    image(interactionButton, playerPosX + 160, playerPosY - 90, 64, 64);
    setTimeout(() => {
      if (keyIsDown(69) && canMoveEngineTwo && canMovePlayer) {
        quests.questCloneMap.canDrawEngineCloneMapQuest = true;
        canMoveEngineTwo = false;
        canMoveAllNPC = false;
        canMovePlayer = false;
      }
    }, 500);
  }
}

function canDointeractionCapsuleMapQuest() {
  if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 10 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 11 && quests.repareCapsulesMap.canRepareWall && canMovePlayer) {
    image(interactionButton, playerPosX + 160, playerPosY - 90, 64, 64);
    if (keyIsDown(69) && canMoveEngineTwo && canMovePlayer) {
      removeFromInventory("wrenchCapsulesMap")
      quests.repareCapsulesMap.wallIsRepare = true;
    }
  }
}

function canGoSleep() {
  if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 1 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 3 && canMovePlayer) {
    image(interactionButton, playerPosX + 160, playerPosY - 90, 64, 64);
    if (keyIsDown(69) && canMoveEngineTwo && canMovePlayer) {
      canDoTransition = true;
      acteTwoIsStarting = true;
      animationActeTwoStart = true;
      canMovePlayer = false;
      newEngineSelected = ENGINE_TWO;
      actualQuestName = "goToCloneMapAfterSleep"
      quests.goToCloneMapAfterSleep.goToCloneMapAfterSleepIsStarted = true;
      leftDoorsAreClosed = true;
      rigthDoorsAreClosed = true;
    }
  }
}
