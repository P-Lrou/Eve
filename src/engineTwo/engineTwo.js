// Start creation of all engine two settings
function engineTwoStart() {
    erase()
    playerInputsEngineTwo();
    image(currentBackgroundEngineTwo, EngineTwoMapX, EngineTwoMapY, 4860, 900);
    drawPNJEngineTwo("pnjJulliette");
    drawPlayerEngineTwo();
    drawInventory();
    changeMapEngineTwo();
}
