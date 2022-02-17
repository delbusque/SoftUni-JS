let rgbToHexColor = require('../RGBtoHex');
let { assert } = require('chai');

describe('Should check rgbToHex functionality', () => {
    it('Should check proper input', () => {
        let input = [1, 2, 3];
        let expectedResult = '#010203';

        let actualResult = rgbToHexColor(...input);
        assert.strictEqual(actualResult, expectedResult);
    });

    it('Should check proper input', () => {
        let input = [0, 0, 0];
        let expectedResult = '#000000';

        let actualResult = rgbToHexColor(...input);
        assert.strictEqual(actualResult, expectedResult);
    });


    it('Should check larger input', () => {
        let input = [1, 2, 3, 4];
        let expectedResult = '#010203';

        let actualResult = rgbToHexColor(...input);
        assert.strictEqual(actualResult, expectedResult);
    });

    it('Should check array of array input', () => {
        let input = {
            1: '1',
            2: '2',
            3: '3'
        };
        let expectedResult = undefined;

        let actualResult = rgbToHexColor(...input);
        assert.strictEqual(actualResult, expectedResult);
    });

    it('Should check improper input', () => {
        let input = [-1, 2, 3];
        let expectedResult = undefined;

        let actualResult = rgbToHexColor(...input);
        assert.strictEqual(actualResult, expectedResult);
    })

    it('Should check different types input', () => {
        let input = [-1, '2', 3];
        let expectedResult = undefined;

        let actualResult = rgbToHexColor(...input);
        assert.strictEqual(actualResult, expectedResult);
    })

    it('Should check shorter input', () => {
        let input = [2, 3];
        let expectedResult = undefined;

        let actualResult = rgbToHexColor(...input);
        assert.strictEqual(actualResult, expectedResult);
    })

    it('Should check equal input', () => {
        let input = [255, 255, 255];
        let expectedResult = '#FFFFFF';

        let actualResult = rgbToHexColor(...input);
        assert.strictEqual(actualResult, expectedResult);
    })

    it('Should check truthy input', () => {
        let input = [2, true, 3];
        let expectedResult = undefined;

        let actualResult = rgbToHexColor(...input);
        assert.strictEqual(actualResult, expectedResult);
    })

    it('Should check floating input', () => {
        let input = [1, 2.2, 3];
        let expectedResult = undefined;

        let actualResult = rgbToHexColor(...input);
        assert.strictEqual(actualResult, expectedResult);
    })

    it('Should check string input', () => {
        let input = '';
        let expectedResult = undefined;

        let actualResult = rgbToHexColor(...input);
        assert.strictEqual(actualResult, expectedResult);
    })

    it('Should check undefined input', () => {
        let input = [1, undefined, 3];
        let expectedResult = undefined;

        let actualResult = rgbToHexColor(...input);
        assert.strictEqual(actualResult, expectedResult);
    })

    it('Should check empty input', () => {
        let input = [];
        let expectedResult = undefined;

        let actualResult = rgbToHexColor(...input);
        assert.strictEqual(actualResult, expectedResult);
    })

    it('Should check totaly empty input', () => {
        let expectedResult = undefined;

        let actualResult = rgbToHexColor();
        assert.strictEqual(actualResult, expectedResult);
    })

    it('Should check NaN input', () => {
        let input = [1, NaN, 3];
        let expectedResult = undefined;

        let actualResult = rgbToHexColor(...input);
        assert.strictEqual(actualResult, expectedResult);
    })

    it('Should check falsy input', () => {
        let input = [1, false, 3];
        let expectedResult = undefined;

        let actualResult = rgbToHexColor(...input);
        assert.strictEqual(actualResult, expectedResult);
    })
})