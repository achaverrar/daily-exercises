/* 
Problem:
Given an array, return the first recurring character

Assumptions:
- Arrays are always numeric
- Empty arrays yield undefined

Examples:
const array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
should return 2
-----
const array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
should return 1
-----
const array = [2, 3, 4, 5];
should return undefined;
*/

// Naive solution
/* 
Take the first item in the array and find the index of its
second appearance, if any. Store the item and the index in 
another array. Then find the next pair [item, index] and
compare the new index with the old one. If the new index is
smaller, then replace the pair, and repeat the process with
the rest of items. Return the item with the smallest index.

Time Complexity: Probably quadratic??
Space Complexity: O(1)

Notes: 
- This wouldn't work with mixed typed arrays
- It has a lower space complexity, but definitely a higher 
space complexity 
*/

// Implementation 1
function nFirstRecurringChar(array) {
  const pair = [];
  for (let i = 0; i < array.length; i++) {
    const itemA = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const itemB = array[j];
      if (itemA !== itemB) continue;
      const oldIndex = pair[1];
      const newIndex = j;
      // Use pair[1] instead of pair[0],
      // because first item can be falsy,
      // but a repeated item can't have index 0 (falsy)
      if (!pair[1] || newIndex < oldIndex) {
        pair[0] = itemA;
        pair[1] = newIndex;
      }
      break;
    }
  }
  return pair[0];
}

// More optimal solution
/* 
Loop over the array and use a hash map to keep 
track of what items are in the array. Check if 
each item exists in the hash map. If so, return it; 
if not, keep the reference and repeat the process 
with the next item.

Time Complexity: O(n)
Space Complexity: O(n)

Notes: 
- This woul still work with mixed typed arrays
- It has a higher space complexity, but definitely 
a lower time complexity 
*/

// Implementation 1
function oFirstRecurringChar(array) {
  const ocurrences = {};
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (item in ocurrences) {
      return item;
    } else {
      ocurrences[item] = true;
    }
  }
  return undefined;
}

// Test
const array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4]; // 2
const array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4]; // 1
const array3 = [2, 3, 4, 5]; // undefined
console.log(nFirstRecurringChar(array1));
console.log(nFirstRecurringChar(array2));
console.log(nFirstRecurringChar(array3));
console.log(oFirstRecurringChar(array1));
console.log(oFirstRecurringChar(array2));
console.log(oFirstRecurringChar(array3));
