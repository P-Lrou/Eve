switch (currentEngine) {
  case ENGINE_ONE:
    spritePlayerSize = 120;

    playerPosX = screenWidth / 2 - spritePlayerSize / 2;
    playerPosY = screenHeight / 2 - spritePlayerSize / 2;
    break;

  case ENGINE_TWO:
    spritePlayerSize = 360;

    playerPosX = screenWidth / 2 - spritePlayerSize / 2;
    playerPosY = screenHeight - spritePlayerSize;
    break;
}

let indexOfPnjAnim = 0;
setInterval(() => {
  if (indexOfPnjAnim < 6) {
    indexOfPnjAnim += 1;
  } else {
    indexOfPnjAnim = 1;
  }
}, 110);

let indexOfAnimation2 = 0;
setInterval(() => {
  if (indexOfAnimation2 < 20) {
    indexOfAnimation2 += 1;
  } else {
    indexOfAnimation2 = 0;
  }
}, 110);

let indexOfAnimation = 0;
setInterval(() => {
  if (indexOfAnimation < 6) {
    indexOfAnimation += 1;
  } else {
    indexOfAnimation = 1;
  }
}, 110);

function detectEngine() {
  if (currentEngine != tempCurrentEngine) {
    if (currentEngine == "engine_one") {
      spritePlayerSize = 120;

      playerPosX = screenWidth / 2 - spritePlayerSize / 2;
      playerPosY = screenHeight / 2 - spritePlayerSize / 2;
    } else {
      spritePlayerSize = 360;

      playerPosX = screenWidth / 2 - spritePlayerSize / 2;
      playerPosY = screenHeight - spritePlayerSize - 58;
    }
    tempCurrentEngine = currentEngine;
  }
}


