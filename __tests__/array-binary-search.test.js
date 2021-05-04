const binarySearch=require('../javascript/arrays/challenges/array-binary-search/array-binary-search');


describe('Serach over Array using binary search algo',()=>{
    it('it should return the index of value',()=>{
        expect(binarySearch([4,8,15,16,23,42], 15)).toEqual(2);
    });
    it('it should return -1 if the value not exisit in the Array',()=>{
        expect(binarySearch([11,22,33,44,55,66,77], 90	)).toEqual(-1);
    });
});
