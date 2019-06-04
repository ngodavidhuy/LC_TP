/* 
Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

Example:

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
Note:
You may assume that all words are consist of lowercase letters a-z.
*/

/**
 * Initialize your data structure here.
 */
/**
 * Initialize your data structure here.
 */

var TrieNode = function() {
  this.children = {};
  this.isWord = false;
}

var WordDictionary = function() {
  this.root = new TrieNode();
};

WordDictionary.prototype.addWord = function(word) {
  let current = this.root;
  for (let char of word) {
    if (!current.children[char]) {
      current.children[char] = new TrieNode();
    }
    current = current.children[char];
  }
  current.isWord = true;
};

WordDictionary.prototype.search = function(word) {

  var match = function(node, level) {
    
    if (!node || (level === word.length && !node.isWord)) return false;
    if (level === word.length && node.isWord) return true;

    if (word[level] === '.') {
      for (let char in node.children) {
        if (match(node.children[char], level + 1)) {
          return true;
        }
      }
      return false;
    }

    return match(node.children[word[level]], level + 1);
  }

  return match(this.root, 0);
};


 let test = new WordDictionary();
test.addWord("a")
test.addWord("ab");
 console.log(test.search("a."));
 console.log(test.search('ab'));
 console.log(test.search('.a'));
 console.log(test.search('.b'));
 console.log(test.search('ab.'));
 console.log(test.search('.'));
 console.log(test.search('..'));
//  console.log(test.root.children.b.children.a.children.d.children);
//  test.addWord("dad");
//  test.addWord("mad");
// console.log(test.root.children.a.children.b);

