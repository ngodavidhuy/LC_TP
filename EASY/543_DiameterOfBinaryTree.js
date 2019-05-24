/* 
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree 
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.
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

let test1 = new TreeNode(3);
test1.left = new TreeNode(9);
test1.right = new TreeNode(20);
test1.right.left = new TreeNode(15);
test1.right.right = new TreeNode(7);
test1.right.right.left = new TreeNode(50);
test1.right.right.right = new TreeNode(51);

// function diameterOfBinaryTree(root) {
//   return helper(root, maxHeightAndDiameter = [0, 0])[1];
// };

// function helper(node, maxHeightAndDiameter) {
//   if (!node) return [0, 0];
//   let leftSubtree = helper(node.left, maxHeightAndDiameter);
//   let rightSubtree = helper(node.right, maxHeightAndDiameter);
//   return [
//     1 + Math.max(leftSubtree[0], rightSubtree[0]),
//     Math.max(maxHeightAndDiameter[1], leftSubtree[0] + rightSubtree[0])
//   ]
// }

var diameterOfBinaryTree = function(root) {
  let diameter = 0;
  
  function dfs(root) {
      if (!root) return 0;
      let left = dfs(root.left);
      let right = dfs(root.right);
      diameter = Math.max(diameter, left + right);
      return 1 + Math.max(left, right);
  }
  
  dfs(root);
  
  return diameter;
};


console.log(diameterOfBinaryTree(test1));
