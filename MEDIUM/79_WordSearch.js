/* 
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (!board.length || !board[0].length) return false;

  let trie = new Trie();
  trie.add(word);
  let visited = Array.from(new Array(board.length), () => new Array(board[0].length).fill(false));
  let wasFound = false;

  let explore = function (i, j, board, trieNode, visited) {
    if (visited[i][j] || wasFound) return;
    const letter = board[i][j];
    if (!(letter in trieNode)) return;

    visited[i][j] = true;

    trieNode = trieNode[letter];
    if ("*" in trieNode) {
      wasFound = true;
      return;
    }

    const neighbors = getNeighbors(i, j ,board);

    for (let n of neighbors) {
      explore(n[0], n[1], board, trieNode, visited);
    }

    visited[i][j] = false;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        explore(i, j, board, trie.root, visited)
      }
    }
  }

  return wasFound;
};

function getNeighbors(i, j, board) {
  let neighbors = [];
  if (i > 0) neighbors.push([i - 1, j]);
  if (i < board.length - 1) neighbors.push([i + 1, j]);
  if (j > 0) neighbors.push([i, j - 1]);
  if (j < board[0].length - 1) neighbors.push([i, j + 1]);
  return neighbors;
}


class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = "*";
  }

  add(word) {
    let current = this.root;
    for(let letter of word) {
      if (!(letter in current)) current[letter] = {};
      current = current[letter];
    }
    current[this.endSymbol] = word;
  }
}

let board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];


console.log(exist(board, "SEE"));
console.log(exist(board, "ABCCED"));
console.log(exist(board, "ABCB"));