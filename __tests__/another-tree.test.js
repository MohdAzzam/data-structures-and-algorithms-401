'use strict';

const Tree = require('../javascript/tree/trees').BinarySearchTree;
const BinaryTree = require('../javascript/tree/trees').BinaryTree;
const Node = require('../javascript/tree/trees').Node;
let tree = null;
beforeAll(() => {
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

    tree = new BinaryTree(one);
});

describe('tests to prove the following functionality for the Tree', () => {
    it('Can successfully instantiate an empty tree', () => {
        let bts = new Tree();
        expect(bts.root).toBeNull();
    });
    it('Can successfully instantiate a tree with a single root node', () => {
        let bts = new Tree();
        bts.add(5);
        expect(bts.root.value).toBe(5);
    });
    it('Can successfully add a left child and right child to a single root node', () => {
        let bts = new Tree();
        bts.add(5);
        bts.add(7);
        bts.add(4);
        expect(bts.root.left.value).toBe(4);
        expect(bts.root.right.value).toBe(7);
    });
    it('Can successfully return a collection from a preorder traversal', () => {
        let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
        let preOrderResult = tree.preOrder();
        expect(preOrderResult).toEqual(expected);
    });
    it('Can successfully return a collection from an inorder traversal', () => {
        let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
        let inOrderResult = tree.inOrder();
        expect(inOrderResult).toEqual(expected);
    });
    it('Can successfully return a collection from a postorder traversal', () => {
        let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
        let postOrderResult = tree.postOrder();
        expect(postOrderResult).toEqual(expected);

    });
    it('Can successfully return a true if the value exist', () => {
        let bts = new Tree();
        bts.add(5);
        bts.add(7);
        bts.add(4);
        expect(bts.contains(5)).toEqual(true);
    });
    it('Can successfully return a true if the value exist', () => {
        let bts = new Tree();
        bts.add(5);
        bts.add(4);
        bts.add(7);
        expect(bts.contains(7)).toEqual(true);
    });
    it('Can successfully return a false if the value not exist', () => {
        let bts = new Tree();
        bts.add(5);
        bts.add(7);
        bts.add(4);
        expect(bts.contains(99)).toEqual(false);
    });

});
