switch (currentEngine) {
  case ENGINE_ONE:
    spritePlayerSize = 120;

    playerPosX = screenWidth / 2 - spritePlayerSize / 2;
    playerPosY = screenHeight / 2 - spritePlayerSize / 2;
    break;

  case ENGINE_TWO:
    spritePlayerSize = screenHeight / 2.58;

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

let indexOfAnimation3 = 0;
setInterval(() => {
  if (indexOfAnimation3 < 17) {
    indexOfAnimation3 += 1;
  } else {
    indexOfAnimation3 = 0;
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
      spritePlayerSize = screenHeight / 2.58;

      playerPosX = screenWidth / 2 - spritePlayerSize / 2;
      playerPosY = screenHeight - spritePlayerSize - 58;
    }
    tempCurrentEngine = currentEngine;
  }
}

function writeText(tab) {
  if (bool) {
    fill("rgba(31, 31, 31, 0.68)");
    strokeWeight(4);
    stroke("rgba(213, 213, 213, 0.24)");
    rect(20, 10, 715, 100, 10);
    fill("rgb(255,255,255)");
    noStroke();
    text(tempText, 200, 50, 490, 80);
  }
}

function letter(tab) {
  if (i == tab[index].length) {
    return;
  } else {
    tempText = tempText + tab[index][i];
    i++;
  }
}

function write(tab) {
  if (bool) {
    intervalId = setInterval(letter, 50, tab);
  }
}

function keyReleased(event) {
  if (event.keyCode == 69 && canInteract) {
    tempText = "";
    i = 0;
    if (bool) {
      if (index < actualDialog.length - 1) {
        index++;
      } else {
        bool = false;
        index = 0;
        canInteract = false;
        clearInterval(intervalId);
      }
    } else {
      bool = true;
      write(actualDialog);
    }
  }
}
