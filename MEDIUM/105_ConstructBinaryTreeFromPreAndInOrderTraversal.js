/* 
Given preorder and inOrder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inOrder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preOrder
 * @param {number[]} inOrder
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var buildTree = function(preOrder, inOrder) {
  return construct(preOrder, 0, preOrder.length - 1, inOrder, 0, inOrder.length - 1);
};

function construct(preOrder, preStart, preEnd, inOrder, inStart, inEnd) {
  if (preStart > preEnd || inStart > inEnd) return null;
  let nodeVal = preOrder[preStart];
  let node = new TreeNode(nodeVal);
  let k = inOrder.indexOf(nodeVal);
  node.left = construct(preOrder, preStart + 1, preStart + (k - inStart), inOrder, inStart, k - 1);
  node.right = construct(preOrder, preStart + (k - inStart) + 1, preEnd, inOrder, k + 1, inEnd);
  return node;
}

