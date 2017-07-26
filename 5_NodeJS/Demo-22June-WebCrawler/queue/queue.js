// methods - enqueue, dequeue, peek(), isEmpty
// queue - FIFO
// to use this. have to have the functions 
// inside the returned object or 
// export an object with Object.create
// similar to class but less complex

const queue = {
    init() {
        this.head = null;
        this.tail = null;
        return this;
    },
    pushMany(...values) {
        values.forEach((v) => this.push(v));
        return this;
    },
    push(value) {
        const item = {
            value,
            next: null,
        };
        if (this.head === null) {
            this.head = this.tail = item;
            return this;
        }
        this.tail.next = item;
        this.tail = item;
        return this;
    },

    pop() {
        if (this.head === null) {
            return this;
        }
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    },

    peek() {
        return this.head ?
            this.head.value :
            null;
    },

    isEmpty() {
        // return !this.head;
        return this.head === null;
    },
};


// Can't return the queue itself because init is needed
module.exports = {
    getQueue() {
        return Object.create(queue).init();
    },
};
