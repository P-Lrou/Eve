function getTopCornerLeft(x, y, width, height) {
    return [x, y]
}

function getTopCornerRight(x, y, width, height) {
    return [x + width, y]
}

function getBottomCornerLeft(x, y, width, height) {
    return [x, y + height]
}

function getBottomCornerRight(x, y, width, height) {
    return [x + width, y + height]
}

function pointIsInRect(point, rect) {
    if (point[0] > rect[0] && point[0] < (rect[0] + rect[2]) && point[1] > rect[1] && (rect[1] + rect[3])) {
        return true
    }
    return false
}

function rectIsInRect(rect1, rect2) {
    if (pointIsInRect(getTopCornerLeft(rect1[0], rect1[1], rect1[2], rect1[3]), rect2)) {
        return true
    }
    if (pointIsInRect(getTopCornerRight(rect1[0], rect1[1], rect1[2], rect1[3]), rect2)) {
        return true
    }
    if (pointIsInRect(getBottomCornerLeft(rect1[0], rect1[1], rect1[2], rect1[3]), rect2)) {
        return true
    }
    if (pointIsInRect(getBottomCornerRight(rect1[0], rect1[1], rect1[2], rect1[3]), rect2)) {
        return true
    }
    return false
}

function expandRect(rect, expandSize) {
    return [rect[0] - expandSize, rect[1] - expandSize, rect[2] + expandSize, rect[3] + expandSize]
}

function shrinkRect(rect, skrinkSize) {
    return [rect[0] + skrinkSize, rect[1] + skrinkSize, rect[2] - skrinkSize, rect[3] - skrinkSize]
}