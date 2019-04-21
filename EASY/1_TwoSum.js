/* 
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hashTable = nums.reduce((hT, num, idx) => {
    hT[num] = idx;
    return hT;
  }, {});

  for (let i = 0; i < nums.length; i++) {
    let addend = target - nums[i];
    if (hashTable[addend] !== undefined && 
        hashTable[addend] !== i) {
      return [i, hashTable[addend]];
    } 
  }

  return null;
};

// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([2,5,5,11], 10));

/* 
TIME COMPLEXITY:

  O(n)
  We traverse the list containing N elements twice, using a hashtable,
  the lookup time becomes O(1), so it evaluates to linear time


SPACE COMPLEXITY:
  O(n)
  The additional space required depends on the number of items stored
  in the hT, which stores exactly N elements
*/