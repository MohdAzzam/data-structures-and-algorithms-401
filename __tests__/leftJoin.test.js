const leftJoin = require('../javascript/left-join/leftJoin');
const Hash = require('../javascript/hashTable/hashTable');
let hashOne = new Hash(1024);

hashOne.add('fond', 'enamored');
hashOne.add('warth', 'anger');
hashOne.add('diligent', 'employed');
hashOne.add('outfit', 'garb');
hashOne.add('guide', 'usher');


let hashTwo = new Hash(1024);

hashTwo.add('fond', 'averse');
hashTwo.add('warth', 'delight');
hashTwo.add('diligent', 'idle');
hashTwo.add('guide', 'follow');
hashTwo.add('flow', 'jam');

describe('test Left Join ', () => {
    it('Left Join ', () => {
        let arr = leftJoin(hashOne, hashTwo);
        console.log(arr);
        expect(arr).toEqual([
            ['warth', 'anger', 'delight'],
            ['outfit', 'garb', 'NULL'],
            ['diligent', 'employed', 'idle'],
            ['guide', 'usher', 'follow'],
            ['fond', 'enamored', 'averse']
        ]);
    });
});
