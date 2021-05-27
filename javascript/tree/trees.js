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
        }
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
        try {
            let results = [];
            let traverse = (node) => {
                if (node.left) traverse(node.left);
                if (node.right) traverse(node.right);
                results.push(node.value);
            }
            traverse(this.root);
            return results;
        } catch (err) {
            console.log(err);
        }
    }
}

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

let s = new BinarySearchTree();
console.log(s.root);


module.exports = {
    BinarySearchTree,
    BinaryTree,
    Node
}
