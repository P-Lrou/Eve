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
        5780,
        screenHeight
      );
      image(
        jarAnimationCloneMap.get(324 * indexOfAnimation2, 0, 324, 60),
        EngineTwoMapX,
        EngineTwoMapY,
        5780,
        900
      );
      image(lightCloneMap, EngineTwoMapX, EngineTwoMapY, 5780, screenHeight);
      drawPNJEngineTwo("pnjJulliette");
      break;
    case "botanicMap":
      image(
        backgroundBotanicMap,
        EngineTwoMapX,
        EngineTwoMapY,
        5780,
        screenHeight
      );
      drawPNJEngineTwo("pnjRose");
      break;
  }
  drawPlayerEngineTwo();
  drawInventory();
  changeMapEngineTwo();
}
