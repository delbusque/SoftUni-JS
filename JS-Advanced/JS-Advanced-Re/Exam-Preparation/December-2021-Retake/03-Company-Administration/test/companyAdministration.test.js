const companyAdministration = require('../companyAdministration.js');
const assert = require('chai').assert;
const expect = require(`chai`).expect;

describe("Testing Company Administration", function() {

    describe("Testing hiringEmployee", function() {
        it("Should check hirring experienced programmer", function() {
            let name = 'John';
            let position = 'Programmer';
            let yearsExperience = 3;

            let expectedResult = `${name} was successfully hired for the position ${position}.`

            let actualResult = companyAdministration.hiringEmployee(name, position, yearsExperience);

            assert.equal(actualResult, expectedResult)
        });

        it("Should check hirring not experienced programer", function() {
            let name = 'John';
            let position = 'Programmer';
            let yearsExperience = 1;

            let expectedResult = `${name} is not approved for this position.`

            let actualResult = companyAdministration.hiringEmployee(name, position, yearsExperience);

            assert.equal(actualResult, expectedResult)
        });

        it("Should check hirring not a programer", function() {
            let name = 'John';
            let position = 'Engeneer';
            let yearsExperience = 1;

            expect(() => companyAdministration.hiringEmployee(name, position, yearsExperience))
                .to.throw('We are not looking for workers for this position.');
        });
    });

    describe("Checking calculating salary", function() {
        it("Should check over 160 hours", function() {
            let hours = 161
            let payPerHour = 15;
            let totalAmount = payPerHour * hours;

            let expectedResult = totalAmount + 1000;
            let actualResult = companyAdministration.calculateSalary(hours);

            assert.equal(actualResult, expectedResult)
        });

        it("Should check under 160 hours", function() {
            let hours = 159;
            let payPerHour = 15;
            let totalAmount = payPerHour * hours;

            let expectedResult = totalAmount;
            let actualResult = companyAdministration.calculateSalary(hours);

            assert.equal(actualResult, expectedResult)
        });


        it("Should checkfor 0 hours", function() {
            let hours = 0;
            let payPerHour = 15;
            let totalAmount = payPerHour * hours;

            let expectedResult = totalAmount;
            let actualResult = companyAdministration.calculateSalary(hours);

            assert.equal(actualResult, expectedResult)
        });


        it("Should check under 0 hours", function() {
            let hours = -1
            expect(() => companyAdministration.calculateSalary(hours)).to.throw('Invalid hours')
        });
        it("Should check hours if string", function() {
            let hours = '-1';
            expect(() => companyAdministration.calculateSalary(hours)).to.throw('Invalid hours')
        });
        it("Should check hours if arr", function() {
            let hours = [1, 2, 3];
            expect(() => companyAdministration.calculateSalary(hours)).to.throw('Invalid hours')
        });
        it("Should check hours if undefined", function() {
            let hours = undefined;
            expect(() => companyAdministration.calculateSalary(hours)).to.throw('Invalid hours')
        });
    });

    describe("Checking firing employee", function() {
        it("Should check for new list after fired employee on correct input", function() {
            let employees = ['Ivan', 'Peter'];
            let index = 1;

            let expectedResult = ['Ivan']
            let actualResult = companyAdministration.firedEmployee(employees, index);

            assert.equal(actualResult, expectedResult)
        });

        it("Should check if employees is not an array", function() {
            let employees = 'Ivan';
            let index = 1;
            expect(() => companyAdministration.firedEmployee(employees, index)).to.throw('Invalid input')
        });



        it("Should check if index is not an integer", function() {
            let employees = ['Ivan', 'Peter'];
            let index = 1.1;
            expect(() => companyAdministration.firedEmployee(employees, index)).to.throw('Invalid input')
        });
        it("Should check if index is negativ number", function() {
            let employees = ['Ivan', 'Peter'];
            let index = -1;
            expect(() => companyAdministration.firedEmployee(employees, index)).to.throw('Invalid input')
        });
        it("Should check if index is bigger than employees array length", function() {
            let employees = ['Ivan', 'Peter'];
            let index = 2;
            expect(() => companyAdministration.firedEmployee(employees, index)).to.throw('Invalid input')
        });
    });

});