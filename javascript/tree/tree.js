'use strict';

/**
 * Node class
 * 
 * @property {Number} value
 * @property {BinaryTree|Null} left
 * @property {BinaryTree|Null} right
 */
class Node {

    /**
     * Creates node form value.
     * 
     * @param {Number} value 
     */
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

/**
 * BinaryTree
 * 
 * @property {Node} root
 */
class BinaryTree {

    /**
     * Creates binary tree from root.
     * 
     * @param {Node} root
     * @see Node
     */
    constructor(root = null) {
        this.root = root;
    }

    /**
     * Pre-order: root >> left >> right
     *
     * @returns {Array}
     */
    preOrder() {

        let result = [];
        result.push(this.root.value);
        if (this.root.left) {
            result = result.concat(this.root.left.preOrder());
        }

        if (this.root.right) {
            result = result.concat(this.root.right.preOrder());
        }
        return result;
    }

    /**
     * In-order: left >> root >> right
     *
     * @returns {Array}
     */
    inOrder() {
        let result = [];
        if (this.root.left) {
            result = result.concat(this.root.left.inOrder());
        }

        result.push(this.root.value);

        if (this.root.right) {
            result = result.concat(this.root.right.inOrder());
        }

        return result;
    }

    /**
     * Post-order: left >> right >> root
     *
     * @returns {Array}
     */
    postOrder() {
        let result = [];
        if (this.root.left) {
            result = result.concat(this.root.left.postOrder());
        }

        if (this.root.right) {
            result = result.concat(this.root.right.postOrder());
        }
        result.push(this.root.value);

        return result;
    }

    /**
     * Add value to the tree depend if it greater than the root 
     * add it  the right of the root else add it to  left
     * 
     * @param {Number} value 
     */
    add(value) {
        if (this.root === null) {
            let node = new Node(value);
            this.root = node;

            return;
        }

        if (this.root.value > value) {
            if (!this.root.left) {
                this.root.left = new BinaryTree();
            }
            this.root.left.add(value);
        } else {
            if (!this.root.right) {
                this.root.right = new BinaryTree();
            }
            this.root.right.add(value);
        }
    }

    /**
     * Check if the value contains in tree
     *
     * @param {Number} value 
     * @returns {boolean} 
     */
    contains(value) {
        if (this.root.value === value) {
            return true;
        }

        if (this.root.value > value && this.root.left) {
            return this.root.left.contains(value);
        }

        if (this.root.value < value && this.root.right) {
            return this.root.right.contains(value);
        }

        return false;
    }

}

/**
 * BinarySearchTree
 * 
 * @property {BinaryTree} tree
 */
class BinarySearchTree {

    /**
     * Creates binary search tree.
     */
    constructor() {
        this.tree = new BinaryTree();
    }

    /**
     * Add new node to tree
     * 
     * @param {Number} value 
     */
    add(value) {
        this.tree.add(value);
    }

    /**
     * Check if current tree contains the value
     * 
     * @param {Number} value 
     * @example current tree = [1,2,3] and the value = 1 this function will return true otherwise will return false
     * @returns {Boolean}
     */
    contains(value) {
        return this.tree.contains(value);
    }

}




module.exports = BinarySearchTree;
