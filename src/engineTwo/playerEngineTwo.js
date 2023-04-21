//& This file actually managed the player for the Engine Two

//^ This function managed player input
function playerInputsEngineTwo() {
  if (!quests.lastQuest.havePressOnButtonToOpenCapsule) {
    playerState = "idle";
  }
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

  // if (escapeIsPressed) {
  // escapeIsPressed = false;
  //   canMovePlayer = false;
  //   canShowSettingsMenu = true;
  //   currentEngine = MENU;
  // }
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
      if (!quests.goToCloneMapAfterSleep.haveGun && !quests.fight.canStartFigth && !quests.lastQuest.haveTakeSuit) {
        image(mainCaracter.get(0, spriteCutSize * 1, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
      }
      if (quests.goToCloneMapAfterSleep.haveGun && !quests.fight.canStartFigth && !quests.lastQuest.haveTakeSuit) {
        image(mainCaracterWeapon.get(0, spriteCutSize * 1, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
      }
      if (quests.lastQuest.haveTakeSuit) {
        image(mainCaracterWithSuit.get(0, spriteCutSize * 1, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
      }
      break;
    case "right":
      if (!quests.goToCloneMapAfterSleep.haveGun && !quests.fight.canStartFigth && !quests.lastQuest.haveTakeSuit) {
        image(mainCaracter.get(0, spriteCutSize * 0, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
      }
      if (quests.goToCloneMapAfterSleep.haveGun && !quests.fight.canStartFigth && !quests.lastQuest.haveTakeSuit) {
        image(mainCaracterWeapon.get(0, spriteCutSize * 0, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
      }
      if (quests.lastQuest.haveTakeSuit) {
        image(mainCaracterWithSuit.get(0, spriteCutSize * 0, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
      }
      break;
    default:
      if (!quests.goToCloneMapAfterSleep.haveGun && !quests.fight.canStartFigth && !quests.lastQuest.haveTakeSuit) {
        image(mainCaracter.get(0, spriteCutSize * 1, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
      }
      if (quests.goToCloneMapAfterSleep.haveGun && !quests.fight.canStartFigth && !quests.lastQuest.haveTakeSuit) {
        image(mainCaracterWeapon.get(0, spriteCutSize * 1, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
      }
      if (quests.lastQuest.haveTakeSuit) {
        image(mainCaracterWithSuit.get(0, spriteCutSize * 1, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
      }
  }
}

//^ This function draw the player if he move
function drawMovePlayerEngineTwo() {
  switch (Direction) {
    case "left":
      if (!quests.goToCloneMapAfterSleep.haveGun && !quests.fight.canStartFigth && !quests.lastQuest.haveTakeSuit) {
        image(mainCaracter.get(spriteCutSize * indexOfPlayerAnimation, spriteCutSize * 1, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
      }
      if (quests.goToCloneMapAfterSleep.haveGun && !quests.fight.canStartFigth && !quests.lastQuest.haveTakeSuit) {
        image(mainCaracterWeapon.get(spriteCutSize * indexOfPlayerAnimation, spriteCutSize * 1, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
      }
      if (quests.lastQuest.haveTakeSuit) {
        image(mainCaracterWithSuit.get(spriteCutSize * indexOfPlayerAnimation, spriteCutSize * 1, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
      }
      break;
    case "right":
      if (!quests.goToCloneMapAfterSleep.haveGun && !quests.fight.canStartFigth && !quests.lastQuest.haveTakeSuit) {
        image(mainCaracter.get(spriteCutSize * indexOfPlayerAnimation, spriteCutSize * 0, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
      }
      if (quests.goToCloneMapAfterSleep.haveGun && !quests.fight.canStartFigth && !quests.lastQuest.haveTakeSuit) {
        image(mainCaracterWeapon.get(spriteCutSize * indexOfPlayerAnimation, spriteCutSize * 0, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
      }
      if (quests.lastQuest.haveTakeSuit) {
        image(mainCaracterWithSuit.get(spriteCutSize * indexOfPlayerAnimation, spriteCutSize * 0, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
      }
      break;
    default:
      if (!quests.goToCloneMapAfterSleep.haveGun && !quests.fight.canStartFigth && !quests.lastQuest.haveTakeSuit) {
        image(mainCaracter.get(spriteCutSize, spriteCutSize * 1, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
      }
      if (quests.goToCloneMapAfterSleep.haveGun && !quests.fight.canStartFigth && !quests.lastQuest.haveTakeSuit) {
        image(mainCaracterWeapon.get(spriteCutSize, spriteCutSize * 1, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
      }
      if (quests.lastQuest.haveTakeSuit) {
        image(mainCaracterWithSuit.get(spriteCutSize, spriteCutSize * 1, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
      }
  }
}

//^ This function is used to change map from the second engine to the first
function changeMapEngineTwo() {
  if (actualDirectionEngineTwo === "left" && !quests.lastQuest.haveTakeSuit) {
    if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 16 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 18 && canMovePlayer && !canTalkingToNPC) {
      if (keyIsDown(69)) {
        image(interactionButton.get(14, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
      } else {
        image(interactionButton.get(0, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
      }
      if (eIsPressed && canMoveEngineTwo && canMovePlayer) {
        eIsPressed = false;
        doorSound.play()
        canDoTransition = true;
        canMovePlayer = false;
        newEngineSelected = ENGINE_ONE;
        topDownMapBackgroundSoundIsActivated = true;
        playTopDownMapBackgroundSound();
        capsuleMapBackgroundSoundIsActivated = false;
        playCapsuleMapBackgroundSound();
        cloneMapBackgroundSoundIsActivated = false;
        playCloneMapBackgroundSound();
        dormsMapBackgroundSoundIsActivated = false;
        playDormsMapBackgroundSound();
        commmandMapBackgroundSoundIsActivated = false;
        playCommmandMapBackgroundSound();
      }
    }
  }
  if (actualDirectionEngineTwo === "rigth" && !quests.lastQuest.haveTakeSuit) {
    if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 1 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 3 && canMovePlayer && !canTalkingToNPC) {
      if (keyIsDown(69)) {
        image(interactionButton.get(14, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
      } else {
        image(interactionButton.get(0, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
      }
      if (eIsPressed && canMoveEngineTwo && canMovePlayer) {
        eIsPressed = false;
        doorSound.play()
        canDoTransition = true;
        canMovePlayer = false;
        newEngineSelected = ENGINE_ONE;
        topDownMapBackgroundSoundIsActivated = true;
        playTopDownMapBackgroundSound();
        botanicMapBackgroundSoundIsActivated = false;
        playBotanicMapBackgroundSound();
      }
    }
  }
  if (quests.lastQuest.haveTakeSuit) {
    if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 16 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 18 && canMovePlayer && !canTalkingToNPC) {
      if (keyIsDown(69)) {
        image(interactionButton.get(14, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
      } else {
        image(interactionButton.get(0, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
      }
      if (eIsPressed && canMoveEngineTwo && canMovePlayer) {
        eIsPressed = false;
        actualDialog = moreInteractionJSON.endGame[2];
        actualPlayersOrder = moreInteractionJSON.endGame[3];
        canMovePlayer = false;
        canTalkGlobalNPC = false;
        canMoveAllNPC = false;
        canDrawMenus = false;
        canInteract = true;
      }
    }
  }
}

//^ This function is used to set the clone quest interaction
function canDoInteractionCloneQuest() {
  if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 7 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 9 && canMovePlayer && !quests.questCloneMap.questCloneMapIsOver && quests.questCloneMap.canDrawInteractionClonMapQuest && !canTalkingToNPC) {
    if (keyIsDown(69)) {
      image(interactionButton.get(14, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
    } else {
      image(interactionButton.get(0, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
    }
    if (eIsPressed && canMoveEngineTwo && canMovePlayer) {
      eIsPressed = false;
      quests.questCloneMap.canDrawEngineCloneMapQuest = true;
      canMoveEngineTwo = false;
      canMoveAllNPC = false;
      canMovePlayer = false;
    }
  }
}

function canDointeractionCapsuleMapQuest() {
  if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 11 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 12 && quests.repareCapsulesMap.canRepareWall && canMovePlayer && actualQuestName === 'repareCapsulesMap') {
    if (keyIsDown(69)) {
      image(interactionButton.get(14, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
    } else {
      image(interactionButton.get(0, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
    }
    if (eIsPressed && canMoveEngineTwo && canMovePlayer) {
      eIsPressed = false;
      removeFromInventory("wrenchCapsulesMap")
      quests.repareCapsulesMap.canRepareWall = false;
      quests.repareCapsulesMap.wallIsRepare = true;
      quests.repareCapsulesMap.wrenchIsTaked = false;
    }
  }
}

function canGoSleep() {
  if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 1 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 3 && canMovePlayer && actualQuestName === 'sleepQuest') {
    if (keyIsDown(69)) {
      image(interactionButton.get(14, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
    } else {
      image(interactionButton.get(0, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
    }
    if (eIsPressed && canMoveEngineTwo && canMovePlayer) {
      eIsPressed = false;
      canDoTransition = true;
      animationActeTwoStart = true;
      canMovePlayer = false;
      newEngineSelected = ENGINE_TWO;
      acteTwoIsStarting = true;
      quests.fight.canShowEve = true;
    }
  }
}

function takeGunAndCard() {
  if (quests.goToCloneMapAfterSleep.goToCloneMapAfterSleepIsStarted && !quests.goToCloneMapAfterSleep.haveGun && !quests.goToCloneMapAfterSleep.gunTaked) {
    if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 0 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 1 && canMovePlayer) {
      if (keyIsDown(69)) {
        image(interactionButton.get(14, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
      } else {
        image(interactionButton.get(0, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
      }
      if (eIsPressed && canMoveEngineTwo && canMovePlayer) {
        eIsPressed = false;
        quests.goToCloneMapAfterSleep.haveGun = true;
        quests.goToCloneMapAfterSleep.haveCard = true;
        quests.goToCloneMapAfterSleep.gunTaked = true;
        quests.goToCloneMapAfterSleep.cardTaked = true;
        canMovePlayer = false;
        canDrawMenus = true;
        canShowInventoryAnimation = true;
        newObjectToAdd = "card";
        setTimeout(() => {
          canMovePlayer = true;
        }, 3500);
        setTimeout(() => {
          objectAsBeenAdToInventoryWithAnimation = false;
        }, 20000);
      }
    }
  }
}

function showDialogsAfterWeakingUp() {
  if (quests.goToCloneMapAfterSleep.canShowDialogsAfterWeakingUp) {
    canMovePlayer = false;
    canTalkGlobalNPC = false;
    canMoveAllNPC = false;
    canDrawMenus = false;
    actualDialog = moreInteractionJSON.transitionDialogs[2];;
    actualPlayersOrder = moreInteractionJSON.transitionDialogs[3];
    canActiveDoorBool = false;
    canInteract = true;
  }
}

function cameraMoveActTwoAnimationFigth() {
  if (EngineTwoMapX > -2070 && quests.fight.animationFightCanStart && acteTwoIsStarting && actualMapEngineTwo === "cloneMap" && !quests.fight.canShowDialogsAfterFight) {
    canMovePlayer = false;
    canTalkGlobalNPC = false;
    canMoveAllNPC = false;
    canDrawMenus = false;
    if (indexForAnimationCameraFightStart > 50) {
      if (EngineTwoMapX < -540) {
        EngineTwoMapX += playerSpeedEngineTwo;
        playerPosX += playerSpeedEngineTwo;
      } else {
        EngineTwoMapX = -540
        setTimeout(() => {
          if (quests.fight.animationFightCanStart) {
            quests.fight.haveFinishAnimationFirstPart = true;
            quests.fight.dialogsFitghtIsStart = true;
            actualDialog = moreInteractionJSON.figth[0];;
            actualPlayersOrder = moreInteractionJSON.figth[1];
            canInteract = true;
          }
        }, 2000);
      }
    }
    if (indexForAnimationCameraFightStart < 55) {
      indexForAnimationCameraFightStart++
    }
  }
  if (!quests.fight.animationFightCanStart && quests.fight.dialogsFightIsOver && !quests.fight.canStartFigth && !quests.fight.fightIsFinished && !quests.fight.canShowDialogsAfterFight) {
    if (EngineTwoMapX > -980) {
      EngineTwoMapX -= playerSpeedEngineTwo;
      playerPosX -= playerSpeedEngineTwo;
    } else {
      EngineTwoMapX = -980
      setTimeout(() => {
        if (!quests.fight.canShowDialogsAfterFight && !quests.fight.canStartFigth) {
          quests.fight.canStartFigth = true;
          quests.fight.canShowEve = false;
        }
      }, 2000);
    }
  }
}

function startTheAfterFightPart() {
  if (quests.fight.canShowDialogsAfterFight) {
    quests.fight.dialogsFitghtIsStart = false;
    quests.fight.fightIsFinished = true;
    quests.lastQuest.lastQuestIsStarting = true;
    actualQuestName = 'lastQuest';
    actualDialog = moreInteractionJSON.figth[2];;
    actualPlayersOrder = moreInteractionJSON.figth[3];
    canInteract = true;
    quests.fight.canShowDialogsAfterFight = false;
  }
}

function interactionsAfterFight() {
  if (quests.fight.fightIsFinished && canMovePlayer) {
    if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 3 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 6 && canMovePlayer) {
      if (keyIsDown(69)) {
        image(interactionButton.get(14, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
      } else {
        image(interactionButton.get(0, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
      }
      if (eIsPressed && canMoveEngineTwo && canMovePlayer) {
        eIsPressed = false;
        actualDialog = moreInteractionJSON.figth[6];
        actualPlayersOrder = moreInteractionJSON.figth[7];
        canMovePlayer = false;
        canTalkGlobalNPC = false;
        canMoveAllNPC = false;
        canDrawMenus = false;
        canInteract = true;
      }
    }
    if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 8 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 9 && canMovePlayer) {
      if (keyIsDown(69)) {
        image(interactionButton.get(14, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
      } else {
        image(interactionButton.get(0, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
      }
      if (eIsPressed && canMoveEngineTwo && canMovePlayer) {
        eIsPressed = false;
        actualDialog = moreInteractionJSON.figth[8];
        actualPlayersOrder = moreInteractionJSON.figth[9];
        canMovePlayer = false;
        canTalkGlobalNPC = false;
        canMoveAllNPC = false;
        canDrawMenus = false;
        canInteract = true;
      }
    }
  }
}

function takeObjectForLastQuest() {
  if (quests.lastQuest.lastQuestIsStarting) {
    if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 0 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 1 && canMovePlayer && !quests.lastQuest.haveFiles) {
      if (keyIsDown(69)) {
        image(interactionButton.get(14, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
      } else {
        image(interactionButton.get(0, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
      }
      if (eIsPressed && canMoveEngineTwo && canMovePlayer) {
        eIsPressed = false;
        quests.lastQuest.haveFiles = true;
        canMovePlayer = false;
        canDrawMenus = true;
        canShowInventoryAnimation = true;
        newObjectToAdd = "files";
        setTimeout(() => {
          canMovePlayer = true;
        }, 3500);
        setTimeout(() => {
          objectAsBeenAdToInventoryWithAnimation = false;
        }, 20000);
      }
    }
    if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 6 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 7.5 && canMovePlayer && quests.lastQuest.haveFiles && !quests.lastQuest.haveStartDestruction) {
      if (keyIsDown(69)) {
        image(interactionButton.get(14, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
      } else {
        image(interactionButton.get(0, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
      }
      if (eIsPressed && canMoveEngineTwo && canMovePlayer) {
        eIsPressed = false;
        quests.lastQuest.haveStartDestruction = true;
        actualDialog = moreInteractionJSON.endGame[0];
        actualPlayersOrder = moreInteractionJSON.endGame[1];
        canMovePlayer = false;
        canTalkGlobalNPC = false;
        canMoveAllNPC = false;
        canDrawMenus = false;
        canInteract = true;
      }
    }
  }
}

function takeSuit() {
  if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 7.5 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 8.5 && canMovePlayer && quests.lastQuest.haveStartDestruction && !quests.lastQuest.havePressOnButtonToOpenCapsule && !quests.lastQuest.haveTakeSuit) {
    if (keyIsDown(69)) {
      image(interactionButton.get(14, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
    } else {
      image(interactionButton.get(0, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
    }
    if (eIsPressed && canMoveEngineTwo && canMovePlayer) {
      eIsPressed = false;
      quests.lastQuest.haveTakeSuit = true
    }
  }
}

function openCapsuleAndStartLastDialogs() {
  if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 5.5 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 6.5 && canMovePlayer && quests.lastQuest.haveStartDestruction && !quests.lastQuest.havePressOnButtonToOpenCapsule && quests.lastQuest.haveTakeSuit) {
    if (keyIsDown(69)) {
      image(interactionButton.get(14, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
    } else {
      image(interactionButton.get(0, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
    }
    if (eIsPressed && canMoveEngineTwo && canMovePlayer) {
      eIsPressed = false;
      quests.lastQuest.havePressOnButtonToOpenCapsule = true
    }
  }
}

function lastCameraAnimation() {
  if (quests.lastQuest.havePressOnButtonToOpenCapsule) {
    if (EngineTwoMapX < -13 || playerPosX > 205) {
      canShowArrows = false;
      playerState = "mooving";
      playerPosX -= playerSpeedEngineTwo;
      canMovePlayer = false;
      canDrawMenus = false;
      if (-EngineTwoMapX > 13) {
        EngineTwoMapX += playerSpeedEngineTwo;
        playerPosX += playerSpeedEngineTwo;
      } else if (-EngineTwoMapX < 13) {
        EngineTwoMapX = -13
      }
      Direction = "left";
    } else {
      if (!quests.lastQuest.stopAnimation) {
        EngineTwoMapX = -13
        Direction = "right";
        playerState = "idle";
        indexOfAnimation12 = 0;
        canMovePlayer = false;
        canDrawMenus = false;
        quests.lastQuest.canOpenDoorAnimation = true;
        quests.lastQuest.stopAnimation = true;
      } else {
        canMovePlayer = false;
        canDrawMenus = false;
        EngineTwoMapX = -13
        Direction = "right";
        playerState = "idle";
        setTimeout(() => {
          quests.lastQuest.canDrawEve = true;
        }, 1500);
      }
    }
  }
}