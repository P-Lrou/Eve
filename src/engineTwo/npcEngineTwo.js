function drawNPCEngineTwo(NPC) {
  let actualNPC = undefined;
  npc.npcEngineTwo.forEach((element) => {
    if (element.name === NPC) {
      actualNPC = element;
    }
  });
  let npcTile = findActualNpc(actualNPC.name);
  let animationMoovePlayer = npcTile.get(
    0,
    spriteCutSize * 3,
    spriteCutSize,
    spriteCutSize
  );
  actualNPC.startx = actualNPC.xdist + EngineTwoMapX;

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
  if (!actualNPC.canMove || !canMoveAllNPC) {
    animationMoovePlayer = npcTile.get(
      0,
      spriteCutSize,
      spriteCutSize,
      spriteCutSize
    );
  }

  image(
    animationMoovePlayer,
    actualNPC.startx,
    screenHeight - spritePlayerSize - 59,
    spritePlayerSize,
    spritePlayerSize
  );
}

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

  if (isCollisionWithPlayer(TopCornerLeft)) {
    actualNPC.canMove = false;
    canTalkToNpc(actualNPC);
    return;
  }
  if (isCollisionWithPlayer(TopCornerRight)) {
    actualNPC.canMove = false;
    canTalkToNpc(actualNPC);
    return;
  }
  if (isCollisionWithPlayer(BottomCornerLeft)) {
    actualNPC.canMove = false;
    canTalkToNpc(actualNPC);
    return;
  }
  if (isCollisionWithPlayer(BottomCornerRight)) {
    actualNPC.canMove = false;
    canTalkToNpc(actualNPC);
    return;
  }
  actualNPC.canMove = true;
}

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

function canTalkToNpc(actualNPC) {
  if (actualNPC.canTalk) {
    textSize(20);
    fill("rgb(255,255,255)");
    noStroke();
    text(
      `Press E to talk to ${actualNPC.name.slice(3)}.`,
      playerPosX - 50,
      playerPosY - 20
    );
    setTimeout(() => {
      if (keyIsDown(69) && canMoveEngineTwo) {
        canInteract = true;
        actualDialog = actualNPC.dialog;
      }
    }, 500);
  }
}
