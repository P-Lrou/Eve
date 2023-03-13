// Start creation of all engine two settings
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
      drawPNJEngineTwo("pnjJulliette");
      canDoInteraction();
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
      drawPNJEngineTwo("pnjRose");
      break;
  }
  drawPlayerEngineTwo();
  drawInventory();
  changeMapEngineTwo();
  if (canInteract) {
    writeText(actualDialog);
  }
  if (canDrawEngineTow2ndMap) {
    drawEngineTow2ndMap();
  }
}
