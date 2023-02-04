import { direction } from './homepage';

const conditionsMet = (index, direction) => {
    if (direction == 'vertical') {
        for (let i = 0; i < length; i++) {
            if (cboard.board[index + i * 10].canHaveShip == false) {
                return false;
            }
        }
    } else if (direction == 'horizontal') {
        for (let i = 0; i < length; i++) {
            if (cboard.board[index + i].canHaveShip == false) {
                return false;
            }
        }
    }
    return true;
};

const placeShipHomepage = (playerBoard, length) => {
    return new Promise(function (resolve, reject) {
        let shipDirection = direction;
        for (let i = 0; i < 100; i++) {
            let square = document.getElementById(`player${i}`);
            if (
                playerBoard.board[i].hasShip == false &&
                playerBoard.board[i].canHaveShip == true
            ) {
                if (
                    shipDirection == 'vertical' &&
                    i + (length - 1) * 10 < 100
                ) {
                    square.addEventListener('mouseover', (e) => {
                        if (shipDirection !== direction) {
                            return;
                        }
                        if (
                            playerBoard.board[i + (length - 1) * 10]
                                .canHaveShip &&
                            direction == 'vertical'
                        ) {
                            e.target.style.backgroundColor = 'red';
                            for (let j = 0; j < length; j++) {
                                let nextSquare = document.getElementById(
                                    `player${i + j * 10}`
                                );
                                nextSquare.style.backgroundColor = 'red';
                            }
                        }
                    });
                    square.addEventListener('mouseleave', (e) => {
                        if (
                            playerBoard.board[i + (length - 1) * 10]
                                .canHaveShip &&
                            direction == 'vertical'
                        ) {
                            e.target.style.backgroundColor = '#0369a1';
                            for (let j = 0; j < length; j++) {
                                let nextSquare = document.getElementById(
                                    `player${i + j * 10}`
                                );
                                nextSquare.style.backgroundColor = '#0369a1';
                            }
                        }
                    });
                } else if (
                    direction == 'horizontal' &&
                    i + (length - 1) < i.toString().split('')[0] * 10 + 10
                ) {
                    if ((i < 9 && i + length - 1 < 10) || i > 9) {
                        square.addEventListener('mouseover', (e) => {
                            if (shipDirection !== direction) {
                                return;
                            }
                            if (
                                playerBoard.board[i + length - 1].canHaveShip &&
                                direction == 'horizontal'
                            ) {
                                e.target.style.backgroundColor = 'red';
                                for (let j = 0; j < length; j++) {
                                    let nextSquare = document.getElementById(
                                        `player${i + j}`
                                    );
                                    nextSquare.style.backgroundColor = 'red';
                                }
                            }
                        });
                        square.addEventListener('mouseleave', (e) => {
                            if (
                                playerBoard.board[i + length - 1].canHaveShip &&
                                direction == 'horizontal'
                            ) {
                                e.target.style.backgroundColor = '#0369a1';
                                for (let j = 0; j < length; j++) {
                                    let nextSquare = document.getElementById(
                                        `player${i + j}`
                                    );
                                    nextSquare.style.backgroundColor =
                                        '#0369a1';
                                }
                            }
                        });
                    }
                }
                square.addEventListener('click', (e) => {
                    if (
                        direction == 'vertical' &&
                        playerBoard.board[i + (length - 1) * 10].canHaveShip &&
                        i + (length - 1) * 10 < 100
                    ) {
                        resolve(i);
                    } else if (
                        ((direction == 'horizontal' &&
                            i < 9 &&
                            i + length - 1 < 10) ||
                            i > 9) &&
                        playerBoard.board[i + length - 1].canHaveShip &&
                        i + (length - 1) < i.toString().split('')[0] * 10 + 10
                    ) {
                        resolve(i);
                    }
                });
            }
        }
    });
};

export default placeShipHomepage;
