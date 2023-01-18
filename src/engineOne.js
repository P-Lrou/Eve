const engineOneStart = () => {
    background(50);

    drawMap();
    playerInputs();
    drawPlayer()
}

const drawMap = () => {
    for (let i = 0; i < map.layers.length; i++) {
        drawTilesForOneLayer(map.layers[i])
    }
}

const drawTilesForOneLayer = (actualLayer) => {
    for (let v = 0; v < map.mapRow; v++) {
        for (let k = 0; k < map.mapColumn; k++) {
            let actualAsset = findActualAsset(actualLayer, v, k);
            image(
                actualAsset,
                (k * tileWidth - mapX) * mapRatio,
                (v * tileHeight - mapY) * mapRatio,
                tileWidth * mapRatio,
                tileHeight * mapRatio
            );
        }
    }
}