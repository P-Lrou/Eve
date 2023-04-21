function menuStart() {
    if (!quests.lastQuest.canShowEnd) {
        if (canShowClickImage) {
            image(clickImage, 0, 0, screenWidth, screenHeight);
            cursor('pointer');
            if (mouseIsPressed) {
                if (mouseButton == LEFT) {
                    canDoTransition = true;
                    newEngineSelected = MENU;
                    mainMenuBackgroundSoundIsActivated = true;
                    playMainMenuBackgroundSound()
                }
            }
        } else if (canShowSettingsMenu) {
            cursor('default');
            fill('black');
            rect(0, 0, screenWidth, screenHeight);
            noFill();
            fill("white")
            textAlign(CENTER);
            textSize(50);
            text('Paramètres', screenWidth / 2, 100, 50, 200);
            noFill();
            textAlign(LEFT);
            image(homePagePlayButton, screenWidth / 2 - 350 / 2, screenHeight / 1.2 - 125 / 2.5, 350, 125);
            if (pointIsInRect([mouseX, mouseY], [screenWidth / 2 - 350 / 2, screenHeight / 1.2 - 125 / 2.5, 350, 125])) {
                cursor('pointer');
                image(homePagePlayButtonHover, screenWidth / 2 - 350 / 2 - 20, screenHeight / 1.2 - 125 / 2.5, 350, 125);
                if (mouseIsPressed) {
                    if (mouseButton == LEFT) {
                        if (haveStartTheGame) {
                            currentEngine = ENGINE_TWO;
                            canMovePlayer = true;
                            canShowSettingsMenu = false;
                        } else {
                            canDoTransition = true;
                            newEngineSelected = MENU;
                        }
                    }
                }
            }
        } else if (!canShowSettingsMenu && !canShowClickImage) {
            cursor('default');
            imageMode(CORNER);
            image(homePageBackgroundImage, 0, 0, screenWidth, screenHeight);
            // image(settingsImage, screenWidth - 116, 20, 96, 96)
            image(homePagePlayButton, screenWidth / 2 - 350 / 2 - 20, screenHeight / 1.2 - 125 / 2.5, 350, 125);
            if (pointIsInRect([mouseX, mouseY], [screenWidth / 2 - 350 / 2 - 20, screenHeight / 1.2 - 125 / 2.5, 350, 125])) {
                cursor('pointer');
                image(homePagePlayButtonHover, screenWidth / 2 - 350 / 2 - 20, screenHeight / 1.2 - 125 / 2.5, 350, 125);
                if (mouseIsPressed) {
                    if (mouseButton == LEFT) {
                        haveStartTheGame = true;
                        canDoTransition = true;
                        newEngineSelected = ENGINE_TWO;
                        mainMenuBackgroundSoundIsActivated = false;
                        playMainMenuBackgroundSound()
                        commmandMapBackgroundSoundIsActivated = true;
                        playCommmandMapBackgroundSound();
                    }
                }
                // } else if (pointIsInRect([mouseX, mouseY], [screenWidth - 116, 20, 96, 96])) {
                //     cursor('pointer');
                //     if (mouseIsPressed) {
                //         if (mouseButton == LEFT) {
                //             canDoTransition = true;
                //             newEngineSelected = MENU;
                //         }
                //     }
            } else {
                cursor('default');
            }
        }
    } else {
        fill('red');
        rect(0, 0, screenWidth, screenHeight);
        noFill();
    }
}