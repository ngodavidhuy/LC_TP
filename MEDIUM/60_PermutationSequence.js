/* 
The set [1,2,3,...,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note:

Given n will be between 1 and 9 inclusive.
Given k will be between 1 and n! inclusive.
Example 1:

Input: n = 3, k = 3
Output: "213"
Example 2:

Input: n = 4, k = 9
Output: "2314"
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let arr = Array.from(new Array(n), (val, i) => i + 1);
  let buffer = new Array(n);
  let isInBuffer = new Array(n).fill(false);
  let results = [];
  generatePermutation(arr, buffer, 0, isInBuffer, k, 0, results);
  return results[k - 1].join("");
};

function generatePermutation(arr, buffer, bufferIdx, isInBuffer, k, counter, results) {
  if (bufferIdx === buffer.length) {
    results.push(buffer.slice());
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!isInBuffer[i]) {
      buffer[bufferIdx] = arr[i];
      isInBuffer[i] = true;
      generatePermutation(arr, buffer, bufferIdx + 1, isInBuffer, k, counter, results);
      isInBuffer[i] = false;
    }
  }
}

console.log(getPermutation(4,9))