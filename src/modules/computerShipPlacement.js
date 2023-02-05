import { donotAllowShips } from './noAdjecent';
export const placeShipsRandomly = (cboard, length, direction) => {
    let index;
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
    if (direction == 'vertical') {
        index = Math.round(Math.random() * 99);
        while (
            index + length * 10 > 100 ||
            conditionsMet(index, 'vertical') == false
        ) {
            index = Math.round(Math.random() * 99);
        }
        cboard.placeShips(index);
        for (let i = 1; i < length; i++) {
            cboard.placeShips(index + i * 10);
        }
    }
    if (direction == 'horizontal') {
        index = Math.round(Math.random() * 99);
        const condition2 = (index, length) => {
            if (index <= 9) {
                console.log('here');
                if (index + (length - 1) >= 10) {
                    return false;
                }
            }
            return true;
        };
        while (
            condition2(index, length) == false ||
            index + (length - 1) >= index.toString().split('')[0] * 10 + 10 ||
            conditionsMet(index, 'horizontal') == false
        ) {
            index = Math.round(Math.random() * 99);
        }
        cboard.placeShips(index);
        for (let i = 1; i < length; i++) {
            cboard.placeShips(index + i);
        }
    }
    if (direction == 'vertical' && length == 5) {
        donotAllowShips(
            cboard,
            index,
            [-10, -9, -11, -1],
            [0, 10, 20, 30, 40, 49, 50, 51, 39, 41, 29, 31, 19, 21, 11, 9, 1],
            'vertical'
        );
    } else if (direction == 'vertical' && length == 4) {
        donotAllowShips(
            cboard,
            index,
            [-10, -9, -11, -1],
            [0, 10, 20, 30, 40, 39, 41, 29, 31, 19, 21, 11, 9, 1],
            'vertical'
        );
    } else if (direction == 'vertical' && length == 3) {
        donotAllowShips(
            cboard,
            index,
            [-10, -9, -11, -1],
            [0, 10, 20, 30, 29, 31, 19, 21, 11, 9, 1],
            'vertical'
        );
    } else if (direction == 'vertical' && length == 2) {
        donotAllowShips(
            cboard,
            index,
            [-10, -9, -11, -1],
            [0, 10, 20, 19, 21, 11, 9, 1],
            'vertical'
        );
    }
    if (direction == 'horizontal' && length == 5) {
        donotAllowShips(
            cboard,
            index,
            [-1, -10, -11, -9, -8, -7, -6, -5],
            [5, 9, 10, 11, 12, 13, 14, 15, 0, 1, 2, 3, 4],
            'horizontal',
            5
        );
    } else if (direction == 'horizontal' && length == 4) {
        donotAllowShips(
            cboard,
            index,
            [-1, -10, -11, -9, -8, -7, -6],
            [4, 9, 10, 11, 12, 13, 14, 0, 1, 2, 3],
            'horizontal',
            4
        );
    } else if (direction == 'horizontal' && length == 3) {
        donotAllowShips(
            cboard,
            index,
            [-1, -10, -11, -9, -8, -7],
            [9, 10, 11, 12, 13, 0, 1, 2, 3],
            'horizontal',
            3
        );
    } else if (direction == 'horizontal' && length == 2) {
        donotAllowShips(
            cboard,
            index,
            [-1, -10, -11, -9, -8],
            [9, 10, 11, 12, 0, 1, 2],
            'horizontal',
            2
        );
    }
    return index;
};
