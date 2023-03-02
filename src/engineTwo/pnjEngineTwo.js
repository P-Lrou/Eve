function drawPNJEngineTwo(PNJ) {
    let actualPNJ = undefined;
    pnj.pnjEngineTwo.forEach(element => {
        if (element.name === PNJ) {
            actualPNJ = element
        }
    });
    let pnjTile = findActualPnj(actualPNJ.name)
    let animationMoovePlayer = pnjTile.get(0, spriteCutSize * 3, spriteCutSize, spriteCutSize);

    actualPNJ.startx = actualPNJ.xdist + EngineTwoMapX

    if (actualPNJ.xdist > actualPNJ.minX) {
        actualPNJ.pnjDirection = [-1, 0]
    }
    if (actualPNJ.xdist < actualPNJ.maxX) {
        actualPNJ.pnjDirection = [1, 0]
    }
    switch (actualPNJ.pnjDirection[0]) {
        case 0:
            break;
        case 1:
            animationMoovePlayer = pnjTile.get(spriteCutSize * indexOfPnjAnim, spriteCutSize * 0, spriteCutSize, spriteCutSize);
            if (actualPNJ.canMove) {
                actualPNJ.xdist += pnjSpeed
            }
            collisionPNJEngineTwo(actualPNJ)
            break;
        case -1:
            animationMoovePlayer = pnjTile.get(spriteCutSize * indexOfPnjAnim, spriteCutSize * 1, spriteCutSize, spriteCutSize);
            if (actualPNJ.canMove) {
                actualPNJ.xdist -= pnjSpeed
            }
            collisionPNJEngineTwo(actualPNJ)
            break;
    }
    switch (actualPNJ.pnjDirection[1]) {
        case 0:
            break;
        case 1:
            animationMoovePlayer = pnjTile.get(spriteCutSize * indexOfPnjAnim, spriteCutSize * 3, spriteCutSize, spriteCutSize);
            collisionPNJEngineTwo(actualPNJ)
            break;
        case -1:
            animationMoovePlayer = pnjTile.get(spriteCutSize * indexOfPnjAnim, spriteCutSize * 2, spriteCutSize, spriteCutSize);
            collisionPNJEngineTwo(actualPNJ)
            break;
    }
    if (!actualPNJ.canMove) {
        animationMoovePlayer = pnjTile.get(0, spriteCutSize, spriteCutSize, spriteCutSize)
    }
    
    image(animationMoovePlayer, actualPNJ.startx, actualPNJ.starty, spritePlayerSize, spritePlayerSize)
}

function collisionPNJEngineTwo(actualPNJ) {
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

function isCollisionWithPlayer(point) {
    let cornerMyPlayer = [playerPosX, playerPosY, spritePlayerSize, spritePlayerSize]
    if (pointIsInRect(point, cornerMyPlayer)) {
        return true
    }
    return false
}