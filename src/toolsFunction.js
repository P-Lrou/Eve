function getTopCornerLeft(rect) {
    return [rect[0], rect[1]]
}

function getTopCornerRight(rect) {
    return [rect[0] + rect[2], rect[1]]
}

function getBottomCornerLeft(rect) {
    return [rect[0], rect[1] + rect[3]]
}

function getBottomCornerRight(rect) {
    return [rect[0] + rect[2], rect[1] + rect[3]]
}

function pointIsInRect(point, rect) {
    if (point[0] > rect[0] && point[0] < (rect[0] + rect[2]) && point[1] > rect[1] && point[1] < (rect[1] + rect[3])) {
        return true
    }
    return false
}

function rectIsInRect(rect1, rect2) {
    let tabOfCorner = [];
    if (pointIsInRect(getTopCornerLeft([rect1[0], rect1[1], rect1[2], rect1[3]]), rect2)) {
        tabOfCorner.push("TopCornerLeft")
    }
    if (pointIsInRect(getTopCornerRight([rect1[0], rect1[1], rect1[2], rect1[3]]), rect2)) {
        tabOfCorner.push("TopCornerRight")
    }
    if (pointIsInRect(getBottomCornerLeft([rect1[0], rect1[1], rect1[2], rect1[3]]), rect2)) {
        tabOfCorner.push("BottomCornerLeft")
    }
    if (pointIsInRect(getBottomCornerRight([rect1[0], rect1[1], rect1[2], rect1[3]]), rect2)) {
        tabOfCorner.push("BottomCornerRight")
    }
    return tabOfCorner
}

function expandRect(rect, expandSize) {
    console.log([rect[0] - expandSize, rect[1] - expandSize, rect[2] + expandSize, rect[3] + expandSize])
    return [rect[0] - expandSize, rect[1] - expandSize, rect[2] + expandSize, rect[3] + expandSize]
}

// function shrinkRect(rect, skrinkSize) {
//     return [rect[0] + skrinkSize, rect[1] + skrinkSize, rect[2] - skrinkSize, rect[3] - skrinkSize]
// }