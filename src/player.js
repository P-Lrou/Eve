const playerInputs = () => {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(81)) {
        playerPosX -= playerMoveSize;
        lastDirection = "left"
        madeCollision(lastDirection)
    }

    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        playerPosX += playerMoveSize;
        lastDirection = "right"
        madeCollision(lastDirection)
    }

    if (keyIsDown(UP_ARROW) || keyIsDown(90)) {
        playerPosY -= playerMoveSize;
        lastDirection = "up"
        madeCollision(lastDirection)
    }

    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        playerPosY += playerMoveSize;
        lastDirection = "down"
        madeCollision(lastDirection)
    }
}

const drawPlayer = () => {
    switch (lastDirection) {
        case "left":
            image(playerMoveLeft1, playerPosX, playerPosY, 70, 70);
            break;
        case "right":
            image(playerMoveRigth1, playerPosX, playerPosY, 70, 70);
            break;
        case "up":
            image(playerMoveUp1, playerPosX, playerPosY, 70, 70);
            break;
        case "down":
            image(playerMoveDown1, playerPosX, playerPosY, 70, 70);
            break;
        default:
            image(playerMoveDown1, playerPosX, playerPosY, 70, 70);
    }
}

const getPlayerTileName = (lastDirection) => {
    let playerTilePosX ;
    let playerTilePosY ;
    switch (lastDirection) {
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

const checkIfIsCollision = (lastDirection) => {
    switch (getPlayerTileName(lastDirection)) {
        case "wall_1":
            return true;
        default:
            return false;
    }
}

const madeCollision = (lastDirection) => {
    if (checkIfIsCollision(lastDirection)) {
        switch (lastDirection) {
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

const playerCamera = () => {
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