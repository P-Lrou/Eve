//& This file managed all NPC drawing and interaction

//^ This function draw the NPC with information that are stock in a json
//- Take in params the actualNPC
function drawNPCEngineTwo(NPC) {
  let actualNPC = undefined;
  npc.npcEngineTwo.forEach((element) => {
    if (element.name === NPC) {
      actualNPC = element;
    }
  });
  if (gameIsStarting) {
    npc.npcStartingAnimation.forEach((element) => {
      if (element.name === NPC) {
        actualNPC = element;
      }
    });
  }
  let npcTile = findActualNpc(actualNPC.name);
  let animationMoovePlayer = npcTile.get(0, spriteCutSize * 3, spriteCutSize, spriteCutSize);
  actualNPC.startx = actualNPC.xdist + EngineTwoMapX;


  if (startingIsDialogsFinish && gameIsStarting && actualNPC.name === "npcOctavia") {
    setTimeout(() => {
      actualNPC.canMove = true
    }, 1500);
  }
  if (startingIsDialogsFinish && gameIsStarting && actualNPC.name === "npcAllie") {
    actualNPC.canMove = true
  }
  if (startingIsDialogsFinish && gameIsStarting && actualNPC.name === "npcFinn") {
    setTimeout(() => {
      actualNPC.canMove = true
    }, 2500);
  }
  if (actualNPC.xdist > Math.abs(engineTwoDividePartW * actualNPC.minX)) {
    actualNPC.npcDirection = [-1, 0];
  }
  if (actualNPC.xdist < Math.abs(engineTwoDividePartW * actualNPC.maxX)) {
    actualNPC.npcDirection = [1, 0];
  }
  if (actualNPC.name === "npcFinn" && quests.repareCapsulesMap.wrenchIsTaked) {
    actualNPCCollision = 'rigth'
  }

  switch (actualNPC.npcDirection[0]) {
    case 0:
      break;
    case 1:
      if (actualNPC.name !== "eve") {
        animationMoovePlayer = npcTile.get(spriteCutSize * indexOfNpcAnimation, spriteCutSize * 0, spriteCutSize, spriteCutSize);
        if (actualNPC.canMove && canMoveAllNPC) {
          actualNPC.xdist += npcSpeed;
        }
        collisionNPCEngineTwo(actualNPC);
      }
      break;
    case -1:
      if (actualNPC.name !== "eve") {
        animationMoovePlayer = npcTile.get(spriteCutSize * indexOfNpcAnimation, spriteCutSize * 1, spriteCutSize, spriteCutSize);
        if (actualNPC.canMove && canMoveAllNPC) {
          actualNPC.xdist -= npcSpeed;
        }
        collisionNPCEngineTwo(actualNPC);
      }
      break;
  }
  if (actualNPC.name === "npcOctavia" && gameIsStarting) {
    actualNPCCollision = 'left'
  }
  if (actualNPC.name === "npcAllie" && gameIsStarting) {
    actualNPCCollision = 'rigth'
  }
  if (actualNPC.name === "npcFinn" && gameIsStarting) {
    actualNPCCollision = 'rigth'
  }

  if (actualNPC.name === "npcFinn" && quests.repareCapsulesMap.wrenchIsTaked) {
    actualNPC.canMove = false;
    actualNPC.xdist = 3510
  }

  if (!actualNPC.canMove && actualNPC.name !== "eve" || !canMoveAllNPC && actualNPC.name !== "eve") {
    if (actualNPCCollision === 'left') {
      animationMoovePlayer = npcTile.get(0, spriteCutSize, spriteCutSize, spriteCutSize);
    }
    if (actualNPCCollision === 'rigth') {
      animationMoovePlayer = npcTile.get(0, 0, spriteCutSize, spriteCutSize);
    }
  }

  if (debugMode) {
    fill(0, 255, 0, 60)
    noStroke();
    rect(actualNPC.startx + 30, screenHeight - spritePlayerSize - 59, spritePlayerSize, spritePlayerSize)
    noFill();
  }
  if (actualNPC.name !== "eve" && actualNPC.name !== "eveEndGame") {
    image(animationMoovePlayer, actualNPC.startx, screenHeight - spritePlayerSize - 59, spritePlayerSize, spritePlayerSize);
  }
  else if (!quests.fight.canShowEveAfterFight && !quests.lastQuest.canDrawEve) {
    animationMoovePlayer = npcTile.get(22 * indexOfEveIdleAnim, 0, 22, 39);
    image(animationMoovePlayer, actualNPC.startx, screenHeight - 620 - 59, 350, 620);
  }
  if (quests.fight.canShowEveAfterFight) {
    let evePositionXAfterFight = evePositionStartAfterFight + EngineTwoMapX
    image(playerAlienImg.get(fightCutSizeW * indexPlayerAlienSpriteEndFight, 0, 49, 39),
      evePositionXAfterFight - fightCutSizeW * fightRatio / 2.8,
      522 - fightCutSizeH * fightRatio / 2,
      fightCutSizeW * fightRatio,
      fightCutSizeH * fightRatio);
  }
  if (actualNPC.name === "eveEndGame" && quests.lastQuest.canDrawEve && canMoveAllNPC) {
    animationMoovePlayer = npcTile.get(22 * indexEveMoveEndGame, 39, 22, 39);
    image(animationMoovePlayer, actualNPC.startx, screenHeight - 620 - 59, 350, 620);
    if (actualNPC.startx < 982) {
      actualNPC.startx = 982;
      canMoveAllNPC = false;
      actualDialog = moreInteractionJSON.endGame[4];
      actualPlayersOrder = moreInteractionJSON.endGame[5];
      canInteract = true;
    }
  } else if (actualNPC.name === "eveEndGame" && quests.lastQuest.canDrawEve && !canMoveAllNPC) {
    animationMoovePlayer = npcTile.get(22 * indexOfEveIdleAnim, 0, 22, 39);
    image(animationMoovePlayer, actualNPC.startx, screenHeight - 620 - 59, 350, 620);
  }
}

//^ This function do the collision for the NPC with the same function as the main player
//- Take in params the actualNPC
function collisionNPCEngineTwo(actualNPC) {
  let TopCornerLeft = getTopCornerLeft([actualNPC.startx + 30, screenHeight - spritePlayerSize - 59, spritePlayerSize, spritePlayerSize,]);
  let TopCornerRight = getTopCornerRight([actualNPC.startx, screenHeight - spritePlayerSize - 59, spritePlayerSize - 25, spritePlayerSize,]);
  let BottomCornerLeft = getBottomCornerLeft([actualNPC.startx + 30, screenHeight - spritePlayerSize - 59, spritePlayerSize, spritePlayerSize,]);
  let BottomCornerRight = getBottomCornerRight([actualNPC.startx, screenHeight - spritePlayerSize - 59, spritePlayerSize - 25, spritePlayerSize,]);
  // fill("red")
  // ellipse(TopCornerLeft[0], TopCornerLeft[1], 15)
  // fill("blue")
  // ellipse(TopCornerRight[0], TopCornerRight[1], 15)
  // fill("green")
  // ellipse(BottomCornerLeft[0], BottomCornerLeft[1], 15)
  // fill("yellow")
  // ellipse(BottomCornerRight[0], BottomCornerRight[1], 15)

  if (isCollisionWithPlayer(TopCornerLeft) && !gameIsStarting) {
    actualNPC.canMove = false;
    actualNPCCollision = 'left';
    canTalkToNpc(actualNPC);
    return;
  }
  if (isCollisionWithPlayer(TopCornerRight) && !gameIsStarting) {
    actualNPC.canMove = false;
    actualNPCCollision = 'rigth';
    canTalkToNpc(actualNPC);
    return;
  }
  if (isCollisionWithPlayer(BottomCornerLeft) && !gameIsStarting) {
    actualNPC.canMove = false;
    actualNPCCollision = 'left';
    canTalkToNpc(actualNPC);
    return;
  }
  if (isCollisionWithPlayer(BottomCornerRight) && !gameIsStarting) {
    actualNPC.canMove = false;
    actualNPCCollision = 'rigth';
    canTalkToNpc(actualNPC);
    return;
  }
  if (!gameIsStarting) {
    actualNPC.canMove = true;
  }
  canTalkingToNPC = false;
}

//^ This function is actually to check if the npc position is on a collision 
//- Take in params the acutal player position
function isCollisionWithPlayer(point) {
  let cornerMyPlayer = [playerPosX, playerPosY, spritePlayerSize, spritePlayerSize,];
  if (pointIsInRect(point, cornerMyPlayer)) {
    return true;
  }
  return false;
}

// ^ This function check if the Player can talk to NPC
//- Take in params the actualNPC
function canTalkToNpc(actualNPC) {
  if (actualNPC.canTalk && canMovePlayer && canTalkGlobalNPC) {
    canTalkingToNPC = true;
    if (keyIsDown(69)) {
      image(interactionButton.get(14, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
    } else {
      image(interactionButton.get(0, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
    }
    if (eIsPressed && canMoveEngineTwo && canMovePlayer) {
      eIsPressed = false;
      canInteract = true;
      canMovePlayer = false;
      canTalkGlobalNPC = false;
      canDrawMenus = false;

      if (actualNPC.name === "npcAllie") {
        actualDialog = actualNPC.dialog[0];
        actualPlayersOrder = actualNPC.dialog[1];
      }
      if (actualNPC.name === 'npcAllie' && quests.questCloneMap.questCloneMapIsStarted && !quests.questCloneMap.questCloneMapIsOver && actualQuestName === "questCloneMap") {
        actualDialog = actualNPC.dialog[2];
        actualPlayersOrder = actualNPC.dialog[3];
        quests.questCloneMap.canDrawInteractionClonMapQuest = true;
      }
      if (actualNPC.name === 'npcAllie' && quests.questCloneMap.questCloneMapIsOver && actualQuestName === "questCloneMap") {
        actualDialog = actualNPC.dialog[4];
        actualPlayersOrder = actualNPC.dialog[5];
        actualQuestName = 'repareCapsulesMap';
        quests.repareCapsulesMap.questRepareCapsulesMapIsStarted = true;
      }
      if (actualNPC.name === 'npcAllie' && quests.seedsBagQuest.questSeedBagQuestIsStarted && quests.seedsBagQuest.canTakeSeedBag && actualQuestName === "seedsBagQuest") {
        actualDialog = actualNPC.dialog[6];
        actualPlayersOrder = actualNPC.dialog[7];
        quests.seedsBagQuest.seedBagHasBeenTaked = true;
        quests.seedsBagQuest.canTakeSeedBag = false;
        quests.seedsBagQuest.canAddToInventorySeedBag = true;
      }

      if (actualNPC.name === "npcOctavia") {
        actualDialog = actualNPC.dialog[0];
        actualPlayersOrder = actualNPC.dialog[1];
      }
      if (actualNPC.name === "npcOctavia" && quests.seedsBagQuest.questSeedBagQuestIsStarted && actualQuestName === "seedsBagQuest") {
        actualDialog = actualNPC.dialog[2];
        actualPlayersOrder = actualNPC.dialog[3];
        quests.seedsBagQuest.canTakeSeedBag = true;
      }
      if (actualNPC.name === "npcOctavia" && quests.seedsBagQuest.questSeedBagQuestIsStarted && quests.seedsBagQuest.seedBagHasBeenTaked && actualQuestName === "seedsBagQuest") {
        actualDialog = actualNPC.dialog[4];
        actualPlayersOrder = actualNPC.dialog[5];
        quests.seedsBagQuest.seedBagQuestIsOver = true;
        removeFromInventory("seedsBagBotanicMap")
        actualQuestName = "questCloneMap"
        quests.questCloneMap.questCloneMapIsStarted = true;
      }

      if (actualNPC.name === "npcFinn") {
        actualDialog = actualNPC.dialog[0];
        actualPlayersOrder = actualNPC.dialog[1];
      }
      if (actualNPC.name === "npcFinn" && quests.repareCapsulesMap.questRepareCapsulesMapIsStarted && actualQuestName === "repareCapsulesMap") {
        actualDialog = actualNPC.dialog[2];
        actualPlayersOrder = actualNPC.dialog[3];
        quests.repareCapsulesMap.canTakeWrench = true;
      }
      if (actualNPC.name === "npcFinn" && quests.repareCapsulesMap.wrenchIsTaked && actualQuestName === "repareCapsulesMap") {
        actualDialog = actualNPC.dialog[4];
        actualPlayersOrder = actualNPC.dialog[5];
        quests.repareCapsulesMap.hadTalkToFinn = true;
      }
      if (actualNPC.name === "npcFinn" && quests.repareCapsulesMap.wallIsRepare && actualQuestName === "repareCapsulesMap") {
        actualDialog = actualNPC.dialog[6];
        actualPlayersOrder = actualNPC.dialog[7];
        actualQuestName = "sleepQuest"
        quests.repareCapsulesMap.questRepareCapsulesMapIsOver = true;
      }
      return;
    }
  }
}
