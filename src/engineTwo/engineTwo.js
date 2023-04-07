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
      drawInventory();
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
      image(
        lightBotanicMap,
        EngineTwoMapX,
        EngineTwoMapY,
        engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH),
        screenHeight
      );
      drawNPCEngineTwo("npcRose");
      drawPlayerEngineTwo();
      drawInventory();
      break;
    case "commandMap":
      image(
        backgroundCommandMap,
        EngineTwoMapX,
        EngineTwoMapY,
        engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH),
        screenHeight
      );
      image(
        animationScreenCommandMap.get(324 * indexOfAnimation4, 0, 324, 60),
        EngineTwoMapX,
        EngineTwoMapY,
        engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH),
        screenHeight
      );
      image(
        controlPanelAnimationCommandMap.get(324 * indexOfAnimation5, 0, 324, 60),
        EngineTwoMapX,
        EngineTwoMapY,
        engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH),
        screenHeight
      );
      image(
        earthAnimationCommandMap.get(324 * indexOfAnimation6, 0, 324, 60),
        EngineTwoMapX,
        EngineTwoMapY,
        engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH),
        screenHeight
      );
      image(
        seatsCommandMap,
        EngineTwoMapX,
        EngineTwoMapY,
        engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH),
        screenHeight
      );
      image(
        lightCommandMap,
        EngineTwoMapX,
        EngineTwoMapY,
        engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH),
        screenHeight
      );
      drawPlayerEngineTwo();
      if (canShowArrows) {
        if (alphaArrows < 255) {
          alphaArrows = alphaArrows + 5;
        }
        tint(255, alphaArrows);
        image(arrowsButton, playerPosX + 100, playerPosY - 90, 137, 59);
        noTint();
      }
      drawInventory();
      if (gameIsStarting) {
        canMovePlayer = false;
        drawNPCEngineTwo('npcJulliette');
        drawNPCEngineTwo('npcRose');
        drawNPCEngineTwo('npcFinn');
        actualDialog = moreInteractionJSON.dialogStartingAnimation[0];
        actualPlayersOrder = moreInteractionJSON.dialogStartingAnimation[1];
        if (!startingIsDialogsFinish) {
          canInteract = true;
          canMoveAllNPC = false;
          canDrawnInventory = false;
        }
      }
      break;
    case "capsuleMap":
      image(
        backgroundCapsuleMap,
        EngineTwoMapX,
        EngineTwoMapY,
        engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH),
        screenHeight
      );
      drawPlayerEngineTwo();
      drawInventory();
      break;
  }
  changeMapEngineTwo();
  if (canInteract) {
    rect(EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight)
    tint(0, 0, 0)
    noTint();
    writeText(actualDialog);
    noFill();
  }
  moreInteractionEnineTwo();
}