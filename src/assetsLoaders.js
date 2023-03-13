// Load all Assets Images
function loadAssets() {
  map1 = loadJSON("json/map1.json");
  npc = loadJSON("json/npc.json");
  mainFont = loadFont("fonts/mainFont.ttf");

  tempBackground = loadImage("assets/tempBackground.jpg");
  doorTopDown = loadImage("assets/doorTopDown.png");
  doorTopDown2 = loadImage("assets/doorTopDown.png");
  coinYellow = loadImage("assets/coinYellow.png");
  coinGreen = loadImage("assets/coinGreen.png");
  coinBlue = loadImage("assets/coinBlue.png");

  mainCaracter = loadImage("assets/mainCaracter.png");
  npcRose = loadImage("assets/npcRose.png");
  npcJulliette = loadImage("assets/npcJulliette.png");
  assets = loadImage("assets/assets.png");

  backgroundCloneMap = loadImage("assets/cloneMap/backgroundCloneMap.png");
  lightCloneMap = loadImage("assets/cloneMap/lightCloneMap.png");
  jarAnimationCloneMap = loadImage("assets/cloneMap/jarAnimationCloneMap.png");

  backgroundBotanicMap = loadImage(
    "assets/botanicMap/backgroundBotanicMap.png"
  );
  planteAnimationBotanicMap = loadImage("assets/botanicMap/planteAnimationBotanicMap.png")
}

// Recover all assets
function initAssets() {
  empty = assets.get(0, 0, tileSizeCut, tileSizeCut);
  wallTopDownTopDown = assets.get(0 + tileSizeCut, 0, tileSizeCut, tileSizeCut);
  floorTopDown1 = assets.get(0 + tileSizeCut * 3, 0, tileSizeCut, tileSizeCut);
  floorTopDownDoor = assets.get(
    0 + tileSizeCut * 4,
    0,
    tileSizeCut,
    tileSizeCut
  );
  floorTopDownDoor2 = assets.get(
    0 + tileSizeCut * 4,
    0,
    tileSizeCut,
    tileSizeCut
  );
  floorTopDown2 = assets.get(0 + tileSizeCut * 4, 0, tileSizeCut, tileSizeCut);
  floorTopDown3 = assets.get(0 + tileSizeCut * 5, 0, tileSizeCut, tileSizeCut);
  wallTopDownTopRigth = assets.get(
    0,
    0 + tileSizeCut,
    tileSizeCut,
    tileSizeCut
  );
  wallTopDown = assets.get(
    0 + tileSizeCut,
    0 + tileSizeCut,
    tileSizeCut,
    tileSizeCut
  );
  floorTopDown4 = assets.get(
    0 + tileSizeCut * 3,
    0 + tileSizeCut,
    tileSizeCut,
    tileSizeCut
  );
  floorTopDown5 = assets.get(
    0 + tileSizeCut * 4,
    0 + tileSizeCut,
    tileSizeCut,
    tileSizeCut
  );
  floorTopDown6 = assets.get(
    0 + tileSizeCut * 5,
    0 + tileSizeCut,
    tileSizeCut,
    tileSizeCut
  );
  wallTopDownFullRigth = assets.get(
    0,
    0 + tileSizeCut * 2,
    tileSizeCut,
    tileSizeCut
  );
  wallTopDownFull = assets.get(
    0 + tileSizeCut,
    0 + tileSizeCut * 2,
    tileSizeCut,
    tileSizeCut
  );
  floorTopDown7 = assets.get(
    0 + tileSizeCut * 3,
    0 + tileSizeCut * 2,
    tileSizeCut,
    tileSizeCut
  );
  floorTopDown8 = assets.get(
    0 + tileSizeCut * 4,
    0 + tileSizeCut * 2,
    tileSizeCut,
    tileSizeCut
  );
  floorTopDown9 = assets.get(
    0 + tileSizeCut * 5,
    0 + tileSizeCut * 2,
    tileSizeCut,
    tileSizeCut
  );
  wallTopDownLeftCorner = assets.get(
    0 + tileSizeCut * 6,
    0 + tileSizeCut * 2,
    tileSizeCut,
    tileSizeCut
  );
  wallTopDownPointRigthTop = assets.get(
    0,
    0 + tileSizeCut * 3,
    tileSizeCut,
    tileSizeCut
  );
  wallTopDownTopFullFloorWall = assets.get(
    0 + tileSizeCut,
    0 + tileSizeCut * 3,
    tileSizeCut,
    tileSizeCut
  );
  wallTopDownPointLeftTop = assets.get(
    0 + tileSizeCut * 2,
    0 + tileSizeCut * 3,
    tileSizeCut,
    tileSizeCut
  );
  wallTopDownCornerFullLeft = assets.get(
    0 + tileSizeCut * 3,
    0 + tileSizeCut * 3,
    tileSizeCut,
    tileSizeCut
  );
  wallTopDownCornerFullRight = assets.get(
    0 + tileSizeCut * 4,
    0 + tileSizeCut * 3,
    tileSizeCut,
    tileSizeCut
  );
  wallTopDownPointRigthDown = assets.get(
    0 + tileSizeCut * 5,
    0 + tileSizeCut * 3,
    tileSizeCut,
    tileSizeCut
  );
  wallTopDownRightCorner = assets.get(
    0 + tileSizeCut * 6,
    0 + tileSizeCut * 3,
    tileSizeCut,
    tileSizeCut
  );
  wallTopDownFullLeft = assets.get(
    0 + tileSizeCut * 2,
    0 + tileSizeCut * 2,
    tileSizeCut,
    tileSizeCut
  );
  wallTopDownPointLeftDown = assets.get(
    0 + tileSizeCut * 2,
    0,
    tileSizeCut,
    tileSizeCut
  );
  wallTopDownTopLeft = assets.get(
    0 + tileSizeCut * 2,
    0 + tileSizeCut,
    tileSizeCut,
    tileSizeCut
  );

  leftLocker = assets.get(0, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);
  rigthLocker = assets.get(0, 0 + tileSizeCut * 5, tileSizeCut, tileSizeCut);
  chest = assets.get(
    0 + tileSizeCut,
    0 + tileSizeCut * 4,
    tileSizeCut,
    tileSizeCut
  );
  chestOfDrawers = assets.get(
    0 + tileSizeCut * 2,
    0 + tileSizeCut * 4,
    tileSizeCut,
    tileSizeCut
  );
  cable1 = assets.get(
    0 + tileSizeCut * 3,
    0 + tileSizeCut * 4,
    tileSizeCut,
    tileSizeCut
  );
  cable2 = assets.get(
    0 + tileSizeCut * 4,
    0 + tileSizeCut * 4,
    tileSizeCut,
    tileSizeCut
  );
  toilet = assets.get(
    0 + tileSizeCut * 5,
    0 + tileSizeCut * 4,
    tileSizeCut,
    tileSizeCut
  );
  cable3 = assets.get(
    0 + tileSizeCut * 6,
    0 + tileSizeCut * 4,
    tileSizeCut,
    tileSizeCut
  );
}

// Find the good assets for map creation
function findActualAsset(layer, row, column) {
  let assetName = layer[row][column];
  switch (assetName) {
    case 0:
      return empty;
    case 1:
      return wallTopDownTopDown;
    case 2:
      return wallTopDownPointLeftDown;
    case 99:
      return floorTopDownDoor;
    case 98:
      return floorTopDownDoor2;
    case 3:
      return floorTopDown1;
    case 4:
      return floorTopDown2;
    case 5:
      return floorTopDown3;
    case 7:
      return wallTopDownTopRigth;
    case 8:
      return wallTopDown;
    case 9:
      return wallTopDownTopLeft;
    case 10:
      return floorTopDown4;
    case 11:
      return floorTopDown5;
    case 12:
      return floorTopDown6;
    case 14:
      return wallTopDownFullRigth;
    case 15:
      return wallTopDownFull;
    case 90:
      return wallTopDownFull;
    case 16:
      return wallTopDownFullLeft;
    case 17:
      return floorTopDown7;
    case 18:
      return floorTopDown8;
    case 19:
      return floorTopDown9;
    case 20:
      return wallTopDownLeftCorner;
    case 21:
      return wallTopDownPointRigthTop;
    case 22:
      return wallTopDownTopFullFloorWall;
    case 23:
      return wallTopDownPointLeftTop;
    case 24:
      return wallTopDownCornerFullLeft;
    case 25:
      return wallTopDownCornerFullRight;
    case 26:
      return wallTopDownPointRigthDown;
    case 27:
      return wallTopDownRightCorner;

    case 28:
      return leftLocker;
    case 29:
      return chest;
    case 30:
      return chestOfDrawers;
    case 31:
      return cable1;
    case 32:
      return cable2;
    case 33:
      return toilet;
    case 34:
      return cable3;
    case 35:
      return rigthLocker;

    case "doorTopDown":
      return doorTopDown;
    case "doorTopDown2":
      return doorTopDown2;
    case "coinYellow":
      return coinYellow;
    case "coinGreen":
      return coinGreen;
    case "coinBlue":
      return coinBlue;
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

function findActualNpc(npcName) {
  switch (npcName) {
    case "npcRose":
      return npcRose;
    case "npcJulliette":
      return npcJulliette;
    default:
      throw new Error("Can't find the asset named : " + npcName);
  }
}
