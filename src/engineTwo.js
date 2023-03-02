// Start creation of all engine two settings
function engineTwoStart() {
    erase()
    playerInputsEngineTwo();
    image(backgroundCloneMap,EngineTwoMapX,EngineTwoMapY,4860,900);
    drawPNJEngineTwo("protoSprite");
    drawPlayerEngineTwo();
    drawInventory();
    changeMapEngineTwo();
}
