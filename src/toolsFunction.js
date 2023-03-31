//^ Functions to get all corners points of a Rect
//+ Take in param a rect like this [x, y, w, h]

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

//^ This function check if a point is in rect and return true or false
//+ Take two params, a point like this [x,y] and a rect like this [x, y, x, h]

function pointIsInRect(point, rect) {
    if (point[0] > rect[0] && point[0] < (rect[0] + rect[2]) && point[1] > rect[1] && point[1] < (rect[1] + rect[3])) {
        return true
    }
    return false
}

//^ This function check if a rect is in another rect using the function to get corners points and pointIsInRect and return an array 
//^ with the corner who is in the other rect
//+ Take two rect in params like this [x, y, w, h]

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

//^ This Function expand the rect size and return a new rect with he's new size
//+ Take two params, a rect like this [x, y, w, h] and the expand size as a number

function expandRect(rect, expandSize) {
    return [rect[0] - expandSize, rect[1] - expandSize, rect[2] + expandSize, rect[3] + expandSize]
}

//- We actually have problems with this function so we remove her

// function shrinkRect(rect, skrinkSize) {
//     return [rect[0] + skrinkSize, rect[1] + skrinkSize, rect[2] - skrinkSize, rect[3] - skrinkSize]
// }