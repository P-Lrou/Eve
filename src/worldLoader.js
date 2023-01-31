let map;
let mapColumn;
let mapRow;
let mapWidth;
let mapHeight;
let tileWidth;
let tileHeight;
let mapRatio;

const runMap = (mapName) => {
    switch (mapName) {
        case "map_1":
            map = map_1;
            break;
        default:
            throw new Error(`Map named : ${mapName} not found !`);
    }

    mapX = 0;
    mapY = 0;
    mapColumn = map.mapColumn;
    mapRow = map.mapRow;
    mapWidth = map.mapWidth;
    mapHeight = map.mapHeight;
    tileWidth = map.tileWidth;
    tileHeight = map.tileHeight;

    layersVerification();
    initAssets();
}


const layersVerification = () => {
    for (let i = 0; i < map.layers.lenght; i++) {
        layerVerification(map.layers[i]);
    }
}

const layerVerification = (layer) => {

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
