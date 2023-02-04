import { changeGameStatus, startGame } from './game';
import createHeader from './header';
import playerFactory from './player';
import computerFactory from './computer';
import gameboardFactory from './gameboard';
import updatePlayerBoard from './updatePlayerBoard';
import updateComputerBoard from './updateComputerBoard';
import createHomepage from './homepage';
import { placeShipsRandomly } from './computerShipPlacement';

const gameInterface = document.querySelector('.game-interface');
const gameInfo = document.querySelector('.info');
const header = document.querySelector('header');

const toHomepage = () => {
    changeGameStatus();
    header.textContent = '';
    gameInfo.textContent = '';
    gameInterface.textContent = '';
    header.appendChild(createHeader());
    createHomepage();
};

const randomDir = () => {
    if (Math.random() > 0.5) {
        return 'vertical';
    } else {
        return 'horizontal';
    }
};

const displayGame = (playerName, playerBoard) => {
    const goBackButton = document.createElement('button');
    goBackButton.textContent = 'To main menu';
    header.appendChild(goBackButton);
    goBackButton.addEventListener('click', toHomepage);
    const player = playerFactory(playerName);
    player.turn = true;
    const computer = computerFactory();
    const computerBoard = gameboardFactory();
    let direction;
    direction = randomDir();
    placeShipsRandomly(computerBoard, 5, direction);
    direction = randomDir();
    placeShipsRandomly(computerBoard, 4, direction);
    for (let i = 0; i < 3; i++) {
        direction = randomDir();
        placeShipsRandomly(computerBoard, 3, direction);
    }
    for (let i = 0; i < 2; i++) {
        direction = randomDir();
        placeShipsRandomly(computerBoard, 2, direction);
    }


    gameInterface.textContent = '';
    gameInfo.classList.remove('homepage-info');
    gameInterface.classList.remove('homepage-board');
    gameInterface.appendChild(updatePlayerBoard(playerBoard));
    gameInterface.appendChild(
        updateComputerBoard(computerBoard, computer, player)
    );
    changeGameStatus();
    startGame(player, computer, playerBoard, computerBoard);
};

export default displayGame;
