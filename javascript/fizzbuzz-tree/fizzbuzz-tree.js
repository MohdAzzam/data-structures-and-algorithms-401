'use strict';

class Node {
    constructor(value){
        this.value = value;
        this.child = null;
        this.sibling = null;
    }
}
class Ktree{
    constructor(value){
        this.root = new Node(value);
    }
}
function fizzBuzzTree(tree) {
    const data = new Ktree(fizBuzz(tree.root.value));
    let current = data.root;
    let traverse = (root, type)=>{
        let node = new Node(fizBuzz(root.value));
        if(type){
            current[type] = node;
            current = current[type];
        }
        let back = current;
        if(root.child){
            traverse(root.child, 'child');
        }
        current = back;
        if(root.sibling){
            traverse(root.sibling, 'sibling');
        }
    };
    traverse(tree.root);
    return data;
}

function fizBuzz (num){
    return (num%3 === 0 && num%5 === 0) ? 'FizzBuzz' : (! (num % 3)) ? 'Fizz' : (! (num % 5) ) ? 'Buzz' : num.toString();
}




// let one = new Node(15);
// let two = new Node(1);
// let three = new Node(3);
// let four = new Node(44);
// let five = new Node(33);
// let six = new Node(100);



// let k = new Ktree(one.value);
// k.root.child=two;
// k.root.child.sibling=three;
// k.root.child.sibling.child=four;
// k.root.child.sibling.child.sibling=five;
// k.root.child.sibling.sibling=six;

// console.log(k.root.child.sibling);

// console.log(fizzBuzzTree(k));

module.exports={
    Node,
    Ktree,
    fizzBuzzTree
};
