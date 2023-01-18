class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // Time complexity: O(1)
  // Space complexity: O(1)
  peek() {
    return this.first;
  }

  // Time complexity: O(1)
  // Space complexity: O(1)
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length < 1) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.length++;
  }

  // Time complexity: O(1)
  // Space complexity: O(1)
  dequeue() {
    const oldFirst = this.first;
    if (this.length < 2) {
      this.first = null;
      this.last = null;
      this.length = 0;
    } else {
      this.first = this.first.next;
      this.length--;
    }
    return oldFirst;
  }

  // Time complexity: O(1)
  // Space complexity: O(1)
  isEmpty() {
    return !this.length;
  }
}

// Testing values
const myQueue = new Queue();
console.log(myQueue.peek());
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
