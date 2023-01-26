import displayGame from './displayGame';
import startGame from './game';

const gameInterface = document.querySelector('.game-interface');
const gameInfo = document.querySelector('.info');

const createHomepage = () => {
    const playerForm = document.createElement('form');
    const playerFormLabel = document.createElement('label');
    playerFormLabel.textContent = 'Input player name';
    const playerFormInput = document.createElement('input');
    playerFormInput.placeholder = 'Johnny';
    const playerFormSubmit = document.createElement('button');
    playerFormSubmit.textContent = 'Submit';
    playerForm.append(playerFormLabel, playerFormInput, playerFormSubmit);

    const runGame = (e) => {
        e.preventDefault();
        if (playerFormInput.value.length > 0) {
            displayGame(playerFormInput.value);
        }
    };
    playerForm.addEventListener('submit', runGame);
    return playerForm;
};

export default createHomepage;
