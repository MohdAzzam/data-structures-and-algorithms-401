'use strict';
const quickSort = require('../javascript/quickSort/quickSort');
describe('Testing Quick sort function', () => {
    it('should sort the array in ascending order', () => {
        let arr = [8, 4, 23, 42, 16, 15];
        let pivot= arr.length-1;
        let test = quickSort(arr,0,pivot);
        expect(test).toEqual([4, 8, 15, 16, 23, 42]);
    });
    it('should sort the array in ascending order', () => {
        let arr = [20, 18, 12, 8, 5, -2];
        let pivot= arr.length-1;
        let test = quickSort(arr,0,pivot);

        expect(test).toEqual([-2, 5, 8, 12, 18, 20]);
    });
    it('should sort the array in ascending order', () => {
        let arr = [5, 12, 7, 5, 5, 7];
        let pivot= arr.length-1;
        let test = quickSort(arr,0,pivot);
        expect(test).toEqual([5, 5, 5, 7, 7, 12]);
    });
});
