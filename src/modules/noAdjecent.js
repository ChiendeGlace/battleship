export const donotAllowShips = (
    playerBoard,
    cords,
    cordsMinus,
    cordsPlus,
    direction,
    length
) => {
    let index;
    if (direction == 'vertical') {
        for (let i = 0; i < cordsMinus.length; i++) {
            index = cords + cordsMinus[i];
            if (index >= 0) {
                if (cords == 0 || cords.toString().split('')[1] == 0) {
                    if (index.toString().split('')[1] < 9 || index < 9) {
                        playerBoard.board[index].canHaveShip = false;
                    }
                } else if (cords == 9 || cords.toString().split('')[1] == 9) {
                    if (index.toString().split('')[1] == 0 || index == 0) {
                        continue;
                    } else {
                        playerBoard.board[index].canHaveShip = false;
                    }
                } else {
                    playerBoard.board[index].canHaveShip = false;
                }
            }
        }
        for (let i = 0; i < cordsPlus.length; i++) {
            index = cords + cordsPlus[i];
            if (index <= 99) {
                if (cords == 0 || cords.toString().split('')[1] == 0) {
                    if (index.toString().split('')[1] < 9 || index < 9) {
                        playerBoard.board[index].canHaveShip = false;
                    }
                } else if (cords == 9 || cords.toString().split('')[1] == 9) {
                    if (index.toString().split('')[1] == 0 || index == 0) {
                        continue;
                    } else {
                        playerBoard.board[index].canHaveShip = false;
                    }
                } else {
                    playerBoard.board[index].canHaveShip = false;
                }
            }
        }
    } else if (direction == 'horizontal') {
        for (let i = 0; i < cordsMinus.length; i++) {
            index = cords + cordsMinus[i];
            if (index >= 0) {
                if (cords == 0 || cords.toString().split('')[1] == 0) {
                    if (index.toString().split('')[1] < 9 || index < 9) {
                        playerBoard.board[index].canHaveShip = false;
                    }
                } else if (cords + length - 1 == 9 || Number(cords.toString().split('')[1]) + length - 1== 9) {
                    if (index.toString().split('')[1] == 0 || index == 0) {
                        continue;
                    } else {
                        playerBoard.board[index].canHaveShip = false;
                    }
                } else {
                    playerBoard.board[index].canHaveShip = false;
                }
            }
        }
        for (let i = 0; i < cordsPlus.length; i++) {
            index = cords + cordsPlus[i];
            if (index <= 99) {
                if (cords == 0 || cords.toString().split('')[1] == 0) {
                    console.log(0)
                    if (index.toString().split('')[1] < 9 || index < 9) {
                        playerBoard.board[index].canHaveShip = false;
                    }
                } else if (cords + length - 1 == 9 || Number(cords.toString().split('')[1]) + length - 1 == 9) {
                    if (index.toString().split('')[1] == 0 || index == 0) {
                        continue;
                    } else {
                        playerBoard.board[index].canHaveShip = false;
                    }
                } else {
                    playerBoard.board[index].canHaveShip = false;
                }
            }
        }
    }
};
