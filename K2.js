/* 
***Given an array of integers, return the largest contiguous sum. Do not include any negative number in the sum.
inupt: [3, 4, -7, 5, 0]
output: 7

Kartheek then asked me to change the solution so that, if given an array of all negative integers, we would return the greatest rather than zero (which would've been the answer under the description originally presented).
input: [-7, -4, -1, -2]
output: -1

After that, Sunny asked me to explain, at a high level, how I would implement a simple form that takes a first name and a last name with a React component.
*/

function largestContiguousSum(nums) {
  if (!nums || !nums.length) return null;
  let sum = 0, max = 0, maxSeen = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    maxSeen = Math.max(maxSeen, nums[i]);

    if (nums[i] < 0) {
      sum = 0;
      continue;
    } else {
      sum += nums[i];
    }

    max = Math.max(max, sum);
  }

  return max === 0 ? maxSeen : max;
}

// console.log(largestContiguousSum([3,4,-7,5,0]));
// console.log(largestContiguousSum([-7,-4,-1,-2]));

var productExceptSelf = function(nums) {
  let output = [1];
  for (let i = 1; i < nums.length; i++) {
      output[i] = nums[i - 1] * output[i - 1];
  }
  
  let right = nums[nums.length - 1];
  
  for (let i = nums.length - 2; i >= 0; i--) {
      output[i] = output[i] * right;
      right = nums[i] * right;
  }
  
  return output;
};

console.log(productExceptSelf([1]))