/* 
Problem:
Given 2 sorted arrays, create a function that
merges them into another array and return it 
sorted.

Assumptions:
- Input is always a pair of arrays with letters

Edge cases:
- When the input isn't an array
- The array has items that aren't numbers

Examples:
const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];
should return [0, 3, 4, 4, 6, 30, 31];
-----
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];
should return true
*/

// Naive solution:
/* 
Append the second array to the end of first one,
then to sort the new array, take each of its items
and loop through the rest to check if there is one smaller

Time complexity: O(a+2b)
Space complexity: O(1)

const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];
merged = [4, 6, 30, 0, 3, 4, 31];
merged = [0, 6, 30, 4, 3, 4, 31];
merged = [0, 3, 30, 6, 4, 4, 31];
merged = [0, 3, 4, 4, 6, 30, 31];

*/

// Implementation 1
function mergeSortedArrays1(arr1, arr2) {
  const merged = [...arr1, ...arr2];
  for (let i = 0; i < merged.length; i++) {
    let minItem = merged[i];
    let minIndex = i;
    for (let j = i + 1; j < merged.length; j++) {
      if (minItem > merged[j]) {
        minItem = merged[j];
        minIndex = j;
      }
    }
    const temp = merged[i];
    merged[i] = minItem;
    merged[minIndex] = temp;
  }
  return merged;
}

// Implementation 2
function mergeSortedArrays2(arr1, arr2) {
  const merged = [...arr1, ...arr2];
  for (let i = 0; i < merged.length; i++) {
    let min = merged[i];
    let minIndex = i;
    for (let j = i + 1; j < merged.length; j++) {
      if (min > merged[j]) {
        merged[minIndex] = merged[j];
        merged[j] = min;
        min = merged[minIndex];
        minIndex = j;
      }
    }
  }
  return merged;
}

// Implementation 2
/* 
Loop over the two arrays simultaneously,
compare their respective items for that index
append the smallest to a new array,
and in the next iteration, skip that number
in the corresponding array
*/

function mergeSortedArrays3(arr1, arr2) {
  const newArray = [];
  const newLength = arr1.length + arr2.length;
  let index1 = 0;
  let index2 = 0;
  let counter = 0;
  while (counter < newLength) {
    if (arr1[index1] < arr2[index2]) {
      newArray.push(arr1[index1]);
      index1++;
    } else if (arr2[index2] <= arr1[index1]) {
      newArray.push(arr2[index2]);
      index2++;
    } else if (!arr1[index1]) {
      newArray.push(arr2[index2]);
      index2++;
    } else {
      newArray.push(arr1[index1]);
      index1++;
    }
    counter++;
  }
  return newArray;
}

const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];
console.log(mergeSortedArrays2(array1, array2));
console.log(mergeSortedArrays2(array2, array1));
