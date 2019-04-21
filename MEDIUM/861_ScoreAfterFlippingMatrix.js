/* 
We have a two dimensional matrix A where each value is 0 or 1.

A move consists of choosing any row or column, and toggling each value in that row or column: changing all 0s to 1s, and all 1s to 0s.

After making any number of moves, every row of this matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.

Return the highest possible score.

 

Example 1:

Input: [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
Output: 39
Explanation:
Toggled to [[1,1,1,1],[1,0,0,1],[1,1,1,1]].
0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
 

Note:

1 <= A.length <= 20
1 <= A[0].length <= 20
A[i][j] is 0 or 1.
*/

/**
 * @param {number[][]} A
 * @return {number}
 */

var matrixScore = function(A) {
    let toggleCol = function(index) {
      for (let i = 0; i < A.length; i++) {
        A[i][index] = A[i][index] ^ 1;
      }
    }

    let toggleRow = function(index) {
      for (let i = 0; i < A[index].length; i++) {
        A[index][i] = A[index][i] ^ 1;
      }
    }
    
    for (let col = 0; col < A[0].length; col++) {
      let colCount = 0;
      for (let row = 0; row < A.length; row++) {
        if (col === 0 && A[row][col] === 0) {
          toggleRow(row);
          colCount = A.length;
        } else {
          colCount += A[row][col];
        }
      }
      if (colCount < A.length / 2) {
        toggleCol(col);
      }
    }

    return A.reduce((sum, row) => {
      return sum += parseInt(row.join(''), 2);
    }, 0);
};

console.log(matrixScore([
  [1,0,1],
  [0,1,0]
]));