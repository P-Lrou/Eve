
let mainMenuBackgroundSoundIsActivated = true;
let botanicMapBackgroundSoundIsActivated = false;
let capsuleMapBackgroundSoundIsActivated = false;
let cloneMapBackgroundSoundIsActivated = false;
let dormsMapBackgroundSoundIsActivated = false;
let commmandMapBackgroundSoundIsActivated = false;

let topDownMapBackgroundSoundIsActivated = false;

function playMainMenuBackgroundSound() {
    if (mainMenuBackgroundSoundIsActivated) {
        mainMenuBackgroundSound.volume(0.15);
        mainMenuBackgroundSound.loop()
    }
    if (!mainMenuBackgroundSoundIsActivated) {
        mainMenuBackgroundSound.volume(0);
        mainMenuBackgroundSound.stop();

    }
}

function playBotanicMapBackgroundSound() {
    if (botanicMapBackgroundSoundIsActivated) {
        botanicMapBackgroundSound.volume(0.15);
        botanicMapBackgroundSound.loop()
    }
    if (!botanicMapBackgroundSoundIsActivated) {
        botanicMapBackgroundSound.volume(0);
        botanicMapBackgroundSound.stop()
    }
}

function playCapsuleMapBackgroundSound() {
    if (capsuleMapBackgroundSoundIsActivated) {
        capsuleMapBackgroundSound.volume(0.15);
        capsuleMapBackgroundSound.loop()
    }
    if (!capsuleMapBackgroundSoundIsActivated) {
        capsuleMapBackgroundSound.volume(0);
        capsuleMapBackgroundSound.stop()
    }
}

function playCloneMapBackgroundSound() {
    if (cloneMapBackgroundSoundIsActivated) {
        cloneMapBackgroundSound.volume(0.15);
        cloneMapBackgroundSound.loop()
    }
    if (!cloneMapBackgroundSoundIsActivated) {
        cloneMapBackgroundSound.volume(0);
        cloneMapBackgroundSound.stop()
    }
}

function playDormsMapBackgroundSound() {
    if (dormsMapBackgroundSoundIsActivated) {
        dormsMapBackgroundSound.volume(0.15);
        dormsMapBackgroundSound.loop()
    }
    if (!dormsMapBackgroundSoundIsActivated) {
        dormsMapBackgroundSound.volume(0);
        dormsMapBackgroundSound.stop()
    }
}

function playCommmandMapBackgroundSound() {
    if (commmandMapBackgroundSoundIsActivated) {
        commmandMapBackgroundSound.volume(0.15);
        commmandMapBackgroundSound.loop()
    }
    if (!commmandMapBackgroundSoundIsActivated) {
        commmandMapBackgroundSound.volume(0);
        commmandMapBackgroundSound.stop()
    }
}

function playTopDownMapBackgroundSound() {
    if (topDownMapBackgroundSoundIsActivated) {
        topDownMapBackgroundSound.volume(0.15);
        topDownMapBackgroundSound.loop()
    }
    if (!topDownMapBackgroundSoundIsActivated) {
        topDownMapBackgroundSound.volume(0);
        topDownMapBackgroundSound.stop()
    }
}