/* 
Problem:
Given an array of numbers, create a function that 
determines whether there is a matching pair whose 
sum equals a number that's also provided as input.

Assumptions:
- Numbers are integers
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

function nHasPairWithSum1(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }
  return false;
}

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
