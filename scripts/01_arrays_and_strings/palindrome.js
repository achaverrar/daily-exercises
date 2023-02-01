/* 
Problem:
 Given a string, return true if the string is a palindrome
 or false if it is not.  Palindromes are strings that
 form the same word if it is reversed. *Do* include spaces
 and punctuation in determining if the string is a palindrome.

Assumptions:
- Input is always a string

Examples:
palindrome("abba")
should return true
-----
palindrome("abcdefg")
should return false
*/

// Solution 1
/* 
 Reverse the string, and compare its reversed version with the 
 original. Return the result of the comparison
 */
function palindrome1(str) {
  const reversed = str.split("").reduce((rev, char) => char + rev, "");
  return reversed === str;
}

// Solution 2
/* 
 Use two pointers to loop over the string comparing pairs of chars
 from extremes to the middle and stop if there are two chars that 
 differ or when the two pointers coincide.
 */

// Implementation 1
// Caveat: it executes twice as many comparisons as needed
function palindrome2(str) {
  return str.split("").every((char1, index) => {
    const char2 = str[str.length - index - 1];
    return char1 === char2;
  });
}

// Implementation 2
function palindrome3(str) {
  // Stop when we reach (or just passed) the middle of the string
  for (let i = 0; i < str.length; i++) {
    if (i > str.length - i - 1) {
      break;
    }

    const charLeft = str[i];
    const charRight = str[str.length - i - 1];

    if (charLeft !== charRight) {
      return false;
    }
  }
  return true;
}
