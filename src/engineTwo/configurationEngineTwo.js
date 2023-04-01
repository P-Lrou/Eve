//& This file setup all variables for the first Engine

//+ actually useless -> Just set the map names variable
let actualMapEngineTwo = "commandMap";

//+ actually useless -> Just set the actual direction variable
let actualDirectionEngineTwo = "left";

//+ Set the map size
let engineTwoMapSizeW = 324;
let engineTwoMapSizeH = 60;

//+ Set the player speed
let playerSpeedEngineTwo = 12;

//+ Set size for the rect in cloneMap quest
let heigthRectMapEngineTwoCloneMap = 527
let yRectMapEngineTwoCloneMap = 250
let limitYMax = 192;

//+ Set the variable to divided map to do collision
let engineTwoDividePartW = -((engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH)) / 20)

//+ Set a boolean if can move in engineTwo
let canMoveEngineTwo = true;

//+ actually useless -> Just set the map position variable
let EngineTwoMapX = (-engineTwoMapSizeW * (screenHeight / engineTwoMapSizeH) + screenWidth) + 2000;
let EngineTwoMapY = 0;