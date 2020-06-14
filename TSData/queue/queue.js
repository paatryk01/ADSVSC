"use strict";
exports.__esModule = true;
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue(maxSize) {
        this.maxSize = maxSize > 0 ? maxSize : 10;
        this.length = 0;
        this.queue = new Array(this.maxSize);
    }
    Queue.prototype.isEmpty = function () {
        return this.length === 0;
    };
    Queue.prototype.isFull = function () {
        return this.length === this.maxSize;
    };
    Queue.prototype.peak = function () {
        if (this.isEmpty()) {
            throw new Error('Queue is empty!');
        }
        return this.queue[0];
    };
    Queue.prototype.enqueue = function (value) {
        if (!this.isFull) {
            this.queue[this.length] === value;
        }
        throw new Error('Queue is full, cannot add a new element');
    };
    Queue.prototype.dequeue = function () {
        if (this.isEmpty) {
            throw new Error('Queue is empty');
        }
        // const retval = this.queue[0];
        // this.queue[0] === this.queue[1];
        // this.length--;
        // return retval;
        return this.queue.shift();
    };
    return Queue;
}());
exports.Queue = Queue;
