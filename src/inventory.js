//& This file countain the function to draw the inventory

function drawInventory() {
  if (canDrawMenus) {
    if (actualInventoryChoose === 1) {
      image(inventorySelectedBackground, inventoryWidthStart, inventoryHeigthStart, inventorySquareSize, inventorySquareSize)
    } else {
      image(inventoryBackground, inventoryWidthStart, inventoryHeigthStart, inventorySquareSize, inventorySquareSize)
    }
    if (inventoryTab[0] != undefined) {
      image(findActualObject(inventoryTab[0]), inventoryWidthStart, inventoryHeigthStart, inventorySquareSize, inventorySquareSize);
    }
    if (actualInventoryChoose === 2) {
      image(inventorySelectedBackground, inventoryWidthStart + inventorySquareSize + 10, inventoryHeigthStart, inventorySquareSize, inventorySquareSize)
    } else {
      image(inventoryBackground, inventoryWidthStart + inventorySquareSize + 10, inventoryHeigthStart, inventorySquareSize, inventorySquareSize)
    }
    if (inventoryTab[1] != undefined) {
      image(findActualObject(inventoryTab[1]), inventoryWidthStart + inventorySquareSize + 10, inventoryHeigthStart, inventorySquareSize, inventorySquareSize);
    }
    if (actualInventoryChoose === 3) {
      image(inventorySelectedBackground,inventoryWidthStart + inventorySquareSize * 2 + 20, inventoryHeigthStart, inventorySquareSize, inventorySquareSize)
    } else {
      image(inventoryBackground,inventoryWidthStart + inventorySquareSize * 2 + 20, inventoryHeigthStart, inventorySquareSize, inventorySquareSize)
    }
    if (inventoryTab[2] != undefined) {
      image(findActualObject(inventoryTab[2]), inventoryWidthStart + inventorySquareSize * 2 + 20, inventoryHeigthStart, inventorySquareSize, inventorySquareSize);
    }
  }
  noFill();
}


function addToInventory(object) {
  if (canShowInventoryAnimation) {
    let actualObject = findActualObject(object);


    let newObjectX = screenWidth / 2 - newObjectSize / 2 + newObjectOldX
    let newObjectY = screenHeight / 2 - newObjectSize / 2 + newObjectOldY


    if (newObjectSize < 500 && canUpObjectSize) {
      newObjectSize = newObjectSize + 10
    } else if (canUpObjectSize) {
      newObjectSize = 500
      canUpObjectSize = false
      canChangeObjectInventory = true;
    }
    if (canChangeObjectInventory && inventoryTabNumber === 0) {
      if (newObjectX + 100 < inventoryWidthStart + inventorySquareSize - newObjectSize - 1) {
        newObjectOldX += 5.8
      } else if (newObjectX < inventoryWidthStart + inventorySquareSize - newObjectSize - 1) {
        newObjectOldX += 3.2
      } else if (inventoryWidthStart + inventorySquareSize === newObjectSize && newObjectX > inventoryWidthStart + inventorySquareSize) {
        newObjectX = inventoryWidthStart + inventorySquareSize - newObjectSize;
      }
      if (newObjectY - 100 > inventoryHeigthStart + 5) {
        newObjectOldY -= 5.8
      } else if (newObjectY > inventoryHeigthStart + 5) {
        newObjectOldY -= 3.2
      } else if (inventorySquareSize === newObjectSize && newObjectY > inventoryHeigthStart) {
        newObjectY = inventoryHeigthStart
      }
      if (inventorySquareSize < newObjectSize) {
        newObjectSize -= 5
      } else if (newObjectSize > inventorySquareSize) {
        newObjectSize = inventorySquareSize
      }
    }

    if (canChangeObjectInventory && inventoryTabNumber === 1) {
      if (newObjectX + 100 < inventoryWidthStart + inventorySquareSize * 2 + 10 - newObjectSize - 1) {
        newObjectOldX += 5.8
      } else if (newObjectX < inventoryWidthStart + inventorySquareSize * 2 + 10 - newObjectSize - 1) {
        newObjectOldX += 3.2
      } else if (inventoryWidthStart + inventorySquareSize * 2 + 10 === newObjectSize && newObjectX > inventoryWidthStart + inventorySquareSize * 2 + 10) {
        newObjectX = inventoryWidthStart + inventorySquareSize * 2 + 10 - newObjectSize;
      }
      if (newObjectY - 100 > inventoryHeigthStart + 5) {
        newObjectOldY -= 5.8
      } else if (newObjectY > inventoryHeigthStart + 5) {
        newObjectOldY -= 3.2
      } else if (inventorySquareSize === newObjectSize && newObjectY > inventoryHeigthStart) {
        newObjectY = inventoryHeigthStart
      }
      if (inventorySquareSize < newObjectSize) {
        newObjectSize -= 5
      } else if (newObjectSize > inventorySquareSize) {
        newObjectSize = inventorySquareSize
      }
    }

    if (canChangeObjectInventory && inventoryTabNumber === 2) {
      if (newObjectX + 100 < inventoryWidthStart + inventorySquareSize * 3 + 10 - newObjectSize - 1) {
        newObjectOldX += 5.8
      } else if (newObjectX < inventoryWidthStart + inventorySquareSize * 3 + 10 - newObjectSize - 1) {
        newObjectOldX += 3.2
      } else if (inventoryWidthStart + inventorySquareSize * 3 + 10 === newObjectSize && newObjectX > inventoryWidthStart + inventorySquareSize * 3 + 10) {
        newObjectX = inventoryWidthStart + inventorySquareSize * 3 + 10 - newObjectSize;
      }
      if (newObjectY - 100 > inventoryHeigthStart + 5) {
        newObjectOldY -= 5.8
      } else if (newObjectY > inventoryHeigthStart + 5) {
        newObjectOldY -= 3.2
      } else if (inventorySquareSize === newObjectSize && newObjectY > inventoryHeigthStart) {
        newObjectY = inventoryHeigthStart
      }
      if (inventorySquareSize < newObjectSize) {
        newObjectSize -= 5
      } else if (newObjectSize > inventorySquareSize) {
        newObjectSize = inventorySquareSize
      }
    }

    if (canShowObjectInAnimation && !canInteract) {
      image(actualObject, newObjectX, newObjectY, newObjectSize, newObjectSize);
    }
  }
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
  inventoryTab.length = 3
  inventoryTabNumber = 0
  for (let v = 0; v < tempArray.length; v++) {
    inventoryTab[inventoryTabNumber] = tempArray[v]
    inventoryTabNumber++
  }
}