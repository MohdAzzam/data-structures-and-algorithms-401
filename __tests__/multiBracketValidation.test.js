'use strict';
const mBV = require('../javascript/multi-bracket-validation/multi-bracket-validation');


describe('Testing multiBracketValidation function', () => {
    it('Return You Did Not Entered Any Of [](){} if you enter just a string', () => {
        expect(mBV('sasas')).toEqual('You Did Not Entered Any Of [](){}');
    });
    it('Return False if you enter a single [ { ( without end it', () => {
        expect(mBV('[')).toBe(false);
    });
    it('Return True if you enter {}(){}', () => {
        expect(mBV('{}(){}')).toBe(true);
    });
    it('Return True if you enter ()[[Extra Characters]]', () => {
        expect(mBV('()[[Extra Characters]]')).toBe(true);
    });
    it('Return True if you enter {}{Code}[Fellows](())', () => {
        expect(mBV('()[[{}{Code}[Fellows](())]]')).toBe(true);
    });
    it('Return false if you enter [({}]', () => {
        expect(mBV('[({}]')).toBe(false);
    });
});

