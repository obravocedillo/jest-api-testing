const Square = require('../classes/square');
jest.mock('../classes/square'); 

beforeEach(() => {
    Square.mockClear();
});
  
describe('All classes tests', () => {
    test('Square test', () => {
        expect(Square).not.toHaveBeenCalled();
        const oliverSquare = new Square();
        const mockGetArea = jest.fn();
        oliverSquare.getArea = mockGetArea;
        mockGetArea.mockReturnValue(4);
        expect(oliverSquare.getArea(6,6)).toEqual(4);
        expect(oliverSquare.getArea).toHaveBeenCalledTimes(1);
        oliverSquare.getArea.mockRestore();
    })
})