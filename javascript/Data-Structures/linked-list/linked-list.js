'use strict';

const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(value) {
        let node = new Node(value);

        if (this.head) { // check if the head not null
            // we dont need to lose the value inside the head so
            node.next = this.head; //save the node inside head into next to the new node that we create
            this.head = node; // then sit the new node we create to the head
        } else {
            this.head = node;
        }
        // this.head=node; without check if the head have value
        return this;
    }
    includes(value) {
        let currentNode = this.head; //create attribute point at the head node
        while (currentNode) {
            if (currentNode.value === value) { //check if the cuurent node value equal to the value then return true
                return true;
            } else {
                currentNode = currentNode.next; // if not move to the next node
            }
        }
        return false; // if the node value not found return false
    }
    toString() {
        let str = ''; // createt empty string to fill the node value in it
        let currentNode = this.head; //create attribute point at the head node
        while (currentNode) {
            str += `{ ${currentNode.value} } -> `;
            currentNode = currentNode.next; // move to the next node until you reach the null
        }
        return str += 'NULL';
    }
    append(value) {
        let node = new Node(value);
        // check if the linked list empty
        if (!this.head) {
            this.head = node;
            return this; // to allow channing
        }
        // check if the linked list not empty add at the end
        let currentNode = this.head;
        while (currentNode.next) {
            //check the next until next =null
            currentNode = currentNode.next;
        }
        //then add the new node to the linkedlist
        currentNode.next = node;
        return this; // to allow channing
    }
    insertBefore(value, newVal) {
        let node = new Node(newVal);
        if (this.head === null) {
            return null;
        }
        let currentNode = this.head;
        let nextNode = currentNode.next;
        while (nextNode !== null) {
            if (nextNode.value === value) {
                currentNode.next = node;
                node.next = nextNode;
                return;
            } else if (nextNode.next === null) {
                return 'Exception';
            }
            currentNode = currentNode.next;
            nextNode = nextNode.next;
        }
    }
    insertAfter(value, newVal) {
        let node = new Node(newVal);
        if (this.head === null) {
            return null;
        }

        let currentNode = this.head;
        let lastNode = this.head.next;
        while (currentNode) {
            if (currentNode.value === value) {
                currentNode.next = node;
                node.next = lastNode;
                return;
            } else if (lastNode === null) {
                return 'Exception';
            }
            currentNode = currentNode.next;
            lastNode = lastNode.next;
        }
    }
    kthFromEnd(k) {
        if (!this.includes(k)) return ('Excption');
        else {
            let count = 0;
            let currentNode = this.head;
            while (currentNode.next) {
                count++;
                currentNode = currentNode.next;
            }
            let count2 = 0;
            let currentNode2 = this.head;
            while (currentNode2.value !== k) {
                count2++;
                currentNode2 = currentNode2.next;
            }
            return count - count2;
        }
    }
}



module.exports = LinkedList;
