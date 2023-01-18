const gameboardFactory = () => {
    const board = [];
    const hit = [];
    const missed = [];
    for (let i = 0; i < 100; i++) {
        board.push({ isHit: false, hasShip: false, isMissed: false });
    }
    const placeShips = (cords) => {
        if (board[cords].hasShip == false) {
            board[cords].hasShip = true;
            return board[cords];
        }
        return 'Ship already placed';
    };
    const recieveAttack = (cords) => {
        if (cords < 0 || cords > 99) {
            return 'No such cords';
        }
        if (board[cords].hasShip == true && board[cords].isHit == false) {
            board[cords].isHit = true;
            hit.push(cords);
            return `You managed to hit a ship on square ${cords}`;
        } else if (
            board[cords].hasShip == false &&
            board[cords].isHit == false
        ) {
            board[cords].isMissed = true;
            missed.push(cords);
            return 'You missed';
        }
        return 'Square already attacked';
    };
    const areAllSunk = () => {
        for (let i = 0; i < 100; i++) {
            if (board[i].hasShip == true) {
                if (board[i].isHit == false) {
                    return false;
                }
            }
        }
        return true;
    };
    return { board, missed, hit, placeShips, recieveAttack, areAllSunk };
};

export default gameboardFactory;
