//& This file manage more interaction for the second Engine

function moreInteractionEnineTwo() {
    switch (actualMapEngineTwo) {
        case "cloneMap":
            if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 4 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 5 && canMovePlayer && !canTalkingToNPC) {
                textSize(20);
                fill("rgb(255,255,255)");
                noStroke();
                text("Press E to interact", playerPosX - 40, playerPosY - 20);
                setTimeout(() => {
                    if (keyIsDown(69)) {
                        canInteract = true;
                        canMovePlayer = false;
                        canDrawnInventory = false;
                        canTalkGlobalNPC = false;
                        canMoveAllNPC = false;
                        actualDialog = moreInteractionJSON.moreInteractions[3];
                    }
                }, 500);
            }
            if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 12 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 13 && canMovePlayer && !canTalkingToNPC) {
                textSize(20);
                fill("rgb(255,255,255)");
                noStroke();
                text("Press E to interact", playerPosX - 40, playerPosY - 20);
                setTimeout(() => {
                    if (keyIsDown(69)) {
                        canInteract = true;
                        canMovePlayer = false;
                        canDrawnInventory = false;
                        canTalkGlobalNPC = false;
                        canMoveAllNPC = false;
                        actualDialog = moreInteractionJSON.moreInteractions[4];
                    }
                }, 500);
            }
            break;
        case "botanicMap":
            if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 6 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 9 && canMovePlayer && !canTalkingToNPC) {
                textSize(20);
                fill("rgb(255,255,255)");
                noStroke();
                text("Press E to interact", playerPosX - 40, playerPosY - 20);
                setTimeout(() => {
                    if (keyIsDown(69)) {
                        canInteract = true;
                        canMovePlayer = false;
                        canDrawnInventory = false;
                        canTalkGlobalNPC = false;
                        canMoveAllNPC = false;
                        actualDialog = moreInteractionJSON.moreInteractions[1];
                    }
                }, 500);
            }
            if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 18 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 19 && canMovePlayer && !canTalkingToNPC) {
                textSize(20);
                fill("rgb(255,255,255)");
                noStroke();
                text("Press E to interact", playerPosX - 40, playerPosY - 20);
                setTimeout(() => {
                    if (keyIsDown(69)) {
                        canInteract = true;
                        canMovePlayer = false;
                        canDrawnInventory = false;
                        canTalkGlobalNPC = false;
                        canMoveAllNPC = false;
                        actualDialog = moreInteractionJSON.moreInteractions[2];
                    }
                }, 500);
            }
            break;
        case "commandMap":
            if (EngineTwoMapX - playerPosX < engineTwoDividePartW * 9.5 && EngineTwoMapX - playerPosX > engineTwoDividePartW * 13 && canMovePlayer && !canTalkingToNPC) {
                textSize(20);
                fill("rgb(255,255,255)");
                noStroke();
                text("Press E to interact", playerPosX - 40, playerPosY - 20);
                setTimeout(() => {
                    if (keyIsDown(69)) {
                        canInteract = true;
                        canMovePlayer = false;
                        canDrawnInventory = false;
                        canTalkGlobalNPC = false;
                        canMoveAllNPC = false;
                        actualDialog = moreInteractionJSON.moreInteractions[0];
                    }
                }, 500);
            }
            break;
    }
}