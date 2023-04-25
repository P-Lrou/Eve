function menuStart() {
    if (!quests.lastQuest.canShowEnd) {
        if (canShowClickImage) {
            image(clickImage, 0, 0, screenWidth, screenHeight);
            cursor('pointer');
            if (leftButtonIsPressed) {
                leftButtonIsPressed = false;
                canDoTransition = true;
                newEngineSelected = MENU;
                mainMenuBackgroundSoundIsActivated = true;
                playMainMenuBackgroundSound()
            }
        } else if (canShowSettingsMenu) {
            cursor('default');
            image(menuBackground, 0, 0, screenWidth, screenHeight)
            image(resume, 147, 394, 399, 92)
            if (songIsOn) {
                image(soundOn, 147, 527, 277, 93)
            } else {
                image(soundOff, 147, 527, 320, 93)
            }
            if (lastPostionAfterMenu !== "startMenu") {
                image(restart, 147, 661, 521, 92)
            }
            if (pointIsInRect([mouseX, mouseY], [147, 394, 399, 92])) {
                image(resumeHover, 147, 394, 399, 92)
                cursor('pointer')
            }
            if (pointIsInRect([mouseX, mouseY], [147, 527, 277, 93]) && songIsOn) {
                image(soundOnHover, 147, 527, 277, 93)
                cursor('pointer')
            }
            if (pointIsInRect([mouseX, mouseY], [147, 527, 277, 93]) && !songIsOn) {
                image(soundOffHover, 147, 527, 320, 93)
                cursor('pointer')
            }
            if (pointIsInRect([mouseX, mouseY], [147, 661, 299, 92]) && lastPostionAfterMenu !== "startMenu") {
                image(restartHover, 147, 661, 521, 92)
                cursor('pointer')
            }
            if (pointIsInRect([mouseX, mouseY], [147, 394, 399, 92])) {
                if (leftButtonIsPressed) {
                    leftButtonIsPressed = false;
                    if (lastPostionAfterMenu === "startMenu") {
                        canShowSettingsMenu = false;
                    }
                    if (lastPostionAfterMenu === "engineOne") {
                        canShowSettingsMenu = false;
                        currentEngine = ENGINE_ONE;
                    }
                    if (lastPostionAfterMenu === "engineTwo") {
                        canShowSettingsMenu = false;
                        canMovePlayer = true;
                        currentEngine = ENGINE_TWO;
                    }
                }
            }
            if (pointIsInRect([mouseX, mouseY], [147, 527, 277, 93]) && songIsOn) {
                if (leftButtonIsPressed) {
                    leftButtonIsPressed = false;
                    songIsOn = false;
                    mainMenuBackgroundSoundIsActivated = false;
                    playMainMenuBackgroundSound()
                    botanicMapBackgroundSoundIsActivated = false;
                    playBotanicMapBackgroundSound();
                    capsuleMapBackgroundSoundIsActivated = false;
                    playCapsuleMapBackgroundSound();
                    cloneMapBackgroundSoundIsActivated = false;
                    playCloneMapBackgroundSound();
                    dormsMapBackgroundSoundIsActivated = false;
                    playDormsMapBackgroundSound();
                    commmandMapBackgroundSoundIsActivated = false;
                    playCommmandMapBackgroundSound();
                    topDownMapBackgroundSoundIsActivated = false;
                    playTopDownMapBackgroundSound();
                }
            }
            if (pointIsInRect([mouseX, mouseY], [147, 527, 277, 93]) && !songIsOn) {
                if (leftButtonIsPressed) {
                    leftButtonIsPressed = false;
                    songIsOn = true;
                    if (lastPostionAfterMenu === "engineOne") {
                        topDownMapBackgroundSoundIsActivated = true;
                        playTopDownMapBackgroundSound();
                    } else if (lastPostionAfterMenu === "engineTwo") {
                        if (actualMapEngineTwo === "commandMap") {
                            commmandMapBackgroundSoundIsActivated = true;
                            playCommmandMapBackgroundSound();
                        }
                        if (actualMapEngineTwo === "cloneMap") {
                            cloneMapBackgroundSoundIsActivated = true;
                            playCloneMapBackgroundSound();
                        }
                        if (actualMapEngineTwo === "botanicMap") {
                            botanicMapBackgroundSoundIsActivated = true;
                            playBotanicMapBackgroundSound();
                        }
                        if (actualMapEngineTwo === "capsuleMap") {
                            capsuleMapBackgroundSoundIsActivated = true;
                            playCapsuleMapBackgroundSound();
                        }
                        if (actualMapEngineTwo === "dormsMap") {
                            dormsMapBackgroundSoundIsActivated = true;
                            playDormsMapBackgroundSound();
                        }
                    }
                }
            }
            if (pointIsInRect([mouseX, mouseY], [147, 661, 521, 92])) {
                if (leftButtonIsPressed) {
                    leftButtonIsPressed = false;
                    location.reload()
                }
            }
        } else if (!canShowSettingsMenu && !canShowClickImage && !canPlayIntroduction) {
            cursor('default');
            imageMode(CORNER);
            image(homePageBackgroundImage, 0, 0, screenWidth, screenHeight);
            image(settingsImage, screenWidth - 116, 20, 96, 96)
            image(homePagePlayButton, screenWidth / 2 - 350 / 2 - 20, screenHeight / 1.2 - 125 / 2.5, 350, 125);
            if (pointIsInRect([mouseX, mouseY], [screenWidth / 2 - 350 / 2 - 20, screenHeight / 1.2 - 125 / 2.5, 350, 125])) {
                cursor('pointer');
                image(homePagePlayButtonHover, screenWidth / 2 - 350 / 2 - 20, screenHeight / 1.2 - 125 / 2.5, 350, 125);
                if (leftButtonIsPressed) {
                    canPlayIntroduction = true;
                    leftButtonIsPressed = false
                }
            } else if (pointIsInRect([mouseX, mouseY], [screenWidth - 116, 20, 96, 96])) {
                cursor('pointer');
                if (leftButtonIsPressed) {
                    leftButtonIsPressed = false;
                    lastPostionAfterMenu = 'startMenu'
                    canShowSettingsMenu = true;
                }
            } else {
                cursor('default');
            }
        } else if (canPlayIntroduction) {
            image(introductionIllustration, 0, 0, screenWidth, screenHeight);
            introductionIllustration.play();
            setTimeout(() => {
                startGameAfterIntroduction();
            }, 8500);
        }
    } else {
        image(endIllustration, 0, 0, screenWidth, screenHeight);
        endIllustration.loop();
    }
}

function startGameAfterIntroduction() {
    if (!haveStartGameAfterAnimation) {
        haveStartTheGame = true;
        canDoTransition = true;
        newEngineSelected = ENGINE_TWO;
        mainMenuBackgroundSoundIsActivated = false;
        playMainMenuBackgroundSound()
        commmandMapBackgroundSoundIsActivated = true;
        playCommmandMapBackgroundSound();
        haveStartGameAfterAnimation = true;
    }
}