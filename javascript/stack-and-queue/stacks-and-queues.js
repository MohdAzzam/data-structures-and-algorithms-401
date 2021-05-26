'use strict';
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    push(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top=node;
        }
        return this;
    }
    pop() {
        if (this.isEmpty()) {
            return 'Exception';
        } else {
            let poped = this.top;
            this.top = poped.next;
            return poped.value;
        }

    }
    peek() {
        if (this.isEmpty()) {
            return 'Exception';
        } else {
            return this.top.value;

        }
    }
    isEmpty() {
        return this.top === null;
    }
}
let tail = null;
class Queue {
    constructor() {
        this.front = null;
    }
    enqueue(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.front = node;
            tail = this.front.next;
        } else {
            if (tail) {
                tail.next = node;
                tail = node;
            } else {
                tail = node;
                this.front.next = tail;
            }

        }
        return this;
    }
    dequeue() {
        if (this.isEmpty()) {
            return 'Exception';
        } else {
            this.front = this.front.next;
        }
    }
    peek() {
        if (this.isEmpty()) {
            return 'Exception';
        } else {

            return this.front.value;
        }
    }
    isEmpty() {
        return this.front === null;
    }

}

module.exports = {
    stacks: Stack,
    node: Node,
    queues: Queue
};
