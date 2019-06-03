/* 
Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42
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

function maxPathSum(root) {
  const [_, maxPathSum] = [...findMaxSums(root)];
  return maxPathSum;
};

function findMaxSums(tree) {
  if (!tree) return [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

  const [leftMaxSumAsBranch, leftMaxPathSum] = findMaxSums(tree.left);
  const [rightMaxSumAsBranch, rightMaxPathSum] = findMaxSums(tree.right);
  const maxSumAsChildBranch = Math.max(leftMaxSumAsBranch, rightMaxSumAsBranch);

  const { val } = tree;

  const maxSumAsBranch = Math.max(maxSumAsChildBranch + val, val);
  const maxSumThroughRoot = Math.max(maxSumAsBranch, leftMaxSumAsBranch + val + rightMaxSumAsBranch);
  const maxPathSum = Math.max(maxSumThroughRoot, leftMaxPathSum, rightMaxPathSum);

  return [maxSumAsBranch, maxPathSum];
} 

let test2 = new TreeNode(-3);

let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.right.left = new TreeNode(6);
tree.left.right = new TreeNode(5);
tree.right.right = new TreeNode(7);

console.log(maxPathSum(tree));
console.log(maxPathSum(test2));