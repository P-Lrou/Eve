//& This file managed the Engine One

//^ This function actually start and managed the Engine One
function engineTwoStart() {
  erase();
  cursor('default');
  playerInputsEngineTwo();
  switch (actualMapEngineTwo) {
    case "cloneMap":
      if (acteTwoIsStarting) {
        image(backgroundCloneMapActeTwo, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      } else {
        image(backgroundCloneMap, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      }
      if (!acteTwoIsStarting) {
        image(jarAnimationCloneMap.get(324 * indexOfCuveAnimationCloneMap, 0, 324, 60), EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
        if (quests.questCloneMap.questCloneMapIsStarted && !quests.questCloneMap.isGoodForColor) {
          image(screenAnimationCloneMap.get(324 * indexOfScreenAnimationCloneMap, 0, 324, 60), EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
        }
      }
      if (acteTwoIsStarting) {
        if (getRandomNumber(0, 50) !== 10) {
          image(lightCloneMapActeTwo, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
        }
      } else {
        image(lightCloneMap, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      }
      if (!acteTwoIsStarting) {
        drawNPCEngineTwo("npcAllie");
      }
      canDoInteractionCloneQuest();
      if (acteTwoIsStarting && quests.fight.canShowEve) {
        drawNPCEngineTwo("eve");
      }
      drawPlayerEngineTwo();
      if (acteTwoIsStarting) {
        image(frontOfCloneMapActeTwo, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      } else {
        image(frontOfCloneMap, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      }
      if (!quests.questCloneMap.canDrawEngineCloneMapQuest) {
        drawInventory();
        drawQuestMenu();
      }
      if (quests.questCloneMap.canDrawEngineCloneMapQuest && !quests.questCloneMap.questCloneMapIsOver) {
        drawnQuestCloneMap();
      }
      cameraMoveActTwoAnimationFigth();
      startTheAfterFightPart();
      interactionsAfterFight();
      if (quests.fight.canStartFigth) {
        fight();
      }
      break;
    case "botanicMap":
      image(backgroundBotanicMap, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      image(planteAnimationBotanicMap.get(324 * indexOfPlanteAnimationBotanicMap, 0, 324, 60), EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      image(lightBotanicMap, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      if (!acteTwoIsStarting) {
        drawNPCEngineTwo("npcOctavia");
      }
      drawPlayerEngineTwo();
      image(frontOfBotanicMap, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      drawInventory();
      drawQuestMenu();
      break;
    case "commandMap":
      image(backgroundCommandMap, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      image(animationScreenCommandMap.get(324 * indexOfScreenAnimationCommandMap, 0, 324, 60), EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      image(controlPanelAnimationCommandMap.get(324 * indexOfControlPanelAnimationCommandMap, 0, 324, 60), EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      image(earthAnimationCommandMap.get(324 * indexOfEarthAnimationCommandMap, 0, 324, 60), EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      image(seatsCommandMap, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      image(lightCommandMap, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      if (!quests.goToCloneMapAfterSleep.gunTaked) {
        image(gunCommandMap, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      }
      if (!quests.goToCloneMapAfterSleep.cardTaked) {
        image(cardCommandMap, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      }
      drawPlayerEngineTwo();
      if (canShowArrows) {
        if (alphaArrows < 255) {
          alphaArrows = alphaArrows + 5;
        }
        tint(255, alphaArrows);
        image(arrowsButton, playerPosX + 100, playerPosY - 90, 137, 59);
        noTint();
      }
      takeGunAndCard();
      drawInventory();
      drawQuestMenu();
      takeObjectForLastQuest();
      if (gameIsStarting) {
        canMovePlayer = false;
        drawNPCEngineTwo('npcAllie');
        drawNPCEngineTwo('npcOctavia');
        drawNPCEngineTwo('npcFinn');
        actualDialog = moreInteractionJSON.dialogStartingAnimation[0];
        actualPlayersOrder = moreInteractionJSON.dialogStartingAnimation[1];
        if (!startingIsDialogsFinish) {
          canInteract = true;
          canMoveAllNPC = false;
          canDrawMenus = false;
        }
      }
      break;
    case "capsuleMap":
      image(backgroundCapsuleMapWithoutSuit, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      if (!quests.lastQuest.haveTakeSuit) {
        image(suit, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      }
      if (quests.lastQuest.canOpenDoorAnimation) {
        image(doorOpenAnimation.get(324 * indexOfDoorOpenAnimationCapsuleMap, 0, 324, 60), EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      }
      if (!quests.lastQuest.havePressOnButtonToOpenCapsule) {
        image(buttonOff, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      } else {
        image(buttonOn, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      }
      image(caspule, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      if (!quests.lastQuest.havePressOnButtonToOpenCapsule) {
        image(lightAlone, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
        image(ligthsCapsuleMap, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      } else {
        image(lightAloneOff, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      }
      if (quests.repareCapsulesMap.wallIsRepare || !quests.repareCapsulesMap.questRepareCapsulesMapIsStarted) {
        image(normalPipe, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      } else {
        image(gazPipe.get(324 * indexOfGazPipeAnimationCapsuleMap, 0, 324, 60), EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      }
      if (acteTwoIsStarting) {
        image(redLigthsAnimation.get(324 * indexOfRedLigthsAnimationCapsuleMap, 0, 324, 60), EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      }
      if (!acteTwoIsStarting) {
        drawNPCEngineTwo('npcFinn');
      }
      if (quests.lastQuest.canDrawEve) {
        drawNPCEngineTwo('eveEndGame');
      }
      drawPlayerEngineTwo();
      image(pipeFront, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      drawInventory();
      drawQuestMenu();
      canDointeractionCapsuleMapQuest();
      openCapsuleAndStartLastDialogs();
      lastCameraAnimation();
      takeSuit();
      break;
    case "dormsMap":
      image(backgroundDormsMap, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      image(screenOneAnimationDormsMap.get(324 * indexOfScreenOneAnimationDormsMap, 0, 324, 60), EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      image(screenTwoAnimationDormsMap.get(324 * indexOfScreenTwoAnimationDormsMap, 0, 324, 60), EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      image(ligthsDormsMap, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      drawPlayerEngineTwo();
      image(frontOfDormsMap, EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight);
      drawInventory();
      drawQuestMenu();
      showDialogsAfterWeakingUp();
      if (actualQuestName === 'sleepQuest') {
        canGoSleep();
      }
      break;
  }
  changeMapEngineTwo();
  if (canInteract && !canMovePlayer && !animationActeTwoStart) {
    fill("rgba(31, 31, 31, 0.68)");
    rect(EngineTwoMapX, EngineTwoMapY, engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH), screenHeight)
    tint(0, 0, 0)
    noTint();
    writeText(actualDialog);
    noFill();
  }
  moreInteractionEnineTwo();
}