import { countHorizontalShips, countVerticalShips } from './shipsCount';

const updateInformation = (playerName, playerBoard, computerBoard, message) => {
    const gameInfo = document.createElement('div');
    const playerInfo = document.createElement('div');
    playerInfo.classList.add('player-info');
    const pShipsLeft = document.createElement('p');
    let pShipsCount = 0;
    for (let i = 0; i < 100; i++) {
        if (
            playerBoard.board[i].hasShip &&
            playerBoard.board[i].isHit == false
        ) {
            pShipsCount += 1;
        }
    }
    pShipsLeft.textContent =
        'Ships left: ' +
        (countVerticalShips(playerBoard).shipsCount +
            countHorizontalShips(playerBoard).shipsCount);
    const pName = document.createElement('h3');
    pName.textContent = playerName;
    playerInfo.append(pName, pShipsLeft);
    const computerInfo = document.createElement('div');
    computerInfo.classList.add('computer-info');
    const cShipsLeft = document.createElement('p');
    let cShipsCount = 0;
    for (let i = 0; i < 100; i++) {
        if (
            computerBoard.board[i].hasShip &&
            computerBoard.board[i].isHit == false
        ) {
            cShipsCount += 1;
        }
    }
    cShipsLeft.textContent =
        'Ships left: ' +
        (countVerticalShips(computerBoard).shipsCount +
            countHorizontalShips(computerBoard).shipsCount);
    const cName = document.createElement('h3');
    cName.textContent = 'Computer';
    computerInfo.append(cName, cShipsLeft);
    const gameInfoDiv = document.createElement('div');
    const currentGameInfo = document.createElement('h3');
    gameInfoDiv.appendChild(currentGameInfo);
    gameInfoDiv.classList.add('game-info');
    currentGameInfo.textContent = message;
    gameInfo.append(playerInfo, gameInfoDiv, computerInfo);
    return gameInfo;
};

export default updateInformation;
