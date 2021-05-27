'use strict';

const Tree = require('../javascript/tree/tree');



describe('tests to prove the following functionality for the Tree', () => {
    it('Can successfully instantiate an empty tree', () => {
        let bts = new Tree();
        expect(bts.tree.root).toBeNull();
    });
    it('Can successfully instantiate a tree with a single root node', () => {
        let bts = new Tree();
        bts.add(5);
        expect(bts.tree.root.value).toBe(5);
    });
    it('Can successfully add a left child and right child to a single root node', () => {
        let bts = new Tree();
        bts.add(5);
        bts.add(7);
        bts.add(4);
        expect(bts.tree.root.left.root.value).toBe(4);
        expect(bts.tree.root.right.root.value).toBe(7);
    });
    it('Can successfully return a collection from a preorder traversal', () => {
        let bts = new Tree();
        bts.add(5);
        bts.add(7);
        bts.add(4);
        expect(bts.tree.preOrder()).toEqual([5,4,7]);
    });
    it('Can successfully return a collection from an inorder traversal', () => {
        let bts = new Tree();
        bts.add(5);
        bts.add(7);
        bts.add(4);
        expect(bts.tree.inOrder()).toEqual([4,5,7]);
    });
    it('Can successfully return a collection from a postorder traversal', () => {
        let bts = new Tree();
        bts.add(5);
        bts.add(7);
        bts.add(4);
        expect(bts.tree.postOrder()).toEqual([4,7,5]);
    });
    it('Can successfully return a true if the value exist', () => {
        let bts = new Tree();
        bts.add(5);
        bts.add(7);
        bts.add(4);
        expect(bts.tree.contains(5)).toEqual(true);
    });
    it('Can successfully return a true if the value exist', () => {
        let bts = new Tree();
        bts.add(5);
        bts.add(4);
        bts.add(7);
        expect(bts.tree.contains(7)).toEqual(true);
    });
    it('Can successfully return a false if the value not exist', () => {
        let bts = new Tree();
        bts.add(5);
        bts.add(7);
        bts.add(4);
        expect(bts.tree.contains(99)).toEqual(false);
    });

});
