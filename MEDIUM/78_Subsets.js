/* 
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 // O(2^N * N) TIME | O(2^N * N) SPACE, ITERATIVE APPROACH
// var subsets = function(nums) {
//   const sets = [[]];
//   for (let n of nums) {
//     let length = sets.length;
//     for (let i = 0; i < length; i++) {
//       let currentSubset = sets[i];
//       sets.push(currentSubset.concat(n));
//     }
//   }
//   return sets;
// };

//RECURSIVE

var helper = function(currentSet, nums, sets) {
  sets.push(currentSet);

  if (!nums.length) {
    return;
  } else {
    for (let j = 0; j < nums.length; j++) {
      helper(currentSet.concat([nums[j]]), nums.slice(j + 1), sets);
    }
  }
}

var subsets = function(nums) {
  let sets = [];

  for (let i = 0; i < nums.length; i++) {
    helper([nums[i]], nums.slice(i + 1), sets);
  }

  sets.push([]);
  return sets;
}





console.log(subsets([1,2,3]));