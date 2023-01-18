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
            image(playerMoveLeft1, playerPosX, playerPosY, 50, 50);
            break;
        case "right":
            image(playerMoveRigth1, playerPosX, playerPosY, 50, 50);
            break;
        case "up":
            image(playerMoveUp1, playerPosX, playerPosY, 50, 50);
            break;
        case "down":
            image(playerMoveDown1, playerPosX, playerPosY, 50, 50);
            break;
        default:
            image(playerMoveDown1, playerPosX, playerPosY, 50, 50);
    }
}

const getPlayerTileName = () => {
    let playerTilePosX = Math.trunc((playerPosX + 15 + mapX) / tileWidth / mapRatio);
    let playerTilePosY = Math.trunc((playerPosY + 15 + mapY) / tileHeight / mapRatio);
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

const madeCollision = (lastDirection) => {
    if (checkIfIsCollision()) {
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