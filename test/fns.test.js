const { addTwoNumbers, multiplTwoNumbers, addArray } = require('../utils/fns');

describe('Test user cases for functions in utilities foldes', () => {
    test('Test for addTwoNumbers, should return the addition of two numbwers', () => {
       let result =  addTwoNumbers(1,3);
       expect(result).toEqual(4);
    })  

    test('Test for multiplTwoNumbers, should return the multiplication of two numbers', () => {
        let result = multiplTwoNumbers(2,2);
        expect(result).toEqual(4);
    })

    test('Test for addArray, shoulD return the addition of all the numbers in an array', () => {
        let result = addArray([1,2,3,4,5]);
        expect(result).toEqual(15);
    })
})