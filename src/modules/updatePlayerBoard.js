const updatePlayerBoard = (playerBoard) => {
    const playerBoardInterface = document.createElement('div');
    playerBoardInterface.classList.add('player-board');
    for (let i = 0; i < 100; i++) {
        let square = document.createElement('div');
        square.style.width = '30px';
        square.style.height = '30px';
        square.style.border = '2px solid white';
        square.classList.add('square');
        square.setAttribute('id', `player${i}`);
        if (playerBoard.board[i].hasShip) {
            square.style.backgroundColor = 'blue';
        }
        if (playerBoard.board[i].isHit) {
            square.style.backgroundColor = 'red';
        }
        if (playerBoard.board[i].isMissed) {
            square.style.backgroundColor = 'white';
        }
        playerBoardInterface.appendChild(square);
    }
    playerBoardInterface.style.display = 'grid';
    playerBoardInterface.style.gridTemplateColumns = 'repeat(10, 30px)';
    playerBoardInterface.style.gap = '4px';
    return playerBoardInterface;
};

export default updatePlayerBoard;
