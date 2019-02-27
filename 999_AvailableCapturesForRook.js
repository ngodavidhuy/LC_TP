/* 
On an 8 x 8 chessboard, there is one white rook.  There also may be empty squares, white bishops, and black pawns.  These are given as characters 'R', '.', 'B', and 'p' respectively. Uppercase characters represent white pieces, and lowercase characters represent black pieces.

The rook moves as in the rules of Chess: it chooses one of four cardinal directions (north, east, west, and south), then moves in that direction until it chooses to stop, reaches the edge of the board, or captures an opposite colored pawn by moving to the same square it occupies.  Also, rooks cannot move into the same square as other friendly bishops.

Return the number of pawns the rook can capture in one move.

 

Example 1:



Input: [
  [".",".",".",".",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  [".",".",".","R",".",".",".","p"],
  [".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".","."]
]
Output: 3
Explanation: 
In this example the rook is able to capture all the pawns.
Example 2:



Input: [
  [".",".",".",".",".",".",".","."],
  [".","p","p","p","p","p",".","."],
  [".","p","p","B","p","p",".","."],
  [".","p","B","R","B","p",".","."],
  [".","p","p","B","p","p",".","."],
  [".","p","p","p","p","p",".","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".","."]
]
Output: 0
Explanation: 
Bishops are blocking the rook to capture any pawn.
Example 3:



Input: [
  [".",".",".",".",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  ["p","p",".","R",".","p","B","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".","B",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  [".",".",".",".",".",".",".","."]
]
Output: 3
Explanation: 
The rook can capture the pawns at positions b5, d6 and f5.
 

Note:

board.length == board[i].length == 8
board[i][j] is either 'R', '.', 'B', or 'p'
There is exactly one cell with board[i][j] == 'R'

*/

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  let captures = 0;
  let rookPosition = null;

  for (let row = 0; row < 8; row++) {
    let col = board[row].indexOf("R");
    if (col !== -1) { rookPosition = [row, col]; } 
  }

  if (rookPosition.length) {
    let rookRow = board[rookPosition[0]];
    let rookCol = board.map((row) => {
      return row[rookPosition[1]];
    });
    addToCapture(rookRow.slice(0, rookPosition[1]).reverse());
    addToCapture(rookRow.slice(rookPosition[1] + 1));
    addToCapture(rookCol.slice(0, rookPosition[0]).reverse());
    addToCapture(rookCol.slice(rookPosition[0] + 1));
  }

  function addToCapture(arr) {
    if (arr.length) {
      let bishop = arr.indexOf("B");
      let pawn = arr.indexOf("p");
      if (bishop > -1 && pawn > -1) {
        captures += (bishop > pawn) ? 1 : 0;
      } else if (pawn > -1) {
        captures += 1;
      }
    }
  }
  return captures;
};

console.log(numRookCaptures([
  [".",".",".",".",".",".",".","."],
  [".",".","B","B","B","B","B","."],
  [".","p","B","p","p","p","B","p"],
  [".","p","B","p","R","p","B","p"],
  [".","p","B","p","p","p","B","p"],
  [".",".","B","B","B","B","B","."],
  [".",".",".","p","p","p",".","."],
  [".",".",".",".",".",".",".","."]
]))
