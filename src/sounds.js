function playMainMenuMusic() {
    canStartMainMenuSong = false;
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
        }, 700);
        setTimeout(() => {
            mainMenuBackgroundSound.volume(0.10);
        }, 1400);
        setTimeout(() => {
            mainMenuBackgroundSound.volume(0.08);
        }, 1900);
        setTimeout(() => {
            mainMenuBackgroundSound.volume(0.06);
        }, 2600);
        setTimeout(() => {
            mainMenuBackgroundSound.volume(0.04);
        }, 3300);
        setTimeout(() => {
            mainMenuBackgroundSound.volume(0.02);
        }, 4000);
        setTimeout(() => {
            mainMenuBackgroundSound.volume(0);
            mainMenuBackgroundSound.stop()
        }, 4700);
    }
}