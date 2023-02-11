
// Assign all player inputs
function playerInputs() {
    playerState = "idle"
    if (keyIsDown(LEFT_ARROW) || keyIsDown(81)) {
        playerPosX -= playerSpeed;
        Direction = "left"
        playerState = "mooving"
        madeCollision()
    }

    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        playerPosX += playerSpeed;
        Direction = "right"
        playerState = "mooving"
        madeCollision()
    }

    if (keyIsDown(UP_ARROW) || keyIsDown(90)) {
        playerPosY -= playerSpeed;
        Direction = "up"
        playerState = "mooving"
        madeCollision()
    }

    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        playerPosY += playerSpeed;
        Direction = "down"
        playerState = "mooving"
        madeCollision()
    }
}

let spriteCutSize = 20; // temporary here
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
            image(protoSprite.get(spriteCutSize,spriteCutSize*1 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "right":
            image(protoSprite.get(spriteCutSize,spriteCutSize*0 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "up":
            image(protoSprite.get(spriteCutSize,spriteCutSize*2 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "down":
            image(protoSprite.get(spriteCutSize,spriteCutSize*3 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        default:
            image(protoSprite.get(spriteCutSize,spriteCutSize*3 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
    }
}

function drawMovePlayer(){
    switch (Direction) {
        case "left":
            image(protoSprite.get(spriteCutSize*rep,spriteCutSize*1 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "right":
            image(protoSprite.get(spriteCutSize*rep,spriteCutSize*0 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "up":
            image(protoSprite.get(spriteCutSize*rep,spriteCutSize*2 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "down":
            image(protoSprite.get(spriteCutSize*rep,spriteCutSize*3 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        default:
            image(protoSprite.get(spriteCutSize,spriteCutSize*3 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
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
                playerPosX += playerSpeed;
                break;
            case "right":
                playerPosX -= playerSpeed;
                break;
            case "up":
                playerPosY += playerSpeed;
                break;
            case "down":
                playerPosY -= playerSpeed;
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
        mapX += playerSpeed;
    }

    if (playerPosX < screenWidth / 4) {
        playerPosX = screenWidth / 4;
        mapX -= playerSpeed;
    }

    if (playerPosY > screenHeight - screenHeight / 4) {
        playerPosY = screenHeight - screenHeight / 4;
        mapY += playerSpeed;
    }

    if (playerPosY < screenHeight / 4) {
        playerPosY = screenHeight / 4;
        mapY -= playerSpeed;
    }
}