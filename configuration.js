//& This file setup all variables for the global game

let actualQuestName = "seedsBagQuest"
let gameIsStarting = true;
let startingIsDialogsFinish = false;

//+ This set screen settings
let screenWidth = innerWidth;
let screenHeight = innerHeight;
let frameRateNumber = 60;

//+ Set engines names to variables
const ENGINE_ONE = "engine_one";
const ENGINE_TWO = "engine_two";
const MENU = "menu";

//+ Set the start engine
let currentEngine = MENU;
let tempCurrentEngine = ENGINE_TWO;

//+ Set the player cut size
let spriteCutSize = 20;

//+ Set player state and direction
let playerState = "idle";
let Direction = [0, 0];
let canMovePlayer = true;

//+ Set global NPC speed
let npcSpeed = 5;

//+ Set inventory Params
let inventorySquareSize = 100;
let inventoryHeigthStart = 10;
let inventoryTab = [];
let inventoryTabNumber = 0;
let actualInventoryChoose = 1;
inventoryTab.length = 4;
let inventoryWidthStart = screenWidth - (inventoryTab.length * inventorySquareSize) - 10 * inventoryTab.length - 10;


//+ Set NPC interaction params
let canInteract = false;
let tempText = "";
let i = 0;
let index = 0;
let bool = false;
let actualDialog = [];
let speak = false;
let key = false;
let actualNPCCollision = '';
let actualPlayersOrder = [];
let actualHead = undefined;

//+ Set global Variable to see if talk to an NPC
let canTalkingToNPC = false;

//+ Set NPC globals moves
let canMoveAllNPC = true;
let canTalkGlobalNPC = true;

//+ Set a boolean if can draw inventory
let canDrawnInventory = true;

//+ Set switch case to know the first engine
switch (currentEngine) {
    case ENGINE_ONE:
        spritePlayerSize = 140;

        playerPosX = screenWidth / 2 - spritePlayerSize / 2;
        playerPosY = screenHeight / 2 - spritePlayerSize / 2;
        break;

    case ENGINE_TWO:
        spritePlayerSize = screenHeight / 2.58;

        playerPosX = screenWidth / 1.5 - spritePlayerSize / 2;
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

//+ Set animation for Command Map Screen
let indexOfAnimation4 = 0;
setInterval(() => {
    if (indexOfAnimation4 < 1) {
        indexOfAnimation4 += 1;
    } else {
        indexOfAnimation4 = 0;
    }
}, 110);

//+ Set animation for Command Map Control Panel
let indexOfAnimation5 = 0;
setInterval(() => {
    if (indexOfAnimation5 < 11) {
        indexOfAnimation5 += 1;
    } else {
        indexOfAnimation5 = 0;
    }
}, 110);

//+ Set animation for Command Map Earth animation
let indexOfAnimation6 = 0;
setInterval(() => {
    if (indexOfAnimation6 < 5) {
        indexOfAnimation6 += 1;
    } else {
        indexOfAnimation6 = 0;
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
            spritePlayerSize = 140;

            playerPosX = screenWidth / 2 - spritePlayerSize / 2;
            playerPosY = screenHeight / 2 - spritePlayerSize / 2;
        } else {
            switch (actualMapEngineTwo) {
                case "cloneMap":
                    spritePlayerSize = screenHeight / 2.58;

                    playerPosX = screenWidth / 1.5 - spritePlayerSize / 2;
                    playerPosY = screenHeight - spritePlayerSize - 58;
                    break;
                case "botanicMap":
                    spritePlayerSize = screenHeight / 2.58;

                    playerPosX = screenWidth / 3 - spritePlayerSize / 2;
                    playerPosY = screenHeight - spritePlayerSize - 58;
                    break;
                case "commandMap":
                    spritePlayerSize = screenHeight / 2.58;

                    playerPosX = screenWidth / 1.5 - spritePlayerSize / 2;
                    playerPosY = screenHeight - spritePlayerSize - 58;
                    break;
            }
        }
        tempCurrentEngine = currentEngine;
    }
}

//^ This function is used to show the text of dialogue feature
function writeText(actualDialog) {
    if (canInteract) {
        fill("rgba(31, 31, 31, 1)");
        strokeWeight(4);
        stroke("rgba(213, 213, 213, 0.24)");
        rect((screenWidth - 900) / 2, screenHeight - 200, 900, 170, 10);
        fill("rgb(255,255,255)");
        if (bool) {
            if (speak) {
                if (key && keyIsDown(69) || key && keyIsDown(32) || key && keyIsDown(32)) {
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
                        canDrawnInventory = true;
                        startingIsDialogsFinish = true;
                        canMoveAllNPC = true;
                        if (!gameIsStarting) {
                            canMovePlayer = true;
                        }
                        setTimeout(() => {
                            canTalkGlobalNPC = true;
                        }, 1000);
                        setTimeout(() => {
                            gameIsStarting = false;
                            canMovePlayer = true;
                        }, 8000);
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
                        actualHead = actualPlayersOrder[index]
                        i++;
                    }
                }, 30);
            }
        } else {

            bool = true
        }
        noStroke();
        textSize(16);
        text(tempText, (screenWidth - 850) / 2, screenHeight - 150, 600, 100);
        image(
            dialogsHeads.get(16 * actualHead, 0, 16, 16),
            (screenWidth) / 2 + 100, screenHeight - 345, 384, 384
        );
    }
}