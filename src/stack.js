const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
    return this.stack;
  }

  peek() {
    const peek = this.stack.slice(-1);
    return peek[0];
  }

  pop() {
    const pop = this.stack.pop();
    return pop;
  }
}

module.exports = {
  Stack
};
