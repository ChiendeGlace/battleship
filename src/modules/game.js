import updatePlayerBoard from './updatePlayerBoard';
import updateComputerBoard from './updateComputerBoard';

const container = document.querySelector('.container');

const startGame = async (player, computer, playerBoard, computerBoard) => {
    while (
        playerBoard.areAllSunk() == false &&
        computerBoard.areAllSunk() == false
    ) {
        if (player.turn) {
            let userMove = await getUserMove();
            computerBoard.recieveAttack(userMove);
            container.textContent = '';
            container.appendChild(updatePlayerBoard(playerBoard));
            container.appendChild(
                updateComputerBoard(computerBoard, computer, player)
            );
            player.turn = false;
            computer.turn = true;
        } else if (computer.turn) {
            let possibleCords = [];
            for (let i = 0; i < 100; i++) {
                if (
                    playerBoard.board[i].isHit == false &&
                    playerBoard.board[i].isMissed == false
                ) {
                    possibleCords.push(i);
                }
            }
            let randomCords = Math.floor(Math.random() * possibleCords.length);
            playerBoard.recieveAttack(randomCords);
            container.textContent = '';
            container.appendChild(updatePlayerBoard(playerBoard));
            container.appendChild(
                updateComputerBoard(computerBoard, computer, player)
            );
            player.turn = true;
            computer.turn = false;
        }
        if (playerBoard.areAllSunk()) {
            console.log('Computer won!');
            return;
        }
        if (computerBoard.areAllSunk()) {
            console.log('Player won!');
            return 'Player won';
        }
    }
};

export default startGame;
