
// Assign all player inputs
function playerInputs() {
    playerState = "idle"
    if (keyIsDown(LEFT_ARROW) || keyIsDown(81)) {
        mapX -= playerSpeed;
        Direction = "left"
        playerState = "mooving"
        madeCollision()
    }

    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        mapX += playerSpeed;
        Direction = "right"
        playerState = "mooving"
        madeCollision()
    }

    if (keyIsDown(UP_ARROW) || keyIsDown(90)) {
        mapY -= playerSpeed;
        Direction = "up"
        playerState = "mooving"
        madeCollision()
    }

    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        mapY += playerSpeed;
        Direction = "down"
        playerState = "mooving"
        madeCollision()
    }
}

// Draw Player with the good asset
function drawPlayer() {
    switch (playerState) {
        case "idle":
            drawIdlePlayer()
            break;
        case "mooving":
            drawMovePlayer()
            break;
        default:
            throw new Error("Player State isn't defined or isn't the good value")
    }
}

function drawIdlePlayer() {
    switch (Direction) {
        case "left":
            image(protoSprite.get(0, spriteCutSize * 1, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "right":
            image(protoSprite.get(0, spriteCutSize * 0, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "up":
            image(protoSprite.get(0, spriteCutSize * 2, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "down":
            image(protoSprite.get(0, spriteCutSize * 3, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        default:
            image(protoSprite.get(0, spriteCutSize * 3, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
    }
}

function drawMovePlayer() {
    switch (Direction) {
        case "left":
            image(protoSprite.get(spriteCutSize * indexOfAnimation, spriteCutSize * 1, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "right":
            image(protoSprite.get(spriteCutSize * indexOfAnimation, spriteCutSize * 0, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "up":
            image(protoSprite.get(spriteCutSize * indexOfAnimation, spriteCutSize * 2, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "down":
            image(protoSprite.get(spriteCutSize * indexOfAnimation, spriteCutSize * 3, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        default:
            image(protoSprite.get(spriteCutSize, spriteCutSize * 3, spriteCutSize, spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
    }
}

// Check if the tile where the player is, is a collision block
function checkIfIsCollisionWall(actualTile) {
    switch (actualTile) {
        case "wallTopDown":
            return true;
        default:
            return false;
    }
}

function getTileName(point) {
    return map.layers[0][Math.trunc((point[0] + mapX) / tileSize)][Math.trunc((point[1] + mapY) / tileSize)]
}

// Made the collision between the player and the collision tile
function madeCollision() {
    let rectPlayer = [playerPosX, playerPosY, spritePlayerSize, spritePlayerSize]
    let TopCornerLeft = getTopCornerLeft(shrinkRect(rectPlayer, 10))
    let TopCornerRight = getTopCornerRight(shrinkRect(rectPlayer, 20))
    let BottomCornerLeft = getBottomCornerLeft(shrinkRect(rectPlayer, 10))
    let BottomCornerRight = getBottomCornerRight(shrinkRect(rectPlayer, 20))
    // fill("red")
    // ellipse(TopCornerLeft[0], TopCornerLeft[1], 15)
    // fill("blue")
    // ellipse(TopCornerRight[0], TopCornerRight[1], 15)
    // fill("green")
    // ellipse(BottomCornerLeft[0], BottomCornerLeft[1], 15)
    // fill("yellow")
    // ellipse(BottomCornerRight[0], BottomCornerRight[1], 15)
    if (checkIfIsCollisionWall(getTileName(TopCornerLeft))) {
        if (Direction === "up") {
            mapY += playerSpeed;
        }
        if (Direction === "left") {
            mapX += playerSpeed;
        }
        console.log("TopCornerLeft")
    }
    if (checkIfIsCollisionWall(getTileName(TopCornerRight))) {
        if (Direction === "up") {
            mapY += playerSpeed;
        }
        if (Direction === "right") {
            mapX -= playerSpeed;
        }
        console.log("TopCornerRight")
    }
    if (checkIfIsCollisionWall(getTileName(BottomCornerLeft))) {
        if (Direction === "down") {
            mapY -= playerSpeed;
        }
        if (Direction === "left") {
            mapX += playerSpeed;
        }
        console.log("BottomCornerLeft")
    }
    if (checkIfIsCollisionWall(getTileName(BottomCornerRight))) {
        if (Direction === "down") {
            mapY -= playerSpeed;
        }
        if (Direction === "right") {
            mapX -= playerSpeed;
        }
        console.log("BottomCornerRight")
    }
}

// Do the camera who follow the player
function playerCamera() {
    mapY = playerPosY
    mapX = playerPosX
}
