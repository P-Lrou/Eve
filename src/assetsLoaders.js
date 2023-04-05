//& This file actually managed all the assets

//^ This function load all assets at the game loading
function loadAssets() {
  map1 = loadJSON("json/map1.json");
  npc = loadJSON("json/npc.json");
  quests = loadJSON("json/quests.json");
  moreInteractionJSON = loadJSON("json/moreInteractions.json");
  mainFont = loadFont("fonts/mainFont.ttf");

  tempBackground = loadImage("assets/tempBackground.jpg");
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
  questAnimationCloneMap = loadImage("assets/cloneMap/questAnimationCloneMap.png");
  questCloneMap1 = loadImage("assets/cloneMap/questCloneMap1.png");
  frontOfCloneMap = loadImage("assets/cloneMap/frontOfCloneMap.png");

  backgroundBotanicMap = loadImage("assets/botanicMap/backgroundBotanicMap.png");
  planteAnimationBotanicMap = loadImage("assets/botanicMap/planteAnimationBotanicMap.png")
  seedsBagBotanicMap = loadImage("assets/botanicMap/seedsBagBotanicMap.png")

  backgroundCommandMap = loadImage("assets/commandMap/backgroundCommandMap.png")
}

//^ This function recover all assets
function initAssets() {
  empty = assets.get(0, 0, tileSizeCut, tileSizeCut);
  topWall = assets.get(0 + tileSizeCut * 1, 0, tileSizeCut, tileSizeCut);
  topRigthCorner = assets.get(0 + tileSizeCut * 2, 0, tileSizeCut, tileSizeCut);
  topLeftCornerWall = assets.get(0 + tileSizeCut * 3, 0, tileSizeCut, tileSizeCut);
  topRigthCornerWall = assets.get(0 + tileSizeCut * 4, 0, tileSizeCut, tileSizeCut);

  leftWall = assets.get(0, 0 + tileSizeCut * 1, tileSizeCut, tileSizeCut);
  wall = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 1, tileSizeCut, tileSizeCut);
  rigthWall = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 1, tileSizeCut, tileSizeCut);
  topLeftCornerDownWall = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 1, tileSizeCut, tileSizeCut);
  topRigthCornerDownWall = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 1, tileSizeCut, tileSizeCut);

  leftWallFull = assets.get(0, 0 + tileSizeCut * 2, tileSizeCut, tileSizeCut);
  wallFull = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 2, tileSizeCut, tileSizeCut);
  rigthWallFull = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 2, tileSizeCut, tileSizeCut);
  downLeftCornerDownWall = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 2, tileSizeCut, tileSizeCut);
  downRigthCornerDownWall = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 2, tileSizeCut, tileSizeCut);

  downRigthCorner = assets.get(0, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);
  downWall = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);
  downLeftCorner = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);
  wall2 = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);
  topLeftCorner = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 3, tileSizeCut, tileSizeCut);

  floor1 = assets.get(0, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);
  floor2 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);
  floor3 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);
  topMiddle = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);
  door = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 4, tileSizeCut, tileSizeCut);

  floor4 = assets.get(0, 0 + tileSizeCut * 5, tileSizeCut, tileSizeCut);
  floor5 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 5, tileSizeCut, tileSizeCut);
  floor6 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 5, tileSizeCut, tileSizeCut);
  leftDoor = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 5, tileSizeCut, tileSizeCut);
  topDoor = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut * 5, tileSizeCut, tileSizeCut);

  floor7 = assets.get(0, 0 + tileSizeCut * 6, tileSizeCut, tileSizeCut);
  floor8 = assets.get(0 + tileSizeCut * 1, 0 + tileSizeCut * 6, tileSizeCut, tileSizeCut);
  floor9 = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut * 6, tileSizeCut, tileSizeCut);
  rigthDoor = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut * 6, tileSizeCut, tileSizeCut);
}

//^ This function find the good asset for the map creation
//- Take in param the acutal layer with, the row and the colum
function findActualAsset(layer, row, column) {
  let assetName = layer[row][column];
  switch (assetName) {
    case 0:
      return empty;
    case 1:
      return topWall;
    case 2:
      return topRigthCorner;
    case 3:
      return topLeftCornerWall;
    case 4:
      return topRigthCornerWall;

    case 5:
      return leftWall;
    case 6:
      return wall;
    case 7:
      return rigthWall;
    case 8:
      return topLeftCornerDownWall;
    case 9:
      return topRigthCornerDownWall;

    case 10:
      return leftWallFull;
    case 11:
      return wallFull;
    case 12:
      return rigthWallFull;
    case 13:
      return downLeftCornerDownWall;
    case 14:
      return downRigthCornerDownWall;

    case 15:
      return downRigthCorner;
    case 16:
      return downWall;
    case 17:
      return downLeftCorner;
    case 18:
      return wall2;
    case 19:
      return topLeftCorner;

    case 20:
      return floor1;
    case 21:
      return floor2;
    case 22:
      return floor3;
    case 23:
      return topMiddle;
    case 24:
      return door;

    case 25:
      return floor4;
    case 26:
      return floor5;
    case 27:
      return floor6;
    case 28:
      return leftDoor;
    case 29:
      return topDoor;

    case 30:
      return floor7;
    case 31:
      return floor8;
    case 32:
      return floor9;
    case 33:
      return rigthDoor;

    case 99:
      return floor2;
    case 98:
      return floor6;
    case 97:
      return floor8;


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

//^ This function find the good object
//- Take in param the object name as a string
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

//^ This function find the good NPC
//- Take in param the npc name as a string
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
