/* Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
] */

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

function levelOrder(root) {
  let map = {};
  dfsVisit(root, map, 0);
  return Object.values(map); 
};

function dfsVisit(node, map, level) {
  if (!node) return;

  if (!map[level]) {
    map[level] = [node.val];
  } else {
    map[level].push(node.val);
  }

  dfsVisit(node.left, map, level + 1);
  dfsVisit(node.right, map, level + 1);
}

let test = new TreeNode(1);
test.left = new TreeNode(2);
test.right = new TreeNode(3);

console.log(levelOrder(test))