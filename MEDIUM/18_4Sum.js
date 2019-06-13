/* 
Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// var fourSum = function(nums, target) {
//   // nums = nums.sort();

//   const seen = {};
//   const quadSums = [];

//   for (let i = 1; i < nums.length; i++) {

//     for (let j = i + 1; j < nums.length; j++) {
//       let sum = nums[i] + nums[j];
//       if (sum in seen) {
//         for (let tuple of seen[sum]) {
//           quadSums.push(tuple.concat([nums[i], nums[j]]).sort());
//         }
        
//       }
//     }

//     for (let k = i - 1; k >= 0; k--) {
//       let diff = target - (nums[i] + nums[k]);
//       if (diff in seen) {
//         seen[diff].push([nums[i], nums[k]]);
//       } else {
//         seen[diff] = [[nums[i], nums[k]]];
//       }
//     }
//   }

//   return quadSums;
// };

var fourSum = function(nums, target) {
  nums = nums.sort((a, b) => a - b);
  const quadSums = [];

  for (let i = 0; i < nums.length - 3; i++) {
    let firstNum = nums[i];
    if (i > 0 && firstNum === nums[i - 1]) continue;
    let l = i + 1;
    let f = nums.length - 1;
    while (l < f - 1) {
      let leftNum = nums[l];
      if (l - i > 1 && leftNum === nums[l - 1]) {
        l++;
        continue;
      }
      let r = l + 1;
      f = nums.length - 1;
      while (r < f) {
        let rightNum = nums[r];
        let finalNum = nums[f];
        if (r - l > 1 && rightNum === nums[r - 1]) {
          r++;
          continue;
        }
        let sum = firstNum + leftNum + rightNum + finalNum;
        if (sum === target) quadSums.push([firstNum, leftNum, rightNum, finalNum]);
        if (sum > target) f--;
        else r++;
      }
      l++;
    }
  }
  return quadSums;
}

// console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([-3,-2,-1,0,0,1,2,3], 0));
