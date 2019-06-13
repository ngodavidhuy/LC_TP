/* 
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6 
*/

/**
 * @param {number[]} height
 * @return {number}
 */

// O(N) TIME | O (N) SPACE
// var trap = function(heights) {
//   if (!heights || !heights.length) return 0;
//   let maxes = new Array(heights.length).fill(0);
//   let water = 0;

//   for (let i = 1; i < maxes.length; i++) {
//     maxes[i] = Math.max(maxes[i - 1], heights[i - 1]);
//   }

//   let rightMax = 0;

//   for (let i = maxes.length - 2; i >= 0; i--) {
//     rightMax = Math.max(rightMax, heights[i + 1]);
//     let minHeight = Math.min(rightMax, maxes[i]);
//     if (minHeight > heights[i]) {
//       water += minHeight - heights[i];
//     }
//   }

//   return water;
// };

function trap (A) {
  let left = 0, right = A.length - 1;
  let maxLeft = 0, maxRight = 0;
  let sum = 0;
  
  while(left <= right) {
    if(A[left] <= A[right]) {
      if(A[left] >= maxLeft) {
          maxLeft = A[left];
      } else {
          sum += maxLeft - A[left];
      }
      left++;
    } else {
      if(A[right] >= maxRight) {
          maxRight = A[right];
      } else {
          sum += maxRight - A[right];
      }
      right--;
    }
  
  }

  return sum;
}


console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));