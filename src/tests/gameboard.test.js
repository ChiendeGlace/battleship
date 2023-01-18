import gameboardFactory from '../modules/gameboard';

describe('Tests placing ships', () => {
    let testBoard;
    beforeEach(() => {
        testBoard = gameboardFactory();
    });
    it('Places ships on specific cords', () => {
        testBoard.placeShips(5);
        expect(testBoard.board[5]).toEqual({
            isHit: false,
            hasShip: true,
            isMissed: false,
        });
    });
    it('Places multiples ships', () => {
        testBoard.placeShips(5);
        testBoard.placeShips(11);
        expect([testBoard.board[5], testBoard.board[11]]).toEqual([
            { isHit: false, hasShip: true, isMissed: false },
            { isHit: false, hasShip: true, isMissed: false },
        ]);
    });
    it('Does not allow to place ships if the square is taken', () => {
        testBoard.placeShips(5);
        expect(testBoard.placeShips(5)).toBe('Ship already placed');
    });
});

describe('Tests getting hit', () => {
    let testBoard;
    beforeEach(() => {
        testBoard = gameboardFactory();
    });
    it('Recieves a hit', () => {
        testBoard.placeShips(5);
        expect(testBoard.recieveAttack(5)).toBe(
            `You managed to hit a ship on square 5`
        );
    });
    it('Recieves a miss', () => {
        testBoard.placeShips(3);
        expect(testBoard.recieveAttack(5)).toBe('You missed');
    });
    it('Square already attacked', () => {
        testBoard.placeShips(5);
        testBoard.recieveAttack(5);
        expect(testBoard.recieveAttack(5)).toBe('Square already attacked');
    });
    it('Square out of range', () => {
        testBoard.placeShips(5);
        expect(testBoard.recieveAttack(105)).toBe('No such cords');
    });
    it('Adds miss index', () => {
        testBoard.placeShips(5);
        testBoard.recieveAttack(10);
        testBoard.recieveAttack(11);
        expect(testBoard.missed).toEqual([10, 11]);
    });
    it('Adds hit index', () => {
        testBoard.placeShips(10);
        testBoard.placeShips(11);
        testBoard.recieveAttack(10);
        testBoard.recieveAttack(11);
        expect(testBoard.hit).toEqual([10, 11]);
    });
    it('Changes object value to hit', () => {
        testBoard.placeShips(5);
        testBoard.recieveAttack(5);
        expect(testBoard.board[5]).toEqual({
            isHit: true,
            hasShip: true,
            isMissed: false,
        });
    });
    it('Changes object value to missed', () => {
        testBoard.recieveAttack(10);
        expect(testBoard.board[10]).toEqual({
            isHit: false,
            hasShip: false,
            isMissed: true,
        });
    });
});

describe('Tests areAllSunk function', () => {
        let testBoard;
    beforeEach(() => {
        testBoard = gameboardFactory();
    });
    it('Not ships are sunk', () => {
        testBoard.placeShips(5);
        testBoard.placeShips(60);
        testBoard.recieveAttack(5);
        expect(testBoard.areAllSunk()).toBe(false);
    })
    it('All ships are sunk', () => {
        testBoard.placeShips(5);
        testBoard.placeShips(60);
        testBoard.recieveAttack(5);
        testBoard.recieveAttack(60);
        expect(testBoard.areAllSunk()).toBe(true);
    })
})
