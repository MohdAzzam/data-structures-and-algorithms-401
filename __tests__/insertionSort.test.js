'use strict';
const insertionSort = require('../javascript/insertionSort/insertionSort');

describe('insertion-sort', () => {
    it('return Sorted Array', () => {
        expect(insertionSort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42]);
    });
});
