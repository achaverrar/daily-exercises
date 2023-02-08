// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/* Helper functions */
function filterString(string) {
  const lowerCased = string.toLowerCase();
  const onlyWithLettersAndNumbers = lowerCased.replace(/[^\w]/g, "");

  return onlyWithLettersAndNumbers;
}

function rearrangeString(string) {
  const arrayOfChars = string.split("");
  const sortedArray = arrayOfChars.sort();
  const sortedString = sortedArray.join("");

  return sortedString;
}

/* Solution 1 */
function anagrams1(stringA, stringB) {
  const newStringA = filterString(stringA);
  const newStringB = filterString(stringB);

  const haveSameSize = newStringA.length === newStringB.length;
  if (!haveSameSize) return false;

  const histogramA = {};
  const histogramB = {};
  for (let i = 0; i < newStringA.length; i++) {
    const charA = newStringA[i];
    const charB = newStringB[i];
    histogramA[charA] = histogramA[charA] + 1 || 1;
    histogramB[charB] = histogramB[charB] + 1 || 1;
  }

  for (let char in histogramA) {
    if (histogramA[char] !== histogramB[char]) {
      return false;
    }
  }

  return true;
}

/* Solution 2 */
function anagrams2(stringA, stringB) {
  const newStringA = filterString(stringA);
  const newStringB = filterString(stringB);

  const haveSameSize = newStringA.length === newStringB.length;
  if (!haveSameSize) return false;

  const charsInA = rearrangeString(newStringA);
  const charsInB = rearrangeString(newStringB);

  return charsInA === charsInB;
}
