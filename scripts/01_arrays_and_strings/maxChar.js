/* 
Problem:
Given a string, return the character that is most
commonly used in the string.

Assumptions:
- Input is always a string
- String might be empty

Examples:
maxChar("abcccccccd")
should return "c"
-----
maxChar("apple 1231111")
should return "1"
-----
maxChar("a  b   c")
should return " "
*/

/* Solution 1 */
/* 
 Loop over the string and use a hash table to keep track of 
 the frequency of ocurrence of each char, then loop over 
 the entries in the hash table to retrieve the char with the highest
 frequency
*/
function maxChar(str) {
  let maxChar = "";
  let maxOccurrence = 0;
  let occurrences = {};

  for (let char of str) {
    occurrences[char] = occurrences[char] + 1 || 1;
  }

  for (let char in occurrences) {
    if (occurrences[char] > maxOccurrence) {
      maxChar = char;
      maxOccurrence = occurrences[char];
    }
  }

  return maxChar;
}

/* Solution 2 */
/* 
 Loop over the string and use a hash table to keep track of 
 how often each char is in the string, and also use a variable
 (maxChar) for the most used char so far. 
 In each iteration, check if the total ocurrencies for the 
 current char surpasses that of maxChar, and update the value
 of maxChar, if necessary. Return its value in the end.
*/
function maxChar(str) {
  if (str.length <= 1) return str;

  let maxChar = str[0];
  let occurrences = {};

  for (let char of str) {
    occurrences[char] = occurrences[char] + 1 || 1;

    if (occurrences[char] > occurrences[maxChar]) {
      maxChar = char;
    }
  }

  return maxChar;
}
