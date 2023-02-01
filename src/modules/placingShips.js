import { direction } from './homepage';

const placeShipHomepage = (playerBoard, length) => {
    return new Promise(function (resolve, reject) {
        let shipDirection = direction;
        for (let i = 0; i < 100; i++) {
            if (playerBoard.board[i].hasShip == false) {
                let square = document.getElementById(`player${i}`);
                if (
                    shipDirection == 'vertical' &&
                    i + (length - 1) * 10 < 100
                ) {
                    square.addEventListener('mouseover', (e) => {
                        if (direction !== shipDirection) {
                            return;
                        }
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
                if (
                    shipDirection == 'horizontal' &&
                    i + (length - 1) < i.toString().split('')[0] * 10 + 10
                ) {
                    if ((i < 9 && i + length - 1 < 10) || i > 9) {
                        square.addEventListener('mouseover', (e) => {
                            if (direction !== shipDirection) {
                                return;
                            }
                            e.target.style.backgroundColor = 'red';
                            for (let j = 0; j < length; j++) {
                                let nextSquare = document.getElementById(
                                    `player${i + j}`
                                );
                                nextSquare.style.backgroundColor = 'red';
                            }
                        });
                        square.addEventListener('mouseleave', (e) => {
                            e.target.style.backgroundColor = '#0369a1';
                            for (let j = 0; j < length; j++) {
                                let nextSquare = document.getElementById(
                                    `player${i + j}`
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
        }
    });
};

export default placeShipHomepage;
