export const countVerticalShips = (uboard) => {
    const columnIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let shipsCount = 0;
    const shipCords = {};
    const ships = [];

    for (let x in columnIndex) {
        for (
            let i = columnIndex[x];
            i <= columnIndex[x] + 10 + 80;
            i = i + 10
        ) {
            if (
                uboard.board[i].hasShip == true &&
                ((uboard.board[i + 10] && uboard.board[i + 10].hasShip) ||
                    (uboard.board[i - 10] && uboard.board[i - 10].hasShip))
            ) {
                if (!shipCords[columnIndex[x]]) {
                    shipCords[columnIndex[x]] = [];
                    shipCords[columnIndex[x]].push(i);
                } else {
                    shipCords[columnIndex[x]].push(i);
                }
            }
        }
    }
    for (let key in shipCords) {
        for (let i = 0; i < shipCords[key].length; i++) {
            ships.push([shipCords[key][i]]);
            while (shipCords[key][i + 1] == shipCords[key][i] + 10) {
                i++;
                ships[ships.length - 1].push(shipCords[key][i]);
            }
        }
    }
    shipsCount = ships.length;
    for (let i = 0; i < ships.length; i++) {
        if (ships[i].every((cords) => uboard.board[cords].isHit == true)) {
            shipsCount -= 1;
        }
    }
    return { shipsCount };
};

export const countHorizontalShips = (uboard) => {
    const columnIndex = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
    let shipsCount = 0;
    const shipCords = {};
    const ships = [];

    for (let x in columnIndex) {
        for (let i = columnIndex[x]; i <= columnIndex[x] + 9; i = i + 1) {
            if (
                uboard.board[i].hasShip == true &&
                ((uboard.board[i + 1] &&
                    uboard.board[i + 1].hasShip &&
                    i + 1 <= columnIndex[x] + 9) ||
                    (uboard.board[i - 1] &&
                        uboard.board[i - 1].hasShip &&
                        i - 1 >= columnIndex[x]))
            ) {
                if (!shipCords[columnIndex[x]]) {
                    shipCords[columnIndex[x]] = [];
                    shipCords[columnIndex[x]].push(i);
                } else {
                    shipCords[columnIndex[x]].push(i);
                }
            }
        }
    }
    for (let key in shipCords) {
        for (let i = 0; i < shipCords[key].length; i++) {
            ships.push([shipCords[key][i]]);
            while (shipCords[key][i + 1] == shipCords[key][i] + 1) {
                i++;
                ships[ships.length - 1].push(shipCords[key][i]);
            }
        }
    }
    shipsCount = ships.length;
    for (let i = 0; i < ships.length; i++) {
        if (ships[i].every((cords) => uboard.board[cords].isHit == true)) {
            shipsCount -= 1;
        }
    }
    return { shipsCount };
};
