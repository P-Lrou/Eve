// Load all Assets Images
function loadAssets() {
  map1 = loadJSON("json/map1.json");
  pnj = loadJSON("json/pnj.json");

  tempBackground = loadImage("assets/tempBackground.jpg");
  backgroundCloneMap = loadImage("assets/backgroundCloneMap.png");
<<<<<<< HEAD
  doorTopDown = loadImage("assets/doorTopDown.png");
=======
  backgroundBotanicMap = loadImage("assets/backgroundBotanicMap.png");
  doorTopDown = loadImage("assets/doorTopDown.png");
  doorTopDown2 = loadImage("assets/doorTopDown.png");
>>>>>>> devs
  coinYellow = loadImage("assets/coinYellow.png");
  coinGreen = loadImage("assets/coinGreen.png");
  coinBlue = loadImage("assets/coinBlue.png");

  protoSprite = loadImage("assets/spriteTemp.png");
  pnjRose = loadImage("assets/pnjRose.png");
  pnjJulliette = loadImage("assets/pnjJulliette.png");
  assets = loadImage("assets/assets.png");
}

// Recover all assets
function initAssets() {
  empty = assets.get(0, 0, tileSizeCut, tileSizeCut);
  wallTopDown = assets.get(0 + tileSizeCut, 0 + tileSizeCut, tileSizeCut, tileSizeCut);
  floorTopDown = assets.get(0 + tileSizeCut * 3, 0, tileSizeCut, tileSizeCut);
  floorTopDownDoor = assets.get(0 + tileSizeCut * 4, 0, tileSizeCut, tileSizeCut);
<<<<<<< HEAD
=======
  floorTopDownDoor2 = assets.get(0 + tileSizeCut * 4, 0, tileSizeCut, tileSizeCut);
>>>>>>> devs
  wallTopDownLeftCorner = assets.get(0 + tileSizeCut * 6, 0 + tileSizeCut * 2, tileSizeCut, tileSizeCut);
  wallTopDownFull = assets.get(0 + tileSizeCut, 0 + tileSizeCut * 2, tileSizeCut, tileSizeCut);
  wallTopDownRightCorner = assets.get(0 + tileSizeCut * 6, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);
  wallTopDownFullLeft = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 2, tileSizeCut, tileSizeCut);
  wallTopDownFullRigth = assets.get(0, 0 + tileSizeCut * 2, tileSizeCut, tileSizeCut);
  wallTopDownPointLeftDown = assets.get(0 + tileSizeCut * 2, 0, tileSizeCut, tileSizeCut);
  wallTopDownPointRigthDown = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);
  wallTopDownPointLeftTop = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);
  wallTopDownPointRigthTop = assets.get(0, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);
  wallTopDownTopLeft = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut, tileSizeCut, tileSizeCut);
  wallTopDownTopRigth = assets.get(0, 0 + tileSizeCut, tileSizeCut, tileSizeCut);
  wallTopDownTopDown = assets.get(0 + tileSizeCut, 0, tileSizeCut, tileSizeCut);
  wallTopDownTopFullFloorWall = assets.get(0 + tileSizeCut, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);
  wallTopDownCornerFullLeft = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);
  wallTopDownCornerFullRight = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);

  leftLocker = assets.get(0, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);
  rigthLocker = assets.get(0, 0 + tileSizeCut * 5, tileSizeCut, tileSizeCut);
  chest = assets.get(0 + tileSizeCut, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);
  chestOfDrawers = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);
  cable1 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);
  cable2 = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);
  toilet = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);
  cable3 = assets.get(0 + tileSizeCut * 6, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);
}

// Find the good assets for map creation
function findActualAsset(layer, row, column) {
  let assetName = layer[row][column];
  switch (assetName) {
    case "empty":
      return empty;
    case "floorTopDownDoor":
      return floorTopDownDoor;
<<<<<<< HEAD
=======
    case "floorTopDownDoor2":
      return floorTopDownDoor2;
>>>>>>> devs
    case "floorTopDown":
      return floorTopDown;
    case "wallTopDown":
      return wallTopDown;
    case "doorTopDown":
      return doorTopDown;
<<<<<<< HEAD
=======
    case "doorTopDown2":
      return doorTopDown2;
>>>>>>> devs
    case "coinYellow":
      return coinYellow;
    case "coinGreen":
      return coinGreen;
    case "coinBlue":
      return coinBlue;
    case "leftLocker":
      return leftLocker
    case "rigthLocker":
      return rigthLocker
    case "chest":
      return chest
    case "chestOfDrawers":
      return chestOfDrawers
    case "cable1":
      return cable1
    case "cable2":
      return cable2
    case "toilet":
      return toilet
    case "cable3":
      return cable3
    case "wallTopDownLeftCorner":
      return wallTopDownLeftCorner;
    case "wallTopDownFull":
      return wallTopDownFull;
    case "wallTopDownRightCorner":
      return wallTopDownRightCorner;
    case "wallTopDownFullLeft":
      return wallTopDownFullLeft;
    case "wallTopDownFullRigth":
      return wallTopDownFullRigth;
    case "wallTopDownPointLeftDown":
      return wallTopDownPointLeftDown;
    case "wallTopDownPointRigthDown":
      return wallTopDownPointRigthDown;
    case "wallTopDownPointLeftTop":
      return wallTopDownPointLeftTop;
    case "wallTopDownPointRigthTop":
      return wallTopDownPointRigthTop;
    case "wallTopDownTopLeft":
      return wallTopDownTopLeft;
    case "wallTopDownTopRigth":
      return wallTopDownTopRigth;
    case "wallTopDownTopDown":
      return wallTopDownTopDown;
    case "wallTopDownTopFullFloorWall":
      return wallTopDownTopFullFloorWall;
    case "wallTopDownCornerFullLeft":
      return wallTopDownCornerFullLeft;
    case "wallTopDownCornerFullRight":
      return wallTopDownCornerFullRight;
    default:
      throw new Error(
        "Can't find the asset named : " +
        assetName +
        " at " +
        column +
        " " +
        row
      );
  }
}

function findActualObject(objectName) {
  switch (objectName) {
    case "coinYellow":
      return coinYellow;
    case "coinGreen":
      return coinGreen;
    case "coinBlue":
      return coinBlue;
    default:
      throw new Error("Can't find the asset named : " + objectName);
  }
}

function findActualPnj(pnjName) {
  switch (pnjName) {
    case "pnjRose":
      return pnjRose;
    case "pnjJulliette":
      return pnjJulliette;
    default:
      throw new Error("Can't find the asset named : " + pnjName);
  }
}
