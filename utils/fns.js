/**
 * File with all the functions used in the system
 */

// Basic function to use jest testing
function addTwoNumbers(number1, number2){
    return number1 + number2;
}

function multiplTwoNumbers(number1, number2){
    return number1 * number2
}

function addArray(numbers){
    let result = 0;
    for(const singleNumbers of numbers){
        result += singleNumbers;
    }
    return result;
}

module.exports = {
    addTwoNumbers,
    multiplTwoNumbers,
    addArray
}