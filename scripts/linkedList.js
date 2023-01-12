class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  // Time complexity: O(1)
  // Space complexity: O(1)
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  // Time complexity: O(1)
  // Space complexity: O(1)
  preppend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  /* 
  Alternative implementation
  preppend(value) {
    const oldList = this.head;
    this.head = {
      value: value,
      next: oldList,
    };
    this.length++;
  } */

  // Time complexity: O(n)
  // Space complexity: O(n)
  printList() {
    const array = [];
    let curNode = this.head;
    while (curNode !== null) {
      array.push(curNode.value);
      curNode = curNode.next;
    }
    console.log(array);
  }

  // Time complexity: O(n)
  // Space complexity: O(1)
  getNodeAt(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }

    let counter = 0;
    let node = this.head;
    while (counter < index) {
      node = node.next;
      counter++;
    }
    return node;
  }

  // Time complexity: O(n)
  // Space complexity: O(1)
  insert(index, value) {
    if (index < 0) return undefined;

    if (index > this.length) {
      this.append(value);
      return;
    }

    if (index === 0) {
      this.preppend(value);
      return;
    }

    const prevNode = this.getNodeAt(index - 1);
    const nextNode = prevNode.next;
    const newNode = new Node(value);
    newNode.next = nextNode;
    prevNode.next = newNode;
    this.length++;
  }

  // Time complexity: O(n)
  // Space complexity: O(1)
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) {
      const newHead = this.head.next;
      this.head = newHead;
    } else {
      const prevNode = this.getNodeAt(index - 1);
      const nextNode = prevNode.next.next;
      prevNode.next = nextNode;
    }
    this.length--;
  }
}

// Testing values
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.preppend(1);
myLinkedList.insert(1, 20);
myLinkedList.insert(5, 0);
myLinkedList.remove(5);
myLinkedList.printList();
