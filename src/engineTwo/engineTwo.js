//& This file managed the Engine One

//^ This function actually start and managed the Engine One
function engineTwoStart() {
  erase();
  playerInputsEngineTwo();
  switch (actualMapEngineTwo) {
    case "cloneMap":
      image(
        backgroundCloneMap,
        EngineTwoMapX,
        EngineTwoMapY,
        engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH),
        screenHeight
      );
      image(
        jarAnimationCloneMap.get(324 * indexOfAnimation2, 0, 324, 60),
        EngineTwoMapX,
        EngineTwoMapY,
        engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH),
        screenHeight
      );
      image(
        lightCloneMap,
        EngineTwoMapX,
        EngineTwoMapY,
        engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH),
        screenHeight
      );
      drawNPCEngineTwo("npcJulliette");
      canDoInteractionCloneQuest();
      drawPlayerEngineTwo();
      image(
        frontOfCloneMap,
        EngineTwoMapX,
        EngineTwoMapY,
        engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH),
        screenHeight
      );
      if (canDrawnInventory) {
        drawInventory();
      }
      if (quests.questCloneMap.canDrawEngineCloneMapQuest && !quests.questCloneMap.questCloneMapIsOver) {
        drawnQuestCloneMap();
      }
      break;
    case "botanicMap":
      image(
        backgroundBotanicMap,
        EngineTwoMapX,
        EngineTwoMapY,
        engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH),
        screenHeight
      );
      image(
        planteAnimationBotanicMap.get(324 * indexOfAnimation3, 0, 324, 60),
        EngineTwoMapX,
        EngineTwoMapY,
        engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH),
        screenHeight
      );
      drawNPCEngineTwo("npcRose");
      drawPlayerEngineTwo();
      if (canDrawnInventory) {
        drawInventory();
      }
      break;
    case "commandMap":
      image(
        backgroundCommandMap,
        EngineTwoMapX,
        EngineTwoMapY,
        engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH),
        screenHeight
      );
      drawPlayerEngineTwo();
      if (canDrawnInventory) {
        drawInventory();
      }
      break;
  }
  changeMapEngineTwo();
  if (canInteract) {
    writeText(actualDialog);
  }
}