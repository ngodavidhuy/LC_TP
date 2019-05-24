/* 
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
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

function maxDepth(root) {
  if (!root) return 0;
  return height(root, 0, -1);
};

function height(node, pDepth, maxDepth) {
  let nDepth = pDepth + 1;
  if (nDepth > maxDepth) maxDepth = nDepth;
  if (node.left) maxDepth = height(node.left, nDepth, maxDepth);
  if (node.right) maxDepth = height(node.right, nDepth, maxDepth);
  return maxDepth;
}

let test1 = new TreeNode(3);
test1.left = new TreeNode(9);
test1.right = new TreeNode(20);
test1.right.left = new TreeNode(15);
test1.right.right = new TreeNode(7);

console.log(maxDepth(test1));


//OR

function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};


