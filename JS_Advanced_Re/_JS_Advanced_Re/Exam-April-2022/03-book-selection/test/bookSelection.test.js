const bookSelection = require('../bookSelection.js');
const assert = require('chai').assert;
const expect = require(`chai`).expect;

describe("bookSelection functionality", function() {

    describe("Check isGenreSuitable", function() {
        it("Should check a suitable genre", function() {
            let genre = 'Sci-Fi';
            let age = 15;

            let expectedResult = 'Those books are suitable';
            let actualResult = bookSelection.isGenreSuitable(genre, age);

            assert.equal(actualResult, expectedResult)

        });
        it("Should check a non-suitable genre", function() {
            let genre = 'Thriller';
            let age = 11;

            let expectedResult = `Books with ${genre} genre are not suitable for kids at ${age} age`;
            let actualResult = bookSelection.isGenreSuitable(genre, age);

            assert.equal(actualResult, expectedResult)

        });
        it("Should check a non-suitable genre", function() {
            let genre = 'Horror';
            let age = 11;

            let expectedResult = `Books with ${genre} genre are not suitable for kids at ${age} age`;
            let actualResult = bookSelection.isGenreSuitable(genre, age);

            assert.equal(actualResult, expectedResult)

        });
        it("Should check a non-suitable genre", function() {
            let genre = 'Horror';
            let age = -1;

            let expectedResult = `Books with ${genre} genre are not suitable for kids at ${age} age`;
            let actualResult = bookSelection.isGenreSuitable(genre, age);

            assert.equal(actualResult, expectedResult)

        });
    });

    describe("Check isItAffordable", function() {

        it("Should be affordable for buying", function() {
            let price = 10;
            let budget = 20;
            let result = budget - price;

            let expectedResult = `Book bought. You have ${result}$ left`;
            let actualResult = bookSelection.isItAffordable(price, budget);

            assert.equal(actualResult, expectedResult)
        });

        it("Should be affordable for buying", function() {
            let price = -10;
            let budget = 20;
            let result = budget - price;

            let expectedResult = `Book bought. You have ${result}$ left`;
            let actualResult = bookSelection.isItAffordable(price, budget);

            assert.equal(actualResult, expectedResult)
        });


        it("Should be affordable for buying", function() {
            let price = 20;
            let budget = 20;
            let result = budget - price;

            let expectedResult = `Book bought. You have ${result}$ left`;
            let actualResult = bookSelection.isItAffordable(price, budget);

            assert.equal(actualResult, expectedResult)
        });

        it("Should not be affordable for buying", function() {
            let price = 20;
            let budget = 10;
            let result = budget - price;

            let expectedResult = `You don't have enough money`;
            let actualResult = bookSelection.isItAffordable(price, budget);

            assert.equal(actualResult, expectedResult)
        });

        it("Should check for wrong input as a string", function() {
            let price = '20';
            let budget = 10;

            expect(() => bookSelection.isItAffordable(price, budget))
                .to.throw('Invalid input');

        });

        it("Should check for wrong input as undefined", function() {
            let price = undefined;
            let budget = 10;

            expect(() => bookSelection.isItAffordable(price, budget))
                .to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(price, -10))
                .to.throw('Invalid input');
        });

        it("Should check for wrong input as a falsy", function() {
            let price = false;
            let budget = 10;

            expect(() => bookSelection.isItAffordable(price, budget))
                .to.throw('Invalid input');
        });

        it("Should check for wrong input as an array", function() {
            let price = 20;
            let budget = [10];

            expect(() => bookSelection.isItAffordable(price, budget))
                .to.throw('Invalid input');
        });

        it("Should check for wrong input as missing parameter", function() {
            let price = 20;
            let budget = [10];

            expect(() => bookSelection.isItAffordable(price))
                .to.throw('Invalid input');
        });

        it("Should check for wrong input as undefined", function() {
            let price = 20;
            let budget = undefined;

            expect(() => bookSelection.isItAffordable(price, budget))
                .to.throw('Invalid input');
        });


    });

    describe("Checking suitableTitles", function() {

        it("Should check with suitable titles", function() {
            let expectedArr = ['The', 'Godfather'];
            let arr = [{ title: 'The', genre: 'Sci' }, { title: 'Godfather', genre: 'Sci' }];
            let genre = 'Sci';
            expect(bookSelection.suitableTitles(arr, genre))
                .to.eql(expectedArr);
        });

        it("Should check with suitable titles as empty array", function() {
            let expectedArr = [];
            let arr = [];
            let genre = 'Sci';
            expect(bookSelection.suitableTitles(arr, genre))
                .to.eql(expectedArr);
        });

        it("Should check with non-suitable substitles", function() {

            let array = { title: "The Da Vinci Code", genre: "Thriller" };
            let wantedGenre = 'Thriller';

            expect(() => bookSelection.suitableTitles(array, wantedGenre))
                .to.throw('Invalid input');
            expect(() => bookSelection.suitableTitles(123, wantedGenre))
                .to.throw('Invalid input');
            expect(() => bookSelection.suitableTitles(undefined, wantedGenre))
                .to.throw('Invalid input');
        });


        it("Should check with non-suitable substitles as not string", function() {

            let array = [{ title: "The Da Vinci Code", genre: "Thriller" }];
            let wantedGenre = ['Thriller'];

            expect(() => bookSelection.suitableTitles(array, wantedGenre))
                .to.throw('Invalid input');

            expect(() => bookSelection.suitableTitles(array, 123))
                .to.throw('Invalid input');

            expect(() => bookSelection.suitableTitles(array, undefined))
                .to.throw('Invalid input');

            expect(() => bookSelection.suitableTitles(array, NaN))
                .to.throw('Invalid input');

            expect(() => bookSelection.suitableTitles(array, ['hi', 'there']))
                .to.throw('Invalid input');
        });
    });

});