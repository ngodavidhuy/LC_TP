/* 
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 7 x 3 grid. How many possible unique paths are there?

Note: m and n will be at most 100.

Example 1:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
Example 2:

Input: m = 7, n = 3
Output: 28
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

 // TOO SLOW
// var uniquePaths = function(m, n) {
//   function makeBoard(m, n) {
//     let board = [];
//     for (let i = 0; i < n; i++) {
//       board[i] = [];
//       for (let j = 0; j < m; j++) {
//         if (i === n - 1 && j === m - 1) {
//           board[i][j] = 1;
//         } else {
//           board[i][j] = 0;
//         }
//       }
//     }
//     return board;
//   }

//   let paths = 0;
//   let board = makeBoard(m, n);
//   let determinePath = function(board, x, y) {
//     if (board[x][y] === 1) {
//       paths++;
//     }
//     if (board[x][y + 1] !== undefined) {
//       determinePath(board, x, y + 1);
//     }

//     if (board[x + 1] !== undefined) {
//       determinePath(board, x + 1, y);
//     }
//   }

//   determinePath(board, 0, 0);
//   return paths;
// };

var uniquePaths = function(m, n) {
  let grid = Array(m).fill(Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }

  return grid[m - 1][n - 1];
}

console.log(uniquePaths(2, 2));

/* 
TIME COMPLEXITY:

  O(N^2)


SPACE COMPLEXITY:
  O(MxN)

*/