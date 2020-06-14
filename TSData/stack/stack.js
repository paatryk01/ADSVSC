"use strict";
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(maxSize) {
        this.length = 0;
        this.maxSize = maxSize;
        this.stack = new Array(this.maxSize);
    }
    Stack.prototype.isEmpty = function () {
        return this.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.length === this.maxSize;
    };
    Stack.prototype.addValue = function (newItem) {
        if (this.isFull()) {
            throw new Error("stack overflow");
        }
        this.stack[this.length++] = newItem;
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            throw new Error("empty stack");
        }
        //  this.stack[this.length];
        var retval = this.stack[--this.length];
        return retval;
    };
    Stack.prototype.top = function () {
        if (this.isEmpty()) {
            throw new Error("empty stack");
        }
        return this.stack[this.length - 1];
    };
    return Stack;
}());
exports.Stack = Stack;
