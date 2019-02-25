/* 
A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.

 

Example 1:


Input: [1,1,1,1,1,null,1]
Output: true
Example 2:


Input: [2,2,2,5,2]
Output: false
 

Note:

The number of nodes in the given tree will be in the range [1, 100].
Each node's value will be an integer in the range [0, 99].
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  let queue = [root.left, root.right];
  while(queue.length) {
    let node = queue.shift();
    if (!node) continue;
    if (node.val !== root.val) { return false; }
    if (node.left) { queue.push(node.left); }
    if (node.right) { queue.push(node.right); }
  }
  return true;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let testTree = new TreeNode(0);
testTree.left = new TreeNode(0);
testTree.right = new TreeNode(0);
testTree.right.right = new TreeNode(1);

/* 
TIME COMPLEXITY:

  O(N)


SPACE COMPLEXITY:
  O(N)

*/