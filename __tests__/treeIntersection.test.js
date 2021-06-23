const { BinaryTree, Node } = require('../javascript/tree/trees');
const treeIntersection = require('../javascript/hashmap-tree-intersection/tree');


let tree1 = null;
let tree2 = null;

let one = new Node(150);
let two = new Node(100);
let three = new Node(250);
let four = new Node(160);
let five = new Node(125);
let five2 = new Node(125);
let six = new Node(75);
let seven = new Node(175);
let seven2 = new Node(175);
let eight = new Node(200);
let eight2 = new Node(200);
let nine = new Node(350);
let nine2 = new Node(350);
let ten = new Node(300);
let eleven = new Node(500);
let eleven2 = new Node(500);
let twelve = new Node(42);
let twelveRight = new Node(600);
let twelveLeft = new Node(100);
let rightRight = new Node(160);
let newL = new Node(15);
let lastL = new Node(4);

one.left = two;
one.right = three;
two.left = six;
two.right = four;
four.left = five;
four.right = seven;
three.left = eight;
three.right = nine;
nine.left = ten;
nine.right = eleven;

tree1 = new BinaryTree(one);

twelve.left = twelveLeft;
twelve.right = twelveRight;
twelveLeft.left = newL;
twelveLeft.right = rightRight;
rightRight.left = five2;
rightRight.right = seven2;
twelveRight.left = eight2;
twelveRight.right = nine2;
nine2.left = lastL;
nine2.right = eleven2;

tree2 = new BinaryTree(twelve);


// console.log(tree1);


describe('# test treeIntersection method', () => {
    it('should Return the match value btween two tree in array', () => {
        expect(treeIntersection(tree1,tree2)).toEqual([100, 160, 125, 175, 200, 350, 500]);
    });

});

