import startGame from './game';
import playerFactory from './player';
import computerFactory from './computer';
import gameboardFactory from './gameboard';
import updatePlayerBoard from './updatePlayerBoard';
import updateComputerBoard from './updateComputerBoard';

const container = document.querySelector('.container');

const displayGame = () => {
    const player = playerFactory('Admiral Si');
    const playerBoard = gameboardFactory();
    const computer = computerFactory();
    const computerBoard = gameboardFactory();
    player.turn = true;
    playerBoard.placeShips(10);
    playerBoard.placeShips(15);
    playerBoard.placeShips(20);
    computerBoard.placeShips(35);
    computerBoard.placeShips(40);
    computerBoard.placeShips(55);
    container.appendChild(updatePlayerBoard(playerBoard));
    container.appendChild(updateComputerBoard(computerBoard, computer, player));
    startGame(player, computer, playerBoard, computerBoard);
};

export default displayGame;
