const updateComputerBoard = (computerBoard, computer, player) => {
    const computerBoardInterface = document.createElement('div');
    computerBoardInterface.classList.add('computer-board');
    for (let i = 0; i < 100; i++) {
        let square = document.createElement('div');
        let icon = document.createElement('i');
        square.appendChild(icon);
        square.style.width = '30px';
        square.style.height = '30px';
        square.style.border = '2px solid white';
        square.classList.add('square');
        square.setAttribute('id', i);
        if (computerBoard.board[i].isHit) {
            square.textContent = 'hit';
        }
        if (computerBoard.board[i].isMissed) {
            square.textContent = 'miss';
        }
        if (computerBoard.board[i].hasShip) {
            square.style.backgroundColor = 'blue';
        }
        if (computerBoard.board[i].canHaveShip == false) {
            square.textContent = 'PiS';
        }
        computerBoardInterface.appendChild(square);
    }
    computerBoardInterface.style.display = 'grid';
    computerBoardInterface.style.gridTemplateColumns = 'repeat(10, 30px)';
    computerBoardInterface.style.gap = '4px';
    return computerBoardInterface;
};

export default updateComputerBoard;
