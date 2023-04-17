
let fade = 0;
let fadeSpeed = 5;
let canDoTransition = false;
let transitionStatus = 'Enter';

function transitionEnter() {
    if (animationActeTwoStart) {
        if (fade < 255) {
            setTimeout(() => {
                fade = fade + fadeSpeed;
            }, 500);
        } else {
            transitionStatus = 'Out'
            setTimeout(() => {
                actualDialog = moreInteractionJSON.transitionDialogs[0];
                actualPlayersOrder = moreInteractionJSON.transitionDialogs[1];
                canInteract = true;
            }, 2000);
        }
    } else if (!animationActeTwoStart) {
        if (fade < 255) {
            fade = fade + fadeSpeed;
        } else {
            transitionStatus = 'Out'
            if (!canShowClickImage) {
                if (canShowSettingsMenu === true) {
                    canShowSettingsMenu = false;
                    return;
                }
                if (canShowSettingsMenu === false) {
                    canShowSettingsMenu = true;
                    return;
                }
            }
            canShowClickImage = false;
        }
    }
}

function transitionOut() {
    if (fade > 0) {
        fade = fade - fadeSpeed;
    } else {
        fade = 0
        transitionStatus = 'Enter'
        canDoTransition = false;
        canMovePlayer = true;
        cursor('default');
        if (quests.goToCloneMapAfterSleep.goToCloneMapAfterSleepIsStarted && !quests.goToCloneMapAfterSleephaveShowAfterWeakingUp) {
            quests.goToCloneMapAfterSleep.canShowDialogsAfterWeakingUp = true
        }
    }

}