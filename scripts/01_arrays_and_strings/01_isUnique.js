/* 
Problem:
Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures?

Assumptions:
- Input is always a string
- Input isn't empty or nullish

Examples:
const string = "abcd10jk";
should return true
-----
const string = "hutg9mnd!nk9";
should return false
*/

// Naive solution
/* 
Take each number in the string and loop over 
the rest of numbers to check if it reappears in it

Time complexity: O(n^2)
Space complexity: O(1)
*/
function nIsUnique1(string) {
  for (let i = 0; i < string.length; i++) {
    const curChar = string[i];
    for (let j = i + 1; j < string.length; j++) {
      const possibleMatch = string[j];
      if (curChar === possibleMatch) {
        return false;
      }
    }
  }
  return true;
}

// More optimal solutions
/* 
Implementation 1 
Using other data structure (Set):
  Create a set out of the string chars and compare the 
  size of the set to the string.length. If they concide, 
  return true. Otherwise, return false
*/
// Time complexity: O(n)
// Space complexity: O(n)
function oIsUnique1(string) {
  const set = new Set(string);
  const sameSize = set.size() === string.length;
  return sameSize;
}

/* 
Implementation 2
Using other data structure (Hash table):
  Create an object/hash table to keep track of the chars in the
  string. Loop over the string, checking whether each string is 
  already in the object/hash table. Add any char that isn't in 
  there, return false if and only if there's a recurring char.
*/
// Time complexity: O(n)
// Space complexity: O(n)
function oIsUnique2(string) {
  const chars = {};
  for (let i = 0; i < string.length; i++) {
    const curChar = string[i];
    if (curChar in chars) return false;
    chars[curChar] = true;
  }
  return true;
}
