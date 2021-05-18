'use strict';

const LinkedList = require('../javascript/Data-Structures/linked-list/linked-list');
const Node = require('../javascript/Data-Structures/linked-list/node');

describe('linked list node class and LinkedList class', () => {
    it('check the node constructor', () => {
        let value = 'test val';
        let node = new Node(value);
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull();
    });

    it('Can successfully instantiate an empty linked list', () => {
        let list = new LinkedList();
        expect(list.head).toBeNull();
    });
    it('Can properly insert into the linked list', () => {
        let value = 'test the head method';
        let bla = 'for some reason';
        let list = new LinkedList();
        list.append(bla);
        list.insert(value);
        expect(list.head.value).toEqual(value);
    });
    it('The head property will properly point to the first node in the linked list', () => {
        let list = new LinkedList();
        // check if the head is null
        let firstVal = 'First Val';
        list.insert(firstVal);
        expect(list.head.value).toEqual(firstVal);
    });
    it('Can properly insert multiple nodes into the linked list', () => {
        let list = new LinkedList();
        // check if the head is null
        let firstVal = 'First Val';
        list.insert(firstVal);
        expect(list.head.value).toEqual(firstVal);
        // check if the head have value then add to the next of it
        let secoundVal = 'Secound Val';
        list.append(secoundVal);
        expect(list.head.value).toEqual(firstVal);
        expect(list.head.next.value).toEqual(secoundVal);
        // cover all test case
        let thirdVal = 'third Val';
        list.append(thirdVal);
        // expect(list.head.value).toEqual(firstVal);
        // expect(list.head.next.value).toEqual(secoundVal);
        expect(list.head.next.next.value).toEqual(thirdVal);
    });
    it('Will return true when finding a value within the linked list that exists', () => {
        let testValue = 'test the includes method';
        let testValue2 = 'test the includes method 1';
        let list = new LinkedList();
        list.insert(testValue);
        list.append(testValue2);
        const flag = list.includes(testValue);
        expect(flag).toEqual(true);
        const flag2 = list.includes(testValue2);
        expect(flag2).toEqual(true);
    });
    it('Will return false when searching for a value in the linked list that does not exist', () => {
        let list = new LinkedList();
        let testValue = 'test the includes method 3';
        const flag = list.includes(testValue);
        expect(flag).toEqual(false);
    });
    it('Can properly return a collection of all the values that exist in the linked list', () => {
        let a = 'a';
        let b = 'b';
        let c = 'c';
        let list = new LinkedList();
        list.append(a);
        list.append(b);
        list.append(c);
        const str = list.toString();
        expect(str).toEqual('{ a } -> { b } -> { c } -> NULL');
    });
    it('check the Linked list append method', () => {
        let list = new LinkedList();
        // check if the head is null
        let firstVal = 'First Val';
        list.append(firstVal);
        expect(list.head.value).toEqual(firstVal);
        // check if the head have value then add to the next of it
        let secoundVal = 'Secound Val';
        list.append(secoundVal);
        expect(list.head.value).toEqual(firstVal);
        expect(list.head.next.value).toEqual(secoundVal);
        // cover all test case
        let thirdVal = 'third Val';
        list.append(thirdVal);
        // expect(list.head.value).toEqual(firstVal);
        // expect(list.head.next.value).toEqual(secoundVal);
        expect(list.head.next.next.value).toEqual(thirdVal);
    });
    it('check the Linked list Append method', () => {
        const list = new LinkedList();
        list.insert(1);
        list.append(2);
        list.append(2);
        expect(list.toString()).toEqual('{ 1 } -> { 2 } -> { 2 } -> NULL');
    });
    it('check the Linked list Append method', () => {
        const list = new LinkedList();
        list.append(2);
        expect(list.toString()).toEqual('{ 2 } -> NULL');
    });
    it('check the Linked list insertBefore method', () => {
        const list = new LinkedList();
        expect(list.insertBefore()).toBeNull();
    });
    it('check the Linked list insertBefore method', () => {
        const list = new LinkedList();
        list.insert(1);
        list.append(3);
        list.append(2);
        list.insertBefore(3, 5);
        expect(list.toString()).toEqual('{ 1 } -> { 5 } -> { 3 } -> { 2 } -> NULL');
    });
    it('check the Linked list insertBefore method', () => {
        const list = new LinkedList();
        list.insert(1);
        list.append(2);
        list.append(2);
        list.insertBefore(2, 5);
        expect(list.toString()).toEqual('{ 1 } -> { 5 } -> { 2 } -> { 2 } -> NULL');
    });
    it('check the Linked list insertBefore method', () => {
        const list = new LinkedList();
        list.insert(1);
        list.append(3);
        list.append(2);
        list.insertBefore(4, 5);
        // console.log(list.head.next.next.next.value);
        expect(list.insertBefore(4, 5)).toEqual('Exception');
    });
    it('check the Linked list insertAfter method', () => {
        const list = new LinkedList();
        expect(list.insertAfter()).toBeNull();
    });
    it('check the Linked list insertAfter method', () => {
        const list = new LinkedList();
        list.insert(1);
        list.append(3);
        list.append(2);
        list.insertAfter(3, 5);
        expect(list.toString()).toEqual('{ 1 } -> { 3 } -> { 5 } -> { 2 } -> NULL');
    });
    it('check the Linked list insertAfter method', () => {
        const list = new LinkedList();
        list.insert(1);
        list.append(2);
        list.append(2);
        list.insertAfter(2, 5);
        expect(list.toString()).toEqual('{ 1 } -> { 2 } -> { 5 } -> { 2 } -> NULL');
    });
    it('check the Linked list insertAfter method', () => {
        const list = new LinkedList();
        list.insert(1);
        list.append(3);
        list.append(2);
        expect(list.insertAfter(4, 5)).toEqual('Exception');
    });


    it('check the Linked list kthFromEnd method Where k is greater than the length of the linked list', () => {
        const list = new LinkedList();
        list.insert(1);
        list.append(3);
        list.append(2);
        expect(list.kthFromEnd(5)).toEqual('Excption');
    });
    it('check the Linked list kthFromEnd method Where k is not a positive integer', () => {
        const list = new LinkedList();
        list.insert(1);
        list.append(3);
        list.append(2);
        list.append(5);
        expect(list.kthFromEnd(-5)).toEqual('Excption');
    });
    it('check the Linked list kthFromEnd method Where the linked list is of a size 1', () => {
        const list = new LinkedList();
        list.insert(1);
        expect(list.kthFromEnd(1)).toEqual(0);
    });
    it('check the Linked list kthFromEnd methodWhere k and the length of the list are the same', () => {
        const list = new LinkedList();
        list.insert(3);
        list.append(2);
        list.append(2);
        list.append(4);
        expect(list.kthFromEnd(3)).toEqual(3);
    });
    it('check the Linked list kthFromEnd methodWhere ', () => {
        const list = new LinkedList();
        list.insert(3);
        list.append(2);
        list.append(1);
        list.append(4);
        expect(list.kthFromEnd(1)).toEqual(1);
    });
    it('check the Linked list zipLL method ', () => {
        const list1 = new LinkedList();
        list1.insert(1);
        list1.append(3);
        list1.append(5);
        const list2 = new LinkedList();
        list2.insert(2);
        list2.append(4);
        list2.append(6);
        let newLinkedList = new LinkedList();
        newLinkedList = newLinkedList.zipLists(list1, list2);
        expect(newLinkedList.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL');
    });
    it('check the Linked list zipLL method ', () => {
        const list1 = new LinkedList();

        const list2 = new LinkedList();
        let newLinkedList = new LinkedList();
        newLinkedList = newLinkedList.zipLists(list1, list2);
        expect(newLinkedList).toBeNull();
    });
    it('check the Linked list zipLL method ', () => {
        const list1 = new LinkedList();
        list1.insert(1);
        list1.append(3);
        list1.append(5);
        const list2 = new LinkedList();
        let newLinkedList = new LinkedList();
        newLinkedList = newLinkedList.zipLists(list1, list2);
        expect(newLinkedList.toString()).toEqual('{ 1 } -> { 3 } -> { 5 } -> NULL');
    });
    it('check the Linked list zipLL method ', () => {
        const list1 = new LinkedList();

        const list2 = new LinkedList();
        list2.insert(2);
        list2.append(4);
        list2.append(6);
        let newLinkedList = new LinkedList();
        newLinkedList = newLinkedList.zipLists(list1, list2);
        expect(newLinkedList.toString()).toEqual('{ 2 } -> { 4 } -> { 6 } -> NULL');
    });


});
