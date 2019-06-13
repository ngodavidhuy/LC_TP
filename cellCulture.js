
var cellCultureAfterKDays = function(cells, N) {
  let memo = new Map();

  let left = cells[0];

  while (N > 0) {
    let prevCell = null;
    cells[1]
    for (let i = 0; i < cells.length; i++) {
      prevCell === cells[i + 1] ? 
        (prevCell = cells[i], cells[i] = 0) :
        (prevCell = cells[i], cells[i] = 1);
    }

    left = cells[0], right = cells
    N--;
  }

  return cells;
};

// console.log(cellCultureAfterKDays([1,0,1,1], 2));
console.log(cellCultureAfterKDays([0,1,0,1,0,1,0,1], 3));

