/* 
Problem:
Given an integer, return an integer that is the reverse
ordering of numbers.

Assumptions:
- Input is always a number

Examples:
reverseInt(981) 
should return 189
-----
reverseInt(500)
should return 5
-----
reverseInt(-15)
should return -51
-----
reverseInt(-90)
should return -9
*/

function reverseInt(n) {
  const stringified = n.toString();
  const reversedString = stringified
    .split("")
    .reduce((rev, char) => char + rev, "");
  const reversedNonNegative = parseInt(reversedString);

  // if (n < 0)  Math.sign(n) === -1
  // if (n >= 0)  Math.sign(n) === 1
  const reversedNumberWithOriginalSign = reversedNonNegative * Math.sign(n);
  return reversedNumberWithOriginalSign;
}
