/* 
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

function permute(nums) {
  let buffer = new Array(nums.length);
  let isInBuffer = new Array(nums.length).fill(false);
  let results = [];
  getPermutations(nums, buffer, 0, isInBuffer, results);
  return results;
}

function getPermutations(nums, buffer, bufferIdx, isInBuffer, results) {
  if (bufferIdx === buffer.length) {
    results.push(buffer.slice());
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (!isInBuffer[i]) {
      buffer[bufferIdx] = nums[i];
      isInBuffer[i] = true;
      getPermutations(nums, buffer, bufferIdx + 1, isInBuffer, results);
      isInBuffer[i] = false;
    }
  }
}

console.log(permute([1,2,3]))