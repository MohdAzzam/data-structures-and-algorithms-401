'use strict';

function treeIntersection(tree1, tree2) {
    let first = tree1.root;
    let second = tree2.root;
    const arr = [];
    // console.log(first);
    // console.log('--------------------------------------------------');
    // console.log(second);
    /**
     * 
     * @param {Node} node1
     * @param {Node} node2
     */
    let traverse = (node1, node2) => {
        // console.log((node1.value === node2.value)?`Yes ${node1.value}` :'no');
        if (node1.value === node2.value) arr.push(node1.value);
        if (node1.left && node2.left) traverse(node1.left, node2.left);
        if (node1.right && node2.right) traverse(node1.right, node2.right);
    };
    traverse(first, second);
    return arr;
}

module.exports = treeIntersection;
