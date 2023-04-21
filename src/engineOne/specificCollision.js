//& This file is used to set special collision for the top down map
//& This part has been do by Ethan Carollo

/**
 * @param {array[int]} worldPosition [x, y] the world position we need to check 
 */
const checkSpecificCollision = (worldPosition) => {
    noStroke();
    fill(0, 255, 0, 100)
    if (!debugMode) {
        noFill();
    }
    rect(playerPosX + spritePlayerSize / 2, playerPosY + spritePlayerSize / 2, 10, 10) // This is the point of collision
    let collided = map.otherCollisions.filter(collision => {
        return collision.positionCollision[0] * tileSize < worldPosition[0]
            && collision.positionCollision[1] * tileSize < worldPosition[1]
            && (collision.positionCollision[0] + collision.sizeCollision[0]) * tileSize > worldPosition[0]
            && (collision.positionCollision[1] + collision.sizeCollision[1]) * tileSize > worldPosition[1];
    })
    return collided.length > 0
}

/**
 * This function is used for the debug, we use it in the engineOne.js so if you wan't to delete that, you can, this is not usefull at all
 */
const showSpecificCollisionDebug = () => {
    noStroke();
    fill(0, 255, 0, 100)
    if (!debugMode) {
        noFill();
    }
    for (let i = 0; i < map.otherCollisions.length; i++) {
        if (map.otherCollisions[i].isChest) {
            fill(0, 0, 255, 100);
        } else {
            fill(0, 255, 0, 100)
        }
        if (!debugMode) {
            noFill();
        }
        showDebugRect(
            map.otherCollisions[i].positionCollision[0] * tileSize - mapX,
            map.otherCollisions[i].positionCollision[1] * tileSize - mapY,
            map.otherCollisions[i].sizeCollision[0] * tileSize,
            map.otherCollisions[i].sizeCollision[1] * tileSize
        )
    }
}

const showDebugRect = (x, y, width, height) => {
    rect(x, y, width, height)
}