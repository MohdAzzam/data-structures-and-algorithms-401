'use strict';
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.root = null;
    }

    add(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            // this will add to start
            // node.next = this.root;
            // this.root = node;

            // add it to the end
            let current = this.root;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    getValues() {
        let current = this.root;
        const output = [];
        while (current) {
            output.push(current.value);
            current = current.next;
        }
        return output;
    }
}


class Hashtable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        // hash the key 
        // return the hashed value
        const sum = key.split('').reduce((acc, v) => acc + v.charCodeAt(0), 0);
        // console.log('sum : ', sum);
        return (sum * 19) % this.size;
    }

    add(key, value) {
        const hashed = this.hash(key);
        if (!this.table[hashed]) {
            this.table[hashed] = new LinkedList();
        }
        this.table[hashed].add({ [key]: value });
    }


    get(key) {
        // console.log(key);
        const hashed = this.hash(key);
        // console.log(hashed);
        let current = this.table[hashed];
        let collesion = current.root;
        while (collesion) {
            if (collesion.value[key]) {
                return (collesion.value[key]);
            } else if (collesion.next === null) {
                return null;
            }
            else {
                collesion = collesion.next;
            }
        }
    }
    contains(key) {
        let hashed = this.hash(key);
        if(this.table[hashed]){
            return true;
        }else{
            return false;
        }

    }
}


module.exports =Hashtable;
