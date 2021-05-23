'use strict';
const stackWithQueues = require('../javascript/queueWithStacks/queue-with-stacks');

describe('tests to prove the following functionality for the stack and queues', () => {
    it('Can successfully enqueue into a queue', () => {
        const queue = new stackWithQueues.PseudoQueue;
        expect(queue.enqueue(1).top.value).toEqual(1);
    });
    it('Can successfully enqueue multiple values into a queue', () => {
        const queue = new stackWithQueues.PseudoQueue;
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.stack1.top.value).toEqual(2);
    });
    it('Can successfully dequeue out of a queue the expected value', () => {
        const queue = new stackWithQueues.PseudoQueue;
        queue.enqueue(1);
        queue.enqueue(2);
        queue.dequeue();
        expect(queue.stack1.top.value).toEqual(2);
    });
});
