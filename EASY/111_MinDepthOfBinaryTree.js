/* 
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.
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
 * @return {number}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function minDepth(root) {
  if (!root) return 0;
  return helper(root, 0, Infinity);
};

function helper(node, pDepth, minDepth) {
  let nDepth = pDepth + 1;
  if (node.left !== null) minDepth = helper(node.left, nDepth, minDepth);
  if (node.right !== null) minDepth = helper(node.right, nDepth, minDepth);
  if (node.left === null && node.right === null) {
    if (nDepth < minDepth) minDepth = nDepth;
  }
  return minDepth;
}

let test1 = new TreeNode(3);
test1.left = new TreeNode(9);
test1.right = new TreeNode(20);
test1.right.left = new TreeNode(15);
test1.right.right = new TreeNode(7);

let test2 = new TreeNode(3);
test2.right = new TreeNode(20);

console.log(minDepth(test1));
console.log(minDepth(test2));


