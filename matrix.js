/* 
Diagonal matrix rotation

Given a matrix m that is split diagonally from both minor and major axis' and an integer n, 
where n represents the amount of times to rotate the matrix, return the rotated matrix after n rotations,
excluding elements falling on the diagonal axis. 



The matrix will always be an mxm matrix. 
The matrix will always be of odd length
You will always receive a valid input.

Ex.

m = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25],
]

k = 1

Output matrix: 

[
  [1,16,11,6,5],
  [22,7,12,9,10],
  [23,18,13,8,3],
  [24,17,14,19,4],
  [21,20,15,10,25]
]
*/

function diagonalRotation(matrix, numOfRotations) {
  if (!matrix || !matrix.length || numOfRotations < 1) return matrix;

  for (let n = 0; n < numOfRotations; n++) {
    for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
      let end = matrix.length - i - 1;
      for (let j = i + 1; j <= end - 1; j++) {
        let top = matrix[i][j];
        matrix[i][j] = matrix[end - j + i][i];
        matrix[end - j + i][i] = matrix[end][end - j + i];
        matrix[end][end - j + i] = matrix[j][end];
        matrix[j][end] = top;
      }
    }
  }

  return matrix;
}

console.log(diagonalRotation([
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25],
  ], 2));

  console.log(3 % 7);