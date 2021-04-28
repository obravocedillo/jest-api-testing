const { addTwoNumbers } = require('../utils/fns');

describe('Test user cases for functions in utilities foldes', () => {
    test('Test for addTwoNumbers, should reeturn the addition of two numbwers', () => {
       let result =  addTwoNumbers(1,3);
       expect(result).toEqual(4);
    })  
})