/* 
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (!nums || !nums.length) return [-1, -1];

  let range = [-1, -1];
  let left = 0, right = nums.length - 1, mid;

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    let num = nums[mid];
    if (num === target && (mid === 0 || nums[mid - 1] < num)) {
      range[0] = mid;
      break;
    } else if (num < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (range[0] === -1) {
    return range;
  } else {
    left = 0, right = nums.length - 1;
  }

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    let num = nums[mid];
    if (num === target && (mid === nums.length - 1 || nums[mid + 1] > num)) {
      range[1] = mid;
      break;
    } else if (num <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return range;
};

console.log(searchRange([5,7,7,8,8,10], 8));
console.log(searchRange([5,7,7,8,8,10], 6));
console.log(searchRange([1,1,2,2,2,2,3], 2));
console.log(searchRange([1,1,2,2,2,2,3], 3));
console.log(searchRange([1,1,2,2,2,2,3], 1));
console.log(searchRange([1,1,2,2,2,2,3], 4));