/* 
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Note: The algorithm should run in linear time and in O(1) space.

Example 1:

Input: [3,2,3]
Output: [3]
Example 2:

Input: [1,1,1,3,3,2,2,2]
Output: [1,2]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var majorityElement = function(nums, k) {
    if (!nums.length) return [];
    
    let mElements = [];
    let candidates = new Map();
    for (let n of nums) {
      if (candidates.has(n)) candidates.set(n, candidates.get(n) + 1);
      else candidates.set(n, 1);

      if (k > 3) {
        for (let [c] of candidates) {
          candidates.set(c, candidates.get(c) - 1);
          if (candidates.get(c) === 0) candidates.delete(c);
        }
      }
    }

    for (let [c] of candidates) candidates.set(c, 0);

    for (let n of nums) {
      if (candidates.has(n)) candidates.set(n, candidates.get(n) + 1);
    }

    for (let [c, count] of candidates) {
      if (count > nums.length / k) mElements.push(c);
    }

    return mElements;
};

console.log(majorityElement([1,1,1,3,3,2,2,2], 3));
console.log(majorityElement([1,2,3,4], 3));

console.log(majorityElement([1,1,1,3,3,2,2,2], 2));
console.log(majorityElement([1,2,3,4], 2));

console.log(majorityElement([1], 2));
console.log(majorityElement([3,2,3], 2));
console.log(majorityElement([2,2,1,1,1,2,2], 2));
console.log(majorityElement([2,2,1,1,1,2,2,1], 2));