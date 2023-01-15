class Stack {
  constructor() {
    this.array = [];
  }

  // Time complexity: O(1)
  // Space complexity: O(1)
  peek() {
    const lastIndex = this.array.length - 1;
    return this.array[lastIndex];
  }

  // Time complexity: O(1)
  // Space complexity: O(1)
  push(value) {
    this.array.push(value);
  }

  // Time complexity: O(1)
  // Space complexity: O(1)
  pop() {
    const oldTop = this.array.pop();
    return oldTop;
  }

  // Time complexity: O(1)
  // Space complexity: O(1)
  isEmpty() {
    return !this.array.length;
  }
}

// Testing values
const myStack = new Stack();
console.log(myStack.isEmpty());
myStack.push("Discord");
console.log(myStack.isEmpty());
myStack.push("Udemy");
myStack.push("Google");
console.log(myStack);
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.isEmpty());
