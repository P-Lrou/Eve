// Start creation of all engine two settings
function engineTwoStart() {
    erase()
    playerInputsEngineTwo();
    image(currentBackgroundEngineTwo,EngineTwoMapX,EngineTwoMapY,5780,screenHeight);
    image(animationBocal.get(324 * indexOfAnimation2,0,324,60), EngineTwoMapX, EngineTwoMapY, 5780, 900)
    drawPNJEngineTwo("pnjJulliette");
    drawPlayerEngineTwo();
    
    drawInventory();
    changeMapEngineTwo();
    // tint(255, 50);
    image(lumiere, EngineTwoMapX, EngineTwoMapY, 5780, screenHeight)
    noTint();
    console.log(EngineTwoMapX - playerPosX)
}

let indexOfAnimation2 = 0;
setInterval(() => {
  if (indexOfAnimation2 < 20) {
    indexOfAnimation2 += 1;
  } else {
    indexOfAnimation2 = 0;
  }
}, 110);