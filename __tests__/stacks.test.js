'use strict';
const { queues } = require('../javascript/stack-and-queue/stacks-and-queues');
const stacksAndQueues = require('../javascript/stack-and-queue/stacks-and-queues');
describe('tests to prove the following functionality for the stack and queues', () => {
    it('Can successfully push onto a stack', () => {
        const stack = new stacksAndQueues.stacks;
        stack.push(1);
        expect(stack.top.value).toEqual(1);
    });
    it('Can successfully push multiple values onto a stack', () => {
        const stack = new stacksAndQueues.stacks;
        stack.push(1);
        stack.push(2);
        expect(stack.top.value).toEqual(2);
    });
    it('Can successfully pop off the stack', () => {
        const stack = new stacksAndQueues.stacks;
        stack.push(1);
        stack.push(2);
        expect(stack.pop()).toEqual(2);
    });
    it('Can successfully empty a stack after multiple pops', () => {
        const stack = new stacksAndQueues.stacks;
        stack.push(1);
        stack.push(2);
        stack.pop();
        expect(stack.pop()).toBeTruthy();
    });
    it('Can successfully peek the next item on the stack', () => {
        const stack = new stacksAndQueues.stacks;
        stack.push(1);
        stack.push(2);
        expect(stack.peek()).toEqual(2);
    });
    it('Can successfully instantiate an empty stack', () => {
        const stack = new stacksAndQueues.stacks;
        expect(stack.isEmpty()).toBeTruthy();
    });
    it('Calling pop or peek on empty stack raises exception', () => {
        const stack = new stacksAndQueues.stacks;
        expect(stack.pop()).toEqual('Exception');
        expect(stack.peek()).toEqual('Exception');
    });

    /*
        Queue
    */
    it('Can successfully enqueue into a queue', () => {
        const queue = new stacksAndQueues.queues;
        queue.enqueue(1);
        expect(queue.front.value).toEqual(1);
    });
    it('Can successfully enqueue multiple values into a queue', () => {
        const queue = new stacksAndQueues.queues;
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.front.value).toEqual(1);
    });
    it('Can successfully dequeue out of a queue the expected value', () => {
        const queue = new stacksAndQueues.queues;
        queue.enqueue(1);
        queue.enqueue(2);
        queue.dequeue();
        expect(queue.front.value).toEqual(2);
    });
    it('Can successfully peek into a queue, seeing the expected value', () => {
        const queue = new stacksAndQueues.queues;
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.peek()).toEqual(1);
    });
    it('Can successfully empty a queue after multiple dequeues', () => {
        const queue = new stacksAndQueues.queues;
        queue.enqueue(1);
        queue.enqueue(2);
        queue.dequeue();
        queue.dequeue();
        expect(queue.isEmpty()).toBeTruthy();
    });
    it('Can successfully instantiate an empty queue', () => {
        const queue = new stacksAndQueues.queues;
        expect(queue.isEmpty()).toBeTruthy();
    });
    it('Can successfully instantiate an empty queue', () => {
        const queue = new stacksAndQueues.queues;
        expect(queue.dequeue()).toEqual('Exception');
        expect(queue.peek()).toEqual('Exception');
    });
    it('Calling dequeue or peek on empty queue raises exception', () => {
        const stack = new stacksAndQueues.queues;
        expect(stack.dequeue()).toEqual('Exception');
        expect(stack.peek()).toEqual('Exception');
    });
});
