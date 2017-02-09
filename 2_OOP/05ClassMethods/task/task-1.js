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
        if (i === 0) {
            this.prepend(...values);
            return this;
        }
        // find locations where the new list will be inserted
        let currentNode = this._head;
        let previousNode;
        for (let j = 0; j < i; j += 1) {
            previousNode = currentNode;
            currentNode = currentNode._next;
        }
        // create new list
        let listToInsert = new LinkedList;
        listToInsert.append(...values);

        // attach start of new list to previous node and end of new list to current node
        previousNode._next = listToInsert._head;
        listToInsert.findLast()._next = currentNode;

        this._length += listToInsert._length;
        return this;
    }
    at(index, value) {
        let i = 0;
        let currentNode = this._head;
        for (i; i < index; i += 1) {
            currentNode = currentNode._next;
        }
        if (value !== undefined) {
            return currentNode._value = value;
        }
        return currentNode._value;
    }
    removeAt(index) {
        if(index === 0){
            let headValue = this._head._value;
            let newHead = this._head._next;
            this._head._value = newHead._value;
            this._head._next = newHead._next;
            this._length -= 1;
            return headValue;
        }
        let i = 0;
        let previousNode;
        let currentNode = this._head;
        for (i; i < index; i += 1) {
            previousNode = currentNode;
            currentNode = currentNode._next;
        }
        previousNode._next = currentNode._next;
        this._length -= 1;
        return currentNode._value;
    }
    *[Symbol.iterator]() {
        let current = this._head;
        for (let i = 0; i < this.length - 1; i += 1) {
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

// const list1 = new LinkedList();
// list1.append(1, 2, 3, 4, 5, 6).append(7, 8);
// let test1 = list1.toArray();
// list1.prepend(-1, 0);
// list1.insert(1, 'Pepi');
// list1.insert(5, 'Mama', 'mia', 'let', 'me', 'go');
// console.log(list1.toString());

// const list2 = new LinkedList();
// list2.append(1, 2, 6, 7, 8);
// list2.insert(2, 3, 4);
// list2.insert(4, 5);
// console.log(list2.toString());

// TEST INSERT
// const list3 = new LinkedList().append(1, 2).insert(0, 3, 4);
// let test = list3.length - 1;
// list3.insert(list3.length - 1, 'kremikovci');
// console.log(list3.toString());

// TEST AT
// const list4 = new LinkedList();
// list4.append(1, 2, 3, 4, 5, 6);
// let test4 = list4.at(2)
// console.log(test4); // 3
// list4.at(2, 'gosho');
// console.log(list4.at(2)); // gosho

// TEST REMOVE AT
// const list5 = new LinkedList();
// list5.append(1, 2, 3, 4, 5);
// const removed = list5.removeAt(1); // removed should be 2 and the list should contain 1, 3, 4, 5
// console.log(removed.toString());
// console.log(list5.toString());

// TEST REMOVE AT
// const theObj = { value: 'val', message: 'hello' };
// const values = ['test', true, null, 1, 2, 'testtest', theObj, 'gg'],
//     list6 = new LinkedList().append(...values),
//     removed1 = list6.removeAt(1),
//     removed2 = list6.removeAt(1),
//     removed3 = list6.removeAt(0),
//     removed4 = list6.removeAt(list6.length - 1);

// console.log(removed4);
// console.log(list6.toString());
// console.log('The end');