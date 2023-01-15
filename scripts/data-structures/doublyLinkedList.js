class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
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
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }

  // Time complexity: O(1)
  // Space complexity: O(1)
  preppend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

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
    const middle = Math.round(this.length / 2);
    let counter = 0;
    let node = null;
    if (index < middle) {
      counter = 0;
      node = this.head;
      while (counter < index) {
        node = node.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      node = this.tail;
      while (counter > index) {
        node = node.prev;
        counter--;
      }
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

    const nextNode = this.getNodeAt(index);
    const prevNode = nextNode.prev;
    const newNode = new Node(value);
    // Update references in new node
    newNode.prev = prevNode;
    newNode.next = nextNode;
    // Update references in side nodes
    prevNode.next = newNode;
    nextNode.prev = newNode;
    this.length++;
  }

  // Time complexity: O(n)
  // Space complexity: O(1)
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    console.log(this.length);
    if (index === 0) {
      const newHead = this.head.next;
      newHead.prev = null;
      this.head = newHead;
    } else if (index == this.length - 1) {
      const newTail = this.tail.prev;
      newTail.next = null;
      this.tail = newTail;
    } else {
      const unwantedNode = this.getNodeAt(index);
      const prevNode = unwantedNode.prev;
      const nextNode = unwantedNode.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }
    this.length--;
  }
}

// Testing values
const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.preppend(1);
console.log(myDoublyLinkedList.getNodeAt(0));
console.log(myDoublyLinkedList.getNodeAt(2));
myDoublyLinkedList.insert(1, 20);
myDoublyLinkedList.printList();
myDoublyLinkedList.remove(4);
myDoublyLinkedList.printList();
console.dir(myDoublyLinkedList);
