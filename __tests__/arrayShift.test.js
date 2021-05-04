'use strict';
const insertShiftArray=require('../javascript/arrays/challenges/arrayShift/arrayShift');


describe(' Array it should return new array in the midel of it a number we send',()=>{
    it('Should Return Array with new value in the middel',()=>{
        expect(insertShiftArray([2,4,6,8], 5)).toEqual([2,4,5,6,8]);
    });
    it('Should Return Array with new value in the middel',()=>{
        expect(insertShiftArray([4,8,15,23,42], 16)).toEqual([4,8,15,16,23,42]);
    });
});
// after discussing with our teacher I comment this and add it to the same describe 
// describe('Even Array it should return new array in the midel of it a number we send',()=>{
//     it('Should Return Array with new value in the middel',()=>{
//         expect(insertShiftArray([4,8,15,23,42], 16)).toEqual([4,8,15,16,23,42]);
//     });
// });

