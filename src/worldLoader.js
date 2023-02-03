// Recover actual map values
function runMap(mapName) {
    switch (mapName) {
        case "map1":
            map = map1;
            break;
        default:
            throw new Error(`Map named : ${mapName} not found !`);
    }
    mapColumn = map.mapColumn;
    mapRow = map.mapRow;
    mapWidth = map.mapWidth;
    mapHeight = map.mapHeight;
    tileWidth = map.tileWidth;
    tileHeight = map.tileHeight;

    layersVerification();
    initAssets();
}

// Check if the layer number is good
function layersVerification() {
    for (let i = 0; i < map.layers.lenght; i++) {
        layerVerification(map.layers[i]);
    }
}

// Check if the layer number is good
function layerVerification(layer) {

    if (mapRow != layer.length) {
        throw new Error(
            "Wrong number of row in the world map, expected : " +
            mapRow +
            " given : " +
            layer.length
        );
    }

    for (let i = 0; i < map.mapRow; i++) {
        if (mapColumn != layer[i].length) {
            throw new Error(
                "Wrong number of column at row number " + i + " in the world map"
            );
        }
    }

    if (mapWidth != mapColumn * tileWidth) {
        throw new Error("Wrong width of the world");
    }

    if (mapHeight != mapRow * tileHeight) {
        throw new Error("Wrong hieght of the world");
    }
}
