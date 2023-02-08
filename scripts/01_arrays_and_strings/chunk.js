/* 
Problem:
Given an array and chunk size, divide the array into many 
subarrays where each subarray is of length size.

Assumptions:
- Input is always an array

Examples:
chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
---
chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
---
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
---
chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
---
chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]] 
*/

/* Solution 1 */
/* 
 Loop over the array, and store its items in a chunk (another array)
 in every iteration check if the size of the chunk is the required in
 the arguments of the function. In case it is, we push the whole
 chunk into the array we'll return as an answer, and "empty" the chunk.
 In case there are remaining items in the chunk after the looping is over,
 push the chunk in the array that will be returned.
 */
function chunk1(array, size) {
  const arrayWithChunks = [];
  let chunk = [];
  for (let item of array) {
    chunk.push(item);
    if (chunk.length === size) {
      arrayWithChunks.push(chunk);
      chunk = [];
    }
  }
  if (chunk.length) {
    arrayWithChunks.push(chunk);
  }
  return arrayWithChunks;
}

/* Solution 2 */
function chunk2(array, size) {
  const arrayWithChunks = [];
  for (let item of array) {
    const lastChunk = arrayWithChunks[arrayWithChunks.length - 1];
    if (!lastChunk || lastChunk.length === size) {
      arrayWithChunks.push([item]);
    } else {
      lastChunk.push(item);
    }
  }
  return arrayWithChunks;
}

/* Solution 3 */
function chunk3(array, size) {
  const arrayWithChunks = [];
  let indexStart = 0;
  while (indexStart < array.length) {
    const chunk = array.slice(indexStart, indexStart + size);
    arrayWithChunks.push(chunk);
    indexStart += size;
  }
  return arrayWithChunks;
}
