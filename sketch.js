function preload() {
    loadAssets();
}

function setup() {
    createCanvas(screenWidth, screenHeight);
    noSmooth()
    runMap("map1");
}

function draw() {
    detectEngine()
    switch (currentEngine) {
        case ENGINE_ONE:
            engineOneStart();
            break;
        case ENGINE_TWO:
            engineTwoStart();    
            break;
        default:
            throw new Error(`Engine named : ${currentEngine} not found !`);
    }
}