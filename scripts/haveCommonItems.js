/* 
Problem:
Given 2 arrays, create a function that lets 
the user know (true/false) whether these 
two arrays contain any common items

Assumptions:
- Input is always a pair of arrays with letters

Examples:
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];
should return false
-----
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];
should return true
*/

// Naive solution:
/* 
Take each item from array1 and check 
if it is in array2
stop if there's a match.

Time complexity: O(a*b)
Space complexity: O(1)
*/

// Implementation 1
function nHaveCommonItems(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

// Implementation 2
function nHaveCommonItems2(arr1, arr2) {
  arr1.forEach((item1) => {
    arr2.forEach((item2) => {
      if (item1 === item2) {
        return true;
      }
    });
  });
  return false;
}

// More Optimal Solutions
/* Create an object/set out of array1's items
and loop over array2 to check
if any of its items is in the object/set.

Time complexity: O(a + b)
Space complexity: O(a)
*/

// Implementation 1
function oHaveCommonItems1(arr1, arr2) {
  const items = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!(arr1[i] in items)) return true;
  }
  for (let j = 0; j < arr2.length; j++) {
    if (!(arr2[j] in items)) return true;
  }
  return false;
}

// Implementation 2
function oHaveCommonItems2(arr1, arr2) {
  const items = {};
  arr1.forEach((item) => {
    items[item] = true;
  });

  arr2.forEach((item) => {
    if (items.some(item)) {
      return true;
    }
  });
  return false;
}

// Imprementation 3
function oHaveCommonItems3(arr1, arr2) {
  const set = new Set(arr1);
  arr2.forEach((item) => {
    if (set.has(item)) {
      return true;
    }
  });
  return false;
}
