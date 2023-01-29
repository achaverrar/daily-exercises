/* 
Problem:
Write two functions that find the nth Fibonacci number. 
One shouñd use recursion, the other should just use a loop.

Fibonacci numbers:
n:  0, 1, 2, 3, 4, 5, 6, 7,  8,  9,  10, 11, 12...
Fn: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...

Pattern: 
Each value is the sum of the 2 previous values, that means that for n=5 → 2+3

Assumptions:
- Input is always a non-negative number
*/

// Time complexity: O(n)
// Space complexity: O(1)
function fibonacciIterative1(n) {
  let f0 = 0;
  let f1 = 1;
  let fn = n > 1 ? 0 : n;
  while (n >= 2) {
    fn = f0 + f1;
    f0 = f1;
    f1 = fn;
    n--;
  }
  return fn;
}

// Time complexity: O(n)
// Space complexity: O(n)
function fibonacciIterative2(n) {
  let f = [0, 1];

  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }

  return f[n];
}

// Time complexity: O(n)
// Space complexity: O(2^n)
function fibonacciRecursive(n) {
  // Base case
  if (n < 2) return n;

  // Recursive case
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function fibonacciMaster(n) {
  let cache = {};
  return function fibonacci(n) {
    if (n in cache) {
      return cache[n];
    } else {
      // Base case
      if (n < 2) return n;

      // Recursive case
      cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
      return cache[n];
    }
  };
}

const fibonacciMemoization = fibonacciMaster();

// Testing values
console.log(fibonacciIterative1(10)); // 55
console.log(fibonacciIterative2(10)); // 55
console.log(fibonacciRecursive(10)); // 55
console.log(fibonacciMemoization(10)); // 55
