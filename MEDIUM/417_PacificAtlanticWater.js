/* 
Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.

Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.

Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

Note:
The order of returned grid coordinates does not matter.
Both m and n are less than 150.
Example:

Given the following 5x5 matrix:

  Pacific ~   ~   ~   ~   ~ 
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * Atlantic

Return:

[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).
*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

 //DFS
 function pacificAtlantic(matrix) {
  let homogeneousFlow = [];
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) return homogeneousFlow;
  let N = matrix.length, M = matrix[0].length;

  let pacific = Array.from(new Array(N), () => new Array(M).fill(false));
  let atlantic = Array.from(new Array(N), () => new Array(M).fill(false));

  for (let i = 0; i < N; i++) {
    dfs(matrix, pacific, -Infinity, i, 0);
    dfs(matrix, atlantic, -Infinity, i, M - 1);
  }

  for (let i = 0; i < M; i++) {
    dfs(matrix, pacific, -Infinity, 0, i);
    dfs(matrix, atlantic, -Infinity, N - 1, i);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (pacific[i][j] && atlantic[i][j]) homogeneousFlow.push([i, j]);
    }
  }

  return homogeneousFlow;
 }

 function dfs(matrix, visited, height, i, j) {
  let N = matrix.length, M = matrix[0].length;

  // IF WATER CAN REACH THIS POINT, ONE OF ITS SURROUNDING COORDIANTES NEEDS TO BE LARGER, RECEIVE NOT TAKE
  if (i < 0 || i >= N || j < 0 || j >= M || visited[i][j] || matrix[i][j] < height) return;
  visited[i][j] = true;
  dfs(matrix, visited, matrix[i][j], i - 1, j);
  dfs(matrix, visited, matrix[i][j], i + 1, j);
  dfs(matrix, visited, matrix[i][j], i, j - 1)
  dfs(matrix, visited, matrix[i][j], i, j + 1);
}


//BFS

function pacificAtlantic(matrix) {
  let homogeneousFlow = [];
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) return coordinates;
  let N = matrix.length, M = matrix[0].length;
  let pacific = Array.from(new Array(N), () => new Array(M).fill(false));
  let atlantic = Array.from(new Array(N), () => new Array(M).fill(false));
  let pQueue = [];
  let aQueue = [];
  for (let i = 0; i < N; i++) {
    pQueue.push([i, 0]);
    aQueue.push([i, M - 1]);
    pacific[i][0] = true;
    atlantic[i][M - 1] = true;
  }

  for (let i = 0; i < M; i++) {
    pQueue.push([0, i]);
    aQueue.push([N - 1, i]);
    pacific[0][i] = true;
    atlantic[N - 1][i] = true;
  }

  bfs(matrix, pQueue, pacific);
  bfs(matrix, aQueue, atlantic);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (pacific[i][j] && atlantic[i][j]) homogeneousFlow.push([i, j]);
    }
  }

  return homogeneousFlow;
}

function bfs(matrix, queue, visited, directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
  let N = matrix.length, M = matrix[0].length;

  while (queue.length) {
    let current = queue.shift();
    for (let d of directions) {
      let x = current[0] + d[0];
      let y = current[1] + d[1];
      if (x < 0 || x >= N || y < 0 || y >= M || visited[x][y] || matrix[x][y] < matrix[current[0]][current[1]]) continue;
      visited[x][y] = true;
      queue.push([x, y]);
    }
    
  }
}

let matrix = [
  [1,2,2,3,5],
  [3,2,3,4,4],
  [2,4,5,3,1],
  [6,7,1,4,5],
  [5,1,1,2,4]
];

console.log(pacificAtlantic(matrix));

// console.log(dfs(matrix, Array.from(new Array(5), () => new Array(5).fill(false)), -Infinity, 0, 0));








































// var pacificAtlantic = function(matrix) {
//   let homogeneousFlow = [];
//   let flowsPacific, flowsAtlantic;

//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       flowsPacific = (i === 0 || j === 0) ? true : isPacific(matrix, i, j, matrix[i][j], explored = new Map());
//       flowsAtlantic = (i === matrix.length - 1 || j === matrix[0].length - 1) ? true : isAtlantic(matrix, i, j, matrix[i][j], explored = new Map());
//       if (flowsPacific && flowsAtlantic) homogeneousFlow.push([i, j]);
//     }
//   }

//   return homogeneousFlow;
// };

// function isPacific(matrix, i , j, waterHeight, explored) {
//   if (i < 0 || j < 0) return true;
//   if (i >= matrix.length || j >= matrix[0].length || matrix[i][j] > waterHeight) return false;

//   let coordinates = `${i,j}`
//   if (explored.has(coordinates)) return false;
//   explored.set(coordinates, true);

//   return isPacific(matrix, i + 1, j, matrix[i][j], explored) || isPacific(matrix, i - 1, j, matrix[i][j], explored) || isPacific(matrix, i, j + 1, matrix[i][j], explored) || isPacific(matrix, i, j - 1, matrix[i][j], explored);
// }

// function isAtlantic(matrix, i, j, waterHeight, explored) {
//   if (i >= matrix.length || j >= matrix[0].length) return true;
//   if (i < 0 || j < 0 || matrix[i][j] > waterHeight) return false;

//   let coordinates = `${i},${j}`
//   if (explored.has(coordinates)) {
//     return;
//   } else {
//     explored.set(coordinates, true);
//   }

//   return isAtlantic(matrix, i + 1, j, matrix[i][j], explored) || isAtlantic(matrix, i - 1, j, matrix[i][j], explored) || isAtlantic(matrix, i, j + 1, matrix[i][j], explored) || isAtlantic(matrix, i, j - 1, matrix[i][j], explored);
// }

// let matrix = [
//   [1,2,2,3,5],
//   [3,2,3,4,4],
//   [2,4,5,3,1],
//   [6,7,1,4,5],
//   [5,1,1,2,4]
// ];

// let matrix2 = [
//   [1,2,3],
//   [8,9,4],
//   [7,6,5]
// ];

// console.log(isAtlantic(matrix, 0, 1, 2, new Map()));

// function isPacific(matrix, i , j, waterHeight) {
  
//   let checkTop = exploreTop(matrix, i - 1, j, waterHeight);
//   let checkLeft = exploreLeft(matrix, i, j - 1, waterHeight)
  
//   return checkTop || checkLeft ? true : false;
// }





// console.log(isPacific(matrix, 3,3,4));
// console.log(isPacific(matrix, 3,4,5));

// console.log(isAtlantic(matrix, 3,3,4));
// console.log(isAtlantic(matrix, 3,4,5));
// console.log(isPacific(matrix, 1, 3, 4));
// console.log(explore(matrix, 1, 4, 4, 'PACIFIC'));
// console.log(isAtlantic(matrix, 1, 4, 4));
// console.log(pacificAtlantic(matrix))


