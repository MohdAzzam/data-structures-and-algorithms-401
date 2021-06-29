'use strict';
const Vertex = require('./vertex.js');
const Edge = require('./edge.js');
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }
    addDirectedEdge(start, end, weight) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            console.log('VERTEX DOES NOT EXIST');
            return;
        }
        const adjacencies = this.adjacencyList.get(start);
        adjacencies.push(new Edge(end, weight));
    }
    getNodes() {
        let arr = new Array();
        for (let [vertex] of this.adjacencyList.entries()) {
            arr.push(vertex);
        }
        return arr;
    }
    size() {
        let count = 0;
        for (let [vertex] of this.adjacencyList.values()) {
            count++;
        }
        return count;
    }
    print() {
        for (const [k, v] of this.adjacencyList.entries()) {
            console.log('k---->', k);
            console.log('v---->', v);
        }
    }

    getNeighbours(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            console.log('VERTEX DOES NOT EXIST');
            return;
        }
        return this.adjacencyList.get(vertex);
    }
    bfs(vertex) {
        const arr = [];
        let seen = new Set();
        arr.push(vertex);
        seen.add(vertex);

        while (arr.length > 0) {
            let current = arr.shift();
            let neighbours = this.getNeighbours(current);
            for (let ver of neighbours) {
                let node = ver.vertex;
                if (!seen.has(ver.vertex)) {
                    seen.add(node);
                    arr.push(node);
                }
            }
        }
        return seen;
    }
}

function businessTrip(graph, cityArray) {
    let totalCost = 0;
    let check = false;
    for (let i = 0; i < cityArray.length - 1; i++) {
        let neighbors = graph.getNeighbours(cityArray[i]);
        for (let j = 0; j <= neighbors.length - 1; j++) {
            if (cityArray[i + 1] === neighbors[j].vertex) {
                totalCost += neighbors[j].weight;
                check = true;
            }
        }
        if (check === false) {
            totalCost = 0;
            check = false;
            return `${check}, $${totalCost}`;
        }
    }

    return `${check}, $${totalCost}`;
}
function dfs(graph, vertex) {
    const visitedVertices = new Set();

    visitedVertices.add(vertex);
    const traverse = (current, visited) => {

        visited.add(current);

        const neighbors = graph.getNeighbours(current);

        for (let neighbor of neighbors) {
            if (!visited.has(neighbor.vertex)) {
                traverse(neighbor.vertex, visited);
            }
        }
    };

    traverse(vertex, visitedVertices);
    return visitedVertices;
}
module.exports = { Graph, businessTrip ,dfs};
