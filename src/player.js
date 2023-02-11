
// Assign all player inputs
function playerInputs() {
    playerState = "idle"
    if (keyIsDown(LEFT_ARROW) || keyIsDown(81)) {
        playerPosX -= playerMoveSize;
        Direction = "left"
        playerState = "mooving"
        madeCollision()
    }

    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        playerPosX += playerMoveSize;
        Direction = "right"
        playerState = "mooving"
        madeCollision()
    }

    if (keyIsDown(UP_ARROW) || keyIsDown(90)) {
        playerPosY -= playerMoveSize;
        Direction = "up"
        playerState = "mooving"
        madeCollision()
    }

    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        playerPosY += playerMoveSize;
        Direction = "down"
        playerState = "mooving"
        madeCollision()
    }
}

// Draw Player with the good asset
function drawPlayer() {
    switch(playerState){
        case "idle":
            drawIdlePlayer()
            break;
        case "mooving":
            drawMovePlayer()
            break;
        default :
            throw new Error ("Player State isn't defined or isn't the good value")
    }
}

function drawIdlePlayer(){
    switch (Direction) {
        case "left":
            image(protoSprite.get(20,20*1 ,20,20), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "right":
            image(protoSprite.get(20,20*0 ,20,20), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "up":
            image(protoSprite.get(20,20*2 ,20,20), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "down":
            image(protoSprite.get(20,20*3 ,20,20), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        default:
            image(protoSprite.get(20,20*3 ,20,20), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
    }
}

function drawMovePlayer(){
    switch (Direction) {
        case "left":
            image(protoSprite.get(20*rep,20*1 ,20,20), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "right":
            image(protoSprite.get(20*rep,20*0 ,20,20), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "up":
            image(protoSprite.get(20*rep,20*2 ,20,20), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "down":
            image(protoSprite.get(20*rep,20*3 ,20,20), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        default:
            image(protoSprite.get(20,20*3 ,20,20), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
    }
}

// Get the tile where the player is
function getPlayerTileName() {
    let playerTilePos = createVector();
    playerTilePos.x = Math.trunc((playerPosX + spritePlayerSize / 2 + mapX) / tileSize);
    playerTilePos.y = Math.trunc((playerPosY + spritePlayerSize /1.25 + mapY) / tileSize);
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