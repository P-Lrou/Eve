function preload() {
    loadAssets();
}

function setup() {
    createCanvas(screenWidth, screenHeight);
    frameRate(frameRateNumber)
    noSmooth()
    noStroke();
    runMap("map1");
}

function draw() {
    textFont(mainFont);
    changeEngine()
    switch (currentEngine) {
        case ENGINE_ONE:
            engineOneStart();
            break;
        case ENGINE_TWO:
            engineTwoStart();
            break;
        case MENU:
            menuStart();
            break;
        default:
            throw new Error(`Engine named : ${currentEngine} not found !`);
    }
    if (canDoTransition) {
        noStroke();
        fill(0, 0, 0, fade)
        rect(0, 0, screenWidth, screenHeight)
        if (transitionStatus === "Enter") {
            transitionEnter()
        }
        if (transitionStatus === "Out") {
            currentEngine = newEngineSelected
            transitionOut()
        }
    }
    if (canShowInventoryAnimation) {
        addToInventory(newObjectToAdd)
    }
}