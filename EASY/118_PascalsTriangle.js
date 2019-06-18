/* 
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (!numRows) return [];
  let triangle = [[1]];
  let count = 1;

  while (count < numRows) {
    let row = [];
    let prevRow = triangle[count - 1];
    for (let i = 0; i <= count; i++) {
      if (i === 0 || i === count) {
        row.push(1);
      } else {
        row.push(prevRow[i - 1] + prevRow[i]);
      }
    }
    triangle.push(row);
    count++;
  }

  return triangle;
};

console.log(generate(5))