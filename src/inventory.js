//& This file countain the function to draw the inventory

function drawInventory() {
  if (canDrawnInventory) {
    fill("rgba(31, 31, 31, 0.68)");
    strokeWeight(4);
    stroke("rgba(213, 213, 213, 0.24)");
    if (actualInventoryChoose === 1) {
      fill("rgba(116, 168, 151,0.68)");
      stroke("rgba(213, 213, 213, 0.24)");
    }
    rect(inventoryWidthStart, inventoryHeigthStart,
      inventorySquareSize, inventorySquareSize, 20);
    if (inventoryTab[0] != undefined) {
      image(
        findActualObject(inventoryTab[0]),
        inventoryWidthStart,
        inventoryHeigthStart,
        inventorySquareSize,
        inventorySquareSize
      );
    }
    fill("rgba(31, 31, 31, 0.68)");
    stroke("rgba(213, 213, 213, 0.24)");
    if (actualInventoryChoose === 2) {
      fill("rgba(116, 168, 151,0.68)");
      stroke("rgba(213, 213, 213, 0.24)");
    }
    rect(
      inventoryWidthStart + inventorySquareSize + 10,
      inventoryHeigthStart,
      inventorySquareSize, inventorySquareSize, 20
    );
    if (inventoryTab[1] != undefined) {
      image(
        findActualObject(inventoryTab[1]),
        inventoryWidthStart + inventorySquareSize + 10,
        inventoryHeigthStart,
        inventorySquareSize,
        inventorySquareSize
      );
    }
    fill("rgba(31, 31, 31, 0.68)");
    stroke("rgba(213, 213, 213, 0.24)");
    if (actualInventoryChoose === 3) {
      fill("rgba(116, 168, 151,0.68)");
      stroke("rgba(213, 213, 213, 0.24)");
    }
    rect(
      inventoryWidthStart + inventorySquareSize * 2 + 20,
      inventoryHeigthStart,
      inventorySquareSize, inventorySquareSize, 20
    );
    if (inventoryTab[2] != undefined) {
      image(
        findActualObject(inventoryTab[2]),
        inventoryWidthStart + inventorySquareSize * 2 + 20,
        inventoryHeigthStart,
        inventorySquareSize,
        inventorySquareSize
      );
    }
    fill("rgba(31, 31, 31, 0.68)");
    stroke("rgba(213, 213, 213, 0.24)");
    if (actualInventoryChoose === 4) {
      fill("rgba(116, 168, 151,0.68)");
      stroke("rgba(213, 213, 213, 0.24)");
    }
    rect(
      inventoryWidthStart + inventorySquareSize * 3 + 30,
      inventoryHeigthStart,
      inventorySquareSize, inventorySquareSize, 20
    );
    if (inventoryTab[3] != undefined) {
      image(
        findActualObject(inventoryTab[3]),
        inventoryWidthStart + inventorySquareSize * 3 + 30,
        inventoryHeigthStart,
        inventorySquareSize,
        inventorySquareSize
      );
    }
  }
  fill("rgba(31, 31, 31, 0.68)");
}