/* 
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let islands = 0;

  let markIslandsSeen = (x, y) => {
    grid[x][y] = '2';
    if (grid[x - 1] !== undefined && grid[x - 1][y] !== undefined && grid[x - 1][y] === '1') { markIslandsSeen(x - 1, y); }
    if (grid[x + 1] !== undefined && grid[x + 1][y] !== undefined && grid[x + 1][y] === '1') { markIslandsSeen(x + 1, y); }
    if (grid[x] !== undefined && grid[x][y - 1] !== undefined && grid[x][y - 1] === '1') { markIslandsSeen(x, y - 1); }
    if (grid[x] !== undefined && grid[x][y + 1] !== undefined && grid[x][y + 1] === '1') { markIslandsSeen(x, y + 1); }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '0' || grid[i][j] === '2') {
        continue;
      } else if (grid[i][j] === '1') {
        islands++;
        markIslandsSeen(i, j);
      }
    }
  }
  return islands;
};

// console.log(numIslands([]));

// console.log(numIslands([[1]]));

// console.log(numIslands([[0]]));

// console.log(numIslands([
//   [1,0],
//   [0,1]
// ]));

console.log(numIslands([
  ['1','1','1','1','0'],
  ['1','1','0','1','0'],
  ['1','1','0','0','0'],
  ['0','0','0','0','0']
]));

console.log(numIslands([
  ['1','1','0','0','0'],
  ['1','1','0','0','0'],
  ['0','0','1','0','0'],
  ['0','0','0','1','1']
]));

/* 
TIME COMPLEXITY:

  O(MxN) Depends on how large the matrix is


SPACE COMPLEXITY:
  O(1) Only original array is mutated

*/