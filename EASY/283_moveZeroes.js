/* 
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//   if (!nums || nums.length === 0) return;

//   let f = 0;
//   let s = 1;

//   while (s < nums.length) {
//     let firstNum = nums[f];
//     let secondNum = nums[s];

//     if (firstNum === 0 && secondNum !== 0) {
//       swap(f, s, nums);
//       f++, s++;
//     } else if (f < s - 1 && firstNum !== 0) {
//       f++;
//     } else {
//       s++;
//     }
//   }

//   return nums;
// };

// function swap(i, j, arr) {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
// }

var moveZeroes = function(nums) {
  if (!nums || nums.length === 0) return;

  let current = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[current];
      nums[current++] = nums[i];
      nums[i] = temp;
    } 
  }

  return nums;
};



console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([1,3,12,0,0]));

console.log(moveZeroes([0,1,0,0,1,1,0,1,0,1,0]));