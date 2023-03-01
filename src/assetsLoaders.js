// Load all Assets Images
function loadAssets() {
    map1 = loadJSON("json/map1.json");

    tempBackground = loadImage("assets/tempBackground.jpg");
    backgroundEngineTwo = loadImage("assets/backgroundProto.png");
    doorTopDown = loadImage("assets/doorTopDown.png");
    coinYellow = loadImage("assets/coinYellow.png")
    coinGreen = loadImage("assets/coinGreen.png")
    coinBlue = loadImage("assets/coinBlue.png")

    protoSprite = loadImage("assets/spriteTemp.png")
    assets = loadImage("assets/assets.png")
}

// Recover all assets
function initAssets() {
    empty = createImage(tileSize, tileSize);
    wallTopDown = assets.get(0, 0, tileSizeCut, tileSizeCut);
    floorTopDown = assets.get(0 + tileSizeCut, 0, tileSizeCut, tileSizeCut)
    wallTopDownLeftCorner = assets.get(0 + tileSizeCut * 2, 0, tileSizeCut, tileSizeCut)
    wallTopDownFull = assets.get(0 + tileSizeCut * 3, 0, tileSizeCut, tileSizeCut)
    wallTopDownRightCorner = assets.get(0 + tileSizeCut * 4, 0, tileSizeCut, tileSizeCut)
    wallTopDownLeft = assets.get(0 + tileSizeCut * 5, 0, tileSizeCut, tileSizeCut)
    wallTopDownRigth = assets.get(0 + tileSizeCut * 6, 0, tileSizeCut, tileSizeCut)
    wallTopDownFullLeft = assets.get(0 + tileSizeCut * 7, 0, tileSizeCut, tileSizeCut)
    wallTopDownFullRigth = assets.get(0 + tileSizeCut * 8, 0, tileSizeCut, tileSizeCut)
    wallTopDownPointLeftDown = assets.get(0, 0 + tileSizeCut, tileSizeCut, tileSizeCut)
    wallTopDownPointRigthDown = assets.get(0 + tileSizeCut, 0 + tileSizeCut, tileSizeCut, tileSizeCut)
    wallTopDownPointLeftTop = assets.get(0 + tileSizeCut * 2, 0 + tileSizeCut, tileSizeCut, tileSizeCut)
    wallTopDownPointRigthTop = assets.get(0 + tileSizeCut * 3, 0 + tileSizeCut, tileSizeCut, tileSizeCut)
    wallTopDownTopLeft = assets.get(0 + tileSizeCut * 4, 0 + tileSizeCut, tileSizeCut, tileSizeCut)
    wallTopDownTopRigth = assets.get(0 + tileSizeCut * 5, 0 + tileSizeCut, tileSizeCut, tileSizeCut)
    wallTopDownTopDown = assets.get(0 + tileSizeCut * 6, 0 + tileSizeCut, tileSizeCut, tileSizeCut)
    wallTopDownTopFullFloorWall = assets.get(0 + tileSizeCut * 7, 0 + tileSizeCut, tileSizeCut, tileSizeCut)
    wallTopDownCornerFullLeft = assets.get(0 + tileSizeCut * 8, 0 + tileSizeCut, tileSizeCut, tileSizeCut)
    wallTopDownCornerFullRight = assets.get(0 + tileSizeCut * 9, 0 + tileSizeCut, tileSizeCut, tileSizeCut)
}

// Find the good assets for map creation
function findActualAsset(layer, row, column) {
    let assetName = layer[row][column];
    switch (assetName) {
        case "empty":
            return empty;
        case "floorTopDown":
            return floorTopDown;
        case "wallTopDown":
            return wallTopDown;
        case "doorTopDown":
            return doorTopDown;
        case "coinYellow":
            return coinYellow;
        case "coinGreen":
            return coinGreen;
        case "coinBlue":
            return coinBlue;
        case "wallTopDownLeftCorner":
            return wallTopDownLeftCorner;
        case "wallTopDownFull":
            return wallTopDownFull;
        case "wallTopDownRightCorner":
            return wallTopDownRightCorner;
        case "wallTopDownLeft":
            return wallTopDownLeft;
        case "wallTopDownRigth":
            return wallTopDownRigth;
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
                "Can't find the asset named : " + assetName +
                " at " + column + " " + row);
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
            throw new Error(
                "Can't find the asset named : " + objectName);
    }
}