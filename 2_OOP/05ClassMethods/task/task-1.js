'use strict';

class listNode {
    constructor(value) {
        this._value = value;
        this._next = null;
    }
}

class LinkedList {

    constructor() {
        this._length = 0;
        this._head = null;
    }
    get first() {
        return this._head._value;
    }
    get last() {
        return this.findLast()._value;
    }
    get length() {
        return this._length;
    }
    findLast() {
        let last = this._head;
        while (last._next) {
            last = last._next;
        }
        return last;
    }
    append(...values) {
        let i = 0;
        if (this._head === null) {
            this._head = new listNode(values[0]);
            i = 1;
            this._length += 1;
        }
        for (i; i < values.length; i += 1) {
            this.findLast()._next = new listNode(values[i]);
            this._length += 1;
        }
        return this;
    }
    prepend(...values) {
        let oldList = this.toArray();
        this._length = 0;
        this._head = null;
        this.append(...values).append(...oldList);
        return this;
    }
    insert(i, ...values) {
        if (i === this._length - 1){
            this.append(...values);
            return this;
        }
        let currentNode = this._head;
        let previousNode;
        for (let j = 0; j < i; j += 1) {
            previousNode = currentNode;
            currentNode = currentNode._next;
        }
        let listToInsert = new LinkedList;
        listToInsert.append(...values);
        
        previousNode._next = listToInsert._head;
        listToInsert.findLast()._next = currentNode;

        this._length += listToInsert._length;
        return this;
    }
    at(i, value) {

    }

    removeAt(index) {

    }
    *[Symbol.iterator]() {
        let current = this._head;
        for (let i = 0; i < this._length - 1; i += 1) {
            if (i === 0) {
                yield current._value;
            }
            current = current._next;
            yield current._value;
        }
    }
    toArray() {
        let result = [];
        for (let el of this) {
            result.push(el);
        }
        return result;
    }
    toString() {
        return this.toArray().join(' -> ');
    }
}

module.exports = LinkedList;

// TESTS

const list1 = new LinkedList();
list1.append(1, 2, 3, 4, 5, 6).append(7, 8);
let test1 = list1.toArray();
list1.prepend(-1, 0);
list1.insert(1, 'Pepi');
list1.insert(5, 'Mama', 'mia', 'let', 'me', 'go');
console.log(list1.toString());

const list2 = new LinkedList();
list2.append(1, 2, 6, 7, 8);
list2.insert(2, 3, 4);
list2.insert(4, 5);
console.log(list2.toString());

const list3 = new LinkedList().append(1, 2).insert(0, 3, 4);
list3.insert(list3.length - 1, 'kremikovci');
console.log(list3.toString());

console.log('The end');