const loadAssets = () => {
    map_1 = loadJSON("json/map_1.json");

    galaxy = loadImage("assets/galaxy.jpg");
    floorImage = loadImage("assets/floor.png");
    wallImage = loadImage("assets/wall.png");

    playerSpriteDown = loadImage("assets/walk_down.png")
    playerSpriteUp = loadImage("assets/walk_up.png")
    playerSpriteLeft = loadImage("assets/walk_left.png")
    playerSpriteRigth = loadImage("assets/walk_rigth.png")
}

const initAssets = () => {
    empty = createImage(tileWidth, tileHeight);
    floor_1 = floorImage.get(0, 0, tileWidth, tileHeight);
    wall_1 = wallImage.get(0, 0, tileWidth, tileHeight);
    playerMoveDown1 = playerSpriteDown.get(0, 0, 30, 30);
    playerMoveDown2 = playerSpriteDown.get(30, 0, 30, 30);
    playerMoveDown3 = playerSpriteDown.get(60, 0, 30, 30);
    playerMoveUp1 = playerSpriteUp.get(0, 0, 30, 30);
    playerMoveLeft1 = playerSpriteLeft.get(0, 0, 29, 30);
    playerMoveRigth1 = playerSpriteRigth.get(0, 0, 30, 30);
}

const findActualAsset = (layer, row, column) => {
    let assetName = layer[row][column];
    switch (assetName) {
        case "empty":
            return empty;
        case "floor_1":
            return floor_1;
        case "wall_1":
            return wall_1;
        default:
            throw new Error(
                "Can't find the asset named : " + assetName +
                " at " + column + " " + row);
    }
}