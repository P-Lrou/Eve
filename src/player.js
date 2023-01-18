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
    ellipse(playerPosX, playerPosY, 30);
}

const getPlayerTileName = () => {
    let playerTilePosX = Math.trunc((playerPosX + mapX) / tileWidth / mapRatio);
    let playerTilePosY = Math.trunc((playerPosY + mapY) / tileHeight / mapRatio);
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