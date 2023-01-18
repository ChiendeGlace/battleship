import playerFactory from './player';
import computerFactory from './computer';
import gameboardFactory from './gameboard';

const startGame = (name) => {
    const playerOne = playerFactory(name);
    const playerBoard = gameboardFactory();
    const computer = computerFactory();
    const computerBoard = gameboardFactory();
    playerOne.turn = true;
    while (
        playerBoard.areAllSunk() == false &&
        computerBoard.areAllSunk() == false
    ) {
        if (playerOne.turn) {
            if (playerBoard.hit.length > 0) {
                console.log(`You managed to hit: ${playerBoard.hit}`);
            }
            if (playerBoard.missed.length > 0) {
                console.log(`You missed at: ${playerBoard.missed}`);
            }
            const cords = prompt(`It's now your time to hit`);
            while (
                computerBoard.recieveAttack(cords) == 'No such cords' ||
                computerBoard.recieveAttack(cords) == 'Square already attacked'
            ) {
                cords = prompt(`It's now your time to hit`);
            }
            computerBoard.recieveAttack(cords);
            console.log(computerBoard.recieveAttack(cords));
            playerOne.turn = false;
            computer.turn = true;
        } else if (computer.turn) {
            let possibleCords = [];
            for (let i = 0; i < 100; i++) {
                if (
                    playerBoard[i].isHit == false &&
                    playerBoard[i].isMissed == false
                ) {
                    possibleCords.push(i);
                }
            }
            let randomCords = Math.floor(Math.random() * possibleCords.length);
            playerBoard.recieveAttack(randomCords);
            if (
                playerBoard.recieveAttack(randomCords) ==
                `You managed to hit a ship on square ${randomCords}`
            ) {
                console.log(`It's a hit`);
            } else {
                console.log(`It's a miss`);
            }
            playerOne.turn = true;
            computer.turn = false;
        }
        if (playerBoard.areAllSunk()) return 'Computer won';
        if (computerBoard.areAllSunk()) return 'Player won';
    }
};

export default startGame;