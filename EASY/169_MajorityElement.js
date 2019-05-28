/* 
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
  if (!nums.length) return null;
  let candidate = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count++;
    } else {
      if (count > 0) {
        count--;
      } else {
        candidate = nums[i], count = 1;
      }
    }
  }

  count = 0;

  for (let n of nums) {
    if (n === candidate) count++;
  }

  return count > nums.length / 2 ? candidate : null;
};

console.log(majorityElement([1]));
console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));
console.log(majorityElement([2,2,1,1,1,2,2,1]));

