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


module.exports = Graph;
