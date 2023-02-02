const playerInputs = () => {
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

const drawPlayer = () => {
    switch (Direction) {
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

const getPlayerTileName = () => {
    let playerTilePosX ;
    let playerTilePosY ;
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

const checkIfIsCollision = () => {
    switch (getPlayerTileName()) {
        case "wall_1":
            return true;
        default:
            return false;
    }
}

const madeCollision = () => {
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