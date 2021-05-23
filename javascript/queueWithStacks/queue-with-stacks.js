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
            let pre = this.top;
            this.top = node;
            node.next = pre;
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
class PseudoQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    enqueue(value) {
        return this.stack1.push(value);
    }
    dequeue() {
        let current = this.stack1.top;
        while (current) {
            this.stack2.push(this.stack1.pop());
            current = current.next;
        }

        this.stack2.pop();
        let current2 = this.stack2.top;
        while (current2) {
            this.stack1.push(this.stack2.pop());
            current2 = current2.next;
        }

        return this.stack1;

    }
}

module.exports={
    PseudoQueue,
};
