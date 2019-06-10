/* 
94. Binary Tree Inorder Traversal
Medium

1621

71

Favorite

Share
Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var inorderTraversal = function(root) {
  if (!root) return [];
  let stack = [root];
  let seen = new Map();
  let output = [];

  while (stack.length) {
    let node = stack.pop();
    if (!node.left && !node.right) {
      output.push(node.val);
    } else {
      if (seen.has(node)) {
        output.push(node.val);
        if (node.right) {
          stack.push(node.right);
        }
      } else {
        seen.set(node, true);
        stack.push(node);
        if (node.left) {
          stack.push(node.left);
        }
      }
    }
  }

  return output;
};

let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(7);
tree.left.right.left = new TreeNode(8);
tree.left.right.right = new TreeNode(9);

let tree2 = new TreeNode(1);
tree2.right = new TreeNode(2);
tree2.right.left = new TreeNode(3);

console.log(inorderTraversal(tree2)); 