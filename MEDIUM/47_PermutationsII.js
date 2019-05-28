/* 
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permuteUnique(nums) {
  let isInBuffer = new Array(nums.length).fill(false);
  let buffer = new Array(nums.length);
  let results = {};
  generatePermutations(nums, buffer, 0, isInBuffer, results)
  return Object.values(results);
};

function generatePermutations(arr, buffer, bufferIdx, isInBuffer, results) {
  if (bufferIdx === buffer.length) {
    if (!results[buffer]) results[buffer] = buffer.slice();
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!isInBuffer[i]) {
      buffer[bufferIdx] = arr[i];
      isInBuffer[i] = true;
      generatePermutations(arr, buffer, bufferIdx + 1, isInBuffer, results);
      isInBuffer[i] = false;
    }
  }
}

console.log(permuteUnique([1,1,2]))