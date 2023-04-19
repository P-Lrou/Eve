function preload() {
  loadAssets();
}

function setup() {
  createCanvas(screenWidth, screenHeight);
  frameRate(frameRateNumber);
  noSmooth();
  noStroke();
  runMap("map1");
  console.clear()
  console.log('%c<----Game Successfully Started---->', 'color:rgb(255, 0, 0)')
}

function draw() {
  textFont(mainFont);
  changeEngine();
  switch (currentEngine) {
    case ENGINE_ONE:
      engineOneStart();
      break;
    case ENGINE_TWO:
      engineTwoStart();
      break;
    case MENU:
      menuStart();
      break;
    default:
      throw new Error(`Engine named : ${currentEngine} not found !`);
  }
  if (canShowInventoryAnimation) {
    addToInventory(newObjectToAdd);
    setTimeout(() => {
      if (!objectAsBeenAdToInventoryWithAnimation) {
        canShowInventoryAnimation = false;
        inventoryTab[inventoryTabNumber] = newObjectToAdd;
        inventoryTabNumber++;
        objectAsBeenAdToInventoryWithAnimation = true;
        canChangeObjectInventory = false;
        canShowObjectInAnimation = true;
        newObjectSize = 128;
        newObjectOldX = 0;
        newObjectOldY = 0;
        canUpObjectSize = true;
        return;
      }
    }, 8000);
  }
  if (canDoTransition) {
    noStroke();
    fill(0, 0, 0, fade);
    rect(0, 0, screenWidth, screenHeight);
    if (transitionStatus === "Enter") {
      transitionEnter();
    }
    if (transitionStatus === "Out" && !animationActeTwoStart) {
      currentEngine = newEngineSelected;
      transitionOut();
    }
  }
  if (canInteract && !canMovePlayer && animationActeTwoStart) {
    writeText(actualDialog);
    noFill();
  }
}
