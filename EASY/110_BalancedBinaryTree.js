/* 
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:

Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
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
 * @param {TreeNode} root
 * @return {boolean}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let test1 = new TreeNode(3);
test1.left = new TreeNode(9);
test1.right = new TreeNode(20);
test1.right.left = new TreeNode(15);
test1.right.right = new TreeNode(7);
test1.right.right.left = new TreeNode(50);
test1.right.right.right = new TreeNode(51);

let test2 = new TreeNode(3);
test2.right = new TreeNode(9);
test2.left = new TreeNode(20);
test2.left.right = new TreeNode(15);
test2.left.left = new TreeNode(7);
test2.left.left.right = new TreeNode(50);
test2.left.left.left = new TreeNode(51);

function isBalanced(root) {
  return helper(root) !== -1;
}

function helper(node) {
  if (node === null) return 0;
  const leftHeight = helper(node.left);
  const rightHeight = helper(node.right);
  if (leftHeight === -1 || rightHeight === -1) return -1;
  if (Math.abs(leftHeight - rightHeight) > 1) return -1;
  return 1 + Math.max(leftHeight, rightHeight);
}

console.log(isBalanced(test1));
console.log(isBalanced(test2));