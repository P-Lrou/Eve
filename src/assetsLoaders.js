// Load all Assets Images
function loadAssets() {
    map1 = loadJSON("json/map1.json");

    tempBackground = loadImage("assets/tempBackground.jpg");
    floorTopDown = loadImage("assets/floorTopDown.png");
    wallTopDown = loadImage("assets/wallTopDown.png");

    mainCaracterSprites = loadImage("assets/mainCaracterSprites.png")
    rightMoveCaractere = loadImage("assets/sprite_sheet_droite.png")
    protoSprite = loadImage("assets/SpriteSheetAllDirection.png")
}

// Recover all assets
function initAssets() {
    empty = createImage(tileSize, tileSize);
    floorTopDown = floorTopDown.get(0, 0, tileSize, tileSize);
    wallTopDown = wallTopDown.get(0, 0, tileSize, tileSize);
    playerMoveDown = mainCaracterSprites.get(0, 0, tileSize, tileSize);
    playerMoveUp = mainCaracterSprites.get(64, 0, tileSize, tileSize);
    playerMoveRight = mainCaracterSprites.get(128, 0, tileSize, tileSize);
    playerMoveLeft = mainCaracterSprites.get(192, 0, tileSize, tileSize);
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
        default:
            throw new Error(
                "Can't find the asset named : " + assetName +
                " at " + column + " " + row);
    }
}