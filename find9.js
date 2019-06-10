function findPath(grid) {
  let visited = grid.map(row => row.map(letter => false));
  let minSteps = -1;

  function pathExists(i, j, visited, steps) {
    if (visited[i][j]) return;
    if (grid[i][j] === 9) {
      if (minSteps !== -1 && steps < minSteps || minSteps === -1) {
        minSteps = steps;
        return;
      }
    }


    visited[i][j] = true;

    const neighbors = getNeighbors(grid, i, j);
    
    for (let n of neighbors) {
      if (!visited[n[0]][n[1]]) {
        pathExists(n[0], n[1], visited, steps + 1);
      }
    }

    visited[i][j] = false;

  }

  pathExists(0, 0, visited, 0);
  return minSteps
}

function getNeighbors(grid, i, j) {
  const neighbors = [];
  if(j > 0 && grid[i][j - 1] !== 0) neighbors.push([i, j - 1]);
  if (i < grid.length - 1 && grid[i + 1][j] !== 0) neighbors.push([i + 1, j]);
  if (j < grid[0].length - 1 && grid[i][j + 1] !== 0) neighbors.push([i, j + 1]);
  if (i > 0 && grid[i - 1][j] !== 0) neighbors.push([i - 1, j]);
  return neighbors;
}

let board5 = [
  [1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,9],
];

let amazonBoard = [
  [1,0,0],
  [1,0,0],
  [1,9,1]
]

let board1 = [
  [1,1,1,1,1,1],
  [1,0,0,0,0,1],
  [1,0,1,1,1,1],
  [1,0,1,0,9,1],
  [1,1,1,0,0,0],
];

let board2 = [
  [1,1,1,1,1,0,0,0],
  [1,0,0,0,1,0,0,0],
  [1,0,0,0,0,0,0,0],
  [1,0,0,0,9,1,1,1],
  [1,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1],
];

// let board5 = [
//   [1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,9],
// ];

let board3 = [
  [1,1],
  [0,9]
]

let board4 = [
  [1,0],
  [0,9]
]

console.log(findPath(amazonBoard))
console.log(findPath(board1))
console.log(findPath(board2))
// console.log(findPath(board5));
console.log(findPath(board3))
console.log(findPath(board4))


