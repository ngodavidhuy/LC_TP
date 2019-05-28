/* 
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

function search(nums, target) {
  if (!nums || !nums.length) return -1;

  let minIdx = findMin(nums);
  if (nums[minIdx] === target) return minIdx;
  let start = nums[nums.length - 1] >= target ? minIdx : 0;
  let end = start === minIdx ? nums.length - 1 : minIdx - 1;
  let mid;

  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

function findMin(nums) {
  let low = 0, high = nums.length - 1, right = nums[nums.length - 1], mid;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (nums[mid] <= right && (mid === 0 || nums[mid] < nums[mid - 1])) {
      return mid;
    } else if (nums[mid] > right) {
      low++;
    } else {
      high--;
    }
  }
};

console.log(search([3,4,5,1,2], 3));
console.log(search([3,4,5,1,2], 4));
console.log(search([3,4,5,1,2], 5));
console.log(search([3,4,5,1,2], 1));
console.log(search([3,4,5,1,2], 2));

console.log(search([1,3], 3));