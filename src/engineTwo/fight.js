/*Sprite Alien value*/
let alienCutSizeW = 22;
let alienCutSizeH = 39;
let indexAlienSprite = 0;
//Change ratio to upscale Alien image
let alienRatio = 6;
let animationAction = 1;
let entityWidth = alienCutSizeW * alienRatio;

/*Sprite Player value*/
let playerCutSizeW = 20;
let playerCutSizeH = 20;
let indexPlayerSprite = 0;
//Change ratio to upscale Player image
let playerRatio = 7;
let playerAnimationAction = "stay";
let playerWidth = playerCutSizeW * playerRatio;

/*Sprite Alien Player Fight*/
let finalFightPosX = 100;
let finalFightPosY = 100;
let indexPlayerAlienSprite = 0;
let fightRatio = 17.2;
let playerAlienAnimationAction = "spam";
let fightCutSizeW = 49;
let fightCutSizeH = 39;

/*Base value*/

let alienPosX = 50;
let alienPosY = screenHeight - 620 - 59;
let alienStatus = "move";
let alienAction = "chase";

/*First step*/

let canShoot = true;
let shoot = false;
let alienCanMove = true;
let ammoX = 32;
let countAmmo = 2;

/*Second step*/

let keyCount = 0;
let canPress = true;
let timer = false;

let spaceIsPressed = false;
let gaugeCount = 10

/*First step*/

function fight() {
    switch (alienAction) {
        case "chase":
            alienDraw();
            playerDraw();
            playerShoot();
            break;

        case "attack":
            playerAlienAttack();
            alienCanMove = false;
            spam();
            break;

        case "finish":
            alienCanMove = false;
            break;

        case "escape":
            alienCanMove = false;
            quests.fight.canStartFigth = false;
            quests.fight.haveShotTwoAmmo = false;
            quests.fight.fightIsFinished = true;
            quests.fight.canShowEveAfterFight = true;
            quests.fight.canShowEve = true;
            quests.fight.canShowDialogsAfterFight = true;
            quests.goToCloneMapAfterSleep.haveGun = false;
            fightIsReset = false;
            break;

    }
}

function alienDraw() {
    if (alienStatus == "stop") {
        image(
            alienHit.get(indexAlienSprite * 22, 0, 22, 39),
            alienPosX,
            alienPosY,
            350,
            620
        );
    } else {
        image(alienImg.get(
            indexAlienSprite * alienCutSizeW,
            alienCutSizeH * animationAction,
            22,
            39
        ),
            alienPosX,
            alienPosY,
            350,
            620
        );
    }
    if (alienPosX + entityWidth + 2 > playerPosX && alienAction == "chase") {
        alienStatus = "stop";
        alienAction = "attack";
    }
    switch (alienStatus) {
        case "move":
            alienPosX += 5;
            animationAction = 1;
            break;

        case "back":
            alienPosX -= 7;
            break;

        case "stop":
            animationAction = 0;
            break;

        case 'idle':
            animationAction = 0
            break;
    }
}
function playerDraw() {
    if (keyIsDown(32) && !canInteract) {
        image(spaceSpam.get(49, 0, 49, 15), playerPosX + 355 / 2 - 98, playerPosY - 80, 196, 60);
    } else if (!canInteract) {
        image(spaceSpam.get(0, 0, 49, 15), playerPosX + 355 / 2 - 98, playerPosY - 80, 196, 60);
    }
    image(
        playerWeapon.get(playerCutSizeW * indexPlayerSprite, playerCutSizeH * 4, 20, 20),
        playerPosX,
        playerPosY,
        spritePlayerSize,
        spritePlayerSize
    );
}

function playerAlienAttack() {
    playerPosY = screenHeight - spritePlayerSize - 40;
    if (playerAlienAnimationAction != "die") {
        image(
            playerAlienImg.get(fightCutSizeW * indexPlayerAlienSprite, 0, 49, 39),
            playerPosX - fightCutSizeW * fightRatio / 2.8,
            playerPosY - fightCutSizeH * fightRatio / 2,
            fightCutSizeW * fightRatio,
            fightCutSizeH * fightRatio
        );
    } else {
        image(
            playerDie.get(fightCutSizeW * indexPlayerAlienSprite, 0, 49, 39),
            playerPosX - fightCutSizeW * fightRatio / 2.8,
            playerPosY - fightCutSizeH * fightRatio / 2,
            fightCutSizeW * fightRatio,
            fightCutSizeH * fightRatio
        );
    }
    playerPosY = screenHeight - spritePlayerSize - 58;
}

function ammoShot() {
    let myInterval = setInterval(() => {
        ammoX += 10;
        // A chaque fois que la balle avance on verifie si il y colision avec l'alien
        if (alienPosX + entityWidth > playerPosX - ammoX) {
            clearInterval(myInterval);
            indexAlienSprite = 0;
            alienStatus = "stop";
            shoot = false;
            setTimeout(() => {
                alienStatus = "move";
                canShoot = true;
                ammoX = 10;
                alienCanMove = true;
                indexAlienSprite = 0;
            }, 1500);
        }
    }, 1);
}

function playerShoot() {
    // Verifie si il a assez de munition et si il peut tirer
    if (canShoot) {
        if (spaceIsPressed) {
            // Verifie si une balle est tirer -> shoot = true
            if (!shoot && countAmmo > 0) {
                shoot = true;
                indexAlienSprite = 0;
                // Permet le mouvement de la balle
                ammoShot();
            }
            // Evite de tirer plusieurs balle a la suite
            canShoot = false;
            countAmmo -= 1;
        }
    }
    // Si la balle est tirer il a affiche
    if (shoot) {
        image(ammo, playerPosX - ammoX - 60, playerPosY + playerWidth * 1.1, 96, 72)
        fill("white");
        playerAnimationAction = "shot";
    }
    if (countAmmo === -1 && !quests.fight.haveShowThatHaveShottwoAmmo && alienPosX + entityWidth < playerPosX - 30) {
        alienCanMove = false;
        alienStatus = "idle"
        quests.fight.haveShotTwoAmmo = true;
        canInteract = true;
        actualDialog = moreInteractionJSON.figth[4];;
        actualPlayersOrder = moreInteractionJSON.figth[5];
        quests.fight.haveShowThatHaveShottwoAmmo = true;
    }
}

/*Second step*/

function spam() {
    let haveFinishCameraMove = false;

    if (EngineTwoMapX > -1500) {
        EngineTwoMapX -= playerSpeedEngineTwo;
        playerPosX -= playerSpeedEngineTwo;
    } else {
        EngineTwoMapX = -1500
        haveFinishCameraMove = true;
    }

    if (haveFinishCameraMove) {
        if (!timer) {
            timer = true;
            timeDeath = setTimeout(() => {
                playerAlienAnimationAction = "die";
            }, 5000);
        }

        if (playerAlienAnimationAction != "escape") {
            if (spaceIsPressed) {
                if (canPress) {
                    keyCount++;
                    if (playerAlienAnimationAction !== "die") {
                        gaugeCount += 19.5
                    }
                    canPress = false;
                }
            } else {
                canPress = true;
            }
        }

        if (keyCount < 20) {
            drawGauge()
        }

        if (keyCount === 20 && playerAlienAnimationAction !== "die" || keyCount > 20 && playerAlienAnimationAction !== "die") {
            clearTimeout(timeDeath);
            playerAlienAnimationAction = "escape";
            setTimeout(() => {
                alienAction = "escape"
            }, 3000);
            if (alienPosX < 50) {
                alienCanMove = false;
                alienStatus = "stop";
                alienAction = "finish";
            } else {
                alienCanMove = true;
            }
        }
    }
}

function drawGauge() {
    image(spaceSpam.get(49 * indexOfSpaceAnimation, 0, 49, 15), playerPosX - 70 + 200 - 147, playerPosY - 335, 294, 90);
    fill('red')
    rect(playerPosX - 70, playerPosY - 225, gaugeCount, 35)
    noFill();
    stroke("#e0e0e0")
    strokeWeight(8)
    noFill();
    rect(playerPosX - 70, playerPosY - 225, 400, 35);
    noStroke();
}

/*Animation interval*/

let alienSpriteAnimation = setInterval(() => {
    switch (animationAction) {
        case 0:
            if (indexAlienSprite < 13) {
                indexAlienSprite++;
            } else {
                indexAlienSprite = 0;
            }
            break;

        case 1:
            setTimeout(() => {
                if (indexAlienSprite < 5) {
                    indexAlienSprite++;
                } else {
                    indexAlienSprite = 0;
                }
            }, 100);
            break;
    }
}, 120);

let playerAnimation = setInterval(() => {
    switch (playerAnimationAction) {
        case "shot":
            if (indexPlayerSprite != 3) {
                indexPlayerSprite++;
            } else {
                playerAnimationAction = "stay";
            }

            break;
        case "stay":
            indexPlayerSprite = 0;
            break;
    }
}, 100);

let spamAnimation = setInterval(() => {
    switch (playerAlienAnimationAction) {
        case "spam":
            if (indexPlayerAlienSprite != 7) {
                indexPlayerAlienSprite++;
            } else {
                indexPlayerAlienSprite = 0;
            }

            break;
        case "escape":
            if (indexPlayerAlienSprite != 27) {
                indexPlayerAlienSprite++;
            } else {
                indexPlayerAlienSprite = 27;
            }
            break;
        case "die":
            if (indexPlayerAlienSprite != 28) {
                indexPlayerAlienSprite++;
                fightIsReset = false;
            } else {
                indexPlayerAlienSprite = 19;
                fightIsReset = false;
            }
            setTimeout(() => {
                if (!fightIsReset) {
                    fightIsReset = true;
                    newEngineSelected = ENGINE_TWO;
                    canDoTransition = true;
                }
            }, 3000);
            break;
        default:
            break;
    }
}, 100);

/*Reset function*/

function resetFight() {
    /*Sprite Alien value*/
    alienCutSizeW = 22;
    alienCutSizeH = 39;
    indexAlienSprite = 0;
    //Change ratio to upscale Alien image
    alienRatio = 6;
    animationAction = 1;
    entityWidth = alienCutSizeW * alienRatio;

    /*Sprite Player value*/
    playerCutSizeW = 20;
    playerCutSizeH = 20;
    indexPlayerSprite = 0;
    //Change ratio to upscale Player image
    playerRatio = 7;
    playerAnimationAction = "stay";
    playerWidth = playerCutSizeW * playerRatio;

    /*Sprite Alien Player Fight*/
    finalFightPosX = 100;
    finalFightPosY = 100;
    indexPlayerAlienSprite = 0;
    fightRatio = 17.2;
    playerAlienAnimationAction = "spam";
    fightCutSizeW = 49;
    fightCutSizeH = 39;

    /*Base value*/

    alienPosX = 50;
    alienPosY = screenHeight - 620 - 59;
    alienStatus = "move";
    alienAction = "chase";

    /*First step*/

    canShoot = true;
    shoot = false;
    alienCanMove = true;
    ammoX = 32;
    countAmmo = 2;
    /*Second step*/

    keyCount = 0;
    canPress = true;
    timer = false

    quests.fight.haveShotTwoAmmo = false;
    quests.fight.haveShowThatHaveShottwoAmmo = false;

    playerPosX = 1262.093023255814;
    EngineTwoMapX = -980;
    gaugeCount = 10;
}
