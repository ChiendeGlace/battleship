import updatePlayerBoard from './updatePlayerBoard';
import updateComputerBoard from './updateComputerBoard';
import updateInformation from './info';

let gameStatus = 0;
export const changeGameStatus = () => {
    if (gameStatus == 0) {
        gameStatus = 1;
    } else {
        gameStatus = 0;
    }
};

const getUserMove = (computerBoard) => {
    return new Promise(function (resolve, reject) {
        for (let i = 0; i < 100; i++) {
            if (
                computerBoard.board[i].isHit == false &&
                computerBoard.board[i].isMissed == false
            ) {
                let square = document.getElementById(i);
                square.addEventListener('click', (e) => {
                    resolve(e.target.id);
                });
            }
        }
    });
};

const gameInterface = document.querySelector('.game-interface');
const gameInfo = document.querySelector('.info');

export const startGame = async (
    player,
    computer,
    playerBoard,
    computerBoard
) => {
    while (
        playerBoard.areAllSunk() == false &&
        computerBoard.areAllSunk() == false
    ) {
        if (player.turn) {
            gameInfo.textContent = '';
            gameInfo.appendChild(
                updateInformation(
                    player.name,
                    playerBoard,
                    computerBoard,
                    `${player.name} is attempting an attack...`
                )
            );
            let userMove = await getUserMove(computerBoard);
            if (gameStatus == 0) {
                return;
            }
            gameInfo.textContent = '';
            gameInterface.textContent = '';
            let result = computerBoard.recieveAttack(userMove);
            if (result == 'You missed') {
                gameInfo.appendChild(
                    updateInformation(
                        player.name,
                        playerBoard,
                        computerBoard,
                        `${player.name} missed!`
                    )
                );
            } else if (
                result == `You managed to hit a ship on square ${userMove}`
            ) {
                gameInfo.appendChild(
                    updateInformation(
                        player.name,
                        playerBoard,
                        computerBoard,
                        `${player.name} managed to hit a ship on square ${userMove}`
                    )
                );
            }
            gameInterface.appendChild(updatePlayerBoard(playerBoard));
            gameInterface.appendChild(
                updateComputerBoard(computerBoard, computer, player)
            );
            const changePlayer = () => {
                return new Promise(function (resolve, reject) {
                    setTimeout(() => {
                        resolve('computer');
                    }, 1500);
                });
            };
            let turn = await changePlayer();
            if (turn == 'computer') {
                player.turn = false;
                computer.turn = true;
            }
        } else if (computer.turn) {
            gameInfo.textContent = '';
            gameInfo.appendChild(
                updateInformation(
                    player.name,
                    playerBoard,
                    computerBoard,
                    `Computer is attempting an attack...`
                )
            );
            let possibleCords = [];
            for (let i = 0; i < 100; i++) {
                if (
                    playerBoard.board[i].isHit == false &&
                    playerBoard.board[i].isMissed == false
                ) {
                    possibleCords.push(i);
                }
            }
            const getRandomCords = () => {
                return new Promise(function (resolve, reject) {
                    setTimeout(() => {
                        resolve(
                            Math.floor(Math.random() * possibleCords.length)
                        );
                    }, 2500);
                });
            };
            let randomCords = await getRandomCords();
            let result = playerBoard.recieveAttack(randomCords);
            if (gameStatus == 0) {
                return;
            }
            gameInfo.textContent = '';
            gameInterface.textContent = '';
            if (result == 'You missed') {
                gameInfo.appendChild(
                    updateInformation(
                        player.name,
                        playerBoard,
                        computerBoard,
                        `Computer missed!`
                    )
                );
            } else if (
                result == `You managed to hit a ship on square ${randomCords}`
            ) {
                gameInfo.appendChild(
                    updateInformation(
                        player.name,
                        playerBoard,
                        computerBoard,
                        `Computer managed to hit a ship on square ${randomCords}`
                    )
                );
            }
            gameInterface.appendChild(updatePlayerBoard(playerBoard));
            gameInterface.appendChild(
                updateComputerBoard(computerBoard, computer, player)
            );
            const changePlayer = () => {
                return new Promise(function (resolve, reject) {
                    setTimeout(() => {
                        resolve('player');
                    }, 1500);
                });
            };
            let turn = await changePlayer();
            if (turn == 'player') {
                player.turn = true;
                computer.turn = false;
            }
        }
        if (playerBoard.areAllSunk()) {
            gameInfo.textContent = '';
            gameInfo.appendChild(
                updateInformation(
                    player.name,
                    playerBoard,
                    computerBoard,
                    `Computer won!`
                )
            );
            return;
        }
        if (computerBoard.areAllSunk()) {
            gameInfo.textContent = '';
            gameInfo.appendChild(
                updateInformation(
                    player.name,
                    playerBoard,
                    computerBoard,
                    `${player.name} won!`
                )
            );
            return;
        }
    }
};
