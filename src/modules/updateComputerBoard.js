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
            square.style.backgroundColor = 'red';
        }
        if (computerBoard.board[i].isMissed) {
            square.style.backgroundColor = 'white';
        }
        computerBoardInterface.appendChild(square);
    }
    computerBoardInterface.style.display = 'grid';
    computerBoardInterface.style.gridTemplateColumns = 'repeat(10, 30px)';
    computerBoardInterface.style.gap = '4px';
    return computerBoardInterface;
};

export default updateComputerBoard;
