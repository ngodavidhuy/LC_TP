/* 
Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.
*/

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = {};
  this.endSymbol = "*";
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let current = this.root;
  for (let char of word) {
    if (!current[char]) current[char] = {};
    current = current[char];
  }
  current[this.endSymbol] = word;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let current = this.root;
  for (let char of word) {
    if (!current[char]) return false;
    current = current[char];
  }

  return current[this.endSymbol] === word;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let current = this.root;
    for (let char of prefix) {
      if (!current[char]) return false;
      current = current[char];
    }

    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

 let obj = new Trie();

 obj.insert('david');
 console.log(obj.search('david'));
 console.log(obj.startsWith('dav'));

 console.log(obj.root.d.a.v.i.d)