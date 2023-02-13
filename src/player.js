
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
            image(protoSprite.get(0,spriteCutSize*1 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "right":
            image(protoSprite.get(0,spriteCutSize*0 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "up":
            image(protoSprite.get(0,spriteCutSize*2 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "down":
            image(protoSprite.get(0,spriteCutSize*3 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        default:
            image(protoSprite.get(0,spriteCutSize*3 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
    }
}

function drawMovePlayer(){
    switch (Direction) {
        case "left":
            image(protoSprite.get(spriteCutSize*indexOfAnimation,spriteCutSize*1 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "right":
            image(protoSprite.get(spriteCutSize*indexOfAnimation,spriteCutSize*0 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "up":
            image(protoSprite.get(spriteCutSize*indexOfAnimation,spriteCutSize*2 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "down":
            image(protoSprite.get(spriteCutSize*indexOfAnimation,spriteCutSize*3 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        default:
            image(protoSprite.get(spriteCutSize,spriteCutSize*3 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
    }
}

// Get the tile where the player is
function getPlayerTileName() {
    let playerTilePos = createVector();
    playerTilePos.x = Math.trunc((playerPosX + spritePlayerSize / 2 + mapX) / tileSize);
    playerTilePos.y = Math.trunc((playerPosY + spritePlayerSize + mapY) / tileSize);
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
                mapX += playerSpeed;
                break;
            case "right":
                mapX -= playerSpeed;
                break;
            case "up":
                mapY += playerSpeed;
                break;
            case "down":
                mapY -= playerSpeed;
                break;
            default:
                throw new Error("Collision bug");
        }
    }
}

// Do the camera who follow the player
function playerCamera() {
    mapY = playerPosY
    mapX = playerPosX
}
