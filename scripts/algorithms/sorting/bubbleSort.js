/* BUBBLE SORTING ALGORITHM */
/* 
 Loop over the array at most n times, taking pairs of consecutive items
 and swapping their positions whenever the greatest number
 has a lower index.
 Note: by the end of the i-th iteration, the n-ith item has
 taken its final position in the sorted array, so items from
 the n-ith position and on can be skipped
*/

// Time Complexity: O(1)
// Space Complexity: O(1)
function swapItems(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

// Time Complexity: O(n^2)
// Space Complexity: O(1)
function bubbleSort(array) {
  const totalItems = array.length;
  const swapped = false;
  for (let i = 0; i < totalItems; i++) {
    for (let j = 0; j < totalItems - i - 1; j++) {
      if (array[j + 1] < array[j]) {
        swapItems(array, j, j + 1);
        swapped = true;
      }
    }
    // Prevents further looping if the original array was already sorted
    if (!swapped) break;
  }
}

// Testing values
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
bubbleSort(numbers); // [ 0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]
console.log(numbers);
