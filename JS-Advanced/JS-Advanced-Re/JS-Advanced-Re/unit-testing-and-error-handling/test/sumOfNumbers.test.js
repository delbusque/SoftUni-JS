let sum = require('../sumOfNumbers');
let assert = require('chai').assert;

it('Should take positive numbers', () => {
    let numbers = [1, 2, 3, 4, 5];
    let expectedResult = 15;

    let actualResult = sum(numbers);

    assert.equal(actualResult, expectedResult);
});

it('Should take empty array', () => {
    let numbers = [];
    let expectedResult = 0;

    let actualResult = sum(numbers);

    assert.equal(actualResult, expectedResult);
});

it('Should be notNan', () => {
    let numbers = ['hello 4 of us'];
    let expectedResult = NaN;

    let actualResult = sum(numbers);

    assert.isNaN(actualResult, expectedResult);
});