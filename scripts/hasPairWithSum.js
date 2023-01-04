/* 
Problem:
Given an array of numbers, create a function that 
determines whether there is a matching pair whose 
sum equals a number that's also provided as input.

Assumptions:
- Numbers are integers (including zero and negative integers)
- Numbers in the matching pair must have different indexes

Examples:
const array = [1, 2, 3, 9];
const sum = 8; 
should return false
-----
const array = [1, 2, 4, 4];
const sum = 8; 
should return true
*/

// Naive solution
/* 
Take each number in the array and loop over 
the rest of numbers to check if their sum 
corresponds to the desired value

Time complexity: O(n^2)
Space complexity: O(1)
*/

// Implementation 1
function nHasPairWithSum1(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }
  return false;
}

// Implementation 2
function nHasPairWithSum2(arr, sum) {
  arr.forEach((num1) => {
    arr.forEach((num2) => {
      if (num1 + num2 === sum) {
        return true;
      }
    });
  });
  return false;
}

// More Optimal Solutions
/* Take the first number in the array and determine which
would be its match to complete the desired sum and store
that value in an object/set. 
Verify if the next number in the array is in the object/set.
- If so, return true. Otherwise, repeat the process used for 
the first number in the array. 
- If no matching pair is found, return false.

Time complexity: O(n)
Space complexity: O(1)
*/

// Implementation 1
function oHasPairWithSum1(arr, sum) {
  const matches = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in matches) return true;
    matches[sum - arr[i]] = true;
  }
}

// Implementation 2
function oHasPairWithSum2(arr, sum) {
  const matches = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (matches.has(arr[i])) return true;
    matches.add(sum - arr[i]);
  }
}
