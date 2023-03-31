//& This file setup all variables for the global game

//+ This set screen settings
let screenWidth = innerWidth;
let screenHeight = innerHeight;
let frameRateNumber = 60;

//+ Set engines names to variables
const ENGINE_ONE = "engine_one";
const ENGINE_TWO = "engine_two";

//+ Set the start engine
let currentEngine = ENGINE_ONE;
let tempCurrentEngine = ENGINE_ONE;

//+ Set the player cut size
let spriteCutSize = 20;

//+ Set player state and direction
let playerState = "idle";
let Direction = [0, 0];

//+ Set global NPC speed
let npcSpeed = 3;

//+ Set inventory Params
let inventorySquareSize = 100;
let inventoryWidthStart = screenWidth / 1.35;
let inventoryHeigthStart = 10;
let inventoryTab = [];
let inventoryTabNumber = 0;
let actualInventoryChoose = 1;
inventoryTab.length = 4;


//+ Set NPC interaction params
let canInteract = false;
let tempText = "";
let i = 0;
let index = 0;
let bool = false;
let actualDialog = [];
let speak = false;
let key = false;

//+ Set NPC globals moves
let canMoveAllNPC = true;

//+ Set switch case to know the first engine
switch (currentEngine) {
    case ENGINE_ONE:
        spritePlayerSize = 120;

        playerPosX = screenWidth / 2 - spritePlayerSize / 2;
        playerPosY = screenHeight / 2 - spritePlayerSize / 2;
        break;

    case ENGINE_TWO:
        spritePlayerSize = screenHeight / 2.58;

        playerPosX = screenWidth / 2 - spritePlayerSize / 2;
        playerPosY = screenHeight - spritePlayerSize - 58;
        break;
}

//+ Set the animation for NPC's
let indexOfNpcAnim = 0;
setInterval(() => {
    if (indexOfNpcAnim < 6) {
        indexOfNpcAnim += 1;
    } else {
        indexOfNpcAnim = 1;
    }
}, 110);

//+ Set animation for Clone Map Background
let indexOfAnimation2 = 0;
setInterval(() => {
    if (indexOfAnimation2 < 20) {
        indexOfAnimation2 += 1;
    } else {
        indexOfAnimation2 = 0;
    }
}, 110);

//+ Set animation for Clone Map Quest
let indexOfAnimationQuestClone = 0;
setInterval(() => {
    if (indexOfAnimationQuestClone < 20) {
        indexOfAnimationQuestClone += 1;
    } else {
        indexOfAnimationQuestClone = 0;
    }
}, 110);

//+ Set animation for Botanic Map Background
let indexOfAnimation3 = 0;
setInterval(() => {
    if (indexOfAnimation3 < 17) {
        indexOfAnimation3 += 1;
    } else {
        indexOfAnimation3 = 0;
    }
}, 110);

//+ Set animation for main caracter movement
let indexOfAnimation = 0;
setInterval(() => {
    if (indexOfAnimation < 6) {
        indexOfAnimation += 1;
    } else {
        indexOfAnimation = 1;
    }
}, 110);

//^ This function is used to detect engines changes
function changeEngine() {
    if (currentEngine != tempCurrentEngine) {
        if (currentEngine == "engine_one") {
            spritePlayerSize = 120;

            playerPosX = screenWidth / 2 - spritePlayerSize / 2;
            playerPosY = screenHeight / 2 - spritePlayerSize / 2;
        } else {
            spritePlayerSize = screenHeight / 2.58;

            playerPosX = screenWidth / 2 - spritePlayerSize / 2;
            playerPosY = screenHeight - spritePlayerSize - 58;
        }
        tempCurrentEngine = currentEngine;
    }
}

function writeText(actualDialog) {
    if (canInteract) {
        fill("rgba(31, 31, 31, 1)");
        strokeWeight(4);
        stroke("rgba(213, 213, 213, 0.24)");
        rect((screenWidth - 900) / 2, screenHeight - 200, 900, 170, 10);
        fill("rgb(255,255,255)");
        if (bool) {
            if (speak) {
                if (key && keyIsDown(32)) {
                    if (index < actualDialog.length - 1) {
                        index++;
                        i = 0;
                        tempText = "";
                        key = false
                    } else {
                        clearInterval(intervalId);
                        i = 0;
                        tempText = "";
                        speak = false;
                        bool = false;
                        key = false;
                        index = 0;
                        canInteract = false;
                    }
                }
            } else {
                speak = true
                intervalId = setInterval(() => {
                    if (i == actualDialog[index].length) {
                        key = true
                        return;
                    } else {
                        tempText = tempText + actualDialog[index][i];
                        i++;
                    }
                }, 50);
            }
        } else {

            bool = true
        }
        noStroke();
        textSize(20);
        text(tempText, 580, screenHeight - 150, 700, 100);
    }
}