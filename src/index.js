import './main.scss';
import createHeader from './modules/header';
import displayGame from './modules/displayGame';
import createHomepage from './modules/homepage';
import updatePlayerBoard from './modules/updatePlayerBoard';
import gameboardFactory from './modules/gameboard';

const gameInfo = document.querySelector('.info');
const gameInterface = document.querySelector('.game-interface');
const header = document.querySelector('header');

createHomepage();
header.appendChild(createHeader());
