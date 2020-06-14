import { Stack } from '../stack/stack';

const assert = require('chai').assert;

describe('Stack', () => {
    const stack = new Stack<number>(5);
    
    it('is newly-created, empty and not full', () => {
        assert.equal(stack.isEmpty(), true);
        assert.equal(stack.isFull(), false);
    });

    it('has element with value of 17 pushed into it', () => {
        stack.addValue(17);
        assert.equal(stack.isFull(), false);
        assert.equal(stack.isEmpty(), false);
    });

    it('returns a value of 17 after top operation and is not emptied', () => {
        assert.equal(stack.top(), 17);
        assert.equal(stack.isEmpty(), false);
    });

    it('stack is empty after removing value', () => {
        assert.equal(stack.pop(), 17);
        assert.equal(stack.isEmpty(), true);
    });

    it('is full after adding 5 values', () => {
        assert.equal(stack.isEmpty(), true);
        assert.equal(stack.isFull(), false);
        stack.addValue(1421);
        stack.addValue(122);
        stack.addValue(214);
        stack.addValue(992);
        stack.addValue(23); 
        assert.equal(stack.isFull(), true);
    });

    it('pop ll remove the top value', () => {
        assert.equal(stack.pop(), 23);
        assert.equal(stack.pop(), 992);
        assert.equal(stack.pop(), 214);
        assert.equal(stack.pop(), 122);
        assert.equal(stack.pop(), 1421);
    });
});

describe('reverse a string using stack', () => {
    const text = "hello, world!";

    const stack = new Stack<string>(text.length);

    it('text is reversed', () => {
        text.split('').forEach(e => stack.addValue(e));

        let reversed: string[] = [];

        while(!stack.isEmpty()) {
            reversed = reversed.concat(stack.pop());
        }

        assert.equal(reversed.join(''), '!dlrow ,olleh');
    });
});

