function drawInventory() {
    fill("rgba(255,255,255,0.3)")
    stroke("white")
    if (actualInventoryChoose === 1) {
        fill("rgba(255,215,0,0.3)")
        stroke("gold")
    }
    rect(inventoryWidthStart, inventoryHeigthStart, inventorySquareSize);
    if (inventoryTab[0] != undefined) {
        image(findActualObject(inventoryTab[0]), inventoryWidthStart, inventoryHeigthStart, inventorySquareSize, inventorySquareSize)
    }
    fill("rgba(255,255,255,0.3)")
    stroke("white")
    if (actualInventoryChoose === 2) {
        fill("rgba(255,215,0,0.3)")
        stroke("gold")
    }
    rect(inventoryWidthStart + inventorySquareSize + 10, inventoryHeigthStart, inventorySquareSize);
    if (inventoryTab[1] != undefined) {
        image(findActualObject(inventoryTab[1]), inventoryWidthStart + inventorySquareSize + 10, inventoryHeigthStart, inventorySquareSize, inventorySquareSize)
    }
    fill("rgba(255,255,255,0.3)")
    stroke("white")
    if (actualInventoryChoose === 3) {
        fill("rgba(255,215,0,0.3)")
        stroke("gold")
    }
    rect(inventoryWidthStart + inventorySquareSize * 2 + 20, inventoryHeigthStart, inventorySquareSize);
    if (inventoryTab[2] != undefined) {
        image(findActualObject(inventoryTab[2]), inventoryWidthStart + inventorySquareSize * 2 + 20, inventoryHeigthStart, inventorySquareSize, inventorySquareSize)
    }
    fill("rgba(255,255,255,0.3)")
    stroke("white")
    if (actualInventoryChoose === 4) {
        fill("rgba(255,215,0,0.3)")
        stroke("gold")
    }
    rect(inventoryWidthStart + inventorySquareSize * 3 + 30, inventoryHeigthStart, inventorySquareSize);
    if (inventoryTab[3] != undefined) {
        image(findActualObject(inventoryTab[3]), inventoryWidthStart + inventorySquareSize * 3 + 30, inventoryHeigthStart, inventorySquareSize, inventorySquareSize)
    }
    fill("rgba(255,255,255,0.3)")
    stroke("white")
    if (actualInventoryChoose === 5) {
        fill("rgba(255,215,0,0.3)")
        stroke("gold")
    }
    rect(inventoryWidthStart + inventorySquareSize * 4 + 40, inventoryHeigthStart, inventorySquareSize);
    if (inventoryTab[4] != undefined) {
        image(findActualObject(inventoryTab[4]), inventoryWidthStart + inventorySquareSize * 4 + 40, inventoryHeigthStart, inventorySquareSize, inventorySquareSize)
    }
    fill("rgba(255,255,255,0.3)")
    stroke("white")
    if (actualInventoryChoose === 6) {
        fill("rgba(255,215,0,0.3)")
        stroke("gold")
    }
    rect(inventoryWidthStart + inventorySquareSize * 5 + 50, inventoryHeigthStart, inventorySquareSize);
    if (inventoryTab[5] != undefined) {
        image(findActualObject(inventoryTab[5]), inventoryWidthStart + inventorySquareSize * 5 + 50, inventoryHeigthStart, inventorySquareSize, inventorySquareSize)
    }
}