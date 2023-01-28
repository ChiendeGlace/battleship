import displayGame from './displayGame';
import startGame from './game';
import gameboardFactory from './gameboard';
import updatePlayerBoard from './updatePlayerBoard';
import placeShipHomepage from './placingShips';

const gameInterface = document.querySelector('.game-interface');
const gameInfo = document.querySelector('.info');

const createHomepage = async () => {
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
    const shipPlacementGuide = document.createElement('h3');
    shipPlacementGuide.textContent = 'Place your carrier';
    gameInterface.appendChild(shipPlacementGuide);
    gameInterface.appendChild(updatePlayerBoard(playerBoard));
    let carrierCords = await placeShipHomepage(playerBoard, 5, 'vertical');
    playerBoard.placeShips(carrierCords);
    playerBoard.placeShips(carrierCords + 10);
    playerBoard.placeShips(carrierCords + 20);
    playerBoard.placeShips(carrierCords + 30);
    playerBoard.placeShips(carrierCords + 40);
    gameInterface.textContent = '';
    gameInterface.appendChild(shipPlacementGuide);
    gameInterface.appendChild(updatePlayerBoard(playerBoard));

    shipPlacementGuide.textContent = 'Place your battleship';
    let battleshipCords = await placeShipHomepage(playerBoard, 4, 'vertical');
    playerBoard.placeShips(battleshipCords);
    playerBoard.placeShips(battleshipCords + 10);
    playerBoard.placeShips(battleshipCords + 20);
    playerBoard.placeShips(battleshipCords + 30);
    gameInterface.textContent = '';
    gameInterface.appendChild(shipPlacementGuide);
    gameInterface.appendChild(updatePlayerBoard(playerBoard));

    for (let i = 0; i < 3; i++) {
        shipPlacementGuide.textContent = 'Place your cruisers';
        let cruiserCords = await placeShipHomepage(playerBoard, 3, 'vertical');
        playerBoard.placeShips(cruiserCords);
        playerBoard.placeShips(cruiserCords + 10);
        playerBoard.placeShips(cruiserCords + 20);
        gameInterface.textContent = '';
        gameInterface.appendChild(shipPlacementGuide);
        gameInterface.appendChild(updatePlayerBoard(playerBoard));
    }
    for (let i = 0; i < 4; i++) {
        shipPlacementGuide.textContent = 'Place your destroyers';
        let destroyerCords = await placeShipHomepage(
            playerBoard,
            2,
            'vertical'
        );
        playerBoard.placeShips(destroyerCords);
        playerBoard.placeShips(destroyerCords + 10);
        gameInterface.textContent = '';
        if (i !== 3) {
            gameInterface.appendChild(shipPlacementGuide);
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
