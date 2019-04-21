/* 
Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.

 

Example 1:

Input: [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
 

Note:

2 <= A.length <= 20000
A.length % 2 == 0
0 <= A[i] <= 1000
*/

// 

// var sortArrayByParityII = function(A) {
//   for (let i = 0; i < A.length - 1; i++) {
//     if (i % 2 === 0) {
//       if (A[i] % 2 === 0) {
//         continue;
//       } else {
//         for (let j = i + 1; j < A.length; j++) {
//           if (A[j] % 2 === 0) {
//             let temp = A[i];
//             A[i] = A[j];
//             A[j] = temp;
//             break;
//           }
//         }
//       }
//     } else {
//       if (A[i] % 2 !== 0) {
//         continue;
//       } else {
//         for (let j = i + 1; j < A.length; j++) {
//           if (A[j] % 2 !== 0) {
//            let temp = A[i];
//             A[i] = A[j];
//             A[j] = temp;
//             break;
//             break;
//           }
//         }
//       }
//     }
//   }
//   return A;
// };

const sortArrayByParityII = function(A) {
  let output = new Array(A.length);
  let even = 0;
  let odd = 1;

  for (let n of A) {
    if (n % 2 === 0) {
      output[even] = n;
      even += 2;
    } else {
      output[odd] = n;
      odd += 2;
    }
  }

  return output;
}

/* 
TIME COMPLEXITY:

  O(N^2) for the first
  O(N) for the second


SPACE COMPLEXITY:
  O(1) for the first
  O(N) for the second

*/

console.log(sortArrayByParityII([4,2,5,7]));