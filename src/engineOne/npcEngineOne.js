//& This file managed all NPC drawing and interaction

//^ This function draw the NPC with information that are stock in a json
//- Take in params the actualNPC
function drawPNJEngineOne(PNJ) {
    let actualPNJ = undefined;
    pnj.pnjEngineOne.forEach(element => {
        if (element.name === PNJ) {
            actualPNJ = element
        }
    });
    let pnjTile = findActualPnj(actualPNJ.name)
    let animationMoovePlayer = pnjTile.get(0, spriteCutSize * 3, spriteCutSize, spriteCutSize);

    actualPNJ.startx = actualPNJ.xdist - mapX
    actualPNJ.starty = actualPNJ.ydist - mapY

    if (actualPNJ.xdist > actualPNJ.maxX) {
        actualPNJ.pnjDirection = [-1, 0]
    }
    if (actualPNJ.xdist < actualPNJ.minX) {
        actualPNJ.pnjDirection = [1, 0]
    }


    switch (actualPNJ.pnjDirection[0]) {
        case 0:
            break;
        case 1:
            animationMoovePlayer = pnjTile.get(spriteCutSize * indexOfNpcAnimation, spriteCutSize * 0, spriteCutSize, spriteCutSize);
            if (actualPNJ.canMove) {
                actualPNJ.xdist += pnjSpeed
            }
            collisionPNJEngineOne(actualPNJ)
            break;
        case -1:
            animationMoovePlayer = pnjTile.get(spriteCutSize * indexOfNpcAnimation, spriteCutSize * 1, spriteCutSize, spriteCutSize);
            if (actualPNJ.canMove) {
                actualPNJ.xdist -= pnjSpeed
            }
            collisionPNJEngineOne(actualPNJ)
            break;
    }
    switch (actualPNJ.pnjDirection[1]) {
        case 0:
            break;
        case 1:
            animationMoovePlayer = pnjTile.get(spriteCutSize * indexOfNpcAnimation, spriteCutSize * 3, spriteCutSize, spriteCutSize);
            collisionPNJEngineOne(actualPNJ)
            break;
        case -1:
            animationMoovePlayer = pnjTile.get(spriteCutSize * indexOfNpcAnimation, spriteCutSize * 2, spriteCutSize, spriteCutSize);
            collisionPNJEngineOne(actualPNJ)
            break;
    }

    if (!actualPNJ.canMove) {
        animationMoovePlayer = pnjTile.get(0, spriteCutSize, spriteCutSize, spriteCutSize)
    }

    image(animationMoovePlayer, actualPNJ.startx, actualPNJ.starty, spritePlayerSize, spritePlayerSize)
}

//^ This function do the collision for the NPC with the same function as the main player
//- Take in params the actualNPC
function collisionPNJEngineOne(actualPNJ) {
    let TopCornerLeft = getTopCornerLeft([actualPNJ.startx + 30, actualPNJ.starty, spritePlayerSize, spritePlayerSize])
    let TopCornerRight = getTopCornerRight([actualPNJ.startx, actualPNJ.starty, spritePlayerSize - 25, spritePlayerSize])
    let BottomCornerLeft = getBottomCornerLeft([actualPNJ.startx + 30, actualPNJ.starty, spritePlayerSize, spritePlayerSize])
    let BottomCornerRight = getBottomCornerRight([actualPNJ.startx, actualPNJ.starty, spritePlayerSize - 25, spritePlayerSize])
    // fill("red")
    // ellipse(TopCornerLeft[0], TopCornerLeft[1], 15)
    // fill("blue")
    // ellipse(TopCornerRight[0], TopCornerRight[1], 15)
    // fill("green")
    // ellipse(BottomCornerLeft[0], BottomCornerLeft[1], 15)
    // fill("yellow")
    // ellipse(BottomCornerRight[0], BottomCornerRight[1], 15)

    if (isCollisionWithPlayer(TopCornerLeft)) {
        actualPNJ.canMove = false
        return
    }
    if (isCollisionWithPlayer(TopCornerRight)) {
        actualPNJ.canMove = false
        return
    }
    if (isCollisionWithPlayer(BottomCornerLeft)) {
        actualPNJ.canMove = false
        return
    }
    if (isCollisionWithPlayer(BottomCornerRight)) {
        actualPNJ.canMove = false
        return
    }
    actualPNJ.canMove = true
}

//^ This function is actually to check if the npc position is on a collision 
//- Take in params the acutal player position
function isCollisionWithPlayer(point) {
    let cornerMyPlayer = [playerPosX, playerPosY, spritePlayerSize, spritePlayerSize]
    if (pointIsInRect(point, cornerMyPlayer)) {
        return true
    }
    return false
}