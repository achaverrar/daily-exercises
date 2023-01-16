class Node {
  constructor(value) {
    this.value = value;
    this.below = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // Time complexity: O(1)
  // Space complexity: O(1)
  peek() {
    return this.top.value;
  }

  // Time complexity: O(1)
  // Space complexity: O(1)
  push(value) {
    const newNode = new Node(value);
    const oldTop = this.top;
    if (!this.length) {
      this.bottom = newNode;
    } else {
      newNode.below = oldTop;
    }
    this.top = newNode;
    this.length++;
  }

  // Time complexity: O(1)
  // Space complexity: O(1)
  pop() {
    const oldTop = this.top;
    if (this.length < 2) {
      this.top = null;
      this.bottom = null;
      this.length = 0;
      return null || oldTop.value;
    }
    const newTop = oldTop.below;
    this.top = newTop;
    this.length--;
    return oldTop.value;
  }

  // Time complexity: O(1)
  // Space complexity: O(1)
  isEmpty() {
    return !this.length;
  }
}

// Testing values
const myStack = new Stack();
console.log(myStack.isEmpty());
myStack.push("Discord");
console.log(myStack.isEmpty());
myStack.push("Udemy");
myStack.push("Google");
console.log(myStack.pop());
console.log(myStack);
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.isEmpty());
console.log(myStack);
