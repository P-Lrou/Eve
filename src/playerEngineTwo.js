
// Assign all player inputs
function playerInputsEngineTwo() {
    playerState = "idle"
    if (keyIsDown(LEFT_ARROW) || keyIsDown(81)) {
        playerPosX -= playerSpeed;
        console.log(playerPosX)
        Direction = "left"
        playerState = "mooving"
        // madeCollisionEngineTwo()
    }

    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        playerPosX += playerSpeed;
        console.log(playerPosX)
        Direction = "right"
        playerState = "mooving"
        // madeCollisionEngineTwo()
    }
}

// Draw Player with the good asset
function drawPlayerEngineTwo() {
    switch(playerState){
        case "idle":
            drawIdlePlayerEngineTwo()
            break;
        case "mooving":
            drawMovePlayerEngineTwo()
            break;
        default :
            throw new Error ("Player State isn't defined or isn't the good value")
    }
}

function drawIdlePlayerEngineTwo(){
    switch (Direction) {
        case "left":
            image(protoSprite.get(0,spriteCutSize*1 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "right":
            image(protoSprite.get(0,spriteCutSize*0 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        default:
            image(protoSprite.get(0,spriteCutSize*3 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
    }
}

function drawMovePlayerEngineTwo(){
    switch (Direction) {
        case "left":
            image(protoSprite.get(spriteCutSize*indexOfAnimation,spriteCutSize*1 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        case "right":
            image(protoSprite.get(spriteCutSize*indexOfAnimation,spriteCutSize*0 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
            break;
        default:
            image(protoSprite.get(spriteCutSize,spriteCutSize*3 ,spriteCutSize,spriteCutSize), playerPosX, playerPosY, spritePlayerSize, spritePlayerSize);
    }
}

// // Get the tile where the player is
// function getPlayerTileNameEngineTwo() {
//     let playerTilePos = createVector();
//     playerTilePos.x = Math.trunc((playerPosX + spritePlayerSize / 2 + mapX) / tileSize);
//     playerTilePos.y = Math.trunc((playerPosY + spritePlayerSize + mapY) / tileSize);
//     // En attendant d'avoir une fonction plus poussé pour les collisions, juste faire un point de collision au lieu de se perdre dans 40 km de codes avec des nombres rdm
//     return map.layers[0][playerTilePos.y][playerTilePos.x]
// }

// // Check if the tile where the player is, is a collision block
// function checkIfIsCollisionEngineTwo() {
//     switch (getPlayerTileNameEngineTwo()) {
//         case "wallTopDown":
//             return true;
//         default:
//             return false;
//     }
// }


// // Made the collision between the player and the collision tile
// function madeCollisionEngineTwo() {
//     if (checkIfIsCollisionEngineTwo()) {
//         switch (Direction) {
//             case "left":
//                 mapX += playerSpeed;
//                 break;
//             case "right":
//                 mapX -= playerSpeed;
//                 break;
//             default:
//                 throw new Error("Collision bug");
//         }
//     }
// }
// // Do the camera who follow the player
// function playerCameraEngineTwo() {
//     mapX = playerPosX
// }
