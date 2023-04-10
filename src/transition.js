
let fade = 0;
let fadeSpeed = 5;
let canDoTransition = false;
let transitionStatus = 'Enter';


function transitionEnter() {
    if (fade < 255) {
        fade = fade + fadeSpeed;
    } else {
        transitionStatus = 'Out'
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
    }
}