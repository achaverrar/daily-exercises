class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Time complexity: O(log n)
  // Space complexity: O(n)
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let curNode = this.root;
    while (true) {
      if (value < curNode.value) {
        // Go left
        if (curNode.left) {
          curNode = curNode.left;
          continue;
        }
        curNode.left = newNode;
        break;
      } else {
        // Go right
        if (curNode.right) {
          curNode = curNode.right;
          continue;
        }
        curNode.right = newNode;
        break;
      }
    }
    return this;
  }
  lookup(value) {
    //Code here
  }
  remove(value) {
    //Code here
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
console.log(tree.insert(1));
console.log(JSON.stringify(traverse(tree.root)));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
