
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
            actualDialog = moreInteractionJSON.transitionDialogs[0];
            actualPlayersOrder = moreInteractionJSON.transitionDialogs[1];
            canInteract = true;
        }
    } else {
        if (fade < 255) {
            fade = fade + fadeSpeed;
        } else {
            transitionStatus = 'Out'
        }
    }
}

function transitionOut() {
    if (animationActeTwoStart) {
        if (fade > 0) {
            setTimeout(() => {
                fade = fade - fadeSpeed;
            }, 500);
        } else {
            fade = 0
            transitionStatus = 'Enter'
            canDoTransition = false;
            canMovePlayer = true;
            animationActeTwoStart = false;
            cursor('default');
        }
    } else {
        if (fade > 0) {
            fade = fade - fadeSpeed;
        } else {
            fade = 0
            transitionStatus = 'Enter'
            canDoTransition = false;
            canMovePlayer = true;
            cursor('default');
        }
    }

}