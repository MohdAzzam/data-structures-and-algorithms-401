'use strict';

const LinkedList = require('../javascript/Data-Structures/linked-list/linked-list');
const Node = require('../javascript/Data-Structures/linked-list/node');

describe('linked list node class and LinkedList class',()=>{
    it('check the node constructor',()=>{
        let value='test val';
        let node = new Node(value);
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull();
    });

    it('Can successfully instantiate an empty linked list',()=>{
        let list = new LinkedList();
        expect(list.head).toBeNull();
    });
    it('Can properly insert into the linked list',()=>{
        let value='test the head method';
        let bla='for some reason';
        let list =new LinkedList();
        list.append(bla);
        list.insert(value);
        expect(list.head.value).toEqual(value);
    });
    it('The head property will properly point to the first node in the linked list',()=>{
        let list = new LinkedList();
        // check if the head is null
        let firstVal = 'First Val';
        list.insert(firstVal);
        expect(list.head.value).toEqual(firstVal);
    });
    it('Can properly insert multiple nodes into the linked list',()=>{
        let list = new LinkedList();
        // check if the head is null
        let firstVal = 'First Val';
        list.insert(firstVal);
        expect(list.head.value).toEqual(firstVal);
        // check if the head have value then add to the next of it
        let secoundVal='Secound Val';
        list.append(secoundVal);
        expect(list.head.value).toEqual(firstVal);
        expect(list.head.next.value).toEqual(secoundVal);
        // cover all test case
        let thirdVal='third Val';
        list.append(thirdVal);
        // expect(list.head.value).toEqual(firstVal);
        // expect(list.head.next.value).toEqual(secoundVal);
        expect(list.head.next.next.value).toEqual(thirdVal);
    });
    it('Will return true when finding a value within the linked list that exists',()=>{
        let testValue='test the includes method';
        let testValue2='test the includes method 1';
        let list =new LinkedList();
        list.insert(testValue);
        list.append(testValue2);
        const flag= list.includes(testValue);
        expect(flag).toEqual(true);
        const flag2= list.includes(testValue2);
        expect(flag2).toEqual(true);
    });
    it('Will return false when searching for a value in the linked list that does not exist',()=>{
        let list =new LinkedList();
        let testValue='test the includes method 3';
        const flag =list.includes(testValue);
        expect(flag).toEqual(false);
    });
    it('Can properly return a collection of all the values that exist in the linked list',()=>{
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
    it('check the Linked list append method',()=>{
        let list = new LinkedList();
        // check if the head is null
        let firstVal = 'First Val';
        list.append(firstVal);
        expect(list.head.value).toEqual(firstVal);
        // check if the head have value then add to the next of it
        let secoundVal='Secound Val';
        list.append(secoundVal);
        expect(list.head.value).toEqual(firstVal);
        expect(list.head.next.value).toEqual(secoundVal);
        // cover all test case
        let thirdVal='third Val';
        list.append(thirdVal);
        // expect(list.head.value).toEqual(firstVal);
        // expect(list.head.next.value).toEqual(secoundVal);
        expect(list.head.next.next.value).toEqual(thirdVal);
    });
    // it('check the Linked list includes method',()=>{
    //     let testValue='test the includes method';
    //     let testValue2='test the includes method 1';
    //     let testValue3='test the includes method 3';
    //     let list =new LinkedList();
    //     list.insert(testValue);
    //     list.append(testValue2);
    //     const flag= list.includes(testValue);
    //     expect(flag).toEqual(true);
    //     const flag2= list.includes(testValue2);
    //     expect(flag2).toEqual(true);
    //     const flag3 =list.includes(testValue3);
    //     expect(flag3).toEqual(false);
    // });

});
