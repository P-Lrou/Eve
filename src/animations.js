

let animationCount = 0;


let indexOfNpcAnimation = 0;
let indexOfCuveAnimationCloneMap = 0;
let indexOfAnimationQuestCloneMap = 0;
let indexOfPlanteAnimationBotanicMap = 0;
let indexOfScreenAnimationCommandMap = 0;
let indexOfControlPanelAnimationCommandMap = 0;
let indexOfEarthAnimationCommandMap = 0;
let indexOfScreenOneAnimationDormsMap = 0;
let indexOfScreenTwoAnimationDormsMap = 0;
let indexOfRedLigthsAnimationCapsuleMap = 0;
let indexOfGazPipeAnimationCapsuleMap = 0;
let indexOfScreenAnimationCloneMap = 0;
let indexOfDoorOpenAnimationCapsuleMap = 0;
let indexOfPlayerAnimation = 0;
let indexOfEveIdleAnim = 0;
let indexPlayerAlienSpriteEndFight = 0;
let indexEveMoveEndGame = 0;
let indexOfSpaceTouchAnimation = 0;
let indexOfRedArrowAnimation = 0;


function animations() {

    animationCount++

    //+ Set the animation for NPC's
    if (animationCount % 6 === 0) {
        if (indexOfNpcAnimation < 6) {
            indexOfNpcAnimation += 1;
        } else {
            indexOfNpcAnimation = 1;
        }
    }

    //+ Set animation for Clone Map Background
    if (animationCount % 6 === 0) {
        if (indexOfCuveAnimationCloneMap < 20) {
            indexOfCuveAnimationCloneMap += 1;
        } else {
            indexOfCuveAnimationCloneMap = 0;
        }
    }

    //+ Set animation for Clone Map Quest
    if (animationCount % 6 === 0) {
        if (indexOfAnimationQuestCloneMap < 20) {
            indexOfAnimationQuestCloneMap += 1;
        } else {
            indexOfAnimationQuestCloneMap = 0;
        }
    }

    //+ Set animation for Botanic Map Background
    if (animationCount % 6 === 0) {
        if (indexOfPlanteAnimationBotanicMap < 57) {
            indexOfPlanteAnimationBotanicMap += 1;
        } else {
            indexOfPlanteAnimationBotanicMap = 0;
        }
    }

    //+ Set animation for Command Map Screen
    if (animationCount % 6 === 0) {
        if (indexOfScreenAnimationCommandMap < 1) {
            indexOfScreenAnimationCommandMap += 1;
        } else {
            indexOfScreenAnimationCommandMap = 0;
        }
    }

    //+ Set animation for Command Map Control Panel
    if (animationCount % 6 === 0) {
        if (indexOfControlPanelAnimationCommandMap < 11) {
            indexOfControlPanelAnimationCommandMap += 1;
        } else {
            indexOfControlPanelAnimationCommandMap = 0;
        }
    }

    //+ Set animation for Command Map Earth animation
    if (animationCount % 6 === 0) {
        if (indexOfEarthAnimationCommandMap < 5) {
            indexOfEarthAnimationCommandMap += 1;
        } else {
            indexOfEarthAnimationCommandMap = 0;
        }
    }

    //+ Set animation for Dorms Map Screen1 animation
    if (animationCount % 6 === 0) {
        if (indexOfScreenOneAnimationDormsMap < 7) {
            indexOfScreenOneAnimationDormsMap += 1;
        } else {
            indexOfScreenOneAnimationDormsMap = 0;
        }
    }

    //+ Set animation for Dorms Map Screen2 animation
    if (animationCount % 6 === 0) {
        if (indexOfScreenTwoAnimationDormsMap < 38) {
            indexOfScreenTwoAnimationDormsMap += 1;
        } else {
            indexOfScreenTwoAnimationDormsMap = 0;
        }
    }

    //+ Set animation for Dorms Red Ligths animation
    if (animationCount % 6 === 0) {
        if (indexOfRedLigthsAnimationCapsuleMap < 12) {
            indexOfRedLigthsAnimationCapsuleMap += 1;
        } else {
            indexOfRedLigthsAnimationCapsuleMap = 0;
        }
    }

    //+ Set animation for Gaz pipe animation
    if (animationCount % 6 === 0) {
        if (indexOfGazPipeAnimationCapsuleMap < 4) {
            indexOfGazPipeAnimationCapsuleMap += 1;
        } else {
            indexOfGazPipeAnimationCapsuleMap = 0;
        }
    }

    //+ Set animation for Screen clone map animation
    if (animationCount % 6 === 0) {
        if (indexOfScreenAnimationCloneMap < 7) {
            indexOfScreenAnimationCloneMap += 1;
        } else {
            indexOfScreenAnimationCloneMap = 0;
        }
    }

    //+ Set animation for Door Open animation
    if (animationCount % 6 === 0) {
        if (indexOfDoorOpenAnimationCapsuleMap < 21) {
            indexOfDoorOpenAnimationCapsuleMap += 1;
        } else {
            indexOfDoorOpenAnimationCapsuleMap = 22;
        }
    }


    //+ Set animation for main caracter movement
    if (animationCount % 6 === 0) {
        if (indexOfPlayerAnimation < 6) {
            indexOfPlayerAnimation += 1;
        } else {
            indexOfPlayerAnimation = 1;
        }
    }

    //+ Set animation for eve idle movement
    if (animationCount % 9.8 === 0) {
        if (indexOfEveIdleAnim < 13) {
            indexOfEveIdleAnim += 1;
        } else {
            indexOfEveIdleAnim = 0;
        }
    }

    //+ Set animation for eve end fight movement
    if (animationCount % 5.5 === 0) {
        if (indexPlayerAlienSpriteEndFight < 37) {
            indexPlayerAlienSpriteEndFight += 1;
        } else {
            indexPlayerAlienSpriteEndFight = 28;
        }
    }

    //+ Set animation for eve end Game movement
    if (animationCount % 9 === 0) {
        if (indexEveMoveEndGame < 5) {
            indexEveMoveEndGame += 1;
        } else {
            indexEveMoveEndGame = 0;
        }
    }


    //+ Set animation for eve end fight movement
    if (animationCount % 15 === 0) {
        if (indexOfSpaceTouchAnimation < 1) {
            indexOfSpaceTouchAnimation += 1;
        } else {
            indexOfSpaceTouchAnimation = 0;
        }
    }

    if (animationCount % 10 === 0) {
        if (indexOfRedArrowAnimation < 16) {
            indexOfRedArrowAnimation += 1
        } else {
            indexOfRedArrowAnimation = 0
        }
    }
}