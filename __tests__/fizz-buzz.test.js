'use strict';
const Node = require('../javascript/fizzbuzz-tree/fizzbuzz-tree').Node;
const Ktree = require('../javascript/fizzbuzz-tree/fizzbuzz-tree').Ktree;
const fizzBuzzTree = require('../javascript/fizzbuzz-tree/fizzbuzz-tree').fizzBuzzTree;

let one = new Node(15);
let two = new Node(1);
let three = new Node(3);
let four = new Node(44);
let five = new Node(33);
let six = new Node(100);



// let k = new Ktree(one.value);
// k.root.child = two;
// k.root.child.sibling = three;
// k.root.child.sibling.child = four;
// k.root.child.sibling.child.sibling = five;
// k.root.child.sibling.sibling = six;

// console.log(k.root.child.sibling);

// console.log(fizzBuzzTree(k));

describe('FizzBuzz Function', () => {
    it('return If the value is divisible by 3 and 5, replace the value with “FizzBuzz” ', () => {
        let k = new Ktree(one.value);
        k.root.child = two;
        k.root.child.sibling = three;
        k.root.child.sibling.child = four;
        k.root.child.sibling.child.sibling = five;
        k.root.child.sibling.sibling = six;
        let fizzbuzz=fizzBuzzTree(k);
        expect(fizzbuzz.root.value).toEqual('FizzBuzz');
        expect(fizzbuzz.root.child.value).toEqual('1');
        expect(fizzbuzz.root.child.sibling.value).toEqual('Fizz');
        expect(fizzbuzz.root.child.sibling.child.value).toEqual('44');
    });
});
