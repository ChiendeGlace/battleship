const updatePlayerBoard = (playerBoard) => {
    const playerBoardInterface = document.createElement('div');
    for (let i = 0; i < 100; i++) {
        let square = document.createElement('div');
        square.style.width = '30px';
        square.style.height = '30px';
        square.style.border = '1px solid black';
        square.classList.add('square');
        if (playerBoard.board[i].hasShip) {
            square.textContent = 'ship';
        }
        if (playerBoard.board[i].isHit) {
            square.textContent = 'hit';
        }
        if (playerBoard.board[i].isMissed) {
            square.textContent = 'miss';
        }
        playerBoardInterface.appendChild(square);
    }
    playerBoardInterface.style.display = 'grid';
    playerBoardInterface.style.gridTemplateColumns = 'repeat(10, 30px)';
    playerBoardInterface.style.gap = '4px';
    return playerBoardInterface;
};

export default updatePlayerBoard;