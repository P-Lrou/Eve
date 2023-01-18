const loadAssets = () => {
    map_1 = loadJSON("json/map_1.json");

    floorImage = loadImage("assets/floor.png");
    wallImage = loadImage("assets/wall.png");
}

const initAssets = () => {
    empty = createImage(tileWidth, tileHeight);
    floor_1 = floorImage.get(0, 0, tileWidth, tileHeight);
    wall_1 = wallImage.get(0, 0, tileWidth, tileHeight);
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