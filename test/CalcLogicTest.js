let CalcLogic = require('../src/utils/CalcLogic').default
let assert = require('assert')

describe('CalcLogicTest', function() {
    describe('sum', () => {
        it(`1 + 1 should be equals to 2`, () => { assert.equal(new CalcLogic().sum(1, 1), 2) })
        it(`-1 + 1 should be equals to 0`, () => { assert.equal(new CalcLogic().sum(-1, 1), 0) })
        it(`11 + 22 should be equals to 33`, () => { assert.equal(new CalcLogic().sum(11, 22), 33) })
    })

    describe('divide', () => {
        it('1 / 1 should be equals to 1', () => { assert.equal(new CalcLogic().divide(1, 1), 1) });
        it('-1 / 5 should be equals to -0.2', () => { assert.equal(new CalcLogic().divide(-1, 5), -0.2) });
        it('1 / 0 should be equals to Infinity', () => { assert.equal(new CalcLogic().divide(1, 0), 'Infinity') });
        it('0 / 1 should be equals to 0', () => { assert.equal(new CalcLogic().divide(0, 1), 0) });
    })

    describe('remainder of division', () => {
        it('1 % 1 should be equals to 0', () => { assert.equal(new CalcLogic().remainderOfDivision(1, 1), 0) });
        it('7 % 2 should be equals to 1', () => { assert.equal(new CalcLogic().remainderOfDivision(7, 2), 1) });
    })

    describe('highest prime number', () => {

        before(() => {
            console.log('\t!!! highest prime number tested until 20 millions')
        })

        it('Max prime number from 0 to 100 is 97', () => { assert.equal(new CalcLogic().highestPrimeNumber(0, 100), 97) });
        it('Max prime number from 0 to 1 000 is 997', () => { assert.equal(new CalcLogic().highestPrimeNumber(0, 1000), 997) });
        it('Max prime number from 0 to 1 999 999 is 1 999 993', () => { assert.equal(new CalcLogic().highestPrimeNumber(0, 1999999), 1999993) });
        it('Max prime number from 0 to 9 999 999 is 9 999 991', () => { assert.equal(new CalcLogic().highestPrimeNumber(0, 9999999),9999991) });
        it('Max prime number from 17 000 000 to 17 999 999 is 17 999 987', () => { assert.equal(new CalcLogic().highestPrimeNumber(17000000, 17999999),17999987) });
        it('Max prime number from 10 000 000 to 19 999 998 is 19 999 981', () => { assert.equal(new CalcLogic().highestPrimeNumber(10000000, 19999998),19999981) });
    })
});
