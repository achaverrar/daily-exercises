/* 
Problem:
Write two functions that find the factorial of any number. 
One shouñd use recursion, the other should just use a loop.

Assumptions:
- Input is always a non-negative number

Examples:
factorial(2) = 2;
factorial(4) = 24
*/

// Time complexity: O(n)
// Space complexity: O(n)
function findFactorialRecursive(number) {
  // Base case
  if (number < 2) {
    return 1;
  }

  // Recursive case
  let answer = number * findFactorialRecursive(number - 1);

  return answer;
}

// Time complexity: O(n)
// Space complexity: O(1)
function findFactorialIterative(number) {
  let answer = number < 2 ? 1 : number;
  while (number > 2) {
    answer *= number - 1;
    number--;
  }
  return answer;
}

// Testing values
console.log(findFactorialRecursive(2));
console.log(findFactorialRecursive(4));
console.log(findFactorialIterative(2));
console.log(findFactorialIterative(4));
