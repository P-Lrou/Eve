// Start creation of all engine two settings
function engineTwoStart() {
    erase()
    image(backgroundEngineTwo,EngineTwoMapX,EngineTwoMapY,3000,900);
    playerInputsEngineTwo();
    drawPlayerEngineTwo();
    drawInventory();
    changeMapEngineTwo();
    tempCollisionEngineTwo();
}
