import { changeGameStatus, startGame } from './game';
import createHeader from './header';
import playerFactory from './player';
import computerFactory from './computer';
import gameboardFactory from './gameboard';
import updatePlayerBoard from './updatePlayerBoard';
import updateComputerBoard from './updateComputerBoard';
import createHomepage from './homepage';
import { donotAllowShips } from './noAdjecent';

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

const placeShipsRandomly = (cboard, length, direction) => {
    let index;
    const conditionsMet = (index) => {
        for (let i = 0; i < length; i++) {
            if (cboard.board[index + 1].canHaveShip == false) {
                return false;
            }
        }
        return true;
    };
    if (direction == 'vertical') {
        index = Math.round(Math.random() * 99);
        while (
            index + length * 10 > 100
        ) {
            index = Math.round(Math.random() * 99);
        }
        cboard.placeShips(index);
        console.log(index);
        for (let i = 1; i < length; i++) {
            cboard.placeShips(index + i * 10);
        }
    }
    if (direction == 'horizontal') {
    }
    return index;
};
const randomDir = () => {
    if (Math.random() > 0.5) {
        return 'vertical';
    } else {
        return 'horizontal';
    }
};
const displayGame = (playerName, playerBoard) => {
    const goBackButton = document.createElement('div');
    goBackButton.textContent = 'To main menu';
    header.appendChild(goBackButton);
    goBackButton.addEventListener('click', toHomepage);
    const player = playerFactory(playerName);
    const computer = computerFactory();
    const computerBoard = gameboardFactory();
    player.turn = true;
    let carrierCords = placeShipsRandomly(computerBoard, 5, 'vertical');
    donotAllowShips(
        computerBoard,
        carrierCords,
        [-10, -9, -11, -1],
        [0, 10, 20, 30, 40, 49, 50, 51, 39, 41, 29, 31, 19, 21, 11, 9, 1],
        'vertical'
    );
    let battleshipCords = placeShipsRandomly(computerBoard, 4, 'vertical');
    donotAllowShips(
        computerBoard,
        battleshipCords,
        [-10, -9, -11, -1],
        [0, 10, 20, 30, 40, 39, 41, 29, 31, 19, 21, 11, 9, 1],
        'vertical'
    );
    for (let i = 0; i < 3; i++) {
        let cruiserCords = placeShipsRandomly(computerBoard, 3, 'vertical');
        donotAllowShips(
            computerBoard,
            cruiserCords,
            [-10, -9, -11, -1],
            [0, 10, 20, 30, 29, 31, 19, 21, 11, 9, 1],
            'vertical'
        );
    }
    for (let i = 0; i < 4; i++) {
        let destroyerCords = placeShipsRandomly(computerBoard, 2, 'vertical');
        donotAllowShips(
            computerBoard,
            destroyerCords,
            [-10, -9, -11, -1],
            [0, 10, 20, 19, 21, 11, 9, 1],
            'vertical'
        );
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
