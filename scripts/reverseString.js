/* 
Problem:
Create a function that reverses a string

Assumptions:
- Input might not always be a string

Examples:
const str = "My name is Ayxa";
should return "axyA si eman yM"
-----
const str = "";
should return undefined;
*/

// Solution 1
/* 
Loop over the string backwards,
appending each char to a new string
and return the new string
*/

// Implementation 1
function reverse1(str) {
  if (typeof str !== "string" || str < 1) return;
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Solution 2
/* 
Create an array out of the chars in the string,
reverse the array, join its items and 
return the reversed string
*/

// Implementation 1
function reverse2(str) {
  if (typeof str !== "string" || str < 1) return;
  return str.split().reverse().join("");
}

// Implementation 2
const reverse3 = (str) => [...str].reverse().join("");
