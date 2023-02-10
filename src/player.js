
// Assign all player inputs
function playerInputs() {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(81)) {
        playerPosX -= playerMoveSize;
        Direction = "left"
        madeCollision(Direction)
    }

    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        playerPosX += playerMoveSize;
        Direction = "right"
        madeCollision(Direction)
    }

    if (keyIsDown(UP_ARROW) || keyIsDown(90)) {
        playerPosY -= playerMoveSize;
        Direction = "up"
        madeCollision(Direction)
    }

    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        playerPosY += playerMoveSize;
        Direction = "down"
        madeCollision(Direction)
    }
}

// Draw Player with the good asset
function drawPlayer() {
    switch (Direction) {
        case "left":
            if (keyIsDown(LEFT_ARROW) || keyIsDown(81)) {
                image(protoSprite.get(20*rep,20 ,20,20), playerPosX, playerPosY, playerTileSize, playerTileSize);
            } else {
                image(protoSprite.get(0,20,20,20), playerPosX, playerPosY, playerTileSize, playerTileSize);
            }
            break;
        case "right":
            if (keyIsDown(RIGHT_ARROW) || keyIsDown(81)) {
                image(rightMoveCaractere.get(20*rep,tileHeight*0 ,20,20), playerPosX, playerPosY, playerTileSize, playerTileSize);
            } else {
                image(rightMoveCaractere.get(0,tileHeight*0 ,20,20), playerPosX, playerPosY, playerTileSize, playerTileSize);
            }
            break;
        case "up":
            if (keyIsDown(UP_ARROW) || keyIsDown(81)) {
                image(protoSprite.get(20*rep,40 ,20,20), playerPosX, playerPosY, playerTileSize, playerTileSize);
            } else {
                image(protoSprite.get(0,40 ,20,20), playerPosX, playerPosY, playerTileSize, playerTileSize);
            }
            break;
        case "down":
            if (keyIsDown(DOWN_ARROW) || keyIsDown(81)) {
                image(protoSprite.get(20*rep,60 ,20,20), playerPosX, playerPosY, playerTileSize, playerTileSize);
            } else {
                image(protoSprite.get(0,60,20,20), playerPosX, playerPosY, playerTileSize, playerTileSize);
            }
            break;
        default:
            image(rightMoveCaractere.get(0,tileHeight*0 ,20,20), playerPosX, playerPosY, playerTileSize, playerTileSize);
    }
}

// Get the tile where the player is
function getPlayerTileName() {
    let playerTilePosX;
    let playerTilePosY;
    switch (Direction) {
        case "left":
            playerTilePosX = Math.trunc((playerPosX + 15 + mapX) / tileWidth);
            playerTilePosY = Math.trunc((playerPosY + 55 + mapY) / tileHeight);
            break;
        case "right":
            playerTilePosX = Math.trunc((playerPosX + 35 + mapX) / tileWidth);
            playerTilePosY = Math.trunc((playerPosY + 55 + mapY) / tileHeight);
            break;
        case "up":
            playerTilePosX = Math.trunc((playerPosX + 15 + mapX) / tileWidth);
            playerTilePosY = Math.trunc((playerPosY + 15 + mapY) / tileHeight);
            break;
        case "down":
            playerTilePosX = Math.trunc((playerPosX + 35 + mapX) / tileWidth);
            playerTilePosY = Math.trunc((playerPosY + 65 + mapY) / tileHeight);
            break;
        default:
            playerTilePosX = Math.trunc((playerPosX + 15 + mapX) / tileWidth / mapRatio);
            playerTilePosY = Math.trunc((playerPosY + 15 + mapY) / tileHeight / mapRatio);
    }
    return map.layers[0][playerTilePosY][playerTilePosX]
}

// Check if the tile where the player is, is a collision block
function checkIfIsCollision() {
    switch (getPlayerTileName()) {
        case "wallTopDown":
            return true;
        default:
            return false;
    }
}

// Made the collision between the player and the collision tile
function madeCollision() {
    if (checkIfIsCollision()) {
        switch (Direction) {
            case "left":
                playerPosX += playerMoveSize;
                break;
            case "right":
                playerPosX -= playerMoveSize;
                break;
            case "up":
                playerPosY += playerMoveSize;
                break;
            case "down":
                playerPosY -= playerMoveSize;
                break;
            default:
                throw new Error("Collision bug");
        }
    }
}

// Do the camera who follow the player
function playerCamera() {
    if (playerPosX > screenWidth - screenWidth / 4) {
        playerPosX = screenWidth - screenWidth / 4;
        mapX += playerMoveSize;
    }

    if (playerPosX < screenWidth / 4) {
        playerPosX = screenWidth / 4;
        mapX -= playerMoveSize;
    }

    if (playerPosY > screenHeight - screenHeight / 4) {
        playerPosY = screenHeight - screenHeight / 4;
        mapY += playerMoveSize;
    }

    if (playerPosY < screenHeight / 4) {
        playerPosY = screenHeight / 4;
        mapY -= playerMoveSize;
    }
}