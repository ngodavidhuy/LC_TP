/* 
The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

Determine the maximum amount of money the thief can rob tonight without alerting the police.

Example 1:

Input: [3,2,3,null,3,null,1]

     3
    / \
   2   3
    \   \ 
     3   1

Output: 7 
Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
Example 2:

Input: [3,4,5,1,3,null,1]

     3
    / \
   4   5
  / \   \ 
 1   3   1

Output: 9
Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.
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

var rob = function(root) {
  let heights = {
    'evenHeights': 0,
    'oddHeights': 0
  };

  let helper = function(node, height) {
    if (!node) return;
    if (height % 2 === 0) {
      heights['evenHeights'] += node.val;
    } else {
      heights['oddHeights'] += node.val;
    }

    if (node.left) {
      helper(node.left, height + 1);
    }

    if (node.right) {
      helper(node.right, height + 1);
    }
  }

  helper(root, 0);
  return Math.max(...Object.values(heights));
};

let testTree = new TreeNode(3);
testTree.left = new TreeNode(2);
testTree.right = new TreeNode(3);
testTree.left.right = new TreeNode(3);
testTree.right.right = new TreeNode(1);
console.log(rob(testTree));

