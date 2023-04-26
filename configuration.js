//& This file setup all variables for the global game

let debugMode = false;
let gameIsStarting = true;
let acteTwoIsStarting = false;

let fightIsReset = false;

let eIsPressed = false;
let escapeIsPressed = false;
let leftButtonIsPressed = false;

function keyReleased() {
    if (keyCode === 69) {
        eIsPressed = true
        setTimeout(() => {
            if (!canInteract) {
                eIsPressed = false;
            }
        }, 50);
    }
    if (keyCode === 27) {
        escapeIsPressed = true;
        setTimeout(() => {
            escapeIsPressed = false;
        }, 50);
    }
    if (keyCode === 32) {
        spaceIsPressed = true;
        setTimeout(() => {
            spaceIsPressed = false;
        }, 50);
    }
}

function mouseReleased(event) {
    if (event.button === 0) {
        leftButtonIsPressed = true;
        setTimeout(() => {
            leftButtonIsPressed = false;
        }, 50);
    }
}

let actualQuestName = "seedsBagQuest"
let startingIsDialogsFinish = false;
let canShowArrows = false;
let alphaArrows = 0;

let canChangeObjectInventory = false;
let canShowObjectInAnimation = true;
let newObjectToAdd = undefined;
let canShowInventoryAnimation = false;
let objectAsBeenAdToInventoryWithAnimation = false;
let animationActeTwoStart = false;

let actualChestStatusForWrench = undefined;
let canOpenChest = false;

let canShowClickImage = true;

let newObjectSize = 128;
let newObjectOldX = 0;
let newObjectOldY = 0;
let canUpObjectSize = true;

//+ This set screen settings
let screenWidth = 1632;
let screenHeight = 918;
let frameRateNumber = 60;

//+ Set engines names to variables
const ENGINE_ONE = "engine_one";
const ENGINE_TWO = "engine_two";
const MENU = "menu";
let newEngineSelected = ENGINE_TWO;

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
let inventorySquareSize = 96;
let inventoryHeigthStart = 8;
let inventoryTab = [];
let inventoryTabNumber = 0;
let actualInventoryChoose = 1;
inventoryTab.length = 3;
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
let canDrawMenus = true;

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
                    playerPosY = screenHeight - spritePlayerSize - 61;
                    break;
                case "botanicMap":
                    spritePlayerSize = screenHeight / 2.58;

                    playerPosX = screenWidth / 3 - spritePlayerSize / 2;
                    playerPosY = screenHeight - spritePlayerSize - 61;
                    break;
                case "commandMap":
                    spritePlayerSize = screenHeight / 2.58;

                    playerPosX = screenWidth / 1.5 - spritePlayerSize / 2;
                    playerPosY = screenHeight - spritePlayerSize - 61;
                    break;
                case "capsuleMap":
                    spritePlayerSize = screenHeight / 2.58;

                    playerPosX = screenWidth / 1.3 - spritePlayerSize / 2;
                    playerPosY = screenHeight - spritePlayerSize - 61;
                    break;
                case "dormsMap":
                    spritePlayerSize = screenHeight / 2.58;

                    playerPosX = screenWidth / 1.5 - spritePlayerSize / 2;
                    playerPosY = screenHeight - spritePlayerSize - 47;
                    break;
            }
        }
        tempCurrentEngine = currentEngine;
    }
}
let textEnter = false;

//^ This function is used to show the text of dialogue feature
function writeText(actualDialog) {
    if (canInteract) {
        if (keyIsDown(69)) {
            image(skipButton.get(41, 0, 41, 15), (screenWidth - 890) / 2, (screenHeight / 1.5) + 25, 205, 75);
        } else {
            image(skipButton.get(0, 0, 41, 15), (screenWidth - 890) / 2, (screenHeight / 1.5) + 25, 205, 75);
        }
        textLeading(30);
        image(dialogsBackground, (screenWidth - 900) / 2, screenHeight - 200, 896, 176)
        noFill();
        if (bool) {
            if (i === actualDialog[index].length && !textEnter) {
                key = true
                canMovePlayer = false;
                canInteract = true;
                speak = true
                textEnter = true;
            }
            if (eIsPressed && !textEnter && !key) {
                eIsPressed = false;
                tempText = actualDialog[index]
                textEnter = true;
                setTimeout(() => {
                    key = true
                    canMovePlayer = false;
                    canInteract = true;
                    speak = true
                }, 500);
            }
            if (speak) {
                if (key && eIsPressed) {
                    if (index < actualDialog.length - 1) {
                        eIsPressed = false;
                        canMovePlayer = false;
                        i = 0;
                        tempText = "";
                        textEnter = false;
                        index += 1;
                        key = false;
                    } else if (!canMovePlayer) {
                        if (!quests.lastQuest.canDrawEve) {
                            eIsPressed = false;
                            textEnter = false;
                            clearInterval(idInterval);
                            i = 0;
                            tempText = "";
                            speak = false;
                            bool = false;
                            key = false;
                            index = 0;
                            canInteract = false;
                            startingIsDialogsFinish = true;
                            canMoveAllNPC = true;
                            canOpenChest = false;
                            actualHead = [-1];
                            if (quests.fight.haveShotTwoAmmo && !quests.fight.fightIsFinished) {
                                alienStatus = "move";
                                alienCanMove = true;
                                indexAlienSprite = 0;
                                canShoot = true;
                            }
                            if (quests.fight.animationFightCanStart && quests.fight.haveFinishAnimationFirstPart) {
                                quests.fight.animationFightCanStart = false;
                                quests.fight.dialogsFightIsOver = true;
                                quests.fight.canStartFigth = false;
                                fightIsReset = false;
                                console.log('%c<----Dialog Have End With Success---->', 'color:rgb(0, 0, 255)')
                                console.log('%c<----Fight Dialog Have End With Success---->', 'color:rgb(255, 0, 0)')
                            }
                            if (!quests.fight.dialogsFitghtIsStart && !quests.fight.haveShotTwoAmmo) {
                                if (!gameIsStarting && !quests.seedsBagQuest.canAddToInventorySeedBag && !quests.repareCapsulesMap.canAddWrenchToInventory && !animationActeTwoStart) {
                                    canDrawMenus = true;
                                    setTimeout(() => {
                                        canMovePlayer = true;
                                        console.log('%c<----Dialog Have End With Success---->', 'color:rgb(0, 0, 255)')
                                    }, 200);
                                }
                                if (quests.seedsBagQuest.canAddToInventorySeedBag) {
                                    canDrawMenus = true;
                                    canShowInventoryAnimation = true;
                                    newObjectToAdd = "seedsBagBotanicMap";
                                    setTimeout(() => {
                                        canMovePlayer = true;
                                        quests.seedsBagQuest.canAddToInventorySeedBag = false;
                                        console.log('%c<----Dialog Have End With Success---->', 'color:rgb(0, 0, 255)')
                                    }, 3500);
                                    setTimeout(() => {
                                        objectAsBeenAdToInventoryWithAnimation = false;
                                    }, 20000);
                                }
                                if (quests.repareCapsulesMap.canAddWrenchToInventory) {
                                    canDrawMenus = true;
                                    canShowInventoryAnimation = true;
                                    newObjectToAdd = "wrenchCapsulesMap";
                                    setTimeout(() => {
                                        canMovePlayer = true;
                                        quests.repareCapsulesMap.canAddWrenchToInventory = false;
                                        quests.repareCapsulesMap.canTakeWrench = false;
                                        console.log('%c<----Dialog Have End With Success---->', 'color:rgb(0, 0, 255)')
                                    }, 3500);
                                    setTimeout(() => {
                                        objectAsBeenAdToInventoryWithAnimation = false;
                                        console.log('%c<----Object Have Been Add To Inventory With Success---->', 'color:rgb(0, 140, 255)')
                                    }, 20000);
                                }
                                if (quests.repareCapsulesMap.hadTalkToFinn) {
                                    quests.repareCapsulesMap.canRepareWall = true;
                                }
                                if (quests.goToCloneMapAfterSleep.canShowMoreInformationAboutAlert) {
                                    quests.goToCloneMapAfterSleep.canShowMoreInformationAboutAlert = false;
                                    quests.goToCloneMapAfterSleep.haveShowMoreInformationAboutAlert = true;
                                }
                                if (quests.goToCloneMapAfterSleep.canShowDialogsAfterWeakingUp) {
                                    quests.goToCloneMapAfterSleep.canShowDialogsAfterWeakingUp = false;
                                    quests.goToCloneMapAfterSleep.canShowMoreInformationAboutAlert = true;
                                    quests.goToCloneMapAfterSleephaveShowAfterWeakingUp = true;
                                }
                                if (animationActeTwoStart) {
                                    canInteract = false;
                                    actualQuestName = "goToCloneMapAfterSleep"
                                    quests.goToCloneMapAfterSleep.goToCloneMapAfterSleepIsStarted = true;
                                    leftDoorsAreClosed = true;
                                    rigthDoorsAreClosed = true;
                                    animationActeTwoStart = false;
                                    console.log('%c<----Dialog Have End With Success---->', 'color:rgb(0, 0, 255)')
                                    console.log('%c<----Act Two Introduction Have End With Success---->', 'color:rgb(0, 140, 255)')
                                    console.log('%c<----Act Two Successfully Started---->', 'color:rgb(255, 0, 0)')
                                }
                                if (!animationActeTwoStart) {
                                    setTimeout(() => {
                                        canTalkGlobalNPC = true;
                                        canActiveDoorBool = false;
                                    }, 1000);
                                }
                                if (gameIsStarting) {
                                    setTimeout(() => {
                                        gameIsStarting = false;
                                        canMovePlayer = true;
                                        canShowArrows = true;
                                        canDrawMenus = true;
                                        console.log('%c<----Dialog Have End With Success---->', 'color:rgb(0, 0, 255)')
                                        console.log('%c<----Introduction Have End With Success---->', 'color:rgb(0, 140, 255)')
                                    }, 8000);
                                }
                            }
                        } else {
                            quests.lastQuest.canShowEnd = true;
                            canDoTransition = true;
                            newEngineSelected = MENU;
                        }
                    }
                }
            } else {
                speak = true
                idInterval = setInterval(() => {
                    if (i < actualDialog[index].length && !textEnter) {
                        tempText = tempText + actualDialog[index][i];
                        actualHead = actualPlayersOrder[index]
                        i++;
                    }
                }, 30);
            }
        } else {
            bool = true
        }
        if (!canMovePlayer) {
            noStroke();
            textSize(35);
            fill("rgb(255,255,255)");
            text(tempText, (screenWidth - 855) / 2, screenHeight - 150, 595, 120);
            noFill();
            image(
                dialogsHeads.get(16 * actualHead, 0, 16, 16),
                (screenWidth) / 2 + 100, screenHeight - 344, 384, 384
            );
        }
    }
}
