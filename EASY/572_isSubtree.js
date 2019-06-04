/* 
Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4 
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var isSubtree = function(s, t) {
  if (!s || !t) return false;
  const stack = [s];
  
  while (stack.length) {
    let node = stack.pop();
    if (node.val === t.val) {
      if (isSameTree(node, t)) return true;
    }

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  
  return false;
};

var isSameTree = function(p, q) {
  if (!p && !q) return true;
  if (!p && q || p && !q || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

let test = new TreeNode(3);
test.left = new TreeNode(4);
test.right = new TreeNode(5);
test.left.left = new TreeNode(1);
test.left.right = new TreeNode(2);
test.left.right.left = new TreeNode(3);
test.left.right.left.left = new TreeNode(4);
test.left.right.left.left.left = new TreeNode(1);
test.left.right.left.left.right = new TreeNode(2);

let other = new TreeNode(4);
other.left = new TreeNode(1);
other.right = new TreeNode(2);

console.log(isSubtree(test, other));