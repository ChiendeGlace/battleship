import startGame from './game';
import createHeader from './header';
import playerFactory from './player';
import computerFactory from './computer';
import gameboardFactory from './gameboard';
import updatePlayerBoard from './updatePlayerBoard';
import updateComputerBoard from './updateComputerBoard';
import createHomepage from './homepage';

const gameInterface = document.querySelector('.game-interface');
const gameInfo = document.querySelector('.info');
const header = document.querySelector('header');

const toHomepage = () => {
    header.textContent = '';
    gameInfo.textContent = '';
    gameInterface.textContent = '';
    header.appendChild(createHeader());
    gameInfo.appendChild(createHomepage());
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
    computerBoard.placeShips(35);
    computerBoard.placeShips(40);
    computerBoard.placeShips(55);
    gameInterface.textContent = '';
    gameInfo.classList.remove('homepage-info');
    gameInterface.classList.remove('homepage-board');
    gameInterface.appendChild(updatePlayerBoard(playerBoard));
    gameInterface.appendChild(
        updateComputerBoard(computerBoard, computer, player)
    );
    startGame(player, computer, playerBoard, computerBoard);
};

export default displayGame;
