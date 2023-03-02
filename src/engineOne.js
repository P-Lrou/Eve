// Start creation of all engine one settings
function engineOneStart() {
    background(tempBackground);
    drawMap();
    playerInputs();
    drawPNJEngineOne("pnjRose");
    drawPlayer();
    drawInventory();
}

// Draw the map for the engine one
function drawMap() {
    for (let i = 0; i < map.layers.length; i++) {
        drawTilesForOneLayer(map.layers[i])
    }
}

// Draw the tiles for the map creation
function drawTilesForOneLayer(actualLayer) {
    for (let y = 0; y < map.mapRow; y++) {
        for (let x = 0; x < map.mapColumn; x++) {
            let actualAsset = findActualAsset(actualLayer, y, x);
            image(
                actualAsset,
                (x * tileSize - mapX),
                (y * tileSize - mapY),
                tileSize,
                tileSize
            );
        }
    }
}