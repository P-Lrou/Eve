
let mainMenuBackgroundSoundIsActivated = true;
let botanicMapBackgroundSoundIsActivated = false;
let capsuleMapBackgroundSoundIsActivated = false;
let cloneMapBackgroundSoundIsActivated = false;

function playMainMenuBackgroundSound() {
    if (mainMenuBackgroundSoundIsActivated) {
        mainMenuBackgroundSound.volume(0);
        mainMenuBackgroundSound.loop()
        setTimeout(() => {
            mainMenuBackgroundSound.volume(0.02);
        }, 500);
        setTimeout(() => {
            mainMenuBackgroundSound.volume(0.04);
        }, 1000);
        setTimeout(() => {
            mainMenuBackgroundSound.volume(0.06);
        }, 1500);
        setTimeout(() => {
            mainMenuBackgroundSound.volume(0.08);
        }, 2000);
        setTimeout(() => {
            mainMenuBackgroundSound.volume(0.10);
        }, 2500);
        setTimeout(() => {
            mainMenuBackgroundSound.volume(0.13);
        }, 3000);
        setTimeout(() => {
            mainMenuBackgroundSound.volume(0.15);
        }, 3500);
    }
    if (!mainMenuBackgroundSoundIsActivated) {
        setTimeout(() => {
            mainMenuBackgroundSound.volume(0.13);
        }, 500);
        setTimeout(() => {
            mainMenuBackgroundSound.volume(0.10);
        }, 1000);
        setTimeout(() => {
            mainMenuBackgroundSound.volume(0.08);
        }, 1500);
        setTimeout(() => {
            mainMenuBackgroundSound.volume(0.06);
        }, 2000);
        setTimeout(() => {
            mainMenuBackgroundSound.volume(0.04);
        }, 2500);
        setTimeout(() => {
            mainMenuBackgroundSound.volume(0.02);
        }, 3000);
        setTimeout(() => {
            mainMenuBackgroundSound.volume(0);
            mainMenuBackgroundSound.stop()
        }, 3500);
    }
}

function playBotanicMapBackgroundSound() {
    if (botanicMapBackgroundSoundIsActivated) {
        botanicMapBackgroundSound.volume(0);
        botanicMapBackgroundSound.loop()
        setTimeout(() => {
            botanicMapBackgroundSound.volume(0.02);
        }, 500);
        setTimeout(() => {
            botanicMapBackgroundSound.volume(0.04);
        }, 1000);
        setTimeout(() => {
            botanicMapBackgroundSound.volume(0.06);
        }, 1500);
        setTimeout(() => {
            botanicMapBackgroundSound.volume(0.08);
        }, 2000);
        setTimeout(() => {
            botanicMapBackgroundSound.volume(0.10);
        }, 2500);
        setTimeout(() => {
            botanicMapBackgroundSound.volume(0.13);
        }, 3000);
        setTimeout(() => {
            botanicMapBackgroundSound.volume(0.15);
        }, 3500);
    }
    if (!botanicMapBackgroundSoundIsActivated) {
        setTimeout(() => {
            botanicMapBackgroundSound.volume(0.13);
        }, 500);
        setTimeout(() => {
            botanicMapBackgroundSound.volume(0.10);
        }, 1000);
        setTimeout(() => {
            botanicMapBackgroundSound.volume(0.08);
        }, 1500);
        setTimeout(() => {
            botanicMapBackgroundSound.volume(0.06);
        }, 2000);
        setTimeout(() => {
            botanicMapBackgroundSound.volume(0.04);
        }, 2500);
        setTimeout(() => {
            botanicMapBackgroundSound.volume(0.02);
        }, 3000);
        setTimeout(() => {
            botanicMapBackgroundSound.volume(0);
            botanicMapBackgroundSound.stop()
        }, 3500);
    }
}

function playCapsuleMapBackgroundSound() {
    if (capsuleMapBackgroundSoundIsActivated) {
        capsuleMapBackgroundSound.volume(0);
        capsuleMapBackgroundSound.loop()
        setTimeout(() => {
            capsuleMapBackgroundSound.volume(0.02);
        }, 500);
        setTimeout(() => {
            capsuleMapBackgroundSound.volume(0.04);
        }, 1000);
        setTimeout(() => {
            capsuleMapBackgroundSound.volume(0.06);
        }, 1500);
        setTimeout(() => {
            capsuleMapBackgroundSound.volume(0.08);
        }, 2000);
        setTimeout(() => {
            capsuleMapBackgroundSound.volume(0.10);
        }, 2500);
        setTimeout(() => {
            capsuleMapBackgroundSound.volume(0.13);
        }, 3000);
        setTimeout(() => {
            capsuleMapBackgroundSound.volume(0.15);
        }, 3500);
    }
    if (!capsuleMapBackgroundSoundIsActivated) {
        setTimeout(() => {
            capsuleMapBackgroundSound.volume(0.13);
        }, 500);
        setTimeout(() => {
            capsuleMapBackgroundSound.volume(0.10);
        }, 1000);
        setTimeout(() => {
            capsuleMapBackgroundSound.volume(0.08);
        }, 1500);
        setTimeout(() => {
            capsuleMapBackgroundSound.volume(0.06);
        }, 2000);
        setTimeout(() => {
            capsuleMapBackgroundSound.volume(0.04);
        }, 2500);
        setTimeout(() => {
            capsuleMapBackgroundSound.volume(0.02);
        }, 3000);
        setTimeout(() => {
            capsuleMapBackgroundSound.volume(0);
            capsuleMapBackgroundSound.stop()
        }, 3500);
    }
}

function playCloneMapBackgroundSound() {
    if (cloneMapBackgroundSoundIsActivated) {
        cloneMapBackgroundSound.volume(0);
        cloneMapBackgroundSound.loop()
        setTimeout(() => {
            cloneMapBackgroundSound.volume(0.02);
        }, 500);
        setTimeout(() => {
            cloneMapBackgroundSound.volume(0.04);
        }, 1000);
        setTimeout(() => {
            cloneMapBackgroundSound.volume(0.06);
        }, 1500);
        setTimeout(() => {
            cloneMapBackgroundSound.volume(0.08);
        }, 2000);
        setTimeout(() => {
            cloneMapBackgroundSound.volume(0.10);
        }, 2500);
        setTimeout(() => {
            cloneMapBackgroundSound.volume(0.13);
        }, 3000);
        setTimeout(() => {
            cloneMapBackgroundSound.volume(0.15);
        }, 3500);
    }
    if (!cloneMapBackgroundSoundIsActivated) {
        setTimeout(() => {
            cloneMapBackgroundSound.volume(0.13);
        }, 500);
        setTimeout(() => {
            cloneMapBackgroundSound.volume(0.10);
        }, 1000);
        setTimeout(() => {
            cloneMapBackgroundSound.volume(0.08);
        }, 1500);
        setTimeout(() => {
            cloneMapBackgroundSound.volume(0.06);
        }, 2000);
        setTimeout(() => {
            cloneMapBackgroundSound.volume(0.04);
        }, 2500);
        setTimeout(() => {
            cloneMapBackgroundSound.volume(0.02);
        }, 3000);
        setTimeout(() => {
            cloneMapBackgroundSound.volume(0);
            cloneMapBackgroundSound.stop()
        }, 3500);
    }
}