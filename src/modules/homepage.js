import displayGame from './displayGame';
import startGame from './game';
import gameboardFactory from './gameboard';
import updatePlayerBoard from './updatePlayerBoard';
import placeShipHomepage from './placingShips';
import { donotAllowShips } from './noAdjecent';

export let direction = 'vertical';
const gameInterface = document.querySelector('.game-interface');
const gameInfo = document.querySelector('.info');

const createHomepage = async () => {
    const directionChange = document.createElement('button');
    directionChange.textContent = 'Rotate the ship';
    const playerForm = document.createElement('form');
    const playerFormLabel = document.createElement('label');
    playerFormLabel.textContent = 'Input player name';
    const playerFormInput = document.createElement('input');
    playerFormInput.maxLength = '20';
    playerFormInput.placeholder = 'Johnny';
    const playerFormSubmit = document.createElement('button');
    playerFormSubmit.textContent = 'Start game';
    playerForm.append(playerFormLabel, playerFormInput, playerFormSubmit);
    const playerBoard = gameboardFactory();
    gameInfo.classList.add('homepage-info');
    gameInterface.classList.add('homepage-board');

    const countShips = () => {
        let shipCount = 0;
        for (let i = 0; i < 100; i++) {
            if (playerBoard.board[i].hasShip) {
                shipCount += 1;
            }
        }
        return shipCount;
    };

    const changeDirection = async (e) => {
        if (direction == 'vertical') {
            direction = 'horizontal';
        } else {
            direction = 'vertical';
        }
        if (carrierCords == undefined) {
            carrierCords = await placeShipHomepage(playerBoard, 5, direction);
        } else if (battleshipCords == undefined) {
            battleshipCords = await placeShipHomepage(
                playerBoard,
                4,
                direction
            );
        } else if (cruiserCords == undefined || countShips() < 18) {
            cruiserCords = await placeShipHomepage(playerBoard, 3, direction);
        } else {
            destroyerCords = await placeShipHomepage(playerBoard, 2, direction);
        }
    };
    directionChange.addEventListener('click', changeDirection);
    const shipPlacementGuide = document.createElement('h3');
    shipPlacementGuide.textContent = 'Place your carrier';
    gameInterface.append(shipPlacementGuide, directionChange);
    gameInterface.appendChild(updatePlayerBoard(playerBoard));
    let carrierCords = await placeShipHomepage(playerBoard, 5, direction);
    playerBoard.placeShips(carrierCords);
    if (direction == 'vertical') {
        playerBoard.placeShips(carrierCords + 10);
        playerBoard.placeShips(carrierCords + 20);
        playerBoard.placeShips(carrierCords + 30);
        playerBoard.placeShips(carrierCords + 40);
        donotAllowShips(
            playerBoard,
            carrierCords,
            [-10, -9, -11, -1],
            [0, 10, 20, 30, 40, 49, 50, 51, 39, 41, 29, 31, 19, 21, 11, 9, 1],
            'vertical'
        );
    } else {
        playerBoard.placeShips(carrierCords + 1);
        playerBoard.placeShips(carrierCords + 2);
        playerBoard.placeShips(carrierCords + 3);
        playerBoard.placeShips(carrierCords + 4);
        donotAllowShips(
            playerBoard,
            carrierCords,
            [-1, -10, -11, -9, -8, -7, -6, -5],
            [5, 9, 10, 11, 12, 13, 14, 15, 0, 1, 2, 3, 4],
            'horizontal',
            5
        );
    }
    gameInterface.textContent = '';
    gameInterface.append(shipPlacementGuide, directionChange);
    gameInterface.appendChild(updatePlayerBoard(playerBoard));

    shipPlacementGuide.textContent = 'Place your battleship';
    let battleshipCords = await placeShipHomepage(playerBoard, 4, direction);
    playerBoard.placeShips(battleshipCords);
    if (direction == 'vertical') {
        playerBoard.placeShips(battleshipCords + 10);
        playerBoard.placeShips(battleshipCords + 20);
        playerBoard.placeShips(battleshipCords + 30);
        donotAllowShips(
            playerBoard,
            battleshipCords,
            [-10, -9, -11, -1],
            [0, 10, 20, 30, 40, 39, 41, 29, 31, 19, 21, 11, 9, 1],
            'vertical'
        );
    } else {
        playerBoard.placeShips(battleshipCords + 1);
        playerBoard.placeShips(battleshipCords + 2);
        playerBoard.placeShips(battleshipCords + 3);
        donotAllowShips(
            playerBoard,
            battleshipCords,
            [-1, -10, -11, -9, -8, -7, -6],
            [4, 9, 10, 11, 12, 13, 14, 0, 1, 2, 3],
            'horizontal',
            4
        );
    }
    gameInterface.textContent = '';
    gameInterface.append(shipPlacementGuide, directionChange);
    gameInterface.appendChild(updatePlayerBoard(playerBoard));

    let cruiserCords;
    for (let i = 0; i < 3; i++) {
        cruiserCords = undefined;
        shipPlacementGuide.textContent = 'Place your cruisers';
        cruiserCords = await placeShipHomepage(playerBoard, 3, direction);
        playerBoard.placeShips(cruiserCords);
        if (direction == 'vertical') {
            playerBoard.placeShips(cruiserCords + 10);
            playerBoard.placeShips(cruiserCords + 20);
            donotAllowShips(
                playerBoard,
                cruiserCords,
                [-10, -9, -11, -1],
                [0, 10, 20, 30, 29, 31, 19, 21, 11, 9, 1],
                'vertical'
            );
        } else {
            playerBoard.placeShips(cruiserCords + 1);
            playerBoard.placeShips(cruiserCords + 2);
            donotAllowShips(
                playerBoard,
                cruiserCords,
                [-1, -10, -11, -9, -8, -7],
                [9, 10, 11, 12, 13, 0, 1, 2, 3],
                'horizontal',
                3
            );
        }
        gameInterface.textContent = '';
        gameInterface.append(shipPlacementGuide, directionChange);
        gameInterface.appendChild(updatePlayerBoard(playerBoard));
    }
    let destroyerCords;
    for (let i = 0; i < 2; i++) {
        shipPlacementGuide.textContent = 'Place your destroyers';
        destroyerCords = await placeShipHomepage(playerBoard, 2, direction);
        playerBoard.placeShips(destroyerCords);
        if (direction == 'vertical') {
            playerBoard.placeShips(destroyerCords + 10);
            donotAllowShips(
                playerBoard,
                destroyerCords,
                [-10, -9, -11, -1],
                [0, 10, 20, 19, 21, 11, 9, 1],
                'vertical'
            );
        } else {
            playerBoard.placeShips(destroyerCords + 1);
            donotAllowShips(
                playerBoard,
                destroyerCords,
                [-1, -10, -11, -9, -8],
                [9, 10, 11, 12, 0, 1, 2],
                'horizontal',
                2
            );
        }
        gameInterface.textContent = '';
        if (i !== 3) {
            gameInterface.append(shipPlacementGuide, directionChange);
        }
        gameInterface.appendChild(updatePlayerBoard(playerBoard));
    }

    gameInfo.appendChild(playerForm);
    const runGame = (e) => {
        e.preventDefault();
        if (playerFormInput.value.length > 0) {
            displayGame(playerFormInput.value, playerBoard);
        }
    };
    playerForm.addEventListener('submit', runGame);
};

export default createHomepage;
