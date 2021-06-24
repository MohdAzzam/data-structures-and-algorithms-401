const Graph = require('../javascript/graph/graph');
const Edge = require('../javascript/graph/edge');
const Vertex = require('../javascript/graph/vertex');

const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);

// myGraph.addVertex(zero);
// myGraph.addVertex(one);
// myGraph.addVertex(two);
// myGraph.addVertex(three);
// myGraph.addVertex(four);
// myGraph.addVertex(five);

// myGraph.addDirectedEdge(zero, two);
// myGraph.addDirectedEdge(two, three);
// myGraph.addDirectedEdge(two, four);
// myGraph.addDirectedEdge(three, five);
// myGraph.addDirectedEdge(four, five);
// myGraph.addDirectedEdge(one, three);
// myGraph.print();
// console.log("-----------------")
// console.log(myGraph.getNeighbours(two));
// console.log("-----------------")
// console.log(myGraph.getNeighbours(one));
// console.log(myGraph.getNodes());


describe('Graph', () => {
    it('Node can be successfully added to the graph', () => {
        let test = new Graph();
        test.addVertex(zero);
        const x = test.getNodes();
        // console.log(x[0].value);
        expect(x[0].value).toEqual(0);

    });
    it('An edge can be successfully added to the graph', () => {
        let test = new Graph();
        test.addVertex(one);
        test.addVertex(two);
        test.addDirectedEdge(one, two);
        expect(test.getNodes(one)).toEqual([{ value: 1 }, { value: 2 }]);


    });
    it('A collection of all nodes can be properly retrieved from the graph', () => {
        const test = new Graph();
        test.addVertex(zero);
        test.addVertex(one);
        test.addVertex(two);
        test.addDirectedEdge(zero, one);
        test.addDirectedEdge(one, zero);
        test.addDirectedEdge(two);
        expect(test.adjacencyList.get(zero)).toEqual([{ 'vertex': { 'value': 1 }, 'weight': undefined }]);
        expect(test.adjacencyList.get(one)).toEqual([{ 'vertex': { 'value': 0 }, 'weight': undefined }]);

    });
    it('All appropriate neighbors can be retrieved from the graph', () => {
        const test = new Graph();
        test.addVertex(zero);
        test.addVertex(one);
        test.addVertex(two);
        test.addDirectedEdge(zero, one);
        test.addDirectedEdge(zero, two);
        expect(test.getNeighbours(zero)).toEqual([{ 'vertex': { 'value': 1 }, 'weight': undefined }, { 'vertex': { 'value': 2 }, 'weight': undefined }]);

    });
    it('Neighbors are returned with the weight between nodes included', () => {
        const test = new Graph();
        test.addVertex(zero);
        test.addVertex(one);
        test.addVertex(two);
        test.addDirectedEdge(zero, one);
        test.addDirectedEdge(zero, two);
        let weight = test.getNeighbours(zero)[0]['weight'];
        expect(weight).toEqual(undefined);
    });
    it('The proper size is returned, representing the number of nodes in the graph', () => {
        const test = new Graph();

        test.addVertex(zero);
        test.addVertex(one);
        test.addVertex(two);
        test.addDirectedEdge(zero, one);
        test.addDirectedEdge(zero, two);
        expect(test.size()).toEqual(3);
    });
    it('A graph with only one node and edge can be properly returned', () => {
        const test = new Graph();
        test.addVertex(five);
        test.addDirectedEdge(five);
        expect(test.adjacencyList.get(five)).toEqual([]);
    });
    it('An empty graph properly returns null', () => {
        const test = new Graph();
        expect(test.adjacencyList.values()).not.toBeUndefined();
    });
});
