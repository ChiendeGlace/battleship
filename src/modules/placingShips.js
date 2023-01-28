const gameInterface = document.querySelector('.game-interface');
const gameInfo = document.querySelector('.info');

const placeShipHomepage = (playerBoard, length, direction) => {
    return new Promise(function (resolve, reject) {
        for (let i = 0; i < 100; i++) {
            if (playerBoard.board[i].hasShip == false) {
                let square = document.getElementById(`player${i}`);
                if (direction == 'vertical' && i + ((length - 1) * 10) < 100) {
                    square.addEventListener('mouseover', (e) => {
                        e.target.style.backgroundColor = 'red';
                        for (let j = 0; j < length; j++) {
                            let nextSquare = document.getElementById(
                                `player${i + j * 10}`
                            );
                            nextSquare.style.backgroundColor = 'red';
                        }
                    });
                    square.addEventListener('mouseleave', (e) => {
                        e.target.style.backgroundColor = '#0369a1';
                        for (let j = 0; j < length; j++) {
                            let nextSquare = document.getElementById(
                                `player${i + j * 10}`
                            );
                            nextSquare.style.backgroundColor = '#0369a1';
                        }
                    });
                    square.addEventListener('click', (e) => {
                        resolve(i);
                    });
                }
            }
        }
    });
};

export default placeShipHomepage;
