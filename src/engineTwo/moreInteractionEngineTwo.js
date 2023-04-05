//& This file manage more interaction for the second Engine

function moreInteractionEnineTwo() {
    switch (actualMapEngineTwo) {
        case "cloneMap":
            if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 4 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 5 && canMovePlayer && !canTalkingToNPC && !gameIsStarting) {
                image(interactionButton, playerPosX + 160, playerPosY - 90, 64, 64);
                setTimeout(() => {
                    if (keyIsDown(69)) {
                        actualPlayersOrder = moreInteractionJSON.moreInteractions[5]
                        canInteract = true;
                        canMovePlayer = false;
                        canTalkGlobalNPC = false;
                        canMoveAllNPC = false;
                        canDrawnInventory = false;
                        actualDialog = moreInteractionJSON.moreInteractions[3];
                    }
                }, 500);
            }
            if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 12 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 13 && canMovePlayer && !canTalkingToNPC && !gameIsStarting) {
                image(interactionButton, playerPosX + 160, playerPosY - 90, 64, 64);
                setTimeout(() => {
                    if (keyIsDown(69)) {
                        actualPlayersOrder = moreInteractionJSON.moreInteractions[5]
                        canInteract = true;
                        canMovePlayer = false;
                        canTalkGlobalNPC = false;
                        canMoveAllNPC = false;
                        canDrawnInventory = false;
                        actualDialog = moreInteractionJSON.moreInteractions[4];
                    }
                }, 500);
            }
            break;
        case "botanicMap":
            if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 6 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 9 && canMovePlayer && !canTalkingToNPC && !gameIsStarting) {
                image(interactionButton, playerPosX + 160, playerPosY - 90, 64, 64);
                setTimeout(() => {
                    if (keyIsDown(69)) {
                        actualPlayersOrder = moreInteractionJSON.moreInteractions[5]
                        canInteract = true;
                        canMovePlayer = false;
                        canTalkGlobalNPC = false;
                        canMoveAllNPC = false;
                        canDrawnInventory = false;
                        actualDialog = moreInteractionJSON.moreInteractions[1];
                    }
                }, 500);
            }
            if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 18 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 19 && canMovePlayer && !canTalkingToNPC && !gameIsStarting) {
                image(interactionButton, playerPosX + 160, playerPosY - 90, 64, 64);
                setTimeout(() => {
                    if (keyIsDown(69)) {
                        actualPlayersOrder = moreInteractionJSON.moreInteractions[5]
                        canInteract = true;
                        canMovePlayer = false;
                        canTalkGlobalNPC = false;
                        canMoveAllNPC = false;
                        canDrawnInventory = false;
                        actualDialog = moreInteractionJSON.moreInteractions[2];
                    }
                }, 500);
            }
            break;
        case "commandMap":
            if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 9.5 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 13 && canMovePlayer && !canTalkingToNPC && !gameIsStarting) {
                image(interactionButton, playerPosX + 160, playerPosY - 90, 64, 64);
                setTimeout(() => {
                    if (keyIsDown(69)) {
                        actualPlayersOrder = moreInteractionJSON.moreInteractions[5]
                        canInteract = true;
                        canMovePlayer = false;
                        canTalkGlobalNPC = false;
                        canMoveAllNPC = false;
                        canDrawnInventory = false;
                        actualDialog = moreInteractionJSON.moreInteractions[0];
                    }
                }, 500);
            }
            break;
    }
}