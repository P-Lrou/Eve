//& This file actually managed quest in the Engine Two

//^ This function is used to draw the clone map quest
function drawnQuestCloneMap() {
  if (!quests.questCloneMap.isGoodForColor) {
    image(questAnimationCloneMap.get(1100 * indexOfAnimationQuestCloneMap, 0, 1100, 800), 266, 59, 1100, 800);
  } else {
    image(endScreenQuestCloneMap, 266, 59, 1100, 800);
  }
  noStroke();
  if (quests.questCloneMap.isGoodForColor) {
    fill('#00e4af')
  } else {
    fill('#e66a6a')
  }
  rect(950, yRectMapEngineTwoCloneMap, 117, heigthRectMapEngineTwoCloneMap)
  noFill();
  image(questCloneMap1, 266, 59, 1100, 800);

  if (keyIsPressed) {
    if (keyIsDown(UP_ARROW) && quests.questCloneMap.canMoveQuestCloneMap) {
      yRectMapEngineTwoCloneMap -= 2
      heigthRectMapEngineTwoCloneMap += 2
      image(upArrowCloneMapQuest, 266, 59, 1100, 800);
    }
    if (keyIsDown(DOWN_ARROW) && quests.questCloneMap.canMoveQuestCloneMap) {
      yRectMapEngineTwoCloneMap += 2
      heigthRectMapEngineTwoCloneMap -= 2
      image(downArrowCloneMapQuest, 266, 59, 1100, 800);
    }
  } else {
    checkIfCloneMapQuestIsOver()
  }
  if (yRectMapEngineTwoCloneMap < 202 || heigthRectMapEngineTwoCloneMap > 583) {
    yRectMapEngineTwoCloneMap = 202;
    heigthRectMapEngineTwoCloneMap = 583;
  }
  if (yRectMapEngineTwoCloneMap > 782 || heigthRectMapEngineTwoCloneMap < 3) {
    yRectMapEngineTwoCloneMap = 782;
    heigthRectMapEngineTwoCloneMap = 3;
  }
}

//^ This function is used to draw the botanic map quest
function checkIfCloneMapQuestIsOver() {
  if (yRectMapEngineTwoCloneMap > 591 && yRectMapEngineTwoCloneMap < 610) {
    quests.questCloneMap.isGoodForColor = true;
    quests.questCloneMap.canMoveQuestCloneMap = false;
    setTimeout(() => {
      if (!quests.questCloneMap.questCloneMapIsOver){
        quests.questCloneMap.questCloneMapIsOver = true;
        quests.questCloneMap.canDrawEngineCloneMapQuest = false;
        quests.questCloneMap.canDrawInteractionClonMapQuest = false;
        canMoveAllNPC = true;
        canMoveEngineTwo = true;
        canMovePlayer = true;
      }
    }, 3000);
  }
}