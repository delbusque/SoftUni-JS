let isSymmetric = require('../checkForSymmetry');
let assert = require('chai').assert;

describe('Should check symetric functionality', () => {
    it('Should check symetric input', () => {
        let input = [1, 2, 1];
        let expectedResult = true;
        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    });

    it('Should check non symetric input', () => {
        let input = [1, 2, 2];
        let expectedResult = false;
        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    })

    it('Should check different input types', () => {
        let input = ['1', 2, 1];
        let expectedResult = false;
        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    })

    it('Should check empty array', () => {
        let input = [];
        let expectedResult = true;
        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    })

    it('Should check undefined', () => {
        let input = undefined;
        let expectedResult = false;
        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    })
})