function drawPNJEngineTwo(PNJ) {
  let actualPNJ = undefined;
  pnj.pnjEngineTwo.forEach((element) => {
    if (element.name === PNJ) {
      actualPNJ = element;
    }
  });
  let pnjTile = findActualPnj(actualPNJ.name);
  let animationMoovePlayer = pnjTile.get(
    0,
    spriteCutSize * 3,
    spriteCutSize,
    spriteCutSize
  );
  actualPNJ.startx = actualPNJ.xdist + EngineTwoMapX;

  if (actualPNJ.xdist > Math.abs(engineTwoDividePartW * actualPNJ.minX)) {
    actualPNJ.pnjDirection = [-1, 0];
  }
  if (actualPNJ.xdist < Math.abs(engineTwoDividePartW * actualPNJ.maxX)) {
    actualPNJ.pnjDirection = [1, 0];
  }
  switch (actualPNJ.pnjDirection[0]) {
    case 0:
      break;
    case 1:
      animationMoovePlayer = pnjTile.get(
        spriteCutSize * indexOfPnjAnim,
        spriteCutSize * 0,
        spriteCutSize,
        spriteCutSize
      );
      if (actualPNJ.canMove) {
        actualPNJ.xdist += pnjSpeed;
      }
      collisionPNJEngineTwo(actualPNJ);
      break;
    case -1:
      animationMoovePlayer = pnjTile.get(
        spriteCutSize * indexOfPnjAnim,
        spriteCutSize * 1,
        spriteCutSize,
        spriteCutSize
      );
      if (actualPNJ.canMove) {
        actualPNJ.xdist -= pnjSpeed;
      }
      collisionPNJEngineTwo(actualPNJ);
      break;
  }
  switch (actualPNJ.pnjDirection[1]) {
    case 0:
      break;
    case 1:
      animationMoovePlayer = pnjTile.get(
        spriteCutSize * indexOfPnjAnim,
        spriteCutSize * 3,
        spriteCutSize,
        spriteCutSize
      );
      collisionPNJEngineTwo(actualPNJ);
      break;
    case -1:
      animationMoovePlayer = pnjTile.get(
        spriteCutSize * indexOfPnjAnim,
        spriteCutSize * 2,
        spriteCutSize,
        spriteCutSize
      );
      collisionPNJEngineTwo(actualPNJ);
      break;
  }
  if (!actualPNJ.canMove) {
    animationMoovePlayer = pnjTile.get(
      0,
      spriteCutSize,
      spriteCutSize,
      spriteCutSize
    );
  }

  image(
    animationMoovePlayer,
    actualPNJ.startx,
    screenHeight - spritePlayerSize - 59,
    spritePlayerSize,
    spritePlayerSize
  );
}

function collisionPNJEngineTwo(actualPNJ) {
  let TopCornerLeft = getTopCornerLeft([
    actualPNJ.startx + 30,
    screenHeight - spritePlayerSize - 59,
    spritePlayerSize,
    spritePlayerSize,
  ]);
  let TopCornerRight = getTopCornerRight([
    actualPNJ.startx,
    screenHeight - spritePlayerSize - 59,
    spritePlayerSize - 25,
    spritePlayerSize,
  ]);
  let BottomCornerLeft = getBottomCornerLeft([
    actualPNJ.startx + 30,
    screenHeight - spritePlayerSize - 59,
    spritePlayerSize,
    spritePlayerSize,
  ]);
  let BottomCornerRight = getBottomCornerRight([
    actualPNJ.startx,
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
    actualPNJ.canMove = false;
    canTalkToPnj(actualPNJ);
    return;
  }
  if (isCollisionWithPlayer(TopCornerRight)) {
    actualPNJ.canMove = false;
    canTalkToPnj(actualPNJ);
    return;
  }
  if (isCollisionWithPlayer(BottomCornerLeft)) {
    actualPNJ.canMove = false;
    canTalkToPnj(actualPNJ);
    return;
  }
  if (isCollisionWithPlayer(BottomCornerRight)) {
    actualPNJ.canMove = false;
    canTalkToPnj(actualPNJ);
    return;
  }
  actualPNJ.canMove = true;
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

function canTalkToPnj(actualPNJ) {
  if (actualPNJ.canTalk) {
    textSize(20);
    fill("rgb(255,255,255)");
    noStroke();
    text(
      `Press E to talk to ${actualPNJ.name.slice(3)}.`,
      playerPosX - 50,
      playerPosY - 20
    );
    setTimeout(() => {
      if (keyIsDown(69) && canMoveEngineTwo) {
        canInteract = true;
        actualDialog = actualPNJ.dialog;
      }
    }, 500);
  }
}
