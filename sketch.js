function preload() {
    loadAssets();
}

function setup() {
    createCanvas(screenWidth, screenHeight);
    runMap("map_1");
}

function draw() {
    switch (currentEngine) {
        case ENGINE_ONE:
            engineOneStart();
            break;
        default:
            throw new Error(`Engine named : ${currentEngine} not found !`);
    }
}