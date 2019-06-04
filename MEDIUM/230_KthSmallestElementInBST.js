/* 
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note: 
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?
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
 * @param {number} k
 * @return {number}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var kthSmallest = function(root, k) {
  let kthSmallest = null;
  let count = 0;

  var traverse = function(node) {
    if (node.left) traverse(node.left);
    if (count === k) number = node.val
    if (node.right) traverse(node.right);
  }

  traverse(root);
  return kthSmallest;
};

function kthSmallest(root, k) {
  let stack = [];

  while (root !== null) {
    stack.push(root);
    root = root.left;
  }

  while (k !== 0) {
    let node = stack.pop();
    k--;
    if (k === 0) return node.val;
    let right = node.right;
    while (right !== null) {
      stack.push(right);
      right = right.left;
    }
  }

  return null;
}



let testTree = new TreeNode(2);
testTree.left = new TreeNode(1);
testTree.right = new TreeNode(3);

console.log(kthSmallest(testTree, 3));