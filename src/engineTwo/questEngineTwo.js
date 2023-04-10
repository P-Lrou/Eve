//& This file actually managed quest in the Engine Two

//^ This function is used to draw the clone map quest
function drawnQuestCloneMap() {
  image(questAnimationCloneMap.get(1100 * indexOfAnimationQuestClone, 0, 1100, 800), 266, 59, 1100, 800);
  noStroke();
  if (quests.questCloneMap.isGoodForColor) {
    fill('#00E4B0')
  } else {
    fill('#cc2e1d')
  }
  rect(950, yRectMapEngineTwoCloneMap, 117, heigthRectMapEngineTwoCloneMap)
  image(questCloneMap1, 266, 59, 1100, 800);

  if (keyIsPressed) {
    if (keyIsDown(UP_ARROW) && quests.questCloneMap.canMoveQuestCloneMap) {
      yRectMapEngineTwoCloneMap -= 2
      heigthRectMapEngineTwoCloneMap += 2
    }
    if (keyIsDown(DOWN_ARROW) && quests.questCloneMap.canMoveQuestCloneMap) {
      yRectMapEngineTwoCloneMap += 2
      heigthRectMapEngineTwoCloneMap -= 2
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
  if (yRectMapEngineTwoCloneMap > 596 && yRectMapEngineTwoCloneMap < 606) {
    quests.questCloneMap.isGoodForColor = true;
    quests.questCloneMap.canMoveQuestCloneMap = false;
    setTimeout(() => {
      quests.questCloneMap.questCloneMapIsOver = true;
      quests.questCloneMap.canDrawEngineCloneMapQuest = false;
      canMoveAllNPC = true;
      canMoveEngineTwo = true;
      canMovePlayer = true;
      quests.questCloneMap.canDrawInteractionClonMapQuest = false;
    }, 2000);
  }
}