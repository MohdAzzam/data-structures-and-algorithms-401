'use strict';

const HashTable = require('../javascript/hashTable/hashTable');

describe('testing hash tables', () => {
    let test = new HashTable(1024);

    it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
        test.add('add', 'dad');
        expect(test.contains('add')).toEqual(true);
    });

    it('Retrieving based on a key returns the value stored', () => {
        test.add('mofti', 'hey');
        expect(test.get('mofti')).toEqual('hey');
    });
    it('Successfully returns null for a key that does not exist in the hashtable', () => {
        test.add('mofti', 'hey');
        expect(test.contains('lalal')).toEqual(false);
    });
    it('Successfully handle a collision within the hashtable', () => {
        test.add('melon', 'water');
        test.add('lemon', 'not-water');
        expect(test.get('lemon')).toEqual('not-water');
        expect(test.get('melon')).toEqual('water');
    });
    it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
        test.add('melon', 'water');
        test.add('lemon', 'not-water');
        expect(test.get('lemon')).toEqual('not-water');
    });
    it('Successfully hash a key to an in-range value', () => {
        let index = test.hash('azzam');
        expect(index).toBeGreaterThanOrEqual(0);
        expect(index).toBeLessThan(test.table.length);
    });
});
