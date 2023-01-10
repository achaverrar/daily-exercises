/* JavaScript Implementation of the Hashtable Data Structure */
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // Time complexity: O(n) for a small n -> O(1)
  // Space complexity: O(1)
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // Time complexity: O(1)
  // Space complexity: O(1)
  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  // Time complexity: O(1), seldom O(n) in case of hash collision
  // Space complexity: O(1)
  get(key) {
    const address = this._hash(key);
    const bucket = this.data[address];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        const curentKey = bucket[i][0];
        if (key === curentKey) {
          const currentValue = bucket[i][1];
          return currentValue;
        }
      }
    }
    return undefined;
  }
}

// Testing Values
const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
console.dir(myHashTable);
console.log(myHashTable.get("grapes"));
