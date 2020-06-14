"use strict";
exports.__esModule = true;
var stack_1 = require("../stack/stack");
var assert = require('chai').assert;
describe('Stack', function () {
    var stack = new stack_1.Stack(5);
    it('is newly-created, empty and not full', function () {
        assert.equal(stack.isEmpty(), true);
        assert.equal(stack.isFull(), false);
    });
    it('has element with value of 17 pushed into it', function () {
        stack.addValue(17);
        assert.equal(stack.isFull(), false);
        assert.equal(stack.isEmpty(), false);
    });
    it('returns a value of 17 after top operation and is not emptied', function () {
        assert.equal(stack.top(), 17);
        assert.equal(stack.isEmpty(), false);
    });
    it('stack is empty after removing value', function () {
        assert.equal(stack.pop(), 1);
        assert.equal(stack.isEmpty(), true);
    });
});
