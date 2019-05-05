/**
 * @param {number[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
  for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
        let orange = grid[r][c];
        if (orange === 2) {
          if (r + 1 < grid.length) expandRotting(2, r + 1, c, grid);
          if (r - 1 >= 0) expandRotting(2, r - 1, c, grid);
          if (c + 1 < grid[0].length) expandRotting(2, r, c + 1, grid);
          if (c - 1 >= 0) expandRotting(2, r, c - 1, grid);
        }
      }
  }
  
  return evalPostRotting(grid, max = 0)
};

function expandRotting(prevOrange, r, c, grid) {
  let orange = grid[r][c];
  if (orange === 0 || orange === 2) return;
  if (orange === 1 || prevOrange < orange) {
    grid[r][c] = prevOrange + 1;
  } else {
    return;
  }

  if (r + 1 < grid.length) expandRotting(grid[r][c], r + 1, c, grid);
  if (r - 1 >= 0) expandRotting(grid[r][c], r - 1, c, grid);
  if (c + 1 < grid[0].length) expandRotting(grid[r][c], r, c + 1, grid);
  if (c - 1 >= 0) expandRotting(grid[r][c], r, c - 1, grid);
}

function evalPostRotting(grid, max) {
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      let current = grid[r][c];
      if (current === 0) continue;
      else if (current === 1) return -1;
      else if (current > 2) max = Math.max(current, max);
    }
  }

  return max > 0 ? max - 2 : 0;
}

console.log(orangesRotting([
  [2,1,1],
  [1,1,0],
  [0,1,1]
]));

console.log(orangesRotting([
  [2,1,1,1],
  [0,1,1,0],
  [0,0,1,2]
]));