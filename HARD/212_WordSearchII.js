/* 
Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

 

Example:

Input: 
board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
words = ["oath","pea","eat","rain"]

Output: ["eat","oath"]
 

Note:

All inputs are consist of lowercase letters a-z.
The values of words are distinct.

*/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

 // O(WS + NM * 4^S) TIME, WS = time to build Trie, MN to iterate through Matrix
 // O(WS + MN) SPACE, where W is # of words && S is longest word for Trie, and MN is for auxiliary matrix
var findWords = function(board, words) {
  let wordBank = createWordBank(words);
  let visited = board.map(row => row.map(letter => false));
  let found = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let char = board[i][j];
      if (wordBank.root[char]) {
        explore(i, j, board, wordBank.root, visited, found);
      }
    }
  }

  return Object.keys(found);
};

function explore(i, j, board, trieNode, visited, found) {
  if (visited[i][j]) return;
  const letter = board[i][j];
  if (!(letter in trieNode)) return;
  visited[i][j] = true;
  trieNode = trieNode[letter];
  if ("*" in trieNode) found[trieNode["*"]] = true;
  const neighbors = getNeighbors(i, j, board);
  for (let n of neighbors) {
    explore(n[0], n[1], board, trieNode, visited, found);
  }
  visited[i][j] = false;
}

function getNeighbors(i, j, board) {
  const neighbors = [];
  if (j > 0) neighbors.push([i, j - 1]); 
  if (j < board[0].length - 1) neighbors.push([i, j + 1]);
  if (i > 0) neighbors.push([i - 1, j]);
  if (i < board.length - 1) neighbors.push([i + 1, j]);
  return neighbors;
}

function createWordBank(words) {
  let wordBank = new Trie();

  for (let w of words) {
    wordBank.addWord(w);
  }

  return wordBank;
}

class Trie {
  constructor() {
    this.root = {}
    this.endSymbol = "*"
  }

  addWord(word) {
    let current = this.root;
    for (let char of word) {
      if (!current[char]) {
        current[char] = {}
      }
      current = current[char];
    }
    current[this.endSymbol] = word;
  }
}


console.log(findWords([
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
], ["oath","pea","eat","rain"]));