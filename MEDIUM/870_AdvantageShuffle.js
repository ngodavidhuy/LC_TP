/* 
Given two arrays A and B of equal size, the advantage of A with respect to B is the number of indices i for which A[i] > B[i].

Return any permutation of A that maximizes its advantage with respect to B.

 

Example 1:

Input: A = [2,7,11,15], B = [1,10,4,11]
Output: [2,11,7,15]
Example 2:

Input: A = [12,24,8,32], B = [13,25,32,11]
Output: [24,32,8,12]
 

Note:

1 <= A.length = B.length <= 10000
0 <= A[i] <= 10^9
0 <= B[i] <= 10^9
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */

var advantageCount = function(A, B) {
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => a - b);
  let results = new Array(A.length);

  let first = 0;
  let last = results.length - 1;

  while (A.length && B.length) {
    let aNum = A.shift();
    let bNum = B.shift();

    if (aNum > bNum) {
      results[first] = aNum;
      first++;
    } else {
      results[last] = aNum;
      last--;
      B.unshift(bNum);
      B.pop();
    }

    console.log(first, last)
  }

  return results;
};








// console.log(advantageCount([2,7,11,15], [1,10,4,11]));

console.log(advantageCount([12,24,8,32], [13,25,32,11]))

