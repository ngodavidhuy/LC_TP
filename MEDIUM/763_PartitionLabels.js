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
var partitionLabels = function(S) {
    let hT = {};
    let results = [];

    for (let char of S) {
      if (!hT[char]) {
        let min = S.indexOf(char);
        let max = S.lastIndexOf(char);
        hT[char] = {
          min,
          max
        }
      }
    }

    for (let char in hT) {
      let lastIndex = results.length - 1;
      if (lastIndex < 0) {
        results.push([
          hT[char]['min'],
          hT[char]['max']
        ]);
      } else if (results[lastIndex][1] < hT[char]['min']) {
        results.push([
          hT[char]['min'],
          hT[char]['max']
        ]);
      } else if (results[lastIndex][1] < hT[char]['max']) {
        results[lastIndex][1] = hT[char]['max'];
      }
    }

    return results.map((partition) => {
      return partition[1] - partition[0] + 1;
    });
};

console.log(partitionLabels('abccaddbeffezy'));

/* 
TIME COMPLEXITY:

  O(2n)
  input string has varying length.


SPACE COMPLEXITY:
  O(n) dependent on input.

*/
