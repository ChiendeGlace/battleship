import './main.scss';
import createHeader from './modules/header';
import displayGame from './modules/displayGame';
import createHomepage from './modules/homepage';
import updatePlayerBoard from './modules/updatePlayerBoard';
import gameboardFactory from './modules/gameboard';

const gameInfo = document.querySelector('.info');
const gameInterface = document.querySelector('.game-interface');
const header = document.querySelector('header');

/* let testBoard = gameboardFactory();
testBoard.placeShips(10);
testBoard.placeShips(15);
testBoard.placeShips(20);
testBoard.placeShips(30);
testBoard.recieveAttack(4);
testBoard.recieveAttack(14);
testBoard.recieveAttack(55);
testBoard.recieveAttack(30); */
gameInfo.appendChild(createHomepage());
header.appendChild(createHeader());
//gameInterface.appendChild(updatePlayerBoard(testBoard));
