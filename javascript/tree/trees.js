'use strict';

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
    // Pre-Order: Root - Left - Right
    // Time : O(n) -> n is the number of nodes
    // Space: O(h) -> h is the height of the tree
    preOrder() {
        let results = [];
        let traverse = (node) => {
            results.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        };
        traverse(this.root);
        return results;
    }
    // In-Order: Left - Root - Right
    // Time : O(n) -> n is the number of nodes
    // Space: O(h) -> h is the height of the tree
    inOrder() {
        let results = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            results.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return results;

    }
    // Post-Order:  Left - Right - Root
    // Time : O(n) -> n is the number of nodes
    // Space: O(h) -> h is the height of the tree
    postOrder() {

        let results = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            results.push(node.value);
        };
        traverse(this.root);
        return results;

    }
    findMaximumValue() {
        let arr = this.postOrder();
        if(arr.length >=1){
            let max = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
            return max;
        }else{
            return 'No Value to check';
        }
    }
}
// class FindMax extends BinaryTree{
//     findMaximumValue() {
//         let arr = this.postOrder();
//         let max = 0;
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > max) {
//                 max = arr[i];
//             }
//         }
//         return max;
//     }
// }
let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;

let tree = new BinaryTree(one);
// let max = new FindMax();


console.log(tree.findMaximumValue());

class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }
    add(value) {
        let node = new Node();
        node.value = value;
        if (this.root === null) {
            this.root = node;
            return this;
        }
        let current = this.root;
        while (current) {
            if (node.value > current.value) {
                if (current.right === null) {
                    current.right = node;
                    return this;
                }
                current = current.right;
            } else if (node.value < current.value) {
                if (current.left === null) {
                    current.left = node;
                    return this;
                }
                current = current.left;
            }
            if (node.value === current.value) {
                return this;
            }
        }
        return this;

    }
    contains(value) {
        let current = this.root;
        if (current.value === value) {
            return true;
        } else {
            while (current) {
                if (value > current.value) {
                    if (current.right === null) {
                        return false;
                    }
                    current = current.right;
                } else if (value < current.value) {
                    if (current.left === null) {
                        return false;
                    }
                    current = current.left;
                }
                if (value === current.value) {
                    return true;
                }
            }

        }
        return false;

    }

}



module.exports = {
    BinarySearchTree,
    BinaryTree,
    Node
};

