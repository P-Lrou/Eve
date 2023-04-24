
let fade = 0;
let fadeSpeed = 5;
let canDoTransition = false;
let transitionStatus = 'Enter';

function transitionEnter() {
    if (fightIsReset) {
        if (fade < 255) {
            fade = fade + fadeSpeed;
        } else {
            transitionStatus = 'Out'
            resetFight();
        }
    } else {
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
                canShowClickImage = false;
            }
        }
    }

}

function transitionOut() {
    if (fightIsReset) {
        if (fade > 0) {
            fade = fade - fadeSpeed;
        } else {
            fade = 0
            transitionStatus = 'Enter'
            canDoTransition = false;
        }
    } else {
        if (fade > 0) {
            fade = fade - fadeSpeed;
            if (quests.goToCloneMapAfterSleep.goToCloneMapAfterSleepIsStarted && !quests.goToCloneMapAfterSleephaveShowAfterWeakingUp) {
                quests.goToCloneMapAfterSleep.canShowDialogsAfterWeakingUp = true
            }
        } else {
            fade = 0
            transitionStatus = 'Enter'
            canDoTransition = false;
            canMovePlayer = true;
            cursor('default');
            console.log(`%c<----${newEngineSelected} Successfully Loaded---->`, 'color:rgb(0, 255, 0)')
        }
    }
}