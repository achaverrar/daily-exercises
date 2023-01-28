/* INSERTION SORTING ALGORITHM */
/* 
 Here we sort the array as we go.
 We loop over the array, taking each item and comparing it to 
 those that preceed it. In case it's smaller than the last item
 in the sorted portion of the array, we compare it to the rest 
 of its predecessors, until we find one that's smaller or until 
 we reach the first item, and then save the index in a variable. 
 We use that index to insert our newly sorted item and we also 
 remove it from its original position. 
*/

// Time Complexity: O(n^2)
// Space Complexity: O(1)
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const lastSorted = array[i - 1];
    const toBeSorted = array[i];
    if (toBeSorted < lastSorted) {
      let insertionIndex = i - 1;

      // Update insertionIndex until we find a sorted
      // item that's less than toBeSorted or we reach
      // the first item in the array
      for (let j = insertionIndex; j >= 0; j--) {
        const curSorted = array[j];
        if (toBeSorted > curSorted) {
          break;
        }
        insertionIndex = j;
      }

      // Remove toBeSorted from its original position
      array.splice(i, 1);

      // Insert toBeSorted into its corresponding position
      array.splice(insertionIndex, 0, toBeSorted);
    }
  }
}

// Testing values
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
insertionSort(numbers); // [ 0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]
console.log(numbers);
