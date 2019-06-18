/* 
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/

var missingNumber = function(nums) {
  if (nums.length === 1) {
    if (nums[0] === 0) return 1;
    else return 0;
  }

  let actualTotal = 0;
  let max = -1;

  for (let n of nums) {
    actualTotal += n;
    max = Math.max(max, n);
  }

  if (nums.length > max) return nums.length;

  let expectedTotal = 0;

  for (let i = 1; i <= max; i++) {
    expectedTotal += i;
  }

  return expectedTotal - actualTotal;
}

console.log(missingNumber([0]));
console.log(missingNumber([1]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
console.log(missingNumber([3,0,1]));
console.log(missingNumber([0,1]))