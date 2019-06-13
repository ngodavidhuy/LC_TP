/* 
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]

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
 * @return {number[][]}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var zigzagLevelOrder = function(root) {
  let queue = [];
  if (root) queue.push(root);
  let results = [];
  let zigzag = false;

  while (queue.length) {
    let level = [];
    for (let i = queue.length; i > 0; i--) {
      let node = queue.shift();
      if (zigzag) {
        level.unshift(node.val);
      } else {
        level.push(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    results.push(level);
    zigzag = !zigzag;
  }

  return results;
};

let tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

let tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);
tree2.left.left = new TreeNode(4);
tree2.right.right = new TreeNode(5);

console.log(zigzagLevelOrder(tree2));

