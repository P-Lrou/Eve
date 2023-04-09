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
  let animationMoovePlayer = npcTile.get(
    0,
    spriteCutSize * 3,
    spriteCutSize,
    spriteCutSize
  );
  actualNPC.startx = actualNPC.xdist + EngineTwoMapX;


  if (startingIsDialogsFinish && gameIsStarting && actualNPC.name === "npcRose") {
    setTimeout(() => {
      actualNPC.canMove = true
    }, 1500);
  }
  if (startingIsDialogsFinish && gameIsStarting && actualNPC.name === "npcJulliette") {
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
  switch (actualNPC.npcDirection[0]) {
    case 0:
      break;
    case 1:
      animationMoovePlayer = npcTile.get(
        spriteCutSize * indexOfNpcAnim,
        spriteCutSize * 0,
        spriteCutSize,
        spriteCutSize
      );
      if (actualNPC.canMove && canMoveAllNPC) {
        actualNPC.xdist += npcSpeed;
      }
      collisionNPCEngineTwo(actualNPC);
      break;
    case -1:
      animationMoovePlayer = npcTile.get(
        spriteCutSize * indexOfNpcAnim,
        spriteCutSize * 1,
        spriteCutSize,
        spriteCutSize
      );
      if (actualNPC.canMove && canMoveAllNPC) {
        actualNPC.xdist -= npcSpeed;
      }
      collisionNPCEngineTwo(actualNPC);
      break;
  }
  switch (actualNPC.npcDirection[1]) {
    case 0:
      break;
    case 1:
      animationMoovePlayer = npcTile.get(
        spriteCutSize * indexOfNpcAnim,
        spriteCutSize * 3,
        spriteCutSize,
        spriteCutSize
      );
      collisionNPCEngineTwo(actualNPC);
      break;
    case -1:
      animationMoovePlayer = npcTile.get(
        spriteCutSize * indexOfNpcAnim,
        spriteCutSize * 2,
        spriteCutSize,
        spriteCutSize
      );
      collisionNPCEngineTwo(actualNPC);
      break;
  }
  if (actualNPC.name === "npcRose" && gameIsStarting) {
    actualNPCCollision = 'left'
  }
  if (actualNPC.name === "npcJulliette" && gameIsStarting) {
    actualNPCCollision = 'rigth'
  }
  if (actualNPC.name === "npcFinn" && gameIsStarting) {
    actualNPCCollision = 'rigth'
  }
  if (!actualNPC.canMove || !canMoveAllNPC) {
    if (actualNPCCollision === 'left') {
      animationMoovePlayer = npcTile.get(
        0,
        spriteCutSize,
        spriteCutSize,
        spriteCutSize
      );
    }
    if (actualNPCCollision === 'rigth') {
      animationMoovePlayer = npcTile.get(
        0,
        0,
        spriteCutSize,
        spriteCutSize
      );
    }
  }

  if (debugMode) {
    fill(0, 255, 0, 60)
    noStroke();
    rect(actualNPC.startx + 30,
      screenHeight - spritePlayerSize - 59,
      spritePlayerSize,
      spritePlayerSize)
  }
  image(
    animationMoovePlayer,
    actualNPC.startx,
    screenHeight - spritePlayerSize - 59,
    spritePlayerSize,
    spritePlayerSize
  );
}

//^ This function do the collision for the NPC with the same function as the main player
//- Take in params the actualNPC
function collisionNPCEngineTwo(actualNPC) {
  let TopCornerLeft = getTopCornerLeft([
    actualNPC.startx + 30,
    screenHeight - spritePlayerSize - 59,
    spritePlayerSize,
    spritePlayerSize,
  ]);
  let TopCornerRight = getTopCornerRight([
    actualNPC.startx,
    screenHeight - spritePlayerSize - 59,
    spritePlayerSize - 25,
    spritePlayerSize,
  ]);
  let BottomCornerLeft = getBottomCornerLeft([
    actualNPC.startx + 30,
    screenHeight - spritePlayerSize - 59,
    spritePlayerSize,
    spritePlayerSize,
  ]);
  let BottomCornerRight = getBottomCornerRight([
    actualNPC.startx,
    screenHeight - spritePlayerSize - 59,
    spritePlayerSize - 25,
    spritePlayerSize,
  ]);
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
  let cornerMyPlayer = [
    playerPosX,
    playerPosY,
    spritePlayerSize,
    spritePlayerSize,
  ];
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
    image(interactionButton, playerPosX + 160, playerPosY - 90, 64, 64);
    if (keyIsDown(69) && canMoveEngineTwo) {
      canInteract = true;
      canMovePlayer = false;
      canTalkGlobalNPC = false;
      canDrawnInventory = false;

      if (actualNPC.name === "npcJulliette") {
        actualDialog = actualNPC.dialog[0];
        actualPlayersOrder = actualNPC.dialog[1];
      }
      if (actualNPC.name === 'npcJulliette' && quests.questCloneMap.questCloneMapIsStarted && !quests.questCloneMap.questCloneMapIsOver && actualQuestName === "questCloneMap") {
        actualDialog = actualNPC.dialog[2];
        actualPlayersOrder = actualNPC.dialog[3];
        quests.questCloneMap.canDrawInteractionClonMapQuest = true;
      }
      if (actualNPC.name === 'npcJulliette' && quests.questCloneMap.questCloneMapIsOver && actualQuestName === "questCloneMap") {
        actualDialog = actualNPC.dialog[4];
        actualPlayersOrder = actualNPC.dialog[5];
        actualQuestName = ''
      }
      if (actualNPC.name === 'npcJulliette' && quests.seedsBagQuest.questSeedBagQuestIsStarted && quests.seedsBagQuest.canTakeSeedBag && actualQuestName === "seedsBagQuest") {
        actualDialog = actualNPC.dialog[6];
        actualPlayersOrder = actualNPC.dialog[7];
        quests.seedsBagQuest.seedBagHasBeenTaked = true;
        quests.seedsBagQuest.canTakeSeedBag = false;
        quests.seedsBagQuest.canAddToInventorySeedBag = true;
      }

      if (actualNPC.name === "npcRose") {
        actualDialog = actualNPC.dialog[0];
        actualPlayersOrder = actualNPC.dialog[1];
      }
      if (actualNPC.name === "npcRose" && quests.seedsBagQuest.questSeedBagQuestIsStarted && actualQuestName === "seedsBagQuest") {
        actualDialog = actualNPC.dialog[2];
        actualPlayersOrder = actualNPC.dialog[3];
        quests.seedsBagQuest.canTakeSeedBag = true;
      }
      if (actualNPC.name === "npcRose" && quests.seedsBagQuest.questSeedBagQuestIsStarted && quests.seedsBagQuest.seedBagHasBeenTaked && actualQuestName === "seedsBagQuest") {
        actualDialog = actualNPC.dialog[4];
        actualPlayersOrder = actualNPC.dialog[5];
        quests.seedsBagQuest.seedBagQuestIsOver = true;
        removeFromInventory("seedsBagBotanicMap")
        actualQuestName = "questCloneMap"
        quests.questCloneMap.questCloneMapIsStarted = true;
      }
      return;
    }
  }
}
