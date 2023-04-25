//^ This function recover the selected map values
//- Take in param the actual map name as a string
function runMap(mapName) {
    switch (mapName) {
        case "map1":
            map = map1;
            break;
        case "map2":
            map = map2;
            break;
        case "map3":
            map = map3;
            break;
        default:
            throw new Error(`Map named : ${mapName} not found !`);
    }
    mapColumn = map.mapColumn;
    mapRow = map.mapRow;
    mapWidth = map.mapWidth;
    mapHeight = map.mapHeight;
    tileSize = map.tileSize;

    layersVerification();
    initAssets();
}

//^ This function check if layers are good layer by layer
function layersVerification() {
    for (let i = 0; i < map.layers.lenght; i++) {
        layerVerification(map.layers[i]);
    }
}

//^ This function check if layers are good layer by layer
//- Take is param the actual layer as an array
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

    if (mapWidth != mapColumn * tileSize) {
        throw new Error("Wrong width of the world");
    }

    if (mapHeight != mapRow * tileSize) {
        throw new Error("Wrong hieght of the world");
    }
}