
// Assign all player inputs
function playerInputs() {
    playerState = "idle"
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
    
    if (keyIsDown(49)){
        actualInventoryChoose = 1
    }

    if (keyIsDown(50)){
        actualInventoryChoose = 2
    }

    if (keyIsDown(51)){
        actualInventoryChoose = 3
    }

    if (keyIsDown(52)){
        actualInventoryChoose = 4
    }

    if (keyIsDown(53)){
        actualInventoryChoose = 5
    }

    if (keyIsDown(54)){
        actualInventoryChoose = 6
    }
}

// Draw Player with the good asset
function drawPlayer() {
    let TopCornerLeft = getTopCornerLeft([playerPosX + 28, playerPosY + 60, spritePlayerSize, spritePlayerSize])
    let TopCornerRight = getTopCornerRight([playerPosX, playerPosY + 60, spritePlayerSize - 28, spritePlayerSize])
    let BottomCornerLeft = getBottomCornerLeft([playerPosX + 28, playerPosY, spritePlayerSize - 40, spritePlayerSize - 2])
    let BottomCornerRight = getBottomCornerRight([playerPosX, playerPosY, spritePlayerSize - 28, spritePlayerSize - 2])
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
    if (checkIfIsObject(getTileNameForObject(TopCornerLeft))) {
        takeObject(TopCornerLeft)
    }
    if (checkIfIsObject(getTileNameForObject(TopCornerRight))) {
        takeObject(TopCornerRight)
    }
    if (checkIfIsObject(getTileNameForObject(BottomCornerLeft))) {
        takeObject(BottomCornerLeft)
    }
    if (checkIfIsObject(getTileNameForObject(BottomCornerRight))) {
        takeObject(BottomCornerRight)
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
        case "doorTopDown":
            changeMap();
            return true;
        case "wallTopDownLeftCorner":
            return true;
        case "wallTopDownFull":
            return true;
        case "wallTopDownRightCorner":
            return true;
        case "wallTopDownLeft":
            return true;
        case "wallTopDownRigth":
            return true;
        case "wallTopDownFullLeft":
            return true;
        case "wallTopDownFullRigth":
            return true;
        case "wallTopDownPointLeftDown":
            return true;
        case "wallTopDownPointRigthDown":
            return true;
        case "wallTopDownPointLeftTop":
            return true;
        case "wallTopDownPointRigthTop":
            return true;
        case "wallTopDownTopLeft":
            return true;
        case "wallTopDownTopRigth":
            return true;
        case "wallTopDownTopDown":
            return true;
        case "wallTopDownTopFullFloorWall":
            return true;
        case "wallTopDownCornerFullLeft":
            return true;
        case "wallTopDownCornerFullRight":
            return true;
        default:
            return false;
    }
}

function checkIfIsObject(actualTile) {
    switch (actualTile) {
        case "coinYellow":
            return true;
        case "coinGreen":
            return true;
        case "coinBlue":
            return true;
        default:
            return false;
    }
}


function getTileName(point) {
    return map.layers[0][Math.trunc((point[1] + mapY) / tileSize)][Math.trunc((point[0] + mapX) / tileSize)]
}

function getTileNameForObject(point) {
    return map.layers[1][Math.trunc((point[1] + mapY) / tileSize)][Math.trunc((point[0] + mapX) / tileSize)]
}

// Made the collision between the player and the collision tile
function madeCollision() {
    let TopCornerLeft = getTopCornerLeft([playerPosX + 28, playerPosY + 60, spritePlayerSize, spritePlayerSize])
    let TopCornerRight = getTopCornerRight([playerPosX, playerPosY + 60, spritePlayerSize - 28, spritePlayerSize])
    let BottomCornerLeft = getBottomCornerLeft([playerPosX + 28, playerPosY, spritePlayerSize - 40, spritePlayerSize - 2])
    let BottomCornerRight = getBottomCornerRight([playerPosX, playerPosY, spritePlayerSize - 28, spritePlayerSize - 2])
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
    }
    if (checkIfIsCollisionWall(getTileName(TopCornerRight))) {
        if (Direction === "up") {
            mapY += playerSpeed;
        }
        if (Direction === "right") {
            mapX -= playerSpeed;
        }
    }
    if (checkIfIsCollisionWall(getTileName(BottomCornerLeft))) {
        if (Direction === "down") {
            mapY -= playerSpeed;
        }
        if (Direction === "left") {
            mapX += playerSpeed;
        }
    }
    if (checkIfIsCollisionWall(getTileName(BottomCornerRight))) {
        if (Direction === "down") {
            mapY -= playerSpeed;
        }
        if (Direction === "right") {
            mapX -= playerSpeed;
        }
    }
}

function takeObject(point) {
    textSize(32);
    text('Press E to take the object', 10, 30);
    if (keyIsDown(69)) {
        inventoryTab[inventoryTabNumber] = (getTileNameForObject(point))
        inventoryTabNumber++
        map.layers[1][Math.trunc((point[1] + mapY) / tileSize)][Math.trunc((point[0] + mapX) / tileSize)] = "empty"
    }
}

function changeMap() {
    textSize(32);
    text('Press E to change room', 10, 30);
    if (keyIsDown(69)) {
        console.log('Change Room')
    }
}

// Do the camera who follow the player
function playerCamera() {
    mapY = playerPosY
    mapX = playerPosX
}
