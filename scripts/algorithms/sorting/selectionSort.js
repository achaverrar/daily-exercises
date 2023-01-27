/* SELECTION SOFTING ALGORITHM */
/* 
This function sorts the array from the lowest to
 the highest indexes. For that, it sets a reference
 on the i-th item and its value as the minimumSoFar
 and its index.

 These references are updated in case a smaller value 
 is found while looping over the rest of the array.
 Once the iteration is over, we swap the i-th item with
 the minimum found, using the reference to its index.
 We repeat the process for the (i+1)-th position and so on.
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
function selectionSort(array) {
  const totalItems = array.length;
  for (let i = 0; i < totalItems; i++) {
    let index1 = i;
    let minSoFar = array[index1];
    for (let j = i + 1; j < totalItems; j++) {
      if (minSoFar > array[j]) {
        minSoFar = array[j];
        index1 = j;
      }
    }
    swapItems(array, i, index1);
  }
}

// Testing values
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
selectionSort(numbers); // [ 0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]
console.log(numbers);
