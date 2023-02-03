/* 
Problem:
Write a program that console logs the numbers
from 1 to n. But for multiples of three print
“fizz” instead of the number and for the multiples
of five print “buzz”. For numbers which are multiples
of both three and five print “fizzbuzz”.

Assumptions:
- Input is always a number
- Input isn't empty

Examples:
fizzBuzz(5)
Should print the following lines to the console:
   1
   2
   fizz
   4
   buzz
*/

/* Solution */
/* 
  Use a loop to print the numbers to the console 
  from 1 to n, and use the modulo operator to 
  check for the divisibility cases in each iteration, 
  printing the corresponding string or number.
*/

// Implementation 1
/* 
  Seizes the fact that if i is SIMULTANEOUSLY
  a multiple of 3 AND 5, what must be logged to
  the console is a combination of the cases when
  i is EXCLUSIVELY a multiple of 3 and when it is
  EXCLUSIVELY a multiple of 5, in that order.
 */
function fizzbuzz1(n) {
  for (let i = 1; i <= n; i++) {
    let word = i % 3 === 0 ? "fizz" : "";
    word += i % 5 === 0 ? "buzz" : "";
    console.log(word || i);
  }
}

// Implementation 2
// Improves readibility of implementation 1
function fizzbuzz2(n) {
  for (let i = 1; i <= n; i++) {
    let word = "";
    if (i % 3 === 0) {
      word += "fizz";
    }
    if (i % 5 === 0) {
      word += "buzz";
    }
    console.log(word || i);
  }
}

// Implementation 3
// A straightfoward solution
function fizzbuzz3(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

// Testing value
fizzbuzz(100);
