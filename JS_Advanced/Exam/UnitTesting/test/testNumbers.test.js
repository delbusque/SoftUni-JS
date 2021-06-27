const testNumbers = require('../testNumbers');
const assert = require('chai').assert;

describe('Test sumNumbers functionality', () => {
    it('Should add only numbers', ()=> {
        let num1 = 1;
        let num2 = 2;
        let expected = 3;

        let actual = testNumbers.sumNumbers(num1, num2);
        assert.equal(expected, actual);
    });
    
    it('Should return undefine if not numbers', ()=> {
        let num1 = 's';
        let num2 = 1;
        let expected = undefined;

        let actual = testNumbers.sumNumbers(num1, num2);
        assert.equal(expected, actual);
        
    })
});

describe('Test numberChecker functionality', () => {
   
    it('Throws Nan', ()=> {

        assert.throws(() => testNumbers
        .numberChecker('STrign'), 'The input is not a number!');
    });


    it('Should be odd number', ()=> {
        let input = '243';
        let expected = 'The number is odd!';

        let actual = testNumbers.numberChecker(input);
        assert.equal(expected, actual);
    });

    it('Should be even number', ()=> {
        let input = '242';
        let expected = 'The number is even!';

        let actual = testNumbers.numberChecker(input);
        assert.equal(expected, actual);
    });     
})

describe('Test averageSumArray functionality', () => {
    it('Array should have an average sum', () => {
        let input = [1, 2, 3];
        let expected = 2;

        let actual = testNumbers.averageSumArray(input);
        assert.equal(expected, actual);
    })
})