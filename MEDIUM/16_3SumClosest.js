/* 
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => a - b);
  let sum = nums[0] + nums[1] + nums[nums.length - 1];
  let minDiff = Math.abs(target - sum);
  let left, right;

  for (let i = 0; i < nums.length - 2; i++) {
    left = i + 1;
    right = nums.length - 1;

    while (left < right) {
      let current = nums[i] + nums[left] + nums[right];
      let diff = Math.abs(target - current);

      if (diff < minDiff) {
        minDiff = diff;
        sum = current;
      }

      current > target ? right-- : left++;
    }
  }

  return sum;
};

console.log(threeSumClosest([-1,2,1,-4], 1))