//& This file manage more interaction for the second Engine

//^ This function is used to detect and show more interaction for the Engine Two
function moreInteractionEnineTwo() {
    if (!acteTwoIsStarting) {

        //- This switch show interaction using the actual map
        switch (actualMapEngineTwo) {
            case "cloneMap":
                if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 4 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 5 && canMovePlayer && !canTalkingToNPC && !gameIsStarting) {
                    if (keyIsDown(69)) {
                        image(interactionButton.get(14, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
                    } else {
                        image(interactionButton.get(0, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
                    }
                    if (eIsPressed && canMovePlayer) {
                        eIsPressed = false;
                        actualPlayersOrder = moreInteractionJSON.moreInteractions[6]
                        canMovePlayer = false;
                        canTalkGlobalNPC = false;
                        canMoveAllNPC = false;
                        canDrawMenus = false;
                        actualDialog = moreInteractionJSON.moreInteractions[3];
                        canInteract = true;
                    }
                }
                if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 12 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 13 && canMovePlayer && !canTalkingToNPC && !gameIsStarting) {
                    if (keyIsDown(69)) {
                        image(interactionButton.get(14, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
                    } else {
                        image(interactionButton.get(0, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
                    }
                    if (eIsPressed && canMovePlayer) {
                        eIsPressed = false;
                        actualPlayersOrder = moreInteractionJSON.moreInteractions[6]
                        canMovePlayer = false;
                        canTalkGlobalNPC = false;
                        canMoveAllNPC = false;
                        canDrawMenus = false;
                        actualDialog = moreInteractionJSON.moreInteractions[4];
                        canInteract = true;
                    }
                }
                break;
            case "botanicMap":
                if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 6 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 9 && canMovePlayer && !canTalkingToNPC && !gameIsStarting) {
                    if (keyIsDown(69)) {
                        image(interactionButton.get(14, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
                    } else {
                        image(interactionButton.get(0, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
                    }
                    if (eIsPressed && canMovePlayer) {
                        eIsPressed = false;
                        actualPlayersOrder = moreInteractionJSON.moreInteractions[6]
                        canMovePlayer = false;
                        canTalkGlobalNPC = false;
                        canMoveAllNPC = false;
                        canDrawMenus = false;
                        actualDialog = moreInteractionJSON.moreInteractions[1];
                        canInteract = true;
                    }
                }
                if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 18 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 19 && canMovePlayer && !canTalkingToNPC && !gameIsStarting) {
                    if (keyIsDown(69)) {
                        image(interactionButton.get(14, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
                    } else {
                        image(interactionButton.get(0, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
                    }
                    if (eIsPressed && canMovePlayer) {
                        eIsPressed = false;
                        actualPlayersOrder = moreInteractionJSON.moreInteractions[6]
                        canMovePlayer = false;
                        canTalkGlobalNPC = false;
                        canMoveAllNPC = false;
                        canDrawMenus = false;
                        actualDialog = moreInteractionJSON.moreInteractions[2];
                        canInteract = true;
                    }
                }
                break;
            case "commandMap":
                if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 9.5 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 13 && canMovePlayer && !canTalkingToNPC && !gameIsStarting) {
                    if (keyIsDown(69)) {
                        image(interactionButton.get(14, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
                    } else {
                        image(interactionButton.get(0, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
                    }
                    if (eIsPressed && canMovePlayer) {
                        eIsPressed = false;
                        actualPlayersOrder = moreInteractionJSON.moreInteractions[6]
                        canMovePlayer = false;
                        canTalkGlobalNPC = false;
                        canMoveAllNPC = false;
                        canDrawMenus = false;
                        actualDialog = moreInteractionJSON.moreInteractions[0];
                        canInteract = true;
                    }
                }
                break;
            case "dormsMap":
                if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 12 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 14 && canMovePlayer && !canTalkingToNPC && !gameIsStarting && actualQuestName === "sleepQuest") {
                    if (keyIsDown(69)) {
                        image(interactionButton.get(14, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
                    } else {
                        image(interactionButton.get(0, 0, 14, 15), playerPosX + 160, playerPosY - 90, 64, 68);
                    }
                    if (eIsPressed && canMovePlayer) {
                        eIsPressed = false;
                        actualPlayersOrder = moreInteractionJSON.moreInteractions[6]
                        canMovePlayer = false;
                        canTalkGlobalNPC = false;
                        canMoveAllNPC = false;
                        canDrawMenus = false;
                        actualDialog = moreInteractionJSON.moreInteractions[5];
                        canInteract = true;
                    }
                }
                break;
        }
    }
}