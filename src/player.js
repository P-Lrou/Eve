
// Assign all player inputs
function playerInputs() {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(81)) {
        playerPosX -= playerMoveSize;
        Direction = "left"
        madeCollision()
    }

    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        playerPosX += playerMoveSize;
        Direction = "right"
        madeCollision()
    }

    if (keyIsDown(UP_ARROW) || keyIsDown(90)) {
        playerPosY -= playerMoveSize;
        Direction = "up"
        madeCollision()
    }

    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        playerPosY += playerMoveSize;
        Direction = "down"
        madeCollision()
    }
}

// Draw Player with the good asset
function drawPlayer() {
    switch (Direction) {
        case "left":
            if (keyIsDown(LEFT_ARROW) || keyIsDown(81)) {
                image(protoSprite.get(tileWidth*rep,tileHeight*6 ,tileWidth,tileHeight), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            } else {
                image(protoSprite.get(tileWidth,tileHeight*6 ,tileWidth,tileHeight), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            }
            break;
        case "right":
            if (keyIsDown(RIGHT_ARROW) || keyIsDown(81)) {
                image(protoSprite.get(tileWidth*rep,tileHeight*2 ,tileWidth,tileHeight), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            } else {
                image(protoSprite.get(tileWidth,tileHeight*2 ,tileWidth,tileHeight), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            }
            break;
        case "up":
            if (keyIsDown(UP_ARROW) || keyIsDown(81)) {
                image(protoSprite.get(tileWidth*rep,tileHeight*4 ,tileWidth,tileHeight), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            } else {
                image(protoSprite.get(tileWidth,tileHeight*4 ,tileWidth,tileHeight), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            }
            break;
        case "down":
            if (keyIsDown(DOWN_ARROW) || keyIsDown(81)) {
                image(protoSprite.get(tileWidth*rep,tileHeight*0 ,tileWidth,tileHeight), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            } else {
                image(protoSprite.get(tileWidth,tileHeight*0 ,tileWidth,tileHeight), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            }
            break;
        default:
            image(protoSprite.get(tileWidth,tileHeight*0 ,tileWidth,tileHeight), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
    }
}

// Get the tile where the player is
function getPlayerTileName() {
    let playerTilePos = createVector();
    /*switch (Direction) {
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
    }*/
    playerTilePos.x = Math.trunc((playerPosX + spritePlayerSize / 2 + mapX) / tileWidth);
    playerTilePos.y = Math.trunc((playerPosY + spritePlayerSize /1.25 + mapY) / tileHeight);
    // En attendant d'avoir une fonction plus poussé pour les collisions, juste faire un point de collision au lieu de se perdre dans 40 km de codes avec des nombres rdm
    return map.layers[0][playerTilePos.y][playerTilePos.x]
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