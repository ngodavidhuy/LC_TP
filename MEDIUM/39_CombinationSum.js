/* 
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  if (!candidates || !candidates.length || typeof target !== 'number') return null;
  let combos = [];
  findCombos(candidates, [], combos, target, 0);
  return combos;
};

var findCombos = function(nums, buffer, combos, remainder, startIdx) {
  if (remainder < 0)  return;
  if (remainder === 0) {
    combos.push(buffer.slice());
    return;
  }

  for (let i = startIdx; i < nums.length; i++) {
    buffer.push(nums[i]);
    findCombos(nums, buffer, combos, remainder - nums[i], i);
    buffer.pop();
  }
}

console.log(combinationSum([2,3,6,7], 7));

