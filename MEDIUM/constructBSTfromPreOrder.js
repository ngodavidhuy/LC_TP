/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var bstFromPreorder = function(arr) {
  if (!arr.length || !arr) return null;
  let leftRightDivisionIdx = arr.length;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= arr[0]) {
      leftRightDivisionIdx = i;
      break;
    }
  }

  let root = new TreeNode(arr[0]);
  root.left = bstFromPreorder(arr.slice(1, leftRightDivisionIdx));
  root.right = bstFromPreorder(arr.slice(leftRightDivisionIdx));

  return root;
};

console.log(bstFromPreorder([10,5,3,7,15,13,12,11,14,17]));