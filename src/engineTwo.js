// Start creation of all engine two settings
function engineTwoStart() {
    erase()
    image(backgroundCloneMap,EngineTwoMapX,EngineTwoMapY,4860,900);
    playerInputsEngineTwo();
    drawPlayerEngineTwo();
    drawInventory();
    changeMapEngineTwo();
}
