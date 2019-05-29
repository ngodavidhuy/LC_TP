/* 
A string S of lowercase letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

Example 1:
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
Note:

S will have length in range [1, 500].
S will consist of lowercase letters ('a' to 'z') only.
*/

/**
 * @param {string} S
 * @return {number[]}
 */

 // O(N) TIME | O(N) SPACE
// var partitionLabels = function(S) {
//     let hT = {};
//     let results = [];

//     for (let i = 0; i < S.length; i++) {
//       if (!hT[S[i]]) {
//         hT[S[i]] = [i, i];
//       } else {
//         hT[S[i]][1] = i;
//       }
//     }

//     for (let char in hT) {
//       let lastIndex = results.length - 1;
//       if (lastIndex < 0) {
//         results.push(hT[char]);
//       } else if (results[lastIndex][1] < hT[char][0]) {
//         results.push(hT[char]);
//       } else if (results[lastIndex][1] < hT[char][1]) {
//         results[lastIndex][1] = hT[char][1];
//       }
//     }
    
//     return results.map((partition) => {
//       return partition[1] - partition[0] + 1;
//     });
// };

function partitionLabels(S) {
  if (S === null || !S.length) return null;

  let partitions = [];
  let dict = new Array(26);

  for (let i = 0; i < S.length; i++) {
    dict[S.charCodeAt(i) - 97] = i;
  }

  let start = 0, end = 0;
  for (let i = 0; i < S.length; i++) {
    end = Math.max(end, dict[S.charCodeAt(i) - 97]);
    if (end === i) {
      partitions.push(end - start + 1);
      start = end + 1;
    }
  }

  return partitions;
}

console.log(partitionLabels('abccaddbeffezy'));
// console.log(partitionLabels('yzeffebddaccba'));

/* 
TIME COMPLEXITY:

  O(2n)
  input string has varying length.


SPACE COMPLEXITY:
  O(n) dependent on input.

*/
