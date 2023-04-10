//& This file countain the function to draw the inventory

function drawInventory() {
  if (canDrawMenus) {
    tint(255, alphaArrows)
    fill("rgba(31, 31, 31, 0.68)");
    strokeWeight(4);
    stroke("rgba(213, 213, 213, 0.24)");
    if (actualInventoryChoose === 1) {
      fill("rgba(116, 168, 151,0.68)");
      stroke("rgba(213, 213, 213, 0.24)");
    }
    rect(inventoryWidthStart, inventoryHeigthStart, inventorySquareSize, inventorySquareSize, 20);
    if (inventoryTab[0] != undefined) {
      image(findActualObject(inventoryTab[0]), inventoryWidthStart, inventoryHeigthStart, inventorySquareSize, inventorySquareSize);
    }
    fill("rgba(31, 31, 31, 0.68)");
    stroke("rgba(213, 213, 213, 0.24)");
    if (actualInventoryChoose === 2) {
      fill("rgba(116, 168, 151,0.68)");
      stroke("rgba(213, 213, 213, 0.24)");
    }
    rect(inventoryWidthStart + inventorySquareSize + 10, inventoryHeigthStart, inventorySquareSize, inventorySquareSize, 20);
    if (inventoryTab[1] != undefined) {
      image(findActualObject(inventoryTab[1]), inventoryWidthStart + inventorySquareSize + 10, inventoryHeigthStart, inventorySquareSize, inventorySquareSize);
    }
    fill("rgba(31, 31, 31, 0.68)");
    stroke("rgba(213, 213, 213, 0.24)");
    if (actualInventoryChoose === 3) {
      fill("rgba(116, 168, 151,0.68)");
      stroke("rgba(213, 213, 213, 0.24)");
    }
    rect(inventoryWidthStart + inventorySquareSize * 2 + 20, inventoryHeigthStart, inventorySquareSize, inventorySquareSize, 20);
    if (inventoryTab[2] != undefined) {
      image(findActualObject(inventoryTab[2]), inventoryWidthStart + inventorySquareSize * 2 + 20, inventoryHeigthStart, inventorySquareSize, inventorySquareSize);
    }
    fill("rgba(31, 31, 31, 0.68)");
    stroke("rgba(213, 213, 213, 0.24)");
    if (actualInventoryChoose === 4) {
      fill("rgba(116, 168, 151,0.68)");
      stroke("rgba(213, 213, 213, 0.24)");
    }
    rect(inventoryWidthStart + inventorySquareSize * 3 + 30, inventoryHeigthStart, inventorySquareSize, inventorySquareSize, 20);
    if (inventoryTab[3] != undefined) {
      image(findActualObject(inventoryTab[3]), inventoryWidthStart + inventorySquareSize * 3 + 30, inventoryHeigthStart, inventorySquareSize, inventorySquareSize);
    }
  }
  fill("rgba(31, 31, 31, 0.68)");
  noTint();
}

function addToInventory(object) {
  let actualObject = findActualObject(object);

  let newObjectX = screenWidth / 2 - newObjectSize / 2 + newObjectOldX
  let newObjectY = screenHeight / 2 - newObjectSize / 2 + newObjectOldY

  if (newObjectSize < 510 && canUpObjectSize) {
    newObjectSize += 10
  } else if (canUpObjectSize) {
    newObjectSize = 510
    canUpObjectSize = false
  }
  setTimeout(() => {
    canChangeObjectInventory = true;
  }, 1000);
  if (inventoryTabNumber === 0 && canChangeObjectInventory) {
    if (newObjectX < inventoryWidthStart + inventorySquareSize - newObjectSize - 5) {
      newObjectOldX += 8
    } else if (inventoryWidthStart + inventorySquareSize === newObjectSize && newObjectX > inventoryWidthStart + inventorySquareSize) {
      newObjectX = inventoryWidthStart + inventorySquareSize - newObjectSize;
    }
    if (newObjectY > inventoryHeigthStart + 5) {
      newObjectOldY -= 6
    } else if (inventorySquareSize === newObjectSize && newObjectY > inventoryHeigthStart) {
      newObjectY = inventoryHeigthStart
    }
    if (inventorySquareSize < newObjectSize) {
      newObjectSize -= 10
    } else if (newObjectSize > inventorySquareSize) {
      newObjectSize = inventorySquareSize
    }
  }
  if (inventoryTabNumber === 1 && canChangeObjectInventory) {
    if (newObjectX < inventoryWidthStart + inventorySquareSize * 2 + 10 - newObjectSize - 5) {
      newObjectOldX += 10
    } else if (inventoryWidthStart + inventorySquareSize * 2 + 10 === newObjectSize && newObjectX > inventoryWidthStart + inventorySquareSize * 2 + 10) {
      newObjectX = inventoryWidthStart + inventorySquareSize * 2 + 10;
    }
    if (newObjectY > inventoryHeigthStart + 5) {
      newObjectOldY -= 8
    } else if (inventorySquareSize === newObjectSize && newObjectY > inventoryHeigthStart) {
      newObjectY = inventoryHeigthStart
    }
    if (inventorySquareSize < newObjectSize) {
      newObjectSize -= 10
    } else if (newObjectSize > inventorySquareSize) {
      newObjectSize = inventorySquareSize
    }
  }
  if (inventoryTabNumber === 2 && canChangeObjectInventory) {
    if (newObjectX < inventoryWidthStart + inventorySquareSize * 3 + 10 - newObjectSize - 5) {
      newObjectOldX += 10
    } else if (inventoryWidthStart + inventorySquareSize * 3 + 10 === newObjectSize && newObjectX > inventoryWidthStart + inventorySquareSize * 3 + 10) {
      newObjectX = inventoryWidthStart + inventorySquareSize * 3 + 10;
    }
    if (newObjectY > inventoryHeigthStart + 5) {
      newObjectOldY -= 8
    } else if (inventorySquareSize === newObjectSize && newObjectY > inventoryHeigthStart) {
      newObjectY = inventoryHeigthStart
    }
    if (inventorySquareSize < newObjectSize) {
      newObjectSize -= 10
    } else if (newObjectSize > inventorySquareSize) {
      newObjectSize = inventorySquareSize
    }
  }
  if (inventoryTabNumber === 3 && canChangeObjectInventory) {
    if (newObjectX < inventoryWidthStart + inventorySquareSize * 4 + 10 - newObjectSize - 5) {
      newObjectOldX += 10
    } else if (inventoryWidthStart + inventorySquareSize * 4 + 10 === newObjectSize && newObjectX > inventoryWidthStart + inventorySquareSize * 4 + 10) {
      newObjectX = inventoryWidthStart + inventorySquareSize * 4 + 10;
    }
    if (newObjectY > inventoryHeigthStart + 5) {
      newObjectOldY -= 8
    } else if (inventorySquareSize === newObjectSize && newObjectY > inventoryHeigthStart) {
      newObjectY = inventoryHeigthStart
    }
    if (inventorySquareSize < newObjectSize) {
      newObjectSize -= 10
    } else if (newObjectSize > inventorySquareSize) {
      newObjectSize = inventorySquareSize
    }
  }
  if (canShowObjectInAnimation) {
    image(actualObject, newObjectX, newObjectY, newObjectSize, newObjectSize);
  }
  setTimeout(() => {
    if (!objectAsBeenAdToInventoryWithAnimation) {
      inventoryTab[inventoryTabNumber] = object;
      inventoryTabNumber++;
      objectAsBeenAdToInventoryWithAnimation = true;
      canShowInventoryAnimation = false;
      canChangeObjectInventory = false;
      canShowObjectInAnimation = true;
      newObjectSize = 128;
      newObjectOldX = 0;
      newObjectOldY = 0;
      canUpObjectSize = true;
    }
  }, 4500);
}


function removeFromInventory(object) {
  let tempArray = [];
  inventoryTab.forEach(element => {
    if (element === object) {

    } else {
      tempArray.push(element)
    }
  });
  inventoryTab = []
  inventoryTab.length = 4
  inventoryTabNumber = 0
  for (let v = 0; v < tempArray.length; v++) {
    inventoryTab[inventoryTabNumber] = tempArray[v]
    inventoryTabNumber++
  }
}