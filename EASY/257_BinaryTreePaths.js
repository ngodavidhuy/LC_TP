/* 
Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3
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
 * @return {string[]}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function binaryTreePaths(root) {
  if (!root) return [];
  let allPaths = [];
  let path = [];
  explore(root, path, allPaths);
  return allPaths;
};

function explore(node, path, allPaths) {
  path.push(node.val);
  if (node.left) explore(node.left, path, allPaths);
  if (node.right) explore(node.right, path, allPaths);
  if (!node.left && !node.right) allPaths.push(path.join('->'));
  path.pop();
}

let test1 = new TreeNode(3);
test1.left = new TreeNode(9);
test1.right = new TreeNode(20);
test1.right.left = new TreeNode(15);
test1.right.right = new TreeNode(7);

console.log(binaryTreePaths(test1));