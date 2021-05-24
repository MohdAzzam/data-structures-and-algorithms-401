'use strict';

const animalShelter = require('../javascript/fifoAnimalShelter/fifo-animal-shelter');

describe('Test Animal Shelter Class', () => {
    it('create instance of class', () => {
        let animal = new animalShelter();
        expect(animal.cat).toEqual([]);
    });
    it('enque to the cat ', () => {
        let animal = new animalShelter();
        animal.enqueue('cat');
        expect(animal.cat).toEqual([{ type: 'cat' }]);
    });
    it('dequeue to the cat ', () => {
        let animal = new animalShelter();
        animal.enqueue('cat');
        expect(animal.dequeue('cat').cat).toEqual([]);
    });
    it('enque to the dog ', () => {
        let animal = new animalShelter();
        animal.enqueue('dog');
        expect(animal.dog).toEqual([{ type: 'dog' }]);
    });
    it('enque to the dog more than one value', () => {
        let animal = new animalShelter();
        animal.enqueue('dog');
        animal.enqueue('dog');
        animal.enqueue('dog');
        expect(animal.dog).toEqual([{ type: 'dog' }, { type: 'dog' }, { type: 'dog' }]);
    });
    it('dequeue from the dog  one value', () => {
        let animal = new animalShelter();
        animal.enqueue('dog');
        animal.dequeue('dog');
        expect(animal.dog).toEqual([]);
    });
    it('dequeue from empty animal Should return null', () => {
        let animal = new animalShelter();
        expect(animal.dequeue('dog')).toEqual(null);
    });
    it('enquee with wroung value', () => {
        let animal = new animalShelter();
        expect(animal.enqueue('dogz')).toEqual('Should Add Dog Or Cat Queue');

    });
    it('enqueu dog ',()=>{
        let animal = new animalShelter();
        animal.enqueue('dog');
        animal.enqueue('dog');
        animal.enqueue('dog');
        animal.dequeue('dog');
        expect(animal.dog).toEqual([{ type: 'dog' },{type:'dog'}]);
    });
});
