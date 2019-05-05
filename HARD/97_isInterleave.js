/* 
Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

Example 1:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
Example 2:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;

  let grid = [];

  for (let i = 0; i <= s2.length; i++) {
    let row = [];
    for (let j = 0; j <= s1.length; j++) {
      if (i === 0 && j === 0) {
        row.push(true);
      } else if (i === 0 && row[j - 1]) {
        row.push(s1[j - 1] === s3[j - 1]);
      } else if (j === 0 && grid[i - 1][0]) {
        row.push(s2[i - 1] === s3[i - 1]);
      } else {
        row.push(false);
      }
    }
    grid.push(row);
  }

  for (let r = 1; r <= s2.length; r++) {
    for (let c = 1; c <= s1.length; c++) {
      if ((grid[r - 1][c] && s2[r - 1] === s3[r + c - 1]) || 
      (grid[r][c - 1] && s1[c - 1] === s3[r + c - 1])) {
         grid[r][c] = true;
      }
    }
  }

  return grid[s2.length][s1.length];
};

console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"))
console.log(isInterleave("a", "", "a"))
console.log(isInterleave("", "", "a"))
console.log(isInterleave("db", "b", "cbb"))
console.log(isInterleave("aabd", "abdc", "aabdbadc"))